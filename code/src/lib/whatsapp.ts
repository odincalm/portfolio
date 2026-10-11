export type MessageField = {
  label: string;
  value?: string | null;
};

/** Builds a prefilled enquiry. Skips null, undefined, and blank values. */
export function buildEnquiryMessage(intro: string, fields: MessageField[]): string {
  const lines: string[] = [];
  const opening = intro.trim();
  if (opening) lines.push(opening);
  for (const field of fields) {
    if (field.value == null) continue;
    const value = String(field.value).trim();
    if (!value) continue;
    lines.push(`${field.label}: ${value}`);
  }
  return lines.join("\n");
}

export function buildWhatsAppUrl(digits: string, message: string): string {
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
