import { J as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { p as usePrefs } from "./_ssr/preferences-CZAeA0GM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_-CZkfrezU.js
var import_jsx_runtime = require_jsx_runtime();
function Missing() {
	const { t } = usePrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap stack",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t.notFound.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: t.notFound.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "btn btn-primary",
					to: "/",
					children: t.notFound.home
				}) })
			]
		})
	});
}
//#endregion
export { Missing as component };
