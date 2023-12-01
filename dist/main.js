/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/burger_grill.jpg */ \"./src/img/burger_grill.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Pacifico&family=Passion+One:wght@400;700&family=Roboto+Slab&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin-top: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Pacifico', sans-serif;\r\n    background-color: var(--bg);\r\n}\r\n\r\np {\r\n    font-family: 'Roboto Slab', serif;\r\n    font-weight: 400;\r\n}\r\n\r\n:root {\r\n    --navbar-links: black;\r\n    --primary: #BF3839;\r\n    --bg: #FEF1D9;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.logo {\r\n    font-size: 5rem;\r\n    width: 100vw;\r\n    background-color: var(--primary);\r\n    color: var(--bg);\r\n    text-align: center;\r\n}\r\n\r\n.navbar ul {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    /* Making it red just like the logo */\r\n    width: 100vw;\r\n    background-color: var(--primary);\r\n    color: var(--bg);\r\n\r\n}\r\n\r\nul li {\r\n    list-style: none;\r\n    padding-right: 3rem;\r\n    background-color: transparent;\r\n\r\n}\r\n\r\n.navbar_links {\r\n    display: block;\r\n    text-decoration: none;\r\n    font-size: 1.5rem;\r\n    background-color: var(--primary);\r\n    color: var(--bg);\r\n    width: 20vw;\r\n    text-align: center;\r\n}\r\n.navbar_links:hover {\r\n    font-style: italic;\r\n    background-color: var(--bg);\r\n    color: var(--primary);\r\n}\r\n.navbar_links:active, .navbar_links:focus {\r\n    background-color: var(--bg);\r\n    color: var(--primary);\r\n}\r\n\r\n/* Welcome */\r\n.welcome_page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    /* background-image: url(\"img/burger_grill.jpg\");\r\n    background-size: cover;\r\n    background-attachment: fixed; */\r\n}\r\n\r\n.title {\r\n    align-self: center;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    background-color: var(--bg);\r\n    text-align: center;\r\n\r\n}\r\n\r\n.description, .quote {\r\n    font-size: 1.1rem;\r\n    padding-left: 10vw;\r\n    padding-right: 10vw;\r\n    margin: 0;\r\n    padding-bottom: 20px;\r\n    background-color: var(--bg);\r\n}\r\n\r\n/* .title, .description, .quote {\r\n    background-color: var(--bg);\r\n    background-color: transparent;\r\n} */\r\n\r\n.quote {\r\n    font-style: italic;\r\n    font-size: 1.05rem;\r\n    color: rgba(0, 0, 0, 0.803);\r\n}\r\n\r\n.burger_image {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    align-self: center;\r\n    width: 60vw;\r\n    height: min(500px, 30vh);\r\n    background-size: 90%;\r\n    background-origin: content-box;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n/* Menuu */\r\n.menu_page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.menu_item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    padding-left: 5rem;\r\n    padding-right: 5rem;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.menu_title {\r\n    font-size: 1.5rem;\r\n    padding-bottom: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.menu_description {\r\n    text-align: center;\r\n}\r\n\r\n/* Location */\r\n.location_page {\r\n    margin-top: 2rem;\r\n    width: 90vw;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n    box-sizing: border-box;\r\n    gap: 3rem;\r\n}\r\n\r\n.location_card {\r\n    display: grid;\r\n    grid-template-areas:\r\n    \"left country country\"\r\n    \"left address address\"\r\n    \"left hours hours\";\r\n\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    padding: 1rem;\r\n}\r\n\r\n.map {\r\n    grid-area: left;\r\n}\r\n\r\n.country {\r\n    grid-area: country;\r\n}\r\n\r\nh2.country {\r\n    font-family: \"Roboto Slab\", serif;\r\n    padding-top: 1rem;\r\n}\r\n\r\n.address {\r\n    grid-area: address;\r\n}\r\n.hours {\r\n    grid-area: hours;\r\n}\r\n\r\nimg.map {\r\n    width: min(100%, 450px);\r\n    place-content: center;\r\n}\r\n\r\n.country, .address, .hours {\r\n    padding-left: 1rem;\r\n}\r\n\r\n/* Reservation form */\r\nform.reservation_form {\r\n    padding-top: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\ninput, textarea {\r\n    width: 50vw;\r\n    padding: 0.5rem;\r\n    border-radius: 5px;\r\n    border: 1px solid grey;\r\n    font-family: \"Roboto Slab\", serif;\r\n}\r\n\r\n#submit {\r\n    width: 40vw;\r\n    padding: 0.5rem;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    border: none;\r\n    font-family: \"Roboto Slab\", serif;\r\n    background-color: var(--primary);\r\n    color: var(--bg);\r\n}\r\n#submit:hover {\r\n    border: 1px solid grey;\r\n    background-color: var(--bg);\r\n    color: var(--primary);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/appendContent.js":
/*!******************************!*\
  !*** ./src/appendContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/welcome */ \"./src/pages/welcome.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/location */ \"./src/pages/location.js\");\n/* harmony import */ var _pages_reservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/reservation */ \"./src/pages/reservation.js\");\n\r\n\r\n\r\n\r\n\r\nconst appendContent = (parent, string) => {\r\n    let restaurant_pages = {\r\n        \"Welcome\": _pages_welcome__WEBPACK_IMPORTED_MODULE_0__.welcome,\r\n        \"Menu\": _pages_menu__WEBPACK_IMPORTED_MODULE_1__.menu,\r\n        \"Location\": _pages_location__WEBPACK_IMPORTED_MODULE_2__.location,\r\n        \"Reservation\": _pages_reservation__WEBPACK_IMPORTED_MODULE_3__.reservation,\r\n    }\r\n\r\n    let page_content = restaurant_pages[string](); //Remember to call the function to generate the DOM Node\r\n\r\n    parent.appendChild(page_content);\r\n\r\n    return page_content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendContent); \n\n//# sourceURL=webpack://restaurant-homepage/./src/appendContent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-homepage/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _appendContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendContent */ \"./src/appendContent.js\");\n/* harmony import */ var _pages_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/welcome */ \"./src/pages/welcome.js\");\n\r\n\r\n\r\nconst pageLoad = () => {\r\n    const content = document.querySelector('#content');\r\n\r\n    const logo = document.createElement(\"div\");\r\n    logo.classList.add(\"logo\");\r\n    logo.textContent = \"Dee & Em's\";\r\n\r\n    const navbar = document.createElement('div');\r\n    navbar.classList.add(\"navbar\");\r\n\r\n    const navbar_list = document.createElement('ul');\r\n    let navbar_items = ['Welcome', 'Menu', 'Location', 'Reservation'];\r\n    for (let i = 0; i < navbar_items.length; i++) {\r\n        let navbar_element = document.createElement('li');\r\n        //Add text\r\n        // navbar_element.textContent = navbar_items[i];\r\n        navbar_element.innerHTML = `<a href=\"#\" class=\"navbar_links\">${navbar_items[i]}</a>`;\r\n        //Add class\r\n        navbar_element.classList.add(\"navbar-item\");\r\n        navbar_list.appendChild(navbar_element);\r\n    }\r\n\r\n    \r\n    content.appendChild(logo);\r\n    content.appendChild(navbar);\r\n\r\n    navbar.appendChild(navbar_list);\r\n\r\n    const page = document.createElement('div');\r\n    page.classList.add(\"page\");\r\n    // page.textContent = \"This is the page content container. If this is visible, then the right content is not displayed.\";\r\n    //Default is welcome page\r\n    (0,_appendContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(page, \"Welcome\");\r\n    content.appendChild(page);\r\n\r\n    document.querySelectorAll(\".navbar_links\").forEach((element) => {\r\n        element.addEventListener(\"click\", function() {\r\n            //Clears preexisting content\r\n            document.querySelector(\".page\").innerHTML = \"\";\r\n\r\n            //Adds new content\r\n            const navbar_string = this.textContent;\r\n            (0,_appendContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(page, navbar_string);\r\n        })\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-homepage/./src/pageLoad.js?");

