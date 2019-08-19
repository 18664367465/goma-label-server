(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["goma"] = factory();
	else
		root["goma"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/check/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/check/index.js":
/*!****************************!*\
  !*** ./src/check/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/check/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\n\nconst model = {\n  canContinue: true,\n  currentDownloadIndex: 0,\n  files: null,\n\n  sectionWidth: 200,\n}\n\n\n\ngetAllLabelFiles(function(){\n  document.querySelector('#app').style.width = `${model.files.length * model.sectionWidth}px`;\n  renderSinglePaperModel()\n})\n\n\nfunction getAllLabelFiles(cb){\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].readdir('label', function(res){\n    model.files = res.data || []\n    cb && cb()\n  })\n}\n\nfunction renderSinglePaperModel(){\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ajax(`/api/readfile/label/${model.files[model.currentDownloadIndex]}`, null, function(client){\n    let res = client.response;\n    if(!res.data) return\n    const paperModel = JSON.parse(res.data)\n    generatePaper(paperModel)\n    model.currentDownloadIndex++\n\n    if(model.currentDownloadIndex >= model.files.length){\n      model.canContinue = false\n    }else{\n      renderSinglePaperModel()\n    }\n  })\n}\n\n\nfunction generatePaper(paperModel){\n  const sectionEl = document.createElement('section')\n\n  sectionEl.style.width = `${model.sectionWidth}px`\n\n  let html = `<h2>${paperModel.imagePath}</h2>`\n\n  let imgs = paperModel.shapes.map(function(shape, index){\n    return `<div class=\"label-content\">\n      <img src=\"${shape.imageData}\"/>\n      <div class=\"label\">${shape.label}</div>\n    </div>`\n  }).join('')\n\n  html += `<div class=\"labels\">${imgs}</div>`\n\n  sectionEl.innerHTML = html\n  document.querySelector('#app').append(sectionEl)\n}\n\n//# sourceURL=webpack://goma/./src/check/index.js?");

/***/ }),

/***/ "./src/check/index.scss":
/*!******************************!*\
  !*** ./src/check/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://goma/./src/check/index.scss?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: ajax, getImageBySrc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ajax\", function() { return ajax; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImageBySrc\", function() { return getImageBySrc; });\nlet ajax = (url, data, cb) => {\n  let client = new XMLHttpRequest();\n  client.responseType = \"json\";\n  client.onreadystatechange = () => {\n    if(client.status == 200 && client.readyState == 4) cb && cb(client);\n  }\n  data ? client.open(\"POST\", url, true) : client.open(\"GET\", url, true);\n  client.send(data);\n};\n\nlet getImageBySrc = (src, cb) => {\n  let img = new Image();\n  img.src = src;\n  img.onload = () => {\n    cb && cb(img);\n  }\n};\n\n\n//# sourceURL=webpack://goma/./src/utils.js?");

/***/ })

/******/ });
});