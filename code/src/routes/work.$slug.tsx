import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { IconArrow } from "@/components/icons";
import { getProject, projects } from "@/lib/content";
import { usePrefs } from "@/lib/preferences";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) =>
    pageHead(
      loaderData ? `${loaderData.name} — ODIN` : "Work — ODIN",
      loaderData?.summary.en ?? "Project notes from ODIN / odincalm0.",
      loaderData ? `/work/${loaderData.slug}` : "/work",
    ),
  component: CasePage,
});

function CasePage() {
  const project = Route.useLoaderData();
  const { t, lang } = usePrefs();
  const others = projects.filter((item) => item.slug !== project.slug);

  return (
    <section className="section">
      <div className="wrap stack">
        <p className="crumbs">
          <Link to="/">ODIN</Link>
          <span aria-hidden="true">/</span>
          <Link to="/work">{t.nav.work}</Link>
          <span aria-hidden="true">/</span>
          <span>{project.name}</span>
        </p>
        <p className="tag">{t.filters[project.category]}</p>
        <h1>{project.name}</h1>
        <p className="lede">{project.summary[lang]}</p>
        <div className="case-grid">
          <div className="card">
            <div className="card-media">
              {project.image ? (
                <img src={project.image} alt={project.alt[lang]} width={project.imageWidth} height={project.imageHeight} />
              ) : (
                <div className="media-fallback">{project.name}</div>
              )}
            </div>
            <div className="card-body">
              <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener noreferrer">
                {t.caseUi.visit} <IconArrow />
                <span className="sr">({t.cta.newTab})</span>
              </a>
            </div>
          </div>
          <div className="stack">
            <article className="notice">
              <strong>{t.caseUi.status}</strong>
              <p className="meta">{project.status[lang]}</p>
            </article>
            <article>
              <h2>{t.caseUi.visible}</h2>
              <ul className="plain-list">
                {project.points[lang].map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            <p>
              <Link className="link-ext" to="/services/$slug" params={{ slug: "websites" }}>
                {t.nav.services}
              </Link>
            </p>
          </div>
        </div>
        <h2>{t.caseUi.more}</h2>
        <ul className="plain-list">
          {others.map((item) => (
            <li key={item.slug}>
              <Link to="/work/$slug" params={{ slug: item.slug }}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
