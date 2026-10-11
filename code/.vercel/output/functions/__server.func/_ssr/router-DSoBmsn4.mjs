import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as notFound, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as pageHead, d as site, i as getService, p as usePrefs, r as getProject, t as PreferencesProvider } from "./preferences-CZAeA0GM.mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as object, i as number, o as string, r as literal, s as union } from "../_libs/zod.mjs";
import { t as Analytics } from "../_libs/vercel__analytics.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DSoBmsn4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function IconMenu({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		width: "20",
		height: "20",
		viewBox: "0 0 20 20",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M3 5h14M3 10h14M3 15h14",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})
	});
}
function IconClose({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		width: "20",
		height: "20",
		viewBox: "0 0 20 20",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5 5l10 10M15 5 5 15",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})
	});
}
function IconSun({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		width: "18",
		height: "18",
		viewBox: "0 0 20 20",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "10",
			cy: "10",
			r: "3.2",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M4.4 4.4l1.4 1.4M14.2 14.2l1.4 1.4M15.6 4.4l-1.4 1.4M5.8 14.2 4.4 15.6",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})]
	});
}
function IconMoon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		width: "18",
		height: "18",
		viewBox: "0 0 20 20",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M14.5 12.2A5.8 5.8 0 0 1 8 4.2 6 6 0 1 0 14.5 12.2Z",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})
	});
}
function IconArrow({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 12 12 4M6 4h6v6",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})
	});
}
var links = [
	{
		to: "/about",
		key: "about"
	},
	{
		to: "/services",
		key: "services"
	},
	{
		to: "/work",
		key: "work"
	},
	{
		to: "/faq",
		key: "faq"
	},
	{
		to: "/contact",
		key: "contact"
	}
];
function active(pathname, href) {
	return pathname === href || pathname.startsWith(`${href}/`);
}
function Shell({ children }) {
	const { t, lang, setLang, theme, toggleTheme } = usePrefs();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const dialogRef = (0, import_react.useRef)(null);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	function openMenu() {
		dialogRef.current?.showModal();
		setMenuOpen(true);
	}
	function closeMenu() {
		dialogRef.current?.close();
		setMenuOpen(false);
	}
	const nextLangLabel = lang === "en" ? t.lang.switchToHi : t.lang.switchToEn;
	const themeLabel = theme === "dark" ? t.theme.toLight : t.theme.toDark;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "backdrop",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip",
			href: "#main",
			children: t.skip
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "site-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap header-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: site.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.handle })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "nav-desktop",
						"aria-label": t.nav.primary,
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							"aria-current": active(pathname, link.to) ? "page" : void 0,
							children: t.nav[link.key]
						}, link.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "header-tools",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "lang-btn",
								"aria-label": nextLangLabel,
								onClick: () => setLang(lang === "en" ? "hi" : "en"),
								children: lang === "en" ? "हिन्दी" : "EN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "icon-btn",
								"aria-label": themeLabel,
								onClick: toggleTheme,
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMoon, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "nav-toggle icon-btn",
								"aria-label": menuOpen ? t.nav.close : t.nav.menu,
								"aria-expanded": menuOpen,
								"aria-controls": "site-menu",
								onClick: openMenu,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMenu, {})
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dialog", {
			id: "site-menu",
			ref: dialogRef,
			className: "nav-dialog",
			"aria-label": t.nav.primary,
			onClose: () => setMenuOpen(false),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dialog-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: site.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "icon-btn",
					onClick: closeMenu,
					"aria-label": t.nav.close,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconClose, {})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: link.to,
				"aria-current": active(pathname, link.to) ? "page" : void 0,
				onClick: closeMenu,
				children: t.nav[link.key]
			}, link.to)) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			id: "main",
			tabIndex: -1,
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "site-footer",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap footer-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
					site.name,
					" / ",
					site.handle
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					children: t.footer.note
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.whatsappUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "sr",
								children: [
									"(",
									t.cta.newTab,
									")"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${site.email}`,
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.instagramUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["Instagram ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "sr",
								children: [
									"(",
									t.cta.newTab,
									")"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.linkedinUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "sr",
								children: [
									"(",
									t.cta.newTab,
									")"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							children: t.footer.privacy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies",
							children: t.footer.policies
						})
					]
				})]
			})
		})
	] });
}
var styles_default = "/assets/styles-BZDKGjcU.css";
var THEME_BOOT = `try{var t=localStorage.getItem("odin-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}`;
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${site.name} / ${site.handle} — Web and Android Developer` },
			{
				name: "description",
				content: "ODIN / odincalm0 builds responsive websites, basic Android app screens, and student documents. Quotes in writing. India and international enquiries."
			},
			{
				name: "theme-color",
				content: "#090b10"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Noto+Sans+Devanagari:wght@400;500;600&family=Noto+Serif+Devanagari:wght@500;600&family=Outfit:wght@400;500;600&display=swap"
			}
		]
	}),
	component: Root,
	notFoundComponent: NotFoundOutlet
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferencesProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Document, {}) });
}
function Document() {
	const { lang } = usePrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang,
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_BOOT } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Analytics, {})
		] })]
	});
}
function NotFoundOutlet() {
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "btn btn-primary",
					href: "/",
					children: t.notFound.home
				}) })
			]
		})
	});
}
var $$splitComponentImporter$10 = () => import("./routes-DtH4YGv-.mjs");
var Route$10 = createFileRoute("/")({
	head: () => pageHead(`${site.name} / ${site.handle} — Web and Android Developer`, "Nitin Kumar (ODIN / odincalm0) builds responsive websites, basic Android app screens, and student notes, slides, and formatted documents.", "/"),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("../_-CZkfrezU.mjs");
var Route$9 = createFileRoute("/$")({
	head: () => pageHead("Page not found — ODIN", "That page is not on the ODIN / odincalm0 site.", "/404"),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./about-DbP850qT.mjs");
var Route$8 = createFileRoute("/about")({
	head: () => pageHead("About — ODIN / odincalm0", "Nitin Kumar (ODIN / odincalm0) builds websites, basic Android UI, and student documents. No invented experience claims.", "/about"),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-a0wxYW18.mjs");
var Route$7 = createFileRoute("/contact")({
	validateSearch: (search) => ({ service: typeof search.service === "string" ? search.service : void 0 }),
	head: () => pageHead("Contact — ODIN / odincalm0", "Contact Nitin Kumar (ODIN / odincalm0) on WhatsApp, email odincalm@proton.me, Instagram, or LinkedIn. The form prepares a message; it does not send it.", "/contact"),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./faq-BkR_PBkH.mjs");
var Route$6 = createFileRoute("/faq")({
	head: () => pageHead("FAQ — ODIN / odincalm0", "Answers on services, quotes, international clients, timing, revisions, payment, cancellation, and the owner's no-refund position.", "/faq"),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./policies-DWeXldn1.mjs");
var Route$5 = createFileRoute("/policies")({
	head: () => pageHead("Payment and refunds — ODIN / odincalm0", "Draft payment, cancellation, and no-refund position for ODIN / odincalm0. Not legal advice and subject to owner review.", "/policies"),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-CzSOsmP7.mjs");
var Route$4 = createFileRoute("/privacy")({
	head: () => pageHead("Privacy — ODIN / odincalm0", "ODIN / odincalm0 does not run analytics or accounts. Language and theme stay in your browser. The enquiry form does not upload your message.", "/privacy"),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services-lem8sUKQ.mjs");
var Route$3 = createFileRoute("/services")({
	head: () => pageHead("Services — ODIN / odincalm0", "Websites, basic Android UI, student notes, PowerPoint, and PDF or Word formatting. Quotes in INR or a separate international quote.", "/services"),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./work-DWdXAzHY.mjs");
var Route$2 = createFileRoute("/work")({
	head: () => pageHead("Work — ODIN / odincalm0", "Live websites by Nitin Kumar: Nikkblend, Odin, MKS Hair Salon, and the ODIN portfolio.", "/work"),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services._slug-DsGFOrL2.mjs");
var Route$1 = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = getService(params.slug);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => pageHead(loaderData ? `${loaderData.title.en} — ODIN` : "Service — ODIN", loaderData?.summary.en ?? "Service details from ODIN / odincalm0.", loaderData ? `/services/${loaderData.slug}` : "/services"),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work._slug-B0rYTngs.mjs");
var Route = createFileRoute("/work/$slug")({
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return project;
	},
	head: ({ loaderData }) => pageHead(loaderData ? `${loaderData.name} — ODIN` : "Work — ODIN", loaderData?.summary.en ?? "Project notes from ODIN / odincalm0.", loaderData ? `/work/${loaderData.slug}` : "/work"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var SplatRoute = Route$9.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$8.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var FaqRoute = Route$6.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$11
});
var PoliciesRoute = Route$5.update({
	id: "/policies",
	path: "/policies",
	getParentRoute: () => Route$11
});
var PrivacyRoute = Route$4.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$11
});
var ServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$11
});
var WorkRoute = Route$2.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$11
});
var ServicesSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var WorkSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => WorkRoute
});
var ServicesRouteChildren = { ServicesSlugRoute };
var ServicesRouteWithChildren = ServicesRoute._addFileChildren(ServicesRouteChildren);
var WorkRouteChildren = { WorkSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	SplatRoute,
	AboutRoute,
	ContactRoute,
	FaqRoute,
	PoliciesRoute,
	PrivacyRoute,
	ServicesRoute: ServicesRouteWithChildren,
	WorkRoute: WorkRoute._addFileChildren(WorkRouteChildren)
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent,
		scrollRestoration: true
	});
}
//#endregion
export { IconArrow as a, Route$7 as i, Route as n, Route$1 as r, router_exports as t };
