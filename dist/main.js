/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/chinese-food-hero.jpg */ "./src/chinese-food-hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/chinese-dragon.jpg */ "./src/chinese-dragon.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    font-family: sans-serif;
}

.hero {
    /* Sizing */
    width: 100vw;
    height: 60vh;
    
    /* Flexbox stuff */
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Text styles */
    text-align: center;
    color: white;
    
    /* Background styles */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.hero h2 {
    font-size: 5em;
    text-shadow: 1px 1px 2px black;
    margin-top: 0;
    margin-bottom: 0.1em;
    font-family: 'Grape Nuts', cursive;
    color: yellow;
}

.hero p {
    font-size: 2em;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px black;
}

h1 {
    display: flex;
    text-shadow: 1px 1px 2px black;
    font-size: 2.5em;
    font-family: 'Grape Nuts', cursive;
    color: yellow;
    width: 30%;
    align-items: center;
}


.dragon-logo {
    width: 7%;
}

nav {
    background-color: red;
    display:flex;
    width: 100%;
    justify-content: space-between;
}

ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    width: 50%;
}

/* General button styles */
button.link-button {
    font-family: 'Grape Nuts', cursive;
    background: none;
    border: none;
    color: black;
    text-decoration: none; 
    cursor: pointer; 
    font-size: 3em; 
    padding: 8px 12px; 
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s; /* Smooth transitions */
}

/* Hover effect */
button:hover,
button:focus {
    font-weight: bold;
    background-color: peach; /* Light background on hover */
    outline: none; /* Remove outline */
}

/* CSS */
.button-24 {
  width: 300px;
  background-color: red;
  border: 1px solid #FF4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: yellow;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  vertical-align: middle;
}

.btn {
    margin-top: 20px;
    text-shadow: 1px 1px 2px black;
}

main {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: peachpuff;
}
main div {
    display: flex;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    padding: 20px;
}

.card img {
    width: 150px;
    padding: 20px;
}

.card-container {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}

.specialties, .order-now-section-heading {
    font-size: 3em;
    text-align: center;
    font-family: 'Grape Nuts', cursive;
    color: red;
    background-color: peachpuff;
}

.mid-page-section {
    display: flex;
    vertical-align: center;
    align-items: center;
} 

.mid-page-section button {
    align-self: center;
} 

.order-card {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 30px;
    margin-left: 10vw;
    background-color: peachpuff;
}

.order-now-section-heading {
    padding-top: 20px;
}

.mid-page-cta-img { 
    width: 100%;
    height: 80vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5));
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

footer {
    display: flex;
    justify-content: space-around;
    background-color: peachpuff;
   
}

