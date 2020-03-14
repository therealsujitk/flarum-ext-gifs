module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/SearchGIFModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/SearchGIFModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchGIFModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);


var giphyLimit = '40';
var query = '';
var lastResult = 0;

function getGiphyURL(textarea, giphyAPI) {
  var url;
  if (query === '') url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + giphyAPI + '&limit=' + giphyLimit + '&offset=' + lastResult.toString(10);else url = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyAPI + '&q=' + query + '&limit=' + giphyLimit + '&offset=' + lastResult.toString(10);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (content) {
    var resultsLeft = document.getElementById('LeftResults');
    var resultsRight = document.getElementById('RightResults');
    var flag = 0;

    var _loop = function _loop() {
      var imgL = document.createElement('img');
      var imgR = document.createElement('img');
      document.getElementsByClassName('temp-text')[0].textContent = '';
      document.getElementById('LoadMore').style.visibility = 'hidden';
      document.getElementById('LoadMoreSpan').textContent = app.translator.trans('therealsujitk.forum.gifs.loadmore');

      if (typeof content.data[0] === 'undefined') {
        document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.noresults');
        ++flag;
        return "break";
      }

      if (typeof content.data[i] === 'undefined') {
        ++flag;
        return "break";
      }

      imgL.src = content.data[i].images.downsized.url;
      imgL.alt = content.data[i].title;
      imgL.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0%; margin-right: 0.3125%; vertical-align: top; cursor: pointer;';
      resultsLeft.insertAdjacentElement("beforeend", imgL);

      imgL.onclick = function () {
        var embed = '![Giphy - ' + imgL.alt + ']' + '(' + imgL.src + ')';
        app.modal.close();
        textarea.insertAtCursor(embed);
      };

      if (typeof content.data[i + 1] === 'undefined') {
        ++flag;
        return "break";
      }

      imgR.src = content.data[i + 1].images.downsized.url;
      imgR.alt = content.data[i + 1].title;
      imgR.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0.3125%; margin-right: 0%; vertical-align: top; cursor: pointer;';
      resultsRight.insertAdjacentElement("beforeend", imgR);

      imgR.onclick = function () {
        var embed = '![Giphy - ' + imgR.alt + ']' + '(' + imgR.src + ')';
        app.modal.close();
        textarea.insertAtCursor(embed);
      };
    };

    for (var i = 0; i < parseInt(giphyLimit); i += 2) {
      var _ret = _loop();

      if (_ret === "break") break;
    }

    if (flag === 0) {
      document.getElementById('LoadMore').style.visibility = 'visible';
    }
  });
}

var SearchGIFModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchGIFModal, _Modal);

  function SearchGIFModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = SearchGIFModal.prototype;

  _proto.className = function className() {
    return '';
  };

  _proto.title = function title() {
    return app.translator.trans('therealsujitk.forum.gifs.title');
  };

  _proto.content = function content() {
    var _this = this;

    return m('.Modal-body', {
      config: function config(content, isInitialized) {
        if (!isInitialized) {
          document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.loading');
          var textarea = _this.props.textArea;
          var giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
          query = document.getElementById('GIFSearchBar').value.trim();
          getGiphyURL(textarea, giphyAPI);
        }
      }
    }, m('span[style = position: absolute; left: 50%; top: 200px; transform: translate(-50%, -50%);]', {
      id: 'flarum-loading',
      "class": 'temp-text'
    }), m('div', [m('table[style = vertical-align: top; width: 100%;]', [m('td', [m('form[style = margin-right: 1.25%;]', {
      "class": 'Search-input',
      onsubmit: function onsubmit() {
        return false;
      },
      onkeyup: function onkeyup() {
        if (event.keyCode === 13) {
          lastResult = 0;
          document.getElementById('LeftResults').innerHTML = '';
          document.getElementById('RightResults').innerHTML = '';
          document.getElementById('LeftResults').scrollTop = 0;
          document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.loading');
          document.getElementById('LoadMore').style.visibility = 'hidden';
          var textarea = _this.props.textArea;
          var giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
          query = document.getElementById('GIFSearchBar').value.trim();
          getGiphyURL(textarea, giphyAPI);
        }
      }
    }, [m('input[style = width: 100%;]', {
      id: 'GIFSearchBar',
      "class": 'FormControl',
      type: 'search',
      autocomplete: 'off',
      placeholder: app.translator.trans('therealsujitk.forum.gifs.searchbar')
    })])]), m('td', [m('button[style = margin-left: 1.25%; width: 100%;]', {
      "class": 'Button Button--primary hasIcon',
      itemclassname: 'App-primaryControl',
      type: 'button',
      title: app.translator.trans('therealsujitk.forum.gifs.search'),
      onclick: function onclick() {
        lastResult = 0;
        document.getElementById('LeftResults').innerHTML = '';
        document.getElementById('RightResults').innerHTML = '';
        document.getElementById('LeftResults').scrollTop = 0;
        document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.loading');
        document.getElementById('LoadMore').style.visibility = 'hidden';
        var textarea = _this.props.textArea;
        var giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
        query = document.getElementById('GIFSearchBar').value.trim();
        getGiphyURL(textarea, giphyAPI);
      }
    }, [m('span', {
      "class": 'Button-label'
    }, app.translator.trans('therealsujitk.forum.gifs.search'))])])])]), m('div[style = margin-top: 10px; margin-bottom: 10px; min-height: 45vh; height: 45vh; overflow: auto;]', [m('table', {
      width: '100%'
    }, [m('td', {
      id: 'LeftResults',
      width: '50%'
    }), m('td', {
      id: 'RightResults',
      width: '50%'
    })]), m('button[style = position: relative; left: 50%; transform: translate(-50%, 0%); margin-top: 10px; visibility: hidden;]', {
      id: 'LoadMore',
      "class": 'Button',
      type: 'button',
      title: app.translator.trans('therealsujitk.forum.gifs.loadmore'),
      onclick: function onclick() {
        lastResult += parseInt(giphyLimit);
        document.getElementById('LoadMoreSpan').textContent = app.translator.trans('therealsujitk.forum.gifs.loading');
        var textarea = _this.props.textArea;
        var giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
        getGiphyURL(textarea, giphyAPI);
      }
    }, [m('span', {
      id: 'LoadMoreSpan',
      "class": 'Button-label'
    }, app.translator.trans('therealsujitk.forum.gifs.loadmore'))])]), m('div[style = padding-top: 10px; padding-bottom: 30px;]', [m('img[style = float: right;]', {
      src: app.forum.attribute('baseUrl') + '/assets/extensions/therealsujitk-gifs/powered_by_giphy.svg'
    })]));
  };

  return SearchGIFModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SearchGIFModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SearchGIFModal */ "./src/forum/components/SearchGIFModal.js");





flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('therealsujitk/flarum-ext-gifs', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'toolbarItems', function (items) {
    var _this = this;

    items.add('therealsujitk-gifs', m('button', {
      type: 'buton',
      "class": 'Button Button--icon Button--link hasIcon',
      title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('therealsujitk.forum.gifs.title'),
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_SearchGIFModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
          textArea: _this
        }));
      }
    }, [m('svg', {
      "class": 'fas fa-this-icon-does-not-exist',
      xmlns: 'http://www.w3.org/2000/svg',
      xlink: 'http://www.w3.org/1999/xlink',
      width: '16pt',
      height: '7pt',
      viewBox: '0 0 16 7',
      version: '1.1'
    }, [m('g', {
      id: 'surface1'
    }, [m('path[fill = currentColor]', {
      d: 'M 0.78125 7.042969 C 0.496094 6.933594 0.265625 6.738281 0.132812 6.480469 L 0 6.234375 L 0 0.875 L 0.132812 0.625 C 0.277344 0.355469 0.558594 0.128906 0.847656 0.0429688 C 0.957031 0.015625 1.71875 0 2.917969 0.0078125 L 4.808594 0.0234375 L 5.050781 0.15625 C 5.21875 0.246094 5.332031 0.355469 5.425781 0.511719 C 5.597656 0.800781 5.648438 0.992188 5.648438 1.410156 L 5.648438 1.753906 L 1.65625 1.753906 L 1.65625 5.355469 L 3.96875 5.355469 L 3.96875 3.554688 L 5.648438 3.554688 L 5.648438 4.800781 C 5.648438 5.484375 5.628906 6.117188 5.605469 6.207031 C 5.523438 6.527344 5.308594 6.808594 5.050781 6.953125 L 4.808594 7.085938 L 2.878906 7.09375 C 1.339844 7.105469 0.917969 7.09375 0.78125 7.042969 Z M 0.78125 7.042969 '
    }), m('path[fill = currentColor]', {
      d: 'M 7.371094 3.554688 L 7.371094 0 L 9.050781 0 L 9.050781 7.109375 L 7.371094 7.109375 Z M 7.371094 3.554688 '
    }), m('path[fill = currentColor]', {
      d: 'M 10.773438 3.554688 L 10.773438 0 L 15.855469 0 L 15.855469 1.753906 L 12.453125 1.753906 L 12.453125 2.988281 L 14.722656 2.988281 L 14.722656 4.742188 L 12.453125 4.742188 L 12.453125 7.109375 L 10.773438 7.109375 Z M 10.773438 3.554688 '
    })])]), m('span', {
      "class": 'Button-label'
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('therealsujitk.forum.gifs.label'))]), 10);
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map