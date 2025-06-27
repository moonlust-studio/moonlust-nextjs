"use strict";
exports.id = 114;
exports.ids = [114];
exports.modules = {

/***/ 7367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ getMockChapter),
/* harmony export */   v: () => (/* binding */ getMockChapterList)
/* harmony export */ });
/* harmony import */ var _lib_mock_mockChapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3603);
/* harmony import */ var _loadMarkdownChapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_loadMarkdownChapter__WEBPACK_IMPORTED_MODULE_1__]);
_loadMarkdownChapter__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// ✅ FILE: lib/api/chapters.ts – Load chương & metadata chương theo ngôn ngữ


/**
 * ✅ Trả về nội dung chương từ mock hoặc file .md
 */ async function getMockChapter(slug, id, locale) {
    const chapterMeta = _lib_mock_mockChapters__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP?.[locale]?.[slug]?.[id];
    if (!chapterMeta) return null;
    let content = chapterMeta.content;
    if (!content) {
        try {
            content = await (0,_loadMarkdownChapter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(slug, id, locale);
        } catch (err) {
            console.warn(`[getMockChapter] ❌ Không thể load file: ${slug}/chapter-${id} (${locale})`);
            content = "<p><em>Nội dung đang được cập nhật...</em></p>";
        }
    }
    return {
        id,
        title: chapterMeta.titleHidden || "",
        tag: chapterMeta.tag || "",
        content: content || "<p><em>Nội dung đang được cập nhật...</em></p>"
    };
}
/**
 * ✅ Lấy danh sách metadata các chương để hiển thị TOC hoặc nav
 */ function getMockChapterList(slug, locale = "vi") {
    const chapterSet = _lib_mock_mockChapters__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP?.[locale]?.[slug];
    if (!chapterSet) return [];
    return Object.entries(chapterSet).map(([id, meta])=>{
        const m = meta;
        return {
            id: Number(id),
            title: m.titleHidden || "",
            tag: m.tag || ""
        };
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ loadMarkdownChapter)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_2__]);
marked__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// ✅ FILE: lib/api/loadMarkdownChapter.ts



/**
 * ✅ Load nội dung chương từ file markdown → HTML
 * @param slug - Slug của truyện (ví dụ: 'vang-chong')
 * @param id - Số chương (ví dụ: 1)
 * @param locale - Ngôn ngữ ('vi', 'en', 'ja')
 * @returns HTML đã được render từ file markdown
 */ async function loadMarkdownChapter(slug, id, locale = "vi") {
    try {
        // 📁 Đường dẫn tới file markdown
        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), "content", slug, locale, `chapter-${id}.md`);
        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {
            console.warn(`⚠️ Không tìm thấy file: ${filePath}`);
            return "<p><em>Nội dung đang được cập nhật...</em></p>";
        }
        // 📄 Đọc và render HTML
        const raw = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, "utf8").trim();
        return (0,marked__WEBPACK_IMPORTED_MODULE_2__.marked)(raw);
    } catch (error) {
        console.error(`❌ Lỗi khi load markdown: ${slug}/${locale}/chapter-${id}.md`, error);
        return "<p><em>Nội dung đang được cập nhật...</em></p>";
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ getMockStoryBySlug)
/* harmony export */ });
/* harmony import */ var _lib_mock_mockStories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
// ✅ File: lib/api/stories.ts – API giả lập lấy thông tin truyện theo slug

// ✅ Hàm lấy thông tin truyện theo slug và locale
function getMockStoryBySlug(slug, locale = "vi") {
    const stories = _lib_mock_mockStories__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[locale] || [];
    return stories.find((s)=>s.slug === slug) || null;
}


/***/ }),

/***/ 3603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (/* binding */ mockChapters)
});

// UNUSED EXPORTS: getChapterById, getChapterList, getMockChapter, getMockChapterList