.active-page {
    color: yellow !important;
    font-weight: bold;
}
/* https://chansgardentogo.com/  Model after this site */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;;IAEZ,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;;IAEZ,sBAAsB;IACtB,iHAA6G;IAC7G,sBAAsB;IACtB,kCAAkC;IAClC,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,8BAA8B;IAC9B,aAAa;IACb,oBAAoB;IACpB,kCAAkC;IAClC,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,kCAAkC;IAClC,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;;;AAGA;IACI,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA,0BAA0B;AAC1B;IACI,kCAAkC;IAClC,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,6CAA6C,EAAE,uBAAuB;AAC1E;;AAEA,iBAAiB;AACjB;;IAEI,iBAAiB;IACjB,uBAAuB,EAAE,8BAA8B;IACvD,aAAa,EAAE,mBAAmB;AACtC;;AAEA,QAAQ;AACR;EACE,YAAY;EACZ,qBAAqB;EACrB,yBAAyB;EACzB,kBAAkB;EAClB,0CAA0C;EAC1C,sBAAsB;EACtB,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;IACI,gBAAgB;IAChB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,2BAA2B;AAC/B;AACA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,kCAAkC;IAClC,UAAU;IACV,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,wEAAwE;IACxE,iFAAwE;IACxE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;EACxB;;AAEF;IACI,aAAa;IACb,6BAA6B;IAC7B,2BAA2B;;AAE/B;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;AACrB;AACA,wDAAwD","sourcesContent":["body {\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.hero {\r\n    /* Sizing */\r\n    width: 100vw;\r\n    height: 60vh;\r\n    \r\n    /* Flexbox stuff */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    /* Text styles */\r\n    text-align: center;\r\n    color: white;\r\n    \r\n    /* Background styles */\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('../src/chinese-food-hero.jpg');\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.hero h2 {\r\n    font-size: 5em;\r\n    text-shadow: 1px 1px 2px black;\r\n    margin-top: 0;\r\n    margin-bottom: 0.1em;\r\n    font-family: 'Grape Nuts', cursive;\r\n    color: yellow;\r\n}\r\n\r\n.hero p {\r\n    font-size: 2em;\r\n    margin-bottom: 20px;\r\n    text-shadow: 1px 1px 2px black;\r\n}\r\n\r\nh1 {\r\n    display: flex;\r\n    text-shadow: 1px 1px 2px black;\r\n    font-size: 2.5em;\r\n    font-family: 'Grape Nuts', cursive;\r\n    color: yellow;\r\n    width: 30%;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.dragon-logo {\r\n    width: 7%;\r\n}\r\n\r\nnav {\r\n    background-color: red;\r\n    display:flex;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    gap: 30px;\r\n    width: 50%;\r\n}\r\n\r\n/* General button styles */\r\nbutton.link-button {\r\n    font-family: 'Grape Nuts', cursive;\r\n    background: none;\r\n    border: none;\r\n    color: black;\r\n    text-decoration: none; \r\n    cursor: pointer; \r\n    font-size: 3em; \r\n    padding: 8px 12px; \r\n    border-radius: 4px;\r\n    transition: background-color 0.3s, color 0.3s; /* Smooth transitions */\r\n}\r\n\r\n/* Hover effect */\r\nbutton:hover,\r\nbutton:focus {\r\n    font-weight: bold;\r\n    background-color: peach; /* Light background on hover */\r\n    outline: none; /* Remove outline */\r\n}\r\n\r\n/* CSS */\r\n.button-24 {\r\n  width: 300px;\r\n  background-color: red;\r\n  border: 1px solid #FF4742;\r\n  border-radius: 6px;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;\r\n  box-sizing: border-box;\r\n  color: yellow;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  line-height: 16px;\r\n  min-height: 40px;\r\n  outline: 0;\r\n  padding: 12px 14px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n.btn {\r\n    margin-top: 20px;\r\n    text-shadow: 1px 1px 2px black;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    background-color: peachpuff;\r\n}\r\nmain div {\r\n    display: flex;\r\n}\r\n\r\n.card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    padding: 20px;\r\n}\r\n\r\n.card img {\r\n    width: 150px;\r\n    padding: 20px;\r\n}\r\n\r\n.card-container {\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n}\r\n\r\n.specialties, .order-now-section-heading {\r\n    font-size: 3em;\r\n    text-align: center;\r\n    font-family: 'Grape Nuts', cursive;\r\n    color: red;\r\n    background-color: peachpuff;\r\n}\r\n\r\n.mid-page-section {\r\n    display: flex;\r\n    vertical-align: center;\r\n    align-items: center;\r\n} \r\n\r\n.mid-page-section button {\r\n    align-self: center;\r\n} \r\n\r\n.order-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 500px;\r\n    padding: 30px;\r\n    margin-left: 10vw;\r\n    background-color: peachpuff;\r\n}\r\n\r\n.order-now-section-heading {\r\n    padding-top: 20px;\r\n}\r\n\r\n.mid-page-cta-img { \r\n    width: 100%;\r\n    height: 80vh;\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5));\r\n    background: url(../src/chinese-dragon.jpg) no-repeat center center fixed; \r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n  }\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background-color: peachpuff;\r\n   \r\n}\r\n\r\n.active-page {\r\n    color: yellow !important;\r\n    font-weight: bold;\r\n}\r\n/* https://chansgardentogo.com/  Model after this site */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactPage: () => (/* binding */ contactPage)
/* harmony export */ });
const contactPage = () => {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');

    const h2 = document.createElement('h2');
    h2.innerText = 'Contact:';
    contactPage.appendChild(h2);
    
    return contactPage;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePage: () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const homePage = document.createElement('div');

const homeHeroComponent = () => {
    const heroSection = document.createElement('section');
    const heroInner = document.createElement('div');
    const heroCtaButton = document.createElement('button');

    const h2 = document.createElement('h2');
    const introPara = document.createElement('p');

    heroSection.classList.add('hero');
    heroInner.classList.add('hero-inner');

    h2.innerHTML = "Welcome to Flavortown of the East";

    introPara.innerHTML = "Experience the greatest Chinese cuisine central Illinois has to offer.";

    heroCtaButton.innerHTML = "Order online now";
    heroCtaButton.classList.add('btn');
    heroCtaButton.classList.add('button-24');

    heroSection.appendChild(heroInner);

    heroInner.appendChild(h2);
    heroInner.appendChild(introPara);
    heroInner.appendChild(heroCtaButton);

    return heroSection;
};

const homeMainContent = () => {
    const main = document.createElement('main');
    const h2Main = document.createElement('h2');
    h2Main.classList.add('specialties');
    const specialitySection = document.createElement('section');
    specialitySection.classList.add('specialty-section');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const card1 = document.createElement('div');
    const card1Icon = document.createElement('img');

    const card2 = document.createElement('div');
    const card2Icon = document.createElement('img');

    const card3 = document.createElement('div');
    const card3Icon = document.createElement('img');

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');

    specialitySection.appendChild(h2Main);
    main.appendChild(specialitySection);

    cardContainer.appendChild(card1);
    cardContainer.appendChild(card2);
    cardContainer.appendChild(card3);
    specialitySection.appendChild(cardContainer);

    card1.appendChild(card1Icon);
    card1.appendChild(para1);
    card1.classList.add('card');
    card2.appendChild(card2Icon);
    card2.appendChild(para2);
    card2.classList.add('card');
    card3.appendChild(card3Icon);
    card3.appendChild(para3);
    card3.classList.add('card');

    card1Icon.src = "../src/heartred.png";
    card2Icon.src = "../src/full.png";
    card3Icon.src = "../src/flavor.png";

    h2Main.innerText = "Our Specialties";

    para1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nibh molestie, efficitur leo sed, viverra nunc. Donec vehicula accumsan erat facilisis ullamcorper. Donec commodo quis dui nec placerat. Donec mi orci, scelerisque eget nisl ac, hendrerit condimentum odio. Nam dictum odio eget quam tempus, a mattis odio ornare. Nullam auctor libero ut libero suscipit, ut accumsan nunc condimentum. Donec ullamcorper maximus sapien quis egestas.';
    para2.innerHTML = 'Mauris viverra scelerisque lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ultrices enim sit amet elit tincidunt maximus. Suspendisse vitae pellentesque lectus. Duis commodo leo suscipit augue mollis, non venenatis dolor ullamcorper. Duis tincidunt scelerisque lacus, vel vehicula leo consectetur vel. Duis posuere nisl non odio consequat ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    para3.innerHTML = 'Etiam a leo nec mi blandit euismod. Etiam fringilla odio vitae risus ornare, id bibendum velit consequat. Fusce posuere risus sollicitudin condimentum ultrices. Fusce gravida, purus eget laoreet mattis, velit sapien ultrices diam, id dapibus erat leo id quam. Maecenas quis risus convallis, placerat elit non, iaculis tortor. Nullam porttitor magna risus, quis bibendum metus tincidunt in. Etiam vel ligula ac risus mattis tincidunt vel sit amet ante. Morbi et viverra ligula. Ut ac dignissim nisi, condimentum imperdiet mauris. Pellentesque ut ipsum vel diam tristique faucibus eu et lectus. Maecenas posuere neque non lacus bibendum, sit amet pharetra justo semper. Sed mi risus, tempor sit amet ligula eget, varius pretium est. Sed a odio in orci accumsan pretium suscipit ut quam.';

    main.appendChild(specialitySection);

    return main;
};

const midPageCTA = () => {
    const midPageSection = document.createElement('div');
    midPageSection.classList.add('mid-page-section');

    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');

    const orderOnlineH2 = document.createElement('h2');
    orderOnlineH2.classList.add('order-now-section-heading');

    const ctaButton = document.createElement('button');
    const para1 = document.createElement('p');

    orderCard.append(orderOnlineH2);
    orderCard.append(para1);
    orderCard.append(ctaButton);

    para1.innerHTML = 'Morbi et viverra ligula. Ut ac dignissim nisi, condimentum imperdiet mauris. Pellentesque ut ipsum vel diam tristique faucibus eu et lectus. Maecenas posuere neque non lacus bibendum, sit amet pharetra justo semper. Sed mi risus, tempor sit amet ligula eget, varius pretium est. Sed a odio in orci accumsan pretium suscipit ut quam.';

    ctaButton.innerHTML = "Order online now";
    ctaButton.classList.add('btn');
    ctaButton.classList.add('button-24');

    orderOnlineH2.innerText = 'Order Online Now';
    midPageSection.append(orderCard);
    midPageSection.classList.add('mid-page-cta-img');

    return midPageSection;
};

homePage.appendChild(homeHeroComponent());
homePage.appendChild(homeMainContent());
homePage.appendChild(midPageCTA());



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPage: () => (/* binding */ menuPage)
/* harmony export */ });

const menuPage = () => {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');

    const h2 = document.createElement('h2');
    h2.innerText = 'Menu:';
    menuPage.appendChild(h2);
    
    return menuPage;
}



/***/ }),

