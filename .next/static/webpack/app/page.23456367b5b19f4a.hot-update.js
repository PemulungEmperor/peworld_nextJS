"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/ReviewContent.js":
/*!*****************************************!*\
  !*** ./app/components/ReviewContent.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n/* eslint-disable react/no-unescaped-entities */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst fetchReview = async (url)=>{\n    const response = await fetch(url);\n    if (!response.ok) {\n        throw new Error(\"Failed to fetch reveiws\");\n    }\n    return response.json();\n};\nconst ReviewContent = ()=>{\n    _s();\n    const { data , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/review\", fetchReview);\n    if (!(data === null || data === void 0 ? void 0 : data.review)) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-0 mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center\",\n                children: \"Their opinion about peworld\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row mx-5 my-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card shadow\",\n                        style: {\n                            width: \"18rem\",\n                            border: \"none\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    alt: \"\",\n                                    src: \"/asset/photohirejob/m1.jpg\",\n                                    width: 0,\n                                    height: 0,\n                                    sizes: \"100vw\",\n                                    style: {\n                                        width: \"40%\",\n                                        height: \"auto\",\n                                        borderRadius: \"100%\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"card-title\",\n                                        children: \"David T Green\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-muted\",\n                                        children: \"Web Developer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"card-text\",\n                                        children: \"Lorem ipsum dolor sit amet, consectetur adipsicing elit. In euismod ipsum et dui rhoncus auctor\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\PijarCamp\\\\hi-jobs\\\\app\\\\components\\\\ReviewContent.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReviewContent, \"0HVOZx335Fd7/dLA/Ed/NwfSvYI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ReviewContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewContent);\nvar _c;\n$RefreshReg$(_c, \"ReviewContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvUmV2aWV3Q29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUE4Qzs7QUFFZjtBQUNOO0FBRXpCLE1BQU1FLGNBQWMsT0FBT0M7SUFDekIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNRjtJQUU3QixJQUFJLENBQUNDLFNBQVNFLElBQUk7UUFDaEIsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUEsT0FBT0gsU0FBU0k7QUFDbEI7QUFFQSxNQUFNQyxnQkFBZ0I7O0lBQ3BCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxVQUFTLEVBQUUsR0FBR1YsK0NBQU1BLENBQUUsZUFBY0M7SUFFbEQsSUFBSSxDQUFDUSxDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1FLE1BQUssR0FBRztRQUNqQixPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFjOzs7Ozs7MEJBQzVCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO3dCQUFjRSxPQUFPOzRCQUFFQyxPQUFPOzRCQUFTQyxRQUFRO3dCQUFPOzswQ0FDbkUsOERBQUNMO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDZCxtREFBS0E7b0NBQUNtQixLQUFJO29DQUFHQyxLQUFJO29DQUE2QkgsT0FBTztvQ0FBR0ksUUFBUTtvQ0FBR0MsT0FBTTtvQ0FBUU4sT0FBTzt3Q0FBRUMsT0FBTzt3Q0FBT0ksUUFBUTt3Q0FBUUUsY0FBYztvQ0FBTzs7Ozs7Ozs7Ozs7MENBRWhKLDhEQUFDVjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNVO3dDQUFHVixXQUFVO2tEQUFhOzs7Ozs7a0RBQzNCLDhEQUFDVzt3Q0FBRVgsV0FBVTtrREFBYTs7Ozs7O2tEQUMxQiw4REFBQ1c7d0NBQUVYLFdBQVU7a0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdkM7R0E3Qk1MOztRQUN3QlIsMkNBQU1BOzs7S0FEOUJRO0FBK0JOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Jldmlld0NvbnRlbnQuanM/ZDEzZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cclxuXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmNvbnN0IGZldGNoUmV2aWV3ID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHJldmVpd3NcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuY29uc3QgUmV2aWV3Q29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdXNlU1dSKGAvYXBpL3Jldmlld2AsIGZldGNoUmV2aWV3KTtcclxuXHJcbiAgaWYgKCFkYXRhPy5yZXZpZXcpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtMCBtdC01XCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlRoZWlyIG9waW5pb24gYWJvdXQgcGV3b3JsZDwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LTUgbXktNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3dcIiBzdHlsZT17eyB3aWR0aDogXCIxOHJlbVwiLCBib3JkZXI6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiXCIgc3JjPVwiL2Fzc2V0L3Bob3RvaGlyZWpvYi9tMS5qcGdcIiB3aWR0aD17MH0gaGVpZ2h0PXswfSBzaXplcz1cIjEwMHZ3XCIgc3R5bGU9e3sgd2lkdGg6IFwiNDAlXCIsIGhlaWdodDogXCJhdXRvXCIsIGJvcmRlclJhZGl1czogXCIxMDAlXCIgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5EYXZpZCBUIEdyZWVuPC9oNT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+V2ViIERldmVsb3BlcjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcHNpY2luZyBlbGl0LiBJbiBldWlzbW9kIGlwc3VtIGV0IGR1aSByaG9uY3VzIGF1Y3RvcjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBib3R0b20tNTAgcG9zaXRpb24tYWJzb2x1dGVcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAtMjAgfX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtY2lyY2xlLWNoZXZyb24tbGVmdCBtZS0yXCIgc3R5bGU9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogXCIjNUU1MEExXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0NvbnRlbnQ7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVNXUiIsImZldGNoUmV2aWV3IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uIiwiUmV2aWV3Q29udGVudCIsImRhdGEiLCJpc0xvYWRpbmciLCJyZXZpZXciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInN0eWxlIiwid2lkdGgiLCJib3JkZXIiLCJhbHQiLCJzcmMiLCJoZWlnaHQiLCJzaXplcyIsImJvcmRlclJhZGl1cyIsImg1IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/ReviewContent.js\n"));

/***/ })

});