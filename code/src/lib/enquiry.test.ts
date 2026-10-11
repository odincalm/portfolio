import assert from "node:assert/strict";
import test from "node:test";
import { validateEnquiry } from "./enquiry.ts";

const valid = {
  name: "Asha Rao",
  email: "asha@example.com",
  country: "India",
  service: "websites",
  contact: "whatsapp",
  budget: "inr-5-15",
  requirements: "A small landing page for a salon with services and a contact path.",
  deadline: "",
  company: "",
};

test("accepts a complete enquiry", () => {
  const result = validateEnquiry(valid);
  assert.equal(result.ok, true);
});

test("rejects a bad email, short brief, and missing service", () => {
  const result = validateEnquiry({
    ...valid,
    email: "not-an-email",
    service: "",
    requirements: "too short",
  });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.equal(result.errors.email, "email");
    assert.equal(result.errors.requirements, "short");
    assert.ok(result.errors.service);
  }
});

test("rejects a filled honeypot", () => {
  const result = validateEnquiry({ ...valid, company: "https://spam.example" });
  assert.equal(result.ok, false);
});