/***/ "./src/chinese-dragon.jpg":
/*!********************************!*\
  !*** ./src/chinese-dragon.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4043cf11c1ab8aa59e7c.jpg";

/***/ }),

/***/ "./src/chinese-food-hero.jpg":
/*!***********************************!*\
  !*** ./src/chinese-food-hero.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "346d4e41b4c1ab39ea15.jpg";

/***/ }),

/***/ "./src/dragon-logo.jpg":
/*!*****************************!*\
  !*** ./src/dragon-logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eae19e0cfc2b6e3811d7.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _src_dragon_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/dragon-logo.jpg */ "./src/dragon-logo.jpg");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






const navContainer = document.getElementById('nav-container');
const footerContainer = document.getElementById('footer-container');
const content = document.getElementById('content');

const topNav = () => {
  const nav = document.createElement('nav');
  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');

  ul.classList.add("nav-buttons");
  const home = document.createElement('li');
  const menu = document.createElement('li');
  const contact = document.createElement('li');

  const dragonLogo = new Image();
  dragonLogo.src = _src_dragon_logo_jpg__WEBPACK_IMPORTED_MODULE_3__;
  dragonLogo.classList.add('dragon-logo');
  nav.appendChild(dragonLogo);

  nav.appendChild(h1);
  h1.innerHTML = "Drunken Dragon Chinese Food";

  nav.appendChild(ul);

  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);

  const homeButton = document.createElement('button');
  homeButton.setAttribute('href', 'index.html');
  homeButton.classList.add("link-button");
  homeButton.id = "home-button";
  home.appendChild(homeButton);

  const menuButton = document.createElement('button');
  menuButton.setAttribute('href', 'menu.html');
  menuButton.classList.add("link-button");
  menuButton.id = "menu-button";
  menu.appendChild(menuButton);

  const contactButton = document.createElement('button');
  contactButton.setAttribute('href', 'contact.html');
  contactButton.classList.add("link-button");
  contactButton.id = "contact-button";
  contact.appendChild(contactButton);

  homeButton.innerHTML = 'Home';
  menuButton.innerHTML = 'Menu';
  contactButton.innerHTML = 'Contact';

  const currentPage = window.location.href;
  if (currentPage.includes("index.html")) {
      homeButton.classList.add('active-page');
  } else if (currentPage.includes("menu.html")) {
      menuButton.classList.add('active-page');
  } else if (currentPage.includes("contact.html")) {
      contactButton.classList.add('active-page');
  }

  return nav;
};

