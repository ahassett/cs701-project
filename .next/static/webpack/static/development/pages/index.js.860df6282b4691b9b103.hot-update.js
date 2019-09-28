webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/*! exports provided: mergeRefs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 */

function useMergedRefs(refA, refB) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ __webpack_exports__["default"] = (useMergedRefs);

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/all.js":
/*!**************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/all.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-bootstrap/AbstractNav.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/AbstractNav.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js"));

var _useMergedRefs = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/SelectableContext.js"));

var _NavContext = _interopRequireDefault(__webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/NavContext.js"));

var _TabContext = _interopRequireDefault(__webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/TabContext.js"));

var noop = function noop() {};

var defaultProps = {
  role: 'tablist'
};

var AbstractNav = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'ul' : _ref$as,
      onSelect = _ref.onSelect,
      activeKey = _ref.activeKey,
      role = _ref.role,
      onKeyDown = _ref.onKeyDown,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "onSelect", "activeKey", "role", "onKeyDown"]);
  var parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
  var tabContext = (0, _react.useContext)(_TabContext.default);
  var getControlledId, getControllerId;

  if (tabContext) {
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  var _useState = (0, _react.useState)(false),
      needsRefocus = _useState[0],
      setRefocus = _useState[1];

  var listNode = (0, _react.useRef)(null);

  var getNextActiveChild = function getNextActiveChild(offset) {
    if (!listNode.current) return null;
    var items = (0, _querySelectorAll.default)(listNode.current, '[data-rb-event-key]:not(.disabled)');
    var activeChild = listNode.current.querySelector('.active');
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  var handleSelect = function handleSelect(key, event) {
    if (key == null) return;
    if (onSelect) onSelect(key, event);
    if (parentOnSelect) parentOnSelect(key, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (onKeyDown) onKeyDown(event);
    var nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveChild(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveChild(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset.rbEventKey, event);
    setRefocus(true);
  };

  (0, _react.useEffect)(function () {
    if (listNode.current && needsRefocus) {
      var activeChild = listNode.current.querySelector('[data-rb-event-key].active');
      if (activeChild) activeChild.focus();
    }
  }, [listNode, needsRefocus]);
  var mergedRef = (0, _useMergedRefs.default)(ref, listNode);
  return _react.default.createElement(_SelectableContext.default.Provider, {
    value: handleSelect
  }, _react.default.createElement(_NavContext.default.Provider, {
    value: {
      role: role,
      // used by NavLink to determine it's role
      activeKey: (0, _SelectableContext.makeEventKey)(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef
  }))));
});

AbstractNav.defaultProps = defaultProps;
var _default = AbstractNav;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/AbstractNavItem.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/AbstractNavItem.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js"));

var _NavContext = _interopRequireDefault(__webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/NavContext.js"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/SelectableContext.js"));

var defaultProps = {
  disabled: false
};

var AbstractNavItem = _react.default.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["active", "className", "tabIndex", "eventKey", "onSelect", "onClick", "as"]);
  var navKey = (0, _SelectableContext.makeEventKey)(eventKey, props.href);
  var parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
  var navContext = (0, _react.useContext)(_NavContext.default);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    props['data-rb-event-key'] = navKey;
    props.id = navContext.getControllerId(navKey);
    props['aria-controls'] = navContext.getControlledId(navKey);
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    props.tabIndex = isActive ? tabIndex : -1;
    props['aria-selected'] = isActive;
  }

  var handleOnclick = (0, _useEventCallback.default)(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: (0, _classnames.default)(className, isActive && 'active')
  }));
});

AbstractNavItem.defaultProps = defaultProps;
var _default = AbstractNavItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/CardContext.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/CardContext.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _default = _react.default.createContext(null);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/Nav.js":
/*!*********************************************!*\
  !*** ./node_modules/react-bootstrap/Nav.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _all = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/all */ "./node_modules/prop-types-extra/lib/all.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/ThemeProvider.js");

var _NavbarContext = _interopRequireDefault(__webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/NavbarContext.js"));

var _CardContext = _interopRequireDefault(__webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/CardContext.js"));

var _AbstractNav = _interopRequireDefault(__webpack_require__(/*! ./AbstractNav */ "./node_modules/react-bootstrap/AbstractNav.js"));

var _NavItem = _interopRequireDefault(__webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/NavItem.js"));

var _NavLink = _interopRequireDefault(__webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/NavLink.js"));

var defaultProps = {
  justify: false,
  fill: false
};

var Nav = _react.default.forwardRef(function (uncontrolledProps, ref) {
  var _classNames;

  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      bsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      fill = _useUncontrolled.fill,
      justify = _useUncontrolled.justify,
      navbar = _useUncontrolled.navbar,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      activeKey = _useUncontrolled.activeKey,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav');
  var navbarBsPrefix, cardHeaderBsPrefix;
  var navbarContext = (0, _react.useContext)(_NavbarContext.default);
  var cardContext = (0, _react.useContext)(_CardContext.default);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    navbar = navbar == null ? true : navbar;
  } else if (cardContext) {
    cardHeaderBsPrefix = cardContext.cardHeaderBsPrefix;
  }

  return _react.default.createElement(_AbstractNav.default, (0, _extends2.default)({
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: (0, _classnames.default)(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
  }, props), children);
});

Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
Nav.Item = _NavItem.default;
Nav.Link = _NavLink.default;
var _default = Nav;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/NavItem.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/NavItem.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/ThemeProvider.js");

var NavItem = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-item');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children);
});

NavItem.displayName = 'NavItem';
var _default = NavItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/NavLink.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/NavLink.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/SafeAnchor.js"));

var _AbstractNavItem = _interopRequireDefault(__webpack_require__(/*! ./AbstractNavItem */ "./node_modules/react-bootstrap/AbstractNavItem.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/ThemeProvider.js");

var defaultProps = {
  disabled: false,
  as: _SafeAnchor.default
};

var NavLink = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-link');
  return _react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: (0, _classnames.default)(className, bsPrefix, disabled && 'disabled')
  }));
});

NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
var _default = NavLink;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/TabContext.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/TabContext.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var TabContext = _react.default.createContext(null);

var _default = TabContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\ahass\\cs701-project\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// make sure you install react-bootstrap! use npm install react-bootstrap bootstrap






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Schedule Planner"), __jsx("link", {
    href: "/static/style.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("p", {
    className: "welcomeback",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Welcome Back!"), __jsx("div", {
    className: "schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "outline-dark",
    className: "button",
    style: {
      'margin-left': '455px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "New Schedule")), __jsx("div", {
    className: "catelog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "success",
    id: "dropdown-basic",
    style: {
      'position': 'fixed',
      'top': '90px',
      'margin-left': '555px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Select Semester"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    href: "#/action-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Action"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    href: "#/action-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Another action"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Something else"))), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "tabs",
    defaultActiveKey: "/home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
    href: "/home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Active")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
    eventKey: "link-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Option 2")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
    eventKey: "disabled",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Disabled")))));
});
/*

const Index = () => (
  <div>
  <h1 className='welcomeback'>Welcome back!</h1>
    <div className='schedule'>
    </div>
    <div className='catelog'>
    </div>
  </div>
);
*/
// create couple devs that create the foundation for the home website
// plan for first week: centralize the catalog and the schedule planner
//                      establish connection between backend and frontend
// second week: start working on HTML and CSS, and other components that make up the design of the website
// export default Index;

/***/ })

})
//# sourceMappingURL=index.js.860df6282b4691b9b103.hot-update.js.map