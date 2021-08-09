(this["webpackChunkreact_webpack_playground"] = this["webpackChunkreact_webpack_playground"] || []).push([["main"],{

/***/ "./demo/index.js":
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src */ "./src/index.js");
/* harmony import */ var _sampleReactProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sampleReactProject */ "./demo/sampleReactProject.js");





 // TODO: try changing the theme here
// import '../src/themes/charcoal.css';

function Comp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.default, {
    lilProject: _sampleReactProject__WEBPACK_IMPORTED_MODULE_5__.default
  }));
}

(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, null)), document.querySelector('#root'));

/***/ }),

/***/ "./demo/sampleReactProject.js":
/*!************************************!*\
  !*** ./demo/sampleReactProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'sample-project',
  entries: {
    './App.js': "import\xA0React, {useState}\xA0from\xA0\"react\";\nimport JustAnOrdinaryContext from './JustAnOrdinaryContext';\nimport ThisOneUsesStylesAndContext from './ThisOneUsesStylesAndContext';\nimport someData from './some_data.json';\n\nexport\xA0default\xA0function\xA0App()\xA0{\n    const [text, setText] = useState('Johnny');\n\n    return\xA0(<div style={{ padding: '10px' }}>\n        <JustAnOrdinaryContext.Provider value={{text, setText}}>\n            <ThisOneUsesStylesAndContext />\n            <div\xA0className=\"App\">\n                <h2>Oh,\xA0hello\xA0there</h2>\n                <p>And heere is {text}</p>\n            </div>            \n        </JustAnOrdinaryContext.Provider>\n\n        <img src=\"https://media3.giphy.com/media/8Ja3gouJQSg1i/giphy.gif?cid=ecf05e47xd038ul10h88izmtwn8uybju1t519uk9fd0pk3dy&rid=giphy.gif&ct=g\" />\n            \n        <p>And from the json, this gif is from { someData.adverb } <b>{ someData.name }</b>.</p>\n        <p>This one still is {someData.opinion}...</p>\n    </div>);\n}        \n",
    './JustAnOrdinaryContext': "import\xA0{createContext}\xA0from\xA0\"react\"\n\nexport default createContext({ \n    text: 'Johnny', \n    setText: () => {},\n});\n\n",
    './ThisOneUsesStylesAndContext.js': "import\xA0React, {useContext}\xA0from\xA0\"react\";\nimport JustAnOrdinaryContext from './JustAnOrdinaryContext';\n\nexport\xA0default\xA0function\xA0ThisOneUsesStylesAndContext()\xA0{\n    const {text, setText} = useContext(JustAnOrdinaryContext);\n\n    return\xA0(<div \n        style={{ \n            border: '1px solid transparent',\n            backgroundColor: '#2196F3',\n            borderColor: '#144B76',\n            marginBottom: '20px',\n            borderRadius: '4px',\n            color: '#E6E6E6',\n            padding: '15px',\n        }}>\n        <strong>Change here: </strong>\n        <input \n            type='text' \n            value={text} \n            onChange={({target}) => setText(target.value)}/>\n        </div>\n    );\n}",
    './some_data.json': "{ \n    \"adverb\": \"the mostly excellent\", \n    \"name\": \"Johnny Castaway\", \n    \"opinion\": \"my favorite screensaver\" \n}"
  },
  getExraDependencies: function getExraDependencies() {
    return {};
  },
  beforeRender: function beforeRender(strategy) {},
  beforeInvoke: function beforeInvoke(context) {},
  afterInvoke: function afterInvoke(context) {}
});

/***/ }),

/***/ "./src/Components/Checkbox.js":
/*!************************************!*\
  !*** ./src/Components/Checkbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// from the excellent https://anuraghazra.github.io/blog/building-a-react-folder-tree-component


function CheckBox(_ref) {
  var title = _ref.title,
      _ref$checked = _ref.checked,
      initialState = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var toggleCheck = function toggleCheck() {
    setChecked(!checked);
    onChange && onChange(!checked);
  };

  return checked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillCheckSquare, {
    title: title,
    onClick: toggleCheck
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineBorder, {
    title: title,
    onClick: toggleCheck
  });
}

/***/ }),

/***/ "./src/Components/Display/DynamicBody.js":
/*!***********************************************!*\
  !*** ./src/Components/Display/DynamicBody.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ErrorsExplained__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorsExplained */ "./src/Components/Display/ErrorsExplained.js");
/* harmony import */ var _ErrorsBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorsBoundary */ "./src/Components/Display/ErrorsBoundary.js");
/* harmony import */ var _transpiling_stage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../transpiling/stage */ "./src/transpiling/stage.js");





var DisplayBody = function DisplayBody(_ref) {
  var status = _ref.status,
      error = _ref.error,
      Component = _ref.component;
  var errorsBoundaryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var statusMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var className = '';
    var message = '';

    if (_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.error, status)) {
      className = 'code-error';
      message = 'There was an error!';
    } else if (_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.rendering, status)) {
      className = 'code-rendering';
      message = 'Rendering the code ...';
    } else if (_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.invoking, status)) {
      className = 'code-invoking';
      message = 'Invoking the code ...';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "message ".concat(className)
    }, message);
  }, [status]);
  var boundComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!Component) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "empty-component"
      }, "< YOUR COMPONENT HERE />");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorsBoundary__WEBPACK_IMPORTED_MODULE_2__.default, {
      ref: errorsBoundaryRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, null));
  }, [Component]);
  var errors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.error, status)) {
      return null;
    }

    var title = _transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.rendering, status) ? 'There was a problem during the rendering' : _transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.invoking, status) ? 'There was a problem during the invoking of the module' : 'There was a problem';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "parsing-error"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorsExplained__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: title,
      error: error
    }));
  }, [error, status]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _errorsBoundaryRef$cu;

    var isWorking = _transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.rendering, status) || _transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_3__.default.invoking, status);

    if (isWorking && (_errorsBoundaryRef$cu = errorsBoundaryRef.current) !== null && _errorsBoundaryRef$cu !== void 0 && _errorsBoundaryRef$cu.error) {
      var _errorsBoundaryRef$cu2;

      (_errorsBoundaryRef$cu2 = errorsBoundaryRef.current) === null || _errorsBoundaryRef$cu2 === void 0 ? void 0 : _errorsBoundaryRef$cu2.reset();
    }
  }, [status]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, errors, boundComponent, statusMessage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayBody);

/***/ }),