const footer = () => {
  const footer = document.createElement('footer');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
  const copyrightSection = document.createElement('div');
  const copyrightText = document.createElement('p');

  copyrightSection.appendChild(copyrightText);

  copyrightText.innerHTML = `Copyright <a href="https://dustylawless.com/">Dusty Lawless 2024</a>`;

  footer.classList.add('footer');

  footer.appendChild(para1);
  footer.appendChild(para2);
  footer.appendChild(para3);
  footer.appendChild(copyrightSection);

  para1.innerHTML = `<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`;
  para2.innerHTML = `<div>Icons made by <a href="https://www.flaticon.com/authors/iyahicon" title="IYAHICON">IYAHICON</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`;
  para3.innerHTML = `<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`;

  return footer;
};

navContainer.appendChild(topNav());
content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage);
footerContainer.appendChild(footer());


const navButtons = document.querySelectorAll(".link-button");
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");


homeButton.addEventListener("click", () => {
  addActiveClass(homeButton);
  content.innerText = '';
  content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage);
});

menuButton.addEventListener("click", () => {
  addActiveClass(menuButton);
  content.innerText = '';
  content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage)());
});

contactButton.addEventListener("click", () => {
  addActiveClass(contactButton);
  content.innerText = '';
  content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactPage)());
});

