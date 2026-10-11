import assert from "node:assert/strict";
import test from "node:test";
import { buildEnquiryMessage, buildMailtoUrl, buildWhatsAppUrl } from "./whatsapp.ts";

test("skips empty and null fields and never prints undefined", () => {
  const message = buildEnquiryMessage("Hi Odin — I would like to discuss a project.", [
    { label: "Name", value: "Asha" },
    { label: "Email", value: "asha@example.com" },
    { label: "Country/region", value: "  " },
    { label: "Service", value: "Websites" },
    { label: "Approximate budget", value: "Under ₹5,000 (INR)" },
    { label: "Timeline", value: undefined },
    { label: "Requirements", value: "A one-page salon site" },
    { label: "Preferred contact", value: null },
  ]);
  assert.match(message, /^Hi Odin/);
  assert.match(message, /Service: Websites/);
  assert.match(message, /Approximate budget: Under ₹5,000 \(INR\)/);
  assert.doesNotMatch(message, /Country/);
  assert.doesNotMatch(message, /Timeline/);
  assert.doesNotMatch(message, /Preferred contact/);
  assert.doesNotMatch(message, /undefined/);
  assert.doesNotMatch(message, /null/);
});

test("whatsapp url encodes spaces, newlines, and ampersands", () => {
  const message = "Line & one\nLine two";
  const url = buildWhatsAppUrl("919034951794", message);
  assert.equal(url.startsWith("https://wa.me/919034951794?text="), true);
  const text = new URL(url).searchParams.get("text");
  assert.equal(text, message);
});

test("mailto encodes subject and body", () => {
  const url = buildMailtoUrl("odincalm@proton.me", "Project enquiry — Sites", "Hello & welcome");
  assert.equal(url.startsWith("mailto:odincalm@proton.me?"), true);
  const parsed = new URL(url);
  assert.equal(parsed.searchParams.get("subject"), "Project enquiry — Sites");
  assert.equal(parsed.searchParams.get("body"), "Hello & welcome");
});
