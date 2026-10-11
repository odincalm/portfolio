import { z } from "zod";
import { services } from "./content.ts";

export const contactMethods = ["whatsapp", "email", "instagram", "linkedin"] as const;
export type ContactMethod = (typeof contactMethods)[number];

export const budgetChoices = [
  "inr-under-5k",
  "inr-5-15",
  "inr-15-40",
  "inr-40-plus",
  "intl",
  "unsure",
] as const;
export type BudgetChoice = (typeof budgetChoices)[number];

const serviceSlugs = services.map((service) => service.slug);

export const enquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(120),
  country: z.string().trim().max(80),
  service: z.string().refine((value) => serviceSlugs.includes(value)),
  contact: z.enum(contactMethods),
  budget: z.enum(budgetChoices),
  requirements: z.string().trim().min(20).max(1000),
  deadline: z.string().trim().max(80),
  company: z.string().max(0),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type FieldErrorCode = "required" | "email" | "short" | "long" | "invalid";

export type EnquiryErrors = Partial<Record<keyof EnquiryInput | "form", FieldErrorCode>>;

function codeFor(path: string, issueCode: string): FieldErrorCode {
  if (path === "email" && issueCode === "invalid_format") return "email";
  if (issueCode === "too_big") return "long";
  if (issueCode === "too_small") {
    if (path === "requirements") return "short";
    return "required";
  }
  if (issueCode === "invalid_value" || issueCode === "invalid_format") return "invalid";
  return "required";
}

export function validateEnquiry(input: unknown):
  | { ok: true; data: EnquiryInput }
  | { ok: false; errors: EnquiryErrors } {
  const parsed = enquirySchema.safeParse(input);
  if (parsed.success) return { ok: true, data: parsed.data };
  const errors: EnquiryErrors = {};
  for (const issue of parsed.error.issues) {
    const key = String(issue.path[0] ?? "form") as keyof EnquiryErrors;
    if (!errors[key]) errors[key] = codeFor(String(key), issue.code);
  }
  return { ok: false, errors };
}
