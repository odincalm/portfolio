import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as projects, p as usePrefs } from "./preferences-CZAeA0GM.mjs";
import { a as IconArrow } from "./router-DSoBmsn4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-DWdXAzHY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"all",
	"grooming",
	"product",
	"portfolio"
];
function WorkPage() {
	const { t, lang } = usePrefs();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const visible = projects.filter((project) => filter === "all" || project.category === filter);
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.nav.work })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: t.workPage.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t.workPage.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: t.workPage.lede
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "filter-row",
					role: "group",
					"aria-label": t.filters.label,
					children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-ghost",
						"aria-pressed": filter === item,
						onClick: () => setFilter(item),
						children: t.filters[item]
					}, item))
				}),
				visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.workPage.empty }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-grid",
					children: visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "card-media",
							children: project.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image,
								alt: project.alt[lang],
								width: project.imageWidth,
								height: project.imageHeight,
								loading: "lazy"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "media-fallback",
								children: project.name
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-body",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "tag",
									children: t.filters[project.category]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: project.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.summary[lang] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "btn-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										className: "btn btn-ghost",
										to: "/work/$slug",
										params: { slug: project.slug },
										children: t.cta.readCase
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "btn btn-primary",
										href: project.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [
											t.cta.openProject,
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
									})]
								})
							]
						})]
					}, project.slug))
				})
			]
		})
	});
}
//#endregion
export { WorkPage as component };
