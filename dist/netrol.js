/*!
 * netrol.js v0.0.0
 * © 2020-~ EuZen Chen
 * Released under the Anti 996 License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["netrol"] = factory();
	else
		root["netrol"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(5);

var iterableToArrayLimit = __webpack_require__(6);

var unsupportedIterableToArray = __webpack_require__(7);

var nonIterableRest = __webpack_require__(9);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(8);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "create", function() { return /* reexport */ create; });
__webpack_require__.d(__webpack_exports__, "toCatch", function() { return /* reexport */ toCatch; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(2);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/core/requestPool.ts



/**
 * 请求池，用于保留当前正在执行的请求
 */
var requestPool_RequestPool = /*#__PURE__*/function () {
  function RequestPool() {
    classCallCheck_default()(this, RequestPool);

    this.pools = [];
  }
  /**
   * 判断请求是否存在
   * @param name 请求的 apiname
   */


  createClass_default()(RequestPool, [{
    key: "isExist",
    value: function isExist(name) {
      if (this.pools.includes(name)) return true;
      return false;
    }
    /**
     * 将请求名添加到 pools 中
     * @param name 请求的 apiname
     */

  }, {
    key: "push",
    value: function push(name) {
      if (this.pools.includes(name)) return;
      this.pools.push(name);
    }
    /**
     * 删除对应 apiname
     * @param name 请求的 apiname
     */

  }, {
    key: "delete",
    value: function _delete(name) {
      var index = this.pools.indexOf(name);
      if (index === -1) return;
      this.pools.splice(index, 1);
    }
  }]);

  return RequestPool;
}();

/* harmony default export */ var requestPool = (new requestPool_RequestPool());
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(4);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/utils/index.ts


/* global
    FormData
    ArrayBuffer
    Function
    File
    Blob
*/

/**
 * 深复制对象
 * @param obj 要复制的对象
 * @return 一个新的对象
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
/**
 * 判断是否为对象
 * @param value 要判断的对象
 */


function isObject(value) {
  return value !== null && typeof_default()(value) === 'object';
}
/**
 * 判断是否为函数
 * @param value
 */


function isFunction(value) {
  return value && value instanceof Function;
}
/**
 * 判断是否为 Formdata 对象
 * @param value 要判断的对象
 */


function isFormData(value) {
  return FormData && value instanceof FormData;
}
/**
 * 判断 ArrayBuffer 对象
 * @param value 要判断的对象
 */


function isArrayBuffer(value) {
  return ArrayBuffer && value instanceof ArrayBuffer;
}
/**
 * 判断是否为 Stream
 * @param value 要判断的对象
 */


function isStream(value) {
  return isObject(value) && isFunction(value.pipe);
}
/**
 * 判断是否为 文件
 * @param value
 */


function isFile(value) {
  return isObject(value) && value instanceof File;
}
/**
 * 判断是否为 Blob 对象
 * @param value
 */


function isBlob(value) {
  return isObject(value) && value instanceof Blob;
}
/**
 * 判断属性是否为目标对象自有属性
 * @param target 目标对象
 * @param prop 判断的属相
 */


function isOwnProp(target, prop) {
  return Object.prototype.hasOwnProperty.call(target, prop);
}

/* harmony default export */ var utils = ({
  deepCopy: deepCopy,
  isObject: isObject,
  isFunction: isFunction,
  isFormData: isFormData,
  isArrayBuffer: isArrayBuffer,
  isStream: isStream,
  isFile: isFile,
  isBlob: isBlob,
  isOwnProp: isOwnProp
});
// CONCATENATED MODULE: ./src/core/responseDataCreate.ts
/* global  XMLHttpRequest */

/**
 * 生成响应数据
 */
/* harmony default export */ var responseDataCreate = (function (xhr) {
  var data = !xhr.responseType || xhr.responseType === 'text' ? xhr.responseText : xhr.response; // 将字符串响应数据，转换为 JSON 

  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (e) {
      /* Ignore */
    }
  }

  return {
    body: data,
    xhr: xhr,
    status: xhr.status,
    statusText: xhr.statusText
  };
});
// CONCATENATED MODULE: ./src/core/createError.ts
// 错误类型的枚举
var ErrorType;

(function (ErrorType) {
  ErrorType[ErrorType["CATCHED"] = 0] = "CATCHED";
  ErrorType[ErrorType["FAIL"] = 1] = "FAIL";
  ErrorType[ErrorType["THROTTLE"] = 2] = "THROTTLE";
  ErrorType[ErrorType["STATUS"] = 3] = "STATUS";
})(ErrorType || (ErrorType = {}));
/**
 * 生成一个错误
 * @param message 错误信息
 * @param type 错误类型
 * @param isPromise 是否返回 promise.reject
 */


/* harmony default export */ var createError = (function (message, type) {
  var isPromise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var extra = arguments.length > 3 ? arguments[3] : undefined;
  // 创建一个错误
  var error = new Error(message); // 扩展 error 的属性
  // 当前的错误类型

  error.type = type; // 错误类型的值

  error.ErrorType = {
    CATCHED: ErrorType.CATCHED,
    FAIL: ErrorType.FAIL,
    THROTTLE: ErrorType.THROTTLE,
    STATUS: ErrorType.STATUS
  }; // 状态码错误， 需要见状态码挂载到错误对象上

  if (type === ErrorType.STATUS) {
    error.statusCode = extra.code;
  } // 转 JSON 的方法


  error.toJSON = function () {
    var result = {
      type: this.type,
      message: message,
      ErrorType: this.ErrorType
    };

    if (this.statusCode !== undefined) {
      result.statusCode = this.statusCode;
    }

    return result;
  };

  if (isPromise) {
    return Promise.reject(error);
  }

  return error;
});

// CONCATENATED MODULE: ./src/adapters/index.ts


/* global  XMLHttpRequest */
// 引入请求池
 // 引入工具类

 // 引入生成响应数据的函数

 // 引入创建一个错误


/* harmony default export */ var adapters = (function (config) {
  // 解构配置项
  var headers = config.headers,
      method = config.method,
      url = config.url,
      data = config.data;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true); // 如果传给后端的数据为 FormData 格式，则移除 content-type，让浏览器自己设置

    if (data && utils.isFormData(data)) {
      delete headers['Content-Type'];
    } // 设置请求头


    Object.entries(headers).forEach(function (_ref) {
      var _ref2 = slicedToArray_default()(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      xhr.setRequestHeader(key, val);
    });

    xhr.onreadystatechange = function () {
      if (!xhr || xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0)) return; // 移除请求池中对应的api

      requestPool["delete"](config.apiName);
      resolve(responseDataCreate(xhr));
      xhr = null;
    };

    xhr.onerror = function () {
      // 移除请求池中对应的api
      requestPool["delete"](config.apiName);
      reject(createError('Network Error', ErrorType.FAIL));
      xhr = null;
    };

    if (!data) {
      data = null;
    }

    xhr.send(data);
  });
});
// CONCATENATED MODULE: ./src/core/catcher.ts