/***/ "./src/Components/Display/ErrorsBoundary.js":
/*!**************************************************!*\
  !*** ./src/Components/Display/ErrorsBoundary.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ErrorsExplained__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorsExplained */ "./src/Components/Display/ErrorsExplained.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var initial_state = {
  error: null,
  info: null
};

var ErrorsBoundary = function ErrorsBoundary(props, ref) {
  var ErrorBoundariesImpl = /*#__PURE__*/function (_Component) {
    _inherits(ErrorBoundariesImpl, _Component);

    var _super = _createSuper(ErrorBoundariesImpl);

    function ErrorBoundariesImpl(props) {
      var _this;

      _classCallCheck(this, ErrorBoundariesImpl);

      _this = _super.call(this, props);
      _this.state = {
        hasError: false
      };

      if (ref) {
        ref.current = {
          reset: function reset() {
            return _this.reset();
          },
          error: _this.state.error
        };
      }

      return _this;
    }

    _createClass(ErrorBoundariesImpl, [{
      key: "componentDidCatch",
      value: function componentDidCatch(error, info) {
        this.setState({
          error: error,
          info: info
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.setState(initial_state);
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.error) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorsExplained__WEBPACK_IMPORTED_MODULE_1__.default, {
            fatal: true,
            error: this.state.error
          });
        }

        return this.props.children;
      }
    }], [{
      key: "getDerivedStateFromError",
      value: function getDerivedStateFromError(error) {
        return {
          error: error,
          hasError: true
        };
      }
    }]);

    return ErrorBoundariesImpl;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundariesImpl, props);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(ErrorsBoundary));

/***/ }),

/***/ "./src/Components/Display/ErrorsExplained.js":
/*!***************************************************!*\
  !*** ./src/Components/Display/ErrorsExplained.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorsExplained)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ErrorsExplained_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorsExplained.scss */ "./src/Components/Display/ErrorsExplained.scss");


var maxLength = 1024;
function ErrorsExplained(_ref) {
  var _ref$error = _ref.error,
      error = _ref$error === void 0 ? {} : _ref$error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "errors-explained"
  }, error.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "error-title"
  }, "Error: \"", error.name, "\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "There was an error trying to parse the code", error.loc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0(ln ", error.loc.line, " col ", error.loc.column, ")"), "."), error.code && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " Error Code: ", error.code)), error.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "error-sub-title"
  }, "Message: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\"", error.message, "\"")), error.stack && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "error-stack"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "error-sub-title"
  }, "Stack:"), error.stack.length > maxLength ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, error.stack.substring(0, maxLength), " ...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, error.stack)));
}

/***/ }),

/***/ "./src/Components/Display/index.js":
/*!*****************************************!*\
  !*** ./src/Components/Display/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ErrorsBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorsBoundary */ "./src/Components/Display/ErrorsBoundary.js");
/* harmony import */ var _transpiling_stage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transpiling/stage */ "./src/transpiling/stage.js");
/* harmony import */ var _DynamicBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DynamicBody */ "./src/Components/Display/DynamicBody.js");
/* harmony import */ var _display_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display.scss */ "./src/Components/Display/display.scss");






var Display = function Display(_ref) {
  var onForceRefresh = _ref.onForceRefresh,
      status = _ref.status,
      error = _ref.error,
      component = _ref.component;
  var boundariesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _boundariesRef$curren;

    var isWorking = _transpiling_stage__WEBPACK_IMPORTED_MODULE_2__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_2__.default.rendering, status) || _transpiling_stage__WEBPACK_IMPORTED_MODULE_2__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_2__.default.invoking, status);

    if (isWorking && (_boundariesRef$curren = boundariesRef.current) !== null && _boundariesRef$curren !== void 0 && _boundariesRef$curren.error) {
      var _boundariesRef$curren2;

      (_boundariesRef$curren2 = boundariesRef.current) === null || _boundariesRef$curren2 === void 0 ? void 0 : _boundariesRef$curren2.reset();
    }
  }, [status]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "display columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "s-1-12 rows tools"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "refresh-btn",
    type: "button",
    onClick: onForceRefresh
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: !_transpiling_stage__WEBPACK_IMPORTED_MODULE_2__.default.has(_transpiling_stage__WEBPACK_IMPORTED_MODULE_2__.default.rendering, status) ? 'rotating' : ''
  }, "\u2B6F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    className: "regular-checkbox big"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grow dynamic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ErrorsBoundary__WEBPACK_IMPORTED_MODULE_1__.default, {
    fatal: true,
    ref: boundariesRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DynamicBody__WEBPACK_IMPORTED_MODULE_3__.default, {
    status: status,
    component: component,
    error: error
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);

/***/ }),

/***/ "./src/Components/Editor/CodeEditor.js":
/*!*********************************************!*\
  !*** ./src/Components/Editor/CodeEditor.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ace */ "./node_modules/react-ace/lib/index.js");
/* harmony import */ var ace_builds_src_min_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ace-builds/src-min-noconflict/mode-javascript */ "./node_modules/ace-builds/src-min-noconflict/mode-javascript.js");
/* harmony import */ var ace_builds_src_min_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ace_builds_src_min_noconflict_mode_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ace-builds/src-min-noconflict/mode-jsx */ "./node_modules/ace-builds/src-min-noconflict/mode-jsx.js");
/* harmony import */ var ace_builds_src_min_noconflict_mode_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_mode_jsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ace_builds_src_min_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ace-builds/src-min-noconflict/mode-json */ "./node_modules/ace-builds/src-min-noconflict/mode-json.js");
/* harmony import */ var ace_builds_src_min_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ace_builds_src_min_noconflict_theme_twilight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ace-builds/src-min-noconflict/theme-twilight */ "./node_modules/ace-builds/src-min-noconflict/theme-twilight.js");
/* harmony import */ var ace_builds_src_min_noconflict_theme_twilight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_theme_twilight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ace_builds_src_min_noconflict_ext_language_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ace-builds/src-min-noconflict/ext-language_tools */ "./node_modules/ace-builds/src-min-noconflict/ext-language_tools.js");
/* harmony import */ var ace_builds_src_min_noconflict_ext_language_tools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_ext_language_tools__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ace_builds_src_min_noconflict_snippets_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ace-builds/src-min-noconflict/snippets/javascript */ "./node_modules/ace-builds/src-min-noconflict/snippets/javascript.js");
/* harmony import */ var ace_builds_src_min_noconflict_snippets_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_snippets_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ace_builds_src_min_noconflict_snippets_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ace-builds/src-min-noconflict/snippets/jsx */ "./node_modules/ace-builds/src-min-noconflict/snippets/jsx.js");
/* harmony import */ var ace_builds_src_min_noconflict_snippets_jsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_snippets_jsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ace_builds_src_min_noconflict_ext_searchbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ace-builds/src-min-noconflict/ext-searchbox */ "./node_modules/ace-builds/src-min-noconflict/ext-searchbox.js");
/* harmony import */ var ace_builds_src_min_noconflict_ext_searchbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_ext_searchbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ace_builds_src_min_noconflict_ext_beautify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ace-builds/src-min-noconflict/ext-beautify */ "./node_modules/ace-builds/src-min-noconflict/ext-beautify.js");
/* harmony import */ var ace_builds_src_min_noconflict_ext_beautify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_min_noconflict_ext_beautify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ace_builds_webpack_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ace-builds/webpack-resolver */ "./node_modules/ace-builds/webpack-resolver.js");
/* harmony import */ var ace_builds_webpack_resolver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ace_builds_webpack_resolver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _tabDirection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabDirection */ "./src/Components/Editor/tabDirection.js");













