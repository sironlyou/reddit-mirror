/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar NotFound_1 = __webpack_require__(/*! ./shared/NotFound */ \"./src/shared/NotFound.tsx\");\nvar store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\nfunction AppComponent() {\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\n    (0, react_1.useEffect)(function () {\n        setMounted(true);\n    }, []);\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(Header_1.Header, null),\n            react_1.default.createElement(Content_1.Content, null,\n                react_1.default.createElement(react_router_dom_1.Routes, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts/*\", element: react_1.default.createElement(CardsList_1.CardsList, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth\", element: react_1.default.createElement(CardsList_1.CardsList, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: \"/posts\" }) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"*\", element: react_1.default.createElement(NotFound_1.NotFound, null) }))))))));\n}\n///\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useCommentData.ts":
/*!*************************************!*\
  !*** ./src/hooks/useCommentData.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useCommentData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar effector_react_1 = __webpack_require__(/*! effector-react */ \"effector-react\");\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar store_1 = __webpack_require__(/*! ../store/effector store/store */ \"./src/store/effector store/store.tsx\");\nvar useCommentData = function (id) {\n    var comments = (0, effector_react_1.useStore)(store_1.$comments);\n    var localToken = localStorage.getItem(\"token\");\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.value; }) || localToken;\n    (0, react_1.useEffect)(function () {\n        function load() {\n            return __awaiter(this, void 0, void 0, function () {\n                var children, error_1;\n                return __generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            (0, store_1.updateLoading)(true);\n                            _a.label = 1;\n                        case 1:\n                            _a.trys.push([1, 3, , 4]);\n                            return [4 /*yield*/, axios_1.default\n                                    .get(\"https://oauth.reddit.com/comments/\".concat(id, \".json\"), {\n                                    headers: { Authorization: \"bearer \".concat(token) },\n                                })\n                                    .then(function (resp) {\n                                    resp !== undefined && (0, store_1.updateComments)(resp.data[1].data.children);\n                                    (0, store_1.updateLoading)(false);\n                                })];\n                        case 2:\n                            children = _a.sent();\n                            return [3 /*break*/, 4];\n                        case 3:\n                            error_1 = _a.sent();\n                            console.log(\"comments error:\", error_1);\n                            return [3 /*break*/, 4];\n                        case 4: return [2 /*return*/];\n                    }\n                });\n            });\n        }\n        load();\n    }, []);\n    return comments;\n};\nexports.useCommentData = useCommentData;\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\nfunction useUserData() {\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\n    var localToken = localStorage.getItem(\"token\");\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.value; }) || localToken;\n    var dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        if (!token)\n            return;\n        dispatch((0, actions_1.meRequestAsync)());\n    }, [token]);\n    return {\n        data: data,\n        loading: loading,\n    };\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n    --black: #333333;\\n    --orange: #CC6633;\\n    --green: #A4CC33;\\n    --whiteLightness: 100%;\\n    --white: hsl(0, 0%, var(--whiteLightness));\\n    --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n    --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n    --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n    --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n    --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n    --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n    --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n    padding: 0;\\n    margin: 0;\\n    background-color: var(--grayF4);\\n    font-size: 14px;\\n    line-height: 16px;\\n    font-family: 'Roboto', serif;\\n}\\n\\n* {\\n    color: var(--black);\\n    box-sizing: border-box;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n    margin: 0;\\n    padding: 0;\\n    list-style: none;\\n}\\n\\na {\\n    text-decoration: none;\\n}\\n\\nbutton {\\n    padding: 0;\\n    border: 0;\\n    background: transparent;\\n    cursor: pointer;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\".concat(content, \"</div>\\n  <div id=\\\"modal_root\\\"></div> \\n  <div id=\\\"dropdown_root\\\"></div>\\n</body>\\n\\n</html>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar app = (0, express_1.default)();\nvar PORT = process.env.PORT || 3000;\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\napp.get('/auth', function (req, response) {\n    response.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.get(\"*\", function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.listen(PORT, function () {\n    console.log(\"server started on port http://localhost:\".concat(PORT));\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Break = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nfunction Break(props) {\n    var _a, _b, _c, _d, _e;\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;\n    return (react_1.default.createElement(\"div\", { className: (0, classnames_1.default)(break_css_1.default[\"s\".concat(size)], (_a = {}, _a[break_css_1.default[\"mobile_s\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desktop_s\".concat(desktopSize)]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));\n}\nexports.Break = Break;\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"mobile_s16\": \"break__mobile_s16--2KmPq\",\n\t\"mobile_s20\": \"break__mobile_s20--1j8g5\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"tablet_s16\": \"break__tablet_s16--2rsLQ\",\n\t\"tablet_s20\": \"break__tablet_s20--V1f92\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\",\n\t\"desktop_s16\": \"break__desktop_s16--2k7qE\",\n\t\"desktop_s20\": \"break__desktop_s20--AjVsi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\nfunction Card(_a) {\n    var selftext = _a.selftext, title = _a.title, author = _a.author, createdAt = _a.createdAt, karma = _a.karma, thumbnail = _a.thumbnail, id = _a.id;\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(TextContent_1.TextContent, { author: author, title: title, createdAt: createdAt, id: id, selftext: selftext }),\n        react_1.default.createElement(Preview_1.Preview, { thumbnail: thumbnail }),\n        react_1.default.createElement(Menu_1.Menu, null),\n        react_1.default.createElement(Controls_1.Controls, { karma: karma })));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/Actions.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/Actions.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Actions = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar actions_css_1 = __importDefault(__webpack_require__(/*! ./actions.css */ \"./src/shared/CardsList/Card/Controls/Actions/actions.css\"));\nfunction Actions() {\n    return (react_1.default.createElement(\"div\", { className: actions_css_1.default.actions },\n        react_1.default.createElement(\"button\", { className: actions_css_1.default.shareButton },\n            react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\n        react_1.default.createElement(\"button\", { className: actions_css_1.default.saveButton },\n            react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                react_1.default.createElement(\"path\", { d: \"M12.1 6L13.5885 7.52667L10.4165 10.78L7.8165 8.11333L3 13.06L3.9165 14L7.8165 10L10.4165 12.6667L14.5115 8.47333L16 10V6H12.1Z\", fill: \"white\" })))));\n}\nexports.Actions = Actions;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/actions.css":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/actions.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"actions__saveButton--2DgCN\",\n\t\"actions\": \"actions__actions--CKLJF\",\n\t\"shareButton\": \"actions__shareButton--K72CZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/actions.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/Controls/Actions/Actions.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css\"));\nfunction CommentsButton() {\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\n        react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" }))));\n}\nexports.CommentsButton = CommentsButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--3bUHw\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--3_qtU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Controls = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts\");\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Controls/CommentsButton/index.ts\");\nvar Actions_1 = __webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/Controls/Actions/index.ts\");\nfunction Controls(_a) {\n    var karma = _a.karma;\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { karma: karma }),\n        react_1.default.createElement(CommentsButton_1.CommentsButton, null),\n        react_1.default.createElement(Actions_1.Actions, null)));\n}\nexports.Controls = Controls;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.KarmaCounter = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css\"));\nfunction KarmaCounter(_a) {\n    var karma = _a.karma;\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\n        react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, karma),\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\n            react_1.default.createElement(\"svg\", { className: karmacounter_css_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })))));\n}\nexports.KarmaCounter = KarmaCounter;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--fMpNv\",\n\t\"karmaValue\": \"karmacounter__karmaValue--1Ho-U\",\n\t\"down\": \"karmacounter__down--1V_4R\",\n\t\"up\": \"karmacounter__up--1SZXL\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--1pbuI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\nvar MenuListItem_1 = __webpack_require__(/*! ./MenuListItem */ \"./src/shared/CardsList/Card/Menu/MenuListItem/index.ts\");\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar interface_1 = __webpack_require__(/*! ../../../../utils/ts/interface */ \"./src/utils/ts/interface.ts\");\nfunction Menu() {\n    var _a, _b, _c, _d;\n    var ref = (0, react_1.useRef)(null);\n    var _e = (0, react_1.useState)(false), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];\n    var handleClick = function () {\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    var x = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().right) || 0;\n    var y = ((_b = ref.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().y) || 0;\n    var width = ((_c = ref.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().left) || 0;\n    var height = ((_d = ref.current) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect().height) || 0;\n    if (typeof window !== \"undefined\") {\n        x -= 171;\n        y += height;\n        y += window.scrollY;\n        if (window.innerWidth > 1539) {\n            x -= 70;\n        }\n        if (window.innerWidth < 768) {\n            x += 15;\n        }\n    }\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\n        react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton, onClick: handleClick, ref: ref },\n            react_1.default.createElement(Icons_1.MenuIcon, null)),\n        isDropdownOpen && (react_1.default.createElement(Dropdown_1.Dropdown, { button: ref.current, onClose: handleClick },\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown, style: { top: y, left: x } },\n                react_1.default.createElement(MenuListItem_1.MenuListItem, { postId: \"123\" }),\n                react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton },\n                    react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: interface_1.Ecolor.grey66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))))));\n}\nexports.Menu = Menu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuListItem/MenuListItem.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuListItem/MenuListItem.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuListItem = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar genericList_1 = __webpack_require__(/*! ../../../../../utils/react/genericList */ \"./src/utils/react/genericList.tsx\");\nvar interface_1 = __webpack_require__(/*! ../../../../../utils/ts/interface */ \"./src/utils/ts/interface.ts\");\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\nvar menulistitem_css_1 = __importDefault(__webpack_require__(/*! ./menulistitem.css */ \"./src/shared/CardsList/Card/Menu/MenuListItem/menulistitem.css\"));\nvar LIST = [\n    {\n        As: \"li\",\n        text: (react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\n        listElement: (react_1.default.createElement(react_1.default.Fragment, null,\n            react_1.default.createElement(Icon_1.Icon, { name: interface_1.EIcons.block, className: menulistitem_css_1.default.icon, size: 14 }))),\n        className: menulistitem_css_1.default.menuItem,\n    },\n    {\n        divider: react_1.default.createElement(\"div\", { className: menulistitem_css_1.default.divider }),\n    },\n    {\n        As: \"li\",\n        text: (react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")),\n        listElement: (react_1.default.createElement(react_1.default.Fragment, null,\n            react_1.default.createElement(Icon_1.Icon, { name: interface_1.EIcons.report, className: menulistitem_css_1.default.icon, size: 14 }))),\n        className: menulistitem_css_1.default.menuItem,\n    },\n];\nfunction MenuListItem(_a) {\n    var postId = _a.postId;\n    return (react_1.default.createElement(\"ul\", { className: menulistitem_css_1.default.menuItemsList },\n        react_1.default.createElement(genericList_1.GenericList, { list: LIST })));\n}\nexports.MenuListItem = MenuListItem;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuListItem/MenuListItem.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuListItem/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuListItem/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./MenuListItem */ \"./src/shared/CardsList/Card/Menu/MenuListItem/MenuListItem.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuListItem/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuListItem/menulistitem.css":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuListItem/menulistitem.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menulistitem__menuItemsList--1tsVC\",\n\t\"menuItem\": \"menulistitem__menuItem--2wlF8\",\n\t\"divider\": \"menulistitem__divider--1_pX9\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuListItem/menulistitem.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--22Yos\",\n\t\"menuButton\": \"menu__menuButton--2RzAb\",\n\t\"dropdown\": \"menu__dropdown--2v5tI\",\n\t\"closeButton\": \"menu__closeButton--1Vmbj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Preview = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\nfunction Preview(_a) {\n    var thumbnail = _a.thumbnail;\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\n        react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: (thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.includes(\"http\")) ? thumbnail : \"https://cdn.dribbble.com/users/1090020/screenshots/17342450/media/08b490886f49c5e041b3e6fbff8dc90c.png\", alt: \"previewImg\" })));\n}\nexports.Preview = Preview;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--1Nukb\",\n\t\"previewImg\": \"preview__previewImg--3kTAV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextContent = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/index.ts\");\nvar getTimeFromTimestamp_1 = __webpack_require__(/*! ../../../../utils/ts/getTimeFromTimestamp */ \"./src/utils/ts/getTimeFromTimestamp.ts\");\nfunction TextContent(_a) {\n    var selftext = _a.selftext, createdAt = _a.createdAt, author = _a.author, title = _a.title, id = _a.id;\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\n            react_1.default.createElement(\"div\", { className: textcontent_css_1.default.userLink },\n                react_1.default.createElement(\"img\", { className: textcontent_css_1.default.avatar, src: \"https://cdn.dribbble.com/users/174531/avatars/mini/15aa8b82e7c45563c3300038f5e18c5b.jpg?1575308145\", alt: \"avatar\" }),\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: textcontent_css_1.default.username }, author)),\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createdAt },\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n                (0, getTimeFromTimestamp_1.getTimeFromTimestamp)(createdAt),\n                \" \\u043D\\u0430\\u0437\\u0430\\u0434\")),\n        react_1.default.createElement(Title_1.Title, { selftext: selftext, title: title, id: id })));\n}\nexports.TextContent = TextContent;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/Title.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/Title.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Title = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/CardsList/Card/TextContent/Title/title.css\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar store_1 = __webpack_require__(/*! ../../../../../store/effector store/store */ \"./src/store/effector store/store.tsx\");\nfunction Title(_a) {\n    var title = _a.title, id = _a.id, selftext = _a.selftext;\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/posts/id:\".concat(id), onClick: function (e) {\n                (0, store_1.updateId)(id);\n                (0, store_1.updateTitle)(title);\n                (0, store_1.updateSelftext)(selftext);\n                (0, store_1.updateLoading)(true);\n            }, className: title_css_1.default.postLink }, title)));\n}\nexports.Title = Title;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/title.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/title.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--3THtn\",\n\t\"postLink\": \"title__postLink--3ZH1E\",\n\t\"textContent\": \"title__textContent--1BWZQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textcontent.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--2RuXa\",\n\t\"avatar\": \"textcontent__avatar--26Ggp\",\n\t\"metaData\": \"textcontent__metaData--1L7oU\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--C6Pau\",\n\t\"createdAt\": \"textcontent__createdAt--1vECY\",\n\t\"userLink\": \"textcontent__userLink--2KE4t\",\n\t\"username\": \"textcontent__username--1Pcvf\",\n\t\"title\": \"textcontent__title--1gTmn\",\n\t\"postLink\": \"textcontent__postLink--11qrP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar Post_1 = __webpack_require__(/*! ../Post */ \"./src/shared/Post/index.ts\");\nvar effector_react_1 = __webpack_require__(/*! effector-react */ \"effector-react\");\nvar store_1 = __webpack_require__(/*! ../../store/effector store/store */ \"./src/store/effector store/store.tsx\");\nfunction CardsList() {\n    var bottomOfList = (0, react_1.useRef)(null);\n    var localToken = localStorage.getItem(\"token\");\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.value; }) || localToken;\n    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];\n    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];\n    var _c = (0, react_1.useState)(\"\"), errorLoading = _c[0], setErrorLoading = _c[1];\n    var _d = (0, react_1.useState)(\"\"), nextAfter = _d[0], setNextAfter = _d[1];\n    var id = (0, effector_react_1.useStore)(store_1.$id);\n    var selftext = (0, effector_react_1.useStore)(store_1.$selftext);\n    var title = (0, effector_react_1.useStore)(store_1.$title);\n    (0, react_1.useEffect)(function () {\n        if (!token)\n            return;\n        function load() {\n            return __awaiter(this, void 0, void 0, function () {\n                var _a, after, children_1, error_1;\n                return __generator(this, function (_b) {\n                    switch (_b.label) {\n                        case 0:\n                            setLoading(true);\n                            setErrorLoading(\"\");\n                            _b.label = 1;\n                        case 1:\n                            _b.trys.push([1, 3, , 4]);\n                            return [4 /*yield*/, axios_1.default.get(\"https://oauth.reddit.com/best.json?sr_detail=true\", {\n                                    headers: { Authorization: \"bearer \".concat(token) },\n                                    params: {\n                                        limit: 10,\n                                        after: nextAfter,\n                                    },\n                                })];\n                        case 2:\n                            _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;\n                            setNextAfter(after);\n                            setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });\n                            return [3 /*break*/, 4];\n                        case 3:\n                            error_1 = _b.sent();\n                            setErrorLoading(String(error_1));\n                            return [3 /*break*/, 4];\n                        case 4:\n                            setLoading(false);\n                            return [2 /*return*/];\n                    }\n                });\n            });\n        }\n        var observer = new IntersectionObserver(function (entries) {\n            if (entries[0].isIntersecting)\n                load();\n        }, {\n            rootMargin: \"10px\",\n        });\n        if (bottomOfList.current) {\n            observer.observe(bottomOfList.current);\n        }\n        return function () {\n            if (bottomOfList.current)\n                observer.unobserve(bottomOfList.current);\n        };\n    }, [nextAfter, token]);\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\n        posts.length === 0 && !loading && !errorLoading && react_1.default.createElement(\"div\", null, \"Please log in to see posts\"),\n        posts.map(function (post) { return (react_1.default.createElement(Card_1.Card, { key: post.data.id, title: post.data.title, author: post.data.author, createdAt: post.data.created, karma: post.data.ups, thumbnail: post.data.thumbnail, permalink: post.data.permalink, id: post.data.id, selftext: post.data.selftext })); }),\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\n        loading && react_1.default.createElement(\"div\", { className: cardslist_css_1.default.loader }),\n        errorLoading && (react_1.default.createElement(\"div\", { role: \"alert\", className: cardslist_css_1.default.error }, errorLoading)),\n        react_1.default.createElement(react_router_dom_1.Routes, null,\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/:id\", element: react_1.default.createElement(Post_1.Post, { id: id, selftext: selftext, title: title }) }))));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\",\n\t\"error\": \"cardslist__error--1dxel\",\n\t\"loader\": \"cardslist__loader--1VDR4\",\n\t\"spin\": \"cardslist__spin--1fJiw\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children);\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"react-dom\");\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\nfunction Dropdown(_a) {\n    var button = _a.button, children = _a.children, onClose = _a.onClose;\n    if (!button)\n        return null;\n    var ref = (0, react_1.useRef)(null);\n    var handleClick = function () {\n        onClose === null || onClose === void 0 ? void 0 : onClose();\n    };\n    (0, react_1.useEffect)(function () {\n        function handleClickDoc(event) {\n            var _a;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)))\n                onClose === null || onClose === void 0 ? void 0 : onClose();\n        }\n        document.addEventListener(\"click\", handleClickDoc);\n        return function () {\n            document.removeEventListener(\"click\", handleClickDoc);\n        };\n    }, []);\n    var node = document.querySelector(\"#dropdown_root\");\n    if (!node)\n        return null;\n    return (0, react_dom_1.createPortal)(react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container, ref: ref },\n        react_1.default.createElement(\"div\", { onClick: handleClick, className: dropdown_css_1.default.list }, children)), node);\n}\nexports.Dropdown = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\nfunction SearchBlock() {\n    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading;\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\nvar interface_1 = __webpack_require__(/*! ../../../../utils/ts/interface */ \"./src/utils/ts/interface.ts\");\nvar CLIENT_ID = \"TtTT3iNgIdJIJ1X2EwAlBA\";\n// const CLIENT_ID = \"OywO6QITvrp4dKPWixRWXQ\";\nfunction UserBlock(_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\n    return (react_1.default.createElement(\"a\", { \n        // href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=random_string&redirect_uri=https://localhost:3000/auth&duration=permanent&scope=read submit identity`}\n        href: \"https://www.reddit.com/api/v1/authorize?client_id=\".concat(CLIENT_ID, \"&response_type=code&state=random_string&redirect_uri=https://reddit-mirror.onrender.com/auth&duration=permanent&scope=read submit identity\"), className: userblock_css_1.default.userBox },\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage }) : react_1.default.createElement(Icons_1.IconAnon, null)),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\n            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: interface_1.Ecolor.grey99 }, \"\\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430\")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? interface_1.Ecolor.black : interface_1.Ecolor.grey99 }, username || \"Войти\")))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\nfunction ThreadTitle() {\n    return react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Feed\");\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Icon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar interface_1 = __webpack_require__(/*! ../../utils/ts/interface */ \"./src/utils/ts/interface.ts\");\nfunction Icon(props) {\n    var name = props.name, size = props.size, className = props.className;\n    var Component = interface_1.components[name];\n    return (react_1.default.createElement(\"span\", { className: className, style: { width: size, height: size } },\n        react_1.default.createElement(Component, null)));\n}\nexports.Icon = Icon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BlockIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction BlockIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\n}\nexports.BlockIcon = BlockIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Commenticon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/Commenticon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction CommentIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\n}\nexports.CommentIcon = CommentIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Commenticon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconAnon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconAnon() {\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2  50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\n}\nexports.IconAnon = IconAnon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction MenuIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\n}\nexports.MenuIcon = MenuIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/WarningIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.WarningIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction WarningIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"12\", viewBox: \"0 0 14 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" })));\n}\nexports.WarningIcon = WarningIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/Icons/BlockIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/Icons/IconAnon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/Icons/WarningIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./Commenticon */ \"./src/shared/Icons/Commenticon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar actions_1 = __webpack_require__(/*! ../../store/token/actions */ \"./src/store/token/actions.ts\");\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    var dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        dispatch((0, actions_1.saveToken)());\n    });\n    return react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children);\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/NotFound.tsx":
