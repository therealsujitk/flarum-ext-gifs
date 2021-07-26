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

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./src/forum/components/GIFModal.js":
/*!******************************************!*\
  !*** ./src/forum/components/GIFModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GIFModal; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HomeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeButton */ "./src/forum/components/HomeButton.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ResultButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ResultButton */ "./src/forum/components/ResultButton.js");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__);









var prefix = 'therealsujitk-gifs';
var ENGINE_GIPHY = 'giphy';
var ENGINE_TENOR = 'tenor';
var CATEGORY_HOME = 'home';
var CATEGORY_FAVOURITE = 'favourite';
var CATEGORY_TRENDING = 'trending';
var CATEGORY_RESULT = 'result';

var GIFModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GIFModal, _Modal);

  function GIFModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = GIFModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.textArea = this.attrs.textArea;
    this.baseUrl = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute('baseUrl');
    this.engine = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute(prefix + ".engine");
    this.apiKey = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute(prefix + ".api_key");
    this.Engine = this.getEngine();
    this.Engine.initialize(this.apiKey);
    this.isHomeVisible = true;
    this.isFavouritesVisible = false;
    this.isTrendingVisible = false;
    this.isResultsVisible = false;
    this.category = '';
    this.query = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()('');
    this.next = null;
    this.favourites = new Set();
    this.homeButtons = new Array();
    this.favouriteButtons = new Array();
    this.resultButtons = new Array();
    this.loadHomePage();
    this.loadFavouritesPage();
    this.loading = false;
    this.reachedEnd = false;
  };

  _proto.className = function className() {
    return prefix + "-modal";
  };

  _proto.title = function title() {
    return 'Select a GIF to add to your post';
  }
  /**
   * The body has four categories. HOME, FAVOURITES, TRENDING, RESULTS
   * TRENDING and RESULTS use the same container
   */
  ;

  _proto.content = function content() {
    var _this = this;

    return m("div", {
      className: "Modal-body"
    }, m("div", {
      style: "display: flex;"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: prefix + "-back-button",
      className: "Button Button--icon hasIcon",
      style: !this.isHomeVisible ? '' : 'display: none',
      icon: "fas fa-long-arrow-alt-left",
      onclick: this.showHome.bind(this)
    }), m("span", {
      id: prefix + "-category",
      style: this.isFavouritesVisible || this.isTrendingVisible ? '' : 'display: none'
    }, this.category && this.category), m("div", {
      id: prefix + "-search-input",
      className: "Search-input",
      style: this.isHomeVisible || this.isResultsVisible ? '' : 'display: none'
    }, m("input", {
      className: "FormControl",
      placeholder: this.getPlaceholder(),
      value: this.query(),
      bidi: this.query,
      onkeydown: this.onkeydown.bind(this)
    })), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: prefix + "-search-button",
      className: "Button Button--primary",
      style: this.isHomeVisible || this.isResultsVisible ? '' : 'display: none',
      onclick: function onclick() {
        _this.resetResultsPage();

        _this.loadResultsPage();
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans(prefix + ".forum.search"))), m("div", {
      className: prefix + "-container",
      style: this.isHomeVisible ? '' : 'display: none'
    }, this.homeButtons && this.homeButtons.map(function (homeButton) {
      return m(_HomeButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: homeButton
      });
    })), m("div", {
      className: prefix + "-container",
      style: this.isFavouritesVisible ? '' : 'display: none',
      scrollTop: this.isTrendingVisible || this.isResultsVisible ? '0' : ''
    }, this.favouriteButtons && this.favouriteButtons.map(function (favouriteButton) {
      return m(_ResultButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        attributes: favouriteButton
      });
    }), m("span", {
      id: prefix + "-end"
    }, "You've reached the end")), m("div", {
      className: prefix + "-container",
      style: this.isTrendingVisible || this.isResultsVisible ? '' : 'display: none',
      onscroll: this.loadMore.bind(this),
      scrollTop: this.isTrendingVisible || this.isResultsVisible ? '0' : ''
    }, this.resultButtons && this.resultButtons.map(function (resultButton) {
      return m(_ResultButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        attributes: resultButton
      });
    }), m("span", {
      id: prefix + "-end"
    }, "You've reached the end")), m("div", {
      id: prefix + "-footer"
    }, m("img", {
      src: this.baseUrl + "/assets/extensions/therealsujitk-gifs/powered_by_" + this.engine + ".svg"
    })));
  };

  _proto.getEngine = function getEngine() {
    if (this.engine === ENGINE_TENOR) {
      return __webpack_require__(/*! ../helpers/Tenor */ "./src/forum/helpers/Tenor.js");
    } else {
      return __webpack_require__(/*! ../helpers/Giphy */ "./src/forum/helpers/Giphy.js");
    }
  };

  _proto.getPlaceholder = function getPlaceholder() {
    if (this.engine == ENGINE_TENOR) {
      return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans(prefix + ".forum.searchTenor");
    } else {
      return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans(prefix + ".forum.searchGiphy");
    }
  };

  _proto.showHome = function showHome() {
    this.isFavouritesVisible = false;
    this.isTrendingVisible = false;
    this.isResultsVisible = false;
    this.isHomeVisible = true;
    this.query('');
    this.resetResultsPage();
  };

  _proto.showFavourites = function showFavourites() {
    this.isHomeVisible = false;
    this.isResultsVisible = false;
    this.isTrendingVisible = false;
    this.isFavouritesVisible = true;
    this.category = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans(prefix + ".forum.favourites");
  };

  _proto.showTrending = function showTrending() {
    this.isHomeVisible = false;
    this.isFavouritesVisible = false;
    this.isResultsVisible = false;
    this.isTrendingVisible = true;
    this.category = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans(prefix + ".forum.trending");
  };

  _proto.showResults = function showResults() {
    this.isHomeVisible = false;
    this.isFavouritesVisible = false;
    this.isTrendingVisible = false;
    this.isResultsVisible = true;
  };

  _proto.loadHomePage = /*#__PURE__*/function () {
    var _loadHomePage = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var _this2 = this;

      var favouritesButton, trendingButton, trendingTerms, i, button;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              favouritesButton = {
                title: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans(prefix + ".forum.favourites"),
                icon: 'fas fa-star',
                onclick: function onclick() {
                  _this2.showFavourites();
                }
              };
              trendingButton = {
                title: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans(prefix + ".forum.trending"),
                icon: 'fas fa-chart-line',
                onclick: function onclick() {
                  _this2.loadTrendingPage();
                }
              };
              this.injectGIFs(null, 1, CATEGORY_HOME, 1); // Background for the trending button

              this.homeButtons.push(favouritesButton, trendingButton);
              _context.next = 6;
              return this.Engine.getTrendingTerms();

            case 6:
              trendingTerms = _context.sent;

              for (i = 0; i < trendingTerms.length; ++i) {
                button = {
                  title: trendingTerms[i],
                  onclick: function onclick(e) {
                    _this2.query(e.target.innerText);

                    _this2.loadResultsPage();
                  }
                };
                this.injectGIFs(trendingTerms[i], this.homeButtons.length, CATEGORY_HOME, 1);
                this.homeButtons.push(button);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadHomePage() {
      return _loadHomePage.apply(this, arguments);
    }

    return loadHomePage;
  }();

  _proto.loadFavouritesPage = /*#__PURE__*/function () {
    var _loadFavouritesPage = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var _this3 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.find(prefix).then(function (response) {
                var gifIDs = '';
                response.forEach(function (el) {
                  var gifID = el.data.attributes.gifID;
                  gifIDs = "" + gifIDs + gifID + ",";

                  _this3.favouriteButtons.push({});

                  _this3.favourites.add(gifID);
                });
                gifIDs = gifIDs.slice(0, -1);

                _this3.injectGIFs(gifIDs, 0, CATEGORY_FAVOURITE, response.length);
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function loadFavouritesPage() {
      return _loadFavouritesPage.apply(this, arguments);
    }

    return loadFavouritesPage;
  }();

  _proto.loadTrendingPage = /*#__PURE__*/function () {
    var _loadTrendingPage = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var i, button, startIndex;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.showTrending();

              for (i = 0; i < this.Engine.getLimit(); ++i) {
                button = {};
                this.resultButtons.push(button);
              }

              startIndex = this.resultButtons.length - this.Engine.getLimit();
              this.injectGIFs(null, startIndex, CATEGORY_TRENDING, null);
              this.loading = false;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function loadTrendingPage() {
      return _loadTrendingPage.apply(this, arguments);
    }

    return loadTrendingPage;
  }();

  _proto.loadResultsPage = /*#__PURE__*/function () {
    var _loadResultsPage = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      var i, button, startIndex;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this.showResults();

              for (i = 0; i < this.Engine.getLimit(); ++i) {
                button = {};
                this.resultButtons.push(button);
              }

              startIndex = this.resultButtons.length - this.Engine.getLimit();
              this.injectGIFs(this.query(), startIndex, CATEGORY_RESULT, null);
              this.loading = false;

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function loadResultsPage() {
      return _loadResultsPage.apply(this, arguments);
    }

    return loadResultsPage;
  }();

  _proto.resetResultsPage = function resetResultsPage() {
    this.$("." + prefix + "-container").eq(2).animate({
      scrollTop: 0
    });
    this.resultButtons = new Array();
    this.next = null;
    this.loading = false;
    this.reachedEnd = false;
  };

  _proto.loadMore = function loadMore(e) {
    if (!this.isResultsVisible && !this.isTrendingVisible || this.loading || this.reachedEnd) {
      return;
    }

    if (e.target.scrollTop >= e.target.scrollHeight - e.target.offsetHeight - 200) {
      this.loading = true;

      if (this.isResultsVisible) {
        this.loadResultsPage();
      } else {
        this.loadTrendingPage();
      }
    }
  }
  /**
   * This function is sets the GIF id, title and url
   * after it has been added to the DOM window
   *
   * @param   {string|null}   t               query, gif ids or null
   * @param   {number}        startIndex      start index to set the properties
   * @param   {string}        category        the category of the button
   * @param   {number|null}   limit           the number of GIFs to be loaded
   */
  ;

  _proto.injectGIFs =
  /*#__PURE__*/
  function () {
    var _injectGIFs = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(t, startIndex, category, limit) {
      var _this4 = this;

      var gifs, obj, i, gif, button;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(category === CATEGORY_FAVOURITE)) {
                _context6.next = 6;
                break;
              }

              _context6.next = 3;
              return this.Engine.getGIFsByIDs(t);

            case 3:
              gifs = _context6.sent;
              _context6.next = 19;
              break;

            case 6:
              if (!(category === CATEGORY_TRENDING || t == null)) {
                _context6.next = 14;
                break;
              }

              _context6.next = 9;
              return this.Engine.getTrendingGIFs(this.next, limit);

            case 9:
              obj = _context6.sent;
              gifs = obj.gifs;
              !limit && (this.next = obj.next);
              _context6.next = 19;
              break;

            case 14:
              _context6.next = 16;
              return this.Engine.getGIFs(t, this.next, limit);

            case 16:
              obj = _context6.sent;
              gifs = obj.gifs;
              !limit && (this.next = obj.next);

            case 19:
              i = 0;

            case 20:
              if (!(i < (limit || this.Engine.getLimit()))) {
                _context6.next = 37;
                break;
              }

              if (!(gifs[i] === undefined)) {
                _context6.next = 25;
                break;
              }

              if (category === CATEGORY_FAVOURITE) {
                this.favouriteButtons.splice(startIndex + i);
              } else if (category === CATEGORY_RESULT) {
                this.resultButtons.splice(startIndex + i);
              }

              this.reachedEnd = true;
              return _context6.abrupt("break", 37);

            case 25:
              gif = this.Engine.extractGIF(gifs[i]);
              button = {};
              button.id = gif.id;
              button.title = gif.title;
              button.url = gif.url;
              button.isFavourite = this.favourites.has(gif.id);

              button.onclick = function (e, id) {
                var title = e.target.alt;
                var url = e.target.src;
                var embed = "![" + _this4.engine[0].toUpperCase() + _this4.engine.slice(1) + " - " + title + "](" + url + ")";

                _this4.textArea.insertAtCursor(embed);

                flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.modal.close(); // For the Tenor API, it is required to register the shared GIF

                if (_this4.engine === ENGINE_TENOR) {
                  var url = "https://g.tenor.com/v1/registershare?&key=" + _this4.apiKey + (_this4.query() != '' ? "&q=" + _this4.query() : '') + "&id=" + id;
                  fetch(url);
                }
              };

              button.favourite = /*#__PURE__*/function () {
                var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(id) {
                  var result;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          result = false;

                          if (!_this4.favourites.has(id)) {
                            _context5.next = 6;
                            break;
                          }

                          _context5.next = 4;
                          return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.request({
                            method: 'DELETE',
                            url: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute('apiUrl') + "/" + prefix + "/" + id
                          }).then(function () {
                            var index = _this4.favouriteButtons.findIndex(function (el) {
                              return el.id === id;
                            });

                            _this4.favouriteButtons.splice(index, 1);

                            _this4.favourites["delete"](id);

                            if (_this4.favouriteButtons.length == 0) {
                              delete _this4.homeButtons[0].url;
                            } else {
                              _this4.homeButtons[0].url = _this4.favouriteButtons[0].url;
                            }

                            result = true;
                          });

                        case 4:
                          _context5.next = 8;
                          break;

                        case 6:
                          _context5.next = 8;
                          return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.createRecord(prefix).save({
                            gifID: id
                          }).then(function () {
                            _this4.favouriteButtons.unshift({});

                            _this4.injectGIFs(id, 0, CATEGORY_FAVOURITE, 1);

                            _this4.favourites.add(id);

                            result = true;
                          });

                        case 8:
                          return _context5.abrupt("return", result);

                        case 9:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x5) {
                  return _ref.apply(this, arguments);
                };
              }();

              if (category === CATEGORY_HOME) {
                this.homeButtons[startIndex + i].url = gif.url;
              } else if (category === CATEGORY_FAVOURITE) {
                Object.assign(this.favouriteButtons[startIndex + i], button);

                if (startIndex + i == 0) {
                  this.homeButtons[0].url = gif.url;
                }
              } else {
                Object.assign(this.resultButtons[startIndex + i], button);
              }

            case 34:
              ++i;
              _context6.next = 20;
              break;

            case 37:
              m.redraw();

            case 38:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function injectGIFs(_x, _x2, _x3, _x4) {
      return _injectGIFs.apply(this, arguments);
    }

    return injectGIFs;
  }();

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
  };

  _proto.onkeydown = function onkeydown(e) {
    if (e.key === 'Enter') {
      this.query(this.query().trim());

      if (this.query() === '') {
        this.showHome();
      } else {
        this.resetResultsPage();
        this.loadResultsPage();
      }
    }
  };

  return GIFModal;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_6___default.a);



/***/ }),

