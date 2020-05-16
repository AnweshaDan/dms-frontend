webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SubmitButton */ \"./components/SubmitButton.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/anwesha/Desktop/DMS3/components/LoginForm.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar useStyles = function useStyles(theme) {\n  return {\n    root: {\n      '& > *': {\n        margin: theme.spacing(1),\n        width: '25ch'\n      }\n    }\n  };\n};\n\nvar LoginForm = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(LoginForm, _React$Component);\n\n  var _super = _createSuper(LoginForm);\n\n  function LoginForm(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, LoginForm);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      username: \"\",\n      password: \"\"\n    };\n    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(LoginForm, [{\n    key: \"handleChange\",\n    value: function handleChange(evt) {\n      var value = evt.target.value;\n      this.setState(_objectSpread(_objectSpread({}, this.state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, evt.target.name, value)));\n      console.log(this.state.username);\n      console.log(this.state.password);\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      //LATERRRRR\n      alert('A name was submitted: ' + this.state.value);\n      event.preventDefault();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return (//LATERR\n        __jsx(\"form\", {\n          className: classes.root,\n          noValidate: true,\n          autoComplete: \"off\",\n          onSubmit: this.handleSubmit,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 7\n          }\n        }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          id: \"standard-basic\",\n          label: \"Standard\",\n          value: this.state.username,\n          onChange: this.handleChange,\n          name: \"username\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 9\n          }\n        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          id: \"standard-password-input\",\n          label: \"Password\",\n          type: \"password\",\n          name: \"password\",\n          value: this.state.password,\n          onChange: this.handleChange,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 9\n          }\n        }), \"Link\", __jsx(_SubmitButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }\n        }))\n      );\n    }\n  }]);\n\n  return LoginForm;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"withStyles\"])(useStyles)(LoginForm));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz8wMzQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsIkxvZ2luRm9ybSIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiYWxlcnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRTtBQUNBO0FBQ0E7QUFDRjs7QUFFRSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM1QkMsUUFBSSxFQUFFO0FBQ0osZUFBUztBQUNQQyxjQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQQyxhQUFLLEVBQUU7QUFGQTtBQURMO0FBRHNCLEdBQVo7QUFBQSxDQUFsQjs7SUFTTUMsUzs7Ozs7QUFDRixxQkFBWUMsS0FBWixFQUNBO0FBQUE7O0FBQUE7O0FBQ0ksOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVc7QUFDUEMsY0FBUSxFQUFDLEVBREY7QUFFUEMsY0FBUSxFQUFDO0FBRkYsS0FBWDtBQUlBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBRUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQix5R0FBcEI7QUFSSjtBQVNDOzs7O2lDQUVhRSxHLEVBQUs7QUFDakIsVUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0QsS0FBekI7QUFDQSxXQUFLRSxRQUFMLGlDQUNLLEtBQUtULEtBRFYscUdBRUdNLEdBQUcsQ0FBQ0UsTUFBSixDQUFXRSxJQUZkLEVBRXFCSCxLQUZyQjtBQUlBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWixLQUFMLENBQVdDLFFBQXZCO0FBQ0FVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtaLEtBQUwsQ0FBV0UsUUFBdkI7QUFHRDs7O2lDQUlZVyxLLEVBQU87QUFBQztBQUNuQkMsV0FBSyxDQUFDLDJCQUEyQixLQUFLZCxLQUFMLENBQVdPLEtBQXZDLENBQUw7QUFDQU0sV0FBSyxDQUFDRSxjQUFOO0FBQ0Q7Ozs2QkFLSztBQUFBLFVBR0RDLE9BSEMsR0FHVSxLQUFLakIsS0FIZixDQUdEaUIsT0FIQztBQUtSLGFBQVE7QUFDTjtBQUFNLG1CQUFTLEVBQUVBLE9BQU8sQ0FBQ3RCLElBQXpCO0FBQStCLG9CQUFVLE1BQXpDO0FBQTBDLHNCQUFZLEVBQUMsS0FBdkQ7QUFBNkQsa0JBQVEsRUFBRSxLQUFLVyxZQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxtRUFBRDtBQUFXLFlBQUUsRUFBQyxnQkFBZDtBQUNBLGVBQUssRUFBQyxVQUROO0FBRUEsZUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0MsUUFGbEI7QUFHQSxrQkFBUSxFQUFFLEtBQUtFLFlBSGY7QUFJQSxjQUFJLEVBQUMsVUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsRUFNRSxNQUFDLG1FQUFEO0FBQ0ksWUFBRSxFQUFDLHlCQURQO0FBRUksZUFBSyxFQUFDLFVBRlY7QUFHSSxjQUFJLEVBQUMsVUFIVDtBQUlJLGNBQUksRUFBQyxVQUpUO0FBS0ksZUFBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsUUFMdEI7QUFNSSxrQkFBUSxFQUFFLEtBQUtDLFlBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFORixVQWVRLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWZSO0FBREY7QUFvQkc7Ozs7RUE1RG1CYyw0Q0FBSyxDQUFDQyxTOztBQThEZkMsMElBQVUsQ0FBQzNCLFNBQUQsQ0FBVixDQUFzQk0sU0FBdEIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4gIGltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuICBpbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gJy4vU3VibWl0QnV0dG9uJztcbiAgXG4gIGNvbnN0IHVzZVN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAnJiA+IConOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgd2lkdGg6ICcyNWNoJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIFxuICBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgY29uc3RydWN0b3IocHJvcHMpXG4gICAgICB7XG4gICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgICB1c2VybmFtZTpcIlwiLFxuICAgICAgICAgICAgICBwYXNzd29yZDpcIlwiXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICB9XG5cbiAgICAgICBoYW5kbGVDaGFuZ2UoZXZ0KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICBbZXZ0LnRhcmdldC5uYW1lXTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICB9XG4gICAgIFxuICAgICAgXG4gICAgXG4gICAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHsvL0xBVEVSUlJSUlxuICAgICAgICBhbGVydCgnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpe1xuICBcbiAgICAgIFxuICAgIGNvbnN0IHtjbGFzc2VzfSA9IHRoaXMucHJvcHM7XG4gIFxuICAgIHJldHVybiAoLy9MQVRFUlJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxUZXh0RmllbGQgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiIFxuICAgICAgICBsYWJlbD1cIlN0YW5kYXJkXCIgXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgbmFtZT1cInVzZXJuYW1lXCIvPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBpZD1cInN0YW5kYXJkLXBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgIFxuICAgICAgICAgIC8+XG4gICAgICAgICAgTGluazxTdWJtaXRCdXR0b24vPlxuICAgICAgICAgIFxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gICAgICB9XG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyh1c2VTdHlsZXMpKExvZ2luRm9ybSlcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ })

})