/*!*********************************!*\
  !*** ./src/shared/NotFound.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.NotFound = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction NotFound() {\n    return react_1.default.createElement(\"div\", null, \"404 NOT FOUND\");\n}\nexports.NotFound = NotFound;\n\n\n//# sourceURL=webpack:///./src/shared/NotFound.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/CommentForm.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentForm/CommentForm.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/Post/CommentForm/commentform.css\"));\nfunction CommentForm() {\n    var _a = (0, react_1.useState)(\"\"), value = _a[0], setValue = _a[1];\n    function handleChange(event) {\n        setValue(event.target.value);\n    }\n    var _b = (0, react_hook_form_1.useForm)(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;\n    var onSubmit = function (data) {\n        alert(\"comment sent\");\n        setValue(\"\");\n    };\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit(onSubmit) },\n        react_1.default.createElement(\"textarea\", __assign({}, register(\"comment\", { required: true, minLength: 3 }), { className: commentform_css_1.default.input, value: value, \"aria-invalid\": errors.comment ? \"true\" : undefined, onChange: handleChange })),\n        errors.comment && react_1.default.createElement(\"span\", null, \"enter more that 3 symbols\"),\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/commentform.css":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentForm/commentform.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--1oHDO\",\n\t\"input\": \"commentform__input--28J_p\",\n\t\"button\": \"commentform__button--2-2qT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Post/CommentForm/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/Post/CommentForm/CommentForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Comments/Comments.tsx":
/*!***********************************************!*\
  !*** ./src/shared/Post/Comments/Comments.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Comments = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar effector_react_1 = __webpack_require__(/*! effector-react */ \"effector-react\");\nvar store_1 = __webpack_require__(/*! ../../../store/effector store/store */ \"./src/store/effector store/store.tsx\");\nvar getTimeFromTimestamp_1 = __webpack_require__(/*! ../../../utils/ts/getTimeFromTimestamp */ \"./src/utils/ts/getTimeFromTimestamp.ts\");\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\nvar CommentsControlled_1 = __webpack_require__(/*! ../CommentsControlled */ \"./src/shared/Post/CommentsControlled/index.ts\");\nfunction Comments(_a) {\n    var props = _a.props, number = _a.number, setOpenComment = _a.setOpenComment, openComment = _a.openComment;\n    var ref = (0, react_1.useRef)(null);\n    var formState = (0, effector_react_1.useStore)(store_1.$formState);\n    return number === 2 ? null : (react_1.default.createElement(\"div\", null, props.length !== 0 &&\n        props.map(function (item, index) {\n            var _a, _b, _c, _d;\n            return (react_1.default.createElement(\"div\", { className: \"comment\" }, item.data.body !== undefined && (react_1.default.createElement(\"div\", { style: { border: \"gray 1px solid\", marginBottom: 10, padding: 15 } },\n                react_1.default.createElement(\"div\", null,\n                    react_1.default.createElement(\"span\", { className: \"user\", style: { marginRight: 10 } }, (_a = item.data) === null || _a === void 0 ? void 0 : _a.author),\n                    react_1.default.createElement(\"span\", null,\n                        (0, getTimeFromTimestamp_1.getTimeFromTimestamp)((_b = item.data) === null || _b === void 0 ? void 0 : _b.created),\n                        \" \\u043D\\u0430\\u0437\\u0430\\u0434\")),\n                react_1.default.createElement(\"p\", { className: \"comenttext\" },\n                    \" \", (_c = item.data) === null || _c === void 0 ? void 0 :\n                    _c.body),\n                react_1.default.createElement(\"div\", null),\n                react_1.default.createElement(\"button\", { type: \"button\", ref: ref, onClick: function (e) {\n                        var _a;\n                        e.stopPropagation();\n                        (0, store_1.updateComment)(((_a = item.data) === null || _a === void 0 ? void 0 : _a.author) + \", \");\n                        setOpenComment(item.data.id);\n                        (0, store_1.updateForm)(\"open\");\n                    } },\n                    react_1.default.createElement(\"span\", { style: { marginRight: 5, display: \"flex\", alignItems: \"center\" } }, \" \\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C \"),\n                    \" \",\n                    react_1.default.createElement(Icons_1.CommentIcon, null)),\n                openComment == item.data.id && formState === \"open\" && react_1.default.createElement(CommentsControlled_1.CommentsControlled, { user: (_d = item.data) === null || _d === void 0 ? void 0 : _d.author })))));\n        })));\n}\nexports.Comments = Comments;\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/Post/Comments/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Post/Comments/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/Post/Comments/Comments.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/index.ts?");

