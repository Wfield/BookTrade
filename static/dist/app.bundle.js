/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "vendor.bundle.js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(/*! crypt */ "./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js"),
      bin = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/global.js */ "./C:/Users/Administrator/AppData/Roaming/npm/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./src/Actions/actionTypes.js":
/*!************************************!*\
  !*** ./src/Actions/actionTypes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_ALL_LIST = exports.FETCH_ALL_LIST = 'FETCH_ALL_LIST';
var FETCH_USER_LIST = exports.FETCH_USER_LIST = 'FETCH_USER_LIST';
var SET_USER_ID = exports.SET_USER_ID = 'SET_USER_ID';
var AUTH = exports.AUTH = 'AUTH';
var UNAUTH = exports.UNAUTH = 'UNAUTH';
var REGISTERED = exports.REGISTERED = 'REGISTERED';
var UNREGISTER = exports.UNREGISTER = 'UNREGISTER';
var PUBLISHED_BOOK = exports.PUBLISHED_BOOK = 'PUBLISHED_BOOK';
var IMG_ERROR = exports.IMG_ERROR = 'IMG_ERROR';
var DELETE_BOOK = exports.DELETE_BOOK = 'DELETE_BOOK';
var WANTED_BOOK = exports.WANTED_BOOK = 'WANTED_BOOK';
var REQUEST_BOOK = exports.REQUEST_BOOK = 'REQUEST_BOOK';
var AGREED_TRADE = exports.AGREED_TRADE = 'AGREED_TRADE';
var PROFILE_CHANGED = exports.PROFILE_CHANGED = 'PROFILE_CHANGED';
var PASSWORD_CHANGED = exports.PASSWORD_CHANGED = 'PASSWORD_CHANGED';
var ALERT_MESSAGE = exports.ALERT_MESSAGE = 'ALERT_MESSAGE';
var CLOSE_ALERT = exports.CLOSE_ALERT = 'CLOSE_ALERT';

/***/ }),

/***/ "./src/Actions/fetch.js":
/*!******************************!*\
  !*** ./src/Actions/fetch.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _requset;

var _index = __webpack_require__(/*! ./index */ "./src/Actions/index.js");

function _requset(dispatch, endAction, params, method, info) {
	//https://frozen-cliffs-58040.herokuapp.com/
	//http://localhost:9000
	var url = 'https://frozen-cliffs-58040.herokuapp.com/api/' + params;
	var options = method ? {
		method: method,
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(info)
	} : null;
	//console.log(url, options);
	fetch(url, options).then(function (res) {
		if (res.ok) {
			return res;
		}
		throw new Error(res.statusTest);
	}).then(function (rowData) {
		return rowData.json();
	}).then(function (data) {
		if (data.type == 0) {
			throw new Error(data.content);
		} else if (data.type == 2) {
			dispatch((0, _index.Alert)(data.content)); //content.alertType: 1: login 2: passwordchange  3: no book 4:profile  5: publish
		} else {
			//  6: delete book  7: agree
			//console.log(data.content);
			dispatch(endAction(data.content));
			if (params == 'login' || params == 'register') {
				dispatch((0, _index.Auth)());
			}
		}
	}).catch(function (err) {
		console.log(err);
	});
}

/***/ }),

/***/ "./src/Actions/index.js":
/*!******************************!*\
  !*** ./src/Actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CloseAlert = exports.Alert = exports.OldPasswordVaild = exports.PasswordChanged = exports.GetProfile = exports.ChangeProfile = exports.ProfileChanged = exports.AgreeTrade = exports.Agreed = exports.RequestMe = exports.MyRequest = exports.BookRequst = exports.ImgError = exports.WantBook = exports.Wanted = exports.Delete = exports.Deleted = exports.Published = exports.Publish = exports.Register = exports.Login = exports.unRegister = exports.Registered = exports.unAuth = exports.Auth = exports.userInfo = exports.fetchUserBooks = exports.fetchUserBooksEnd = exports.fetchAllBooks = exports.fetchAllBooksEnd = undefined;

var _fetch = __webpack_require__(/*! ./fetch */ "./src/Actions/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