/**
 * 状态捕获器
 */

var catcher_Catcher = /*#__PURE__*/function () {
  function Catcher() {
    classCallCheck_default()(this, Catcher);

    this.targets = {};
  }
  /**
   * 捕获状态码
   * @param code 要捕获的状态码
   * @param exec 执行函数
   */


  createClass_default()(Catcher, [{
    key: "catch",
    value: function _catch(code, exec) {
      code = Number(code);

      if (!utils.isOwnProp(this.targets, code)) {
        this.targets[code] = exec;
      } else {
        throw createError("The catcher of status code ".concat(code, " already exists"), ErrorType.FAIL);
      }
    }
    /**
     * 触发事件
     * @param code 可能触发捕获函数的状态码
     */

  }, {
    key: "trigger",
    value: function trigger(code) {
      code = Number(code);

      if (utils.isOwnProp(this.targets, code)) {
        this.targets[code]();
        return true;
      }

      return false;
    }
  }]);

  return Catcher;
}();

/* harmony default export */ var catcher = (new catcher_Catcher());
// CONCATENATED MODULE: ./src/core/dispatchRequest.ts
// 导入适配器
 // 导入捕获器

 // 导入错误创建


/* harmony default export */ var dispatchRequest = (function (config) {
  // console.log(config)
  // 调用适配器
  return adapters(config).then(function (res) {
    // console.log('-------', res)
    // http 状态码 在 200 - 300 之间， 返回数据
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      var result = catcher.trigger(res.status);

      if (result) {
        return createError("don't worry, error ".concat(res.status, " Already processed"), ErrorType.CATCHED, true);
      } else {
        return createError("request failed with status code ".concat(res.status), ErrorType.STATUS, true, {
          code: res.status
        });
      }
    }
  });
});
// CONCATENATED MODULE: ./src/core/headers.ts
/* harmony default export */ var core_headers = ({
  'Content-Type': 'application/json;charset=utf-8',
  'Accept': 'application/json, text/plain, */*'
});
// CONCATENATED MODULE: ./src/core/Netrol.ts





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// 导入请求
 // 导入默认请求头

 // 引入请求池

 // 引入工具方法

 // 引入错误创建工具


createError('apis is a must in constructor', ErrorType.FAIL);
/**
 * Netrol 对象
 */

var Netrol_Netrol = /*#__PURE__*/function () {
  /**
   * 构造函数
   * @param options Netrol 实例的配置项
   */
  function Netrol(options) {
    classCallCheck_default()(this, Netrol);

    var apis = options.apis,
        leach = options.leach,
        module = options.module,
        _options$config = options.config,
        config = _options$config === void 0 ? {} : _options$config;
    var headers = config.headers,
        baseUrl = config.baseUrl,
        request = config.request,
        response = config.response; // 检查 apis 是否存在

    if (!apis) throw createError('apis is a must in constructor', ErrorType.FAIL); // 初始化数据

    this.apis = apis;
    this.headers = _objectSpread(_objectSpread({}, core_headers), headers);
    this.leach = leach;
    this.baseUrl = baseUrl || '';
    this.modules = module;
    this.interceptorRequest = request;
    this.interceptorResponse = response;
  }
  /**
   * 发起请求的方法
   * @param apiName 调用指定 apis
   * @param data 传递给服务器的数据
   */


  createClass_default()(Netrol, [{
    key: "request",
    value: function request(apiName, data) {
      var promise = null;
      var chain = null; // 判断是否该请求是否正在执行

      if (requestPool.isExist(apiName)) return createError('Triggered throttle; 触发了节流', ErrorType.THROTTLE, true); // 将 apiname 添加到请求池

      requestPool.push(apiName); // 根据调用 api，合并配置项

      var config = this.mergeConfig(apiName, data); // 如果返回的是 Promise 对象， 则直接返回

      if (config instanceof Promise) return config; // 合并 promise 链

      chain = this.mergePromiseChain(config); // 连接 promise 链

      promise = Promise.resolve(config);

      while (chain.length) {
        promise = promise.then(chain.shift());
      }

      return promise;
    }
    /**
     * 合并 promise 链
     * @param config 请求配置对象
     */

  }, {
    key: "mergePromiseChain",
    value: function mergePromiseChain(config) {
      // 将请求函数，添加到 promise 链数组中
      var chain = [dispatchRequest]; // 如果存在 interceptorRequest 则添加到 promise 链的最前面

      if (config.interceptorRequest) {
        chain.unshift(config.interceptorRequest);
        delete config.interceptorRequest;
      } // 如果存在 interceptorResponse 则添加到 promise 连上


      if (config.interceptorResponse) {
        chain.push(config.interceptorResponse);
        delete config.interceptorResponse;
      } // 存在 leach，则添加到 promise 链中


      if (config.leach) {
        chain.push(config.leach);
      }

      delete config.leach;
      return chain;
    }
    /**
     * 合并配置项
     * @param apiName 对应调用的接口
     */

  }, {
    key: "mergeConfig",
    value: function mergeConfig(apiName, data) {
      var config = null;
      var api = null;
      var leach = null;
      var headers = utils.deepCopy(this.headers);
      var baseUrl = this.baseUrl;
      var interceptorRequest = this.interceptorRequest;
      var interceptorResponse = this.interceptorResponse; // 判断调用的是否为 module 中 api

      if (apiName.includes('.')) {
        var _apiName$split = apiName.split('.'),
            _apiName$split2 = slicedToArray_default()(_apiName$split, 2),
            module = _apiName$split2[0],
            name = _apiName$split2[1];

        var theModule = this.modules[module]; // 判断传递的 module 是否存在

        if (!theModule) return createError("module ".concat(module, " does not exist; \u6A21\u5757 ").concat(module, " \u4E0D\u5B58\u5728"), ErrorType.FAIL, true); // 判断模块上是否存在配置项

        if (theModule.config) {
          // 模块上如果存在 baseUrl，则更改 baseUrl，则更改
          if (theModule.config.baseUrl) {
            baseUrl = theModule.baseUrl;
          } // 模块上如果存在 headers，则合并


          if (theModule.config.headers) {
            headers = _objectSpread(_objectSpread({}, headers), utils.deepCopy(theModule.config.headers));
          } // 如果模块上存在 request（请求拦截器），则进行替换


          if (theModule.config.request) {
            interceptorRequest = theModule.config.request;
          } // 如果模块上存在 response（响应拦截器），则进行替换


          if (theModule.config.response) {
            interceptorResponse = theModule.config.response;
          }
        } // 提取 api 和 leach


        api = theModule.apis[name];
        leach = theModule.leach[name];
      } else {
        // 提取 api 和 leach
        api = this.apis[apiName];
        leach = this.leach[apiName];
      } // 判断是否找到对应 api


      if (!api) return createError("api ".concat(apiName, " does not exist; \u63A5\u53E3 ").concat(apiName, " \u4E0D\u5B58\u5728"), ErrorType.FAIL, true); // 深复制 api

      api = utils.deepCopy(api); // 将 api.method 的值，转为英文小写, method 存在，默认调用 get

      api.method = !api.method ? 'get' : api.method.toLowerCase(); // 合并 baseUrl 和 api.url

      api.url = "".concat(baseUrl).concat(api.url); // 合并 headers 和 api.headers

      headers = _objectSpread(_objectSpread({}, headers), api.headers); // 删除 api.headers

      delete api.headers; // 合并配置项

      config = _objectSpread({
        apiName: apiName,
        headers: headers,
        leach: leach
      }, api); // data / interceptorRequest / interceptorResponse 存在，则添加到 config 上

      if (data) config.data = this.transformData(data);
      if (interceptorRequest) config.interceptorRequest = interceptorRequest;
      if (interceptorResponse) config.interceptorResponse = interceptorResponse; // 返回

      return config;
    }
    /**
     * 转换请求数据
     * @param data
     */

  }, {
    key: "transformData",
    value: function transformData(data) {
      // 特殊对象，直接返回
      if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      } // 普通对象，转为 JSON 字符串


      if (utils.isObject(data)) {
        return JSON.stringify(data);
      } // 未知情况，直接返回


      return data;
    }
  }]);

  return Netrol;
}();

