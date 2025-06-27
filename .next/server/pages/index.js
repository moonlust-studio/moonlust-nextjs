"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.tsx
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (Home),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.tsx
var _document = __webpack_require__(3162);
// EXTERNAL MODULE: ./pages/_app.tsx
var _app = __webpack_require__(4178);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Layout.tsx + 2 modules
var Layout = __webpack_require__(2845);
// EXTERNAL MODULE: ./lib/mock/mockStories.ts + 3 modules
var mockStories = __webpack_require__(519);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/index.tsx
// ✅ File: pages/index.tsx – Trang chủ Moonlust dùng i18n client-side + fix SSR + polished UI








function Home() {
    const { t } = (0,external_next_i18next_.useTranslation)("common");
    const router = (0,router_.useRouter)();
    const [isReady, setIsReady] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (router.isReady) setIsReady(true);
    }, [
        router.isReady
    ]);
    const locale = router.locale || "vi";
    const stories = (0,external_react_.useMemo)(()=>isReady ? mockStories/* default */.Z[locale] || [] : [], [
        isReady,
        locale
    ]);
    const [selectedCategory, setSelectedCategory] = (0,external_react_.useState)("all");
    const [searchTerm, setSearchTerm] = (0,external_react_.useState)("");
    const filteredStories = (0,external_react_.useMemo)(()=>{
        return stories.filter((story)=>{
            const matchCategory = selectedCategory === "all" || story.genre.includes(selectedCategory);
            const matchSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [
        stories,
        selectedCategory,
        searchTerm
    ]);
    const latestStories = filteredStories.slice(0, 6);
    const hotStories = filteredStories.slice(6, 12);
    if (!isReady) return null;
    // ✅ SEO đa ngôn ngữ
    const seoMap = {
        vi: {
            title: "Moonlust – Truyện Người Lớn Tinh Tế & Gợi Cảm",
            description: "Moonlust l\xe0 nơi kh\xe1m ph\xe1 những c\xe2u chuyện người lớn s\xe2u sắc, nhiều cảm x\xfac v\xe0 nghệ thuật gợi cảm.",
            keywords: "truyện người lớn, truyện gợi cảm, ngoại t\xecnh, t\xecnh dục học, truyện t\xe2m l\xfd"
        },
        en: {
            title: "Moonlust – Sensual & Emotional Erotic Stories",
            description: "Moonlust brings you artistically sensual stories full of emotions, love, and forbidden desires.",
            keywords: "erotic stories, sensual fiction, adult romance, infidelity, sexual tension"
        },
        ja: {
            title: "Moonlust – 感情豊かな大人の物語",
            description: "Moonlustでは、感情を揺さぶる官能的で芸術的な大人の物語をお楽しみいただけます。",
            keywords: "大人向け小説, 官能小説, 不倫, 性心理, 切ない恋"
        }
    };
    const seo = seoMap[locale] || seoMap.en;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: seo.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: seo.description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: seo.keywords
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: seo.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: seo.description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: "/moonlust-preview.jpg"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "max-w-5xl mx-auto px-4 py-20 pt-32",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "text-center max-w-3xl mx-auto mb-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-sm italic text-gray-500 mb-2",
                                children: "“Where desire meets emotion, and stories leave a mark...”"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: "text-5xl md:text-6xl font-extrabold text-pink-700 mb-5 drop-shadow-sm",
                                children: "Moonlust"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-lg md:text-xl text-gray-700 leading-relaxed",
                                children: t("meta.site_description")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/truyen/vang-chong",
                                    className: "inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all",
                                    children: t("hero.cta_featured")
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mt-10 w-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                value: selectedCategory,
                                onChange: (e)=>setSelectedCategory(e.target.value),
                                className: "border rounded px-3 py-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                        value: "all",
                                        children: t("filter.all_categories")
                                    }),
                                    [
                                        ...new Set(stories.flatMap((s)=>s.genre))
                                    ].map((g)=>/*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: g,
                                            children: g
                                        }, g))
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "text",
                                placeholder: t("filter.search_placeholder"),
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "border rounded px-3 py-2 w-full md:w-64"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "max-w-5xl mx-auto w-full mt-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-xl font-semibold text-pink-700 mb-4",
                                children: t("section.latest")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                                children: latestStories.map((story)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: `/truyen/${story.slug}`,
                                        className: "bg-white rounded shadow hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: story.cover,
                                                alt: story.title,
                                                className: "w-full h-48 object-cover rounded-t"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-semibold text-pink-700",
                                                        children: story.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: story.genre.join(", ")
                                                    })
                                                ]
                                            })
                                        ]
                                    }, story.slug))
                            })
                        ]
                    }),
                    hotStories.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "max-w-5xl mx-auto w-full mt-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-xl font-semibold text-pink-700 mb-4",
                                children: t("section.hot")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                                children: hotStories.map((story)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: `/truyen/${story.slug}`,
                                        className: "bg-white rounded shadow hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: story.cover,
                                                alt: story.title,
                                                className: "w-full h-48 object-cover rounded-t"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-semibold text-pink-700",
                                                        children: story.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: story.genre.join(", ")
                                                    })
                                                ]
                                            })
                                        ]
                                    }, story.slug))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
Home.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(Layout/* default */.Z, {
        children: page
    });
};

const getStaticProps = async ({ locale })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "vi", [
                "common"
            ])
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: pages_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,839,163,845,519], () => (__webpack_exec__(4866)));
module.exports = __webpack_exports__;

})();