/***/ "./src/forum/components/HomeButton.js":
/*!********************************************!*\
  !*** ./src/forum/components/HomeButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuggestionButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);



var SuggestionButton = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SuggestionButton, _Component);

  function SuggestionButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SuggestionButton.prototype;

  _proto.view = function view() {
    var attrs = this.attrs.attributes;
    var title = attrs.title;
    var url = attrs.url;
    var icon = attrs.icon;
    var onclick = attrs.onclick;
    return m("div", {
      style: url && "background-image: url(" + url + ")",
      onclick: onclick
    }, icon && m("i", {
      "class": icon
    }), "  ", title);
  };

  return SuggestionButton;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/ResultButton.js":
/*!**********************************************!*\
  !*** ./src/forum/components/ResultButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultButton; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__);







var prefix = 'therealsujitk-gifs';

var ResultButton = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ResultButton, _Component);

  function ResultButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ResultButton.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.loading = false;
    this.hidden = true; // Hide the image until the height has been adjusted

    this.rowSpan = Math.random() * 15 + 25; // The number of rows the button covers (random before loading)

    this.id;
  };

  _proto.view = function view() {
    var _this = this;

    var attrs = this.attrs.attributes;
    this.id = attrs.id;
    this.favourite = attrs.favourite;
    var title = attrs.title;
    var url = attrs.url;
    var _onclick = attrs.onclick;
    return m("div", {
      style: this.rowSpan && "grid-row-end: span " + Math.round(this.rowSpan)
    }, m("img", {
      alt: title,
      src: url,
      style: this.hidden ? 'visibility: hidden' : '',
      onclick: function onclick(e) {
        _onclick(e, _this.id);
      },
      onload: this.setRowSpan.bind(this)
    }), m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
      showOnFocus: false,
      text: !attrs.isFavourite ? flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans(prefix + ".forum.addFavourite") : flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans(prefix + ".forum.removeFavourite")
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "Button Button--icon hasIcon",
      style: this.hidden ? 'visibility: hidden' : '',
      icon: !this.loading ? attrs.isFavourite ? 'fas fa-star' : 'far fa-star' : '',
      loading: this.loading,
      onclick: this.handleFavourite.bind(this)
    })));
  };

  _proto.setRowSpan = function setRowSpan(e) {
    this.rowSpan = e.target.height / 5 + 2;
    this.hidden = false;
  };

  _proto.handleFavourite = /*#__PURE__*/function () {
    var _handleFavourite = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.loading = true;
              _context.next = 3;
              return this.favourite(this.id);

            case 3:
              result = _context.sent;

              if (result) {
                this.attrs.attributes.isFavourite = !this.attrs.attributes.isFavourite;
              }

              this.loading = false;
              m.redraw();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleFavourite() {
      return _handleFavourite.apply(this, arguments);
    }

    return handleFavourite;
  }();

  return ResultButton;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/forum/helpers/Giphy.js":
