import { createFileRoute, Link } from "@tanstack/react-router";
import { faqs } from "@/lib/content";
import { usePrefs } from "@/lib/preferences";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead(
      "FAQ — ODIN / odincalm0",
      "Answers on services, quotes, international clients, timing, revisions, payment, cancellation, and the owner's no-refund position.",
      "/faq",
    ),
  component: FaqPage,
});

function FaqPage() {
  const { t, lang } = usePrefs();
  return (
    <section className="section">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">ODIN</Link>
          <span aria-hidden="true">/</span>
          <span>{t.nav.faq}</span>
        </p>
        <div className="section-head">
          <p className="kicker">{t.faqPage.eyebrow}</p>
          <h1>{t.faqPage.title}</h1>
          <p className="lede">{t.faqPage.lede}</p>
        </div>
        <div className="faq">
          {faqs.map((item) => (
            <details key={item.q.en}>
              <summary>{item.q[lang]}</summary>
              <p>{item.a[lang]}</p>
            </details>
          ))}
        </div>
        <p style={{ marginTop: "1.2rem" }}>
          <Link className="link-ext" to="/policies">
            {t.footer.policies}
          </Link>
        </p>
      </div>
    </section>
  );
}
