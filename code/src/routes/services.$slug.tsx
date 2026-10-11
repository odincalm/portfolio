import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService, projects } from "@/lib/content";
import { usePrefs } from "@/lib/preferences";
import { pageHead, site } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) =>
    pageHead(
      loaderData ? `${loaderData.title.en} — ODIN` : "Service — ODIN",
      loaderData?.summary.en ?? "Service details from ODIN / odincalm0.",
      loaderData ? `/services/${loaderData.slug}` : "/services",
    ),
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  const { t, lang } = usePrefs();
  const related = service.slug === "websites" ? projects : [];
  const quoteText =
    lang === "hi"
      ? `नमस्ते Odin — मुझे इस सेवा का कोट चाहिए: ${service.title.hi}`
      : `Hi Odin — I would like a quote for: ${service.title.en}`;
  const wa = buildWhatsAppUrl(site.whatsappDigits, quoteText);

  return (
    <section className="section">
      <div className="wrap stack">
        <p className="crumbs">
          <Link to="/">ODIN</Link>
          <span aria-hidden="true">/</span>
          <Link to="/services">{t.nav.services}</Link>
          <span aria-hidden="true">/</span>
          <span>{service.title[lang]}</span>
        </p>
        <h1>{service.title[lang]}</h1>
        <p className="lede">{service.summary[lang]}</p>
        <div className="notice">
          <strong>{t.pricing.title}</strong>
          <p className="meta">{t.pricing.body}</p>
        </div>
        <div className="card-grid">
          <article className="card">
            <div className="card-body">
              <h2>{t.serviceUi.deliverables}</h2>
              <ul className="plain-list">
                {service.deliverables[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h2>{t.serviceUi.customers}</h2>
              <p>{service.customers[lang]}</p>
              <h2>{t.serviceUi.inputs}</h2>
              <ul className="plain-list">
                {service.inputs[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
        <article className="card">
          <div className="card-body">
            <h2>{t.serviceUi.process}</h2>
            <ol className="plain-list">
              {service.steps[lang].map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </article>
        <article className="card">
          <div className="card-body">
            <h2>{t.serviceUi.quote}</h2>
            <p>{t.serviceUi.quoteBody}</p>
            <div className="btn-row">
              <Link className="btn btn-primary" to="/contact" search={{ service: service.slug }}>
                {t.cta.quote}
              </Link>
              <a className="btn btn-wa" href={wa} target="_blank" rel="noopener noreferrer">
                WhatsApp
                <span className="sr">({t.cta.newTab})</span>
              </a>
            </div>
          </div>
        </article>
        {related.length > 0 ? (
          <div>
            <h2>{t.serviceUi.related}</h2>
            <ul className="plain-list">
              {related.map((project) => (
                <li key={project.slug}>
                  <Link to="/work/$slug" params={{ slug: project.slug }}>
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="meta">{t.serviceUi.noSamples}</p>
        )}
        <p>
          <Link className="link-ext" to="/services">
            {t.cta.allServices}
          </Link>
        </p>
      </div>
    </section>
  );
}
