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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/index.js: 'return' outside of function. (7:0)\\n\\n\\u001b[0m \\u001b[90m 5 |\\u001b[39m \\u001b[36mconst\\u001b[39m root \\u001b[33m=\\u001b[39m \\u001b[33mReactDOMClient\\u001b[39m\\u001b[33m.\\u001b[39mcreateRoot(document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 |\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 7 |\\u001b[39m \\u001b[36mreturn\\u001b[39m root\\u001b[33m.\\u001b[39mrender( \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   |\\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 |\\u001b[39m\\u001b[0m\\n    at instantiate (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:67:32)\\n    at constructor (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:364:12)\\n    at JSXParserMixin.raise (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:3364:19)\\n    at JSXParserMixin.parseReturnStatement (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:13287:12)\\n    at JSXParserMixin.parseStatementContent (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:12954:21)\\n    at JSXParserMixin.parseStatement (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:12917:17)\\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:13497:25)\\n    at JSXParserMixin.parseBlockBody (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:13489:10)\\n    at JSXParserMixin.parseProgram (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:12832:10)\\n    at JSXParserMixin.parseTopLevel (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:12822:25)\\n    at JSXParserMixin.parse (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:14674:10)\\n    at parse (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/parser/lib/index.js:14716:38)\\n    at parser (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/core/lib/parser/index.js:52:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at transform (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/core/lib/transform.js:29:41)\\n    at transform.next (<anonymous>)\\n    at step (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/gensync/index.js:261:32)\\n    at /Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/gensync/index.js:223:11)\\n    at /Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/gensync/index.js:189:28\\n    at /Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/@babel/core/lib/gensync-utils/async.js:84:7\\n    at /Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/gensync/index.js:113:33\\n    at step (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/gensync/index.js:287:14)\\n    at /Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Volumes/G-DRIVE/Sites/NPM/react-easy-animations/example/node_modules/gensync/index.js:223:11)\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });