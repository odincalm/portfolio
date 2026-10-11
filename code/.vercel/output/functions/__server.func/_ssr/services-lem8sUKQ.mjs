import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as usePrefs, u as services } from "./preferences-CZAeA0GM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-lem8sUKQ.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	const { t, lang } = usePrefs();
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.nav.services })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: t.servicesPage.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t.servicesPage.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: t.servicesPage.lede
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "notice",
					style: { marginBottom: "1.25rem" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.pricing.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: t.pricing.body
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "service-grid",
					children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "service-link",
						to: "/services/$slug",
						params: { slug: service.slug },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: { fontSize: "clamp(1.2rem, 1.05rem + 0.4vw, 1.45rem)" },
							children: service.title[lang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.summary[lang] })]
					}, service.slug))
				})
			]
		})
	});
}
//#endregion
export { ServicesPage as component };