/***/ }),

/***/ "./src/pages/location.js":
/*!*******************************!*\
  !*** ./src/pages/location.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   location: () => (/* binding */ location)\n/* harmony export */ });\n/* harmony import */ var _img_map_japan_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/map/japan.jpeg */ \"./src/img/map/japan.jpeg\");\n/* harmony import */ var _img_map_korea_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/map/korea.jpg */ \"./src/img/map/korea.jpg\");\n/* harmony import */ var _img_map_sg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/map/sg.jpg */ \"./src/img/map/sg.jpg\");\n/* harmony import */ var _img_map_hk_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/map/hk.jpg */ \"./src/img/map/hk.jpg\");\n/* harmony import */ var _img_map_usa_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/map/usa.jpg */ \"./src/img/map/usa.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst myJapan = new Image();\r\nmyJapan.src = _img_map_japan_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nconst myKorea = new Image();\r\nmyKorea.src = _img_map_korea_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nconst mySingapore = new Image();\r\nmySingapore.src = _img_map_sg_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\nconst myHongKong = new Image();\r\nmyHongKong.src = _img_map_hk_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\nconst myUS = new Image();\r\nmyUS.src = _img_map_usa_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\nconst location = () => {\r\n    const location_page = document.createElement(\"div\");\r\n    location_page.classList.add(\"location_page\");\r\n\r\n    for (let item in location_objects) {\r\n        let new_item = locationCard(location_objects[item].country, location_objects[item].address, location_objects[item].hours, location_objects[item].map);\r\n        location_page.appendChild(new_item);\r\n    }\r\n\r\n    return location_page;\r\n}\r\n\r\nconst locationCard = (country_param, address_param, hours_param, map_param) => {\r\n    \r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"location_card\");\r\n\r\n    const map = document.createElement(\"img\");\r\n    map.classList.add(\"map\");\r\n    map.src = map_param;\r\n\r\n    const country = document.createElement(\"h2\");\r\n    country.classList.add(\"country\");\r\n    country.textContent = country_param;\r\n\r\n    const address = document.createElement(\"p\");\r\n    address.classList.add(\"address\");\r\n    address.textContent = address_param;\r\n\r\n    const hours = document.createElement(\"p\");\r\n    hours.classList.add(\"hours\");\r\n    hours.textContent = hours_param;\r\n\r\n    let card_array = [map, country, address, hours];\r\n\r\n    for (let element of card_array) {\r\n        card.appendChild(element);\r\n    }\r\n\r\n    return card;\r\n}\r\n\r\nconst location_objects = {\r\n    japan: {\r\n        country: \"Japan\",\r\n        address: \"113 Muzuhara building, Shinjuku, Tokyo, Japan\",\r\n        hours: \"9am - 10pm\",\r\n        map: _img_map_japan_jpeg__WEBPACK_IMPORTED_MODULE_0__,\r\n    },\r\n    korea: {\r\n        country: \"Korea\",\r\n        address: \"204-1, Buyeongapateu, Suseong-dong, Korea\",\r\n        hours: \"9am - 12am\",\r\n        map: _img_map_korea_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    },\r\n    hk: {\r\n        country: \"Hong Kong\",\r\n        address: \"65 Nathan Road, Tsim Sha Tsui, Hong Kong\",\r\n        hours: \"10am - 10pm\",\r\n        map: _img_map_hk_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    },\r\n    sg: {\r\n        country: \"Singapore\",\r\n        address: \"1 Raffles Place, Republic Plaza, Singapore\",\r\n        hours: \"7am - 9pm\",\r\n        map: _img_map_sg_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n    },\r\n    us: {\r\n        country: \"United States\",\r\n        address: \"69 Times Square, New York, United States\",\r\n        hours: \"10am - 10pm\",\r\n        map: _img_map_usa_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/pages/location.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n\r\nconst menu = () => {\r\n    const menu_page = document.createElement(\"div\");\r\n    menu_page.classList.add(\"menu_page\");\r\n\r\n    for (let item in menu_object) {\r\n        let new_item = menuItem(menu_object[item].name, menu_object[item].description);\r\n        menu_page.appendChild(new_item);\r\n    }\r\n\r\n    return menu_page;\r\n}\r\n\r\nconst menuItem = (name, description) => {\r\n\r\n    const menu_item = document.createElement(\"div\");\r\n    menu_item.classList.add(\"menu_item\");\r\n\r\n    const menu_title = document.createElement(\"h2\");\r\n    menu_title.classList.add(\"menu_title\");\r\n    menu_title.textContent = name;\r\n\r\n    const menu_description = document.createElement(\"p\");\r\n    menu_description.classList.add(\"menu_description\");\r\n    menu_description.textContent = description;\r\n\r\n    menu_item.appendChild(menu_title);\r\n    menu_item.appendChild(menu_description);\r\n\r\n    return menu_item;\r\n\r\n\r\n\r\n}\r\n\r\nlet menu_object = {\r\n    burger: {\r\n        name: \"Bypass Burger\",\r\n        description: \"Fried chicken, fried egg, fried bacon, fried cheese, fried onion, fried lettuce, fried tomato, fried bun, all fried with the finest lard to fry your coronary arteries.\"\r\n    },\r\n    steak: {\r\n        name: \"Steroid Steak\",\r\n        description: \"Made with top tier cattle raised on trenbolone, steroids and antibiotics. Topped with pepper, cajun spices, and of course a healthy topping of creatine and whey protein.\"\r\n    },\r\n    taco: {\r\n        name: \"Narcos Tacos\",\r\n        description: \"Spices form the backbone of this dish - this is so good that it'll make you go 'I'm cumin!'. The other backbone that makes this dish so good is of course the cocaine.\"\r\n    },\r\n    fries: {\r\n        name: \"Beer-battered Fish and Chips\",\r\n        description: \"Instead of just beer, we use industrial-grade methanol to give our fish that kick - why settle for a food coma when you can end up in a real coma?\"\r\n    },\r\n    milkshake: {\r\n        name: \"Malignant Milkshake\",\r\n        description: \"Congress has ruled that our signature milkshake is a vegetable, because it is made with high fructose corn syrup and 100% pure vegetable oil. That's right, that's two groups of vegetables in just one power drink. Along with vegetables, it also has all the macronutrients - fat from the butter, protein from the milk and ice-cream, carbohydrates from all the sugar...if this doesn't send you to the dialysis ward, we'll definitely give you your money back.\"\r\n    },\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/reservation.js":
