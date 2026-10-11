import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  budgetChoices,
  contactMethods,
  validateEnquiry,
  type BudgetChoice,
  type ContactMethod,
  type EnquiryErrors,
  type FieldErrorCode,
} from "@/lib/enquiry";
import { services } from "@/lib/content";
import { usePrefs } from "@/lib/preferences";
import { site } from "@/lib/site";
import { buildEnquiryMessage, buildMailtoUrl, buildWhatsAppUrl } from "@/lib/whatsapp";

type Status = "idle" | "invalid" | "ready" | "copied" | "copy-failed" | "spam";

const fieldOrder = [
  "name",
  "email",
  "country",
  "service",
  "contact",
  "budget",
  "requirements",
  "deadline",
] as const;

export function EnquiryForm({ initialService }: { initialService?: string }) {
  const { t, lang } = usePrefs();
  const formId = useId();
  const mountedAt = useRef(0);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [waUrl, setWaUrl] = useState("");
  const [mailUrl, setMailUrl] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [contact, setContact] = useState<ContactMethod>("whatsapp");
  const [service, setService] = useState(
    initialService && services.some((item) => item.slug === initialService) ? initialService : "",
  );
  const longMessage = waUrl.length > 1800;

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (initialService && services.some((item) => item.slug === initialService)) {
      setService(initialService);
    }
  }, [initialService]);

  function errorText(code: FieldErrorCode | undefined) {
    if (!code) return null;
    return t.errors[code];
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      country: String(form.get("country") ?? ""),
      service: String(form.get("service") ?? ""),
      contact: String(form.get("contact") ?? ""),
      budget: String(form.get("budget") ?? ""),
      requirements: String(form.get("requirements") ?? ""),
      deadline: String(form.get("deadline") ?? ""),
      company: String(form.get("company") ?? ""),
    };

    if (payload.company || Date.now() - mountedAt.current < 1200) {
      setStatus("spam");
      setMessage("");
      return;
    }

    const result = validateEnquiry(payload);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("invalid");
      setMessage("");
      const first = fieldOrder.find((key) => result.errors[key]);
      if (first) {
        document.getElementById(`${formId}-${first}`)?.focus();
      }
      return;
    }

    setErrors({});
    const data = result.data;
    const serviceItem = services.find((item) => item.slug === data.service);
    const serviceLabel = serviceItem ? serviceItem.title[lang] : data.service;
    const budgetLabel = t.budget[data.budget as BudgetChoice];
    const contactLabel = t.contactMethod[data.contact];
    const text = buildEnquiryMessage(t.message.intro, [
      { label: t.message.name, value: data.name },
      { label: t.message.email, value: data.email },
      { label: t.message.country, value: data.country },
      { label: t.message.service, value: serviceLabel },
      { label: t.message.budget, value: budgetLabel },
      { label: t.message.timeline, value: data.deadline },
      { label: t.message.requirements, value: data.requirements },
      { label: t.message.contact, value: contactLabel },
    ]);
    setMessage(text);
    setWaUrl(buildWhatsAppUrl(site.whatsappDigits, text));
    setMailUrl(buildMailtoUrl(site.email, `${t.message.subject} — ${serviceLabel}`, text));
    setProfileUrl(data.contact === "instagram" ? site.instagramUrl : site.linkedinUrl);
    setContact(data.contact);
    setStatus("ready");
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus("copied");
    } catch {
      setStatus("copy-failed");
    }
  }

  const statusText =
    status === "spam"
      ? t.contact.spam
      : status === "invalid"
        ? t.errors.summary
        : status === "copied"
          ? t.contact.copied
          : status === "copy-failed"
            ? t.contact.copyFail
            : status === "ready"
              ? contact === "whatsapp"
                ? t.contact.waExplain
                : contact === "email"
                  ? t.contact.mailExplain
                  : t.contact.socialExplain
              : "";

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>{t.contact.honeypot}</label>
        <input id={`${formId}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      {statusText ? (
        <p className="form-alert" role="alert" data-tone={status === "invalid" || status === "spam" || status === "copy-failed" ? "bad" : "ok"}>
          {statusText}
        </p>
      ) : null}
      <div className="form-grid">
        <Field
          id={`${formId}-name`}
          name="name"
          label={t.fields.name}
          requiredLabel={t.contact.required}
          autoComplete="name"
          error={errorText(errors.name)}
        />
        <Field
          id={`${formId}-email`}
          name="email"
          type="email"
          label={t.fields.email}
          requiredLabel={t.contact.required}
          autoComplete="email"
          error={errorText(errors.email)}
        />
        <Field
          id={`${formId}-country`}
          name="country"
          label={t.fields.country}
          optionalLabel={t.contact.optional}
          autoComplete="country-name"
          error={errorText(errors.country)}
        />
        <div className="field">
          <label htmlFor={`${formId}-service`}>
            {t.fields.service} <span className="req">({t.contact.required})</span>
          </label>
          <select id={`${formId}-service`} name="service" value={service} onChange={(event) => setService(event.target.value)} aria-invalid={errors.service ? true : undefined} aria-describedby={errors.service ? `${formId}-service-error` : undefined}>
            <option value="">{t.fields.choose}</option>
            {services.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title[lang]}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p className="field-error" id={`${formId}-service-error`}>
              {errorText(errors.service)}
            </p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor={`${formId}-contact`}>
            {t.fields.contact} <span className="req">({t.contact.required})</span>
          </label>
          <select id={`${formId}-contact`} name="contact" defaultValue="whatsapp" aria-invalid={errors.contact ? true : undefined} aria-describedby={errors.contact ? `${formId}-contact-error` : undefined}>
            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {t.contactMethod[method]}
              </option>
            ))}
          </select>
          {errors.contact ? (
            <p className="field-error" id={`${formId}-contact-error`}>
              {errorText(errors.contact)}
            </p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor={`${formId}-budget`}>
            {t.fields.budget} <span className="req">({t.contact.required})</span>
          </label>
          <select id={`${formId}-budget`} name="budget" defaultValue="" aria-invalid={errors.budget ? true : undefined} aria-describedby={`${formId}-budget-hint`}>
            <option value="">{t.fields.choose}</option>
            {budgetChoices.map((choice) => (
              <option key={choice} value={choice}>
                {t.budget[choice]}
              </option>
            ))}
          </select>
          <p className="meta" id={`${formId}-budget-hint`}>
            {t.contact.budgetHint}
          </p>
          {errors.budget ? <p className="field-error">{errorText(errors.budget)}</p> : null}
        </div>
        <div className="field wide">
          <label htmlFor={`${formId}-requirements`}>
            {t.fields.requirements} <span className="req">({t.contact.required})</span>
          </label>
          <textarea id={`${formId}-requirements`} name="requirements" aria-invalid={errors.requirements ? true : undefined} aria-describedby={errors.requirements ? `${formId}-requirements-error` : undefined} />
          {errors.requirements ? (
            <p className="field-error" id={`${formId}-requirements-error`}>
              {errorText(errors.requirements)}
            </p>
          ) : null}
        </div>
        <Field
          id={`${formId}-deadline`}
          name="deadline"
          label={t.fields.deadline}
          optionalLabel={t.contact.optional}
          className="wide"
          error={errorText(errors.deadline)}
        />
      </div>
      <div className="btn-row">
        <button className="btn btn-primary" type="submit">
          {t.contact.prepare}
        </button>
      </div>
      {message ? (
        <div className="stack">
          <h3>{t.contact.preview}</h3>
          <pre className="preview">{message}</pre>
          {longMessage ? <p className="meta">{t.contact.long}</p> : null}
          <div className="btn-row">
            {contact === "whatsapp" ? (
              <a className="btn btn-wa" href={waUrl} target="_blank" rel="noopener noreferrer">
                {t.contact.openWa}
                <span className="sr">({t.cta.newTab})</span>
              </a>
            ) : null}
            {contact === "email" ? (
              <a className="btn btn-primary" href={mailUrl}>
                {t.contact.openMail}
              </a>
            ) : null}
            {contact === "instagram" || contact === "linkedin" ? (
              <a className="btn btn-primary" href={profileUrl} target="_blank" rel="noopener noreferrer">
                {t.contact.openProfile}
                <span className="sr">({t.cta.newTab})</span>
              </a>
            ) : null}
            <button className="btn btn-ghost" type="button" onClick={copyMessage}>
              {t.contact.copy}
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  id,
  name,
  label,
  requiredLabel,
  optionalLabel,
  type = "text",
  autoComplete,
  error,
  className,
}: {
  id: string;
  name: string;
  label: string;
  requiredLabel?: string;
  optionalLabel?: string;
  type?: string;
  autoComplete?: string;
  error?: string | null;
  className?: string;
}) {
  return (
    <div className={`field${className ? ` ${className}` : ""}`}>
      <label htmlFor={id}>
        {label}{" "}
        {requiredLabel ? <span className="req">({requiredLabel})</span> : null}
        {optionalLabel ? <span className="req">({optionalLabel})</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
