import { createFileRoute, Link } from "@tanstack/react-router";
import { IconArrow } from "@/components/icons";
import { faqs, personJsonLd, projects, services, ui } from "@/lib/content";
import { usePrefs } from "@/lib/preferences";
import { pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      `${site.name} / ${site.handle} — Web and Android Developer`,
      "Nitin Kumar (ODIN / odincalm0) builds responsive websites, basic Android app screens, and student notes, slides, and formatted documents.",
      "/",
    ),
  component: Home,
});

function Home() {
  const { t, lang } = usePrefs();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <section className="section">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker kicker-literal">{t.hero.kicker}</p>
            <h1>{t.hero.title}</h1>
            <p className="lede">{t.hero.lede}</p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/services">
                {t.cta.services}
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                {t.cta.contact}
              </Link>
            </div>
          </div>
          <aside className="hero-panel">
            <img
              className="portrait"
              src="/media/portrait.jpg"
              width={427}
              height={640}
              alt={ui[lang].about.photoAlt}
            />
            <div>
              <strong>{t.hero.person}</strong>
              <p className="meta">{site.handle}</p>
            </div>
            <ul className="hero-points">
              {t.hero.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="avail">
              <i aria-hidden="true" />
              {t.hero.available}
            </p>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">{t.home.workEyebrow}</p>
            <h2>{t.home.workTitle}</h2>
            <p className="lede">{t.home.workLede}</p>
          </div>
          <div className="card-grid">
            {projects.slice(0, 4).map((project) => (
              <article className="card" key={project.slug}>
                <div className="card-media">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.alt[lang]}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      loading="lazy"
                    />
                  ) : (
                    <div className="media-fallback">{project.name}</div>
                  )}
                </div>
                <div className="card-body">
                  <p className="tag">{t.filters[project.category]}</p>
                  <h3>{project.name}</h3>
                  <p>{project.summary[lang]}</p>
                  <div className="btn-row">
                    <Link className="btn btn-ghost" to="/work/$slug" params={{ slug: project.slug }}>
                      {t.cta.readCase}
                    </Link>
                    <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener noreferrer">
                      {t.cta.openProject} <IconArrow />
                      <span className="sr">({t.cta.newTab})</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">{t.home.servicesEyebrow}</p>
            <h2>{t.home.servicesTitle}</h2>
            <p className="lede">{t.home.servicesLede}</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link key={service.slug} className="service-link" to="/services/$slug" params={{ slug: service.slug }}>
                <h3>{service.title[lang]}</h3>
                <p>{service.summary[lang]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div>
            <p className="kicker">{t.home.processEyebrow}</p>
            <h2>{t.home.processTitle}</h2>
          </div>
          <ol className="steps">
            {t.process.map((step, index) => (
              <li key={step.title}>
                <strong>
                  0{index + 1} {step.title}
                </strong>
                <span>{step.body}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">{t.faqPage.eyebrow}</p>
            <h2>{t.faqPage.title}</h2>
          </div>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q.en}>
                <summary>{item.q[lang]}</summary>
                <p>{item.a[lang]}</p>
              </details>
            ))}
          </div>
          <p style={{ marginTop: "1rem" }}>
            <Link className="link-ext" to="/faq">
              {t.faqPage.title}
            </Link>
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap glass" style={{ padding: "1.4rem" }}>
          <h2>{t.home.closingTitle}</h2>
          <p className="lede">{t.home.closingLede}</p>
          <p className="meta">{t.home.closingNote}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/contact">
              {t.cta.contact}
            </Link>
            <a className="btn btn-wa" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
              <span className="sr">({t.cta.newTab})</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