/*!************************************!*\
  !*** ./src/forum/helpers/Giphy.js ***!
  \************************************/
/*! exports provided: initialize, getTrendingTerms, getTrendingGIFs, getGIFs, getGIFsByIDs, extractGIF, getLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrendingTerms", function() { return getTrendingTerms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrendingGIFs", function() { return getTrendingGIFs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGIFs", function() { return getGIFs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGIFsByIDs", function() { return getGIFsByIDs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractGIF", function() { return extractGIF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLimit", function() { return getLimit; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


function initialize(apiKey) {
  this.baseUrl = 'https://api.giphy.com/v1';
  this.defaultLimit = 10;
  this.apiKey = apiKey;
}
function getTrendingTerms() {
  return _getTrendingTerms.apply(this, arguments);
}

function _getTrendingTerms() {
  _getTrendingTerms = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var terms, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = this.baseUrl + "/trending/searches?api_key=" + this.apiKey;
            _context.next = 3;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (content) {
              if (content.data === undefined) {
                console.error('Sorry, there was something wrong with the Giphy API Key.');
                return;
              }

              terms = content.data;
            });

          case 3:
            return _context.abrupt("return", terms);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getTrendingTerms.apply(this, arguments);
}

function getTrendingGIFs(_x, _x2) {
  return _getTrendingGIFs.apply(this, arguments);
}

function _getTrendingGIFs() {
  _getTrendingGIFs = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(offset, limit) {
    var _this = this;

    var obj, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = this.baseUrl + "/gifs/trending?api_key=" + this.apiKey + "&limit=" + (limit || this.defaultLimit) + (offset ? "&offset=" + offset : '');
            _context2.next = 3;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (content) {
              if (content.data === undefined) {
                console.error('Sorry, there was something wrong with the Tenor API Key.');
                return;
              }

              obj = {
                gifs: content.data,
                next: offset + (limit || _this.defaultLimit)
              };
            });

          case 3:
            return _context2.abrupt("return", obj);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getTrendingGIFs.apply(this, arguments);
}

function getGIFs(_x3, _x4, _x5) {
  return _getGIFs.apply(this, arguments);
}

function _getGIFs() {
  _getGIFs = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(query, offset, limit) {
    var _this2 = this;

    var obj, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = this.baseUrl + "/gifs/search?api_key=" + this.apiKey + "&q=" + query + "&limit=" + (limit || this.defaultLimit) + (offset ? "&offset=" + offset : '');
            _context3.next = 3;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (content) {
              if (content.data === undefined) {
                console.error('Sorry, there was something wrong with the Tenor API Key.');
                return;
              }

              obj = {
                gifs: content.data,
                next: offset + (limit || _this2.defaultLimit)
              };
            });

          case 3:
            return _context3.abrupt("return", obj);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getGIFs.apply(this, arguments);
}

function getGIFsByIDs(_x6) {
  return _getGIFsByIDs.apply(this, arguments);
}

function _getGIFsByIDs() {
  _getGIFsByIDs = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(ids) {
    var gifs, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = this.baseUrl + "/gifs?api_key=" + this.apiKey + "&ids=" + ids;
            _context4.next = 3;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (content) {
              gifs = content.data;
            });

          case 3:
            return _context4.abrupt("return", gifs);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getGIFsByIDs.apply(this, arguments);
}

function extractGIF(gif) {
  return {
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url
  };
}
function getLimit() {
  return this.defaultLimit;
}

/***/ }),

