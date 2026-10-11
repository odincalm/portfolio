import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as projects, p as usePrefs } from "./preferences-CZAeA0GM.mjs";
import { a as IconArrow, n as Route } from "./router-DSoBmsn4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-B0rYTngs.js
var import_jsx_runtime = require_jsx_runtime();
function CasePage() {
	const project = Route.useLoaderData();
	const { t, lang } = usePrefs();
	const others = projects.filter((item) => item.slug !== project.slug);
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
							to: "/work",
							children: t.nav.work
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.name })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tag",
					children: t.filters[project.category]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: project.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: project.summary[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "case-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "card-media",
							children: project.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image,
								alt: project.alt[lang],
								width: project.imageWidth,
								height: project.imageHeight
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "media-fallback",
								children: project.name
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "card-body",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "btn btn-primary",
								href: project.url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [
									t.caseUi.visit,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconArrow, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sr",
										children: [
											"(",
											t.cta.newTab,
											")"
										]
									})
								]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "notice",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.caseUi.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "meta",
									children: project.status[lang]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.caseUi.visible }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "plain-list",
								children: project.points[lang].map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "link-ext",
								to: "/services/$slug",
								params: { slug: "websites" },
								children: t.nav.services
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.caseUi.more }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "plain-list",
					children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work/$slug",
						params: { slug: item.slug },
						children: item.name
					}) }, item.slug))
				})
			]
		})
	});
}
//#endregion
export { CasePage as component };