function CodeEditor(_ref) {
  var code = _ref.code,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'jsx' : _ref$mode,
      onChangeTab = _ref.onChangeTab,
      triggerCodeChange = _ref.onChange;
  var aceEditor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var commands = aceEditor.current.editor.commands;
    commands.addCommands([{
      name: 'next-tab',
      bindKey: {
        win: 'Alt-`',
        mac: 'Command-Tab'
      },
      exec: function exec() {
        onChangeTab && onChangeTab(_tabDirection__WEBPACK_IMPORTED_MODULE_12__.default.next);
      },
      readOnly: true
    }, {
      name: 'previous-tab',
      bindKey: {
        win: 'Alt-Shift-`',
        mac: 'Command-Shift-Tab'
      },
      exec: function exec() {
        onChangeTab && onChangeTab(_tabDirection__WEBPACK_IMPORTED_MODULE_12__.default.previous);
      },
      readOnly: true
    }]);
  }, [code, onChangeTab]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_ace__WEBPACK_IMPORTED_MODULE_1__.default, {
    ref: aceEditor,
    placeholder: "Have fun!",
    mode: mode || 'javascript',
    theme: "twilight",
    name: "codeEditor",
    onChange: triggerCodeChange,
    fontSize: 14,
    width: "100%",
    style: {
      boxSizing: 'border-box',
      height: 'calc(100vh - 34px)'
    },
    showPrintMargin: true,
    showGutter: true,
    highlightActiveLine: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
    setOptions: {
      showLineNumbers: true,
      tabSize: 4
    },
    value: code
  });
}

/***/ }),

/***/ "./src/Components/Editor/EditorTab.js":
/*!********************************************!*\
  !*** ./src/Components/Editor/EditorTab.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // TODO: check why I was working on this
// import getKeyWithCount from './getKeywithCount';

var enterKey = 13;
var escapeKey = 27;
function EditorTab(_ref) {
  var isActive = _ref.isActive,
      name = _ref.name,
      triggerRename = _ref.onRename,
      onClick = _ref.onClick;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      isRenaming = _useState2[0],
      setIsRenaming = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(name),
      _useState4 = _slicedToArray(_useState3, 2),
      possibleNewName = _useState4[0],
      setPossibleNewName = _useState4[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isRenaming) {
      var input = inputRef.current;
      input.focus();
      var key = input.value;
      input.setSelectionRange(2, key.indexOf((0,path__WEBPACK_IMPORTED_MODULE_1__.extname)(key)));
    }
  }, [isRenaming]);

  var showRenameBox = function showRenameBox(e, key) {
    setPossibleNewName(key);
    setIsRenaming(true);
    e.preventDefault();
  };

  var handleChange = function handleChange(e) {
    setPossibleNewName(e.target.value);
    e.preventDefault();
  };

  var renameOnBlur = function renameOnBlur(e) {
    e.preventDefault();
    setIsRenaming(false);
    triggerRename(possibleNewName);
  };

  var handleKeys = function handleKeys(e) {
    if (e.keyCode === enterKey) {
      setIsRenaming(false);
      triggerRename(possibleNewName);
    }

    if (e.keyCode === escapeKey) {
      setIsRenaming(false);
      setPossibleNewName(name);
    }

    e.preventDefault();
  };

  var currentCss = 'tab grow ' + (isActive ? 'active' : '') + ' ' + (isRenaming ? 'renaming' : '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: onClick,
    className: currentCss,
    onDoubleClick: function onDoubleClick(e) {
      return showRenameBox(e, name);
    }
  }, !isRenaming ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rows align-items center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grow"
  }, name), isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "closeBtn"
  }, "x")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    ref: inputRef,
    onKeyUp: handleKeys,
    onChange: handleChange,
    onBlur: renameOnBlur,
    value: possibleNewName
  }));
}

/***/ }),

/***/ "./src/Components/Editor/editorMode.js":
/*!*********************************************!*\
  !*** ./src/Components/Editor/editorMode.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  '.js': 'jsx',
  '.jsx': 'jsx',
  '.json': 'json'
});

/***/ }),

/***/ "./src/Components/Editor/getKeywithCount.js":
/*!**************************************************!*\
  !*** ./src/Components/Editor/getKeywithCount.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getKeyWithCount)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

function getKeyWithCount(obj, path) {
  var extension = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var ext = extension;
  var key = path;

  if (!ext) {
    extension = (0,path__WEBPACK_IMPORTED_MODULE_0__.extname)(path) || '';
    key = key.substring(0, path.length - ext.length);
  }

  var keyWithCount = count ? "".concat(key, "(").concat(count, ")").concat(ext) : "".concat(key).concat(ext);

  if (obj[keyWithCount] !== null && obj[keyWithCount] !== undefined) {
    return getKeyWithCount(obj, key, ext, count + 1);
  }

  return keyWithCount;
}

/***/ }),

/***/ "./src/Components/Editor/index.js":
/*!****************************************!*\
  !*** ./src/Components/Editor/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CodeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeEditor */ "./src/Components/Editor/CodeEditor.js");
