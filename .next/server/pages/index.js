"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 5750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
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
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
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
// EXTERNAL MODULE: ./lib/mock/mockStories.ts
var mockStories = __webpack_require__(6298);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/index.tsx
// ✅ File: pages/index.tsx – Trang chủ Moonlust dùng i18n client-side + fix SSR








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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: t("meta.site_title")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: t("meta.site_description")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: "truyện người lớn, truyện 18+, truyện gợi cảm, Moonlust, truyện t\xe2m l\xfd"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: t("meta.site_title")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: t("meta.site_description")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "max-w-5xl mx-auto px-4 py-10",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "text-3xl font-bold text-pink-700 text-center mb-6",
                        children: t("intro.hero_title")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-center text-gray-600 mb-8",
                        children: t("intro.hero_text")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col md:flex-row items-center justify-between mb-6 gap-4",
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
                        className: "mb-10",
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
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
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
// ✅ Bọc layout để có header/footer
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps");
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
        Document: (_document_default())
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
var __webpack_exports__ = __webpack_require__.X(0, [940,815,664,142,178,298,845], () => (__webpack_exec__(5750)));
module.exports = __webpack_exports__;

})();