/***/ }),

/***/ "./src/shared/Post/CommentsControlled/CommentsControlled.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/Post/CommentsControlled/CommentsControlled.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsControlled = void 0;\nvar effector_react_1 = __webpack_require__(/*! effector-react */ \"effector-react\");\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar store_1 = __webpack_require__(/*! ../../../store/effector store/store */ \"./src/store/effector store/store.tsx\");\nvar commentscontrolled_css_1 = __importDefault(__webpack_require__(/*! ./commentscontrolled.css */ \"./src/shared/Post/CommentsControlled/commentscontrolled.css\"));\nfunction CommentsControlled(_a) {\n    var user = _a.user;\n    var comment = (0, effector_react_1.useStore)(store_1.$comment);\n    var ref = (0, react_1.useRef)(null);\n    (0, react_1.useEffect)(function () {\n        var _a, _b;\n        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();\n        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.setSelectionRange(comment.length, comment.length);\n    }, [comment]);\n    var handleChange = function (event) {\n        (0, store_1.updateComment)(event.target.value);\n    };\n    function handleSubmit(event) {\n        event.preventDefault();\n        (0, store_1.updateForm)(\"closed\");\n    }\n    if (ref == null)\n        return null;\n    return (react_1.default.createElement(\"div\", { className: \"form\" },\n        react_1.default.createElement(\"form\", { className: commentscontrolled_css_1.default.form, onSubmit: handleSubmit },\n            react_1.default.createElement(\"textarea\", { className: commentscontrolled_css_1.default.input, value: comment, ref: ref, onChange: handleChange }),\n            react_1.default.createElement(\"button\", { className: commentscontrolled_css_1.default.button }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C \"))));\n}\nexports.CommentsControlled = CommentsControlled;\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsControlled/CommentsControlled.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentsControlled/commentscontrolled.css":
/*!*******************************************************************!*\
  !*** ./src/shared/Post/CommentsControlled/commentscontrolled.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentscontrolled__form--HqR5u\",\n\t\"input\": \"commentscontrolled__input--33ZJP\",\n\t\"button\": \"commentscontrolled__button--17Iwu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsControlled/commentscontrolled.css?");

/***/ }),