/*!**********************************!*\
  !*** ./src/pages/reservation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reservation: () => (/* binding */ reservation)\n/* harmony export */ });\n\r\nconst reservation = () => {\r\n    const reservation_page = document.createElement(\"div\");\r\n    reservation_page.classList.add(\"reservation_page\");\r\n\r\n    const form = document.createElement(\"form\");\r\n    form.classList.add(\"reservation_form\");\r\n    form.action = \"\";\r\n    form.method = \"post\";\r\n    \r\n    let name = document.createElement(\"input\");\r\n    name.id = \"name\";\r\n    name.name = \"name\";\r\n    name.type = \"text\";\r\n    name.required = true;\r\n    name.placeholder = \"Name\";\r\n\r\n    let number = document.createElement(\"input\");\r\n    number.id = \"number\";\r\n    number.name = \"number\";\r\n    number.type = \"tel\";\r\n    number.required = true;\r\n    number.placeholder = \"Phone Number\";\r\n\r\n    let seats = document.createElement(\"input\");\r\n    seats.id = \"seats\";\r\n    seats.name = \"seats\";\r\n    seats.type = \"number\";\r\n    seats.required = true;\r\n    seats.placeholder = \"Number of Seats\";\r\n\r\n    let date = document.createElement(\"input\");\r\n    date.id = \"date\";\r\n    date.name = \"date\";\r\n    date.type = \"date\";\r\n    date.required = true;\r\n\r\n    let time = document.createElement(\"input\");\r\n    time.id = \"time\";\r\n    time.name = \"time\";\r\n    time.type = \"time\";\r\n    time.required = true;\r\n\r\n    let additional_requests = document.createElement(\"textarea\");\r\n    additional_requests.id = \"additional_requests\";\r\n    additional_requests.name = \"additional_requests\";\r\n    additional_requests.placeholder = \"Additional Requests\";\r\n    \r\n    let submit = document.createElement(\"button\");\r\n    submit.id = \"submit\";\r\n    submit.type = \"submit\";\r\n    submit.textContent = \"Submit\";\r\n\r\n    let form_elements = [name, number, seats, date, time, additional_requests, submit];\r\n\r\n    for (let element of form_elements) {\r\n        form.appendChild(element);\r\n    }\r\n\r\n    reservation_page.appendChild(form);\r\n\r\n    return reservation_page;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/pages/reservation.js?");

/***/ }),

