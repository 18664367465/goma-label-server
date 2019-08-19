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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sample/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sample/eventhandler.js":
/*!************************************!*\
  !*** ./src/sample/eventhandler.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/sample/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/sample/view.js\");\n\n\n\nconst eventHandler = {\n  registEventHandler: function(){\n    _view__WEBPACK_IMPORTED_MODULE_1__[\"els\"].canvasWrapEl.addEventListener(\"mousedown\", eventHandler.canvasWrapEl__onMouseDown);\n    \n    _view__WEBPACK_IMPORTED_MODULE_1__[\"els\"].canvasWrapEl.addEventListener(\"mousemove\", eventHandler.canvasWrapEl__onMouseMove);\n    \n    _view__WEBPACK_IMPORTED_MODULE_1__[\"els\"].canvasWrapEl.addEventListener(\"mouseup\", eventHandler.canvasWrapEl__onMouseUp);\n    \n    _view__WEBPACK_IMPORTED_MODULE_1__[\"els\"].canvasWrapEl.addEventListener(\"contextmenu\", eventHandler.canvasWrapEl__onContextMenu);\n\n    _view__WEBPACK_IMPORTED_MODULE_1__[\"els\"].labelImagesWrapEl.addEventListener(\"click\", eventHandler.labelImagesWrapEl__onClick);\n\n    window.addEventListener(\"keydown\", eventHandler.window__onKeyDown);\n  },\n\n  canvasWrapEl__onMouseDown: function(e){\n    e.preventDefault()\n\n    var point = { x: e.offsetX, y: e.offsetY }\n\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isMouseDown = true\n\n    if(e.button == 0){\n      !_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isDrawing ? _view__WEBPACK_IMPORTED_MODULE_1__[\"startDraw\"](point) : _view__WEBPACK_IMPORTED_MODULE_1__[\"addPoint\"](point)\n    }\n\n  },\n\n  canvasWrapEl__onMouseMove: function(e){\n    e.preventDefault()\n\n    var point = { x: e.offsetX, y: e.offsetY }\n\n    if(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isDrawing){\n      var labelPoints = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel.points\n      labelPoints[labelPoints.length-1] = [point.x, point.y]\n      _view__WEBPACK_IMPORTED_MODULE_1__[\"renderLabelCanvas\"]()\n    }\n  },\n  \n  canvasWrapEl__onMouseUp: function(e){\n    e.preventDefault()\n\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isMouseDown = true\n  },\n \n  canvasWrapEl__onContextMenu: function(e){\n    e.preventDefault()\n\n    if(e.button == 2){\n      _view__WEBPACK_IMPORTED_MODULE_1__[\"stopDraw\"]()\n    }\n  },\n\n  // window\n  window__onKeyDown: function(e){\n    var currKey = e.keyCode || e.which || e.charCode\n\n    if(currKey == 81){\n      // key -> q\n      e.preventDefault()\n      _view__WEBPACK_IMPORTED_MODULE_1__[\"stopDraw\"]()\n    }\n\n    if(e.ctrlKey || e.metaKey && currKey == 90){\n      // key -> ctrl + z\n      e.preventDefault()\n      _view__WEBPACK_IMPORTED_MODULE_1__[\"unDoDraw\"]()\n    }\n  },\n\n  // labelImagesWrapEl\n  labelImagesWrapEl__onClick: function(e){\n    var target = e.target,\n        feats = {\n          deleteLabel: function(e, target){\n            var labelImageEl = target.parentNode,\n                labelTimestamp = labelImageEl.dataset.labelTimestamp\n\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes.forEach(function(label, index){\n              if(label.timestamp == labelTimestamp){\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes.splice(index, 1)\n                labelImageEl.parentNode.removeChild(labelImageEl)\n\n                _view__WEBPACK_IMPORTED_MODULE_1__[\"renderLabelCanvas\"]()\n                _view__WEBPACK_IMPORTED_MODULE_1__[\"uploadData\"]()\n              }\n            })\n          },\n          selectLabel: function(e, target){\n            _view__WEBPACK_IMPORTED_MODULE_1__[\"unSeelctLabel\"]()\n\n            var labelTimestamp = target.dataset.labelTimestamp\n\n            target.classList.add(\"active\")\n\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes.forEach(function(label, index){\n              if(label.timestamp == labelTimestamp){\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeShape = label\n\n                _view__WEBPACK_IMPORTED_MODULE_1__[\"renderLabelCanvas\"]()\n              }\n            })\n          },\n          showInput: function(e, target){\n            var input = window.prompt(\"输入标注内容：\", target.innerText)\n            if(!input) return\n\n            input = input.replace(/^\\s+|\\s$/g,\"\")\n\n            input = input.replace(/</g, \"&lt;\")\n\n            var labelImageEl = target.parentNode,\n                labelTimestamp = labelImageEl.dataset.labelTimestamp\n\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes.forEach(function(label, index){\n              if(label.timestamp == labelTimestamp){\n                label.name = input\n                target.innerText = input\n              }\n            })\n\n            _view__WEBPACK_IMPORTED_MODULE_1__[\"uploadData\"]();\n\n            return \"stop\"\n          },\n        }\n\n    while(target !== this){\n      if(!target) return\n      var feat = target.dataset.feat\n      var go = feat && feats.hasOwnProperty(feat) && feats[feat](e, target)\n      if(go === \"stop\") return\n\n      target = target.parentNode\n    }\n  },\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventHandler);\n\n\n//# sourceURL=webpack://goma/./src/sample/eventhandler.js?");

/***/ }),