/***/ "./src/forum/helpers/Tenor.js":
/*!************************************!*\
  !*** ./src/forum/helpers/Tenor.js ***!
  \************************************/
/*! exports provided: initialize, getTrendingTerms, getTrendingGIFs, getGIFs, getGIFsByIDs, extractGIF, getLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrendingTerms", function() { return getTrendingTerms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrendingGIFs", function() { return getTrendingGIFs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGIFs", function() { return getGIFs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGIFsByIDs", function() { return getGIFsByIDs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractGIF", function() { return extractGIF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLimit", function() { return getLimit; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


function initialize(apiKey) {
  this.baseUrl = 'https://g.tenor.com/v1';
  this.defaultLimit = 10;
  this.apiKey = apiKey;
}
function getTrendingTerms() {
  return _getTrendingTerms.apply(this, arguments);
}

function _getTrendingTerms() {
  _getTrendingTerms = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var terms, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = this.baseUrl + "/trending_terms?key=" + this.apiKey;
            _context.next = 3;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (content) {
              if (content.results === undefined) {
                console.error('Sorry, there was something wrong with the Tenor API Key.');
                return;
              }

              terms = content.results;
            });

          case 3:
            return _context.abrupt("return", terms);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getTrendingTerms.apply(this, arguments);
}

function getTrendingGIFs(_x, _x2) {
  return _getTrendingGIFs.apply(this, arguments);
}

function _getTrendingGIFs() {
  _getTrendingGIFs = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(pos, limit) {
    var obj, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = this.baseUrl + "/trending?key=" + this.apiKey + "&media_filter=minimal&limit=" + (limit || this.defaultLimit) + (pos ? "&pos=" + pos : '');
            _context2.next = 3;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (content) {
              if (content.results === undefined) {
                console.error('Sorry, there was something wrong with the Tenor API Key.');
                return;
              }

              obj = {
                gifs: content.results,
                next: content.next
              };
            });

          case 3:
            return _context2.abrupt("return", obj);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getTrendingGIFs.apply(this, arguments);
}

function getGIFs(_x3, _x4, _x5) {
  return _getGIFs.apply(this, arguments);
}

function _getGIFs() {
  _getGIFs = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(query, pos, limit) {
    var obj, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = this.baseUrl + "/search?key=" + this.apiKey + "&q=" + query + "&media_filter=minimal&limit=" + (limit || this.defaultLimit) + (pos ? "&pos=" + pos : '');
            _context3.next = 3;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (content) {
              if (content.results === undefined) {
                console.error('Sorry, there was something wrong with the Tenor API Key.');
                return;
              }

              obj = {
                gifs: content.results,
                next: content.next
              };
            });

          case 3:
            return _context3.abrupt("return", obj);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getGIFs.apply(this, arguments);
}

function getGIFsByIDs(_x6) {
  return _getGIFsByIDs.apply(this, arguments);
}

function _getGIFsByIDs() {
  _getGIFsByIDs = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(ids) {
    var gifs, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = this.baseUrl + "/gifs?key=" + this.apiKey + "&ids=" + ids + "&media_filter=minimal";
            _context4.next = 3;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (content) {
              gifs = content.results;
            });

          case 3:
            return _context4.abrupt("return", gifs);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getGIFsByIDs.apply(this, arguments);
}

function extractGIF(gif) {
  return {
    id: gif.id,
    title: gif.title,
    url: gif.media[0].gif.url
  };
}
function getLimit() {
  return this.defaultLimit;
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/TextEditorButton */ "flarum/common/components/TextEditorButton");
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GIFModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/GIFModal */ "./src/forum/components/GIFModal.js");
/* harmony import */ var _models_GIF__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/GIF */ "./src/forum/models/GIF.js");