/* harmony import */ var _editorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editorMode */ "./src/Components/Editor/editorMode.js");
/* harmony import */ var _EditorTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditorTab */ "./src/Components/Editor/EditorTab.js");
/* harmony import */ var _getKeywithCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getKeywithCount */ "./src/Components/Editor/getKeywithCount.js");
/* harmony import */ var _tabDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabDirection */ "./src/Components/Editor/tabDirection.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/Components/Editor/editor.scss");
/* harmony import */ var _PlaygroundContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../PlaygroundContext */ "./src/PlaygroundContext.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Editor(_ref) {
  var _ref$project = _ref.project,
      project = _ref$project === void 0 ? {} : _ref$project,
      triggerChange = _ref.onChange,
      triggerRename = _ref.onRename;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PlaygroundContext__WEBPACK_IMPORTED_MODULE_8__.default),
      selectedEntry = _useContext.selectedEntry,
      setSelectedEntry = _useContext.setSelectedEntry;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      language = _useState2[0],
      setLanguage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      code = _useState4[0],
      setCode = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (!project.entries) {
      return;
    }

    setCode(project.entries[selectedEntry]);
    setLanguage(selectedEntry ? path__WEBPACK_IMPORTED_MODULE_1___default().extname(selectedEntry) : '.js');
  }, [project.entries, selectedEntry]);

  var selectEntry = function selectEntry(entryName, content) {
    setCode(content);
    setSelectedEntry(entryName);
    setLanguage(_editorMode__WEBPACK_IMPORTED_MODULE_3__.default[path__WEBPACK_IMPORTED_MODULE_1___default().extname(entryName)]);
  };

  var addEntry = function addEntry() {
    var newKey = (0,_getKeywithCount__WEBPACK_IMPORTED_MODULE_5__.default)(project.entries, './new file', '.js');
    triggerChange(newKey, '');
  };

  var items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return project.entries && Object.entries(project.entries);
  }, [project.entries]);

  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var rename = function rename(oldName, newName) {
      if (oldName === newName) {
        return;
      }

      if (!project.entries[newName]) {
        triggerRename(oldName, newName);
        setSelectedEntry(newName);
        return;
      }

      var newKey = (0,_getKeywithCount__WEBPACK_IMPORTED_MODULE_5__.default)(project.entries, newName);
      triggerRename(oldName, newKey);
      setSelectedEntry(newKey);
    };

    return [items.map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          name = _ref3[0],
          text = _ref3[1];

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditorTab__WEBPACK_IMPORTED_MODULE_4__.default, {
        key: "".concat(name, "-tab"),
        name: name,
        onRename: function onRename(newName) {
          return rename(name, newName);
        },
        onClick: function onClick() {
          return selectEntry(name, text);
        },
        isActive: selectedEntry === name
      });
    }), items.map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          name = _ref5[0],
          text = _ref5[1];

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: "".concat(name, "-dropdown-item"),
        onClick: function onClick() {
          return selectEntry(name, text);
        },
        className: selectedEntry === name ? 'active' : ''
      }, name);
    })]; // ignore the references to those two functions, as if they arent cached, will make an inifinte loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, project.entries, triggerRename, selectedEntry
  /*, setSelectedEntry, selectEntry */
  ]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      tabs = _useMemo2[0],
      dropDownItems = _useMemo2[1];

  var moveSelectedTab = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (direction) {
    if (items.length <= 1) {
      return;
    }

    var currentTab = selectedEntry;
    var selectedIndex = items.findIndex(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 1),
          key = _ref7[0];

      return key === currentTab;
    });
    var newSelected;

    if (direction === _tabDirection__WEBPACK_IMPORTED_MODULE_6__.default.next) {
      newSelected = items[selectedIndex + 1] || items[0];
    }

    if (direction === _tabDirection__WEBPACK_IMPORTED_MODULE_6__.default.previous) {
      newSelected = items[selectedIndex - 1] || items[items.length - 1];
    }

    setSelectedEntry(newSelected[0]);
  }, // The use of that function here can cause an infinite loop if not cached
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [items, selectedEntry
  /*, setSelectedEntry*/
  ]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rows"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tab rows dropdown"
  }, "\u25BC", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown-content"
  }, dropDownItems)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grow tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rows"
  }, tabs)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "newTab",
    type: "button",
    onClick: addEntry
  }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeEditor__WEBPACK_IMPORTED_MODULE_2__.default, {
    code: code,
    mode: language,
    onChangeTab: function onChangeTab(direction) {
      return moveSelectedTab(direction);
    },
    onChange: function onChange(c) {
      return triggerChange(selectedEntry, c);
    }
  }));
}

/***/ }),

/***/ "./src/Components/Editor/tabDirection.js":
/*!***********************************************!*\
  !*** ./src/Components/Editor/tabDirection.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  next: 0,
  previous: 1
});

/***/ }),

/***/ "./src/Components/Menu/ProjStructure.js":
/*!**********************************************!*\
  !*** ./src/Components/Menu/ProjStructure.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjStructure)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjStructure_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjStructure.scss */ "./src/Components/Menu/ProjStructure.scss");
/* harmony import */ var _PlaygroundContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PlaygroundContext */ "./src/PlaygroundContext.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Checkbox */ "./src/Components/Checkbox.js");
/* harmony import */ var _fileExtensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fileExtensions */ "./src/fileExtensions.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// from the excellent https://anuraghazra.github.io/blog/building-a-react-folder-tree-component



 // import { GoPencil } from 'react-icons/go';
// import { FaChevronRight } from 'react-icons/fa';








var getFileIcon = function getFileIcon(filename) {
  var ext = (0,path__WEBPACK_IMPORTED_MODULE_1__.extname)(filename);

  if (!ext || ext === _fileExtensions__WEBPACK_IMPORTED_MODULE_5__.js) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_di__WEBPACK_IMPORTED_MODULE_6__.DiJavascript1, null);
  }

  if (ext === _fileExtensions__WEBPACK_IMPORTED_MODULE_5__.css) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_di__WEBPACK_IMPORTED_MODULE_6__.DiCss3Full, null);
  }

  if (ext === _fileExtensions__WEBPACK_IMPORTED_MODULE_5__.html) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_di__WEBPACK_IMPORTED_MODULE_6__.DiHtml5, null);
  }

  if (ext === _fileExtensions__WEBPACK_IMPORTED_MODULE_5__.jsx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_di__WEBPACK_IMPORTED_MODULE_6__.DiReact, null);
  }

  if (ext === _fileExtensions__WEBPACK_IMPORTED_MODULE_5__.json) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscJson, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineFile, null);
};

