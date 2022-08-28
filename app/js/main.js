/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_marque__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/marque */ "./src/js/components/marque.js");
/* harmony import */ var _components_marque__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_marque__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ (() => {

const burger = () => {
  const burger = document.querySelector('.burger'),
        mobileMenu = document.querySelector('.mobile');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow');
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      burger.classList.remove('active');
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow');
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  burger();
});

/***/ }),

/***/ "./src/js/components/marque.js":
/*!*************************************!*\
  !*** ./src/js/components/marque.js ***!
  \*************************************/
/***/ (() => {

const marque = () => {
  const wrapper = document.querySelector('.skills'),
        marqueeLeft = document.querySelector('.left-move'),
        marqueeRight = document.querySelector('.right-move'),
        wrapperWidth = wrapper.offsetWidth,
        marqueeWidth = marqueeRight.scrollWidth;

  function moveLeft() {
    let currentTX = getComputedStyle(marqueeLeft).transform.split(',');

    if (currentTX[4] === undefined) {
      currentTX = -1;
    } else {
      currentTX = parseFloat(currentTX[4]) - 1;
    }

    if (-currentTX >= marqueeWidth) {
      marqueeLeft.style.transform = 'translateX(' + wrapperWidth + 'px)';
    } else {
      marqueeLeft.style.transform = 'translateX(' + currentTX + 'px)';
    }
  }

  function moveRight() {
    let currentTX = getComputedStyle(marqueeRight).transform.split(',');

    if (currentTX[4] === undefined) {
      currentTX = -1;
    } else {
      currentTX = parseFloat(currentTX[4]) - 1;
    }

    if (-currentTX >= marqueeWidth) {
      marqueeRight.style.transform = 'translateX(' + wrapperWidth + 'px)';
    } else {
      marqueeRight.style.transform = 'translateX(' + currentTX + 'px)';
    }
  }

  setInterval(moveLeft, 1);
  setInterval(moveRight, 1);
};

window.addEventListener('DOMContentLoaded', () => {
  marque();
});

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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
// import './_vendor';

})();

/******/ })()
;
//# sourceMappingURL=main.js.map