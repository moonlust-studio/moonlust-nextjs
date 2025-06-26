"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 2845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/globe.mjs
var globe = __webpack_require__(2990);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.mjs
var menu = __webpack_require__(1924);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(1203);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function Header() {
    const router = (0,router_.useRouter)();
    const { locale, locales, asPath } = router;
    const { t, ready } = (0,external_next_i18next_.useTranslation)("common");
    const [showLangs, setShowLangs] = (0,external_react_.useState)(false);
    const [showMobileMenu, setShowMobileMenu] = (0,external_react_.useState)(false);
    if (!ready) return null;
    const handleChange = (newLocale)=>{
        setShowLangs(false);
        if (newLocale !== locale) {
            router.push(asPath, asPath, {
                locale: newLocale
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "max-w-7xl mx-auto flex items-center justify-between px-4 py-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/moonlust-logo.png",
                                alt: "Moonlust Logo",
                                className: "h-8 w-auto rounded-full shadow"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "text-lg font-semibold",
                                children: "Moonlust"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                        className: "hidden md:flex gap-5 text-sm font-medium",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: t("menu.home")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/stories",
                                children: t("menu.adult")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/art",
                                children: t("menu.art")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/health",
                                children: t("menu.health")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/languages",
                                children: t("menu.multilang")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "hidden md:flex items-center gap-3 relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>setShowLangs(!showLangs),
                                className: "p-2 rounded-full hover:bg-white/20",
                                children: /*#__PURE__*/ jsx_runtime.jsx(globe/* default */.Z, {
                                    className: "w-5 h-5"
                                })
                            }),
                            showLangs && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute top-10 right-0 bg-white text-pink-600 rounded shadow p-2 z-50 flex gap-2",
                                children: locales?.map((lng)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                        onClick: ()=>handleChange(lng),
                                        className: `px-2 py-1 rounded-full text-sm font-bold border ${locale === lng ? "bg-pink-600 text-white border-pink-600" : "border-pink-300 hover:bg-pink-50"}`,
                                        children: lng.toUpperCase()
                                    }, lng))
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "px-4 py-1 bg-white text-pink-600 rounded-xl text-sm font-semibold",
                                children: t("button.login")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "px-4 py-1 bg-white text-pink-600 rounded-xl text-sm font-semibold",
                                children: t("button.register")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: ()=>setShowMobileMenu(!showMobileMenu),
                            className: "text-white",
                            children: showMobileMenu ? /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                className: "h-5 w-5"
                            }) : /*#__PURE__*/ jsx_runtime.jsx(menu/* default */.Z, {
                                className: "h-5 w-5"
                            })
                        })
                    })
                ]
            }),
            showMobileMenu && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: t("menu.home")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/stories",
                        children: t("menu.adult")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/art",
                        children: t("menu.art")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/health",
                        children: t("menu.health")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/languages",
                        children: t("menu.multilang")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "flex-1 bg-white text-pink-600 px-3 py-1 rounded-xl font-semibold",
                                children: t("button.login")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "flex-1 bg-white text-pink-600 px-3 py-1 rounded-xl font-semibold",
                                children: t("button.register")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex gap-2 mt-2",
                        children: locales?.map((lng)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>handleChange(lng),
                                className: `flex-1 px-2 py-1 rounded-full text-sm font-bold border ${locale === lng ? "bg-pink-600 text-white border-pink-600" : "border-pink-300 text-pink-600 hover:bg-pink-50"}`,
                                children: lng.toUpperCase()
                            }, lng))
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Footer.tsx



function Footer() {
    const { t, ready } = (0,external_next_i18next_.useTranslation)("common");
    if (!ready) return null;
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "w-full bg-pink-50 border-t border-pink-100 text-center py-6 text-sm text-gray-700 mt-10",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mb-2 flex flex-col sm:flex-row justify-center gap-6 text-pink-600 font-medium",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/about",
                            children: t("footer.about", "Giới thiệu")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/contact",
                            children: t("footer.contact", "Li\xean hệ")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/policy",
                            children: t("footer.policy", "Ch\xednh s\xe1ch")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-center items-center gap-2 text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/moonlust-logo.png",
                            alt: "Moonlust Logo",
                            className: "h-6 w-6 rounded-full shadow"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            children: [
                                "\xa9 Moonlust 2025. ",
                                t("footer.copyright", "Bản quyền thuộc Moonlust")
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout.tsx



function Layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "flex-grow",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;