function addActiveClass(btn) {
  navButtons.forEach(btn => btn.classList.remove('active-page'));
  btn.classList.add('active-page');
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCO0FBQ0E7QUFDTztBQUNEO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQVE7QUFDOUIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFRO0FBQzlCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3REFBVztBQUNqQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9jaGluZXNlLWZvb2QtaGVyby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvY2hpbmVzZS1kcmFnb24uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhlcm8ge1xyXG4gICAgLyogU2l6aW5nICovXHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICBcclxuICAgIC8qIEZsZXhib3ggc3R1ZmYgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIC8qIFRleHQgc3R5bGVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIC8qIEJhY2tncm91bmQgc3R5bGVzICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLHJnYmEoMCwgMCwgMCwgMC41KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbi5oZXJvIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFwZSBOdXRzJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5oZXJvIHAge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhcGUgTnV0cycsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZHJhZ29uLWxvZ28ge1xyXG4gICAgd2lkdGg6IDclO1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBHZW5lcmFsIGJ1dHRvbiBzdHlsZXMgKi9cclxuYnV0dG9uLmxpbmstYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhcGUgTnV0cycsIGN1cnNpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbiAgICBmb250LXNpemU6IDNlbTsgXHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7IC8qIFNtb290aCB0cmFuc2l0aW9ucyAqL1xyXG59XHJcblxyXG4vKiBIb3ZlciBlZmZlY3QgKi9cclxuYnV0dG9uOmhvdmVyLFxyXG5idXR0b246Zm9jdXMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaDsgLyogTGlnaHQgYmFja2dyb3VuZCBvbiBob3ZlciAqL1xyXG4gICAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIG91dGxpbmUgKi9cclxufVxyXG5cclxuLyogQ1NTICovXHJcbi5idXR0b24tMjQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNDc0MjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6IHllbGxvdztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcclxufVxyXG5tYWluIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5zcGVjaWFsdGllcywgLm9yZGVyLW5vdy1zZWN0aW9uLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0dyYXBlIE51dHMnLCBjdXJzaXZlO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcclxufVxyXG5cclxuLm1pZC1wYWdlLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59IFxyXG5cclxuLm1pZC1wYWdlLXNlY3Rpb24gYnV0dG9uIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufSBcclxuXHJcbi5vcmRlci1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcclxufVxyXG5cclxuLm9yZGVyLW5vdy1zZWN0aW9uLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5taWQtcGFnZS1jdGEtaW1nIHsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSkscmdiYSgwLCAwLCAwLCAwLjUpKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG5mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xyXG4gICBcclxufVxyXG5cclxuLmFjdGl2ZS1wYWdlIHtcclxuICAgIGNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi8qIGh0dHBzOi8vY2hhbnNnYXJkZW50b2dvLmNvbS8gIE1vZGVsIGFmdGVyIHRoaXMgc2l0ZSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7O0lBRVosc0JBQXNCO0lBQ3RCLGlIQUE2RztJQUM3RyxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw2Q0FBNkMsRUFBRSx1QkFBdUI7QUFDMUU7O0FBRUEsaUJBQWlCO0FBQ2pCOztJQUVJLGlCQUFpQjtJQUNqQix1QkFBdUIsRUFBRSw4QkFBOEI7SUFDdkQsYUFBYSxFQUFFLG1CQUFtQjtBQUN0Qzs7QUFFQSxRQUFRO0FBQ1I7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdFQUF3RTtJQUN4RSxpRkFBd0U7SUFDeEUsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0VBQ3hCOztBQUVGO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjtBQUNBLHdEQUF3RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgICAvKiBTaXppbmcgKi9cXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIFxcclxcbiAgICAvKiBGbGV4Ym94IHN0dWZmICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgLyogVGV4dCBzdHlsZXMgKi9cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIFxcclxcbiAgICAvKiBCYWNrZ3JvdW5kIHN0eWxlcyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLHJnYmEoMCwgMCwgMCwgMC41KSksIHVybCgnLi4vc3JjL2NoaW5lc2UtZm9vZC1oZXJvLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ0dyYXBlIE51dHMnLCBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhcGUgTnV0cycsIGN1cnNpdmU7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kcmFnb24tbG9nbyB7XFxyXFxuICAgIHdpZHRoOiA3JTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsIGJ1dHRvbiBzdHlsZXMgKi9cXHJcXG5idXR0b24ubGluay1idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ0dyYXBlIE51dHMnLCBjdXJzaXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXHJcXG4gICAgZm9udC1zaXplOiAzZW07IFxcclxcbiAgICBwYWRkaW5nOiA4cHggMTJweDsgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzOyAvKiBTbW9vdGggdHJhbnNpdGlvbnMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSG92ZXIgZWZmZWN0ICovXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaDsgLyogTGlnaHQgYmFja2dyb3VuZCBvbiBob3ZlciAqL1xcclxcbiAgICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmUgb3V0bGluZSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDU1MgKi9cXHJcXG4uYnV0dG9uLTI0IHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjQ3NDI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IDJweCA0cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcXHJcXG59XFxyXFxubWFpbiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwZWNpYWx0aWVzLCAub3JkZXItbm93LXNlY3Rpb24taGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhcGUgTnV0cycsIGN1cnNpdmU7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZC1wYWdlLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn0gXFxyXFxuXFxyXFxuLm1pZC1wYWdlLXNlY3Rpb24gYnV0dG9uIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn0gXFxyXFxuXFxyXFxuLm9yZGVyLWNhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItbm93LXNlY3Rpb24taGVhZGluZyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkLXBhZ2UtY3RhLWltZyB7IFxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLHJnYmEoMCwgMCwgMCwgMC41KSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9zcmMvY2hpbmVzZS1kcmFnb24uanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgfVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtcGFnZSB7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi8qIGh0dHBzOi8vY2hhbnNnYXJkZW50b2dvLmNvbS8gIE1vZGVsIGFmdGVyIHRoaXMgc2l0ZSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdFBhZ2UuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGgyLmlubmVyVGV4dCA9ICdDb250YWN0Oic7XHJcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChoMik7XHJcbiAgICBcclxuICAgIHJldHVybiBjb250YWN0UGFnZTtcclxufVxyXG5cclxuZXhwb3J0IHsgY29udGFjdFBhZ2UgfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbmNvbnN0IGhvbWVIZXJvQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBjb25zdCBoZXJvSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhlcm9DdGFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBpbnRyb1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgaGVyb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xyXG4gICAgaGVyb0lubmVyLmNsYXNzTGlzdC5hZGQoJ2hlcm8taW5uZXInKTtcclxuXHJcbiAgICBoMi5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gRmxhdm9ydG93biBvZiB0aGUgRWFzdFwiO1xyXG5cclxuICAgIGludHJvUGFyYS5pbm5lckhUTUwgPSBcIkV4cGVyaWVuY2UgdGhlIGdyZWF0ZXN0IENoaW5lc2UgY3Vpc2luZSBjZW50cmFsIElsbGlub2lzIGhhcyB0byBvZmZlci5cIjtcclxuXHJcbiAgICBoZXJvQ3RhQnV0dG9uLmlubmVySFRNTCA9IFwiT3JkZXIgb25saW5lIG5vd1wiO1xyXG4gICAgaGVyb0N0YUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgIGhlcm9DdGFCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLTI0Jyk7XHJcblxyXG4gICAgaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0lubmVyKTtcclxuXHJcbiAgICBoZXJvSW5uZXIuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gICAgaGVyb0lubmVyLmFwcGVuZENoaWxkKGludHJvUGFyYSk7XHJcbiAgICBoZXJvSW5uZXIuYXBwZW5kQ2hpbGQoaGVyb0N0YUJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGhlcm9TZWN0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgaG9tZU1haW5Db250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIGNvbnN0IGgyTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoMk1haW4uY2xhc3NMaXN0LmFkZCgnc3BlY2lhbHRpZXMnKTtcclxuICAgIGNvbnN0IHNwZWNpYWxpdHlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgc3BlY2lhbGl0eVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc3BlY2lhbHR5LXNlY3Rpb24nKTtcclxuXHJcbiAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgY2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNhcmQxSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjYXJkMkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY2FyZDNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHBhcmEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIHNwZWNpYWxpdHlTZWN0aW9uLmFwcGVuZENoaWxkKGgyTWFpbik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHNwZWNpYWxpdHlTZWN0aW9uKTtcclxuXHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQxKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkMyk7XHJcbiAgICBzcGVjaWFsaXR5U2VjdGlvbi5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICBjYXJkMS5hcHBlbmRDaGlsZChjYXJkMUljb24pO1xyXG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgY2FyZDIuYXBwZW5kQ2hpbGQoY2FyZDJJY29uKTtcclxuICAgIGNhcmQyLmFwcGVuZENoaWxkKHBhcmEyKTtcclxuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgIGNhcmQzLmFwcGVuZENoaWxkKGNhcmQzSWNvbik7XHJcbiAgICBjYXJkMy5hcHBlbmRDaGlsZChwYXJhMyk7XHJcbiAgICBjYXJkMy5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcblxyXG4gICAgY2FyZDFJY29uLnNyYyA9IFwiLi4vc3JjL2hlYXJ0cmVkLnBuZ1wiO1xyXG4gICAgY2FyZDJJY29uLnNyYyA9IFwiLi4vc3JjL2Z1bGwucG5nXCI7XHJcbiAgICBjYXJkM0ljb24uc3JjID0gXCIuLi9zcmMvZmxhdm9yLnBuZ1wiO1xyXG5cclxuICAgIGgyTWFpbi5pbm5lclRleHQgPSBcIk91ciBTcGVjaWFsdGllc1wiO1xyXG5cclxuICAgIHBhcmExLmlubmVySFRNTCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbnRlZ2VyIG5lYyBuaWJoIG1vbGVzdGllLCBlZmZpY2l0dXIgbGVvIHNlZCwgdml2ZXJyYSBudW5jLiBEb25lYyB2ZWhpY3VsYSBhY2N1bXNhbiBlcmF0IGZhY2lsaXNpcyB1bGxhbWNvcnBlci4gRG9uZWMgY29tbW9kbyBxdWlzIGR1aSBuZWMgcGxhY2VyYXQuIERvbmVjIG1pIG9yY2ksIHNjZWxlcmlzcXVlIGVnZXQgbmlzbCBhYywgaGVuZHJlcml0IGNvbmRpbWVudHVtIG9kaW8uIE5hbSBkaWN0dW0gb2RpbyBlZ2V0IHF1YW0gdGVtcHVzLCBhIG1hdHRpcyBvZGlvIG9ybmFyZS4gTnVsbGFtIGF1Y3RvciBsaWJlcm8gdXQgbGliZXJvIHN1c2NpcGl0LCB1dCBhY2N1bXNhbiBudW5jIGNvbmRpbWVudHVtLiBEb25lYyB1bGxhbWNvcnBlciBtYXhpbXVzIHNhcGllbiBxdWlzIGVnZXN0YXMuJztcclxuICAgIHBhcmEyLmlubmVySFRNTCA9ICdNYXVyaXMgdml2ZXJyYSBzY2VsZXJpc3F1ZSBsb2JvcnRpcy4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gRnVzY2UgdWx0cmljZXMgZW5pbSBzaXQgYW1ldCBlbGl0IHRpbmNpZHVudCBtYXhpbXVzLiBTdXNwZW5kaXNzZSB2aXRhZSBwZWxsZW50ZXNxdWUgbGVjdHVzLiBEdWlzIGNvbW1vZG8gbGVvIHN1c2NpcGl0IGF1Z3VlIG1vbGxpcywgbm9uIHZlbmVuYXRpcyBkb2xvciB1bGxhbWNvcnBlci4gRHVpcyB0aW5jaWR1bnQgc2NlbGVyaXNxdWUgbGFjdXMsIHZlbCB2ZWhpY3VsYSBsZW8gY29uc2VjdGV0dXIgdmVsLiBEdWlzIHBvc3VlcmUgbmlzbCBub24gb2RpbyBjb25zZXF1YXQgdWx0cmljZXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJztcclxuICAgIHBhcmEzLmlubmVySFRNTCA9ICdFdGlhbSBhIGxlbyBuZWMgbWkgYmxhbmRpdCBldWlzbW9kLiBFdGlhbSBmcmluZ2lsbGEgb2RpbyB2aXRhZSByaXN1cyBvcm5hcmUsIGlkIGJpYmVuZHVtIHZlbGl0IGNvbnNlcXVhdC4gRnVzY2UgcG9zdWVyZSByaXN1cyBzb2xsaWNpdHVkaW4gY29uZGltZW50dW0gdWx0cmljZXMuIEZ1c2NlIGdyYXZpZGEsIHB1cnVzIGVnZXQgbGFvcmVldCBtYXR0aXMsIHZlbGl0IHNhcGllbiB1bHRyaWNlcyBkaWFtLCBpZCBkYXBpYnVzIGVyYXQgbGVvIGlkIHF1YW0uIE1hZWNlbmFzIHF1aXMgcmlzdXMgY29udmFsbGlzLCBwbGFjZXJhdCBlbGl0IG5vbiwgaWFjdWxpcyB0b3J0b3IuIE51bGxhbSBwb3J0dGl0b3IgbWFnbmEgcmlzdXMsIHF1aXMgYmliZW5kdW0gbWV0dXMgdGluY2lkdW50IGluLiBFdGlhbSB2ZWwgbGlndWxhIGFjIHJpc3VzIG1hdHRpcyB0aW5jaWR1bnQgdmVsIHNpdCBhbWV0IGFudGUuIE1vcmJpIGV0IHZpdmVycmEgbGlndWxhLiBVdCBhYyBkaWduaXNzaW0gbmlzaSwgY29uZGltZW50dW0gaW1wZXJkaWV0IG1hdXJpcy4gUGVsbGVudGVzcXVlIHV0IGlwc3VtIHZlbCBkaWFtIHRyaXN0aXF1ZSBmYXVjaWJ1cyBldSBldCBsZWN0dXMuIE1hZWNlbmFzIHBvc3VlcmUgbmVxdWUgbm9uIGxhY3VzIGJpYmVuZHVtLCBzaXQgYW1ldCBwaGFyZXRyYSBqdXN0byBzZW1wZXIuIFNlZCBtaSByaXN1cywgdGVtcG9yIHNpdCBhbWV0IGxpZ3VsYSBlZ2V0LCB2YXJpdXMgcHJldGl1bSBlc3QuIFNlZCBhIG9kaW8gaW4gb3JjaSBhY2N1bXNhbiBwcmV0aXVtIHN1c2NpcGl0IHV0IHF1YW0uJztcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHNwZWNpYWxpdHlTZWN0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gbWFpbjtcclxufTtcclxuXHJcbmNvbnN0IG1pZFBhZ2VDVEEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtaWRQYWdlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWlkUGFnZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWlkLXBhZ2Utc2VjdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IG9yZGVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3JkZXJDYXJkLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWNhcmQnKTtcclxuXHJcbiAgICBjb25zdCBvcmRlck9ubGluZUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG9yZGVyT25saW5lSDIuY2xhc3NMaXN0LmFkZCgnb3JkZXItbm93LXNlY3Rpb24taGVhZGluZycpO1xyXG5cclxuICAgIGNvbnN0IGN0YUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgb3JkZXJDYXJkLmFwcGVuZChvcmRlck9ubGluZUgyKTtcclxuICAgIG9yZGVyQ2FyZC5hcHBlbmQocGFyYTEpO1xyXG4gICAgb3JkZXJDYXJkLmFwcGVuZChjdGFCdXR0b24pO1xyXG5cclxuICAgIHBhcmExLmlubmVySFRNTCA9ICdNb3JiaSBldCB2aXZlcnJhIGxpZ3VsYS4gVXQgYWMgZGlnbmlzc2ltIG5pc2ksIGNvbmRpbWVudHVtIGltcGVyZGlldCBtYXVyaXMuIFBlbGxlbnRlc3F1ZSB1dCBpcHN1bSB2ZWwgZGlhbSB0cmlzdGlxdWUgZmF1Y2lidXMgZXUgZXQgbGVjdHVzLiBNYWVjZW5hcyBwb3N1ZXJlIG5lcXVlIG5vbiBsYWN1cyBiaWJlbmR1bSwgc2l0IGFtZXQgcGhhcmV0cmEganVzdG8gc2VtcGVyLiBTZWQgbWkgcmlzdXMsIHRlbXBvciBzaXQgYW1ldCBsaWd1bGEgZWdldCwgdmFyaXVzIHByZXRpdW0gZXN0LiBTZWQgYSBvZGlvIGluIG9yY2kgYWNjdW1zYW4gcHJldGl1bSBzdXNjaXBpdCB1dCBxdWFtLic7XHJcblxyXG4gICAgY3RhQnV0dG9uLmlubmVySFRNTCA9IFwiT3JkZXIgb25saW5lIG5vd1wiO1xyXG4gICAgY3RhQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgY3RhQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0yNCcpO1xyXG5cclxuICAgIG9yZGVyT25saW5lSDIuaW5uZXJUZXh0ID0gJ09yZGVyIE9ubGluZSBOb3cnO1xyXG4gICAgbWlkUGFnZVNlY3Rpb24uYXBwZW5kKG9yZGVyQ2FyZCk7XHJcbiAgICBtaWRQYWdlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtaWQtcGFnZS1jdGEtaW1nJyk7XHJcblxyXG4gICAgcmV0dXJuIG1pZFBhZ2VTZWN0aW9uO1xyXG59O1xyXG5cclxuaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoaG9tZUhlcm9Db21wb25lbnQoKSk7XHJcbmhvbWVQYWdlLmFwcGVuZENoaWxkKGhvbWVNYWluQ29udGVudCgpKTtcclxuaG9tZVBhZ2UuYXBwZW5kQ2hpbGQobWlkUGFnZUNUQSgpKTtcclxuXHJcbmV4cG9ydCB7IGhvbWVQYWdlIH0iLCJcclxuY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVBhZ2UuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG5cclxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGgyLmlubmVyVGV4dCA9ICdNZW51Oic7XHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChoMik7XHJcbiAgICBcclxuICAgIHJldHVybiBtZW51UGFnZTtcclxufVxyXG5cclxuZXhwb3J0IHsgbWVudVBhZ2UgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSAnLi9ob21lLmpzJztcclxuaW1wb3J0IHsgbWVudVBhZ2UgfSBmcm9tICcuL21lbnUuanMnO1xyXG5pbXBvcnQgZHJhZ29uIGZyb20gJy4uL3NyYy9kcmFnb24tbG9nby5qcGcnO1xyXG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcblxyXG5jb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNvbnRhaW5lcicpO1xyXG5jb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyLWNvbnRhaW5lcicpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbmNvbnN0IHRvcE5hdiA9ICgpID0+IHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICB1bC5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnNcIik7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gIGNvbnN0IGRyYWdvbkxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICBkcmFnb25Mb2dvLnNyYyA9IGRyYWdvbjtcclxuICBkcmFnb25Mb2dvLmNsYXNzTGlzdC5hZGQoJ2RyYWdvbi1sb2dvJyk7XHJcbiAgbmF2LmFwcGVuZENoaWxkKGRyYWdvbkxvZ28pO1xyXG5cclxuICBuYXYuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gIGgxLmlubmVySFRNTCA9IFwiRHJ1bmtlbiBEcmFnb24gQ2hpbmVzZSBGb29kXCI7XHJcblxyXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gIHVsLmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gIHVsLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG5cclxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgaG9tZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaW5kZXguaHRtbCcpO1xyXG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpbmstYnV0dG9uXCIpO1xyXG4gIGhvbWVCdXR0b24uaWQgPSBcImhvbWUtYnV0dG9uXCI7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcclxuXHJcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdocmVmJywgJ21lbnUuaHRtbCcpO1xyXG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpbmstYnV0dG9uXCIpO1xyXG4gIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uXCI7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKCdocmVmJywgJ2NvbnRhY3QuaHRtbCcpO1xyXG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpbmstYnV0dG9uXCIpO1xyXG4gIGNvbnRhY3RCdXR0b24uaWQgPSBcImNvbnRhY3QtYnV0dG9uXCI7XHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgPSAnSG9tZSc7XHJcbiAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSAnTWVudSc7XHJcbiAgY29udGFjdEJ1dHRvbi5pbm5lckhUTUwgPSAnQ29udGFjdCc7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgaWYgKGN1cnJlbnRQYWdlLmluY2x1ZGVzKFwiaW5kZXguaHRtbFwiKSkge1xyXG4gICAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wYWdlJyk7XHJcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZS5pbmNsdWRlcyhcIm1lbnUuaHRtbFwiKSkge1xyXG4gICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wYWdlJyk7XHJcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZS5pbmNsdWRlcyhcImNvbnRhY3QuaHRtbFwiKSkge1xyXG4gICAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wYWdlJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmF2O1xyXG59O1xyXG5cclxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHBhcmEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGNvcHlyaWdodFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb3B5cmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBjb3B5cmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKGNvcHlyaWdodFRleHQpO1xyXG5cclxuICBjb3B5cmlnaHRUZXh0LmlubmVySFRNTCA9IGBDb3B5cmlnaHQgPGEgaHJlZj1cImh0dHBzOi8vZHVzdHlsYXdsZXNzLmNvbS9cIj5EdXN0eSBMYXdsZXNzIDIwMjQ8L2E+YDtcclxuXHJcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cclxuICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwYXJhMik7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHBhcmEzKTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0U2VjdGlvbik7XHJcblxyXG4gIHBhcmExLmlubmVySFRNTCA9IGA8ZGl2Pkljb25zIG1hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9hdXRob3JzL2tpcmFuc2hhc3RyeVwiIHRpdGxlPVwiS2lyYW5zaGFzdHJ5XCI+S2lyYW5zaGFzdHJ5PC9hPiBmcm9tIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vXCIgdGl0bGU9XCJGbGF0aWNvblwiPnd3dy5mbGF0aWNvbi5jb208L2E+PC9kaXY+YDtcclxuICBwYXJhMi5pbm5lckhUTUwgPSBgPGRpdj5JY29ucyBtYWRlIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9peWFoaWNvblwiIHRpdGxlPVwiSVlBSElDT05cIj5JWUFISUNPTjwvYT4gZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiIHRpdGxlPVwiRmxhdGljb25cIj53d3cuZmxhdGljb24uY29tPC9hPjwvZGl2PmA7XHJcbiAgcGFyYTMuaW5uZXJIVE1MID0gYDxkaXY+SWNvbnMgbWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb21cIiB0aXRsZT1cIkZyZWVwaWtcIj5GcmVlcGlrPC9hPiBmcm9tIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vXCIgdGl0bGU9XCJGbGF0aWNvblwiPnd3dy5mbGF0aWNvbi5jb208L2E+PC9kaXY+YDtcclxuXHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufTtcclxuXHJcbm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BOYXYoKSk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xyXG5mb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xyXG5cclxuXHJcbmNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmstYnV0dG9uXCIpO1xyXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ1dHRvblwiKTtcclxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIik7XHJcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtYnV0dG9uXCIpO1xyXG5cclxuXHJcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBhZGRBY3RpdmVDbGFzcyhob21lQnV0dG9uKTtcclxuICBjb250ZW50LmlubmVyVGV4dCA9ICcnO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xyXG59KTtcclxuXHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBhZGRBY3RpdmVDbGFzcyhtZW51QnV0dG9uKTtcclxuICBjb250ZW50LmlubmVyVGV4dCA9ICcnO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVBhZ2UoKSk7XHJcbn0pO1xyXG5cclxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGFkZEFjdGl2ZUNsYXNzKGNvbnRhY3RCdXR0b24pO1xyXG4gIGNvbnRlbnQuaW5uZXJUZXh0ID0gJyc7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0UGFnZSgpKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhZGRBY3RpdmVDbGFzcyhidG4pIHtcclxuICBuYXZCdXR0b25zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcGFnZScpKTtcclxuICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBhZ2UnKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==