/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/main.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet/main.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#tasks {\r\n  border-left: 2px black solid;\r\n  min-height: 300px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.containers {\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 2fr;\r\n  column-gap: 2em;\r\n}\r\n\r\n#task_form {\r\n  display: none;\r\n  padding: 10px;\r\n}\r\n\r\n#task_body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 18px;\r\n  padding: 5px;\r\n}\r\n\r\n.check_box {\r\n  padding: 5px;\r\n  margin-left: 10px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/stylesheet/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;EAC5B,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#tasks {\r\n  border-left: 2px black solid;\r\n  min-height: 300px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.containers {\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 2fr;\r\n  column-gap: 2em;\r\n}\r\n\r\n#task_form {\r\n  display: none;\r\n  padding: 10px;\r\n}\r\n\r\n#task_body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 18px;\r\n  padding: 5px;\r\n}\r\n\r\n.check_box {\r\n  padding: 5px;\r\n  margin-left: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheet/main.css":
/*!*********************************!*\
  !*** ./src/stylesheet/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "addSelectedProject": () => (/* binding */ addSelectedProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* eslint-disable import/no-cycle */

/* eslint-enable import/no-cycle */

// Local storage

const addToLocalStorage = (listOfProjects) => {
  localStorage.setItem('listOfProjects', JSON.stringify(listOfProjects));
  (0,_project__WEBPACK_IMPORTED_MODULE_0__.default)();
};

// Add the selected project to local storage
const addSelectedProject = (selectedProjectId) => {
  localStorage.setItem('selectedProjectId', JSON.stringify(selectedProjectId));
  (0,_project__WEBPACK_IMPORTED_MODULE_0__.default)();
};



/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");
/* eslint-disable import/no-cycle */

/* eslint-enable import/no-cycle */

const projectInput = document.getElementById('new_project_input');
const projectForm = document.getElementById('project_form');
const projectList = document.getElementById('data-projects');
const defaultProject = document.getElementById('data-default-project');
const taskTitle = document.getElementById('task_title');
const taskCounter = document.getElementById('task_count');
const taskList = document.getElementById('task_list');
const taskDiv = document.getElementById('task_body');
const taskContainer = document.getElementById('tasks');
const taskForm = document.getElementById('task_form');
const addTaskBtn = document.getElementById('new_task_button');
const cancelTaskBtn = document.getElementById('cancel_task_button');
const taskDescription = document.getElementById('new_task_input');
const dueDate = document.getElementById('date');
const priority = document.getElementById('priority_dropdown');
const taskName = document.getElementById('task-name');

let listOfProjects = [];

let selectedProjectId;

// The default project is active when clicked
defaultProject.addEventListener('click', (e) => {
  e.target.classList.add('active');
  taskTitle.textContent = 'Default Project';

  taskCounter.textContent = null;
});

// Create a project
const projectItem = (item) => ({ id: Date.now().toString(), item, tasks: [] });

// Create project item/task
const taskItem = (name, description) => ({
  id: Date.now().toString(), name, description, date: dueDate.value, priority: priority.value, complete: false,
});

// Task form
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // e.target.style.display = 'none';
  // addTaskBtn.style.display = 'block';

  const task_name = taskName.value;
  const task_description = taskDescription.value;
  if (taskName == null || taskName === '') return;

  const task = taskItem(task_name, task_description);

  const selectedProject = listOfProjects.find((project) => project.id === selectedProjectId);
  selectedProject.tasks.push(task);

  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(listOfProjects);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.addSelectedProject)(selectedProjectId);

  e.target.reset();
});

// Create projects
const createProject = () => {
  listOfProjects.forEach((project) => {
    const newProject = document.createElement('li');
    newProject.setAttribute('data-key', project.id);
    newProject.classList.add('new_project');
    newProject.innerHTML = `${project.item} <button class="delete_project text-white bg-danger btn"><i class="fas fa-trash-alt"></i></button><br /><br />`;

    if (project.id === selectedProjectId) {
      newProject.classList.add('active');
      defaultProject.classList.remove('active');
    }
    projectList.appendChild(newProject);
  });
};

