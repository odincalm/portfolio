import { createFileRoute, Link } from "@tanstack/react-router";
import { usePrefs } from "@/lib/preferences";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About — ODIN / odincalm0",
      "Nitin Kumar (ODIN / odincalm0) builds websites, basic Android UI, and student documents. No invented experience claims.",
      "/about",
    ),
  component: About,
});

function About() {
  const { t } = usePrefs();
  return (
    <section className="section">
      <div className="wrap about-grid">
        <div>
          <p className="crumbs">
            <Link to="/">ODIN</Link>
            <span aria-hidden="true">/</span>
            <span>{t.nav.about}</span>
          </p>
          <p className="kicker">{t.about.eyebrow}</p>
          <h1>{t.about.title}</h1>
          <p className="lede">{t.about.lede}</p>
          <div className="stack" style={{ marginTop: "1.5rem" }}>
            {t.about.blocks.map((block) => (
              <article key={block.title}>
                <h2 style={{ fontSize: "var(--text-lg)" }}>{block.title}</h2>
                <p className="meta">{block.body}</p>
              </article>
            ))}
          </div>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/services">
              {t.cta.services}
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              {t.cta.contact}
            </Link>
          </div>
        </div>
        <figure className="figure">
          <img className="portrait-lg" src="/media/portrait.jpg" width={427} height={640} alt={t.about.photoAlt} />
          <figcaption>{t.about.photoCap}</figcaption>
        </figure>
      </div>
    </section>
  );
}