;// CONCATENATED MODULE: ./lib/mock/mockChapters.vi.ts
// ✅ FILE: lib/mock/mockChapters.vi.ts – Dữ liệu chương tiếng Việt cho Vắng Chồng
const mockChaptersVi = {
    "vang-chong": {
        1: {
            id: 1,
            titleHidden: "Chương 1: Khoảng Trống",
            keywords: [
                "ngoại t\xecnh cảm x\xfac",
                "vợ c\xf4 đơn",
                "t\xecnh đầu quay lại"
            ],
            coverImage: "/images/vang-chong/chapter-1.jpg",
            description: "H\xe0 Anh c\xf4 đơn trong căn hộ trống vắng, cho đến khi tiếng chu\xf4ng cửa vang l\xean...",
            tag: "\uD83D\uDC94",
            filepath: "content/vang-chong/vi/chapter-1.md"
        },
        2: {
            id: 2,
            titleHidden: "Chương 2: Tiếng chu\xf4ng nửa đ\xeam",
            keywords: [
                "g\xe3 h\xe0ng x\xf3m",
                "ham muốn giấu k\xedn"
            ],
            filepath: "content/vang-chong/vi/chapter-2.md"
        },
        3: {
            id: 3,
            titleHidden: "Chương 3: Gợn s\xf3ng",
            keywords: [
                "tiếng r\xean nhẹ",
                "rung động đầu ti\xean"
            ],
            filepath: "content/vang-chong/vi/chapter-3.md"
        },
        4: {
            id: 4,
            titleHidden: "Chương 4: Ngưỡng cửa tội lỗi",
            keywords: [
                "ngoại t\xecnh lặng lẽ",
                "nụ h\xf4n đầu"
            ],
            filepath: "content/vang-chong/vi/chapter-4.md"
        },
        5: {
            id: 5,
            titleHidden: "Chương 5: Những ly rượu v\xe0 nỗi nhớ",
            keywords: [
                "say mềm",
                "vết h\xf4n gợi cảm"
            ],
            filepath: "content/vang-chong/vi/chapter-5.md"
        },
        6: {
            id: 6,
            titleHidden: "Chương 6: Từ Một C\xe1i Chạm Nhẹ",
            keywords: [
                "lần đầu quan hệ",
                "trượt d\xe0i"
            ],
            filepath: "content/vang-chong/vi/chapter-6.md"
        },
        7: {
            id: 7,
            titleHidden: "Chương 7: Khi Th\xe2n Thể L\xean Tiếng",
            keywords: [
                "cưỡng lại ham muốn",
                "đ\xf4i m\xf4i ch\xe1y bỏng"
            ],
            filepath: "content/vang-chong/vi/chapter-7.md"
        },
        8: {
            id: 8,
            titleHidden: "Chương 8: Đ\xeam thức trắng",
            keywords: [
                "tội lỗi",
                "nỗi nhớ run rẩy"
            ],
            filepath: "content/vang-chong/vi/chapter-8.md"
        },
        9: {
            id: 9,
            titleHidden: "Chương 9: M\xf9i Vị Mới Của C\xe1m Dỗ",
            keywords: [
                "miệng ướt \xe1t",
                "lưỡi v\xe0 nỗi nhớ"
            ],
            filepath: "content/vang-chong/vi/chapter-9.md"
        },
        10: {
            id: 10,
            titleHidden: "Chương 10: Ng\xe0y Anh Trở Lại",
            keywords: [
                "t\xe1i ngộ",
                "chạm mặt qu\xe1 khứ"
            ],
            filepath: "content/vang-chong/vi/chapter-10.md"
        },
        11: {
            id: 11,
            titleHidden: "Chương 11: Một Đ\xeam Cuối C\xf9ng",
            keywords: [
                "chia tay thể x\xe1c",
                "chồng sắp về"
            ],
            filepath: "content/vang-chong/vi/chapter-11.md"
        },
        12: {
            id: 12,
            titleHidden: "Chương 12: Trong V\xf2ng Tay Chồng, Ngo\xe0i Nhịp Tim M\xecnh",
            keywords: [
                "khẩu d\xe2m",
                "ngoại t\xecnh tư tưởng"
            ],
            filepath: "content/vang-chong/vi/chapter-12.md"
        },
        13: {
            id: 13,
            titleHidden: "Chương 13: Tr\xfat Hết Mọi Giới Hạn",
            keywords: [
                "b\xfa s\xe2u",
                "cưỡi l\xean hiện thực"
            ],
            filepath: "content/vang-chong/vi/chapter-13.md"
        }
    }
};
/* harmony default export */ const mockChapters_vi = (mockChaptersVi);