// Create a task count
const createTaskCount = (selectedProject) => {
  const incompleteTasks = selectedProject.tasks.filter((task) => !task.complete).length;
  let taskMessage = '';
  if (incompleteTasks === 1) {
    taskMessage = 'task';
  } else {
    taskMessage = 'tasks';
  }

};

// const editTask = (name, description) => {
//   name = taskName.value
//   name = tasks.name;
//   description = taskDescription.value 
//   description = tasks.description;
//   dueDate.value = tasks.date;
//   priority.value = task.priority;

//   taskForm.addEventListener('submit', () => {
//     tasks.name = taskName.value;
//     tasks.description = taskDescription.value;
//     task.date = dueDate.value;
//     task.priority = priority.value;
//     lable.innerHTML = `
//     <button class="delete_listitem text-white bg-danger btn"><i class="fas fa-trash-alt"></i></button>
//     <button class="delete_listitem text-white bg-success btn" id="edit"><i class="fas fa-edit"></i></button><br/>
//     <span class="font-weight-bold">Task Name:</span> ${task.name}<br/>
//     <span class="font-weight-bold">Task Descrition:</span> ${task.description}<br/>
//     <span class="font-weight-bold">Task Date:</span> ${task.date}<br/> 
//     <span class="font-weight-bold">Task Priority:</span> ${task.priority}
//     `;
//     create();
//   })
  
// }

// Create tasks || render the task items
const createTasks = () => {
  const selectedProject = listOfProjects.find((project) => project.id === selectedProjectId);

  if (selectedProjectId) {
    taskTitle.textContent = selectedProject.item;
    createTaskCount(selectedProject);

    selectedProject.tasks.forEach((task) => {
      const taskCheckBox = document.createElement('input');
      taskCheckBox.setAttribute('type', 'checkbox');
      taskCheckBox.setAttribute('class', 'check_box');
      taskCheckBox.id = task.id;
      taskCheckBox.checked = task.complete;
      const taskLabel = document.createElement('label');
      taskLabel.className = 'my-3 w-50 project-listItem';
      taskLabel.htmlFor = task.id;

      taskLabel.innerHTML = `
        <button class="delete_listitem text-white bg-danger btn"><i class="fas fa-trash-alt"></i></button>
        <button class="delete_listitem text-white bg-success btn" id="edit"><i class="fas fa-edit"></i></button><br/>
        <span class="font-weight-bold">Task Name:</span> ${task.name}<br/>
        <span class="font-weight-bold">Task Descrition:</span> ${task.description}<br/>
        <span class="font-weight-bold">Task Date:</span> ${task.date}<br/> 
        <span class="font-weight-bold">Task Priority:</span> ${task.priority}
        `;
 
      taskLabel.appendChild(taskCheckBox);
      taskDiv.appendChild(taskLabel);
      taskList.appendChild(taskDiv);
    });
  }
};

// Delete list items

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-alt')) {
    e.target.parentElement.parentElement.remove();
  }
})

// Clear projects
const clearProject = (element) => {
  while (element.childNodes[2]) {
    element.removeChild(element.childNodes[2]);
  }
};

// Clear tasks
const clearTask = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

// Delete project
const deleteProject = (id) => {
  listOfProjects = listOfProjects.filter((project) => project.id !== id);

  taskTitle.textContent = 'Select or Create a new project';
  taskCounter.textContent = null;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(listOfProjects);
};

// select project list
projectList.addEventListener('click', (e) => {
  selectedProjectId = e.target.getAttribute('data-key');
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.addSelectedProject)(selectedProjectId);

  if (e.target.classList.contains('delete_project')) {
    deleteProject(e.target.parentElement.getAttribute('data-key'));
    defaultProject.classList.add('active');
  }
});

// Task list checkbox addEventListener
taskList.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedProject = listOfProjects.find((project) => project.id === selectedProjectId);
    const selectedTask = selectedProject.tasks.find((task) => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(listOfProjects);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.addSelectedProject)(selectedProjectId);
    createTaskCount(selectedProject);
  }
});

