import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as site, p as usePrefs, u as services } from "./preferences-CZAeA0GM.mjs";
import { a as object, n as email, o as string, t as _enum } from "../_libs/zod.mjs";
import { i as Route$7 } from "./router-DSoBmsn4.mjs";
import { n as buildMailtoUrl, r as buildWhatsAppUrl, t as buildEnquiryMessage } from "./whatsapp-HAXaIFRf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-a0wxYW18.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var contactMethods = [
	"whatsapp",
	"email",
	"instagram",
	"linkedin"
];
var budgetChoices = [
	"inr-under-5k",
	"inr-5-15",
	"inr-15-40",
	"inr-40-plus",
	"intl",
	"unsure"
];
var serviceSlugs = services.map((service) => service.slug);
var enquirySchema = object({
	name: string().trim().min(2).max(80),
	email: email().max(120),
	country: string().trim().max(80),
	service: string().refine((value) => serviceSlugs.includes(value)),
	contact: _enum(contactMethods),
	budget: _enum(budgetChoices),
	requirements: string().trim().min(20).max(1e3),
	deadline: string().trim().max(80),
	company: string().max(0)
});
function codeFor(path, issueCode) {
	if (path === "email" && issueCode === "invalid_format") return "email";
	if (issueCode === "too_big") return "long";
	if (issueCode === "too_small") {
		if (path === "requirements") return "short";
		return "required";
	}
	if (issueCode === "invalid_value" || issueCode === "invalid_format") return "invalid";
	return "required";
}
function validateEnquiry(input) {
	const parsed = enquirySchema.safeParse(input);
	if (parsed.success) return {
		ok: true,
		data: parsed.data
	};
	const errors = {};
	for (const issue of parsed.error.issues) {
		const key = String(issue.path[0] ?? "form");
		if (!errors[key]) errors[key] = codeFor(String(key), issue.code);
	}
	return {
		ok: false,
		errors
	};
}
var fieldOrder = [
	"name",
	"email",
	"country",
	"service",
	"contact",
	"budget",
	"requirements",
	"deadline"
];
function EnquiryForm({ initialService }) {
	const { t, lang } = usePrefs();
	const formId = (0, import_react.useId)();
	const mountedAt = (0, import_react.useRef)(0);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	const [waUrl, setWaUrl] = (0, import_react.useState)("");
	const [mailUrl, setMailUrl] = (0, import_react.useState)("");
	const [profileUrl, setProfileUrl] = (0, import_react.useState)("");
	const [contact, setContact] = (0, import_react.useState)("whatsapp");
	const [service, setService] = (0, import_react.useState)(initialService && services.some((item) => item.slug === initialService) ? initialService : "");
	const longMessage = waUrl.length > 1800;
	(0, import_react.useEffect)(() => {
		mountedAt.current = Date.now();
	}, []);
	(0, import_react.useEffect)(() => {
		if (initialService && services.some((item) => item.slug === initialService)) setService(initialService);
	}, [initialService]);
	function errorText(code) {
		if (!code) return null;
		return t.errors[code];
	}
	function onSubmit(event) {
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
			company: String(form.get("company") ?? "")
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
			if (first) document.getElementById(`${formId}-${first}`)?.focus();
			return;
		}
		setErrors({});
		const data = result.data;
		const serviceItem = services.find((item) => item.slug === data.service);
		const serviceLabel = serviceItem ? serviceItem.title[lang] : data.service;
		const budgetLabel = t.budget[data.budget];
		const contactLabel = t.contactMethod[data.contact];
		const text = buildEnquiryMessage(t.message.intro, [
			{
				label: t.message.name,
				value: data.name
			},
			{
				label: t.message.email,
				value: data.email
			},
			{
				label: t.message.country,
				value: data.country
			},
			{
				label: t.message.service,
				value: serviceLabel
			},
			{
				label: t.message.budget,
				value: budgetLabel
			},
			{
				label: t.message.timeline,
				value: data.deadline
			},
			{
				label: t.message.requirements,
				value: data.requirements
			},
			{
				label: t.message.contact,
				value: contactLabel
			}
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
	const statusText = status === "spam" ? t.contact.spam : status === "invalid" ? t.errors.summary : status === "copied" ? t.contact.copied : status === "copy-failed" ? t.contact.copyFail : status === "ready" ? contact === "whatsapp" ? t.contact.waExplain : contact === "email" ? t.contact.mailExplain : t.contact.socialExplain : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "form",
		onSubmit,
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hp",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${formId}-company`,
					children: t.contact.honeypot
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${formId}-company`,
					name: "company",
					tabIndex: -1,
					autoComplete: "off"
				})]
			}),
			statusText ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "form-alert",
				role: "alert",
				"data-tone": status === "invalid" || status === "spam" || status === "copy-failed" ? "bad" : "ok",
				children: statusText
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: `${formId}-name`,
						name: "name",
						label: t.fields.name,
						requiredLabel: t.contact.required,
						autoComplete: "name",
						error: errorText(errors.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: `${formId}-email`,
						name: "email",
						type: "email",
						label: t.fields.email,
						requiredLabel: t.contact.required,
						autoComplete: "email",
						error: errorText(errors.email)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: `${formId}-country`,
						name: "country",
						label: t.fields.country,
						optionalLabel: t.contact.optional,
						autoComplete: "country-name",
						error: errorText(errors.country)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: `${formId}-service`,
								children: [
									t.fields.service,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "req",
										children: [
											"(",
											t.contact.required,
											")"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: `${formId}-service`,
								name: "service",
								value: service,
								onChange: (event) => setService(event.target.value),
								"aria-invalid": errors.service ? true : void 0,
								"aria-describedby": errors.service ? `${formId}-service-error` : void 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: t.fields.choose
								}), services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item.slug,
									children: item.title[lang]
								}, item.slug))]
							}),
							errors.service ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "field-error",
								id: `${formId}-service-error`,
								children: errorText(errors.service)
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: `${formId}-contact`,
								children: [
									t.fields.contact,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "req",
										children: [
											"(",
											t.contact.required,
											")"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: `${formId}-contact`,
								name: "contact",
								defaultValue: "whatsapp",
								"aria-invalid": errors.contact ? true : void 0,
								"aria-describedby": errors.contact ? `${formId}-contact-error` : void 0,
								children: contactMethods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: method,
									children: t.contactMethod[method]
								}, method))
							}),
							errors.contact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "field-error",
								id: `${formId}-contact-error`,
								children: errorText(errors.contact)
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: `${formId}-budget`,
								children: [
									t.fields.budget,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "req",
										children: [
											"(",
											t.contact.required,
											")"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: `${formId}-budget`,
								name: "budget",
								defaultValue: "",
								"aria-invalid": errors.budget ? true : void 0,
								"aria-describedby": `${formId}-budget-hint`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: t.fields.choose
								}), budgetChoices.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: choice,
									children: t.budget[choice]
								}, choice))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "meta",
								id: `${formId}-budget-hint`,
								children: t.contact.budgetHint
							}),
							errors.budget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "field-error",
								children: errorText(errors.budget)
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field wide",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: `${formId}-requirements`,
								children: [
									t.fields.requirements,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "req",
										children: [
											"(",
											t.contact.required,
											")"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: `${formId}-requirements`,
								name: "requirements",
								"aria-invalid": errors.requirements ? true : void 0,
								"aria-describedby": errors.requirements ? `${formId}-requirements-error` : void 0
							}),
							errors.requirements ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "field-error",
								id: `${formId}-requirements-error`,
								children: errorText(errors.requirements)
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: `${formId}-deadline`,
						name: "deadline",
						label: t.fields.deadline,
						optionalLabel: t.contact.optional,
						className: "wide",
						error: errorText(errors.deadline)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "btn-row",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-primary",
					type: "submit",
					children: t.contact.prepare
				})
			}),
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stack",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t.contact.preview }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "preview",
						children: message
					}),
					longMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: t.contact.long
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "btn-row",
						children: [
							contact === "whatsapp" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "btn btn-wa",
								href: waUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [t.contact.openWa, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "sr",
									children: [
										"(",
										t.cta.newTab,
										")"
									]
								})]
							}) : null,
							contact === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "btn btn-primary",
								href: mailUrl,
								children: t.contact.openMail
							}) : null,
							contact === "instagram" || contact === "linkedin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "btn btn-primary",
								href: profileUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [t.contact.openProfile, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "sr",
									children: [
										"(",
										t.cta.newTab,
										")"
									]
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "btn btn-ghost",
								type: "button",
								onClick: copyMessage,
								children: t.contact.copy
							})
						]
					})
				]
			}) : null
		]
	});
}
function Field({ id, name, label, requiredLabel, optionalLabel, type = "text", autoComplete, error, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `field${className ? ` ${className}` : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: id,
				children: [
					label,
					" ",
					requiredLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "req",
						children: [
							"(",
							requiredLabel,
							")"
						]
					}) : null,
					optionalLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "req",
						children: [
							"(",
							optionalLabel,
							")"
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				name,
				type,
				autoComplete,
				"aria-invalid": error ? true : void 0,
				"aria-describedby": error ? `${id}-error` : void 0
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "field-error",
				id: `${id}-error`,
				children: error
			}) : null
		]
	});
}
function ContactPage() {
	const { service } = Route$7.useSearch();
	const { t } = usePrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "crumbs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "ODIN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.nav.contact })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: t.contact.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t.contact.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: t.contact.lede
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.contact.methods }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-methods",
						style: { marginTop: "0.8rem" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "method",
								href: site.whatsappUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t.contact.whatsapp }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.phoneDisplay })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "method",
								href: `mailto:${site.email}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t.contact.email }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.email })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "method",
								href: site.instagramUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t.contact.instagram }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.instagramHandle })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "method",
								href: site.linkedinUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t.contact.linkedin }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nitin Kumar" })] })
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-body",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.contact.formTitle }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.contact.formLede }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { initialService: service })
							]
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { ContactPage as component };
