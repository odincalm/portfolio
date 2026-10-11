import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as privacySections, p as usePrefs } from "./preferences-CZAeA0GM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-CzSOsmP7.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.footer.privacy })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: t.privacyPage.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t.privacyPage.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: t.privacyPage.lede
				}),
				privacySections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: section.title[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: section.body[lang]
				})] }, section.title.en))
			]
		})
	});
}
//#endregion
export { PrivacyPage as component };