var _actionTypes = __webpack_require__(/*! ./actionTypes */ "./src/Actions/actionTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAllBooksEnd = exports.fetchAllBooksEnd = function fetchAllBooksEnd() {
	var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return {
		type: _actionTypes.FETCH_ALL_LIST,
		data: data
	};
};
var fetchAllBooks = exports.fetchAllBooks = function fetchAllBooks() {
	//函数最终dispatch一个action
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, fetchAllBooksEnd, 'allbooks');
	};
};
var fetchUserBooksEnd = exports.fetchUserBooksEnd = function fetchUserBooksEnd() {
	var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	return {
		type: _actionTypes.FETCH_USER_LIST,
		data: data
	};
};
var fetchUserBooks = exports.fetchUserBooks = function fetchUserBooks(username) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, fetchUserBooksEnd, 'user/' + username + '/mybooks');
	};
};
var userInfo = exports.userInfo = function userInfo(info) {
	return {
		type: _actionTypes.SET_USER_ID,
		userInfo: info
	};
};
var Auth = exports.Auth = function Auth() {
	return {
		type: _actionTypes.AUTH
	};
};
var unAuth = exports.unAuth = function unAuth() {
	return {
		type: _actionTypes.UNAUTH
	};
};
var Registered = exports.Registered = function Registered() {
	return {
		type: _actionTypes.REGISTERED
	};
};
var unRegister = exports.unRegister = function unRegister() {
	return {
		type: _actionTypes.UNREGISTER
	};
};
var Login = exports.Login = function Login(info) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, userInfo, 'login', 'POST', info);
	};
};
var Register = exports.Register = function Register(info) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, userInfo, 'register', 'POST', info);
	};
};
var Publish = exports.Publish = function Publish(info) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, Published, 'user/' + info.creator + '/publish', 'POST', info);
	};
};
var Published = exports.Published = function Published(info) {
	return {
		type: _actionTypes.PUBLISHED_BOOK,
		creator: info.creator,
		name: info.name,
		src: info.src
	};
};
var Deleted = exports.Deleted = function Deleted(content) {
	return {
		type: _actionTypes.DELETE_BOOK,
		content: content
	};
};
var Delete = exports.Delete = function Delete(id) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, Deleted, 'deletebook', 'DELETE', id);
	};
};
var Wanted = exports.Wanted = function Wanted(message) {
	return {
		type: _actionTypes.WANTED_BOOK,
		content: message
	};
};
var WantBook = exports.WantBook = function WantBook(info) {
	//{bookId: bookId, username: username}
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, Wanted, 'wantbook', 'POST', info);
	};
};
var ImgError = exports.ImgError = function ImgError() {
	return {
		type: _actionTypes.IMG_ERROR
	};
};
var BookRequst = exports.BookRequst = function BookRequst(list) {
	return {
		type: _actionTypes.REQUEST_BOOK,
		requestList: list
	};
};
var MyRequest = exports.MyRequest = function MyRequest(user) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, BookRequst, 'user/' + user + '/myrequest');
	};
};
var RequestMe = exports.RequestMe = function RequestMe(user) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, BookRequst, 'user/' + user + '/requestme');
	};
};
var Agreed = exports.Agreed = function Agreed(content) {
	return {
		type: _actionTypes.AGREED_TRADE,
		content: content
	};
};
var AgreeTrade = exports.AgreeTrade = function AgreeTrade(user, id) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, Agreed, 'user/' + user + '/myagree?bookId=' + id);
	};
};
var ProfileChanged = exports.ProfileChanged = function ProfileChanged(info) {
	return {
		type: _actionTypes.PROFILE_CHANGED,
		info: info
	};
};
var ChangeProfile = exports.ChangeProfile = function ChangeProfile(info, user) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, ProfileChanged, 'user/' + user + '/changeprofile', 'POST', info);
	};
};
var GetProfile = exports.GetProfile = function GetProfile(user) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, ProfileChanged, 'user/' + user + '/profile');
	};
};
var PasswordChanged = exports.PasswordChanged = function PasswordChanged() {
	return {
		type: _actionTypes.PASSWORD_CHANGED
	};
};
var OldPasswordVaild = exports.OldPasswordVaild = function OldPasswordVaild(oldAndnew, user) {
	return function (dispatch) {
		(0, _fetch2.default)(dispatch, PasswordChanged, 'user/' + user + '/changepassword', 'POST', oldAndnew);
	};
};
var Alert = exports.Alert = function Alert(content) {
	return {
		type: _actionTypes.ALERT_MESSAGE,
		content: content
	};
};
var CloseAlert = exports.CloseAlert = function CloseAlert() {
	return {
		type: _actionTypes.CLOSE_ALERT
	};
};

/***/ }),

/***/ "./src/Components/app.js":
/*!*******************************!*\
  !*** ./src/Components/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _List = __webpack_require__(/*! ../Containers/List */ "./src/Containers/List.js");

var _LoginRegister = __webpack_require__(/*! ../Containers/LoginRegister */ "./src/Containers/LoginRegister.js");

var _setting = __webpack_require__(/*! ./setting */ "./src/Components/setting.js");

var _setting2 = _interopRequireDefault(_setting);

var _home = __webpack_require__(/*! ./home */ "./src/Components/home.js");

var _home2 = _interopRequireDefault(_home);

var _userpage = __webpack_require__(/*! ./userpage */ "./src/Components/userpage.js");

var _userpage2 = _interopRequireDefault(_userpage);

var _Header = __webpack_require__(/*! ../Containers/Header */ "./src/Containers/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container-fluid' },
				_react2.default.createElement(_Header2.default, null),
				_react2.default.createElement(
					_reactRouterDom.Switch,
					null,
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _LoginRegister.WithLogin }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _LoginRegister.WithRegister }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/allbooks', component: _List.AllBookList }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/user/:name', component: _userpage2.default })
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ "./src/Components/bookitem.js":
/*!************************************!*\
  !*** ./src/Components/bookitem.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookItem = function (_Component) {
	_inherits(BookItem, _Component);

	function BookItem() {
		_classCallCheck(this, BookItem);

		var _this = _possibleConstructorReturn(this, (BookItem.__proto__ || Object.getPrototypeOf(BookItem)).call(this));

		_this.state = {
			show: false
		};
		return _this;
	}

	_createClass(BookItem, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.item = this.props.bookname ? _react2.default.createElement(
				_reactBootstrap.Thumbnail,
				{ src: nextProps.handleError.altSrc, alt: 'local', onError: this.handleError.bind(this) },
				_react2.default.createElement(
					'h4',
					null,
					this.props.bookname
				),
				_react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'primary', onClick: this.handleRequest.bind(this) },
					'Want'
				),
				' ',
				_react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'danger', onClick: this.handleDelete.bind(this) },
					'Delete'
				)
			) : null;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.errFlag = false;
		}
	}, {
		key: 'handleClose',
		value: function handleClose() {
			this.setState({ show: false });
			if (this.props.response.deleted || this.props.response.wanted) {
				this.props.actions.CloseAlert();
				if (this.props.status == 'userBookList') {
					this.props.actions.fetchUserBooks(this.props.username);
				} else if (this.props.status == 'allBookList') {
					this.props.actions.fetchAllBooks();
				}
			}
		}
	}, {
		key: 'handleDelete',
		value: function handleDelete() {
			if (this.props.auth.auth) {
				this.props.actions.Delete({ id: this.props.bookId });
			} else {
				this.setState({ show: true });
				setTimeout(this.handleClose.bind(this), 1000);
			}
		}
	}, {
		key: 'handleRequest',
		value: function handleRequest() {
			if (this.props.username) {
				this.props.actions.WantBook({ bookId: this.props.bookId, bookname: this.props.bookname, username: this.props.username });
			} else {
				this.setState({ show: true });
				setTimeout(this.handleClose.bind(this), 1000);
			}
		}
	}, {
		key: 'handleError',
		value: function handleError() {
			this.props.actions.ImgError();
			this.errFlag = true;
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.errFlag) {
				this.item = this.props.bookname ? _react2.default.createElement(
					_reactBootstrap.Thumbnail,
					{ src: this.props.pic, alt: this.props.bookname, onError: this.handleError.bind(this) },
					_react2.default.createElement(
						'h4',
						null,
						this.props.bookname
					),
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ bsStyle: 'primary', onClick: this.handleRequest.bind(this) },
						'\u60F3\u8981'
					),
					' ',
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ bsStyle: 'danger', onClick: this.handleDelete.bind(this) },
						'\u5220\u9664'
					)
				) : null;
			}
			var foot = null;
			if (this.props.response.deleted || this.props.response.wanted) {
				foot = _react2.default.createElement(
					_reactBootstrap.Modal.Footer,
					null,
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ onClick: this.handleClose.bind(this) },
						'\u786E\u8BA4'
					)
				);
			}
			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ md: 2 },
					this.item
				),
				_react2.default.createElement(
					_reactBootstrap.Modal,
					{ show: this.state.show || this.props.response.deleted || this.props.response.wanted, onHide: this.handleClose.bind(this) },
					_react2.default.createElement(
						_reactBootstrap.Modal.Body,
						null,
						_react2.default.createElement(
							'p',
							null,
							this.props.response.content ? this.props.response.content : 'Please Login!'
						)
					),
					foot
				)
			);
		}
	}]);

	return BookItem;
}(_react.Component);

exports.default = BookItem;

/***/ }),

