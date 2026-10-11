import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ui, type Lang } from "@/lib/content";

export type Theme = "dark" | "light";

type Prefs = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (typeof ui)["en"];
};

const PrefsContext = createContext<Prefs | null>(null);

const THEME_COLOR: Record<Theme, string> = {
  dark: "#090b10",
  light: "#f4f2ec",
};

function paintTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLOR[theme]);
  try {
    localStorage.setItem("odin-theme", theme);
  } catch {
    /* private mode */
  }
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const storedLang = localStorage.getItem("odin-lang");
      if (storedLang === "hi" || storedLang === "en") setLangState(storedLang);
    } catch {
      /* ignore */
    }
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Prefs>(
    () => ({
      lang,
      theme,
      t: ui[lang],
      setLang: (next) => {
        setLangState(next);
        try {
          localStorage.setItem("odin-lang", next);
        } catch {
          /* ignore */
        }
      },
      toggleTheme: () => {
        const next: Theme = theme === "light" ? "dark" : "light";
        setTheme(next);
        paintTheme(next);
      },
    }),
    [lang, theme],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs(): Prefs {
  const value = useContext(PrefsContext);
  if (!value) throw new Error("Preferences missing");
  return value;
}
