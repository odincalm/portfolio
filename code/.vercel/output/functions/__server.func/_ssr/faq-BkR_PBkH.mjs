import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as faqs, p as usePrefs } from "./preferences-CZAeA0GM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-BkR_PBkH.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.nav.faq })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: t.faqPage.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t.faqPage.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: t.faqPage.lede
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "faq",
					children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: item.q[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.a[lang] })] }, item.q.en))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: { marginTop: "1.2rem" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "link-ext",
						to: "/policies",
						children: t.footer.policies
					})
				})
			]
		})
	});
}
//#endregion
export { FaqPage as component };
