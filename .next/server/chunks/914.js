"use strict";
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 71914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64525);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const CardItemLandscape = ({ data, type, isLoading })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `flex-col gap-2 md:items-center md:gap-2 flex`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "w-[328px] h-[172px] rounded-xl object-cover bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex w-full gap-2 flex-col gap",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-2/3 rounded-lg py-4"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-1 w-full",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row max-w-fit gap-3 text-gray",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    children: "|"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"
                                })
                            ]
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/${type == "Article" ? "articles" : "events"}/${data.slug}`,
            about: data.title,
            title: data.title,
            className: `flex-col gap-2 md:items-center md:gap-2 flex md:w-[320px]`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    width: 100,
                    height: 180,
                    src: `https://resource.candidatecollegeind.com/storage/${data.cover_landscape}`,
                    alt: data.title,
                    title: data.title,
                    className: "w-full h-[178px] md:h-[168px] rounded-xl object-cover",
                    priority: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex md:flex-1 flex-col gap",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/${type == "Article" ? "articles" : "events"}/${data.slug}`,
                            about: data.title,
                            title: data.title,
                            className: "font-semibold text-2xl text-primary",
                            children: data.title.length > 40 ? data.title.substring(0, 48) + " ..." : data.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "font-normal text-sm text-gray",
                            children: data.snippets.substring(0, 170) + " ..."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "font-normal text-xs text-gray mt-5",
                            children: [
                                (0,_utils_time__WEBPACK_IMPORTED_MODULE_4__/* .formatDate */ .p6)(data.created_at),
                                " \xa0 | \xa0 ",
                                data.duration,
                                " min read"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardItemLandscape);


/***/ }),

/***/ 64525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p6: () => (/* binding */ formatDate)
/* harmony export */ });
/* unused harmony exports getMonthName, convertToDefaultDateValue */
const getMonthName = (monthNumber)=>{
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    return months[monthNumber];
};
const formatDate = (inputDateString)=>{
    const date = new Date(inputDateString);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = getMonthName(date.getUTCMonth());
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
};
const convertToDefaultDateValue = (dateTimeString)=>{
    // Extract the date part from the dateTimeString
    const datePart = dateTimeString.split(" ")[0];
    // Return the date part, which is in the format "YYYY-MM-DD"
    return datePart;
};


/***/ })

};
;