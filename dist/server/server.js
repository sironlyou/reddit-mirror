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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.$loading = exports.updateLoading = exports.$title = exports.updateTitle = exports.$selftext = exports.updateSelftext = exports.$id = exports.updateId = exports.$count = exports.updateCount = exports.$comment = exports.updateComment = exports.$token = exports.updateToken = exports.$posts = exports.updatePosts = exports.$comments = exports.updateComments = void 0;
var effector_1 = __webpack_require__(65);
exports.updateComments = (0, effector_1.createEvent)();
exports.$comments = (0, effector_1.createStore)([]).on(exports.updateComments, function (_, newComments) { return newComments; });
exports.updatePosts = (0, effector_1.createEvent)();
exports.$posts = (0, effector_1.createStore)([]).on(exports.updatePosts, function (_, newPost) { return newPost; });
exports.updateToken = (0, effector_1.createEvent)();
exports.$token = (0, effector_1.createStore)("").on(exports.updateToken, function (_, newToken) { return newToken; });
exports.updateComment = (0, effector_1.createEvent)();
exports.$comment = (0, effector_1.createStore)("").on(exports.updateComment, function (_, newComment) { return newComment; });
exports.updateCount = (0, effector_1.createEvent)();
exports.$count = (0, effector_1.createStore)(0).on(exports.updateCount, function (_, newCount) { return newCount; });
exports.updateId = (0, effector_1.createEvent)();
exports.$id = (0, effector_1.createStore)("").on(exports.updateId, function (_, newId) { return newId; });
exports.updateSelftext = (0, effector_1.createEvent)();
exports.$selftext = (0, effector_1.createStore)("").on(exports.updateSelftext, function (_, newsf) { return newsf; });
exports.updateTitle = (0, effector_1.createEvent)();
exports.$title = (0, effector_1.createStore)("").on(exports.updateTitle, function (_, newTitle) { return newTitle; });
exports.updateLoading = (0, effector_1.createEvent)();
exports.$loading = (0, effector_1.createStore)(false).on(exports.updateLoading, function (_, newLoading) { return newLoading; });


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Ecolor = exports.components = exports.EIcons = void 0;
var Icons_1 = __webpack_require__(5);
var EIcons;
(function (EIcons) {
    EIcons["block"] = "block";
    EIcons["anon"] = "anon";
    EIcons["menu"] = "menu";
    EIcons["report"] = "report";
    EIcons["comment"] = "comment";
})(EIcons = exports.EIcons || (exports.EIcons = {}));
exports.components = {
    block: Icons_1.BlockIcon,
    anon: Icons_1.IconAnon,
    menu: Icons_1.MenuIcon,
    report: Icons_1.WarningIcon,
    comment: Icons_1.CommentIcon,
};
var Ecolor;
(function (Ecolor) {
    Ecolor["black"] = "black";
    Ecolor["orange"] = "orange";
    Ecolor["green"] = "green";
    Ecolor["white"] = "white";
    Ecolor["grayF4"] = "grayF4";
    Ecolor["greyF3"] = "greyF3";
    Ecolor["greyD9"] = "greyD9";
    Ecolor["greyC4"] = "greyC4";
    Ecolor["grey99"] = "grey99";
    Ecolor["grey66"] = "grey66";
})(Ecolor = exports.Ecolor || (exports.Ecolor = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("effector-react");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = exports.setTokenError = exports.SET_TOKEN_ERROR = exports.setToken = exports.SET_TOKEN = void 0;
var axios_1 = __importDefault(__webpack_require__(4));
var CLIENT_ID = "TtTT3iNgIdJIJ1X2EwAlBA";
exports.SET_TOKEN = "SET_TOKEN";
var setToken = function (value) { return ({
    type: exports.SET_TOKEN,
    value: value,
}); };
exports.setToken = setToken;
exports.SET_TOKEN_ERROR = "SET_TOKEN_ERROR";
var setTokenError = function (error) { return ({
    type: exports.SET_TOKEN_ERROR,
    error: error,
}); };
exports.setTokenError = setTokenError;
var saveToken = function () { return function (dispatch, getState) {
    if (!CLIENT_ID || getState().token.value)
        return;
    var query = new URLSearchParams(document.location.search);
    var code = query.get("code");
    var pathname = document.location.pathname;
    if (pathname !== "/auth")
        return;
    axios_1.default
        .post("https://www.reddit.com/api/v1/access_token", "grant_type=authorization_code&code=".concat(code, "&redirect_uri=https://my-reddit-mirror.onrender.com/auth"), {
        auth: { username: CLIENT_ID, password: "ECtgFqN-8hFphYBAqVJaZBzU-VsRcQ" },
        headers: { "Content-type": "application/x-www-form-urlencoded" },
    })
        .then(function (_a) {
        var data = _a.data;
        dispatch((0, exports.setToken)(data["access_token"]));
    })
        .catch(function (error) {
        console.log(error);
        dispatch((0, exports.setTokenError)(String(error)));
    });
}; };
exports.saveToken = saveToken;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(4));
exports.ME_REQUEST = "ME_REQUEST";
var meRequest = function () { return ({
    type: exports.ME_REQUEST,
}); };
exports.meRequest = meRequest;
///
exports.ME_REQUEST_SUCCESS = "ME_REQUEST_SUCCESS";
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data,
}); };
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = "ME_REQUEST_ERROR";
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error,
}); };
exports.meRequestError = meRequestError;
var meRequestAsync = function () { return function (dispatch, getState) {
    dispatch((0, exports.meRequest)());
    axios_1.default
        .get("https://oauth.reddit.com/api/v1/me", {
        headers: { Authorization: "bearer ".concat(getState().token.value) },
    })
        .then(function (resp) {
        var userData = resp.data;
        var myUserData = { name: userData.name, iconImg: userData.icon_img };
        dispatch((0, exports.meRequestSuccess)(myUserData));
    })
        .catch(function (error) {
        console.log(error);
        dispatch((0, exports.meRequestError)(String(error)));
    });
}; };
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(14));
var server_1 = __importDefault(__webpack_require__(15));
var indexTemplate_1 = __webpack_require__(16);
var App_1 = __webpack_require__(17);
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use("/static", express_1.default.static("./dist/client"));
app.get('/auth', function (req, response) {
    response.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.get("*", function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.listen(PORT, function () {
    console.log("server started on port http://localhost:".concat(PORT));
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Reddit</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n</head>\n\n<body>\n  <div id=\"react_root\">".concat(content, "</div>\n  <div id=\"modal_root\"></div> \n  <div id=\"dropdown_root\"></div>\n</body>\n\n</html>\n"); };
exports.indexTemplate = indexTemplate;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
__webpack_require__(18);
var root_1 = __webpack_require__(20);
var Layout_1 = __webpack_require__(21);
var Header_1 = __webpack_require__(24);
var Content_1 = __webpack_require__(47);
var CardsList_1 = __webpack_require__(50);
var redux_1 = __webpack_require__(104);
var react_redux_1 = __webpack_require__(2);
var redux_devtools_extension_1 = __webpack_require__(105);
var reducer_1 = __webpack_require__(106);
var redux_thunk_1 = __importDefault(__webpack_require__(109));
var react_router_dom_1 = __webpack_require__(6);
var NotFound_1 = __webpack_require__(110);
var store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Content_1.Content, null,
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/posts/*", element: react_1.default.createElement(CardsList_1.CardsList, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/auth", element: react_1.default.createElement(CardsList_1.CardsList, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/posts" }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFound_1.NotFound, null) }))))))));
}
///
exports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(19);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\n    --black: #333333;\n    --orange: #CC6633;\n    --green: #A4CC33;\n    --whiteLightness: 100%;\n    --white: hsl(0, 0%, var(--whiteLightness));\n    --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\n    --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\n    --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\n    --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\n    --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\n    --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\n    --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background-color: var(--grayF4);\n    font-size: 14px;\n    line-height: 16px;\n    font-family: 'Roboto', serif;\n}\n\n* {\n    color: var(--black);\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\nbutton {\n    padding: 0;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(2);
var actions_1 = __webpack_require__(8);
var layout_css_1 = __importDefault(__webpack_require__(23));
function Layout(_a) {
    var children = _a.children;
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, actions_1.saveToken)());
    });
    return react_1.default.createElement("div", { className: layout_css_1.default.layout }, children);
}
exports.Layout = Layout;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(26));
var SearchBlock_1 = __webpack_require__(27);
var ThreadTitle_1 = __webpack_require__(44);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null)));
}
exports.Header = Header;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var searchblock_css_1 = __importDefault(__webpack_require__(29));
var UserBlock_1 = __webpack_require__(30);
var useUserData_1 = __webpack_require__(43);
function SearchBlock() {
    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading;
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--3aDPv"
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userblock_css_1 = __importDefault(__webpack_require__(32));
var Icons_1 = __webpack_require__(5);
var Break_1 = __webpack_require__(38);
var Text_1 = __webpack_require__(9);
var interface_1 = __webpack_require__(3);
var CLIENT_ID = "TtTT3iNgIdJIJ1X2EwAlBA";
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=".concat(CLIENT_ID, "&response_type=code&state=random_string&redirect_uri=https://reddit-mirror.onrender.com/auth&duration=permanent&scope=read submit identity"), className: userblock_css_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_css_1.default.avatarBox }, avatarSrc ? react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_css_1.default.avatarImage }) : react_1.default.createElement(Icons_1.IconAnon, null)),
        react_1.default.createElement("div", { className: userblock_css_1.default.username },
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: interface_1.Ecolor.grey99 }, "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? interface_1.Ecolor.black : interface_1.Ecolor.grey99 }, username || "Аноним")))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--24rEF",
	"avatarBox": "userblock__avatarBox--2OTfi",
	"avatarImage": "userblock__avatarImage--2ryXC",
	"username": "userblock__username--3bLc0"
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function BlockIcon() {
    return (react_1.default.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z", fill: "#999999" })));
}
exports.BlockIcon = BlockIcon;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function IconAnon() {
    return (react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2  50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.IconAnon = IconAnon;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MenuIcon() {
    return (react_1.default.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function WarningIcon() {
    return (react_1.default.createElement("svg", { width: "14", height: "12", viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z", fill: "#999999" })));
}
exports.WarningIcon = WarningIcon;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function CommentIcon() {
    return (react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.CommentIcon = CommentIcon;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var break_css_1 = __importDefault(__webpack_require__(40));
var classnames_1 = __importDefault(__webpack_require__(11));
function Break(props) {
    var _a, _b, _c, _d, _e;
    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(break_css_1.default["s".concat(size)], (_a = {}, _a[break_css_1.default["mobile_s".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[break_css_1.default["tablet_s".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[break_css_1.default["desktop_s".concat(desktopSize)]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));
}
exports.Break = Break;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--rnbuA",
	"s8": "break__s8--2ubV4",
	"s12": "break__s12--3dSW2",
	"s16": "break__s16--2bop2",
	"s20": "break__s20--PBhCB",
	"inline": "break__inline--22pcx",
	"top": "break__top--25ISJ",
	"mobile_s4": "break__mobile_s4--LrEFY",
	"mobile_s8": "break__mobile_s8--1Tmgm",
	"mobile_s12": "break__mobile_s12--2En9X",
	"mobile_s16": "break__mobile_s16--2KmPq",
	"mobile_s20": "break__mobile_s20--1j8g5",
	"tablet_s4": "break__tablet_s4--2nTnL",
	"tablet_s8": "break__tablet_s8--7zEhs",
	"tablet_s12": "break__tablet_s12--3Y-kT",
	"tablet_s16": "break__tablet_s16--2rsLQ",
	"tablet_s20": "break__tablet_s20--V1f92",
	"desktop_s4": "break__desktop_s4--3mFLY",
	"desktop_s8": "break__desktop_s8--2uQYJ",
	"desktop_s12": "break__desktop_s12--1-0wy",
	"desktop_s16": "break__desktop_s16--2k7qE",
	"desktop_s20": "break__desktop_s20--AjVsi"
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_css_1 = __importDefault(__webpack_require__(42));
var classnames_1 = __importDefault(__webpack_require__(11));
var interface_1 = __webpack_require__(3);
function Text(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? "span" : _d, _e = props.color, color = _e === void 0 ? interface_1.Ecolor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    var classes = (0, classnames_1.default)(text_css_1.default["s".concat(size)], (_a = {}, _a[text_css_1.default["m".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default["t".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default["d".concat(desktopSize)]] = desktopSize, _c), text_css_1.default[color]);
    return react_1.default.createElement(As, { className: classes }, children);
}
exports.Text = Text;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--Puvgs",
	"s20": "text__s20--3Xq66",
	"s16": "text__s16--G_lUr",
	"s14": "text__s14--jvCoO",
	"s12": "text__s12--2S2T2",
	"s10": "text__s10--DYLfy",
	"black": "text__black--1zchg",
	"orange": "text__orange--1RyAM",
	"green": "text__green--3mYQn",
	"white": "text__white--13JGE",
	"grayF4": "text__grayF4--2X2jV",
	"greyF3": "text__greyF3--2Lfsi",
	"greyD9": "text__greyD9--7iRFr",
	"greyC4": "text__greyC4--3oiNM",
	"grey99": "text__grey99--35u3B",
	"grey66": "text__grey66--373uw",
	"upperCase": "text__upperCase--2EMyT",
	"m28": "text__m28--2u2zs",
	"m20": "text__m20--1gFlM",
	"m16": "text__m16--cSY4u",
	"m14": "text__m14--s6pnr",
	"m12": "text__m12--1W0av",
	"m10": "text__m10--UtIkW",
	"bold": "text__bold--gb02H",
	"t28": "text__t28--A4rHF",
	"t20": "text__t20--78tCz",
	"t16": "text__t16--nkVMz",
	"t14": "text__t14--1Rj72",
	"t12": "text__t12--7txjW",
	"t10": "text__t10--n2R7f",
	"d28": "text__d28--3oIok",
	"d20": "text__d20--uwHxr",
	"d16": "text__d16--1Pwd1",
	"d14": "text__d14--3Futo",
	"d12": "text__d12--5X_qc",
	"d10": "text__d10--3pWnc"
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var actions_1 = __webpack_require__(10);
function useUserData() {
    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.value; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (!token)
            return;
        dispatch((0, actions_1.meRequestAsync)());
    }, [token]);
    return {
        data: data,
        loading: loading,
    };
}
exports.useUserData = useUserData;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_css_1 = __importDefault(__webpack_require__(46));
function ThreadTitle() {
    return react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Feed");
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--oxugx"
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(49));
function Content(_a) {
    var children = _a.children;
    return react_1.default.createElement("main", { className: content_css_1.default.content }, children);
}
exports.Content = Content;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardslist_css_1 = __importDefault(__webpack_require__(52));
var Card_1 = __webpack_require__(53);
var axios_1 = __importDefault(__webpack_require__(4));
var react_redux_1 = __webpack_require__(2);
var react_router_dom_1 = __webpack_require__(6);
var Post_1 = __webpack_require__(91);
var effector_react_1 = __webpack_require__(7);
var store_1 = __webpack_require__(1);
function CardsList() {
    var bottomOfList = (0, react_1.useRef)(null);
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.value; });
    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(""), errorLoading = _c[0], setErrorLoading = _c[1];
    var _d = (0, react_1.useState)(""), nextAfter = _d[0], setNextAfter = _d[1];
    var id = (0, effector_react_1.useStore)(store_1.$id);
    var selftext = (0, effector_react_1.useStore)(store_1.$selftext);
    var title = (0, effector_react_1.useStore)(store_1.$title);
    (0, react_1.useEffect)(function () {
        if (!token)
            return;
        function load() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, after, children_1, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            setLoading(true);
                            setErrorLoading("");
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios_1.default.get("https://oauth.reddit.com/best.json?sr_detail=true", {
                                    headers: { Authorization: "bearer ".concat(token) },
                                    params: {
                                        limit: 10,
                                        after: nextAfter,
                                    },
                                })];
                        case 2:
                            _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;
                            setNextAfter(after);
                            setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            setErrorLoading(String(error_1));
                            return [3 /*break*/, 4];
                        case 4:
                            setLoading(false);
                            return [2 /*return*/];
                    }
                });
            });
        }
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting)
                load();
        }, {
            rootMargin: "10px",
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current)
                observer.unobserve(bottomOfList.current);
        };
    }, [nextAfter, token]);
    return (react_1.default.createElement("ul", { className: cardslist_css_1.default.cardsList },
        posts.length === 0 && !loading && !errorLoading && react_1.default.createElement("div", { className: cardslist_css_1.default.error }, "Please log in to see posts"),
        posts.map(function (post) { return (react_1.default.createElement(Card_1.Card, { key: post.data.id, title: post.data.title, author: post.data.author, createdAt: post.data.created, karma: post.data.ups, thumbnail: post.data.thumbnail, permalink: post.data.permalink, id: post.data.id, selftext: post.data.selftext })); }),
        react_1.default.createElement("div", { ref: bottomOfList }),
        loading && react_1.default.createElement("div", { className: cardslist_css_1.default.error }, "Loading..."),
        errorLoading && (react_1.default.createElement("div", { role: "alert", className: cardslist_css_1.default.error }, errorLoading)),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/:id", element: react_1.default.createElement(Post_1.Post, { id: id, selftext: selftext, title: title }) }))));
}
exports.CardsList = CardsList;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslist__cardsList--1DoiZ",
	"error": "cardslist__error--1dxel"
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(55));
var Preview_1 = __webpack_require__(56);
var TextContent_1 = __webpack_require__(59);
var Menu_1 = __webpack_require__(67);
var Controls_1 = __webpack_require__(79);
function Card(_a) {
    var selftext = _a.selftext, title = _a.title, author = _a.author, createdAt = _a.createdAt, karma = _a.karma, thumbnail = _a.thumbnail, id = _a.id;
    return (react_1.default.createElement("li", { className: card_css_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { author: author, title: title, createdAt: createdAt, id: id, selftext: selftext }),
        react_1.default.createElement(Preview_1.Preview, { thumbnail: thumbnail }),
        react_1.default.createElement(Menu_1.Menu, null),
        react_1.default.createElement(Controls_1.Controls, { karma: karma })));
}
exports.Card = Card;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--7bN6-",
	"textContent": "card__textContent--3Ki_7"
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(57), exports);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(58));
function Preview(_a) {
    var thumbnail = _a.thumbnail;
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview },
        react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: (thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.includes("http")) ? thumbnail : "https://cdn.dribbble.com/users/1090020/screenshots/17342450/media/08b490886f49c5e041b3e6fbff8dc90c.png", alt: "previewImg" })));
}
exports.Preview = Preview;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--1Nukb",
	"previewImg": "preview__previewImg--3kTAV"
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(60), exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_css_1 = __importDefault(__webpack_require__(61));
var Title_1 = __webpack_require__(62);
var getTimeFromTimestamp_1 = __webpack_require__(66);
function TextContent(_a) {
    var selftext = _a.selftext, createdAt = _a.createdAt, author = _a.author, title = _a.title, id = _a.id;
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textcontent_css_1.default.metaData },
            react_1.default.createElement("div", { className: textcontent_css_1.default.userLink },
                react_1.default.createElement("img", { className: textcontent_css_1.default.avatar, src: "https://cdn.dribbble.com/users/174531/avatars/mini/15aa8b82e7c45563c3300038f5e18c5b.jpg?1575308145", alt: "avatar" }),
                react_1.default.createElement("a", { href: "#user-url", className: textcontent_css_1.default.username }, author)),
            react_1.default.createElement("span", { className: textcontent_css_1.default.createdAt },
                react_1.default.createElement("span", { className: textcontent_css_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
                (0, getTimeFromTimestamp_1.getTimeFromTimestamp)(createdAt),
                " \u043D\u0430\u0437\u0430\u0434")),
        react_1.default.createElement(Title_1.Title, { selftext: selftext, title: title, id: id })));
}
exports.TextContent = TextContent;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--2RuXa",
	"avatar": "textcontent__avatar--26Ggp",
	"metaData": "textcontent__metaData--1L7oU",
	"publishedLabel": "textcontent__publishedLabel--C6Pau",
	"createdAt": "textcontent__createdAt--1vECY",
	"userLink": "textcontent__userLink--2KE4t",
	"username": "textcontent__username--1Pcvf",
	"title": "textcontent__title--1gTmn",
	"postLink": "textcontent__postLink--11qrP"
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var title_css_1 = __importDefault(__webpack_require__(64));
var react_router_dom_1 = __webpack_require__(6);
var store_1 = __webpack_require__(1);
function Title(_a) {
    var title = _a.title, id = _a.id, selftext = _a.selftext;
    return (react_1.default.createElement("h2", { className: title_css_1.default.title },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/id:".concat(id), onClick: function (e) {
                (0, store_1.updateId)(id);
                (0, store_1.updateTitle)(title);
                (0, store_1.updateSelftext)(selftext);
                (0, store_1.updateLoading)(true);
            }, className: title_css_1.default.postLink }, title)));
}
exports.Title = Title;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title__title--3THtn",
	"postLink": "title__postLink--3ZH1E",
	"textContent": "title__textContent--1BWZQ"
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("effector");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeFromTimestamp = void 0;
function getTimeFromTimestamp(timestamp) {
    var end = Date.now();
    var elapsed = end - timestamp * 1000;
    var seconds = Math.trunc(elapsed / 1000);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor((seconds % 3600) % 60);
    var hDisplay = h > 0 ? h + "ч " : "";
    var mDisplay = h > 0 ? "" : m + "мин ";
    var sDisplay = m > 0 ? "" : s + "сек";
    return hDisplay + mDisplay + sDisplay;
}
exports.getTimeFromTimestamp = getTimeFromTimestamp;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importStar(__webpack_require__(0));
var menu_css_1 = __importDefault(__webpack_require__(69));
var MenuListItem_1 = __webpack_require__(70);
var Dropdown_1 = __webpack_require__(76);
var Text_1 = __webpack_require__(9);
var Icons_1 = __webpack_require__(5);
var interface_1 = __webpack_require__(3);
function Menu() {
    var _a, _b, _c, _d;
    var ref = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(false), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];
    var handleClick = function () {
        setIsDropdownOpen(!isDropdownOpen);
    };
    var x = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().right) || 0;
    var y = ((_b = ref.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().y) || 0;
    var width = ((_c = ref.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().left) || 0;
    var height = ((_d = ref.current) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect().height) || 0;
    if (typeof window !== "undefined") {
        x -= 171;
        y += height;
        y += window.scrollY;
        if (window.innerWidth > 1539) {
            x -= 70;
        }
        if (window.innerWidth < 768) {
            x += 15;
        }
    }
    return (react_1.default.createElement("div", { className: menu_css_1.default.menu },
        react_1.default.createElement("button", { className: menu_css_1.default.menuButton, onClick: handleClick, ref: ref },
            react_1.default.createElement(Icons_1.MenuIcon, null)),
        isDropdownOpen && (react_1.default.createElement(Dropdown_1.Dropdown, { button: ref.current, onClose: handleClick },
            react_1.default.createElement("div", { className: menu_css_1.default.dropdown, style: { top: y, left: x } },
                react_1.default.createElement(MenuListItem_1.MenuListItem, { postId: "123" }),
                react_1.default.createElement("button", { className: menu_css_1.default.closeButton },
                    react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: interface_1.Ecolor.grey66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))))));
}
exports.Menu = Menu;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--22Yos",
	"menuButton": "menu__menuButton--2RzAb",
	"dropdown": "menu__dropdown--2v5tI",
	"closeButton": "menu__closeButton--1Vmbj"
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuListItem = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var genericList_1 = __webpack_require__(72);
var interface_1 = __webpack_require__(3);
var Icon_1 = __webpack_require__(73);
var Text_1 = __webpack_require__(9);
var menulistitem_css_1 = __importDefault(__webpack_require__(75));
var LIST = [
    {
        As: "li",
        text: (react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        listElement: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Icon_1.Icon, { name: interface_1.EIcons.block, className: menulistitem_css_1.default.icon, size: 14 }))),
        className: menulistitem_css_1.default.menuItem,
    },
    {
        divider: react_1.default.createElement("div", { className: menulistitem_css_1.default.divider }),
    },
    {
        As: "li",
        text: (react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F")),
        listElement: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Icon_1.Icon, { name: interface_1.EIcons.report, className: menulistitem_css_1.default.icon, size: 14 }))),
        className: menulistitem_css_1.default.menuItem,
    },
];
function MenuListItem(_a) {
    var postId = _a.postId;
    return (react_1.default.createElement("ul", { className: menulistitem_css_1.default.menuItemsList },
        react_1.default.createElement(genericList_1.GenericList, { list: LIST })));
}
exports.MenuListItem = MenuListItem;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function GenericList(_a) {
    var list = _a.list;
    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {
        var _b = _a.As, As = _b === void 0 ? "div" : _b, id = _a.id, className = _a.className, divider = _a.divider, listElement = _a.listElement, text = _a.text, onClick = _a.onClick, href = _a.href;
        return (react_1.default.createElement(As, { className: className, onClick: function () { return id; }, key: id, href: href },
            listElement,
            text,
            divider));
    })));
}
exports.GenericList = GenericList;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var interface_1 = __webpack_require__(3);
function Icon(props) {
    var name = props.name, size = props.size, className = props.className;
    var Component = interface_1.components[name];
    return (react_1.default.createElement("span", { className: className, style: { width: size, height: size } },
        react_1.default.createElement(Component, null)));
}
exports.Icon = Icon;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menulistitem__menuItemsList--1tsVC",
	"menuItem": "menulistitem__menuItem--2wlF8",
	"divider": "menulistitem__divider--1_pX9"
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(77), exports);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __webpack_require__(12);
var dropdown_css_1 = __importDefault(__webpack_require__(78));
function Dropdown(_a) {
    var button = _a.button, children = _a.children, onClose = _a.onClose;
    if (!button)
        return null;
    var ref = (0, react_1.useRef)(null);
    var handleClick = function () {
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    (0, react_1.useEffect)(function () {
        function handleClickDoc(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)))
                onClose === null || onClose === void 0 ? void 0 : onClose();
        }
        document.addEventListener("click", handleClickDoc);
        return function () {
            document.removeEventListener("click", handleClickDoc);
        };
    }, []);
    var node = document.querySelector("#dropdown_root");
    if (!node)
        return null;
    return (0, react_dom_1.createPortal)(react_1.default.createElement("div", { className: dropdown_css_1.default.container, ref: ref },
        react_1.default.createElement("div", { onClick: handleClick, className: dropdown_css_1.default.list }, children)), node);
}
exports.Dropdown = Dropdown;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--a5Jzh",
	"listContainer": "dropdown__listContainer--YYYB3",
	"list": "dropdown__list--23slg"
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(81));
var KarmaCounter_1 = __webpack_require__(82);
var CommentsButton_1 = __webpack_require__(85);
var Actions_1 = __webpack_require__(88);
function Controls(_a) {
    var karma = _a.karma;
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { karma: karma }),
        react_1.default.createElement(CommentsButton_1.CommentsButton, null),
        react_1.default.createElement(Actions_1.Actions, null)));
}
exports.Controls = Controls;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1pbuI"
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(83), exports);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var karmacounter_css_1 = __importDefault(__webpack_require__(84));
function KarmaCounter(_a) {
    var karma = _a.karma;
    return (react_1.default.createElement("div", { className: karmacounter_css_1.default.karmaCounter },
        react_1.default.createElement("button", { className: karmacounter_css_1.default.up },
            react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" }))),
        react_1.default.createElement("span", { className: karmacounter_css_1.default.karmaValue }, karma),
        react_1.default.createElement("button", { className: karmacounter_css_1.default.down },
            react_1.default.createElement("svg", { className: karmacounter_css_1.default.down, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" })))));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaCounter": "karmacounter__karmaCounter--fMpNv",
	"karmaValue": "karmacounter__karmaValue--1Ho-U",
	"down": "karmacounter__down--1V_4R",
	"up": "karmacounter__up--1SZXL"
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(86), exports);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsbutton_css_1 = __importDefault(__webpack_require__(87));
function CommentsButton() {
    return (react_1.default.createElement("button", { className: commentsbutton_css_1.default.commentsButton },
        react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" }))));
}
exports.CommentsButton = CommentsButton;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsbutton__commentsButton--3bUHw",
	"commentsNumber": "commentsbutton__commentsNumber--3_qtU"
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var actions_css_1 = __importDefault(__webpack_require__(90));
function Actions() {
    return (react_1.default.createElement("div", { className: actions_css_1.default.actions },
        react_1.default.createElement("button", { className: actions_css_1.default.shareButton },
            react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))),
        react_1.default.createElement("button", { className: actions_css_1.default.saveButton },
            react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M12.1 6L13.5885 7.52667L10.4165 10.78L7.8165 8.11333L3 13.06L3.9165 14L7.8165 10L10.4165 12.6667L14.5115 8.47333L16 10V6H12.1Z", fill: "white" })))));
}
exports.Actions = Actions;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"saveButton": "actions__saveButton--2DgCN",
	"actions": "actions__actions--CKLJF",
	"shareButton": "actions__shareButton--K72CZ"
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(92), exports);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var post_css_1 = __importDefault(__webpack_require__(93));
var react_dom_1 = __importDefault(__webpack_require__(12));
var effector_react_1 = __webpack_require__(7);
var store_1 = __webpack_require__(1);
var Comments_1 = __webpack_require__(94);
var useCommentData_1 = __webpack_require__(99);
var react_router_dom_1 = __webpack_require__(6);
var CommentForm_1 = __webpack_require__(100);
function Post(_a) {
    var onClose = _a.onClose, selftext = _a.selftext, id = _a.id, title = _a.title;
    var commentary = (0, useCommentData_1.useCommentData)(id);
    var _b = (0, react_1.useState)(""), openComment = _b[0], setOpenComment = _b[1];
    var ref = (0, react_1.useRef)(null);
    var navigate = (0, react_router_dom_1.useNavigate)();
    var loading = (0, effector_react_1.useStore)(store_1.$loading);
    (0, react_1.useEffect)(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
                navigate("/posts");
            }
        }
        document.addEventListener("click", handleClick);
        return function () {
            document.removeEventListener("click", handleClick);
        };
    }, []);
    var node = document.querySelector("#modal_root");
    if (!node)
        return null;
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: post_css_1.default.modal, ref: ref },
        loading && (react_1.default.createElement("div", { style: { width: "100%", height: 160, display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center" } }, "loading...")),
        !loading && (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: post_css_1.default.content },
                react_1.default.createElement("h2", null, title),
                react_1.default.createElement("p", null, selftext)),
            react_1.default.createElement(CommentForm_1.CommentForm, null),
            react_1.default.createElement(Comments_1.Comments, { openComment: openComment, setOpenComment: setOpenComment, number: 0, props: commentary })))), node);
}
exports.Post = Post;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--yRo-c",
	"content": "post__content--2gFMc",
	"close": "post__close--1HSqz",
	"divider": "post__divider--2etHm",
	"karmaCounter": "post__karmaCounter--2WnET",
	"karmaValue": "post__karmaValue--i6xNh",
	"down": "post__down--1Ckos",
	"up": "post__up--14YMq",
	"avatarBox": "post__avatarBox--1b0i7",
	"avatarImage": "post__avatarImage--3zuPp"
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
var react_1 = __importStar(__webpack_require__(0));
var store_1 = __webpack_require__(1);
var Icons_1 = __webpack_require__(5);
var CommentsControlled_1 = __webpack_require__(96);
function Comments(_a) {
    var props = _a.props, number = _a.number, setOpenComment = _a.setOpenComment, openComment = _a.openComment;
    var ref = (0, react_1.useRef)(null);
    return number === 4 ? null : (react_1.default.createElement("div", null, props.length !== 0 &&
        props.map(function (item, index) {
            var _a, _b, _c;
            return (react_1.default.createElement("div", null, item.data.body !== undefined && (react_1.default.createElement("div", { className: "card", style: { marginLeft: 10 + number * 10 } },
                react_1.default.createElement("p", null,
                    "Author username: ", (_a = item.data) === null || _a === void 0 ? void 0 :
                    _a.author),
                react_1.default.createElement("p", null,
                    "comment: ", (_b = item.data) === null || _b === void 0 ? void 0 :
                    _b.body),
                react_1.default.createElement("button", { type: "button", ref: ref, onClick: function (e) {
                        var _a;
                        e.stopPropagation();
                        (0, store_1.updateComment)(((_a = item.data) === null || _a === void 0 ? void 0 : _a.author) + ", ");
                        setOpenComment(item.data.id);
                    } },
                    "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C ",
                    react_1.default.createElement(Icons_1.CommentIcon, null)),
                openComment == item.data.id && react_1.default.createElement(CommentsControlled_1.CommentsControlled, { user: (_c = item.data) === null || _c === void 0 ? void 0 : _c.author }),
                item.data !== undefined &&
                    item.data.replies !== undefined &&
                    item.data.replies.data !== undefined &&
                    item.data.replies.data.children !== undefined && (react_1.default.createElement(Comments, { openComment: openComment, setOpenComment: setOpenComment, number: ++number, props: item.data.replies.data.children }))))));
        })));
}
exports.Comments = Comments;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(97), exports);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsControlled = void 0;
var effector_react_1 = __webpack_require__(7);
var react_1 = __importStar(__webpack_require__(0));
var store_1 = __webpack_require__(1);
var commentscontrolled_css_1 = __importDefault(__webpack_require__(98));
function CommentsControlled(_a) {
    var user = _a.user;
    var comment = (0, effector_react_1.useStore)(store_1.$comment);
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.setSelectionRange(comment.length, comment.length);
    }, [comment]);
    var handleChange = function (event) {
        (0, store_1.updateComment)(event.target.value);
    };
    function handleSubmit(event) {
        event.preventDefault();
    }
    if (ref == null)
        return null;
    return (react_1.default.createElement("div", { className: "form" },
        react_1.default.createElement("form", { className: commentscontrolled_css_1.default.form, onSubmit: handleSubmit },
            react_1.default.createElement("textarea", { className: commentscontrolled_css_1.default.input, value: comment, ref: ref, onChange: handleChange }),
            react_1.default.createElement("button", { className: commentscontrolled_css_1.default.button }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C "))));
}
exports.CommentsControlled = CommentsControlled;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentscontrolled__form--HqR5u",
	"input": "commentscontrolled__input--33ZJP",
	"button": "commentscontrolled__button--17Iwu"
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommentData = void 0;
var axios_1 = __importDefault(__webpack_require__(4));
var effector_react_1 = __webpack_require__(7);
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var store_1 = __webpack_require__(1);
var useCommentData = function (id) {
    var comments = (0, effector_react_1.useStore)(store_1.$comments);
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.value; });
    (0, react_1.useEffect)(function () {
        function load() {
            return __awaiter(this, void 0, void 0, function () {
                var children, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios_1.default
                                    .get("https://oauth.reddit.com/comments/".concat(id, ".json"), {
                                    headers: { Authorization: "bearer ".concat(token) },
                                })
                                    .then(function (resp) {
                                    resp !== undefined && (0, store_1.updateComments)(resp.data[1].data.children);
                                    (0, store_1.updateLoading)(false);
                                })];
                        case 1:
                            children = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.log("comments error:", error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        load();
    }, []);
    return comments;
};
exports.useCommentData = useCommentData;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(101), exports);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_hook_form_1 = __webpack_require__(102);
var commentform_css_1 = __importDefault(__webpack_require__(103));
function CommentForm() {
    var _a = (0, react_1.useState)(""), value = _a[0], setValue = _a[1];
    function handleChange(event) {
        setValue(event.target.value);
    }
    var _b = (0, react_hook_form_1.useForm)(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;
    var onSubmit = function (data) {
        alert("comment sent");
        setValue("");
    };
    return (react_1.default.createElement("form", { className: commentform_css_1.default.form, onSubmit: handleSubmit(onSubmit) },
        react_1.default.createElement("textarea", __assign({}, register("comment", { required: true, minLength: 3 }), { className: commentform_css_1.default.input, value: value, "aria-invalid": errors.comment ? "true" : undefined, onChange: handleChange })),
        errors.comment && react_1.default.createElement("span", null, "enter more that 3 symbols"),
        react_1.default.createElement("button", { type: "submit", className: commentform_css_1.default.button }, "comment")));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentform__form--1oHDO",
	"input": "commentform__input--28J_p",
	"button": "commentform__button--2-2qT"
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var actions_1 = __webpack_require__(10);
var reducer_1 = __webpack_require__(107);
var actions_2 = __webpack_require__(8);
var reducer_2 = __webpack_require__(108);
var initialState = {
    token: {
        value: "",
        error: "",
    },
    me: {
        loading: false,
        error: "",
        data: {},
    },
};
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_2.SET_TOKEN:
            return __assign(__assign({}, state), { token: (0, reducer_2.tokenReducer)(state.token, action) });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(10);
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenReducer = void 0;
var actions_1 = __webpack_require__(8);
var tokenReducer = function (state, action) {
    switch (action.type) {
        case actions_1.SET_TOKEN:
            return __assign(__assign({}, state), { value: action.value, error: "" });
        case actions_1.SET_TOKEN_ERROR:
            return __assign(__assign({}, state), { error: action.error });
        default:
            return state;
    }
};
exports.tokenReducer = tokenReducer;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function NotFound() {
    return react_1.default.createElement("div", null, "404 NOT FOUND");
}
exports.NotFound = NotFound;


/***/ })
/******/ ]);