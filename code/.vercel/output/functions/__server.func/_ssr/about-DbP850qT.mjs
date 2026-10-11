import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as usePrefs } from "./preferences-CZAeA0GM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DbP850qT.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	const { t } = usePrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap about-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.nav.about })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: t.about.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t.about.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: t.about.lede
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "stack",
					style: { marginTop: "1.5rem" },
					children: t.about.blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: { fontSize: "var(--text-lg)" },
						children: block.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: block.body
					})] }, block.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cta-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "btn btn-primary",
						to: "/services",
						children: t.cta.services
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "btn btn-ghost",
						to: "/contact",
						children: t.cta.contact
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "figure",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "portrait-lg",
					src: "/media/portrait.jpg",
					width: 427,
					height: 640,
					alt: t.about.photoAlt
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: t.about.photoCap })]
			})]
		})
	});
}
//#endregion
export { About as component };
