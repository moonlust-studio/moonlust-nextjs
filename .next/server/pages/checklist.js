"use strict";
(() => {
var exports = {};
exports.id = 378;
exports.ids = [378,660];
exports.modules = {

/***/ 4177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fchecklist_preferredRegion_absolutePagePath_private_next_pages_2Fchecklist_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/checklist.tsx
var checklist_namespaceObject = {};
__webpack_require__.r(checklist_namespaceObject);
__webpack_require__.d(checklist_namespaceObject, {
  "default": () => (ChecklistPage)
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./lib/moonlustChecklist.ts
const moonlustChecklist = [
    {
        area: "SEO & Social Sharing",
        passed: true,
        notes: "Đ\xe3 cấu h\xecnh chuẩn SEO: title, desc, keywords, openGraph, Twitter card. T\xedch hợp global component SeoHead."
    },
    {
        area: "Đa ng\xf4n ngữ (i18n)",
        passed: true,
        notes: "Đ\xe3 c\xf3 dynamic language switch + auto detect IP + thư mục dịch chuẩn ho\xe1 vi/en/ja."
    },
    {
        area: "Trang chủ (Homepage)",
        passed: true,
        notes: "Hiển thị 3 truyện nổi bật (Card grid), c\xf3 ảnh + ti\xeau đề + m\xf4 tả + trạng th\xe1i. Responsive đẹp."
    },
    {
        area: "Trang chi tiết truyện",
        passed: true,
        notes: "Đ\xe3 c\xf3 slug động, hiển thị 3 chương + ảnh đầu mỗi chương + đa ng\xf4n ngữ nội dung."
    },
    {
        area: "Giao diện h\xecnh ảnh",
        passed: true,
        notes: "Đ\xe3 gắn ảnh logo truyện, ảnh minh họa chương, bo g\xf3c, shadow đẹp, d\xf9ng CDN path chuẩn."
    },
    {
        area: "Ph\xe2n quyền & User",
        passed: false,
        notes: "Chưa t\xedch hợp chức năng login / register (đang chờ Firebase/Auth0)."
    },
    {
        area: "B\xecnh luận & đ\xe1nh gi\xe1",
        passed: false,
        notes: "Chưa t\xedch hợp hệ thống comment hoặc rating. Sẽ gắn sau khi c\xf3 user auth."
    },
    {
        area: "Lưu lịch sử đọc",
        passed: true,
        notes: "Đ\xe3 d\xf9ng localStorage ghi nhớ truyện vừa đọc, chuẩn bị sẵn để gắn DB sau."
    },
    {
        area: "Quản trị truyện (CMS)",
        passed: false,
        notes: "Chưa triển khai admin UI/backend CMS, nhưng đ\xe3 dự tr\xf9 sẽ d\xf9ng Next Admin hoặc Headless CMS."
    },
    {
        area: "Quảng c\xe1o / Hợp t\xe1c",
        passed: true,
        notes: "Đ\xe3 c\xf3 AdContactSection với n\xfat li\xean hệ qua email + khối giao diện gọi CTA mạnh."
    }
];
/* harmony default export */ const lib_moonlustChecklist = (moonlustChecklist);

;// CONCATENATED MODULE: ./pages/checklist.tsx



function ChecklistPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            padding: "2rem"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: "✅ Moonlust Checklist"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                children: lib_moonlustChecklist.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                children: [
                                    item.area,
                                    ":"
                                ]
                            }),
                            " ",
                            item.passed ? "✅" : "❌",
                            " - ",
                            item.notes
                        ]
                    }, index))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fchecklist&preferredRegion=&absolutePagePath=private-next-pages%2Fchecklist.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fchecklist_preferredRegion_absolutePagePath_private_next_pages_2Fchecklist_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(checklist_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(checklist_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(checklist_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(checklist_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(checklist_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(checklist_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(checklist_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(checklist_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(checklist_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(checklist_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(checklist_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/checklist",
        pathname: "/checklist",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: checklist_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

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

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [940,815,178], () => (__webpack_exec__(4177)));
module.exports = __webpack_exports__;

})();