function TreeItem(_ref) {
  var name = _ref.name,
      entries = _ref.entries;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PlaygroundContext__WEBPACK_IMPORTED_MODULE_3__.default),
      selectedEntry = _useContext.selectedEntry,
      setSelectedEntry = _useContext.setSelectedEntry;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return entries && Object.entries(entries).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          itemKey = _ref3[0],
          value = _ref3[1];

      if (typeof value === 'string') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: "fl-".concat(itemKey)
        }, selectedEntry === itemKey ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "selected",
          onClick: function onClick() {
            return setSelectedEntry(itemKey);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdLabel, null), getFileIcon(itemKey), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, itemKey)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          onClick: function onClick() {
            return setSelectedEntry(itemKey);
          }
        }, getFileIcon(itemKey), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, itemKey)));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TreeItem, {
        key: "dir-".concat(itemKey),
        name: itemKey,
        entries: value
      });
    });
  }, [entries, selectedEntry, setSelectedEntry]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return setOpen(!isOpen);
    }
  }, isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscChevronDown, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineFolderOpen, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscChevronRight, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineFolder, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: !isOpen ? 'closed' : ''
  }, items)));
}

function ProjStructure(_ref4) {
  var project = _ref4.project;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "proj-structure"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "Live refresh"
  }), project.name || 'project'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TreeItem, {
    name: 'src',
    entries: project.entries
  }));
}

/***/ }),

/***/ "./src/Components/Menu/index.js":
/*!**************************************!*\
  !*** ./src/Components/Menu/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
/* harmony import */ var _Menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.scss */ "./src/Components/Menu/Menu.scss");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _ProjStructure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjStructure */ "./src/Components/Menu/ProjStructure.js");
/* harmony import */ var _PlaygroundContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PlaygroundContext */ "./src/PlaygroundContext.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Checkbox */ "./src/Components/Checkbox.js");





 // I will implement the toggle for async | parallel processing
// eslint-disable-next-line no-unused-vars





function Menu() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PlaygroundContext__WEBPACK_IMPORTED_MODULE_4__.default),
      currentProject = _useContext.currentProject;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "side-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    id: "toggle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", {
    className: "left-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rows"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu top s-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-toggle hamburger hamburger--arrowturn is-active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "toggle",
    className: "hamburger-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    htmlFor: "toggle",
    className: "hamburger-inner"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu icons s-1-6 columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rows align-items center start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCubes, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "active",
    htmlFor: "toggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscFiles, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rows align-items center start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscRefresh, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "Live refresh"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu body active s-5-6 columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProjStructure__WEBPACK_IMPORTED_MODULE_3__.default, {
    project: currentProject
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bottom rows align-items center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu-version grow"
  }, "v.: ", _package_json__WEBPACK_IMPORTED_MODULE_1__.version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_go__WEBPACK_IMPORTED_MODULE_8__.GoMarkGithub, {
    className: "menu-icon",
    title: "Click here to check the Playground's repository",
    onClick: function onClick() {
      window.open('https://github.com/marcelo-ferraz/react-webpack-playground');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillLinkedin, {
    className: "menu-icon",
    title: "Click here to check my linkedIn profile",
    onClick: function onClick() {
      window.open('https://www.linkedin.com/in/marceloferraz/');
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "toggle",
    className: "overlay"
  }));
}

/***/ }),

/***/ "./src/Components/Playground/index.js":
/*!********************************************!*\
  !*** ./src/Components/Playground/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Editor */ "./src/Components/Editor/index.js");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Display */ "./src/Components/Display/index.js");
/* harmony import */ var _contextReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contextReducer */ "./src/contextReducer.js");
/* harmony import */ var _transpiling_webpackInvoker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../transpiling/webpackInvoker */ "./src/transpiling/webpackInvoker.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Menu */ "./src/Components/Menu/index.js");
/* harmony import */ var _PlaygroundContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../PlaygroundContext */ "./src/PlaygroundContext.js");
/* harmony import */ var _Playground_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Playground.scss */ "./src/Components/Playground/Playground.scss");
/* harmony import */ var _transpiling_use4DynamicEsModules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../transpiling/use4DynamicEsModules */ "./src/transpiling/use4DynamicEsModules.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var defaultEntryPath = "".concat(_transpiling_webpackInvoker__WEBPACK_IMPORTED_MODULE_5__.defaultEntryPath, ".js");
var defaultState = {
  entries: _defineProperty({}, defaultEntryPath, '')
};

var useForPlayground = function useForPlayground(entryPath) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_contextReducer__WEBPACK_IMPORTED_MODULE_4__.default, defaultState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      lilProj = _useReducer2[0],
      dispatch = _useReducer2[1];

  var parser = (0,_transpiling_use4DynamicEsModules__WEBPACK_IMPORTED_MODULE_9__.default)(lilProj, entryPath);
  var actions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      saveEntry: function saveEntry(key, value) {
        dispatch({
          type: 'save-entry',
          payload: _defineProperty({}, key, value)
        });
      },
      renameEntry: function renameEntry(oldKey, newKey) {
        dispatch({
          type: 'rename-entry',
          payload: {
            oldKey: oldKey,
            newKey: newKey
          }
        });
      },
      setSelectedEntry: function setSelectedEntry(entry) {
        dispatch({
          type: 'set-selected-entry',
          payload: {
            entry: entry
          }
        });
      },
      saveProject: function saveProject(project) {
        dispatch({
          type: 'save-project',
          payload: project
        });
      }
    };
  }, []);
  return [actions, lilProj, parser];
};

function Playground(_ref) {
  var lilProject = _ref.lilProject,
      _ref$entryPath = _ref.entryPath,
      entryPath = _ref$entryPath === void 0 ? defaultEntryPath : _ref$entryPath;

  var _useForPlayground = useForPlayground(entryPath),
      _useForPlayground2 = _slicedToArray(_useForPlayground, 3),
      actions = _useForPlayground2[0],
      lilProj = _useForPlayground2[1],
      parser = _useForPlayground2[2];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (lilProject) {
      actions.saveProject(lilProject);
      actions.setSelectedEntry(entryPath);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [entryPath, lilProject]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "playground rows"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PlaygroundContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {
    value: {
      currentProject: lilProj,
      selectedEntry: lilProj.selectedEntry,
      setSelectedEntry: actions.setSelectedEntry
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "side-menu-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Menu__WEBPACK_IMPORTED_MODULE_6__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "display-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Display__WEBPACK_IMPORTED_MODULE_3__.default, {
    status: parser.status,
    component: parser.component,
    error: parser.error,
    onForceRefresh: parser.forceRefresh
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "s-1 s-sm-1-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Editor__WEBPACK_IMPORTED_MODULE_2__.default, {
    project: lilProj,
    onRename: actions.renameEntry,
    onChange: actions.saveEntry
  }))));
}

