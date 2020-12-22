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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./src/modules/calc.js");
// import from a module, that exports multiple elements
// we are importing "calcOne" object as "calc"
 // start the calculation

console.log(_modules_calc__WEBPACK_IMPORTED_MODULE_0__["calcOne"].calc(1));

/***/ }),

/***/ "./src/modules/calc-one.js":
/*!*********************************!*\
  !*** ./src/modules/calc-one.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalcOne; });
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc */ "./src/modules/calc.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// we are importing the calc sibling


var CalcOne = /*#__PURE__*/function () {
  // just to show you, that the object
  // created only once
  function CalcOne() {
    _classCallCheck(this, CalcOne);

    console.log('create calc one');
  }
  /**
   * @param {number} num 
   */


  _createClass(CalcOne, [{
    key: "calc",
    value: function calc(num) {
      console.log('add');
      num += Math.PI;
      if (num > 300) return num;
      return _calc__WEBPACK_IMPORTED_MODULE_0__["calcTwo"].calc(num);
    }
  }]);

  return CalcOne;
}();



/***/ }),

/***/ "./src/modules/calc-two.js":
/*!*********************************!*\
  !*** ./src/modules/calc-two.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalcTwo; });
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc */ "./src/modules/calc.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// we are importing the calc sibling


var CalcTwo = /*#__PURE__*/function () {
  // just to show you, that the object
  // created only once
  function CalcTwo() {
    _classCallCheck(this, CalcTwo);

    console.log('create calc two');
  }
  /**
   * @param {number} num 
   */


  _createClass(CalcTwo, [{
    key: "calc",
    value: function calc(num) {
      console.log('multiply');
      num *= Math.PI;
      if (num > 300) return num;
      return _calc__WEBPACK_IMPORTED_MODULE_0__["calcOne"].calc(num);
    }
  }]);

  return CalcTwo;
}();



/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/*! exports provided: calcOne, calcTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcOne", function() { return calcOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTwo", function() { return calcTwo; });
/* harmony import */ var _calc_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-one */ "./src/modules/calc-one.js");
/* harmony import */ var _calc_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-two */ "./src/modules/calc-two.js");
// we are importing both of the calculator classes

 // there will be one instance for both of tham

var calcOne = new _calc_one__WEBPACK_IMPORTED_MODULE_0__["default"]();
var calcTwo = new _calc_two__WEBPACK_IMPORTED_MODULE_1__["default"](); // we are exporting the objects
// when you import from here, there will be only
// one of tham created, regardless how many 
// times you import these objects



/***/ })

/******/ });
//# sourceMappingURL=index.js.map