/***/ "./src/Components/booklist.js":
/*!************************************!*\
  !*** ./src/Components/booklist.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BookList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withBookList = withBookList;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _Errors = __webpack_require__(/*! ../Containers/Errors */ "./src/Containers/Errors.js");

var _Errors2 = _interopRequireDefault(_Errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withBookList(Wrapped, status) {
	return function (_Component) {
		_inherits(_class, _Component);

		function _class() {
			_classCallCheck(this, _class);

			return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
		}

		_createClass(_class, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(Wrapped, _extends({ status: status }, this.props));
			}
		}]);

		return _class;
	}(_react.Component);
}

var BookList = exports.BookList = function (_Component2) {
	_inherits(BookList, _Component2);

	function BookList() {
		_classCallCheck(this, BookList);

		return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).apply(this, arguments));
	}

	_createClass(BookList, [{
		key: 'dismissValidation',
		value: function dismissValidation() {
			this.props.actions.CloseAlert();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.status == 'userBookList') {
				this.list = 'userBooks';
				this.props.actions.fetchUserBooks(this.props.user.info.username);
			} else if (this.props.status == 'allBookList') {
				this.list = 'allBooks';
				this.props.actions.fetchAllBooks();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.props.actions.CloseAlert();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var list = this.list ? this.list : null;
			var alertMessage = null;
			if (this.props.handleAlert.alert && this.props.handleAlert.content.alertType == 3) {
				alertMessage = _react2.default.createElement(
					_reactBootstrap.Alert,
					{ bsStyle: 'info', onDismiss: this.dismissValidation.bind(this) },
					this.props.handleAlert.content.message
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: list },
				_react2.default.createElement(
					_reactBootstrap.Grid,
					null,
					_react2.default.createElement(
						_reactBootstrap.Row,
						null,
						this.props.List[list] ? this.props.List[list].map(function (v, i) {
							if (_this3.props.authRegister.auth) {
								return _react2.default.createElement(_Errors2.default, { status: _this3.props.status, key: i, username: _this3.props.user.info.username, bookId: v.bookId, pic: v.bookPic, bookname: v.bookName });
							}
							return _react2.default.createElement(_Errors2.default, { key: i, bookId: v.bookId, pic: v.bookPic, bookname: v.bookName });
						}) : null
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'nobook-alert' },
					alertMessage
				)
			);
		}
	}]);

	return BookList;
}(_react.Component);

/***/ }),