/***/ "./src/shared/Post/CommentsControlled/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentsControlled/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentsControlled */ \"./src/shared/Post/CommentsControlled/CommentsControlled.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsControlled/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Post = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar effector_react_1 = __webpack_require__(/*! effector-react */ \"effector-react\");\nvar store_1 = __webpack_require__(/*! ../../store/effector store/store */ \"./src/store/effector store/store.tsx\");\nvar Comments_1 = __webpack_require__(/*! ./Comments */ \"./src/shared/Post/Comments/index.ts\");\nvar useCommentData_1 = __webpack_require__(/*! ../../hooks/useCommentData */ \"./src/hooks/useCommentData.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar CommentForm_1 = __webpack_require__(/*! ./CommentForm */ \"./src/shared/Post/CommentForm/index.ts\");\nfunction Post(_a) {\n    var onClose = _a.onClose, selftext = _a.selftext, id = _a.id, title = _a.title;\n    var commentary = (0, useCommentData_1.useCommentData)(id);\n    var _b = (0, react_1.useState)(\"\"), openComment = _b[0], setOpenComment = _b[1];\n    var ref = (0, react_1.useRef)(null);\n    var navigate = (0, react_router_dom_1.useNavigate)();\n    var loading = (0, effector_react_1.useStore)(store_1.$loading);\n    (0, react_1.useEffect)(function () {\n        function handleClick(event) {\n            var _a;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                onClose === null || onClose === void 0 ? void 0 : onClose();\n                navigate(\"/posts\");\n            }\n        }\n        document.addEventListener(\"click\", handleClick);\n        return function () {\n            document.removeEventListener(\"click\", handleClick);\n        };\n    }, []);\n    var node = document.querySelector(\"#modal_root\");\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", null,\n        loading && react_1.default.createElement(\"div\", { className: post_css_1.default.loader }),\n        !loading && commentary.length > 0 && (react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\n            react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"div\", { className: post_css_1.default.content },\n                    react_1.default.createElement(\"h2\", { className: post_css_1.default.header }, title),\n                    react_1.default.createElement(\"p\", null, selftext)),\n                react_1.default.createElement(CommentForm_1.CommentForm, null),\n                react_1.default.createElement(Comments_1.Comments, { openComment: openComment, setOpenComment: setOpenComment, number: 0, props: commentary }))))), node);\n}\nexports.Post = Post;\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"close\": \"post__close--1HSqz\",\n\t\"divider\": \"post__divider--2etHm\",\n\t\"karmaCounter\": \"post__karmaCounter--2WnET\",\n\t\"karmaValue\": \"post__karmaValue--i6xNh\",\n\t\"down\": \"post__down--1Ckos\",\n\t\"up\": \"post__up--14YMq\",\n\t\"avatarBox\": \"post__avatarBox--1b0i7\",\n\t\"avatarImage\": \"post__avatarImage--3zuPp\",\n\t\"header\": \"post__header--1d6RT\",\n\t\"ldsring\": \"post__ldsring--kKmhi\",\n\t\"lds-ring\": \"post__lds-ring--2c078\",\n\t\"loader\": \"post__loader--1dVPP\",\n\t\"spin\": \"post__spin--316Dh\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Text = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nvar interface_1 = __webpack_require__(/*! ../../utils/ts/interface */ \"./src/utils/ts/interface.ts\");\nfunction Text(props) {\n    var _a, _b, _c;\n    var _d = props.As, As = _d === void 0 ? \"span\" : _d, _e = props.color, color = _e === void 0 ? interface_1.Ecolor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\".concat(size)], (_a = {}, _a[text_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c), text_css_1.default[color]);\n    return react_1.default.createElement(As, { className: classes }, children);\n}\nexports.Text = Text;\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"upperCase\": \"text__upperCase--2EMyT\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/store/effector store/store.tsx":
/*!********************************************!*\
  !*** ./src/store/effector store/store.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.$formState = exports.updateForm = exports.$loading = exports.updateLoading = exports.$title = exports.updateTitle = exports.$selftext = exports.updateSelftext = exports.$id = exports.updateId = exports.$count = exports.updateCount = exports.$comment = exports.updateComment = exports.$token = exports.updateToken = exports.$posts = exports.updatePosts = exports.$comments = exports.updateComments = void 0;\nvar effector_1 = __webpack_require__(/*! effector */ \"effector\");\nexports.updateComments = (0, effector_1.createEvent)();\nexports.$comments = (0, effector_1.createStore)([]).on(exports.updateComments, function (_, newComments) { return newComments; });\nexports.updatePosts = (0, effector_1.createEvent)();\nexports.$posts = (0, effector_1.createStore)([]).on(exports.updatePosts, function (_, newPost) { return newPost; });\nexports.updateToken = (0, effector_1.createEvent)();\nexports.$token = (0, effector_1.createStore)(\"\").on(exports.updateToken, function (_, newToken) { return newToken; });\nexports.updateComment = (0, effector_1.createEvent)();\nexports.$comment = (0, effector_1.createStore)(\"\").on(exports.updateComment, function (_, newComment) { return newComment; });\nexports.updateCount = (0, effector_1.createEvent)();\nexports.$count = (0, effector_1.createStore)(0).on(exports.updateCount, function (_, newCount) { return newCount; });\nexports.updateId = (0, effector_1.createEvent)();\nexports.$id = (0, effector_1.createStore)(\"\").on(exports.updateId, function (_, newId) { return newId; });\nexports.updateSelftext = (0, effector_1.createEvent)();\nexports.$selftext = (0, effector_1.createStore)(\"\").on(exports.updateSelftext, function (_, newsf) { return newsf; });\nexports.updateTitle = (0, effector_1.createEvent)();\nexports.$title = (0, effector_1.createStore)(\"\").on(exports.updateTitle, function (_, newTitle) { return newTitle; });\nexports.updateLoading = (0, effector_1.createEvent)();\nexports.$loading = (0, effector_1.createStore)(false).on(exports.updateLoading, function (_, newLoading) { return newLoading; });\nexports.updateForm = (0, effector_1.createEvent)();\nexports.$formState = (0, effector_1.createStore)(\"\").on(exports.updateForm, function (_, newForm) { return newForm; });\n\n\n//# sourceURL=webpack:///./src/store/effector_store/store.tsx?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nexports.ME_REQUEST = \"ME_REQUEST\";\nvar meRequest = function () { return ({\n    type: exports.ME_REQUEST,\n}); };\nexports.meRequest = meRequest;\n///\nexports.ME_REQUEST_SUCCESS = \"ME_REQUEST_SUCCESS\";\nvar meRequestSuccess = function (data) { return ({\n    type: exports.ME_REQUEST_SUCCESS,\n    data: data,\n}); };\nexports.meRequestSuccess = meRequestSuccess;\nexports.ME_REQUEST_ERROR = \"ME_REQUEST_ERROR\";\nvar meRequestError = function (error) { return ({\n    type: exports.ME_REQUEST_ERROR,\n    error: error,\n}); };\nexports.meRequestError = meRequestError;\nvar meRequestAsync = function () { return function (dispatch, getState) {\n    dispatch((0, exports.meRequest)());\n    var token = getState().token.value || localStorage.getItem(\"token\");\n    axios_1.default\n        .get(\"https://oauth.reddit.com/api/v1/me\", {\n        headers: { Authorization: \"bearer \".concat(token) },\n    })\n        .then(function (resp) {\n        var userData = resp.data;\n        var myUserData = { name: userData.name, iconImg: userData.icon_img };\n        dispatch((0, exports.meRequestSuccess)(myUserData));\n    })\n        .catch(function (error) {\n        console.log(error);\n        dispatch((0, exports.meRequestError)(String(error)));\n    });\n}; };\nexports.meRequestAsync = meRequestAsync;\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meReducer = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\nvar meReducer = function (state, action) {\n    switch (action.type) {\n        case actions_1.ME_REQUEST:\n            return __assign(__assign({}, state), { loading: true });\n        case actions_1.ME_REQUEST_ERROR:\n            return __assign(__assign({}, state), { error: action.error, loading: false });\n        case actions_1.ME_REQUEST_SUCCESS:\n            return __assign(__assign({}, state), { data: action.data, loading: false });\n        default:\n            return state;\n    }\n};\nexports.meReducer = meReducer;\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rootReducer = void 0;\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\nvar actions_2 = __webpack_require__(/*! ./token/actions */ \"./src/store/token/actions.ts\");\nvar reducer_2 = __webpack_require__(/*! ./token/reducer */ \"./src/store/token/reducer.ts\");\nvar initialState = {\n    token: {\n        value: \"\",\n        error: \"\",\n    },\n    me: {\n        loading: false,\n        error: \"\",\n        data: {},\n    },\n};\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case actions_2.SET_TOKEN:\n            return __assign(__assign({}, state), { token: (0, reducer_2.tokenReducer)(state.token, action) });\n        case actions_1.ME_REQUEST:\n        case actions_1.ME_REQUEST_SUCCESS:\n        case actions_1.ME_REQUEST_ERROR:\n            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\n        default:\n            return state;\n    }\n};\nexports.rootReducer = rootReducer;\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/token/actions.ts":
/*!************************************!*\
  !*** ./src/store/token/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.saveToken = exports.setTokenError = exports.SET_TOKEN_ERROR = exports.setToken = exports.SET_TOKEN = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar CLIENT_ID = \"TtTT3iNgIdJIJ1X2EwAlBA\";\n// const CLIENT_ID = \"OywO6QITvrp4dKPWixRWXQ\";\nexports.SET_TOKEN = \"SET_TOKEN\";\nvar setToken = function (value) { return ({\n    type: exports.SET_TOKEN,\n    value: value,\n}); };\nexports.setToken = setToken;\nexports.SET_TOKEN_ERROR = \"SET_TOKEN_ERROR\";\nvar setTokenError = function (error) { return ({\n    type: exports.SET_TOKEN_ERROR,\n    error: error,\n}); };\nexports.setTokenError = setTokenError;\nvar saveToken = function () { return function (dispatch, getState) {\n    if (!CLIENT_ID || getState().token.value)\n        return;\n    var query = new URLSearchParams(document.location.search);\n    var code = query.get(\"code\");\n    var pathname = document.location.pathname;\n    if (pathname !== \"/auth\")\n        return;\n    axios_1.default\n        .post(\"https://www.reddit.com/api/v1/access_token\", \"grant_type=authorization_code&code=\".concat(code, \"&redirect_uri=https://reddit-mirror.onrender.com/auth\"), {\n        auth: { username: CLIENT_ID, password: \"ECtgFqN-8hFphYBAqVJaZBzU-VsRcQ\" },\n        headers: { \"Content-type\": \"application/x-www-form-urlencoded\" },\n    })\n        // .post(\"https://www.reddit.com/api/v1/access_token\", `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`, {\n        //   auth: { username: CLIENT_ID, password: \"WZr35mDrmGDIuk40CoVfIIXfjPyaPA\" },\n        //   headers: { \"Content-type\": \"application/x-www-form-urlencoded\" },\n        // })\n        .then(function (_a) {\n        var data = _a.data;\n        dispatch((0, exports.setToken)(data[\"access_token\"]));\n        localStorage.setItem(\"token\", data[\"access_token\"]);\n    })\n        .catch(function (error) {\n        console.log(error);\n        dispatch((0, exports.setTokenError)(String(error)));\n    });\n}; };\nexports.saveToken = saveToken;\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

/***/ }),

