import { Link, useRouterState } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { IconClose, IconMenu, IconMoon, IconSun } from "@/components/icons";
import { usePrefs } from "@/lib/preferences";
import { site } from "@/lib/site";

const links = [
  { to: "/about", key: "about" },
  { to: "/services", key: "services" },
  { to: "/work", key: "work" },
  { to: "/faq", key: "faq" },
  { to: "/contact", key: "contact" },
] as const;

function active(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Shell({ children }: { children: ReactNode }) {
  const { t, lang, setLang, theme, toggleTheme } = usePrefs();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    dialogRef.current?.showModal();
    setMenuOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
    setMenuOpen(false);
  }

  const nextLangLabel = lang === "en" ? t.lang.switchToHi : t.lang.switchToEn;
  const themeLabel = theme === "dark" ? t.theme.toLight : t.theme.toDark;

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link to="/" className="brand">
            <strong>{site.name}</strong>
            <span>{site.handle}</span>
          </Link>
          <nav className="nav-desktop" aria-label={t.nav.primary}>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active(pathname, link.to) ? "page" : undefined}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>
          <div className="header-tools">
            <button
              type="button"
              className="lang-btn"
              aria-label={nextLangLabel}
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
            >
              {lang === "en" ? "हिन्दी" : "EN"}
            </button>
            <button type="button" className="icon-btn" aria-label={themeLabel} onClick={toggleTheme}>
              {theme === "dark" ? <IconSun /> : <IconMoon />}
            </button>
            <button
              type="button"
              className="nav-toggle icon-btn"
              aria-label={menuOpen ? t.nav.close : t.nav.menu}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={openMenu}
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </header>
      <dialog
        id="site-menu"
        ref={dialogRef}
        className="nav-dialog"
        aria-label={t.nav.primary}
        onClose={() => setMenuOpen(false)}
      >
        <div className="dialog-head">
          <strong>{site.name}</strong>
          <button type="button" className="icon-btn" onClick={closeMenu} aria-label={t.nav.close}>
            <IconClose />
          </button>
        </div>
        <nav>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={active(pathname, link.to) ? "page" : undefined}
              onClick={closeMenu}
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </nav>
      </dialog>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <strong>
              {site.name} / {site.handle}
            </strong>
            <p className="meta">{t.footer.note}</p>
          </div>
          <div className="footer-links">
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp <span className="sr">({t.cta.newTab})</span>
            </a>
            <a href={`mailto:${site.email}`}>Email</a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram <span className="sr">({t.cta.newTab})</span>
            </a>
            <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn <span className="sr">({t.cta.newTab})</span>
            </a>
            <Link to="/privacy">{t.footer.privacy}</Link>
            <Link to="/policies">{t.footer.policies}</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