/***/ }),

/***/ "./src/PlaygroundContext.js":
/*!**********************************!*\
  !*** ./src/PlaygroundContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  currentProject: {},
  setCurrentEntry: function setCurrentEntry() {}
}));

/***/ }),

/***/ "./src/contextReducer.js":
/*!*******************************!*\
  !*** ./src/contextReducer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contextReducer)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function contextReducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case 'save-project':
      return payload;

    case 'rename-entry':
      {
        var oldKey = payload.oldKey,
            newKey = payload.newKey;
        var value = state.entries[oldKey];
        delete state.entries[oldKey];
        return _objectSpread(_objectSpread({}, state), {}, {
          entries: _objectSpread(_objectSpread({}, state.entries), {}, _defineProperty({}, newKey, value))
        });
      }

    case 'save-entry':
      return _objectSpread(_objectSpread({}, state), {}, {
        entries: _objectSpread(_objectSpread({}, state.entries), payload)
      });

    case 'set-selected-entry':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          selectedEntry: payload.entry
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "contextReducer": () => (/* reexport safe */ _contextReducer__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Editor": () => (/* reexport safe */ _Components_Editor__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Display": () => (/* reexport safe */ _Components_Display__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _Components_Playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Playground */ "./src/Components/Playground/index.js");
/* harmony import */ var _contextReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contextReducer */ "./src/contextReducer.js");
/* harmony import */ var _Components_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Editor */ "./src/Components/Editor/index.js");
/* harmony import */ var _Components_Display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Display */ "./src/Components/Display/index.js");
/* harmony import */ var _demo_sampleReactProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demo/sampleReactProject */ "./demo/sampleReactProject.js");
/* harmony import */ var _simple_grid_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-grid.scss */ "./src/simple-grid.scss");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Components_Playground__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./src/transpiling/errors/MissingModuleError.js":
/*!******************************************************!*\
  !*** ./src/transpiling/errors/MissingModuleError.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MissingModuleError)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MissingModuleError = /*#__PURE__*/function (_TypeError) {
  _inherits(MissingModuleError, _TypeError);

  var _super = _createSuper(MissingModuleError);

  function MissingModuleError(path, innerError) {
    var _this;

    _classCallCheck(this, MissingModuleError);

    _this = _super.call(this, "Couldn't find a module for ".concat(path));
    _this.innerError = innerError;
    return _this;
  }

  return MissingModuleError;
}( /*#__PURE__*/_wrapNativeSuper(TypeError));



/***/ }),

/***/ "./src/transpiling/renderMode.js":
/*!***************************************!*\
  !*** ./src/transpiling/renderMode.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var renderMode = {
  parallel: 0,
  inline: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMode);

/***/ }),

/***/ "./src/transpiling/stage.js":
/*!**********************************!*\
  !*** ./src/transpiling/stage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-bitwise */
var stage = {
  none: 0,
  rendering: 1,
  invoking: 1 << 1,
  invoked: 1 << 2,
  notInvoked: 1 << 3,
  finished: 1 << 4,
  error: 1 << 5,
  has: function has(bit, flags) {
    return (flags & bit) === bit;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stage);

/***/ }),

/***/ "./src/transpiling/use4DynamicEsModules.js":
/*!*************************************************!*\
  !*** ./src/transpiling/use4DynamicEsModules.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ use4DynamicEsModules)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/transpiling/helpers.js");
/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage */ "./src/transpiling/stage.js");
/* harmony import */ var _renderMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderMode */ "./src/transpiling/renderMode.js");
/* harmony import */ var _webpackInvoker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webpackInvoker */ "./src/transpiling/webpackInvoker.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function use4DynamicEsModules(context, defaultEntry)
/*inline*/
{
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _renderMode__WEBPACK_IMPORTED_MODULE_3__.default.parallel;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_stage__WEBPACK_IMPORTED_MODULE_2__.default.none),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var invokedComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var webpackRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return mode === _renderMode__WEBPACK_IMPORTED_MODULE_3__.default.parallel ? _webpackInvoker__WEBPACK_IMPORTED_MODULE_4__.renderElsewhere : _webpackInvoker__WEBPACK_IMPORTED_MODULE_4__.renderHere;
  }, [mode]);
  var render = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(project) {
        var entryPath,
            finder,
            _finder,
            _finder2,
            entry,
            phase,
            ctx,
            _jsInvoke,
            exports,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                entryPath = _args.length > 1 && _args[1] !== undefined ? _args[1] : _webpackInvoker__WEBPACK_IMPORTED_MODULE_4__.defaultEntryPath;
                finder = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.pathFinder)(project.entries);
                _finder = finder(entryPath), _finder2 = _slicedToArray(_finder, 2), entry = _finder2[1];

                if (entry) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                phase = _stage__WEBPACK_IMPORTED_MODULE_2__.default.rendering;
                _context.prev = 6;
                setError(null);
                setStatus(phase);
                _context.next = 11;
                return webpackRender(project, entryPath, finder);

              case 11:
                ctx = _context.sent;

                if (ctx) {
                  _context.next = 16;
                  break;
                }

                setStatus(_stage__WEBPACK_IMPORTED_MODULE_2__.default.notInvoked | _stage__WEBPACK_IMPORTED_MODULE_2__.default.finished);
                invokedComponent.current = null;
                return _context.abrupt("return");

              case 16:
                setStatus(phase = _stage__WEBPACK_IMPORTED_MODULE_2__.default.invoking);
                _jsInvoke = (0,_webpackInvoker__WEBPACK_IMPORTED_MODULE_4__.jsInvoke)(ctx), exports = _jsInvoke.exports;
                invokedComponent.current = exports["default"];
                setStatus(_stage__WEBPACK_IMPORTED_MODULE_2__.default.invoked | _stage__WEBPACK_IMPORTED_MODULE_2__.default.finished);
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](6);
                setError(_context.t0);
                setStatus(phase | _stage__WEBPACK_IMPORTED_MODULE_2__.default.error);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 22]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), 250);
  }, [webpackRender]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (context) {
      render(context, defaultEntry);
    }
  }, [context, defaultEntry, render]);

  var forceRefresh = function forceRefresh() {
    if (!_stage__WEBPACK_IMPORTED_MODULE_2__.default.has(_stage__WEBPACK_IMPORTED_MODULE_2__.default.rendering, status)) {
      render(context, defaultEntry);
    }
  };

  return {
    canInvoke: _stage__WEBPACK_IMPORTED_MODULE_2__.default.has(_stage__WEBPACK_IMPORTED_MODULE_2__.default.invoked, status),
    component: invokedComponent.current || null,
    forceRefresh: forceRefresh,
    status: status,
    error: error
  };
}