/***/ "./src/sample/index.js":
/*!*****************************!*\
  !*** ./src/sample/index.js ***!
  \*****************************/
/*! exports provided: label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"label\", function() { return label; });\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/sample/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/sample/view.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./src/sample/model.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _eventhandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventhandler */ \"./src/sample/eventhandler.js\");\n\n\n\n\n\n\nlet label = appEl => {\n\n  let els = _view__WEBPACK_IMPORTED_MODULE_1__[\"els\"];\n\n  els.sourceImgEl = document.createElement(\"img\");\n\n  els.maskImgEl = document.createElement(\"img\");\n  els.maskImgEl.setAttribute(\"id\", \"maskImg\")\n  appEl.appendChild(els.maskImgEl)\n\n  {\n    els.canvasMain = document.createElement(\"div\");\n    els.canvasMain.setAttribute(\"id\", \"canvasMain\");\n    appEl.appendChild(els.canvasMain);\n\n    els.canvasWrapEl = document.createElement(\"div\");\n    els.canvasWrapEl.setAttribute(\"id\", \"canvasWrap\");\n    els.canvasMain.appendChild(els.canvasWrapEl);\n\n    els.imgCanvasEl = document.createElement(\"canvas\");\n    els.imgCanvasEl.setAttribute(\"id\", \"imgCanvas\");\n    els.imgCanvasEl.style.zIndex = 1;\n    _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].imgCtx = els.imgCanvasEl.getContext(\"2d\");\n    els.canvasWrapEl.appendChild(els.imgCanvasEl);\n\n    els.labelCanvasEl = document.createElement(\"canvas\");\n    els.labelCanvasEl.setAttribute(\"id\", \"labelCanvas\");\n    els.labelCanvasEl.style.zIndex = 2;\n    _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].labelCtx = els.labelCanvasEl.getContext(\"2d\");\n    els.canvasWrapEl.appendChild(els.labelCanvasEl);\n  }\n\n  {\n    els.labelPanelEl = document.createElement(\"div\")\n    els.labelPanelEl.setAttribute(\"id\", \"labelPanel\");\n    appEl.appendChild(els.labelPanelEl);\n\n    els.labelImagesWrapEl = document.createElement(\"div\");\n    els.labelImagesWrapEl.setAttribute(\"id\", \"labelImagesWrap\")\n    els.labelPanelEl.appendChild(els.labelImagesWrapEl);\n  }\n\n  {\n    els.cacheCanvasEl = document.createElement(\"canvas\");\n    _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cacheCtx = els.cacheCanvasEl.getContext(\"2d\");\n  }\n\n  _eventhandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"].registEventHandler();\n}\n\nlabel.model = _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nlabel.utils = _utils__WEBPACK_IMPORTED_MODULE_3__;\nlabel.view = _view__WEBPACK_IMPORTED_MODULE_1__;\n\n\n\n\n//# sourceURL=webpack://goma/./src/sample/index.js?");

