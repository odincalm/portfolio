import { createFileRoute, Link } from "@tanstack/react-router";
import { privacySections } from "@/lib/content";
import { usePrefs } from "@/lib/preferences";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy — ODIN / odincalm0",
      "ODIN / odincalm0 does not run analytics or accounts. Language and theme stay in your browser. The enquiry form does not upload your message.",
      "/privacy",
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t, lang } = usePrefs();
  return (
    <section className="section">
      <div className="wrap stack" style={{ maxWidth: "74ch" }}>
        <p className="crumbs">
          <Link to="/">ODIN</Link>
          <span aria-hidden="true">/</span>
          <span>{t.footer.privacy}</span>
        </p>
        <p className="kicker">{t.privacyPage.eyebrow}</p>
        <h1>{t.privacyPage.title}</h1>
        <p className="lede">{t.privacyPage.lede}</p>
        {privacySections.map((section) => (
          <article key={section.title.en}>
            <h2>{section.title[lang]}</h2>
            <p className="meta">{section.body[lang]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
