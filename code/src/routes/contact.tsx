import { createFileRoute, Link } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { usePrefs } from "@/lib/preferences";
import { pageHead, site } from "@/lib/site";

type ContactSearch = { service?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () =>
    pageHead(
      "Contact — ODIN / odincalm0",
      "Contact Nitin Kumar (ODIN / odincalm0) on WhatsApp, email odincalm@proton.me, Instagram, or LinkedIn. The form prepares a message; it does not send it.",
      "/contact",
    ),
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();
  const { t } = usePrefs();
  return (
    <section className="section">
      <div className="wrap">
        <p className="crumbs">
          <Link to="/">ODIN</Link>
          <span aria-hidden="true">/</span>
          <span>{t.nav.contact}</span>
        </p>
        <div className="section-head">
          <p className="kicker">{t.contact.eyebrow}</p>
          <h1>{t.contact.title}</h1>
          <p className="lede">{t.contact.lede}</p>
        </div>
        <div className="contact-layout">
          <div>
            <h2>{t.contact.methods}</h2>
            <div className="contact-methods" style={{ marginTop: "0.8rem" }}>
              <a className="method" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <span>
                  <b>{t.contact.whatsapp}</b>
                  <span>{site.phoneDisplay}</span>
                </span>
              </a>
              <a className="method" href={`mailto:${site.email}`}>
                <span>
                  <b>{t.contact.email}</b>
                  <span>{site.email}</span>
                </span>
              </a>
              <a className="method" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                <span>
                  <b>{t.contact.instagram}</b>
                  <span>{site.instagramHandle}</span>
                </span>
              </a>
              <a className="method" href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <span>
                  <b>{t.contact.linkedin}</b>
                  <span>Nitin Kumar</span>
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h2>{t.contact.formTitle}</h2>
              <p>{t.contact.formLede}</p>
              <EnquiryForm initialService={service} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
