import { createFileRoute, Link } from "@tanstack/react-router";
import { usePrefs } from "@/lib/preferences";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/$")({
  head: () => pageHead("Page not found — ODIN", "That page is not on the ODIN / odincalm0 site.", "/404"),
  component: Missing,
});

function Missing() {
  const { t } = usePrefs();
  return (
    <section className="section">
      <div className="wrap stack">
        <h1>{t.notFound.title}</h1>
        <p className="lede">{t.notFound.body}</p>
        <p>
          <Link className="btn btn-primary" to="/">
            {t.notFound.home}
          </Link>
        </p>
      </div>
    </section>
  );
}