/***/ "./src/store/token/reducer.ts":
/*!************************************!*\
  !*** ./src/store/token/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.tokenReducer = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/token/actions.ts\");\nvar tokenReducer = function (state, action) {\n    switch (action.type) {\n        case actions_1.SET_TOKEN:\n            return __assign(__assign({}, state), { value: action.value, error: \"\" });\n        case actions_1.SET_TOKEN_ERROR:\n            return __assign(__assign({}, state), { error: action.error });\n        default:\n            return state;\n    }\n};\nexports.tokenReducer = tokenReducer;\n\n\n//# sourceURL=webpack:///./src/store/token/reducer.ts?");

/***/ }),

/***/ "./src/utils/react/genericList.tsx":
/*!*****************************************!*\
  !*** ./src/utils/react/genericList.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GenericList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction GenericList(_a) {\n    var list = _a.list;\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\n        var _b = _a.As, As = _b === void 0 ? \"div\" : _b, id = _a.id, className = _a.className, divider = _a.divider, listElement = _a.listElement, text = _a.text, onClick = _a.onClick, href = _a.href;\n        return (react_1.default.createElement(As, { className: className, onClick: function () { return id; }, key: id, href: href },\n            listElement,\n            text,\n            divider));\n    })));\n}\nexports.GenericList = GenericList;\n\n\n//# sourceURL=webpack:///./src/utils/react/genericList.tsx?");

/***/ }),