var prefix = 'therealsujitk-gifs';
flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add(prefix, function () {
  flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.models[prefix] = _models_GIF__WEBPACK_IMPORTED_MODULE_5__["default"];
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'toolbarItems', function (items) {
    var _this = this;

    items.add('my-item', m(flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: prefix + "-toolbar-item",
      className: "Button Button--icon Button--link hasIcon",
      title: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(prefix + ".forum.label"),
      onclick: function onclick() {
        return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(_components_GIFModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
          textArea: _this.attrs.composer.editor
        });
      }
    }, m("svg", {
      id: "therealsujitk-gifs-toolbar-item",
      xmlns: "http://www.w3.org/2000/svg",
      xlink: "http://www.w3.org/1999/xlink",
      width: "16pt",
      height: "7pt",
      viewBox: "0 0 16 7",
      version: "1.1"
    }, m("g", null, m("path", {
      d: "M 0.78125 7.042969 C 0.496094 6.933594 0.265625 6.738281 0.132812 6.480469 L 0 6.234375 L 0 0.875 L 0.132812 0.625 C 0.277344 0.355469 0.558594 0.128906 0.847656 0.0429688 C 0.957031 0.015625 1.71875 0 2.917969 0.0078125 L 4.808594 0.0234375 L 5.050781 0.15625 C 5.21875 0.246094 5.332031 0.355469 5.425781 0.511719 C 5.597656 0.800781 5.648438 0.992188 5.648438 1.410156 L 5.648438 1.753906 L 1.65625 1.753906 L 1.65625 5.355469 L 3.96875 5.355469 L 3.96875 3.554688 L 5.648438 3.554688 L 5.648438 4.800781 C 5.648438 5.484375 5.628906 6.117188 5.605469 6.207031 C 5.523438 6.527344 5.308594 6.808594 5.050781 6.953125 L 4.808594 7.085938 L 2.878906 7.09375 C 1.339844 7.105469 0.917969 7.09375 0.78125 7.042969 Z M 0.78125 7.042969",
      fill: "currentColor"
    }), m("path", {
      d: "M 7.371094 3.554688 L 7.371094 0 L 9.050781 0 L 9.050781 7.109375 L 7.371094 7.109375 Z M 7.371094 3.554688",
      fill: "currentColor"
    }), m("path", {
      d: "M 10.773438 3.554688 L 10.773438 0 L 15.855469 0 L 15.855469 1.753906 L 12.453125 1.753906 L 12.453125 2.988281 L 14.722656 2.988281 L 14.722656 4.742188 L 12.453125 4.742188 L 12.453125 7.109375 L 10.773438 7.109375 Z M 10.773438 3.554688",
      fill: "currentColor"
    })))));
  });
});

/***/ }),

/***/ "./src/forum/models/GIF.js":
/*!*********************************!*\
  !*** ./src/forum/models/GIF.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GIF; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);



var GIF = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GIF, _Model);

  function GIF() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.gifID = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('gifID');
    return _this;
  }

  return GIF;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/TextEditorButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditorButton']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/TextEditorButton'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map