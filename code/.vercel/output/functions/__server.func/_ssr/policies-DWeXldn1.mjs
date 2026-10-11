import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as usePrefs, s as policySections } from "./preferences-CZAeA0GM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/policies-DWeXldn1.js
var import_jsx_runtime = require_jsx_runtime();
function PoliciesPage() {
	const { t, lang } = usePrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap stack",
			style: { maxWidth: "74ch" },
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.footer.policies })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: t.policies.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t.policies.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "notice",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.policies.eyebrow }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: t.policies.banner
					})]
				}),
				policySections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: section.title[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: section.body[lang]
				})] }, section.title.en)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "btn btn-primary",
					to: "/contact",
					children: t.cta.quote
				}) })
			]
		})
	});
}
//#endregion
export { PoliciesPage as component };
