webpackHotUpdate("main",{

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Post = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar effector_react_1 = __webpack_require__(/*! effector-react */ \"./node_modules/effector-react/effector-react.mjs\");\nvar store_1 = __webpack_require__(/*! ../../store/effector store/store */ \"./src/store/effector store/store.tsx\");\nvar Comments_1 = __webpack_require__(/*! ./Comments */ \"./src/shared/Post/Comments/index.ts\");\nvar useCommentData_1 = __webpack_require__(/*! ../../hooks/useCommentData */ \"./src/hooks/useCommentData.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\nvar CommentForm_1 = __webpack_require__(/*! ./CommentForm */ \"./src/shared/Post/CommentForm/index.ts\");\nfunction Post(_a) {\n    var onClose = _a.onClose, selftext = _a.selftext, id = _a.id, title = _a.title;\n    var commentary = (0, useCommentData_1.useCommentData)(id);\n    var _b = (0, react_1.useState)(\"\"), openComment = _b[0], setOpenComment = _b[1];\n    console.log(\"comm\", commentary);\n    var ref = (0, react_1.useRef)(null);\n    var navigate = (0, react_router_dom_1.useNavigate)();\n    var loading = (0, effector_react_1.useStore)(store_1.$loading);\n    (0, react_1.useEffect)(function () {\n        function handleClick(event) {\n            var _a;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                onClose === null || onClose === void 0 ? void 0 : onClose();\n                navigate(\"/posts\");\n            }\n        }\n        document.addEventListener(\"click\", handleClick);\n        return function () {\n            document.removeEventListener(\"click\", handleClick);\n        };\n    }, []);\n    var node = document.querySelector(\"#modal_root\");\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\n        loading && (react_1.default.createElement(\"div\", { style: { width: \"100%\", height: 160, display: \"flex\", alignItems: \"center\", textAlign: \"center\", justifyContent: \"center\" } }, \"loading...\")),\n        !loading && (react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"div\", { className: post_css_1.default.content },\n                react_1.default.createElement(\"h2\", null, title),\n                react_1.default.createElement(\"p\", null, selftext)),\n            react_1.default.createElement(CommentForm_1.CommentForm, null),\n            react_1.default.createElement(Comments_1.Comments, { openComment: openComment, setOpenComment: setOpenComment, number: 0, props: commentary })))), node);\n}\nexports.Post = Post;\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ })

})