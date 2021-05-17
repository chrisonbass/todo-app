(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseJSX = _interopRequireDefault(require("../parseJSX"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return (0, _parseJSX["default"])("button", props, children);
};

var _default = Button;
exports["default"] = _default;

},{"../parseJSX":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseJSX = _interopRequireDefault(require("../parseJSX"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EmptyListItem = function EmptyListItem(_ref) {
  var children = _ref.children;
  return (0, _parseJSX["default"])("li", {
    className: "empty-list"
  }, (0, _parseJSX["default"])("span", null, children && children.length ? children : "Nothing to do"));
};

var _default = EmptyListItem;
exports["default"] = _default;

},{"../parseJSX":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseJSX = _interopRequireDefault(require("../parseJSX"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListItem = function ListItem(_ref) {
  var text = _ref.text,
      onDelete = _ref.onDelete;
  return (0, _parseJSX["default"])("li", null, (0, _parseJSX["default"])("span", null, text), (0, _parseJSX["default"])(_Button["default"], {
    type: "button",
    className: "delete-button",
    onClick: onDelete
  }, (0, _parseJSX["default"])("span", {
    className: "icon trash"
  }), " Delete"));
};

var _default = ListItem;
exports["default"] = _default;

},{"../parseJSX":5,"./Button":1}],4:[function(require,module,exports){
"use strict";

var _parseJSX = _interopRequireDefault(require("./parseJSX"));

var _ListItem = _interopRequireDefault(require("./comps/ListItem"));

var _EmptyListItem = _interopRequireDefault(require("./comps/EmptyListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mainApp() {
  var todoForm = document.getElementById("todo-form");
  var todoList = document.getElementById("todo-list");
  var noItemsListItem = (0, _parseJSX["default"])(_EmptyListItem["default"], null);
  todoList.appendChild(noItemsListItem);
  todoForm.addEventListener("submit", function (formEvent) {
    formEvent.preventDefault();
    var entryText = formEvent.target['todo-entry'].value.trim();

    if (!entryText) {
      return;
    }

    var newEntry = (0, _parseJSX["default"])(_ListItem["default"], {
      text: entryText,
      onDelete: function onDelete(deleteEvent) {
        deleteEvent.preventDefault();
        var className = newEntry.className + " removing";
        newEntry.className = className.trim();
        setTimeout(function () {
          todoList.removeChild(newEntry);

          if (!todoList.childNodes.length) {
            todoList.appendChild(noItemsListItem);
          }
        }, 250);
      }
    });
    todoList.appendChild(newEntry);
    todoForm['todo-entry'].value = "";

    if (Array.prototype.indexOf.call(todoList.childNodes, noItemsListItem) >= 0) {
      todoList.removeChild(noItemsListItem);
    }
  });
}

mainApp();

},{"./comps/EmptyListItem":2,"./comps/ListItem":3,"./parseJSX":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (typeof type === "function") {
    return type(_objectSpread(_objectSpread({}, props), {}, {
      children: children
    }));
  }

  var parsedProps = _objectSpread({}, props);

  Object.keys(parsedProps).forEach(function (key) {
    if (key.match(/^on[A-Z]/)) {
      parsedProps[key.toLowerCase()] = parsedProps[key];
      delete parsedProps[key];
    }
  });
  var element = Object.assign(document.createElement(type), parsedProps);

  for (var _i = 0, _children = children; _i < _children.length; _i++) {
    var child = _children[_i];
    var childNode = ["string", "number"].indexOf(_typeof(child)) >= 0 ? document.createTextNode(child) : child;

    if (Array.isArray(childNode)) {
      element.append.apply(element, _toConsumableArray(childNode));
    } else {
      element.append(childNode);
    }
  }

  return element;
};

exports["default"] = _default;

},{}]},{},[4]);