/***/ "./src/Components/header.js":
/*!**********************************!*\
  !*** ./src/Components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'handleLogout',
		value: function handleLogout(key, event) {
			if (key == 3) {
				this.props.actions.unAuth();
				this.props.history.push('/');
			} else if (key == 2) {
				this.props.history.push('/user/' + this.props.user.info.username + '/mybooks');
			} else if (key == 1.1) {
				this.props.history.push('/user/' + this.props.user.info.username + '/myrequest');
			} else if (key == 1.2) {
				this.props.history.push('/user/' + this.props.user.info.username + '/requestme');
			} else if (key == 1.3) {
				this.props.history.push('/user/' + this.props.user.info.username + '/publish');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactBootstrap.Navbar,
				{ fluid: true },
				_react2.default.createElement(
					_reactBootstrap.Navbar.Header,
					null,
					_react2.default.createElement(
						_reactBootstrap.Navbar.Brand,
						null,
						'\u56FE\u4E66\u6A21\u62DF\u4EA4\u6613'
					),
					_react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
				),
				_react2.default.createElement(
					_reactBootstrap.Navbar.Collapse,
					null,
					_react2.default.createElement(
						_reactBootstrap.Nav,
						null,
						_react2.default.createElement(
							_reactRouterBootstrap.LinkContainer,
							{ to: '/' },
							_react2.default.createElement(
								_reactBootstrap.NavItem,
								null,
								'\u4E3B\u9875'
							)
						)
					),
					this.props.status.auth ? _react2.default.createElement(
						_reactBootstrap.Nav,
						{ pullRight: true, onSelect: this.handleLogout.bind(this) },
						_react2.default.createElement(
							_reactRouterBootstrap.LinkContainer,
							{ to: '/allbooks' },
							_react2.default.createElement(
								_reactBootstrap.NavItem,
								null,
								'\u6240\u6709\u56FE\u4E66'
							)
						),
						_react2.default.createElement(
							_reactRouterBootstrap.LinkContainer,
							{ to: '/user/' + this.props.user.info.username + '/settings' },
							_react2.default.createElement(
								_reactBootstrap.NavItem,
								null,
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'cog' })
							)
						),
						_react2.default.createElement(
							_reactBootstrap.NavItem,
							{ eventKey: 3 },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'off' })
						),
						_react2.default.createElement(
							_reactBootstrap.NavDropdown,
							{ eventKey: 1, title: this.props.user.info.username, id: 'user-dropdown' },
							_react2.default.createElement(
								_reactBootstrap.MenuItem,
								{ eventKey: 2 },
								'\u6211\u7684\u56FE\u4E66'
							),
							_react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
							_react2.default.createElement(
								_reactBootstrap.MenuItem,
								{ eventKey: 1.1 },
								'\u4F60\u7684\u4EA4\u6613\u8BF7\u6C42'
							),
							_react2.default.createElement(
								_reactBootstrap.MenuItem,
								{ eventKey: 1.2 },
								'\u4F60\u6536\u5230\u7684\u4EA4\u6613\u8BF7\u6C42'
							),
							_react2.default.createElement(
								_reactBootstrap.MenuItem,
								{ eventKey: 1.3 },
								'\u53D1\u5E03\u4E66\u7C4D'
							)
						)
					) : _react2.default.createElement(
						_reactBootstrap.Nav,
						{ pullRight: true },
						_react2.default.createElement(
							_reactRouterBootstrap.LinkContainer,
							{ to: '/allbooks' },
							_react2.default.createElement(
								_reactBootstrap.NavItem,
								null,
								'\u6240\u6709\u56FE\u4E66'
							)
						),
						_react2.default.createElement(
							_reactRouterBootstrap.LinkContainer,
							{ to: '/login' },
							_react2.default.createElement(
								_reactBootstrap.NavItem,
								null,
								'\u767B\u5F55'
							)
						),
						_react2.default.createElement(
							_reactRouterBootstrap.LinkContainer,
							{ to: '/signup' },
							_react2.default.createElement(
								_reactBootstrap.NavItem,
								null,
								'\u6CE8\u518C'
							)
						)
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ "./src/Components/home.js":
/*!********************************!*\
  !*** ./src/Components/home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
	return _react2.default.createElement(
		'div',
		{ className: 'home' },
		_react2.default.createElement(
			'h2',
			null,
			'\u8C46\u74E3\u56FE\u4E66\u6A21\u62DF\u4EA4\u6613'
		),
		_react2.default.createElement(
			'div',
			{ className: 'home-img' },
			_react2.default.createElement(_reactBootstrap.Image, { src: '/imgs/home.png', responsive: true })
		),
		_react2.default.createElement(
			'div',
			{ className: 'home-footer' },
			_react2.default.createElement(
				'strong',
				null,
				'\u544A\u77E5\uFF1A'
			),
			'\u6B64\u7F51\u7AD9\u4F7F\u7528',
			_react2.default.createElement(
				'a',
				{ href: 'https://book.douban.com/', target: '_blank' },
				'\u8C46\u74E3\u56FE\u4E66'
			),
			'API\u83B7\u53D6\u6307\u5B9A\u56FE\u4E66ISBN\u53F7\u7684\u4E66\u7C4D\u4FE1\u606F'
		),
		_react2.default.createElement(
			'div',
			{ className: 'footer' },
			'create by ',
			_react2.default.createElement(
				'code',
				null,
				'Wfield'
			),
			' 2018/8/2'
		)
	);
};

exports.default = HomePage;

/***/ }),

/***/ "./src/Components/login.js":
/*!*********************************!*\
  !*** ./src/Components/login.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LoginRegister = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withLoginRegister = withLoginRegister;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _md = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");

var _md2 = _interopRequireDefault(_md);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withLoginRegister(Wrapped, status) {
	return function (_Component) {
		_inherits(_class, _Component);

		function _class() {
			_classCallCheck(this, _class);

			return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
		}

		_createClass(_class, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(Wrapped, _extends({ status: status }, this.props));
			}
		}]);

		return _class;
	}(_react.Component);
}

var LoginRegister = exports.LoginRegister = function (_Component2) {
	_inherits(LoginRegister, _Component2);

	function LoginRegister() {
		_classCallCheck(this, LoginRegister);

		var _this2 = _possibleConstructorReturn(this, (LoginRegister.__proto__ || Object.getPrototypeOf(LoginRegister)).call(this));

		_this2.onChange = _this2.onChange.bind(_this2);
		_this2.hanldeSubmit = _this2.hanldeSubmit.bind(_this2);
		_this2.hanldeSwitch = _this2.hanldeSwitch.bind(_this2);
		_this2.info = { email: '', username: '', password: '' };
		return _this2;
	}

	_createClass(LoginRegister, [{
		key: 'onChange',
		value: function onChange(event) {
			this.info[event.target.name] = event.target.value;
		}
	}, {
		key: 'dismissValidation',
		value: function dismissValidation() {
			this.props.actions.CloseAlert();
		}
	}, {
		key: 'hanldeSwitch',
		value: function hanldeSwitch() {
			if (this.props.status == 'login') {
				this.props.actions.unRegister();
				this.props.history.push('/signup');
			} else if (this.props.status == 'signup') {
				this.props.actions.Registered();
				this.props.history.push('/login');
			}
		}
	}, {
		key: 'hanldeSubmit',
		value: function hanldeSubmit(event) {
			event.preventDefault();
			this.info.password = (0, _md2.default)(this.info.password);
			if (this.props.status == 'login') {
				this.props.actions.Login(this.info);
			} else if (this.props.status == 'signup') {
				this.props.actions.Register(this.info);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.authRegister.auth) {
				this.props.history.push('/user/' + nextProps.user.info.username);
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.status == 'login') {
				this.props.actions.Registered();
			} else if (this.props.status == 'signup') {
				this.props.actions.unRegister();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var alertMessage = null;
			if (this.props.handleAlert.alert && this.props.handleAlert.content.alertType == 1) {
				alertMessage = _react2.default.createElement(
					_reactBootstrap.Alert,
					{ bsStyle: 'danger', onDismiss: this.dismissValidation.bind(this) },
					this.props.handleAlert.content.message
				);
			}
			var loginTemplate = this.props.authRegister.registered ? _react2.default.createElement(
				_reactBootstrap.Form,
				{ horizontal: true, onSubmit: this.hanldeSubmit.bind(this) },
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ componentClass: _reactBootstrap.ControlLabel, sm: 3 },
						'Email'
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 9 },
						_react2.default.createElement(_reactBootstrap.FormControl, { name: 'email', onChange: this.onChange })
					)
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ componentClass: _reactBootstrap.ControlLabel, sm: 3 },
						'\u5BC6\u7801'
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 9 },
						_react2.default.createElement(_reactBootstrap.FormControl, { name: 'password', type: 'password', onChange: this.onChange })
					)
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ smOffset: 3, sm: 6 },
						_react2.default.createElement(
							_reactBootstrap.ButtonToolbar,
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsStyle: 'primary', type: 'submit' },
								'\u767B\u5F55'
							),
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ onClick: this.hanldeSwitch },
								'\u6CE8\u518C'
							)
						)
					)
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ smOffset: 3, sm: 6 },
						alertMessage
					)
				)
			) : _react2.default.createElement(
				_reactBootstrap.Form,
				{ horizontal: true, onSubmit: this.hanldeSubmit.bind(this) },
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ componentClass: _reactBootstrap.ControlLabel, sm: 3 },
						'Email'
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 9 },
						_react2.default.createElement(_reactBootstrap.FormControl, { name: 'email', onChange: this.onChange })
					)
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ componentClass: _reactBootstrap.ControlLabel, sm: 3 },
						'\u7528\u6237\u540D'
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 9 },
						_react2.default.createElement(_reactBootstrap.FormControl, { name: 'username', onChange: this.onChange })
					)
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ componentClass: _reactBootstrap.ControlLabel, sm: 3 },
						'\u5BC6\u7801'
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 9 },
						_react2.default.createElement(_reactBootstrap.FormControl, { name: 'password', type: 'password', onChange: this.onChange })
					)
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ smOffset: 3, sm: 6 },
						_react2.default.createElement(
							_reactBootstrap.ButtonToolbar,
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsStyle: 'primary', type: 'submit' },
								'\u6CE8\u518C'
							),
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ onClick: this.hanldeSwitch },
								'\u767B\u5F55'
							)
						)
					)
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ smOffset: 3, sm: 6 },
						alertMessage
					)
				)
			);
			return _react2.default.createElement(
				'div',
				{ className: 'loginTemplate' },
				loginTemplate
			);
		}
	}]);

	return LoginRegister;
}(_react.Component);

/***/ }),