// Add new task button
addTaskBtn.addEventListener('click', (e) => {
  e.target.style.display = 'none';
  taskForm.style.display = 'block';
  taskContainer.appendChild(taskList);
});

// Cancel task button
cancelTaskBtn.addEventListener('click', () => {
  taskForm.style.display = 'none';
  addTaskBtn.style.display = 'block';
  taskForm.reset();
});

const create = () => {
  clearProject(projectList);
  clearTask(taskDiv);
  createProject();
  createTasks();
};

// Project form
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (projectInput.value === null || projectInput.value === '') return;

  const project = projectItem(projectInput.value);
  projectInput.value = null;

  listOfProjects.push(project);

  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(listOfProjects);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.addSelectedProject)(selectedProjectId);

  create();
});

const getFromLocalStorage = () => {
  const reference = localStorage.getItem('listOfProjects');
  const selected = localStorage.getItem('selectedProjectId');

  if (reference) {
    listOfProjects = JSON.parse(reference);
    create();
  }

  if (selected) {
    selectedProjectId = JSON.parse(selected);
    create();
  }
};

getFromLocalStorage();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _stylesheet_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheet/main.css */ "./src/stylesheet/main.css");



(0,_modules_project__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvY29sbGFiLy4vc3JjL3N0eWxlc2hlZXQvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2NvbGxhYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2NvbGxhYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG9jb2xsYWIvLi9zcmMvc3R5bGVzaGVldC9tYWluLmNzcz8yNmZhIiwid2VicGFjazovL3RvZG9jb2xsYWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2NvbGxhYi8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvY29sbGFiLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvY29sbGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9jb2xsYWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2NvbGxhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2NvbGxhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9jb2xsYWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvY29sbGFiLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7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Q3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ051QztBQUNSOztBQUUvQix5REFBTSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcyB7XFxyXFxuICBib3JkZXItbGVmdDogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcnMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMmZyO1xcclxcbiAgY29sdW1uLWdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza19mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza19ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tfYm94IHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldC9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3Mge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDJweCBibGFjayBzb2xpZDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tfZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tfYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrX2JveCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL3Byb2plY3QnO1xuLyogZXNsaW50LWVuYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cblxuLy8gTG9jYWwgc3RvcmFnZVxuXG5jb25zdCBhZGRUb0xvY2FsU3RvcmFnZSA9IChsaXN0T2ZQcm9qZWN0cykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdE9mUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShsaXN0T2ZQcm9qZWN0cykpO1xuICBjcmVhdGUoKTtcbn07XG5cbi8vIEFkZCB0aGUgc2VsZWN0ZWQgcHJvamVjdCB0byBsb2NhbCBzdG9yYWdlXG5jb25zdCBhZGRTZWxlY3RlZFByb2plY3QgPSAoc2VsZWN0ZWRQcm9qZWN0SWQpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkUHJvamVjdElkJywgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRQcm9qZWN0SWQpKTtcbiAgY3JlYXRlKCk7XG59O1xuXG5leHBvcnQge1xuICBhZGRUb0xvY2FsU3RvcmFnZSxcbiAgYWRkU2VsZWN0ZWRQcm9qZWN0LFxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IGFkZFRvTG9jYWxTdG9yYWdlLCBhZGRTZWxlY3RlZFByb2plY3QgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG4vKiBlc2xpbnQtZW5hYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuXG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3X3Byb2plY3RfaW5wdXQnKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfZm9ybScpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YS1wcm9qZWN0cycpO1xuY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YS1kZWZhdWx0LXByb2plY3QnKTtcbmNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrX3RpdGxlJyk7XG5jb25zdCB0YXNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrX2NvdW50Jyk7XG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrX2xpc3QnKTtcbmNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza19ib2R5Jyk7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrX2Zvcm0nKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3X3Rhc2tfYnV0dG9uJyk7XG5jb25zdCBjYW5jZWxUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbF90YXNrX2J1dHRvbicpO1xuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld190YXNrX2lucHV0Jyk7XG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5X2Ryb3Bkb3duJyk7XG5jb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKTtcblxubGV0IGxpc3RPZlByb2plY3RzID0gW107XG5cbmxldCBzZWxlY3RlZFByb2plY3RJZDtcblxuLy8gVGhlIGRlZmF1bHQgcHJvamVjdCBpcyBhY3RpdmUgd2hlbiBjbGlja2VkXG5kZWZhdWx0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSAnRGVmYXVsdCBQcm9qZWN0JztcblxuICB0YXNrQ291bnRlci50ZXh0Q29udGVudCA9IG51bGw7XG59KTtcblxuLy8gQ3JlYXRlIGEgcHJvamVjdFxuY29uc3QgcHJvamVjdEl0ZW0gPSAoaXRlbSkgPT4gKHsgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSwgaXRlbSwgdGFza3M6IFtdIH0pO1xuXG4vLyBDcmVhdGUgcHJvamVjdCBpdGVtL3Rhc2tcbmNvbnN0IHRhc2tJdGVtID0gKG5hbWUsIGRlc2NyaXB0aW9uKSA9PiAoe1xuICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLCBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZTogZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHk6IHByaW9yaXR5LnZhbHVlLCBjb21wbGV0ZTogZmFsc2UsXG59KTtcblxuLy8gVGFzayBmb3JtXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIC8vIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgY29uc3QgdGFza19uYW1lID0gdGFza05hbWUudmFsdWU7XG4gIGNvbnN0IHRhc2tfZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gIGlmICh0YXNrTmFtZSA9PSBudWxsIHx8IHRhc2tOYW1lID09PSAnJykgcmV0dXJuO1xuXG4gIGNvbnN0IHRhc2sgPSB0YXNrSXRlbSh0YXNrX25hbWUsIHRhc2tfZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGxpc3RPZlByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG5cbiAgYWRkVG9Mb2NhbFN0b3JhZ2UobGlzdE9mUHJvamVjdHMpO1xuICBhZGRTZWxlY3RlZFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0SWQpO1xuXG4gIGUudGFyZ2V0LnJlc2V0KCk7XG59KTtcblxuLy8gQ3JlYXRlIHByb2plY3RzXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICBsaXN0T2ZQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgcHJvamVjdC5pZCk7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCduZXdfcHJvamVjdCcpO1xuICAgIG5ld1Byb2plY3QuaW5uZXJIVE1MID0gYCR7cHJvamVjdC5pdGVtfSA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlX3Byb2plY3QgdGV4dC13aGl0ZSBiZy1kYW5nZXIgYnRuXCI+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPjwvYnV0dG9uPjxiciAvPjxiciAvPmA7XG5cbiAgICBpZiAocHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBkZWZhdWx0UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gIH0pO1xufTtcblxuLy8gQ3JlYXRlIGEgdGFzayBjb3VudFxuY29uc3QgY3JlYXRlVGFza0NvdW50ID0gKHNlbGVjdGVkUHJvamVjdCkgPT4ge1xuICBjb25zdCBpbmNvbXBsZXRlVGFza3MgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSkubGVuZ3RoO1xuICBsZXQgdGFza01lc3NhZ2UgPSAnJztcbiAgaWYgKGluY29tcGxldGVUYXNrcyA9PT0gMSkge1xuICAgIHRhc2tNZXNzYWdlID0gJ3Rhc2snO1xuICB9IGVsc2Uge1xuICAgIHRhc2tNZXNzYWdlID0gJ3Rhc2tzJztcbiAgfVxuXG59O1xuXG4vLyBjb25zdCBlZGl0VGFzayA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuLy8gICBuYW1lID0gdGFza05hbWUudmFsdWVcbi8vICAgbmFtZSA9IHRhc2tzLm5hbWU7XG4vLyAgIGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlIFxuLy8gICBkZXNjcmlwdGlvbiA9IHRhc2tzLmRlc2NyaXB0aW9uO1xuLy8gICBkdWVEYXRlLnZhbHVlID0gdGFza3MuZGF0ZTtcbi8vICAgcHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuXG4vLyAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbi8vICAgICB0YXNrcy5uYW1lID0gdGFza05hbWUudmFsdWU7XG4vLyAgICAgdGFza3MuZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4vLyAgICAgdGFzay5kYXRlID0gZHVlRGF0ZS52YWx1ZTtcbi8vICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XG4vLyAgICAgbGFibGUuaW5uZXJIVE1MID0gYFxuLy8gICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVfbGlzdGl0ZW0gdGV4dC13aGl0ZSBiZy1kYW5nZXIgYnRuXCI+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPjwvYnV0dG9uPlxuLy8gICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVfbGlzdGl0ZW0gdGV4dC13aGl0ZSBiZy1zdWNjZXNzIGJ0blwiIGlkPVwiZWRpdFwiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+PC9idXR0b24+PGJyLz5cbi8vICAgICA8c3BhbiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5UYXNrIE5hbWU6PC9zcGFuPiAke3Rhc2submFtZX08YnIvPlxuLy8gICAgIDxzcGFuIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRhc2sgRGVzY3JpdGlvbjo8L3NwYW4+ICR7dGFzay5kZXNjcmlwdGlvbn08YnIvPlxuLy8gICAgIDxzcGFuIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRhc2sgRGF0ZTo8L3NwYW4+ICR7dGFzay5kYXRlfTxici8+IFxuLy8gICAgIDxzcGFuIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRhc2sgUHJpb3JpdHk6PC9zcGFuPiAke3Rhc2sucHJpb3JpdHl9XG4vLyAgICAgYDtcbi8vICAgICBjcmVhdGUoKTtcbi8vICAgfSlcbiAgXG4vLyB9XG5cbi8vIENyZWF0ZSB0YXNrcyB8fCByZW5kZXIgdGhlIHRhc2sgaXRlbXNcbmNvbnN0IGNyZWF0ZVRhc2tzID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBsaXN0T2ZQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZCk7XG5cbiAgaWYgKHNlbGVjdGVkUHJvamVjdElkKSB7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0Lml0ZW07XG4gICAgY3JlYXRlVGFza0NvdW50KHNlbGVjdGVkUHJvamVjdCk7XG5cbiAgICBzZWxlY3RlZFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0NoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHRhc2tDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgIHRhc2tDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrX2JveCcpO1xuICAgICAgdGFza0NoZWNrQm94LmlkID0gdGFzay5pZDtcbiAgICAgIHRhc2tDaGVja0JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZTtcbiAgICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICB0YXNrTGFiZWwuY2xhc3NOYW1lID0gJ215LTMgdy01MCBwcm9qZWN0LWxpc3RJdGVtJztcbiAgICAgIHRhc2tMYWJlbC5odG1sRm9yID0gdGFzay5pZDtcblxuICAgICAgdGFza0xhYmVsLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZV9saXN0aXRlbSB0ZXh0LXdoaXRlIGJnLWRhbmdlciBidG5cIj48aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVfbGlzdGl0ZW0gdGV4dC13aGl0ZSBiZy1zdWNjZXNzIGJ0blwiIGlkPVwiZWRpdFwiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+PC9idXR0b24+PGJyLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+VGFzayBOYW1lOjwvc3Bhbj4gJHt0YXNrLm5hbWV9PGJyLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+VGFzayBEZXNjcml0aW9uOjwvc3Bhbj4gJHt0YXNrLmRlc2NyaXB0aW9ufTxici8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRhc2sgRGF0ZTo8L3NwYW4+ICR7dGFzay5kYXRlfTxici8+IFxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5UYXNrIFByaW9yaXR5Ojwvc3Bhbj4gJHt0YXNrLnByaW9yaXR5fVxuICAgICAgICBgO1xuIFxuICAgICAgdGFza0xhYmVsLmFwcGVuZENoaWxkKHRhc2tDaGVja0JveCk7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gRGVsZXRlIGxpc3QgaXRlbXNcblxudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS10cmFzaC1hbHQnKSkge1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufSlcblxuLy8gQ2xlYXIgcHJvamVjdHNcbmNvbnN0IGNsZWFyUHJvamVjdCA9IChlbGVtZW50KSA9PiB7XG4gIHdoaWxlIChlbGVtZW50LmNoaWxkTm9kZXNbMl0pIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuY2hpbGROb2Rlc1syXSk7XG4gIH1cbn07XG5cbi8vIENsZWFyIHRhc2tzXG5jb25zdCBjbGVhclRhc2sgPSAoZWxlbWVudCkgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG4vLyBEZWxldGUgcHJvamVjdFxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChpZCkgPT4ge1xuICBsaXN0T2ZQcm9qZWN0cyA9IGxpc3RPZlByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gaWQpO1xuXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9ICdTZWxlY3Qgb3IgQ3JlYXRlIGEgbmV3IHByb2plY3QnO1xuICB0YXNrQ291bnRlci50ZXh0Q29udGVudCA9IG51bGw7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKGxpc3RPZlByb2plY3RzKTtcbn07XG5cbi8vIHNlbGVjdCBwcm9qZWN0IGxpc3RcbnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5Jyk7XG4gIGFkZFNlbGVjdGVkUHJvamVjdChzZWxlY3RlZFByb2plY3RJZCk7XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlX3Byb2plY3QnKSkge1xuICAgIGRlbGV0ZVByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JykpO1xuICAgIGRlZmF1bHRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG59KTtcblxuLy8gVGFzayBsaXN0IGNoZWNrYm94IGFkZEV2ZW50TGlzdGVuZXJcbnRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGxpc3RPZlByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gZS50YXJnZXQuaWQpO1xuICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UobGlzdE9mUHJvamVjdHMpO1xuICAgIGFkZFNlbGVjdGVkUHJvamVjdChzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgY3JlYXRlVGFza0NvdW50KHNlbGVjdGVkUHJvamVjdCk7XG4gIH1cbn0pO1xuXG4vLyBBZGQgbmV3IHRhc2sgYnV0dG9uXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xufSk7XG5cbi8vIENhbmNlbCB0YXNrIGJ1dHRvblxuY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgdGFza0Zvcm0ucmVzZXQoKTtcbn0pO1xuXG5jb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gIGNsZWFyUHJvamVjdChwcm9qZWN0TGlzdCk7XG4gIGNsZWFyVGFzayh0YXNrRGl2KTtcbiAgY3JlYXRlUHJvamVjdCgpO1xuICBjcmVhdGVUYXNrcygpO1xufTtcblxuLy8gUHJvamVjdCBmb3JtXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKHByb2plY3RJbnB1dC52YWx1ZSA9PT0gbnVsbCB8fCBwcm9qZWN0SW5wdXQudmFsdWUgPT09ICcnKSByZXR1cm47XG5cbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJdGVtKHByb2plY3RJbnB1dC52YWx1ZSk7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9IG51bGw7XG5cbiAgbGlzdE9mUHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICBhZGRUb0xvY2FsU3RvcmFnZShsaXN0T2ZQcm9qZWN0cyk7XG4gIGFkZFNlbGVjdGVkUHJvamVjdChzZWxlY3RlZFByb2plY3RJZCk7XG5cbiAgY3JlYXRlKCk7XG59KTtcblxuY29uc3QgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgcmVmZXJlbmNlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RPZlByb2plY3RzJyk7XG4gIGNvbnN0IHNlbGVjdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkUHJvamVjdElkJyk7XG5cbiAgaWYgKHJlZmVyZW5jZSkge1xuICAgIGxpc3RPZlByb2plY3RzID0gSlNPTi5wYXJzZShyZWZlcmVuY2UpO1xuICAgIGNyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKHNlbGVjdGVkKSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBKU09OLnBhcnNlKHNlbGVjdGVkKTtcbiAgICBjcmVhdGUoKTtcbiAgfVxufTtcblxuZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGUgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGVzaGVldC9tYWluLmNzcyc7XHJcblxyXG5jcmVhdGUoKTsiXSwic291cmNlUm9vdCI6IiJ9