;// CONCATENATED MODULE: ./lib/mock/mockChapters.en.ts
// ✅ FILE: lib/mock/mockChapters.en.ts – English chapter metadata for "When He's Gone"
const mockChaptersEn = {
    "vang-chong": {
        1: {
            id: 1,
            titleHidden: "Chapter 1: The Quiet Yearning",
            description: "Ha Anh returns home to an empty apartment. As the silence grows louder, a forgotten name resurfaces...",
            keywords: [
                "loneliness",
                "emotional affair",
                "distant husband",
                "first love"
            ],
            coverImage: "/images/vang-chong/chapter-1.jpg",
            filepath: "content/vang-chong/en/chapter-1.md"
        },
        2: {
            id: 2,
            titleHidden: "Chapter 2: A Knock in the Dark",
            description: "A knock on the door shatters the silence. The past comes rushing back, wrapped in the scent of rain.",
            keywords: [
                "forbidden desire",
                "memories",
                "unexpected visitor"
            ],
            coverImage: "/images/vang-chong/chapter-2.jpg",
            filepath: "content/vang-chong/en/chapter-2.md"
        },
        3: {
            id: 3,
            titleHidden: "Chapter 3: Scent of a Storm",
            description: "A dinner together. Old feelings stir, and Ha Anh begins to realize she’s playing with fire.",
            keywords: [
                "sexual tension",
                "shared past",
                "touch and retreat"
            ],
            coverImage: "/images/vang-chong/chapter-3.jpg",
            filepath: "content/vang-chong/en/chapter-3.md"
        },
        4: {
            id: 4,
            titleHidden: "Chapter 4: Between the Drops",
            description: "The rain traps them. One room. One bed. And a thousand things unsaid.",
            keywords: [
                "hotel room",
                "rainy night",
                "breathless intimacy"
            ],
            coverImage: "/images/vang-chong/chapter-4.jpg",
            filepath: "content/vang-chong/en/chapter-4.md"
        },
        5: {
            id: 5,
            titleHidden: "Chapter 5: Glasses of Longing",
            description: "Wine flows. Old confessions surface. A night that never touches skin still leaves its mark.",
            keywords: [
                "drunken nostalgia",
                "unspoken love",
                "simmering tension"
            ],
            coverImage: "/images/vang-chong/chapter-5.jpg",
            filepath: "content/vang-chong/en/chapter-5.md"
        },
        6: {
            id: 6,
            titleHidden: "Chapter 6: From a Single Touch",
            description: "Rain. A hotel. And a choice she can’t take back.",
            keywords: [
                "sexual awakening",
                "cheating",
                "first surrender"
            ],
            coverImage: "/images/vang-chong/chapter-6.jpg",
            filepath: "content/vang-chong/en/chapter-6.md"
        },
        7: {
            id: 7,
            titleHidden: "Chapter 7: When the Body Speaks",
            description: "Words fall away. Only skin speaks.",
            keywords: [
                "first sex",
                "body language",
                "deep connection"
            ],
            coverImage: "/images/vang-chong/chapter-7.jpg",
            filepath: "content/vang-chong/en/chapter-7.md"
        },
        8: {
            id: 8,
            titleHidden: "Chapter 8: Sleepless Night",
            description: "Multiple rounds. Hunger with no end. A night of moans and madness.",
            keywords: [
                "intense sex",
                "oral",
                "passion overload"
            ],
            coverImage: "/images/vang-chong/chapter-8.jpg",
            filepath: "content/vang-chong/en/chapter-8.md"
        },
        9: {
            id: 9,
            titleHidden: "Chapter 9: A New Flavor of Temptation",
            description: "Regret and longing blend as she sees her marriage through new eyes.",
            keywords: [
                "emotional conflict",
                "dual lives",
                "memory and guilt"
            ],
            coverImage: "/images/vang-chong/chapter-9.jpg",
            filepath: "content/vang-chong/en/chapter-9.md"
        },
        10: {
            id: 10,
            titleHidden: "Chapter 10: Everything That Trembled Inside Her",
            description: "She’s back in her husband’s arms, but nothing feels the same.",
            keywords: [
                "husband returns",
                "guilt sex",
                "comparison"
            ],
            coverImage: "/images/vang-chong/chapter-10.jpg",
            filepath: "content/vang-chong/en/chapter-10.md"
        },
        11: {
            id: 11,
            titleHidden: "Chapter 11: The Day He Returned",
            description: "Her two worlds collide. And she still chooses the one she shouldn’t.",
            keywords: [
                "farewell sex",
                "husband home",
                "secret rendezvous"
            ],
            coverImage: "/images/vang-chong/chapter-11.jpg",
            filepath: "content/vang-chong/en/chapter-11.md"
        },
        12: {
            id: 12,
            titleHidden: "Chapter 12: In His Arms, Yet Out of Rhythm",
            description: "She plays the role of wife. But inside, only one man makes her body respond.",
            keywords: [
                "emotional numbness",
                "routine sex",
                "flashbacks"
            ],
            coverImage: "/images/vang-chong/chapter-12.jpg",
            filepath: "content/vang-chong/en/chapter-12.md"
        },
        13: {
            id: 13,
            titleHidden: "Chapter 13: The Final Offering",
            description: "She gives him what she never gave anyone. A sacred surrender.",
            keywords: [
                "blowjob",
                "analogy of first time",
                "last round"
            ],
            coverImage: "/images/vang-chong/chapter-13.jpg",
            filepath: "content/vang-chong/en/chapter-13.md"
        }
    }
};
/* harmony default export */ const mockChapters_en = (mockChaptersEn);