/***/ "./src/Components/publish.js":
/*!***********************************!*\
  !*** ./src/Components/publish.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishBook = function (_Component) {
	_inherits(PublishBook, _Component);

	function PublishBook() {
		_classCallCheck(this, PublishBook);

		return _possibleConstructorReturn(this, (PublishBook.__proto__ || Object.getPrototypeOf(PublishBook)).apply(this, arguments));
	}

	_createClass(PublishBook, [{
		key: 'handleAdd',
		value: function handleAdd(event) {
			var api = 'https://api.douban.com/v2/book/isbn/' + this.refs.input.value;
			var info = {
				creator: this.props.user.username,
				isbn: this.refs.input.value,
				api: api
			};
			this.props.actions.Publish(info);
		}
	}, {
		key: 'handleReturn',
		value: function handleReturn() {
			this.props.history.push('/user/' + this.props.user.username + '/mybooks');
		}
	}, {
		key: 'dismissValidation',
		value: function dismissValidation() {
			this.props.actions.CloseAlert();
		}
	}, {
		key: 'render',
		value: function render() {
			var alertMessage = null;
			if (this.props.handleAlert.alert) {
				if (this.props.handleAlert.content && this.props.handleAlert.content.alertType == 5.0) {
					alertMessage = _react2.default.createElement(
						_reactBootstrap.Alert,
						{ bsStyle: 'danger', onDismiss: this.dismissValidation.bind(this) },
						this.props.handleAlert.content.message
					);
				} else {
					alertMessage = _react2.default.createElement(
						_reactBootstrap.Alert,
						{ bsStyle: 'success', onDismiss: this.dismissValidation.bind(this) },
						'Publish Book Success'
					);
				}
			}
			return _react2.default.createElement(
				'div',
				null,
				alertMessage,
				_react2.default.createElement(
					'h3',
					null,
					'\u53D1\u5E03\u4E00\u672C\u4E66 :)'
				),
				_react2.default.createElement(
					_reactBootstrap.Form,
					{ inline: true },
					_react2.default.createElement(
						_reactBootstrap.FormGroup,
						null,
						_react2.default.createElement(
							_reactBootstrap.ControlLabel,
							null,
							'ISBN: '
						),
						' ',
						_react2.default.createElement('input', { className: 'form-control', type: 'text', ref: 'input' })
					),
					' ',
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ bsStyle: 'primary', onClick: this.handleAdd.bind(this) },
						'\u6DFB\u52A0'
					),
					' ',
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ onClick: this.handleReturn.bind(this) },
						'\u67E5\u770B\u6211\u7684\u4E66\u7C4D'
					)
				),
				_react2.default.createElement(_reactBootstrap.Image, { src: this.props.bookImg, thumbnail: true })
			);
		}
	}]);

	return PublishBook;
}(_react.Component);

exports.default = PublishBook;

/***/ }),

