import { createFileRoute, Link } from "@tanstack/react-router";
import { policySections } from "@/lib/content";
import { usePrefs } from "@/lib/preferences";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/policies")({
  head: () =>
    pageHead(
      "Payment and refunds — ODIN / odincalm0",
      "Draft payment, cancellation, and no-refund position for ODIN / odincalm0. Not legal advice and subject to owner review.",
      "/policies",
    ),
  component: PoliciesPage,
});

function PoliciesPage() {
  const { t, lang } = usePrefs();
  return (
    <section className="section">
      <div className="wrap stack" style={{ maxWidth: "74ch" }}>
        <p className="crumbs">
          <Link to="/">ODIN</Link>
          <span aria-hidden="true">/</span>
          <span>{t.footer.policies}</span>
        </p>
        <p className="kicker">{t.policies.eyebrow}</p>
        <h1>{t.policies.title}</h1>
        <div className="notice">
          <strong>{t.policies.eyebrow}</strong>
          <p className="meta">{t.policies.banner}</p>
        </div>
        {policySections.map((section) => (
          <article key={section.title.en}>
            <h2>{section.title[lang]}</h2>
            <p className="meta">{section.body[lang]}</p>
          </article>
        ))}
        <p>
          <Link className="btn btn-primary" to="/contact">
            {t.cta.quote}
          </Link>
        </p>
      </div>
    </section>
  );
}