/* harmony default export */ var core_Netrol = (Netrol_Netrol);
// CONCATENATED MODULE: ./src/create.ts

/**
 * 创建一个 netrol 实例
 */

/* harmony default export */ var create = (function (options) {
  var netrol = new core_Netrol(options);
  return function (apiName, data) {
    return netrol.request(apiName, data);
  };
});
// CONCATENATED MODULE: ./src/toCatch.ts

/**
 * 对外暴露捕获方法
 * @param code 状态码
 * @param exec 执行函数
 */

/* harmony default export */ var toCatch = (function (code, exec) {
  catcher["catch"](code, exec);
});
// CONCATENATED MODULE: ./index.ts


/* harmony default export */ var index = __webpack_exports__["default"] = ({
  create: create,
  toCatch: toCatch
});


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRyb2wvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL25ldHJvbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9yZXF1ZXN0UG9vbC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvcmVzcG9uc2VEYXRhQ3JlYXRlLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2NyZWF0ZUVycm9yLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9hZGFwdGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9jYXRjaGVyLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2Rpc3BhdGNoUmVxdWVzdC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9oZWFkZXJzLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL05ldHJvbC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY3JlYXRlLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy90b0NhdGNoLnRzIiwid2VicGFjazovL25ldHJvbC8uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixF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QUNELEdBRkQ7QUFHRCxDOztBQ1ZEO0FBQ0E7Ozs7OztBQUtjLHNEQUFXLElBQVgsRUFBeUIsSUFBekIsRUFBdUM7QUFDbkQsU0FBTyxTQUFQLENBQWMsSUFBZCxFQUFvQixJQUFwQjtBQUNELEM7O0FDUkQ7QUFDQTtBQUVlO0FBQ2IsUUFBTSxFQUFOLE1BRGE7QUFFYixTQUFPLEVBQVAsT0FBTztBQUZNLENBQWYiLCJmaWxlIjoibmV0cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmV0cm9sXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5ldHJvbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiLyoqXHJcbiAqIOivt+axguaxoO+8jOeUqOS6juS/neeVmeW9k+WJjeato+WcqOaJp+ihjOeahOivt+axglxyXG4gKi9cclxuXHJcbmNsYXNzIFJlcXVlc3RQb29sIHtcclxuICBwb29sczogQXJyYXk8c3RyaW5nPiA9IFtdXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIpOaWreivt+axguaYr+WQpuWtmOWcqFxyXG4gICAqIEBwYXJhbSBuYW1lIOivt+axgueahCBhcGluYW1lXHJcbiAgICovXHJcbiAgaXNFeGlzdCAobmFtZTogc3RyaW5nKTogQm9vbGVhbiB7XHJcbiAgICBpZiAoIHRoaXMucG9vbHMuaW5jbHVkZXMobmFtZSkgKSByZXR1cm4gdHJ1ZVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlsIbor7fmsYLlkI3mt7vliqDliLAgcG9vbHMg5LitXHJcbiAgICogQHBhcmFtIG5hbWUg6K+35rGC55qEIGFwaW5hbWVcclxuICAgKi9cclxuICBwdXNoIChuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICggdGhpcy5wb29scy5pbmNsdWRlcyhuYW1lKSApIHJldHVyblxyXG4gICAgdGhpcy5wb29scy5wdXNoKG5hbWUpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliKDpmaTlr7nlupQgYXBpbmFtZVxyXG4gICAqIEBwYXJhbSBuYW1lIOivt+axgueahCBhcGluYW1lXHJcbiAgICovXHJcbiAgZGVsZXRlIChuYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMucG9vbHMuaW5kZXhPZihuYW1lKVxyXG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuXHJcbiAgICB0aGlzLnBvb2xzLnNwbGljZShpbmRleCwgMSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXF1ZXN0UG9vbCgpIiwiLyogZ2xvYmFsIFxyXG4gICAgRm9ybURhdGFcclxuICAgIEFycmF5QnVmZmVyXHJcbiAgICBGdW5jdGlvblxyXG4gICAgRmlsZVxyXG4gICAgQmxvYlxyXG4qL1xyXG4vKipcclxuICog5rex5aSN5Yi25a+56LGhXHJcbiAqIEBwYXJhbSBvYmog6KaB5aSN5Yi255qE5a+56LGhXHJcbiAqIEByZXR1cm4g5LiA5Liq5paw55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwQ29weSAob2JqOiBPYmplY3QpOiBvYmplY3Qge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeShvYmopIClcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uuWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUg6KaB5Yik5pat55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBpc09iamVjdCAodmFsdWUpOiBCb29sZWFuIHtcclxuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li65Ye95pWwXHJcbiAqIEBwYXJhbSB2YWx1ZSBcclxuICovXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKHZhbHVlKTogQm9vbGVhbiB7XHJcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb25cclxufVxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li6IEZvcm1kYXRhIOWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUg6KaB5Yik5pat55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Zvcm1EYXRhICh2YWx1ZSk6IEJvb2xlYW4ge1xyXG4gIHJldHVybiBGb3JtRGF0YSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrSBBcnJheUJ1ZmZlciDlr7nosaFcclxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWvueixoVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlciAodmFsdWUpOiBCb29sZWFuIHtcclxuICByZXR1cm4gQXJyYXlCdWZmZXIgJiYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLogU3RyZWFtXHJcbiAqIEBwYXJhbSB2YWx1ZSDopoHliKTmlq3nmoTlr7nosaFcclxuICovXHJcbmZ1bmN0aW9uIGlzU3RyZWFtICh2YWx1ZSk6IEJvb2xlYW4ge1xyXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5waXBlKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li6IOaWh+S7tlxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0ZpbGUgKHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGVcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uiBCbG9iIOWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Jsb2IgKHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEJsb2JcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreWxnuaAp+aYr+WQpuS4uuebruagh+WvueixoeiHquacieWxnuaAp1xyXG4gKiBAcGFyYW0gdGFyZ2V0IOebruagh+WvueixoVxyXG4gKiBAcGFyYW0gcHJvcCDliKTmlq3nmoTlsZ7nm7hcclxuICovXHJcbmZ1bmN0aW9uIGlzT3duUHJvcCAodGFyZ2V0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBwcm9wOiBhbnkpIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRlZXBDb3B5LFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNGb3JtRGF0YSxcclxuICBpc0FycmF5QnVmZmVyLFxyXG4gIGlzU3RyZWFtLFxyXG4gIGlzRmlsZSxcclxuICBpc0Jsb2IsXHJcbiAgaXNPd25Qcm9wLFxyXG59IiwiLyogZ2xvYmFsICBYTUxIdHRwUmVxdWVzdCAqL1xyXG4vKipcclxuICog55Sf5oiQ5ZON5bqU5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeGhyOiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gIGxldCBkYXRhID0gIXhoci5yZXNwb25zZVR5cGUgfHwgeGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8geGhyLnJlc3BvbnNlVGV4dCA6IHhoci5yZXNwb25zZVxyXG4gIC8vIOWwhuWtl+espuS4suWTjeW6lOaVsOaNru+8jOi9rOaNouS4uiBKU09OIFxyXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYm9keTogZGF0YSxcclxuICAgIHhocixcclxuICAgIHN0YXR1czogeGhyLnN0YXR1cyxcclxuICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0XHJcbiAgfVxyXG59IiwiLy8g6ZSZ6K+v57G75Z6L55qE5p6a5Li+XHJcbmVudW0gRXJyb3JUeXBlIHtcclxuICBDQVRDSEVEID0gMCwgLy8g5bey57uP6YCa6L+HIHRvQ2F0Y2gg5Ye95pWw77yI5oiW6ICF5YW25LuW5pa55byP5oum5oiq77yJ55qE6ZSZ6K+vXHJcbiAgRkFJTCA9IDEsIC8vIOS4gOiIrOmUmeivr1xyXG4gIFRIUk9UVExFID0gMiwgLy8g6Kem5Y+R6IqC5rWBXHJcbiAgU1RBVFVTID0gMywgLy8g5pyN5Yqh5Zmo54q25oCB56CB6ZSZ6K+vXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlJ/miJDkuIDkuKrplJnor69cclxuICogQHBhcmFtIG1lc3NhZ2Ug6ZSZ6K+v5L+h5oGvXHJcbiAqIEBwYXJhbSB0eXBlIOmUmeivr+exu+Wei1xyXG4gKiBAcGFyYW0gaXNQcm9taXNlIOaYr+WQpui/lOWbniBwcm9taXNlLnJlamVjdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKFxyXG4gIG1lc3NhZ2U6IHN0cmluZyxcclxuICB0eXBlOiBFcnJvclR5cGUsXHJcbiAgaXNQcm9taXNlOiBCb29sZWFuID0gZmFsc2UsXHJcbiAgZXh0cmE/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxyXG4pOiBQcm9taXNlPEVycm9yPiB8IEVycm9yIHtcclxuICAvLyDliJvlu7rkuIDkuKrplJnor69cclxuICBsZXQgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihtZXNzYWdlKVxyXG5cclxuICAvLyDmianlsZUgZXJyb3Ig55qE5bGe5oCnXHJcbiAgLy8g5b2T5YmN55qE6ZSZ6K+v57G75Z6LXHJcbiAgZXJyb3IudHlwZSA9IHR5cGUgXHJcbiAgLy8g6ZSZ6K+v57G75Z6L55qE5YC8XHJcbiAgZXJyb3IuRXJyb3JUeXBlID0ge1xyXG4gICAgQ0FUQ0hFRDogRXJyb3JUeXBlLkNBVENIRUQsXHJcbiAgICBGQUlMOiBFcnJvclR5cGUuRkFJTCxcclxuICAgIFRIUk9UVExFOiBFcnJvclR5cGUuVEhST1RUTEUsXHJcbiAgICBTVEFUVVM6IEVycm9yVHlwZS5TVEFUVVNcclxuICB9XHJcblxyXG4gIC8vIOeKtuaAgeeggemUmeivr++8jCDpnIDopoHop4HnirbmgIHnoIHmjILovb3liLDplJnor6/lr7nosaHkuIpcclxuICBpZiAodHlwZSA9PT0gRXJyb3JUeXBlLlNUQVRVUykge1xyXG4gICAgZXJyb3Iuc3RhdHVzQ29kZSA9IGV4dHJhLmNvZGVcclxuICB9XHJcblxyXG4gIC8vIOi9rCBKU09OIOeahOaWueazlVxyXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7XHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgRXJyb3JUeXBlOiB0aGlzLkVycm9yVHlwZSxcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXR1c0NvZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXN1bHQuc3RhdHVzQ29kZSA9IHRoaXMuc3RhdHVzQ29kZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgaWYgKGlzUHJvbWlzZSkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBFcnJvclR5cGVcclxufSIsIi8qIGdsb2JhbCAgWE1MSHR0cFJlcXVlc3QgKi9cclxuLy8g5byV5YWl6K+35rGC5rGgXHJcbmltcG9ydCByZXF1ZXN0UG9vbCBmcm9tICdAL2NvcmUvcmVxdWVzdFBvb2wnXHJcbi8vIOW8leWFpeW3peWFt+exu1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQC91dGlscy9pbmRleCdcclxuLy8g5byV5YWl55Sf5oiQ5ZON5bqU5pWw5o2u55qE5Ye95pWwXHJcbmltcG9ydCByZXNwb25zZURhdGFDcmVhdGUgZnJvbSAnQC9jb3JlL3Jlc3BvbnNlRGF0YUNyZWF0ZSdcclxuLy8g5byV5YWl5Yib5bu65LiA5Liq6ZSZ6K+vXHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBFcnJvclR5cGUgfSBmcm9tICdAL2NvcmUvY3JlYXRlRXJyb3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUHJvbWlzZTxhbnk+IHtcclxuICAvLyDop6PmnoTphY3nva7poblcclxuICBsZXQgeyBoZWFkZXJzLCBtZXRob2QsIHVybCwgZGF0YSB9ID0gY29uZmlnXHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgIFxyXG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpXHJcblxyXG4gICAgLy8g5aaC5p6c5Lyg57uZ5ZCO56uv55qE5pWw5o2u5Li6IEZvcm1EYXRhIOagvOW8j++8jOWImeenu+mZpCBjb250ZW50LXR5cGXvvIzorqnmtY/op4jlmajoh6rlt7Horr7nva5cclxuICAgIGlmICggZGF0YSAmJiB1dGlscy5pc0Zvcm1EYXRhKGRhdGEpICkge1xyXG4gICAgICBkZWxldGUgaGVhZGVyc1snQ29udGVudC1UeXBlJ11cclxuICAgIH1cclxuXHJcbiAgICAvLyDorr7nva7or7fmsYLlpLRcclxuICAgIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcclxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwgYXMgc3RyaW5nKVxyXG4gICAgfSlcclxuXHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoIXhociB8fCB4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkgcmV0dXJuXHJcbiAgICAgIGlmICggeGhyLnN0YXR1cyA9PT0gMCAmJiAhKHhoci5yZXNwb25zZVVSTCAmJiB4aHIucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkgKSByZXR1cm5cclxuICAgICAgXHJcbiAgICAgIC8vIOenu+mZpOivt+axguaxoOS4reWvueW6lOeahGFwaVxyXG4gICAgICByZXF1ZXN0UG9vbC5kZWxldGUoY29uZmlnLmFwaU5hbWUpXHJcblxyXG4gICAgICByZXNvbHZlKCByZXNwb25zZURhdGFDcmVhdGUoeGhyKSApXHJcbiAgICAgIHhociA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8g56e76Zmk6K+35rGC5rGg5Lit5a+55bqU55qEYXBpXHJcbiAgICAgIHJlcXVlc3RQb29sLmRlbGV0ZShjb25maWcuYXBpTmFtZSlcclxuXHJcbiAgICAgIHJlamVjdCggY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBFcnJvclR5cGUuRkFJTCkgKVxyXG4gICAgICB4aHIgPSBudWxsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICBkYXRhID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHhoci5zZW5kKGRhdGEpXHJcbiAgfSlcclxufSIsImltcG9ydCB1dGlscyBmcm9tICdAL3V0aWxzL2luZGV4J1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnLi9jcmVhdGVFcnJvcidcclxuLyoqXHJcbiAqIOeKtuaAgeaNleiOt+WZqFxyXG4gKi9cclxuY2xhc3MgQ2F0Y2hlciB7XHJcbiAgdGFyZ2V0czogUmVjb3JkPG51bWJlciwgRnVuY3Rpb24+ID0ge31cclxuXHJcbiAgLyoqXHJcbiAgICog5o2V6I6354q25oCB56CBXHJcbiAgICogQHBhcmFtIGNvZGUg6KaB5o2V6I6355qE54q25oCB56CBXHJcbiAgICogQHBhcmFtIGV4ZWMg5omn6KGM5Ye95pWwXHJcbiAgICovXHJcbiAgY2F0Y2ggKGNvZGU6IG51bWJlciwgZXhlYzogRnVuY3Rpb24pIHtcclxuICAgIGNvZGUgPSBOdW1iZXIoY29kZSlcclxuICAgIGlmICggIXV0aWxzLmlzT3duUHJvcCh0aGlzLnRhcmdldHMsIGNvZGUpICkge1xyXG4gICAgICB0aGlzLnRhcmdldHNbY29kZV0gPSBleGVjXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBjcmVhdGVFcnJvcihgVGhlIGNhdGNoZXIgb2Ygc3RhdHVzIGNvZGUgJHtjb2RlfSBhbHJlYWR5IGV4aXN0c2AsIEVycm9yVHlwZS5GQUlMKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6Kem5Y+R5LqL5Lu2XHJcbiAgICogQHBhcmFtIGNvZGUg5Y+v6IO96Kem5Y+R5o2V6I635Ye95pWw55qE54q25oCB56CBXHJcbiAgICovXHJcbiAgdHJpZ2dlciAoY29kZSkge1xyXG4gICAgY29kZSA9IE51bWJlcihjb2RlKVxyXG4gICAgaWYgKCB1dGlscy5pc093blByb3AodGhpcy50YXJnZXRzLCBjb2RlKSApIHtcclxuICAgICAgdGhpcy50YXJnZXRzW2NvZGVdKClcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdGNoZXIoKSIsIi8vIOWvvOWFpemAgumFjeWZqFxyXG5pbXBvcnQgYWRhcHRlcnMgZnJvbSAnQC9hZGFwdGVycy9pbmRleCdcclxuLy8g5a+85YWl5o2V6I635ZmoXHJcbmltcG9ydCBjYXRjaGVyIGZyb20gJ0AvY29yZS9jYXRjaGVyJ1xyXG4vLyDlr7zlhaXplJnor6/liJvlu7pcclxuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEVycm9yVHlwZSB9IGZyb20gJy4vY3JlYXRlRXJyb3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgLy8gY29uc29sZS5sb2coY29uZmlnKVxyXG4gIC8vIOiwg+eUqOmAgumFjeWZqFxyXG4gIHJldHVybiBhZGFwdGVycyhjb25maWcpLnRoZW4ocmVzID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tJywgcmVzKVxyXG4gICAgLy8gaHR0cCDnirbmgIHnoIEg5ZyoIDIwMCAtIDMwMCDkuYvpl7TvvIwg6L+U5Zue5pWw5o2uXHJcbiAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gY2F0Y2hlci50cmlnZ2VyKHJlcy5zdGF0dXMpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlRXJyb3IoYGRvbid0IHdvcnJ5LCBlcnJvciAke3Jlcy5zdGF0dXN9IEFscmVhZHkgcHJvY2Vzc2VkYCwgRXJyb3JUeXBlLkNBVENIRUQsIHRydWUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVycm9yKGByZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICR7cmVzLnN0YXR1c31gLCBFcnJvclR5cGUuU1RBVFVTLCB0cnVlLCB7IGNvZGU6IHJlcy5zdGF0dXMgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnLFxyXG4gICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxufSIsIi8vIOWvvOWFpeaOpeWPo1xyXG5pbXBvcnQgeyBOZXRyb2xPcHRpb25zIH0gZnJvbSAnQC9pbnRlcmZhY2VzL2luZGV4J1xyXG4vLyDlr7zlhaXor7fmsYJcclxuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdCdcclxuLy8g5a+85YWl6buY6K6k6K+35rGC5aS0XHJcbmltcG9ydCBkZWZhdWx0SGVhZGVycyBmcm9tICcuL2hlYWRlcnMnXHJcbi8vIOW8leWFpeivt+axguaxoFxyXG5pbXBvcnQgcmVxdWVzdFBvb2wgZnJvbSAnLi9yZXF1ZXN0UG9vbCdcclxuLy8g5byV5YWl5bel5YW35pa55rOVXHJcbmltcG9ydCB1dGlscyBmcm9tICdAL3V0aWxzL2luZGV4J1xyXG4vLyDlvJXlhaXplJnor6/liJvlu7rlt6XlhbdcclxuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEVycm9yVHlwZSB9IGZyb20gJy4vY3JlYXRlRXJyb3InXHJcbmNyZWF0ZUVycm9yKCdhcGlzIGlzIGEgbXVzdCBpbiBjb25zdHJ1Y3RvcicsIEVycm9yVHlwZS5GQUlMKVxyXG4vKipcclxuICogTmV0cm9sIOWvueixoVxyXG4gKi9cclxuY2xhc3MgTmV0cm9sIHtcclxuICAvLyDnrqHnkIbmiYDmnIkgYXBpc1xyXG4gIGFwaXM6IG9iamVjdFxyXG4gIC8vIOWPkemAgSB4aHLor7fmsYIg5omA6ZyA55qEIFJlcXVlc3QgSGVhZGVyc1xyXG4gIGhlYWRlcnM6IG9iamVjdFxyXG4gIC8vIOWTjeW6lOaVsOaNrui/h+a7pOWZqO+8jOeUqOS6juWcqOivt+axguaIkOWKn+WQju+8jOaOpeWPl+acjeWKoeWZqOaVsOaNru+8jOW5tui/m+ihjOWkhOeQhuWSjOi/lOWbnlxyXG4gIGxlYWNoOiBvYmplY3RcclxuICAvLyDln7rmnKx1cmxcclxuICBiYXNlVXJsOiBzdHJpbmdcclxuICAvLyDmqKHlnZdcclxuICBtb2R1bGVzOiBvYmplY3RcclxuICAvLyDor7fmsYLmi6bmiKrlmahcclxuICBpbnRlcmNlcHRvclJlcXVlc3Q6IEZ1bmN0aW9uXHJcbiAgLy8g5ZON5bqU5oum5oiq5ZmoXHJcbiAgaW50ZXJjZXB0b3JSZXNwb25zZTogRnVuY3Rpb25cclxuXHJcbiAgLyoqXHJcbiAgICog5p6E6YCg5Ye95pWwXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgTmV0cm9sIOWunuS+i+eahOmFjee9rumhuVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zOiBOZXRyb2xPcHRpb25zKSB7XHJcbiAgICBsZXQgeyBhcGlzLCBsZWFjaCwgbW9kdWxlLCBjb25maWcgPSB7fSB9ID0gb3B0aW9uc1xyXG4gICAgbGV0IHsgaGVhZGVycywgYmFzZVVybCwgcmVxdWVzdCwgcmVzcG9uc2UgfSA9IGNvbmZpZ1xyXG5cclxuICAgIC8vIOajgOafpSBhcGlzIOaYr+WQpuWtmOWcqFxyXG4gICAgaWYgKCFhcGlzKSB0aHJvdyBjcmVhdGVFcnJvcignYXBpcyBpcyBhIG11c3QgaW4gY29uc3RydWN0b3InLCBFcnJvclR5cGUuRkFJTClcclxuXHJcbiAgICAvLyDliJ3lp4vljJbmlbDmja5cclxuICAgIHRoaXMuYXBpcyA9IGFwaXNcclxuICAgIHRoaXMuaGVhZGVycyA9IHtcclxuICAgICAgLi4uZGVmYXVsdEhlYWRlcnMsXHJcbiAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICB9XHJcbiAgICB0aGlzLmxlYWNoID0gbGVhY2hcclxuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmwgfHwgJydcclxuICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZVxyXG4gICAgdGhpcy5pbnRlcmNlcHRvclJlcXVlc3QgPSByZXF1ZXN0XHJcbiAgICB0aGlzLmludGVyY2VwdG9yUmVzcG9uc2UgPSByZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y+R6LW36K+35rGC55qE5pa55rOVXHJcbiAgICogQHBhcmFtIGFwaU5hbWUg6LCD55So5oyH5a6aIGFwaXMgXHJcbiAgICogQHBhcmFtIGRhdGEg5Lyg6YCS57uZ5pyN5Yqh5Zmo55qE5pWw5o2uXHJcbiAgICovXHJcbiAgcmVxdWVzdCAoYXBpTmFtZTogc3RyaW5nLCBkYXRhOiBvYmplY3QpIHtcclxuICAgIGxldCBwcm9taXNlID0gbnVsbFxyXG4gICAgbGV0IGNoYWluID0gbnVsbFxyXG4gICAgXHJcbiAgICAvLyDliKTmlq3mmK/lkKbor6Xor7fmsYLmmK/lkKbmraPlnKjmiafooYxcclxuICAgIGlmICggcmVxdWVzdFBvb2wuaXNFeGlzdChhcGlOYW1lKSApIHJldHVybiBjcmVhdGVFcnJvcignVHJpZ2dlcmVkIHRocm90dGxlOyDop6blj5HkuoboioLmtYEnLCBFcnJvclR5cGUuVEhST1RUTEUsIHRydWUpXHJcbiAgICAvLyDlsIYgYXBpbmFtZSDmt7vliqDliLDor7fmsYLmsaBcclxuICAgIHJlcXVlc3RQb29sLnB1c2goYXBpTmFtZSlcclxuXHJcbiAgICAvLyDmoLnmja7osIPnlKggYXBp77yM5ZCI5bm26YWN572u6aG5XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5tZXJnZUNvbmZpZyhhcGlOYW1lLCBkYXRhKVxyXG4gICAgLy8g5aaC5p6c6L+U5Zue55qE5pivIFByb21pc2Ug5a+56LGh77yMIOWImeebtOaOpei/lOWbnlxyXG4gICAgaWYgKGNvbmZpZyBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBjb25maWdcclxuXHJcbiAgICAvLyDlkIjlubYgcHJvbWlzZSDpk75cclxuICAgIGNoYWluID0gdGhpcy5tZXJnZVByb21pc2VDaGFpbihjb25maWcpXHJcblxyXG4gICAgLy8g6L+e5o6lIHByb21pc2Ug6ZO+XHJcbiAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZylcclxuICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcclxuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbiggY2hhaW4uc2hpZnQoKSApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBwcm9taXNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlkIjlubYgcHJvbWlzZSDpk75cclxuICAgKiBAcGFyYW0gY29uZmlnIOivt+axgumFjee9ruWvueixoVxyXG4gICAqL1xyXG4gIG1lcmdlUHJvbWlzZUNoYWluIChjb25maWc6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICAgIC8vIOWwhuivt+axguWHveaVsO+8jOa3u+WKoOWIsCBwcm9taXNlIOmTvuaVsOe7hOS4rVxyXG4gICAgbGV0IGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdF1cclxuICAgIC8vIOWmguaenOWtmOWcqCBpbnRlcmNlcHRvclJlcXVlc3Qg5YiZ5re75Yqg5YiwIHByb21pc2Ug6ZO+55qE5pyA5YmN6Z2iXHJcbiAgICBpZiAoY29uZmlnLmludGVyY2VwdG9yUmVxdWVzdCkge1xyXG4gICAgICBjaGFpbi51bnNoaWZ0KGNvbmZpZy5pbnRlcmNlcHRvclJlcXVlc3QpXHJcbiAgICAgIGRlbGV0ZSBjb25maWcuaW50ZXJjZXB0b3JSZXF1ZXN0XHJcbiAgICB9XHJcbiAgICAvLyDlpoLmnpzlrZjlnKggaW50ZXJjZXB0b3JSZXNwb25zZSDliJnmt7vliqDliLAgcHJvbWlzZSDov57kuIpcclxuICAgIGlmIChjb25maWcuaW50ZXJjZXB0b3JSZXNwb25zZSkge1xyXG4gICAgICBjaGFpbi5wdXNoKGNvbmZpZy5pbnRlcmNlcHRvclJlc3BvbnNlKVxyXG4gICAgICBkZWxldGUgY29uZmlnLmludGVyY2VwdG9yUmVzcG9uc2VcclxuICAgIH1cclxuXHJcbiAgICAvLyDlrZjlnKggbGVhY2jvvIzliJnmt7vliqDliLAgcHJvbWlzZSDpk77kuK1cclxuICAgIGlmIChjb25maWcubGVhY2gpIHtcclxuICAgICAgY2hhaW4ucHVzaChjb25maWcubGVhY2gpXHJcbiAgICB9XHJcbiAgICBkZWxldGUgY29uZmlnLmxlYWNoXHJcbiAgICByZXR1cm4gY2hhaW5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWQiOW5tumFjee9rumhuVxyXG4gICAqIEBwYXJhbSBhcGlOYW1lIOWvueW6lOiwg+eUqOeahOaOpeWPo1xyXG4gICAqL1xyXG4gIG1lcmdlQ29uZmlnIChhcGlOYW1lOiBzdHJpbmcsIGRhdGE6IG9iamVjdCk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xyXG4gICAgbGV0IGNvbmZpZyA9IG51bGxcclxuICAgIGxldCBhcGkgPSBudWxsXHJcbiAgICBsZXQgbGVhY2ggPSBudWxsXHJcbiAgICBsZXQgaGVhZGVycyA9IHV0aWxzLmRlZXBDb3B5KHRoaXMuaGVhZGVycylcclxuICAgIGxldCBiYXNlVXJsID0gdGhpcy5iYXNlVXJsXHJcbiAgICBsZXQgaW50ZXJjZXB0b3JSZXF1ZXN0ID0gdGhpcy5pbnRlcmNlcHRvclJlcXVlc3RcclxuICAgIGxldCBpbnRlcmNlcHRvclJlc3BvbnNlID0gdGhpcy5pbnRlcmNlcHRvclJlc3BvbnNlXHJcblxyXG4gICAgLy8g5Yik5pat6LCD55So55qE5piv5ZCm5Li6IG1vZHVsZSDkuK0gYXBpXHJcbiAgICBpZiAoIGFwaU5hbWUuaW5jbHVkZXMoJy4nKSApIHtcclxuICAgICAgbGV0IFttb2R1bGUsIG5hbWVdID0gYXBpTmFtZS5zcGxpdCgnLicpXHJcbiAgICAgIGxldCB0aGVNb2R1bGUgPSB0aGlzLm1vZHVsZXNbbW9kdWxlXVxyXG5cclxuICAgICAgLy8g5Yik5pat5Lyg6YCS55qEIG1vZHVsZSDmmK/lkKblrZjlnKhcclxuICAgICAgaWYgKCF0aGVNb2R1bGUpIHJldHVybiBjcmVhdGVFcnJvcihgbW9kdWxlICR7bW9kdWxlfSBkb2VzIG5vdCBleGlzdDsg5qih5Z2XICR7bW9kdWxlfSDkuI3lrZjlnKhgLCBFcnJvclR5cGUuRkFJTCwgdHJ1ZSlcclxuXHJcbiAgICAgIC8vIOWIpOaWreaooeWdl+S4iuaYr+WQpuWtmOWcqOmFjee9rumhuVxyXG4gICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZykge1xyXG4gICAgICAgIC8vIOaooeWdl+S4iuWmguaenOWtmOWcqCBiYXNlVXJs77yM5YiZ5pu05pS5IGJhc2VVcmzvvIzliJnmm7TmlLlcclxuICAgICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZy5iYXNlVXJsKSB7XHJcbiAgICAgICAgICBiYXNlVXJsID0gdGhlTW9kdWxlLmJhc2VVcmxcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5qih5Z2X5LiK5aaC5p6c5a2Y5ZyoIGhlYWRlcnPvvIzliJnlkIjlubZcclxuICAgICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZy5oZWFkZXJzKSB7XHJcbiAgICAgICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgICAgICAuLi51dGlscy5kZWVwQ29weSh0aGVNb2R1bGUuY29uZmlnLmhlYWRlcnMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOaooeWdl+S4iuWtmOWcqCByZXF1ZXN077yI6K+35rGC5oum5oiq5Zmo77yJ77yM5YiZ6L+b6KGM5pu/5o2iXHJcbiAgICAgICAgaWYgKHRoZU1vZHVsZS5jb25maWcucmVxdWVzdCkge1xyXG4gICAgICAgICAgaW50ZXJjZXB0b3JSZXF1ZXN0ID0gdGhlTW9kdWxlLmNvbmZpZy5yZXF1ZXN0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOaooeWdl+S4iuWtmOWcqCByZXNwb25zZe+8iOWTjeW6lOaLpuaIquWZqO+8ie+8jOWImei/m+ihjOabv+aNolxyXG4gICAgICAgIGlmICh0aGVNb2R1bGUuY29uZmlnLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpbnRlcmNlcHRvclJlc3BvbnNlID0gdGhlTW9kdWxlLmNvbmZpZy5yZXNwb25zZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8g5o+Q5Y+WIGFwaSDlkowgbGVhY2hcclxuICAgICAgYXBpID0gdGhlTW9kdWxlLmFwaXNbbmFtZV1cclxuICAgICAgbGVhY2ggPSB0aGVNb2R1bGUubGVhY2hbbmFtZV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOaPkOWPliBhcGkg5ZKMIGxlYWNoXHJcbiAgICAgIGFwaSA9IHRoaXMuYXBpc1thcGlOYW1lXVxyXG4gICAgICBsZWFjaCA9IHRoaXMubGVhY2hbYXBpTmFtZV1cclxuICAgIH1cclxuXHJcbiAgICAvLyDliKTmlq3mmK/lkKbmib7liLDlr7nlupQgYXBpXHJcbiAgICBpZiAoIWFwaSkgcmV0dXJuIGNyZWF0ZUVycm9yKGBhcGkgJHthcGlOYW1lfSBkb2VzIG5vdCBleGlzdDsg5o6l5Y+jICR7YXBpTmFtZX0g5LiN5a2Y5ZyoYCwgRXJyb3JUeXBlLkZBSUwsIHRydWUpXHJcblxyXG4gICAgLy8g5rex5aSN5Yi2IGFwaVxyXG4gICAgYXBpID0gdXRpbHMuZGVlcENvcHkoYXBpKVxyXG5cclxuICAgIC8vIOWwhiBhcGkubWV0aG9kIOeahOWAvO+8jOi9rOS4uuiLseaWh+Wwj+WGmSwgbWV0aG9kIOWtmOWcqO+8jOm7mOiupOiwg+eUqCBnZXRcclxuICAgIGFwaS5tZXRob2QgPSAhYXBpLm1ldGhvZCA/ICdnZXQnIDogYXBpLm1ldGhvZC50b0xvd2VyQ2FzZSgpXHJcbiAgICAvLyDlkIjlubYgYmFzZVVybCDlkowgYXBpLnVybFxyXG4gICAgYXBpLnVybCA9IGAke2Jhc2VVcmx9JHthcGkudXJsfWBcclxuICAgIC8vIOWQiOW5tiBoZWFkZXJzIOWSjCBhcGkuaGVhZGVyc1xyXG4gICAgaGVhZGVycyA9IHtcclxuICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgLi4uYXBpLmhlYWRlcnNcclxuICAgIH1cclxuICAgIC8vIOWIoOmZpCBhcGkuaGVhZGVyc1xyXG4gICAgZGVsZXRlIGFwaS5oZWFkZXJzXHJcblxyXG4gICAgLy8g5ZCI5bm26YWN572u6aG5XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIGFwaU5hbWUsXHJcbiAgICAgIGhlYWRlcnMsXHJcbiAgICAgIGxlYWNoLFxyXG4gICAgICAuLi5hcGksXHJcbiAgICB9XHJcbiAgICAvLyBkYXRhIC8gaW50ZXJjZXB0b3JSZXF1ZXN0IC8gaW50ZXJjZXB0b3JSZXNwb25zZSDlrZjlnKjvvIzliJnmt7vliqDliLAgY29uZmlnIOS4ilxyXG4gICAgaWYgKGRhdGEpIGNvbmZpZy5kYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKGRhdGEpXHJcbiAgICBpZiAoaW50ZXJjZXB0b3JSZXF1ZXN0KSBjb25maWcuaW50ZXJjZXB0b3JSZXF1ZXN0ID0gaW50ZXJjZXB0b3JSZXF1ZXN0XHJcbiAgICBpZiAoaW50ZXJjZXB0b3JSZXNwb25zZSkgY29uZmlnLmludGVyY2VwdG9yUmVzcG9uc2UgPSBpbnRlcmNlcHRvclJlc3BvbnNlXHJcblxyXG4gICAgLy8g6L+U5ZueXHJcbiAgICByZXR1cm4gY29uZmlnXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDovazmjaLor7fmsYLmlbDmja5cclxuICAgKiBAcGFyYW0gZGF0YSBcclxuICAgKi9cclxuICB0cmFuc2Zvcm1EYXRhIChkYXRhKSB7XHJcbiAgICAvLyDnibnmrorlr7nosaHvvIznm7TmjqXov5Tlm55cclxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XHJcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcclxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcclxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XHJcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBkYXRhXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pmu6YCa5a+56LGh77yM6L2s5Li6IEpTT04g5a2X56ym5LiyXHJcbiAgICBpZiAoIHV0aWxzLmlzT2JqZWN0KGRhdGEpICkge1xyXG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKrnn6Xmg4XlhrXvvIznm7TmjqXov5Tlm55cclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXRyb2wiLCJpbXBvcnQgTmV0cm9sIGZyb20gJy4vY29yZS9OZXRyb2wnXHJcbmltcG9ydCB7IE5ldHJvbE9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvaW5kZXgnXHJcbi8qKlxyXG4gKiDliJvlu7rkuIDkuKogbmV0cm9sIOWunuS+i1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdGlvbnM6IE5ldHJvbE9wdGlvbnMpOiBGdW5jdGlvbiB7XHJcbiAgbGV0IG5ldHJvbCA9IG5ldyBOZXRyb2wob3B0aW9ucylcclxuICByZXR1cm4gKGFwaU5hbWU6IHN0cmluZywgZGF0YTogb2JqZWN0KSA9PiB7XHJcbiAgICByZXR1cm4gbmV0cm9sLnJlcXVlc3QoYXBpTmFtZSwgZGF0YSlcclxuICB9XHJcbn0iLCJpbXBvcnQgY2F0Y2hlciBmcm9tICdAL2NvcmUvY2F0Y2hlcidcclxuLyoqXHJcbiAqIOWvueWkluaatOmcsuaNleiOt+aWueazlVxyXG4gKiBAcGFyYW0gY29kZSDnirbmgIHnoIFcclxuICogQHBhcmFtIGV4ZWMg5omn6KGM5Ye95pWwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29kZTogbnVtYmVyLCBleGVjOiBGdW5jdGlvbikge1xyXG4gIGNhdGNoZXIuY2F0Y2goY29kZSwgZXhlYylcclxufSIsImltcG9ydCBjcmVhdGUgZnJvbSAnLi9zcmMvY3JlYXRlJ1xyXG5pbXBvcnQgdG9DYXRjaCBmcm9tICcuL3NyYy90b0NhdGNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZSxcclxuICB0b0NhdGNoLFxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZSxcclxuICB0b0NhdGNoLFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==