/***/ }),

/***/ "./src/sample/index.scss":
/*!*******************************!*\
  !*** ./src/sample/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://goma/./src/sample/index.scss?");

/***/ }),

/***/ "./src/sample/model.js":
/*!*****************************!*\
  !*** ./src/sample/model.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  activeShape: null,\n\n  labelInfo: {\n    imagePath: null,\n    baseName: null,\n    imageData: null,\n    shapes: [],\n    imageWidth: null,\n    imageHeight: null,\n  },\n  currentLabel: null,\n  isDrawing: false,\n  isMouseDown: false,\n});\n\n//# sourceURL=webpack://goma/./src/sample/model.js?");

/***/ }),

/***/ "./src/sample/view.js":
/*!****************************!*\
  !*** ./src/sample/view.js ***!
  \****************************/
/*! exports provided: els, unSeelctLabel, startDraw, addPoint, uploadData, stopDraw, unDoDraw, renderLabelCanvas, initView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"els\", function() { return els; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unSeelctLabel\", function() { return unSeelctLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startDraw\", function() { return startDraw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPoint\", function() { return addPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadData\", function() { return uploadData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stopDraw\", function() { return stopDraw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unDoDraw\", function() { return unDoDraw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLabelCanvas\", function() { return renderLabelCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initView\", function() { return initView; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/sample/model.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _eventhandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventhandler */ \"./src/sample/eventhandler.js\");\n\n\n\n\nlet els = {};\n\nlet initData = cb => {\n  els.labelImagesWrapEl.innerHTML = \"\";\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"ajax\"](`/api/readfile/label/${_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.baseName}.json`, null, function(client){\n    let res = client.response;\n    if(res.data){\n      _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo = JSON.parse(res.data)\n      _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.baseName = res.filename.split(\".\")[0]\n      getSourceImg(function(sourceImg){\n        cb && cb(sourceImg)\n      })\n    }else{\n      _utils__WEBPACK_IMPORTED_MODULE_1__[\"ajax\"]('/api/readfile/source/' + _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.baseName+\".jpg\", null, function(client){\n        let res = client.response;\n        if(!res.data) return;\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.imageData = \"data:image/jpeg;base64,\"+res.data\n        getSourceImg(function(sourceImg){\n          _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes = []\n          cb && cb(sourceImg)\n        })\n      })\n    }\n  })\n};\n\nlet clearAllCanvas = () => {\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imgCtx.clearRect(0, 0, els.imgCanvasEl.width, els.imgCanvasEl.height)\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelCtx.clearRect(0, 0, els.labelCanvasEl.height, els.labelCanvasEl.height)\n};\n\nlet resetAllCanvasSize = canvasEl => {\n  var width = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.imageWidth,\n      height = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.imageHeight\n\n  var imgCanvasEl = els.imgCanvasEl,\n      labelCanvasEl = els.labelCanvasEl,\n      canvasWrapEl = els.canvasWrapEl\n\n  imgCanvasEl.width = labelCanvasEl.width = width\n  imgCanvasEl.height = labelCanvasEl.height = height\n\n  imgCanvasEl.style.width = canvasWrapEl.style.width = labelCanvasEl.style.width = width + \"px\"\n  imgCanvasEl.style.height = canvasWrapEl.style.height = labelCanvasEl.style.height = height + \"px\"\n};\n\nlet renderCurrentLabelExplore = label => {\n  if(!label) return\n\n  var targetImgWrapEl = els.labelImagesWrapEl.querySelector(\"#label_\"+label.timestamp)\n  if(!targetImgWrapEl){\n    targetImgWrapEl = document.createElement(\"div\")\n    targetImgWrapEl.setAttribute(\"data-feat\",\"selectLabel\")\n    targetImgWrapEl.setAttribute(\"data-label-timestamp\",label.timestamp)\n    targetImgWrapEl.classList.add(\"labelImage\")\n    targetImgWrapEl.setAttribute(\"id\", \"label_\" + label.timestamp)\n    targetImgWrapEl.innerHTML = '<div class=\"label-img-wrap\"></div><div data-feat=\"showInput\" class=\"label-name\"><span>'+(label.name || '未命名')+'</span></div><div data-feat=\"deleteLabel\" class=\"delete-label\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 20 20\"><path fill=\"#000000\" d=\"M15.5 2h-3.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v0.5h-3.5c-0.827 0-1.5 0.673-1.5 1.5v1c0 0.652 0.418 1.208 1 1.414v12.586c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-12.586c0.582-0.206 1-0.762 1-1.414v-1c0-0.827-0.673-1.5-1.5-1.5zM8 1.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v0.5h-3v-0.5zM14.5 19h-10c-0.276 0-0.5-0.224-0.5-0.5v-12.5h11v12.5c0 0.276-0.224 0.5-0.5 0.5zM16 4.5c0 0.276-0.224 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v1z\"></path><path fill=\"#000000\" d=\"M12.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z\"></path><path fill=\"#000000\" d=\"M9.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z\"></path><path fill=\"#000000\" d=\"M6.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z\"></path></svg></div>'\n    els.labelImagesWrapEl.appendChild(targetImgWrapEl)\n  }\n\n  if(!label.imageData) return\n\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"getImageBySrc\"](label.imageData, function(imageEl){\n    var canvas = els.cacheCanvasEl,\n        ctx = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cacheCtx,\n        points = label.points\n\n    ctx.save()\n    canvas.width = label.width\n    canvas.height = label.height\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n\n    ctx.beginPath()\n    for(var i=0; i<points.length; i++){\n      var point = points[i],\n          x = point[0]-label.left,\n          y = point[1]-label.top\n\n      if(i == 0){\n        ctx.moveTo(x, y)\n        continue\n      }\n      ctx.lineTo(x, y)\n    }\n    ctx.closePath()\n    ctx.clip()\n    ctx.drawImage(imageEl, 0, 0)\n    ctx.restore()\n\n    var dataURL = canvas.toDataURL(),\n        imageEl = targetImgWrapEl.querySelector(\".label-img-wrap\").querySelector(\"img\")\n\n    if(!imageEl){\n      imageEl = targetImgWrapEl.querySelector(\".label-img-wrap\").innerHTML = '<img src=\"'+ dataURL +'\"/>'\n    }else{\n      targetImgWrapEl.querySelector(\"img\").src = dataURL\n    }\n\n    label.imageData = dataURL\n  })\n};\n\nlet renderAllLabelExplore = () => {\n  var html = \"\"\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes.forEach(function(label, index){\n    html += '<div data-feat=\"selectLabel\" data-label-timestamp=\"'+label.timestamp+'\" class=\"labelImage\" id=\"label_'+label.timestamp+'\"><div class=\"label-img-wrap\"><img src=\"'+label.imageData+'\"/></div><div class=\"label-name\" data-feat=\"showInput\"><span>'+(label.name || '未命名')+'</span></div><div data-feat=\"deleteLabel\" class=\"delete-label\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 20 20\"><path fill=\"#000000\" d=\"M15.5 2h-3.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v0.5h-3.5c-0.827 0-1.5 0.673-1.5 1.5v1c0 0.652 0.418 1.208 1 1.414v12.586c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-12.586c0.582-0.206 1-0.762 1-1.414v-1c0-0.827-0.673-1.5-1.5-1.5zM8 1.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v0.5h-3v-0.5zM14.5 19h-10c-0.276 0-0.5-0.224-0.5-0.5v-12.5h11v12.5c0 0.276-0.224 0.5-0.5 0.5zM16 4.5c0 0.276-0.224 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v1z\"></path><path fill=\"#000000\" d=\"M12.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z\"></path><path fill=\"#000000\" d=\"M9.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z\"></path><path fill=\"#000000\" d=\"M6.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z\"></path></svg></div></div>'\n  })\n  els.labelImagesWrapEl.innerHTML = html\n};\n\nlet renderImgCanvas = sourceImg => {\n  var ctx = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imgCtx\n\n  ctx.save()\n  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)\n  ctx.drawImage(sourceImg, 0, 0)\n  ctx.restore()\n};\n\nlet getMaskImageData = () => {\n  var canvas = els.cacheCanvasEl,\n      ctx = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cacheCtx,\n      shapes = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes,\n      width = canvas.width = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.imageWidth,\n      height = canvas.height = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.imageHeight\n\n  ctx.save()\n  ctx.fillStyle = \"rgb(0, 0, 0)\"\n  ctx.clearRect(0, 0, canvas.width, canvas.height)\n  ctx.fillRect(0, 0, width, height)\n  for(var i=0; i<shapes.length; i++){\n    var shape = shapes[i]\n\n    var hex = Number((i+1)*1000).toString(16),\n        hexLength = hex.length\n\n    if(hexLength <= 6){\n      var diff = 6 - hexLength,\n          diffStr = \"#\"\n\n      for(var h=0; h<diff; h++){\n        diffStr += \"0\"\n      }\n      hex = diffStr + hex\n    }\n\n    // console.log(hex)\n\n    shape.maskColor = hex\n\n    for(var k=0; k<shape.points.length; k++){\n      var point = shape.points[k]\n      ctx.fillStyle = shape.maskColor\n      if(k == 0){\n        ctx.beginPath()\n        ctx.moveTo(point[0], point[1])\n        continue\n      }\n      ctx.lineTo(point[0], point[1])\n    }\n    ctx.fill()\n  }\n  ctx.restore()\n\n  var imageData = ctx.getImageData(0, 0, width, height),\n      data = imageData.data,\n      points = [],\n      rowPoints = []\n\n  for(var i=0; i<data.length; i+=4){\n    var r = data[i],\n        g = data[i+1],\n        b = data[i+2],\n        a = data[i+3],\n        str = `${r}${g}${b}`\n\n    points.push(str)\n  }\n\n  var rowIndex = -1\n  for(var i=0; i<points.length; i++){\n    if(i%width == 0){\n      rowIndex++\n      rowPoints[rowIndex] = []\n    }\n    rowPoints[rowIndex].push(points[i])\n  }\n\n  console.log(rowPoints)\n\n\n  els.maskImgEl.src = canvas.toDataURL()\n};\n\nlet getSourceImg = cb => {\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"getImageBySrc\"](_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.imageData, img => {\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.imageWidth = img.width;\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.imageHeight = img.height;\n    cb && cb(img);\n  })\n};\n\nlet calcCurrentLabeldimension = () => {\n  if(!_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel) return;\n  let currentLabel = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel;\n  let currentLabelPoints = currentLabel.points;\n  if(currentLabelPoints.length <= 3) return;\n  let xP = [], yP = [];\n  currentLabelPoints.map(function(point, index){\n    xP.push(point[0])\n    yP.push(point[1])\n  });\n  let left = currentLabel.left = Math.min.apply(null, xP);\n  let top = currentLabel.top = Math.min.apply(null, yP);\n  let width = els.cacheCanvasEl.width = currentLabel.width = Math.max.apply(null, xP) - left;\n  let height = els.cacheCanvasEl.height = currentLabel.height = Math.max.apply(null, yP) - top;\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cacheCtx.clearRect(0, 0, width, height);\n  let imageData = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imgCtx.getImageData(left, top, width, height);\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cacheCtx.putImageData(imageData, 0, 0);\n  currentLabel.imageData = els.cacheCanvasEl.toDataURL();\n};\n\nlet unSeelctLabel = () => {\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeShape = null;\n  let activeLabelImageEl = els.labelImagesWrapEl.querySelector(\".labelImage.active\");\n  if(activeLabelImageEl) activeLabelImageEl.classList.remove(\"active\");\n};\n\nlet startDraw = point => {\n  unSeelctLabel();\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isDrawing = true;\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel = {\n    left: point.x,\n    top: point.y,\n    width: 0,\n    height: 0,\n    timestamp: new Date().valueOf(),\n    points: [\n      [point.x, point.y],\n      [point.x, point.y]\n    ],\n    imageData: null,\n  }\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes.push(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel);\n  renderLabelCanvas();\n  renderCurrentLabelExplore(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel);\n};\n\nlet addPoint = point => {\n  var currentLabelPoints = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel.points\n  if(currentLabelPoints.length == 2 && currentLabelPoints[0][0] == point.x && currentLabelPoints[0][1] == point.y) return;\n  currentLabelPoints[currentLabelPoints.length - 1] = [point.x, point.y];\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel.points.push([point.x, point.y]);\n  calcCurrentLabeldimension();\n  renderLabelCanvas();\n  renderCurrentLabelExplore(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel);\n};\n\nlet uploadData = () => {\n  let shapes = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes;\n  for(let i=0; i<shapes.length; i++){\n    let shape = shapes[i];\n    shape.label = i + \"\";\n  }\n  let str = JSON.stringify(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo);\n  let fd = new FormData();\n  fd.append(\"data\", str);\n  fd.append(\"imagePath\", _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.imagePath);\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"ajax\"](\"/api/writefile/label\", fd, function(client){\n    let res = client.response;\n    let filename = res.filename;\n  });\n};\n\nlet stopDraw = () => {\n  if(!_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isDrawing) return\n\n  var currentLabel = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel,\n      currentLabelPoints = currentLabel.points\n\n  if(currentLabelPoints.length <= 3){\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes.splice(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes.indexOf(currentLabel), 1)\n    var labelImageEl = els.labelImagesWrapEl.querySelector(\"#label_\" + currentLabel.timestamp)\n    if(labelImageEl){\n      labelImageEl.parentNode.removeChild(labelImageEl)\n    }\n    renderLabelCanvas()\n  }else{\n    currentLabelPoints.splice(currentLabelPoints.length-1, 1)\n    renderLabelCanvas()\n    uploadData()\n  }\n\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel = null\n\n  _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isDrawing = false\n};\n\nlet unDoDraw = () => {\n  if(!_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isDrawing) return\n\n  var labelPoints = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentLabel.points\n\n  if(labelPoints.length <= 2) return\n\n  labelPoints.splice(labelPoints.length-2, 1)\n\n  renderLabelCanvas()\n};\n\nlet renderLabelCanvas = () => {\n  var ctx = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelCtx\n\n  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)\n\n  ctx.save()\n  ctx.lineWidth = 1\n  ctx.lineJoin = \"round\"\n  ctx.fillStyle = \"hsla(60, 100%, 50%, .1)\"\n  ctx.strokeStyle = \"hsla(60, 100%, 50%, 1)\"\n\n  var shapes = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].labelInfo.shapes\n  for(var i=0; i<shapes.length; i++){\n    var label = shapes[i]\n\n    ctx.save()\n\n    if(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeShape && _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeShape === label){\n      ctx.lineWidth = 2\n      ctx.strokeStyle = \"hsla(0, 100%, 60%, 1)\"\n      ctx.fillStyle = \"hsla(0, 100%, 50%, .2)\"\n    }\n\n    var points = label.points\n\n    ctx.beginPath()\n    for(var k=0; k<points.length; k++){\n      var point = points[k]\n      if(k == 0){\n        ctx.moveTo(point[0], point[1])\n      }else{\n        ctx.lineTo(point[0], point[1])\n      }\n    }\n    ctx.closePath()\n    ctx.fill()\n    ctx.stroke()\n\n    ctx.restore()\n  }\n  ctx.restore()\n};\n\nlet initView = () => {\n  initData(sourceImg => {\n    resetAllCanvasSize();\n    clearAllCanvas();\n    renderImgCanvas(sourceImg);\n    renderLabelCanvas();\n    renderAllLabelExplore();\n    els.canvasWrapEl.classList.add(\"show\");\n  })\n}\n\n\n//# sourceURL=webpack://goma/./src/sample/view.js?");

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