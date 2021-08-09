(this["webpackChunkreact_webpack_playground"] = this["webpackChunkreact_webpack_playground"] || []).push([["rs-parser_index_js"],{

/***/ "./rs-parser/index.js":
/*!****************************!*\
  !*** ./rs-parser/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsParser": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.JsParser),
/* harmony export */   "__wbg_reactJsTransform_01f71b4ce9fd5290": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_reactJsTransform_01f71b4ce9fd5290),
/* harmony export */   "__wbindgen_is_object": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_object),
/* harmony export */   "__wbindgen_is_undefined": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_undefined),
/* harmony export */   "__wbindgen_json_parse": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_json_parse),
/* harmony export */   "__wbindgen_json_serialize": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_json_serialize),
/* harmony export */   "__wbindgen_throw": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)
/* harmony export */ });
/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.js */ "./rs-parser/index_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_js__WEBPACK_IMPORTED_MODULE_0__]);
_index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


});

/***/ }),

/***/ "./rs-parser/index_bg.js":
/*!*******************************!*\
  !*** ./rs-parser/index_bg.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsParser": () => (/* binding */ JsParser),
/* harmony export */   "__wbindgen_is_undefined": () => (/* binding */ __wbindgen_is_undefined),
/* harmony export */   "__wbindgen_is_object": () => (/* binding */ __wbindgen_is_object),
/* harmony export */   "__wbindgen_json_serialize": () => (/* binding */ __wbindgen_json_serialize),
/* harmony export */   "__wbindgen_json_parse": () => (/* binding */ __wbindgen_json_parse),
/* harmony export */   "__wbg_reactJsTransform_01f71b4ce9fd5290": () => (/* binding */ __wbg_reactJsTransform_01f71b4ce9fd5290),
/* harmony export */   "__wbindgen_throw": () => (/* binding */ __wbindgen_throw)
/* harmony export */ });
/* harmony import */ var _src_transpiling_transformers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/transpiling/transformers.js */ "./src/transpiling/transformers.js");
/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.wasm */ "./rs-parser/index_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);
_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);

function getObject(idx) {
  return heap[idx];
}

var WASM_VECTOR_LEN = 0;
var cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer);
  }

  return cachegetUint8Memory0;
}

var lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder('utf-8');
var encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  var buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};

function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    var buf = cachedTextEncoder.encode(arg);

    var _ptr = malloc(buf.length);

    getUint8Memory0().subarray(_ptr, _ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return _ptr;
  }

  var len = arg.length;
  var ptr = malloc(len);
  var mem = getUint8Memory0();
  var offset = 0;

  for (; offset < len; offset++) {
    var code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }

    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    var view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    var ret = encodeString(arg, view);
    offset += ret.written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}

var cachegetInt32Memory0 = null;

function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer);
  }

  return cachegetInt32Memory0;
}

var lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

var heap_next = heap.length;

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  var idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}

var stack_pointer = 32;

function addBorrowedObject(obj) {
  if (stack_pointer == 1) throw new Error('out of js stack');
  heap[--stack_pointer] = obj;
  return stack_pointer;
}

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  var ret = getObject(idx);
  dropObject(idx);
  return ret;
}
/**
*/


var JsParser = /*#__PURE__*/function () {
  function JsParser() {
    _classCallCheck(this, JsParser);
  }

  _createClass(JsParser, [{
    key: "__destroy_into_raw",
    value: function __destroy_into_raw() {
      var ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
  }, {
    key: "free",
    value: function free() {
      var ptr = this.__destroy_into_raw();

      _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbg_jsparser_free(ptr);
    }
    /**
    * @returns {JsParser}
    */

  }, {
    key: "parse",
    value:
    /**
    * @param {Map<any, any>} project
    * @param {string} path
    * @returns {any}
    */
    function parse(project, path) {
      try {
        var ptr0 = passStringToWasm0(path, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.jsparser_parse(this.ptr, addBorrowedObject(project), ptr0, len0);
        return takeObject(ret);
      } finally {
        heap[stack_pointer++] = undefined;
      }
    }
  }], [{
    key: "__wrap",
    value: function __wrap(ptr) {
      var obj = Object.create(JsParser.prototype);
      obj.ptr = ptr;
      return obj;
    }
  }, {
    key: "new",
    value: function _new() {
      var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.jsparser_new();
      return JsParser.__wrap(ret);
    }
  }]);

  return JsParser;
}();
function __wbindgen_is_undefined(arg0) {
  var ret = getObject(arg0) === undefined;
  return ret;
}
;
function __wbindgen_is_object(arg0) {
  var val = getObject(arg0);
  var ret = _typeof(val) === 'object' && val !== null;
  return ret;
}
;
function __wbindgen_json_serialize(arg0, arg1) {
  var obj = getObject(arg1);
  var ret = JSON.stringify(obj === undefined ? null : obj);
  var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
;
function __wbindgen_json_parse(arg0, arg1) {
  var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
;
function __wbg_reactJsTransform_01f71b4ce9fd5290(arg0, arg1, arg2) {
  var ret = (0,_src_transpiling_transformers_js__WEBPACK_IMPORTED_MODULE_0__.reactJsTransform)(getStringFromWasm0(arg1, arg2));
  var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
;
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
;
});

/***/ }),

/***/ "./src/transpiling/transformers.js":
/*!*****************************************!*\
  !*** ./src/transpiling/transformers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reactJsTransform": () => (/* binding */ reactJsTransform)
/* harmony export */ });
/* harmony import */ var _babel_standalone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/standalone */ "./node_modules/@babel/standalone/babel.js");
/* harmony import */ var _babel_standalone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_standalone__WEBPACK_IMPORTED_MODULE_0__);

var reactJsTransform = function reactJsTransform(rawCode) {
  var _transform = (0,_babel_standalone__WEBPACK_IMPORTED_MODULE_0__.transform)(rawCode, {
    presets: ['es2015', 'react']
  }),
      code = _transform.code;

  return code;
};

/***/ }),

/***/ "./rs-parser/index_bg.wasm":
/*!*********************************!*\
  !*** ./rs-parser/index_bg.wasm ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "06fbc6fd1d376f1f90c9", {
		"./index_bg.js": {
			"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
			"__wbindgen_is_object": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_object,
			"__wbindgen_json_serialize": WEBPACK_IMPORTED_MODULE_0.__wbindgen_json_serialize,
			"__wbindgen_json_parse": WEBPACK_IMPORTED_MODULE_0.__wbindgen_json_parse,
			"__wbg_reactJsTransform_01f71b4ce9fd5290": WEBPACK_IMPORTED_MODULE_0.__wbg_reactJsTransform_01f71b4ce9fd5290,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
		}
	});
}
__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./index_bg.js */ "./rs-parser/index_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	return __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);
}, 1);

/***/ })

}]);
//# sourceMappingURL=rs-parser_index_js.chunk.js.map