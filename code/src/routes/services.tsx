import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/content";
import { usePrefs } from "@/lib/preferences";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      "Services — ODIN / odincalm0",
      "Websites, basic Android UI, student notes, PowerPoint, and PDF or Word formatting. Quotes in INR or a separate international quote.",
      "/services",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  const { t, lang } = usePrefs();
  return (
    <section className="section">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">ODIN</Link>
          <span aria-hidden="true">/</span>
          <span>{t.nav.services}</span>
        </p>
        <div className="section-head">
          <p className="kicker">{t.servicesPage.eyebrow}</p>
          <h1>{t.servicesPage.title}</h1>
          <p className="lede">{t.servicesPage.lede}</p>
        </div>
        <div className="notice" style={{ marginBottom: "1.25rem" }}>
          <strong>{t.pricing.title}</strong>
          <p className="meta">{t.pricing.body}</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link key={service.slug} className="service-link" to="/services/$slug" params={{ slug: service.slug }}>
              <h2 style={{ fontSize: "clamp(1.2rem, 1.05rem + 0.4vw, 1.45rem)" }}>{service.title[lang]}</h2>
              <p>{service.summary[lang]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
