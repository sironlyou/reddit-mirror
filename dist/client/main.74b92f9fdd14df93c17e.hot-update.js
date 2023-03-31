webpackHotUpdate("main",{

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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.saveToken = exports.setTokenError = exports.SET_TOKEN_ERROR = exports.setToken = exports.SET_TOKEN = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar CLIENT_ID = \"TtTT3iNgIdJIJ1X2EwAlBA\";\n// const CLIENT_ID = \"OywO6QITvrp4dKPWixRWXQ\";\nexports.SET_TOKEN = \"SET_TOKEN\";\nvar setToken = function (value) { return ({\n    type: exports.SET_TOKEN,\n    value: value,\n}); };\nexports.setToken = setToken;\nexports.SET_TOKEN_ERROR = \"SET_TOKEN_ERROR\";\nvar setTokenError = function (error) { return ({\n    type: exports.SET_TOKEN_ERROR,\n    error: error,\n}); };\nexports.setTokenError = setTokenError;\nvar saveToken = function () { return function (dispatch, getState) {\n    if (!CLIENT_ID || getState().token.value)\n        return;\n    var query = new URLSearchParams(document.location.search);\n    var code = query.get(\"code\");\n    var pathname = document.location.pathname;\n    if (pathname !== \"/auth\")\n        return;\n    axios_1.default\n        .post(\"https://www.reddit.com/api/v1/access_token\", \"grant_type=authorization_code&code=\".concat(code, \"&redirect_uri=https://reddit-mirror.onrender.com/auth\"), {\n        auth: { username: CLIENT_ID, password: \"ECtgFqN-8hFphYBAqVJaZBzU-VsRcQ\" },\n        headers: { \"Content-type\": \"application/x-www-form-urlencoded\" },\n    })\n        // .post(\"https://www.reddit.com/api/v1/access_token\", `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`, {\n        //   auth: { username: CLIENT_ID, password: \"WZr35mDrmGDIuk40CoVfIIXfjPyaPA\" },\n        //   headers: { \"Content-type\": \"application/x-www-form-urlencoded\" },\n        // })\n        .then(function (_a) {\n        var data = _a.data;\n        dispatch((0, exports.setToken)(data[\"access_token\"]));\n        localStorage.setItem(\"token\", data[\"access_token\"]);\n    })\n        .catch(function (error) {\n        console.log(error);\n        dispatch((0, exports.setTokenError)(String(error)));\n    });\n}; };\nexports.saveToken = saveToken;\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

/***/ }),

/***/ "./src/store/token/reducer.ts":
/*!************************************!*\
  !*** ./src/store/token/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.tokenReducer = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/token/actions.ts\");\nvar tokenReducer = function (state, action) {\n    switch (action.type) {\n        case actions_1.SET_TOKEN:\n            return __assign(__assign({}, state), { value: action.value, error: \"\" });\n        case actions_1.SET_TOKEN_ERROR:\n            return __assign(__assign({}, state), { error: action.error });\n        default:\n            return state;\n    }\n};\nexports.tokenReducer = tokenReducer;\n\n\n//# sourceURL=webpack:///./src/store/token/reducer.ts?");

/***/ })

})