/***/ }),

/***/ "./src/transpiling/webpackInvoker.js":
/*!*******************************************!*\
  !*** ./src/transpiling/webpackInvoker.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHere": () => (/* binding */ renderHere),
/* harmony export */   "renderElsewhere": () => (/* binding */ renderElsewhere),
/* harmony export */   "jsInvoke": () => (/* binding */ jsInvoke),
/* harmony export */   "defaultEntryPath": () => (/* binding */ defaultEntryPath)
/* harmony export */ });
/* harmony import */ var _fileExtensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fileExtensions */ "./src/fileExtensions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/transpiling/helpers.js");
/* harmony import */ var _errors_MissingModuleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/MissingModuleError */ "./src/transpiling/errors/MissingModuleError.js");
/* harmony import */ var _parseNShake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseNShake */ "./src/transpiling/parseNShake.js");
/* harmony import */ var _workers_parserWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workers/parserWorker */ "./src/workers/parserWorker.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






 // eslint-disable-next-line no-undef

var customRequireImpl = function customRequireImpl() {
  var use = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__;
  var dependencies = arguments.length > 1 ? arguments[1] : undefined;
  var path = arguments.length > 2 ? arguments[2] : undefined;
  var fullPath = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.tryResolve)(dependencies, path);

  if (fullPath) {
    var dependency = dependencies[fullPath];

    if (dependency.__esModule) {
      return dependency;
    }

    var invoked = jsInvoke(dependency);
    return invoked.exports || invoked;
  }

  fullPath = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.tryResolve)(use.m, path);

  if (fullPath) {
    return use(fullPath);
  }

  try {
    return use(path);
  } catch (error) {
    throw new _errors_MissingModuleError__WEBPACK_IMPORTED_MODULE_2__.default(path, error);
  }
};

var loadAllExtraDependencies = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var getExtraDependencies, dependencies, dependencyValues, dependencyKeys;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getExtraDependencies = _ref.getExtraDependencies;

            if (getExtraDependencies) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {});

          case 3:
            dependencies = getExtraDependencies();
            dependencyValues = Promise.all(Object.values(dependencies));
            dependencyKeys = Object.keys(dependencies);
            _context.next = 8;
            return dependencyValues;

          case 8:
            return _context.abrupt("return", _context.sent.reduce(function (deps, depValue, i) {
              return _objectSpread(_objectSpread({}, deps), {}, _defineProperty({}, dependencyKeys[i], depValue));
            }, {}));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadAllExtraDependencies(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var parserWorker;
var defaultEntryPath = './App';

var getParserWorker = function getParserWorker() {
  if (!parserWorker) {
    if (!window.Worker) {
      throw new Error('The browser doesnt support web workers');
    }

    parserWorker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(0), __webpack_require__.b));
  }

  return parserWorker;
};

function renderHere(_x2, _x3, _x4) {
  return _renderHere.apply(this, arguments);
}

function _renderHere() {
  _renderHere = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(strategy, entryPath, finder) {
    var jsFinder, es5Entries;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            jsFinder = finder || (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.pathFinder)(strategy.entries);
            es5Entries = (0,_parseNShake__WEBPACK_IMPORTED_MODULE_3__.default)(jsFinder, entryPath || defaultEntryPath);
            _context2.next = 4;
            return renderImpl(es5Entries, entryPath, strategy);

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _renderHere.apply(this, arguments);
}

function renderElsewhere(_x5) {
  return _renderElsewhere.apply(this, arguments);
}

function _renderElsewhere() {
  _renderElsewhere = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(strategy) {
    var entryPath,
        worker,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            entryPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : defaultEntryPath;
            worker = getParserWorker();
            worker.postMessage([strategy.entries, entryPath]);
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              worker.onmessage = /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
                  var data;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          data = _ref3.data;

                          if (data.error) {
                            reject(data.error);
                          }

                          if (!data.es5Entries) {
                            _context3.next = 15;
                            break;
                          }

                          debugger;
                          _context3.prev = 4;
                          _context3.t0 = resolve;
                          _context3.next = 8;
                          return renderImpl(data.es5Entries, entryPath, strategy);

                        case 8:
                          _context3.t1 = _context3.sent;
                          (0, _context3.t0)(_context3.t1);
                          _context3.next = 15;
                          break;

                        case 12:
                          _context3.prev = 12;
                          _context3.t2 = _context3["catch"](4);
                          reject(_context3.t2);

                        case 15:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[4, 12]]);
                }));

                return function (_x9) {
                  return _ref4.apply(this, arguments);
                };
              }();
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _renderElsewhere.apply(this, arguments);
}

function jsInvoke(context) {
  if (context.func) {
    if (context.events && context.events.beforeInvoke) {
      context.events.beforeInvoke(context);
    }

    context.func(context.unit, context.unit.exports, __webpack_require__);

    if (context.events && context.events.afterInvoke) {
      context.events.afterInvoke(context);
    }
  }

  return context.unit;
}

function renderImpl(_x6, _x7, _x8) {
  return _renderImpl.apply(this, arguments);
}

function _renderImpl() {
  _renderImpl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(entries, entryPath, strategy) {
    var dynamicContext, dependencies, __customRequire, extraDependencies, _i, _Object$entries, _Object$entries$_i, path, entry, _entry, code, ext, unit, func, ctx, id;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            __customRequire = function _customRequire(req, path) {
              return customRequireImpl(req, dependencies, path);
            };

            dynamicContext = null;
            dependencies = {}; // this custom require is the entry point to the module system compiled in dev mode
            // eslint-disable-next-line no-unused-vars, no-underscore-dangle

            _context5.next = 5;
            return loadAllExtraDependencies(strategy);

          case 5:
            _context5.t0 = _context5.sent;

            if (_context5.t0) {
              _context5.next = 8;
              break;
            }

            _context5.t0 = {};

          case 8:
            extraDependencies = _context5.t0;

            if (strategy.beforeRender) {
              extraDependencies = strategy.beforeRender(strategy, extraDependencies);
            }

            dependencies = _objectSpread(_objectSpread({}, dependencies), extraDependencies);
            _i = 0, _Object$entries = Object.entries(entries);

          case 12:
            if (!(_i < _Object$entries.length)) {
              _context5.next = 34;
              break;
            }

            _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), path = _Object$entries$_i[0], entry = _Object$entries$_i[1];
            _entry = _slicedToArray(entry, 2), code = _entry[0], ext = _entry[1];
            unit = {
              i: "dynamic:".concat(path),
              l: false,
              exports: {}
            };
            debugger;

            if (code) {
              _context5.next = 19;
              break;
            }

            return _context5.abrupt("continue", 31);

          case 19:
            _context5.t1 = ext;
            _context5.next = _context5.t1 === '' ? 22 : _context5.t1 === _fileExtensions__WEBPACK_IMPORTED_MODULE_0__.js ? 22 : _context5.t1 === _fileExtensions__WEBPACK_IMPORTED_MODULE_0__.jsx ? 22 : _context5.t1 === _fileExtensions__WEBPACK_IMPORTED_MODULE_0__.json ? 28 : 31;
            break;

          case 22:
            // eslint-disable-next-line no-eval
            func = eval(code);
            ctx = {
              func: func,
              unit: unit,
              customRequire: __customRequire
            };

            if (path === entryPath) {
              dynamicContext = ctx;
            }

            id = path.endsWith(ext) ? path.substring(0, path.length - ext.length) : path;
            dependencies[id] = ctx;
            return _context5.abrupt("break", 31);

          case 28:
            unit.exports = code;
            dependencies[path] = {
              unit: unit
            };
            return _context5.abrupt("break", 31);

          case 31:
            _i++;
            _context5.next = 12;
            break;

          case 34:
            if (!(dynamicContext && dynamicContext.func)) {
              _context5.next = 39;
              break;
            }

            dynamicContext.customRequire = function (path) {
              return customRequireImpl(__webpack_require__, dependencies, path);
            };

            dynamicContext.addDependencies = function (key, value) {
              dependencies = _objectSpread(_objectSpread({}, dependencies), {}, _defineProperty({}, key, value));
            };

            dynamicContext.events = {
              beforeRender: strategy.beforeRender,
              beforeInvoke: strategy.beforeInvoke,
              afterInvoke: strategy.afterInvoke
            };
            return _context5.abrupt("return", dynamicContext);

          case 39:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _renderImpl.apply(this, arguments);
}



/***/ }),

/***/ "./src/Components/Display/ErrorsExplained.scss":
/*!*****************************************************!*\
  !*** ./src/Components/Display/ErrorsExplained.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Components/Display/display.scss":
/*!*********************************************!*\
  !*** ./src/Components/Display/display.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Components/Editor/editor.scss":
/*!*******************************************!*\
  !*** ./src/Components/Editor/editor.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Components/Menu/Menu.scss":
/*!***************************************!*\
  !*** ./src/Components/Menu/Menu.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Components/Menu/ProjStructure.scss":
/*!************************************************!*\
  !*** ./src/Components/Menu/ProjStructure.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Components/Playground/Playground.scss":
/*!***************************************************!*\
  !*** ./src/Components/Playground/Playground.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/simple-grid.scss":
/*!******************************!*\
  !*** ./src/simple-grid.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"react-webpack-playground","version":"1.0.0-alpha.53","description":"A playground","main":"index.js","module":"src/index.js","files":["dist/**/*"],"repository":{"type":"git","url":"https://github.com/marcelo-ferraz/react-webpack-playground"},"scripts":{"lint":"eslint ./src","lint:fix":"eslint --fix ./src","test":"jest","test:ci":"jest --ci --json --silent --outputFile=test-report.json --testResultsProcessor=\\"jest-junit\\"  --forceExit","test:watch":"jest --watch","test:coverage":"jest --coverage --colors","build":"webpack --config ./config/webpack.lib.config.js --mode development","build:release":"webpack --config ./config/webpack.lib.config.js --mode production","build:watch":"webpack --config ./config/webpack.lib.config.js --mode development --watch","build:demo":"webpack --config ./config/webpack.demo.config.js --mode development","start":"webpack serve --config ./config/webpack.demo.config.js --mode development --progress","up:version":"node ./writeVersion.js"},"author":"marcelo-ferraz <marcelosfm@gmail.com> (https://github.com/marcelo-ferraz/)","license":"ISC","dependencies":{"ace-builds":"^1.4.12","hamburgers":"^1.1.3","lodash":"^4.17.21","path-browserify":"^1.0.1","react":"^16.14.0","react-ace":"^9.4.0","react-dom":"^16.14.0","react-icons":"^4.2.0","regenerator-runtime":"^0.13.7"},"devDependencies":{"@babel/cli":"^7.14.3","@babel/core":"^7.14.3","@babel/preset-env":"^7.14.4","@babel/preset-react":"^7.13.13","@babel/standalone":"^7.14.4","@testing-library/dom":"^7.31.0","@testing-library/jest-dom":"^5.12.0","@testing-library/react":"^11.2.7","@testing-library/react-hooks":"^7.0.0","@testing-library/user-event":"^13.1.9","@types/jest":"^26.0.23","@wasm-tool/wasm-pack-plugin":"^1.4.0","babel-eslint":"^10.1.0","babel-jest":"^27.0.2","babel-loader":"^8.2.2","babel-plugin-lodash":"^3.3.4","copy-webpack-plugin":"^9.0.0","core-js":"^3.13.1","css-loader":"^5.2.6","eslint":"^7.27.0","eslint-config-prettier":"^8.3.0","eslint-plugin-jest":"^24.3.6","eslint-plugin-prettier":"^3.4.0","eslint-plugin-react":"^7.24.0","eslint-plugin-react-hooks":"^4.2.0","file-loader":"^6.2.0","html-loader":"^2.1.2","html-webpack-plugin":"^5.3.1","husky":"^4.3.0","jest":"^27.0.3","jest-css-modules":"^2.1.0","jest-in-case":"^1.0.2","jest-junit":"^12.1.0","lodash-webpack-plugin":"^0.11.6","mini-css-extract-plugin":"^2.2.0","prettier":"^2.3.0","prettier-eslint":"^12.0.0","sass":"^1.35.1","sass-loader":"^11.1.1","style-loader":"^2.0.0","webpack":"^5.38.1","webpack-bundle-analyzer":"^4.4.2","webpack-cli":"^4.7.0","webpack-dev-server":"^3.11.2"},"husky":{"hooks":{"pre-commit":"npm run up:version && git add ./package.json"}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["static/js/[name].chunk.js"], () => (__webpack_exec__("./demo/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map