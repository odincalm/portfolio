import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { IconArrow } from "@/components/icons";
import { projects, type ProjectCategory } from "@/lib/content";
import { usePrefs } from "@/lib/preferences";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead(
      "Work — ODIN / odincalm0",
      "Live websites by Nitin Kumar: Nikkblend, Odin, MKS Hair Salon, and the ODIN portfolio.",
      "/work",
    ),
  component: WorkPage,
});

const filters = ["all", "grooming", "product", "portfolio"] as const;

function WorkPage() {
  const { t, lang } = usePrefs();
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const visible = projects.filter((project) => filter === "all" || project.category === (filter as ProjectCategory));

  return (
    <section className="section">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">ODIN</Link>
          <span aria-hidden="true">/</span>
          <span>{t.nav.work}</span>
        </p>
        <div className="section-head">
          <p className="kicker">{t.workPage.eyebrow}</p>
          <h1>{t.workPage.title}</h1>
          <p className="lede">{t.workPage.lede}</p>
        </div>
        <div className="filter-row" role="group" aria-label={t.filters.label}>
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className="btn btn-ghost"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {t.filters[item]}
            </button>
          ))}
        </div>
        {visible.length === 0 ? <p>{t.workPage.empty}</p> : null}
        <div className="card-grid">
          {visible.map((project) => (
            <article className="card" key={project.slug}>
              <div className="card-media">
                {project.image ? (
                  <img src={project.image} alt={project.alt[lang]} width={project.imageWidth} height={project.imageHeight} loading="lazy" />
                ) : (
                  <div className="media-fallback">{project.name}</div>
                )}
              </div>
              <div className="card-body">
                <p className="tag">{t.filters[project.category]}</p>
                <h2>{project.name}</h2>
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
  );
}
