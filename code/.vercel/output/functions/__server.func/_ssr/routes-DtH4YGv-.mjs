import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as site, f as ui, l as projects, n as faqs, o as personJsonLd, p as usePrefs, u as services } from "./preferences-CZAeA0GM.mjs";
import { a as IconArrow } from "./router-DSoBmsn4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DtH4YGv-.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { t, lang } = usePrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(personJsonLd) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap hero-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker kicker-literal",
						children: t.hero.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t.hero.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede",
						children: t.hero.lede
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
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "hero-panel",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "portrait",
							src: "/media/portrait.jpg",
							width: 427,
							height: 640,
							alt: ui[lang].about.photoAlt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.hero.person }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "meta",
							children: site.handle
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "hero-points",
							children: t.hero.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "avail",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "aria-hidden": "true" }), t.hero.available]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			style: { paddingTop: 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: t.home.workEyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.home.workTitle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: t.home.workLede
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-grid",
					children: projects.slice(0, 4).map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: project.name }),
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
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			style: { paddingTop: 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: t.home.servicesEyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.home.servicesTitle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: t.home.servicesLede
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "service-grid",
					children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "service-link",
						to: "/services/$slug",
						params: { slug: service.slug },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: service.title[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.summary[lang] })]
					}, service.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			style: { paddingTop: 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: t.home.processEyebrow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.home.processTitle })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "steps",
					children: t.process.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
						"0",
						index + 1,
						" ",
						step.title
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.body })] }, step.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			style: { paddingTop: 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: t.faqPage.eyebrow
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.faqPage.title })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "faq",
						children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: item.q[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.a[lang] })] }, item.q.en))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: { marginTop: "1rem" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "link-ext",
							to: "/faq",
							children: t.faqPage.title
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			style: { paddingTop: 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap glass",
				style: { padding: "1.4rem" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.home.closingTitle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede",
						children: t.home.closingLede
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						children: t.home.closingNote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cta-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "btn btn-primary",
							to: "/contact",
							children: t.cta.contact
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "btn btn-wa",
							href: site.whatsappUrl,
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
		})
	] });
}
//#endregion
export { Home as component };