;// CONCATENATED MODULE: ./lib/mock/mockChapters.ja.ts
// ✅ FILE: lib/mock/mockChapters.ja.ts – Japanese metadata for "Vắng Chồng"
const mockChaptersJa = {
    "vang-chong": {
        1: {
            id: 1,
            titleHidden: "第1章：沈黙の中で",
            description: "ハー・アインは静まり返った部屋に一人。鳴ったインターホンがすべてを変える。",
            keywords: [
                "不倫",
                "寂しい妻",
                "初恋の再会"
            ],
            coverImage: "/images/vang-chong/chapter-1.jpg",
            tag: "\uD83D\uDC94",
            signature: "沈黙は空虚ではなく、語られなかった想いが響いている。",
            filepath: "content/vang-chong/ja/chapter-1.md"
        },
        2: {
            id: 2,
            titleHidden: "第2章：再会のノック",
            description: "突然のインターホン、過去からの声。静かな夜は一変する…",
            keywords: [
                "元恋人",
                "誘惑",
                "感情の嵐"
            ],
            coverImage: "/images/vang-chong/chapter-2.jpg",
            tag: "\uD83C\uDF2B️",
            signature: "開いた扉は、もう閉められないかもしれない。",
            filepath: "content/vang-chong/ja/chapter-2.md"
        }
    }
};
/* harmony default export */ const mockChapters_ja = (mockChaptersJa);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
;// CONCATENATED MODULE: ./lib/mock/mockChapters.ts
// ✅ File: lib/api/chapters.ts – API layer lấy dữ liệu chương từ mock theo ngôn ngữ





// ✅ Map dữ liệu chương theo locale
const chaptersMap = {
    vi: mockChapters_vi,
    en: mockChapters_en,
    ja: mockChapters_ja
};
/* harmony default export */ const mockChapters = (chaptersMap);
/**
 * ✅ Đọc nội dung markdown thủ công nếu chương không có content
 * @param slug - slug truyện
 * @param id - số chương
 * @param locale - ngôn ngữ
 * @returns nội dung HTML đã format
 */ function loadMarkdown(slug, id, locale) {
    try {
        const filePath = path.join(process.cwd(), "content", slug, locale, `chapter-${id}.md`);
        const raw = fs.readFileSync(filePath, "utf-8");
        return `<p>${raw.replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br/>")}</p>`;
    } catch (error) {
        console.warn(`[mockChapters] Không tìm thấy file .md cho ${slug}/chapter-${id} (${locale})`);
        return "<p><em>Nội dung đang được cập nhật...</em></p>";
    }
}
/**
 * ✅ Trả về nội dung chương cụ thể
 * - Ưu tiên lấy từ mock
 * - Nếu không có, sẽ đọc file markdown hoặc file chỉ định trong `filepath`
 */ function getChapterById(slug, id, locale = "vi") {
    const story = chaptersMap[locale]?.[slug];
    const chapter = story?.[id];
    if (!chapter) return null;
    let content = chapter.content;
    // ✅ Nếu có filepath (dẫn tới file .md), load nội dung từ đó
    if (!content && chapter.filepath) {
        try {
            const filePath = path.join(process.cwd(), chapter.filepath);
            const raw = fs.readFileSync(filePath, "utf-8");
            content = `<p>${raw.replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br/>")}</p>`;
        } catch (error) {
            console.warn(`[mockChapters] Không thể đọc file: ${chapter.filepath}`);
            content = "<p><em>Nội dung đang được cập nhật...</em></p>";
        }
    }
    // ✅ Nếu không có content và không có filepath → thử đọc file markdown mặc định
    if (!content) {
        content = loadMarkdown(slug, id, locale);
    }
    return {
        id,
        ...chapter,
        content
    };
}
/**
 * ✅ Trả về danh sách metadata chương để hiển thị TOC
 */ function getChapterList(slug, locale = "vi") {
    const story = chaptersMap[locale]?.[slug];
    if (!story) return [];
    return Object.entries(story).map(([id, meta])=>{
        const m = meta;
        return {
            id: Number(id),
            title: m.titleHidden || "",
            tag: m.tag || ""
        };
    });
}
// ✅ Export lại hàm đúng chuẩn Moonlust API
const getMockChapter = (/* unused pure expression or super */ null && (getChapterById));
const getMockChapterList = (/* unused pure expression or super */ null && (getChapterList));


/***/ })

};
;