/***/ "./src/Components/setting.js":
/*!***********************************!*\
  !*** ./src/Components/setting.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _md = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");

var _md2 = _interopRequireDefault(_md);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Setting = function (_Component) {
	_inherits(Setting, _Component);

	function Setting() {
		_classCallCheck(this, Setting);

		var _this = _possibleConstructorReturn(this, (Setting.__proto__ || Object.getPrototypeOf(Setting)).call(this));

		_this.state = {
			City: '',
			State: ''
		};

		_this.handleChangeCity = _this.handleChangeCity.bind(_this);
		_this.handleChangeState = _this.handleChangeState.bind(_this);
		_this.password = { current: '', new: '' };
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(Setting, [{
		key: 'dismissValidation',
		value: function dismissValidation() {
			this.props.actions.CloseAlert();
		}
	}, {
		key: 'handleChangeCity',
		value: function handleChangeCity(event) {
			this.setState({
				City: event.target.value
			});
		}
	}, {
		key: 'handleChangeState',
		value: function handleChangeState(event) {
			this.setState({
				State: event.target.value
			});
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.password[event.target.name] = event.target.value;
		}
	}, {
		key: 'saveProfile',
		value: function saveProfile() {
			var info = {
				city: this.state.City,
				state: this.state.State
			};
			var user = this.props.user.info.username;
			this.props.actions.ChangeProfile(info, user);
		}
	}, {
		key: 'savePassword',
		value: function savePassword() {
			var oldAndnew = {
				oldPassword: (0, _md2.default)(this.password.current),
				newPassword: (0, _md2.default)(this.password.new)
			};
			var user = this.props.user.info.username;
			this.props.actions.OldPasswordVaild(oldAndnew, user);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.user.pro) {
				this.setState({
					City: nextProps.user.pro.city,
					State: nextProps.user.pro.state
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var user = this.props.user.info.username;
			this.props.actions.GetProfile(user);
		}
	}, {
		key: 'render',
		value: function render() {
			var alertMessageProfile = null;
			if (this.props.handleAlert.alert && this.props.handleAlert.content.alertType == 4.0) {
				alertMessageProfile = _react2.default.createElement(
					_reactBootstrap.Alert,
					{ bsStyle: 'danger', onDismiss: this.dismissValidation.bind(this) },
					this.props.handleAlert.content.message
				);
			} else if (this.props.handleAlert.alert && this.props.handleAlert.content.alertType == 4.1) {
				alertMessageProfile = _react2.default.createElement(
					_reactBootstrap.Alert,
					{ bsStyle: 'success', onDismiss: this.dismissValidation.bind(this) },
					this.props.handleAlert.content.message
				);
			}
			var alertMessagePassword = null;
			if (this.props.handleAlert.alert && this.props.handleAlert.content.alertType == 2.0) {
				alertMessagePassword = _react2.default.createElement(
					_reactBootstrap.Alert,
					{ bsStyle: 'danger', onDismiss: this.dismissValidation.bind(this) },
					this.props.handleAlert.content.message
				);
			} else if (this.props.handleAlert.alert && this.props.handleAlert.content.alertType == 2.1) {
				alertMessagePassword = _react2.default.createElement(
					_reactBootstrap.Alert,
					{ bsStyle: 'success', onDismiss: this.dismissValidation.bind(this) },
					this.props.handleAlert.content.message
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: 'setting' },
				_react2.default.createElement(
					'h3',
					null,
					'\u66F4\u65B0\u7528\u6237\u4FE1\u606F'
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.ControlLabel,
						null,
						'\u57CE\u5E02'
					),
					_react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', value: this.state.City, onChange: this.handleChangeCity })
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.ControlLabel,
						null,
						'\u6240\u5728\u533A'
					),
					_react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', value: this.state.State, onChange: this.handleChangeState })
				),
				alertMessageProfile,
				_react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'primary', onClick: this.saveProfile.bind(this) },
					'\u4FDD\u5B58'
				),
				_react2.default.createElement(
					'h3',
					null,
					'\u4FEE\u6539\u5BC6\u7801'
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.ControlLabel,
						null,
						'\u5F53\u524D\u5BC6\u7801'
					),
					_react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', name: 'current', onChange: this.handleChange })
				),
				_react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.ControlLabel,
						null,
						'\u65B0\u5BC6\u7801'
					),
					_react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', name: 'new', onChange: this.handleChange })
				),
				alertMessagePassword,
				_react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'primary', onClick: this.savePassword.bind(this) },
					'\u4FDD\u5B58\u66F4\u6539'
				)
			);
		}
	}]);

	return Setting;
}(_react.Component);

exports.default = Setting;

/***/ }),

/***/ "./src/Components/tradelist.js":
/*!*************************************!*\
  !*** ./src/Components/tradelist.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Request = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withRequest = withRequest;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withRequest(Wrapped, reqAction) {
	return function (_Component) {
		_inherits(_class, _Component);

		function _class() {
			_classCallCheck(this, _class);

			return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
		}

		_createClass(_class, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(Wrapped, _extends({}, this.props, { reqAction: reqAction }));
			}
		}]);

		return _class;
	}(_react.Component);
}

var Request = exports.Request = function (_Component2) {
	_inherits(Request, _Component2);

	function Request() {
		_classCallCheck(this, Request);

		var _this2 = _possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).call(this));

		_this2.messageTrue = '';
		_this2.messageFalse = '';
		return _this2;
	}

	_createClass(Request, [{
		key: 'dismissValidation',
		value: function dismissValidation() {
			this.props.actions.CloseAlert();
		}
	}, {
		key: 'hanldeTrade',
		value: function hanldeTrade(id, event) {
			var user = this.props.user.info.username;
			this.props.actions.AgreeTrade(user, id);
			this.props.actions.RequestMe(user);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var user = this.props.user.info.username;
			if (this.props.reqAction == 'MyRequest') {
				this.props.actions.MyRequest(user);
				this.messageTrue = 'Your trade request has been agreed';
				this.messageFalse = 'Your trade request is waiting for agree';
			} else if (this.props.reqAction == 'RequestMe') {
				this.props.actions.RequestMe(user);
				this.messageTrue = 'You have agreed this trade';
				this.messageFalse = 'You have not agreed this trade. Click to trade';
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var alertMessage = null;
			if (this.props.request.agreed) {
				if (this.props.request.content.alertType == 7.0) {
					alertMessage = _react2.default.createElement(
						_reactBootstrap.Alert,
						{ bsStyle: 'danger', onDismiss: this.dismissValidation.bind(this) },
						this.props.request.content.message
					);
				} else if (this.props.request.content.alertType == 7.1) {
					alertMessage = _react2.default.createElement(
						_reactBootstrap.Alert,
						{ bsStyle: 'success', onDismiss: this.dismissValidation.bind(this) },
						this.props.request.content.message
					);
				}
			}
			var list = this.props.request.reqList ? this.props.request.reqList.map(function (req, i) {
				if (!req.agree && _this3.props.reqAction == 'RequestMe') {
					return _react2.default.createElement(
						_reactBootstrap.ListGroupItem,
						{ key: i, header: req.bookname, bsStyle: req.agree ? 'warning' : 'success', onClick: _this3.hanldeTrade.bind(_this3, req.bookId) },
						req.agree ? _this3.messageTrue : _this3.messageFalse
					);
				}
				return _react2.default.createElement(
					_reactBootstrap.ListGroupItem,
					{ key: i, header: req.bookname, bsStyle: req.agree ? 'warning' : 'success' },
					req.agree ? _this3.messageTrue : _this3.messageFalse
				);
			}) : null;
			return _react2.default.createElement(
				'div',
				{ className: 'req-list' },
				_react2.default.createElement(
					'div',
					{ className: 'reqme-alert' },
					alertMessage
				),
				_react2.default.createElement(
					_reactBootstrap.ListGroup,
					null,
					list
				)
			);
		}
	}]);

	return Request;
}(_react.Component);

/***/ }),

