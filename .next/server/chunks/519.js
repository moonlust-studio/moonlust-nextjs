"use strict";
exports.id = 519;
exports.ids = [519];
exports.modules = {

/***/ 519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ mock_mockStories)
});

;// CONCATENATED MODULE: ./lib/mock/mockStories.vi.ts
// ✅ FILE: lib/mock/mockStories.vi.ts – Dữ liệu truyện mock tiếng Việt
// ✅ Kiểu dữ liệu cho truyện (dùng chung toàn hệ thống)
// ✅ Danh sách truyện giả lập – tiếng Việt
const mockStoriesVi = [
    {
        id: "1",
        slug: "vang-chong",
        title: "Vắng Chồng",
        description: "Một c\xe2u chuyện cảm x\xfac s\xe2u sắc về người vợ c\xf4 đơn khi chồng đi xa, v\xe0 người cũ bất ngờ xuất hiện.",
        genre: [
            "T\xecnh cảm",
            "Ngoại t\xecnh"
        ],
        chapters: 13,
        status: "ongoing",
        cover: "/images/vangchong.jpg"
    },
    {
        id: "2",
        slug: "vung-trom",
        title: "Vụng Trộm",
        description: "Một tr\xf2 chơi nguy hiểm giữa những con người mang kh\xe1t khao thầm k\xedn, nơi ranh giới bị thử th\xe1ch.",
        genre: [
            "T\xe2m l\xfd",
            "Người lớn"
        ],
        chapters: 18,
        status: "completed",
        cover: "/images/vungtrom.jpg"
    },
    {
        id: "3",
        slug: "co-gia-su",
        title: "C\xf4 Gia Sư",
        description: "C\xe2u chuyện n\xf3ng bỏng xoay quanh một đ\xeam định mệnh thay đổi cả cuộc đời người phụ nữ trẻ.",
        genre: [
            "Erotic Drama",
            "T\xecnh dục học"
        ],
        chapters: 24,
        status: "ongoing",
        cover: "/images/cogiasu.jpg"
    }
];
/* harmony default export */ const mockStories_vi = (mockStoriesVi);

;// CONCATENATED MODULE: ./lib/mock/mockStories.en.ts
// ✅ FILE: lib/mock/mockStories.en.ts – Danh sách truyện mock tiếng Anh
const mockStoriesEn = [
    {
        id: "1",
        slug: "vang-chong",
        title: "When He’s Gone",
        description: "An emotionally gripping story of a lonely wife whose husband is away—until her first love suddenly reappears.",
        genre: [
            "Emotional",
            "Infidelity"
        ],
        chapters: 13,
        status: "ongoing",
        cover: "/images/vangchong.jpg" // ✅ Đồng bộ ảnh với bản tiếng Việt & Nhật
    },
    {
        id: "2",
        slug: "vung-trom",
        title: "Forbidden Game",
        description: "A dangerous game between those hiding secret desires, where boundaries are made to be broken.",
        genre: [
            "Psychological",
            "Adult"
        ],
        chapters: 18,
        status: "completed",
        cover: "/covers/cam-do.jpg"
    },
    {
        id: "3",
        slug: "co-gia-su",
        title: "Burning Night",
        description: "A passionate story revolving around a fateful night that changes a young woman’s life forever.",
        genre: [
            "Erotic Drama"
        ],
        chapters: 24,
        status: "ongoing",
        cover: "/covers/dem-nong.jpg"
    }
];
/* harmony default export */ const mockStories_en = (mockStoriesEn);

;// CONCATENATED MODULE: ./lib/mock/mockStories.ja.ts
// ✅ FILE: lib/mock/mockStories.ja.ts – Truyện mock tiếng Nhật
// ✅ Dùng lại type Story từ tiếng Việt
// ✅ Danh sách truyện mock tiếng Nhật
const mockStoriesJa = [
    {
        id: "1",
        slug: "vang-chong",
        title: "夫がいない日々",
        description: "ハー・アイン――遠くに単身赴任する夫を待ちながら、偶然に再会した初恋の人…",
        genre: [
            "不倫",
            "感情",
            "ドラマ"
        ],
        chapters: 13,
        status: "ongoing",
        cover: "/images/vangchong.jpg" // 🔁 Nên đồng bộ tên ảnh với các bản ngôn ngữ khác
    }
];
/* harmony default export */ const mockStories_ja = (mockStoriesJa);

;// CONCATENATED MODULE: ./lib/mock/mockStories.ts
// ✅ FILE: lib/mock/mockStories.ts



// ✅ Gộp theo chuẩn đa ngôn ngữ
const mockStories = {
    vi: mockStories_vi,
    en: mockStories_en,
    ja: mockStories_ja
};
/* harmony default export */ const mock_mockStories = (mockStories);


/***/ })

};
;