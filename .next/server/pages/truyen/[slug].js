"use strict";
(() => {
var exports = {};
exports.id = 729;
exports.ids = [729,660];
exports.modules = {

/***/ 3394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Ftruyen_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Ftruyen_2F_5Bslug_5D_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2Ftruyen_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Ftruyen_2F_5Bslug_5D_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Ftruyen_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Ftruyen_2F_5Bslug_5D_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/truyen/[slug]/index.tsx
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (StoryPage),
  getStaticPaths: () => (getStaticPaths),
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Layout.tsx + 2 modules
var Layout = __webpack_require__(2845);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./lib/api/stories.ts
var stories = __webpack_require__(7008);
// EXTERNAL MODULE: ./lib/mock/mockStories.ts
var mockStories = __webpack_require__(6298);
;// CONCATENATED MODULE: ./pages/truyen/[slug]/index.tsx









function StoryPage({ story }) {
    const { t } = (0,external_next_i18next_.useTranslation)("common");
    if (!story) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "text-center py-20",
            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-xl text-pink-600 font-semibold animate-pulse",
                children: t("not_found")
            })
        });
    }
    const pageTitle = `${story.title} – ${t("storyInfo")} | Moonlust`;
    const description = story.description || story.summary || t("defaultStoryDescription");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: pageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: `${story.title}, Moonlust, truyện người lớn`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: pageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "max-w-3xl mx-auto px-4 py-10",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "text-3xl font-bold text-pink-700 mb-4 text-center",
                        children: story.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col md:flex-row gap-6 items-start",
                        children: [
                            story.cover && /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: story.cover,
                                alt: story.title,
                                width: 200,
                                height: 300,
                                className: "rounded shadow"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "mb-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                                children: [
                                                    "\uD83D\uDCD6 ",
                                                    t("summary"),
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            story.description || story.summary
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "mb-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                                children: [
                                                    "\uD83D\uDDC2 ",
                                                    t("genre"),
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            story.genre.join(", ")
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "mb-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                                children: [
                                                    "\uD83D\uDCCC ",
                                                    t("statusLabel"),
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            t(`status.${story.status}`)
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "mb-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                                children: [
                                                    "\uD83D\uDCDA ",
                                                    t("chapters"),
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            story.chapters
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mt-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: `/truyen/${story.slug}/toc`,
                                            className: "bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 font-medium",
                                            children: [
                                                t("readFromStart"),
                                                " →"
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
StoryPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(Layout/* default */.Z, {
        children: page
    });
};
// ✅ Static props theo ngôn ngữ
async function getStaticProps({ locale, params }) {
    const slug = params?.slug;
    const usedLocale = locale || "vi";
    console.log(`[🟢 getStaticProps] locale="${usedLocale}", slug="${slug}"`);
    const story = (0,stories/* getMockStoryBySlug */.B)(slug, usedLocale);
    if (!story) {
        console.warn(`[❌ NOT FOUND] story not found for locale="${usedLocale}" slug="${slug}"`);
        return {
            notFound: true
        };
    }
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(usedLocale, [
                "common"
            ]),
            story
        }
    };
}
// ✅ Static paths đa ngôn ngữ – ĐÃ TEST OK TRÊN VERCEL
const getStaticPaths = async ({ locales })=>{
    const paths = [];
    for (const locale of locales || []){
        const stories = mockStories/* default */.Z[locale];
        console.log(`[🌐 ${locale}]`, stories);
        if (stories && Array.isArray(stories)) {
            for (const story of stories){
                paths.push({
                    params: {
                        slug: story.slug
                    },
                    locale
                });
            }
        } else {
            console.warn(`[⚠️ NO STORIES FOUND FOR LOCALE ${locale}]`);
        }
    }
    console.log("[✅ Final paths]", paths);
    return {
        paths,
        fallback: false
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ftruyen%2F%5Bslug%5D&preferredRegion=&absolutePagePath=private-next-pages%2Ftruyen%2F%5Bslug%5D%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Ftruyen_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Ftruyen_2F_5Bslug_5D_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Ftruyen_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Ftruyen_2F_5Bslug_5D_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2Ftruyen_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Ftruyen_2F_5Bslug_5D_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/truyen/[slug]",
        pathname: "/truyen/[slug]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: _slug_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 7008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ getMockStoryBySlug)
/* harmony export */ });
/* harmony import */ var _mock_mockStories_vi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8707);
/* harmony import */ var _mock_mockStories_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1949);
/* harmony import */ var _mock_mockStories_ja__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6550);
// ✅ File: lib/api/stories.ts – getMockStoryBySlug hỗ trợ đa ngôn ngữ



function getMockStoryBySlug(slug, locale = "vi") {
    const storiesByLocale = {
        vi: _mock_mockStories_vi__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
        en: _mock_mockStories_en__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        ja: _mock_mockStories_ja__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
    };
    const stories = storiesByLocale[locale] || _mock_mockStories_vi__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    return stories.find((story)=>story.slug === slug);
}


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

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815,664,636,142,675,178,298,845], () => (__webpack_exec__(3394)));
module.exports = __webpack_exports__;

})();