/***/ "./src/Components/userpage.js":
/*!************************************!*\
  !*** ./src/Components/userpage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _List = __webpack_require__(/*! ../Containers/List */ "./src/Containers/List.js");

var _Setting = __webpack_require__(/*! ../Containers/Setting */ "./src/Containers/Setting.js");

var _Setting2 = _interopRequireDefault(_Setting);

var _PublishBook = __webpack_require__(/*! ../Containers/PublishBook */ "./src/Containers/PublishBook.js");

var _PublishBook2 = _interopRequireDefault(_PublishBook);

var _Request = __webpack_require__(/*! ../Containers/Request */ "./src/Containers/Request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserPage = function (_Component) {
	_inherits(UserPage, _Component);

	function UserPage() {
		_classCallCheck(this, UserPage);

		return _possibleConstructorReturn(this, (UserPage.__proto__ || Object.getPrototypeOf(UserPage)).apply(this, arguments));
	}

	_createClass(UserPage, [{
		key: 'render',
		value: function render() {
			var _context$store$getSta = this.context.store.getState(),
			    setUser = _context$store$getSta.setUser;

			return _react2.default.createElement(
				_reactRouterDom.Switch,
				null,
				_react2.default.createElement(_reactRouterDom.Route, { path: '/user/:name/mybooks', component: _List.UserBookList }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/user/:name/settings', component: _Setting2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/user/:name/publish', component: _PublishBook2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/user/:name/myrequest', component: _Request.MyRequestCon }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/user/:name/requestme', component: _Request.RequestMeCon })
			);
		}
	}]);

	return UserPage;
}(_react.Component);

UserPage.contextTypes = {
	store: _propTypes2.default.object
};

exports.default = UserPage;

/***/ }),

/***/ "./src/Containers/Errors.js":
/*!**********************************!*\
  !*** ./src/Containers/Errors.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(/*! ../Actions/index */ "./src/Actions/index.js");

var actions = _interopRequireWildcard(_index);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _bookitem = __webpack_require__(/*! ../Components/bookitem */ "./src/Components/bookitem.js");

var _bookitem2 = _interopRequireDefault(_bookitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapStateToProps(state) {
	var handleErrors = state.handleErrors,
	    authRegister = state.authRegister,
	    bookPRDW = state.bookPRDW;

	return {
		handleError: handleErrors,
		auth: authRegister,
		response: bookPRDW
	};
}
function mapDispatchToProps(dispatch) {
	return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_bookitem2.default);

/***/ }),

/***/ "./src/Containers/Header.js":
/*!**********************************!*\
  !*** ./src/Containers/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _index = __webpack_require__(/*! ../Actions/index */ "./src/Actions/index.js");

var actions = _interopRequireWildcard(_index);

var _header = __webpack_require__(/*! ../Components/header */ "./src/Components/header.js");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapStateToProps(state) {
	var setUser = state.setUser,
	    authRegister = state.authRegister;

	return {
		user: setUser,
		status: authRegister
	};
}
function mapDispatchToProps(dispatch) {
	return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_header2.default));

/***/ }),

/***/ "./src/Containers/List.js":
/*!********************************!*\
  !*** ./src/Containers/List.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AllBookList = exports.UserBookList = undefined;

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _index = __webpack_require__(/*! ../Actions/index */ "./src/Actions/index.js");

var actions = _interopRequireWildcard(_index);

var _booklist = __webpack_require__(/*! ../Components/booklist */ "./src/Components/booklist.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapStateToProps(state) {
	var fetchList = state.fetchList,
	    setUser = state.setUser,
	    authRegister = state.authRegister,
	    handleErrors = state.handleErrors;

	return {
		List: fetchList,
		user: setUser,
		authRegister: authRegister,
		handleAlert: handleErrors
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}

var UserBookList = exports.UserBookList = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _booklist.withBookList)(_booklist.BookList, 'userBookList')));
var AllBookList = exports.AllBookList = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _booklist.withBookList)(_booklist.BookList, 'allBookList')));

/***/ }),

/***/ "./src/Containers/LoginRegister.js":
/*!*****************************************!*\
  !*** ./src/Containers/LoginRegister.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WithRegister = exports.WithLogin = undefined;

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _index = __webpack_require__(/*! ../Actions/index */ "./src/Actions/index.js");

var actions = _interopRequireWildcard(_index);

var _login = __webpack_require__(/*! ../Components/login */ "./src/Components/login.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapStateToProps(state) {
	var setUser = state.setUser,
	    authRegister = state.authRegister,
	    handleErrors = state.handleErrors;

	return {
		user: setUser,
		authRegister: authRegister,
		handleAlert: handleErrors
	};
}
function mapDispatchToProps(dispatch) {
	return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}

var WithLogin = exports.WithLogin = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _login.withLoginRegister)(_login.LoginRegister, 'login'));
var WithRegister = exports.WithRegister = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _login.withLoginRegister)(_login.LoginRegister, 'signup'));

