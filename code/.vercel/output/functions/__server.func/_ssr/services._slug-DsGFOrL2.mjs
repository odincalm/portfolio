import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as site, l as projects, p as usePrefs } from "./preferences-CZAeA0GM.mjs";
import { r as Route$1 } from "./router-DSoBmsn4.mjs";
import { r as buildWhatsAppUrl } from "./whatsapp-HAXaIFRf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-DsGFOrL2.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const service = Route$1.useLoaderData();
	const { t, lang } = usePrefs();
	const related = service.slug === "websites" ? projects : [];
	const quoteText = lang === "hi" ? `नमस्ते Odin — मुझे इस सेवा का कोट चाहिए: ${service.title.hi}` : `Hi Odin — I would like a quote for: ${service.title.en}`;
	const wa = buildWhatsAppUrl(site.whatsappDigits, quoteText);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap stack",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							children: t.nav.services
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service.title[lang] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: service.title[lang] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: service.summary[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "notice",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.pricing.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: t.pricing.body
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-body",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.serviceUi.deliverables }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "plain-list",
								children: service.deliverables[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-body",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.serviceUi.customers }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.customers[lang] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.serviceUi.inputs }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "plain-list",
									children: service.inputs[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-body",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.serviceUi.process }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "plain-list",
							children: service.steps[lang].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.serviceUi.quote }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.serviceUi.quoteBody }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "btn-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "btn btn-primary",
									to: "/contact",
									search: { service: service.slug },
									children: t.cta.quote
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "btn btn-wa",
									href: wa,
									target: "_blank",
									rel: "noopener noreferrer",
									children: ["WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sr",
										children: [
											"(",
											t.cta.newTab,
											")"
										]
									})]
								})]
							})
						]
					})
				}),
				related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.serviceUi.related }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "plain-list",
					children: related.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work/$slug",
						params: { slug: project.slug },
						children: project.name
					}) }, project.slug))
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: t.serviceUi.noSamples
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "link-ext",
					to: "/services",
					children: t.cta.allServices
				}) })
			]
		})
	});
}
//#endregion
export { ServicePage as component };