/***/ "./src/utils/ts/getTimeFromTimestamp.ts":
/*!**********************************************!*\
  !*** ./src/utils/ts/getTimeFromTimestamp.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getTimeFromTimestamp = void 0;\nfunction getTimeFromTimestamp(timestamp) {\n    var end = Date.now();\n    var elapsed = end - timestamp * 1000;\n    var seconds = Math.trunc(elapsed / 1000);\n    var h = Math.floor(seconds / 3600);\n    var m = Math.floor((seconds % 3600) / 60);\n    var s = Math.floor((seconds % 3600) % 60);\n    var hDisplay = h > 0 ? h + \"ч \" : \"\";\n    var mDisplay = h > 0 ? \"\" : m + \"мин \";\n    var sDisplay = m > 0 ? \"\" : s + \"сек\";\n    return hDisplay + mDisplay + sDisplay;\n}\nexports.getTimeFromTimestamp = getTimeFromTimestamp;\n\n\n//# sourceURL=webpack:///./src/utils/ts/getTimeFromTimestamp.ts?");

/***/ }),

/***/ "./src/utils/ts/interface.ts":
/*!***********************************!*\
  !*** ./src/utils/ts/interface.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Ecolor = exports.components = exports.EIcons = void 0;\nvar Icons_1 = __webpack_require__(/*! ../../shared/Icons */ \"./src/shared/Icons/index.ts\");\nvar EIcons;\n(function (EIcons) {\n    EIcons[\"block\"] = \"block\";\n    EIcons[\"anon\"] = \"anon\";\n    EIcons[\"menu\"] = \"menu\";\n    EIcons[\"report\"] = \"report\";\n    EIcons[\"comment\"] = \"comment\";\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\nexports.components = {\n    block: Icons_1.BlockIcon,\n    anon: Icons_1.IconAnon,\n    menu: Icons_1.MenuIcon,\n    report: Icons_1.WarningIcon,\n    comment: Icons_1.CommentIcon,\n};\nvar Ecolor;\n(function (Ecolor) {\n    Ecolor[\"black\"] = \"black\";\n    Ecolor[\"orange\"] = \"orange\";\n    Ecolor[\"green\"] = \"green\";\n    Ecolor[\"white\"] = \"white\";\n    Ecolor[\"grayF4\"] = \"grayF4\";\n    Ecolor[\"greyF3\"] = \"greyF3\";\n    Ecolor[\"greyD9\"] = \"greyD9\";\n    Ecolor[\"greyC4\"] = \"greyC4\";\n    Ecolor[\"grey99\"] = \"grey99\";\n    Ecolor[\"grey66\"] = \"grey66\";\n})(Ecolor = exports.Ecolor || (exports.Ecolor = {}));\n\n\n//# sourceURL=webpack:///./src/utils/ts/interface.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "effector":
/*!***************************!*\
  !*** external "effector" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"effector\");\n\n//# sourceURL=webpack:///external_%22effector%22?");

/***/ }),

/***/ "effector-react":
/*!*********************************!*\
  !*** external "effector-react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"effector-react\");\n\n//# sourceURL=webpack:///external_%22effector-react%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });