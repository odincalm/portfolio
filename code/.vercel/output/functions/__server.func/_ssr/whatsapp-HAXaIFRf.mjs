//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-HAXaIFRf.js
/** Builds a prefilled enquiry. Skips null, undefined, and blank values. */
function buildEnquiryMessage(intro, fields) {
	const lines = [];
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
function buildWhatsAppUrl(digits, message) {
	return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
function buildMailtoUrl(email, subject, body) {
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
//#endregion
export { buildMailtoUrl as n, buildWhatsAppUrl as r, buildEnquiryMessage as t };
