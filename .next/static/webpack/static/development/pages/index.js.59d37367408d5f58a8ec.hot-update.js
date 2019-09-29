webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Accordion */ "./node_modules/react-bootstrap/Accordion.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "C:\\Users\\ahass\\cs701-project\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
// make sure you install react-bootstrap! use npm install react-bootstrap bootstrap










var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this));
    _this.state = {
      activeTab: props.activeTab || '1',
      saved: false
    };
    _this.handleSelect = _this.handleSelect.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); // bind action handler

    _this.handleSave = _this.handleSave.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "handleSelect",
    value: function handleSelect(selectedTab) {
      // The active tab must be set into the state so that
      // the tabs component knows about the change and re-renders.
      this.setState({
        activeTab: selectedTab
      });
    }
  }, {
    key: "handleSave",
    value: function handleSave(bool) {
      this.setState({
        saved: !bool
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Schedule Planner"), __jsx("link", {
        href: "/static/style.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("p", {
        className: "welcomeback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Welcome Back!"), __jsx("div", {
        className: "schedule",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "success",
        className: "button",
        style: {
          'margin-left': '455px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "New Schedule")), __jsx("div", {
        className: "catelog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Tabs"], {
        defaultActiveKey: this.state.activeTab,
        id: "tabs",
        onSelect: this.handleSelect,
        style: {
          'marginTop': '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Tab"], {
        eventKey: "1",
        title: "Catelog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_11___default.a, {
        defaultActiveKey: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_11___default.a.Toggle, {
        as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a.Header,
        eventKey: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Class Title", __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "success",
        className: "save-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Save")), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_11___default.a.Collapse, {
        eventKey: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Class Details"))), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_11___default.a.Toggle, {
        as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a.Header,
        eventKey: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Class Title 2"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_11___default.a.Collapse, {
        eventKey: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Hello! I'm another body"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Tab"], {
        eventKey: "2",
        title: "Saved Classes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Content 2")), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "select-semester",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Toggle, {
        variant: "secondary",
        id: "dropdown-basic",
        style: {
          'position': 'fixed',
          'top': '90px',
          'marginLeft': '555px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Select Semester"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
        href: "#/action-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Action"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
        href: "#/action-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Another action"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
        href: "#/action-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Something else")))));
      console.log(this.state.saved);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Index);
/*

export default () => (
  <div>
    <Head>
      <title>Schedule Planner</title>
      <link href="/static/style.css" rel="stylesheet" />
    </Head>
    <p className="welcomeback">
      Welcome Back!
    </p>
    <div className='schedule'>
        <Button variant="outline-dark" className="button" style={{'margin-left': '455px'}}>New Schedule</Button>
    </div>
    <div className='catelog'>

        <Tabs defaultActiveKey="home" transition={true} id="noanim-tab-example" style={{'margine-top':'20px'}}>
            <Tab eventKey="home" title="Home">
                <ControlledTabs />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <ControlledTabs />
            </Tab>
        </Tabs>

        <Dropdown id='select-semester'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{'position': 'fixed', 'top': '90px', 'margin-left': '555px'}}>
                Select Semester
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">Class Title</Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">Class Title 2</Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
  </div>
)
*/

/***/ })

})
//# sourceMappingURL=index.js.59d37367408d5f58a8ec.hot-update.js.map