/***/ "./src/pages/welcome.js":
/*!******************************!*\
  !*** ./src/pages/welcome.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   welcome: () => (/* binding */ welcome)\n/* harmony export */ });\n\r\nconst welcome = () => {\r\n    const welcome_page = document.createElement(\"div\");\r\n    welcome_page.classList.add(\"welcome_page\");\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.classList.add(\"title\");\r\n    title.textContent = \"Dee & Em's - a taste to die for\";\r\n\r\n    const description = document.createElement(\"p\");\r\n    description.classList.add(\"description\");\r\n    description.textContent = `Dee & Em's has been serving the same old classic All-American diet since 1921. \r\n    Eat and drink to your heart's content here - what's the point of living if you can't taste it?`;\r\n\r\n    const quote = document.createElement(\"p\");\r\n    quote.classList.add(\"quote\");\r\n    quote.innerHTML = `\"We don't eat and make money to be able to enjoy life. \r\n    We live to make money in order to eat.\r\n    That is what life means, and that is what life is for.\" <br>\r\n    - George Lee Mallory`;\r\n\r\n    const image = document.createElement(\"div\");\r\n    image.classList.add(\"burger_image\");\r\n\r\n    welcome_page.appendChild(title);\r\n    welcome_page.appendChild(description);\r\n    welcome_page.appendChild(quote);\r\n    welcome_page.appendChild(image);\r\n\r\n\r\n    return welcome_page;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/pages/welcome.js?");

/***/ }),

/***/ "./src/img/burger_grill.jpg":
/*!**********************************!*\
  !*** ./src/img/burger_grill.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57150542172f34ebc656.jpg\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/img/burger_grill.jpg?");

/***/ }),

/***/ "./src/img/map/hk.jpg":
/*!****************************!*\
  !*** ./src/img/map/hk.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4026d356c85975e7d714.jpg\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/img/map/hk.jpg?");

/***/ }),

/***/ "./src/img/map/japan.jpeg":
/*!********************************!*\
  !*** ./src/img/map/japan.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2fe9f2113f9f7d77bbf2.jpeg\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/img/map/japan.jpeg?");

/***/ }),

/***/ "./src/img/map/korea.jpg":
/*!*******************************!*\
  !*** ./src/img/map/korea.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b625c511394900fb03e0.jpg\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/img/map/korea.jpg?");

/***/ }),

/***/ "./src/img/map/sg.jpg":
/*!****************************!*\
  !*** ./src/img/map/sg.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f583c7d654c7e89c249.jpg\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/img/map/sg.jpg?");

/***/ }),

/***/ "./src/img/map/usa.jpg":
/*!*****************************!*\
  !*** ./src/img/map/usa.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6fe8d3576f70effd8669.jpg\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/img/map/usa.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;