/***/ }),

/***/ "./src/Containers/PublishBook.js":
/*!***************************************!*\
  !*** ./src/Containers/PublishBook.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _index = __webpack_require__(/*! ../Actions/index */ "./src/Actions/index.js");

var actions = _interopRequireWildcard(_index);

var _publish = __webpack_require__(/*! ../Components/publish */ "./src/Components/publish.js");

var _publish2 = _interopRequireDefault(_publish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapStateToProps(state) {
	var bookPRDW = state.bookPRDW,
	    setUser = state.setUser,
	    handleErrors = state.handleErrors;

	return {
		bookImg: bookPRDW.bookImg,
		user: setUser.info,
		handleAlert: handleErrors
	};
}
function mapDispatchToProps(dispatch) {
	return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_publish2.default));

/***/ }),

/***/ "./src/Containers/Request.js":
/*!***********************************!*\
  !*** ./src/Containers/Request.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RequestMeCon = exports.MyRequestCon = undefined;

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _index = __webpack_require__(/*! ../Actions/index */ "./src/Actions/index.js");

var actions = _interopRequireWildcard(_index);

var _tradelist = __webpack_require__(/*! ../Components/tradelist */ "./src/Components/tradelist.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapStateToProps(state) {
	var bookPRDW = state.bookPRDW,
	    setUser = state.setUser;

	return {
		request: bookPRDW,
		user: setUser
	};
}
function mapDispatchToProps(dispatch) {
	return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}
var MyRequestCon = exports.MyRequestCon = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _tradelist.withRequest)(_tradelist.Request, 'MyRequest')));
var RequestMeCon = exports.RequestMeCon = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _tradelist.withRequest)(_tradelist.Request, 'RequestMe')));

/***/ }),

/***/ "./src/Containers/Setting.js":
/*!***********************************!*\
  !*** ./src/Containers/Setting.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _index = __webpack_require__(/*! ../Actions/index */ "./src/Actions/index.js");

var actions = _interopRequireWildcard(_index);

var _setting = __webpack_require__(/*! ../Components/setting */ "./src/Components/setting.js");

var _setting2 = _interopRequireDefault(_setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapStateToProps(state) {
	var setUser = state.setUser,
	    handleErrors = state.handleErrors;

	return {
		user: setUser,
		handleAlert: handleErrors
	};
}
function mapDispatchToProps(dispatch) {
	return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_setting2.default);

/***/ }),

/***/ "./src/Reducers/index.js":
/*!*******************************!*\
  !*** ./src/Reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var fetchList = function fetchList() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'FETCH_ALL_LIST':
			return Object.assign({}, state, {
				allBooks: action.data
			});
		case 'FETCH_USER_LIST':
			return _extends({}, state, { userBooks: action.data });
		default:
			return state;
	}
};

var setUser = function setUser() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'SET_USER_ID':
			sessionStorage.setItem('info', JSON.stringify(action.userInfo));
			return _extends({}, state, { info: action.userInfo });
		case 'UNAUTH':
			sessionStorage.info = null;
			return _extends({}, state, { info: null });
		case 'PROFILE_CHANGED':
			return _extends({}, state, { pro: action.info });
		case 'PASSWORD_CHANGED':
			return _extends({}, state, { passwordChanged: true });
		default:
			return _extends({}, state, { info: sessionStorage.info ? JSON.parse(sessionStorage.info) : null });
	}
};
var authRegister = function authRegister() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'AUTH':
			sessionStorage.auth = true;
			return _extends({}, state, { auth: true });
		case 'UNAUTH':
			sessionStorage.auth = '';
			return _extends({}, state, { auth: false });
		case 'REGISTERED':
			sessionStorage.registered = true;
			return _extends({}, state, { registered: true });
		case 'UNREGISTER':
			sessionStorage.registered = '';
			return _extends({}, state, { registered: false });
		default:
			return _extends({}, state, { auth: Boolean(sessionStorage.auth) ? Boolean(sessionStorage.auth) : false, registered: Boolean(sessionStorage.registered) ? Boolean(sessionStorage.registered) : false });
	}
};
var bookPRDW = function bookPRDW() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];
	//PRDW: publish request delete want
	switch (action.type) {
		case 'PUBLISHED_BOOK':
			return _extends({}, state, { bookImg: action.src });
		case 'WANTED_BOOK':
			return _extends({}, state, { wanted: true, content: action.content });
		case 'REQUEST_BOOK':
			return _extends({}, state, { reqList: action.requestList });
		case 'AGREED_TRADE':
			return _extends({}, state, { agreed: true, content: action.content });
		case 'DELETE_BOOK':
			return _extends({}, state, { deleted: true, content: action.content });
		default:
			return _extends({}, state, { bookImg: null, wanted: false, deleted: false, agreed: false });
	}
};
var handleErrors = function handleErrors() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'IMG_ERROR':
			return _extends({}, state, { altSrc: '/imgs/ImgNotFound.jpg' });
		case 'ALERT_MESSAGE':
			return _extends({}, state, { alert: true, content: action.content });
		case 'PUBLISHED_BOOK':
			return _extends({}, state, { alert: true, content: { alertType: 5.1, message: 'publish book success' } });
		case 'CLOSE_ALERT':
			return _extends({}, state, { alert: false });
		default:
			return _extends({}, state, { alert: false });
	}
};

var rootReducer = (0, _redux.combineReducers)({
	fetchList: fetchList,
	setUser: setUser,
	authRegister: authRegister,
	bookPRDW: bookPRDW,
	handleErrors: handleErrors
});

exports.default = rootReducer;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _index = __webpack_require__(/*! ./Reducers/index.js */ "./src/Reducers/index.js");

var _index2 = _interopRequireDefault(_index);

var _app = __webpack_require__(/*! ./Components/app */ "./src/Components/app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger.createLogger)();

var store = (0, _redux.createStore)(_index2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, //async action
loggerMiddleware));

(0, _reactDom.render)(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(
		_reactRouterDom.BrowserRouter,
		null,
		_react2.default.createElement(_app2.default, null)
	)
), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map