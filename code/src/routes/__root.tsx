import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Shell } from "@/components/shell";
import { PreferencesProvider, usePrefs } from "@/lib/preferences";
import { site } from "@/lib/site";
import appCss from "../styles.css?url";

const THEME_BOOT = `try{var t=localStorage.getItem("odin-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} / ${site.handle} — Web and Android Developer` },
      { name: "description", content: "ODIN / odincalm0 builds responsive websites, basic Android app screens, and student documents. Quotes in writing. India and international enquiries." },
      { name: "theme-color", content: "#090b10" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Noto+Sans+Devanagari:wght@400;500;600&family=Noto+Serif+Devanagari:wght@500;600&family=Outfit:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Root,
  notFoundComponent: NotFoundOutlet,
});

function Root() {
  return (
    <PreferencesProvider>
      <Document />
    </PreferencesProvider>
  );
}

function Document() {
  const { lang } = usePrefs();
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Shell>
            <Outlet />
          </Shell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFoundOutlet() {
  const { t } = usePrefs();
  return (
    <section className="section">
      <div className="wrap stack">
        <h1>{t.notFound.title}</h1>
        <p className="lede">{t.notFound.body}</p>
        <p>
          <a className="btn btn-primary" href="/">
            {t.notFound.home}
          </a>
        </p>
      </div>
    </section>
  );
}
