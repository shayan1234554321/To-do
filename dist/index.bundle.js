"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _public_trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _CRUD_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _interactions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
// --------------------------- import --------------------------






// --------------------------- Variables --------------------------

const list = document.getElementById('list');
const form = document.getElementById('form');
const deleteCompleted = document.getElementById('deleteCompleted');
const tasks = { array: [] };

// --------------------------- functions --------------------------

const addAllTasksToHTML = () => {
  list.innerHTML = '';
  for (let i = 0; i < tasks.array.length; i += 1) {
    // ------ Adding tasks according to index ------

    const task = tasks.array.find((task) => task.index === i);

    // ------ Input ------

    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;
    input.addEventListener('keyup', (e) => {
      (0,_CRUD_js__WEBPACK_IMPORTED_MODULE_3__.update)(tasks, task.index, e.target.value);
    });

    // ------ Completed line on input ------

    const span = document.createElement('span');
    if (task.completed) {
      span.className = 'completed';
      input.className = 'completedInput';
    }

    /* eslint-disable no-inner-declarations */
    function checked() {
      span.classList.toggle('completed');
      input.classList.toggle('completedInput');
    }

    // ------ checkbox ------

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', (e) => {
      (0,_interactions_js__WEBPACK_IMPORTED_MODULE_4__.handleComplete)(tasks, task.index, e.target.checked, checked);
    });

    // ------ Delete icon ------

    const img = document.createElement('img');
    img.src = _public_trash_png__WEBPACK_IMPORTED_MODULE_1__;
    img.className = 'trash';
    img.addEventListener('click', () => {
      (0,_CRUD_js__WEBPACK_IMPORTED_MODULE_3__.Delete)(tasks, task.index, addAllTasksToHTML);
    });

    // ------ appending to html ------

    const li = document.createElement('li');
    li.append(checkbox, input, span, img);
    list.appendChild(li);
  }
};

// --------------------------- event listeners --------------------------

window.addEventListener('DOMContentLoaded', () => {
  tasks.array = (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.Load)();
  addAllTasksToHTML();
});

form.addEventListener('submit', ((e) => {
  e.preventDefault();
  (0,_CRUD_js__WEBPACK_IMPORTED_MODULE_3__.create)(tasks, addAllTasksToHTML);
}));

deleteCompleted.addEventListener('click', () => {
  (0,_interactions_js__WEBPACK_IMPORTED_MODULE_4__.clearAllComplete)(tasks, addAllTasksToHTML);
});


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
  } // For old IE

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
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* width */\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  border-radius: 10px;\r\n  background: #888;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background: #f1f1f1;\r\n}\r\n\r\n:root {\r\n  --font1: 'Poppins', sans-serif;\r\n  --bg-color: #e9e9e9;\r\n  --outer-shadow: -5px -5px 10px rgba(255, 255, 255, 0.079), 5px 5px 10px rgba(0, 0, 0, 0.21);\r\n  --inner-shadow: -5px -5px 10px rgba(255, 255, 255, 0.079), 5px 5px 10px rgba(0, 0, 0, 0.21);\r\n  --border-bottom: 1px solid rgba(0, 0, 0, 0.119);\r\n}\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--bg-color);\r\n  font-family: var(--font1);\r\n}\r\n\r\n.container {\r\n  background-color: white;\r\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);\r\n  border-radius: 5px;\r\n}\r\n\r\nheader {\r\n  width: 600px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: var(--border-bottom);\r\n  padding: 20px;\r\n}\r\n\r\nheader .icon {\r\n  margin-left: auto;\r\n}\r\n\r\nform {\r\n  width: calc(100% - 40px);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n  border-bottom: var(--border-bottom);\r\n}\r\n\r\nform input {\r\n  border: none;\r\n  outline: none;\r\n  font-style: italic;\r\n  font-size: 16px;\r\n}\r\n\r\nul {\r\n  width: 100%;\r\n  max-height: 60vh;\r\n  overflow: auto;\r\n}\r\n\r\nul li {\r\n  display: flex;\r\n  align-items: center;\r\n  width: calc(100% - 30px);\r\n  padding: 15px;\r\n  border-bottom: var(--border-bottom);\r\n  position: relative;\r\n}\r\n\r\nul li input[type=text] {\r\n  border: none;\r\n  outline: none;\r\n  margin-left: 10px;\r\n  position: relative;\r\n}\r\n\r\nul li .trash {\r\n  margin-left: auto;\r\n  cursor: pointer;\r\n}\r\n\r\nul li .completed {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2px;\r\n  width: 550px;\r\n  top: calc(50% - 1px);\r\n  left: 40px;\r\n  background-color: rgba(0, 0, 0, 0.403);\r\n}\r\n\r\nul li .completedInput {\r\n  opacity: 0.5;\r\n  pointer-events: none;\r\n}\r\n\r\n.deleteBtnContainer {\r\n  width: calc(100% - 40px);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  background-color: var(--bg-color);\r\n  border-radius: 0 0 5px 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.deleteCompleted {\r\n  cursor: pointer;\r\n  border: none;\r\n  font-size: 16px;\r\n  color: rgb(119, 119, 119);\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
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
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2bb093779b50ed86db.png";

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Load": () => (/* binding */ Load),
/* harmony export */   "Save": () => (/* binding */ Save)
/* harmony export */ });
const Save = (array) => {
  localStorage.tasks = JSON.stringify(array);
  return 'saved';
};

const Load = () => JSON.parse(localStorage.tasks);

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Delete": () => (/* binding */ Delete),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


const formInput = document.getElementById('formInput');

const create = (tasks, addAllTasksToHTML) => {
  tasks.array.push({
    completed: false,
    description: formInput.value,
    index: tasks.array.length,
  });
  formInput.value = '';
  addAllTasksToHTML();
  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.Save)(tasks.array);
};

const update = (tasks, index, value) => {
  tasks.array[index].description = value;
  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.Save)(tasks.array);
};

const Delete = (tasks, taskIndex, addAllTasksToHTML) => {
  const tempTasks = [];
  let index = 0;
  for (let i = 0; i < tasks.array.length; i += 1) {
    if (i !== taskIndex) {
      tempTasks.push({ ...tasks.array[i], index });
      index += 1;
    }
  }
  tasks.array = tempTasks;
  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.Save)(tasks.array);
  addAllTasksToHTML();
};


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearAllComplete": () => (/* binding */ clearAllComplete),
/* harmony export */   "handleComplete": () => (/* binding */ handleComplete)
/* harmony export */ });
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


const handleComplete = (tasks, index, checkValue, checked) => {
  tasks.array[index].completed = checkValue;
  checked();
  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.Save)(tasks.array);
};

const clearAllComplete = (tasks, addAllTasksToHTML) => {
  const tempTasks = [];
  let index = 0;
  for (let i = 0; i < tasks.array.length; i += 1) {
    if (tasks.array[i].completed === false) {
      tempTasks.push({ ...tasks.array[i], index });
      index += 1;
    }
  }
  tasks.array = tempTasks;
  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.Save)(tasks.array);
  addAllTasksToHTML();
};



/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);