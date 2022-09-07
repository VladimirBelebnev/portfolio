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
/* harmony import */ var _components_marquee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/marquee */ "./src/js/components/marquee.js");
/* harmony import */ var _components_marquee__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_marquee__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs */ "./src/js/components/tabs.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_heroBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/heroBtn */ "./src/js/components/heroBtn.js");
/* harmony import */ var _components_heroBtn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_heroBtn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rellax */ "./src/js/components/rellax.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scroll */ "./src/js/components/scroll.js");
/* harmony import */ var _components_formMask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/formMask */ "./src/js/components/formMask.js");
/* harmony import */ var _components_formMask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_formMask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ (() => {

const burger = () => {
  const burger = document.querySelector('.burger'),
        mobileMenu = document.querySelector('.mobile'),
        mobileLink = document.querySelectorAll('.mobile__item');
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
  mobileLink.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow');
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  burger();
});

/***/ }),

/***/ "./src/js/components/formMask.js":
/*!***************************************!*\
  !*** ./src/js/components/formMask.js ***!
  \***************************************/
/***/ (() => {

const formMask = () => {
  const phoneMask = () => {
    let setCursorPosition = (position, element) => {
      element.focus();

      if (element.setSelectionRange) {
        element.setSelectionRange(position, position);
      } else if (element.createTextRange) {
        let range = element.createTextRange();
        range.collapse(true);
        range.moveEnd('character', position);
        range.moveStart('character', position);
        range.select();
      }
    };

    function createMask(event) {
      let matrix = '+7 (___) ___ __ __',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, a => {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }

      if (this.value.charAt(1) != '7') {
        this.value = '';
        this.blur();
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  };

  phoneMask();

  const textMask = () => {
    const textInputs = document.querySelectorAll('[name="text"]');
    textInputs.forEach(input => {
      input.addEventListener('keypress', event => {
        if (event.key.match(/[^а-яё]/ig)) {
          event.preventDefault();
        }

        if (input.value.match(/[a-z]/ig)) {
          input.value = '';
        }
      });
    });
  };

  textMask();
};

window.addEventListener('DOMContentLoaded', () => {
  formMask();
});

/***/ }),

/***/ "./src/js/components/heroBtn.js":
/*!**************************************!*\
  !*** ./src/js/components/heroBtn.js ***!
  \**************************************/
/***/ (() => {

const heroBtn = () => {
  const $ = function (s) {
    let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return o.querySelector(s);
  };

  const $$ = function (s) {
    let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return o.querySelectorAll(s);
  };

  $$('.hero__btn').forEach(el => el.addEventListener('mousemove', function (e) {
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width / 2;
    const my = e.clientY - pos.top - pos.height / 2;
    this.style.transform = 'translate(' + mx * 0.15 + 'px, ' + my * 0.3 + 'px)';
    this.style.transform += 'rotate3d(' + mx * -0.1 + ', ' + my * -0.3 + ', 0, 12deg)';
    this.children[0].style.transform = 'translate(' + mx * 0.025 + 'px, ' + my * 0.075 + 'px)';
  }));
  $$('.hero__btn').forEach(el => el.addEventListener('mouseleave', function () {
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
  }));
};

window.addEventListener('DOMContentLoaded', () => {
  heroBtn();
});

/***/ }),

/***/ "./src/js/components/marquee.js":
/*!**************************************!*\
  !*** ./src/js/components/marquee.js ***!
  \**************************************/
/***/ (() => {

function marquee(selector, speed, sign) {
  const parentSelector = document.querySelector(selector);
  const firstElement = parentSelector.children[0];
  let i = 0;
  setInterval(function () {
    firstElement.style.marginLeft = "".concat(sign).concat(i, "px");

    if (i > firstElement.clientWidth) {
      i = 0;
    }

    i = i + speed;
  }, 0);
}

try {
  window.addEventListener('load', marquee('.marquee-left', 0.2, '-'));
  window.addEventListener('load', marquee('.marquee-right', 0.2, '+'));
} catch (error) {
  console.log(error);
}

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ (() => {

const modals = () => {
  let btnPressed = false;
  let modalShow = true;
  const orderModal = document.querySelector('.modal-order'),
        btnsOrderModal = document.querySelectorAll('.modal-order__trigger'),
        closeOrderModal = orderModal.querySelector('.modal-order__close'),
        questionModal = document.querySelector('.modal-question'),
        closeQuestionModal = document.querySelector('.modal-question__close');

  const showModal = selector => {
    selector.classList.remove('hidden');
    selector.querySelector('.modal-order__content').classList.add('animate__animated', 'animate__fadeInDown');
    modalShow = false;
  };

  const hideModal = selector => {
    selector.classList.add('hidden');
    selector.querySelector('.modal-order__content').classList.remove('animate__animated', 'animate__fadeInDown');
    modalShow = false;
  };

  const openModal = (btns, modal) => {
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        showModal(modal);
        btnPressed = true;
      });
    });
  };

  const resetForm = selector => {
    if (selector.querySelector('form')) {
      selector.querySelector('form').reset();
    }
  };

  const closeModal = (btn, modal) => {
    btn.addEventListener('click', () => {
      hideModal(modal);
      resetForm(modal);
    });
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        hideModal(modal);
        resetForm(modal);
      }
    });
    document.addEventListener('keydown', event => {
      if (event.code === 'Escape' && modal) {
        hideModal(modal);
        resetForm(modal);
      }
    });
  };

  function showModalByTime() {
    setTimeout(() => {
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (!item.classList.contains('hidden')) {
          modalShow = false;
        }
      });

      try {
        if (!btnPressed && modalShow) {
          document.querySelector('.modal-question').classList.remove('hidden');
          questionModal.querySelector('.modal-question__content').classList.add('animate__animated', 'animate__fadeInDown');
        }
      } catch (error) {
        console.log(error);
      }
    }, 60000);
  }

  showModalByTime();

  function showModalByScroll() {
    if (!btnPressed && modalShow && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      try {
        document.querySelector('.modal-question').classList.remove('hidden');
        questionModal.querySelector('.modal-question__content').classList.add('animate__animated', 'animate__fadeInDown');
      } catch (error) {
        console.log(error);
      }

      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  openModal(btnsOrderModal, orderModal);
  closeModal(closeOrderModal, orderModal);

  try {
    window.addEventListener('scroll', showModalByScroll);
    closeModal(closeQuestionModal, questionModal);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  try {
    modals();
  } catch (error) {
    console.log(err);
  }
});

/***/ }),

/***/ "./src/js/components/rellax.js":
/*!*************************************!*\
  !*** ./src/js/components/rellax.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener('DOMContentLoaded', () => {
  let rellax = new (rellax__WEBPACK_IMPORTED_MODULE_0___default())('.rellax');
});

/***/ }),

/***/ "./src/js/components/scroll.js":
/*!*************************************!*\
  !*** ./src/js/components/scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var seamless_scroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seamless-scroll-polyfill */ "./node_modules/seamless-scroll-polyfill/lib/scrollIntoView.js");


const easyScrolling = () => {
  const links = document.querySelectorAll('.link');
  links.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      const id = item.getAttribute('href').substring(1);
      const section = document.getElementById(id);

      if (section.classList.contains('about') || section.classList.contains('form')) {
        (0,seamless_scroll_polyfill__WEBPACK_IMPORTED_MODULE_0__.scrollIntoView)(section, {
          behavior: "smooth",
          block: "center"
        });
      } else {
        (0,seamless_scroll_polyfill__WEBPACK_IMPORTED_MODULE_0__.scrollIntoView)(section, {
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  easyScrolling();
});

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ (() => {

const tabs = () => {
  const tabs = document.querySelectorAll('.quastion__block');
  tabs.forEach(tab => {
    const tabHeader = tab.querySelector('.block__header'),
          tabContent = tab.querySelector('.block__text'),
          tabBtn = tab.querySelector('.block__btn');
    tabHeader.addEventListener('click', () => {
      tab.style.maxHeight = '180px';
      tabs.forEach(item => {
        if (item !== tab) {
          item.querySelector('.block__text').classList.add('tabs-hidden');
          item.style.maxHeight = '180px';
          item.querySelector('.block__btn').classList.remove('active');
        }
      });

      if (tabContent.classList.contains('tabs-hidden')) {
        tab.style.maxHeight = '700px';
        tabContent.classList.remove('tabs-hidden');
        tabBtn.classList.add('active');
      } else {
        tabContent.classList.add('tabs-hidden');
        tab.style.maxHeight = '180px';
        tabBtn.classList.remove('active');
      }
    });
  });
};

tabs();

/***/ }),

/***/ "./node_modules/rellax/rellax.js":
/*!***************************************!*\
  !*** ./node_modules/rellax/rellax.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof window !== "undefined" ? window : __webpack_require__.g, function () {
  var Rellax = function(el, options){
    "use strict";

    var self = Object.create(Rellax.prototype);

    var posY = 0;
    var screenY = 0;
    var posX = 0;
    var screenX = 0;
    var blocks = [];
    var pause = true;

    // check what requestAnimationFrame to use, and if
    // it's not supported, use the onscroll event
    var loop = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function(callback){ return setTimeout(callback, 1000 / 60); };

    // store the id for later use
    var loopId = null;

    // Test via a getter in the options object to see if the passive property is accessed
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function() {
          supportsPassive = true;
        }
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
    } catch (e) {}

    // check what cancelAnimation method to use
    var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;

    // check which transform property to use
    var transformProp = window.transformProp || (function(){
        var testEl = document.createElement('div');
        if (testEl.style.transform === null) {
          var vendors = ['Webkit', 'Moz', 'ms'];
          for (var vendor in vendors) {
            if (testEl.style[ vendors[vendor] + 'Transform' ] !== undefined) {
              return vendors[vendor] + 'Transform';
            }
          }
        }
        return 'transform';
      })();

    // Default Settings
    self.options = {
      speed: -2,
	    verticalSpeed: null,
	    horizontalSpeed: null,
      breakpoints: [576, 768, 1201],
      center: false,
      wrapper: null,
      relativeToWrapper: false,
      round: true,
      vertical: true,
      horizontal: false,
      verticalScrollAxis: "y",
      horizontalScrollAxis: "x",
      callback: function() {},
    };

    // User defined options (might have more in the future)
    if (options){
      Object.keys(options).forEach(function(key){
        self.options[key] = options[key];
      });
    }

    function validateCustomBreakpoints () {
      if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {
        var isAscending = true;
        var isNumerical = true;
        var lastVal;
        self.options.breakpoints.forEach(function (i) {
          if (typeof i !== 'number') isNumerical = false;
          if (lastVal !== null) {
            if (i < lastVal) isAscending = false;
          }
          lastVal = i;
        });
        if (isAscending && isNumerical) return;
      }
      // revert defaults if set incorrectly
      self.options.breakpoints = [576, 768, 1201];
      console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
    }

    if (options && options.breakpoints) {
      validateCustomBreakpoints();
    }

    // By default, rellax class
    if (!el) {
      el = '.rellax';
    }

    // check if el is a className or a node
    var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];

    // Now query selector
    if (elements.length > 0) {
      self.elems = elements;
    }

    // The elements don't exist
    else {
      console.warn("Rellax: The elements you're trying to select don't exist.");
      return;
    }

    // Has a wrapper and it exists
    if (self.options.wrapper) {
      if (!self.options.wrapper.nodeType) {
        var wrapper = document.querySelector(self.options.wrapper);

        if (wrapper) {
          self.options.wrapper = wrapper;
        } else {
          console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
          return;
        }
      }
    }

    // set a placeholder for the current breakpoint
    var currentBreakpoint;

    // helper to determine current breakpoint
    var getCurrentBreakpoint = function (w) {
      var bp = self.options.breakpoints;
      if (w < bp[0]) return 'xs';
      if (w >= bp[0] && w < bp[1]) return 'sm';
      if (w >= bp[1] && w < bp[2]) return 'md';
      return 'lg';
    };

    // Get and cache initial position of all elements
    var cacheBlocks = function() {
      for (var i = 0; i < self.elems.length; i++){
        var block = createBlock(self.elems[i]);
        blocks.push(block);
      }
    };


    // Let's kick this script off
    // Build array for cached element values
    var init = function() {
      for (var i = 0; i < blocks.length; i++){
        self.elems[i].style.cssText = blocks[i].style;
      }

      blocks = [];

      screenY = window.innerHeight;
      screenX = window.innerWidth;
      currentBreakpoint = getCurrentBreakpoint(screenX);

      setPosition();

      cacheBlocks();

      animate();

      // If paused, unpause and set listener for window resizing events
      if (pause) {
        window.addEventListener('resize', init);
        pause = false;
        // Start the loop
        update();
      }
    };

    // We want to cache the parallax blocks'
    // values: base, top, height, speed
    // el: is dom object, return: el cache values
    var createBlock = function(el) {
      var dataPercentage = el.getAttribute( 'data-rellax-percentage' );
      var dataSpeed = el.getAttribute( 'data-rellax-speed' );
      var dataXsSpeed = el.getAttribute( 'data-rellax-xs-speed' );
      var dataMobileSpeed = el.getAttribute( 'data-rellax-mobile-speed' );
      var dataTabletSpeed = el.getAttribute( 'data-rellax-tablet-speed' );
      var dataDesktopSpeed = el.getAttribute( 'data-rellax-desktop-speed' );
      var dataVerticalSpeed = el.getAttribute('data-rellax-vertical-speed');
      var dataHorizontalSpeed = el.getAttribute('data-rellax-horizontal-speed');
      var dataVericalScrollAxis = el.getAttribute('data-rellax-vertical-scroll-axis');
      var dataHorizontalScrollAxis = el.getAttribute('data-rellax-horizontal-scroll-axis');
      var dataZindex = el.getAttribute( 'data-rellax-zindex' ) || 0;
      var dataMin = el.getAttribute( 'data-rellax-min' );
      var dataMax = el.getAttribute( 'data-rellax-max' );
      var dataMinX = el.getAttribute('data-rellax-min-x');
      var dataMaxX = el.getAttribute('data-rellax-max-x');
      var dataMinY = el.getAttribute('data-rellax-min-y');
      var dataMaxY = el.getAttribute('data-rellax-max-y');
      var mapBreakpoints;
      var breakpoints = true;

      if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {
        breakpoints = false;
      } else {
        mapBreakpoints = {
          'xs': dataXsSpeed,
          'sm': dataMobileSpeed,
          'md': dataTabletSpeed,
          'lg': dataDesktopSpeed
        };
      }

      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
      // ensures elements are positioned based on HTML layout.
      //
      // If the element has the percentage attribute, the posY and posX needs to be
      // the current scroll position's value, so that the elements are still positioned based on HTML layout
      var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
      // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
      if (self.options.relativeToWrapper) {
        var scrollPosY = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
        wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
      }
      var posY = self.options.vertical ? ( dataPercentage || self.options.center ? wrapperPosY : 0 ) : 0;
      var posX = self.options.horizontal ? ( dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft) : 0 ) : 0;

      var blockTop = posY + el.getBoundingClientRect().top;
      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

      var blockLeft = posX + el.getBoundingClientRect().left;
      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

      // apparently parallax equation everyone uses
      var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
      var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
      if(self.options.center){ percentageX = 0.5; percentageY = 0.5; }

      // Optional individual block speed as data attr, otherwise global speed
      var speed = (breakpoints && mapBreakpoints[currentBreakpoint] !== null) ? Number(mapBreakpoints[currentBreakpoint]) : (dataSpeed ? dataSpeed : self.options.speed);
      var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
      var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;

      // Optional individual block movement axis direction as data attr, otherwise gobal movement direction
      var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
      var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;

      var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);

      // ~~Store non-translate3d transforms~~
      // Store inline styles and extract transforms
      var style = el.style.cssText;
      var transform = '';

      // Check if there's an inline styled transform
      var searchResult = /transform\s*:/i.exec(style);
      if (searchResult) {
        // Get the index of the transform
        var index = searchResult.index;

        // Trim the style to the transform point and get the following semi-colon index
        var trimmedStyle = style.slice(index);
        var delimiter = trimmedStyle.indexOf(';');

        // Remove "transform" string and save the attribute
        if (delimiter) {
          transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g,'');
        } else {
          transform = " " + trimmedStyle.slice(11).replace(/\s/g,'');
        }
      }

      return {
        baseX: bases.x,
        baseY: bases.y,
        top: blockTop,
        left: blockLeft,
        height: blockHeight,
        width: blockWidth,
        speed: speed,
        verticalSpeed: verticalSpeed,
        horizontalSpeed: horizontalSpeed,
        verticalScrollAxis: verticalScrollAxis,
        horizontalScrollAxis: horizontalScrollAxis,
        style: style,
        transform: transform,
        zindex: dataZindex,
        min: dataMin,
        max: dataMax,
        minX: dataMinX,
        maxX: dataMaxX,
        minY: dataMinY,
        maxY: dataMaxY
      };
    };

    // set scroll position (posY, posX)
    // side effect method is not ideal, but okay for now
    // returns true if the scroll changed, false if nothing happened
    var setPosition = function() {
      var oldY = posY;
      var oldX = posX;

      posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
      posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
      // If option relativeToWrapper is true, use relative wrapper value instead.
      if (self.options.relativeToWrapper) {
        var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
        posY = scrollPosY - self.options.wrapper.offsetTop;
      }


      if (oldY != posY && self.options.vertical) {
        // scroll changed, return true
        return true;
      }

      if (oldX != posX && self.options.horizontal) {
        // scroll changed, return true
        return true;
      }

      // scroll did not change
      return false;
    };

    // Ahh a pure function, gets new transform value
    // based on scrollPosition and speed
    // Allow for decimal pixel values
    var updatePosition = function(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
      var result = {};
      var valueX = ((horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX)));
      var valueY = ((verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY)));

      result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
      result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;

      return result;
    };

    // Remove event listeners and loop again
    var deferredUpdate = function() {
      window.removeEventListener('resize', deferredUpdate);
      window.removeEventListener('orientationchange', deferredUpdate);
      (self.options.wrapper ? self.options.wrapper : window).removeEventListener('scroll', deferredUpdate);
      (self.options.wrapper ? self.options.wrapper : document).removeEventListener('touchmove', deferredUpdate);

      // loop again
      loopId = loop(update);
    };

    // Loop
    var update = function() {
      if (setPosition() && pause === false) {
        animate();

        // loop again
        loopId = loop(update);
      } else {
        loopId = null;

        // Don't animate until we get a position updating event
        window.addEventListener('resize', deferredUpdate);
        window.addEventListener('orientationchange', deferredUpdate);
        (self.options.wrapper ? self.options.wrapper : window).addEventListener('scroll', deferredUpdate, supportsPassive ? { passive: true } : false);
        (self.options.wrapper ? self.options.wrapper : document).addEventListener('touchmove', deferredUpdate, supportsPassive ? { passive: true } : false);
      }
    };

    // Transform3d on parallax element
    var animate = function() {
      var positions;
      for (var i = 0; i < self.elems.length; i++){
        // Determine relevant movement directions
        var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
        var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
        var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
        var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
        var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
        var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;

        var percentageY = ((verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY));
        var percentageX = ((verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX));

        // Subtracting initialize value, so element stays in same spot as HTML
        positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
        var positionY = positions.y - blocks[i].baseY;
        var positionX = positions.x - blocks[i].baseX;

        // The next two "if" blocks go like this:
        // Check if a limit is defined (first "min", then "max");
        // Check if we need to change the Y or the X
        // (Currently working only if just one of the axes is enabled)
        // Then, check if the new position is inside the allowed limit
        // If so, use new position. If not, set position to limit.

        // Check if a min limit is defined
        if (blocks[i].min !== null) {
          if (self.options.vertical && !self.options.horizontal) {
            positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
          }
          if (self.options.horizontal && !self.options.vertical) {
            positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
          }
        }

        // Check if directional min limits are defined
        if (blocks[i].minY != null) {
            positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
        }
        if (blocks[i].minX != null) {
            positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
        }

        // Check if a max limit is defined
        if (blocks[i].max !== null) {
          if (self.options.vertical && !self.options.horizontal) {
            positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
          }
          if (self.options.horizontal && !self.options.vertical) {
            positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
          }
        }

        // Check if directional max limits are defined
        if (blocks[i].maxY != null) {
            positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
        }
        if (blocks[i].maxX != null) {
            positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
        }

        var zindex = blocks[i].zindex;

        // Move that element
        // (Set the new translation and append initial inline transforms.)
        var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
        self.elems[i].style[transformProp] = translate;
      }
      self.options.callback(positions);
    };

    self.destroy = function() {
      for (var i = 0; i < self.elems.length; i++){
        self.elems[i].style.cssText = blocks[i].style;
      }

      // Remove resize event listener if not pause, and pause
      if (!pause) {
        window.removeEventListener('resize', init);
        pause = true;
      }

      // Clear the animation loop to prevent possible memory leak
      clearLoop(loopId);
      loopId = null;
    };

    // Init
    init();

    // Allow to recalculate the initial values whenever we want
    self.refresh = init;

    return self;
  };
  return Rellax;
}));


/***/ }),

/***/ "./node_modules/seamless-scroll-polyfill/lib/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/seamless-scroll-polyfill/lib/common.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backupMethod": () => (/* binding */ backupMethod),
/* harmony export */   "checkBehavior": () => (/* binding */ checkBehavior),
/* harmony export */   "elementScrollXY": () => (/* binding */ elementScrollXY),
/* harmony export */   "failedExecute": () => (/* binding */ failedExecute),
/* harmony export */   "failedExecuteInvalidEnumValue": () => (/* binding */ failedExecuteInvalidEnumValue),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isScrollBehaviorSupported": () => (/* binding */ isScrollBehaviorSupported),
/* harmony export */   "markPolyfill": () => (/* binding */ markPolyfill),
/* harmony export */   "modifyPrototypes": () => (/* binding */ modifyPrototypes),
/* harmony export */   "scrollingElement": () => (/* binding */ scrollingElement)
/* harmony export */ });
const checkBehavior = (behavior) => {
    return behavior === undefined || behavior === "auto" || behavior === "instant" || behavior === "smooth";
};
function elementScrollXY(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
}
const failedExecute = (method, object, reason = "cannot convert to dictionary.") => `Failed to execute '${method}' on '${object}': ${reason}`;
const failedExecuteInvalidEnumValue = (method, object, value) => failedExecute(method, object, `The provided value '${value}' is not a valid enum value of type ScrollBehavior.`);
/* eslint-disable */
const backupMethod = (proto, method, fallback) => {
    var _a;
    const backup = `__SEAMLESS.BACKUP$${method}`;
    if (!proto[backup] && proto[method] && !((_a = proto[method]) === null || _a === void 0 ? void 0 : _a.__isPolyfill)) {
        proto[backup] = proto[method];
    }
    return proto[backup] || fallback;
};
/* eslint-enable */
const isObject = (value) => {
    const type = typeof value;
    return value !== null && (type === "object" || type === "function");
};
const isScrollBehaviorSupported = (config) => "scrollBehavior" in window.document.documentElement.style && (config === null || config === void 0 ? void 0 : config.forcePolyfill) !== true;
const markPolyfill = (method) => {
    Object.defineProperty(method, "__isPolyfill", { value: true });
};
const modifyPrototypes = (prop, func) => {
    markPolyfill(func);
    [HTMLElement.prototype, SVGElement.prototype, Element.prototype].forEach((prototype) => {
        backupMethod(prototype, prop);
        prototype[prop] = func;
    });
};
/**
 * - On Chrome and Firefox, document.scrollingElement will return the <html> element.
 * - Safari, document.scrollingElement will return the <body> element.
 * - On Edge, document.scrollingElement will return the <body> element.
 * - IE11 does not support document.scrollingElement, but you can assume its <html>.
 */
const scrollingElement = (element) => element.ownerDocument.scrollingElement || element.ownerDocument.documentElement;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/seamless-scroll-polyfill/lib/scroll-step.js":
/*!******************************************************************!*\
  !*** ./node_modules/seamless-scroll-polyfill/lib/scroll-step.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "step": () => (/* binding */ step)
/* harmony export */ });
const ease = (k) => {
    return 0.5 * (1 - Math.cos(Math.PI * k));
};
/* eslint-disable */
function now() {
    var _a;
    let fn;
    if ((_a = window.performance) === null || _a === void 0 ? void 0 : _a.now) {
        fn = () => window.performance.now();
    }
    else {
        fn = () => window.Date.now();
    }
    // @ts-ignore
    now = fn;
    return fn();
}
/* eslint-enable */
const DURATION = 500;
const step = (context) => {
    const currentTime = now();
    const elapsed = (currentTime - context.timeStamp) / (context.duration || DURATION);
    if (elapsed > 1) {
        context.method(context.targetX, context.targetY);
        context.callback();
        return;
    }
    const value = (context.timingFunc || ease)(elapsed);
    const currentX = context.startX + (context.targetX - context.startX) * value;
    const currentY = context.startY + (context.targetY - context.startY) * value;
    context.method(currentX, currentY);
    context.rafId = window.requestAnimationFrame(() => {
        step(context);
    });
};
//# sourceMappingURL=scroll-step.js.map

/***/ }),

/***/ "./node_modules/seamless-scroll-polyfill/lib/scroll.js":
/*!*************************************************************!*\
  !*** ./node_modules/seamless-scroll-polyfill/lib/scroll.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementScroll": () => (/* binding */ elementScroll),
/* harmony export */   "elementScrollBy": () => (/* binding */ elementScrollBy),
/* harmony export */   "elementScrollTo": () => (/* binding */ elementScrollTo),
/* harmony export */   "scroll": () => (/* binding */ scroll),
/* harmony export */   "scrollBy": () => (/* binding */ scrollBy),
/* harmony export */   "scrollTo": () => (/* binding */ scrollTo),
/* harmony export */   "windowScroll": () => (/* binding */ windowScroll),
/* harmony export */   "windowScrollBy": () => (/* binding */ windowScrollBy),
/* harmony export */   "windowScrollTo": () => (/* binding */ windowScrollTo)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/seamless-scroll-polyfill/lib/common.js");
/* harmony import */ var _scroll_step_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-step.js */ "./node_modules/seamless-scroll-polyfill/lib/scroll-step.js");


// https://drafts.csswg.org/cssom-view/#normalize-non-finite-values
const nonFinite = (value) => {
    if (!isFinite(value)) {
        return 0;
    }
    return Number(value);
};
const isConnected = (node) => {
    var _a;
    return ((_a = node.isConnected) !== null && _a !== void 0 ? _a : (!node.ownerDocument ||
        // eslint-disable-next-line no-bitwise
        !(node.ownerDocument.compareDocumentPosition(node) & /** DOCUMENT_POSITION_DISCONNECTED */ 1)));
};
const scrollWithOptions = (element, options, config) => {
    var _a, _b;
    if (!isConnected(element)) {
        return;
    }
    const startX = element.scrollLeft;
    const startY = element.scrollTop;
    const targetX = nonFinite((_a = options.left) !== null && _a !== void 0 ? _a : startX);
    const targetY = nonFinite((_b = options.top) !== null && _b !== void 0 ? _b : startY);
    if (targetX === startX && targetY === startY) {
        return;
    }
    const fallback = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.backupMethod)(HTMLElement.prototype, "scroll", _common_js__WEBPACK_IMPORTED_MODULE_0__.elementScrollXY);
    const method = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.backupMethod)(Object.getPrototypeOf(element), "scroll", fallback).bind(element);
    if (options.behavior !== "smooth") {
        method(targetX, targetY);
        return;
    }
    const removeEventListener = () => {
        window.removeEventListener("wheel", cancelScroll);
        window.removeEventListener("touchmove", cancelScroll);
    };
    const context = Object.assign(Object.assign({}, config), { timeStamp: (0,_scroll_step_js__WEBPACK_IMPORTED_MODULE_1__.now)(), startX,
        startY,
        targetX,
        targetY, rafId: 0, method, callback: removeEventListener });
    const cancelScroll = () => {
        window.cancelAnimationFrame(context.rafId);
        removeEventListener();
    };
    window.addEventListener("wheel", cancelScroll, {
        passive: true,
        once: true,
    });
    window.addEventListener("touchmove", cancelScroll, {
        passive: true,
        once: true,
    });
    (0,_scroll_step_js__WEBPACK_IMPORTED_MODULE_1__.step)(context);
};
const isWindow = (obj) => obj.window === obj;
const createScroll = (scrollName) => (target, scrollOptions, config) => {
    const [element, scrollType] = isWindow(target)
        ? [(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.scrollingElement)(target.document.documentElement), "Window"]
        : [target, "Element"];
    const options = scrollOptions !== null && scrollOptions !== void 0 ? scrollOptions : {};
    if (!(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(options)) {
        throw new TypeError((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.failedExecute)(scrollName, scrollType));
    }
    if (!(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.checkBehavior)(options.behavior)) {
        throw new TypeError((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.failedExecuteInvalidEnumValue)(scrollName, scrollType, options.behavior));
    }
    if (scrollName === "scrollBy") {
        options.left = nonFinite(options.left) + element.scrollLeft;
        options.top = nonFinite(options.top) + element.scrollTop;
    }
    scrollWithOptions(element, options, config);
};
const scroll = /* #__PURE__ */ createScroll("scroll");
const scrollTo = /* #__PURE__ */ createScroll("scrollTo");
const scrollBy = /* #__PURE__ */ createScroll("scrollBy");
const elementScroll = scroll;
const elementScrollTo = scrollTo;
const elementScrollBy = scrollBy;
const windowScroll = scroll;
const windowScrollTo = scrollTo;
const windowScrollBy = scrollBy;
//# sourceMappingURL=scroll.js.map

/***/ }),

/***/ "./node_modules/seamless-scroll-polyfill/lib/scrollIntoView.js":
/*!*********************************************************************!*\
  !*** ./node_modules/seamless-scroll-polyfill/lib/scrollIntoView.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementScrollIntoView": () => (/* binding */ elementScrollIntoView),
/* harmony export */   "scrollIntoView": () => (/* binding */ scrollIntoView)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/seamless-scroll-polyfill/lib/common.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll.js */ "./node_modules/seamless-scroll-polyfill/lib/scroll.js");
/* eslint-disable no-bitwise */


// https://drafts.csswg.org/css-writing-modes-4/#block-flow
const normalizeWritingMode = (writingMode) => {
    switch (writingMode) {
        case "horizontal-tb":
        case "lr":
        case "lr-tb":
        case "rl":
        case "rl-tb":
            return 0 /* HorizontalTb */;
        case "vertical-rl":
        case "tb":
        case "tb-rl":
            return 1 /* VerticalRl */;
        case "vertical-lr":
        case "tb-lr":
            return 2 /* VerticalLr */;
        case "sideways-rl":
            return 3 /* SidewaysRl */;
        case "sideways-lr":
            return 4 /* SidewaysLr */;
    }
    return 0 /* HorizontalTb */;
};
const calcPhysicalAxis = (writingMode, isLTR, hPos, vPos) => {
    /**  0b{vertical}{horizontal}  0: normal, 1: reverse */
    let layout = 0b00;
    /**
     * WritingMode.VerticalLr: ↓→
     * | 1 | 4 |   |
     * | 2 | 5 |   |
     * | 3 |   |   |
     *
     * RTL: ↑→
     * | 3 |   |   |
     * | 2 | 5 |   |
     * | 1 | 4 |   |
     */
    if (!isLTR) {
        layout ^= 2 /* ReverseVertical */;
    }
    switch (writingMode) {
        /**
         * ↓→
         * | 1 | 2 | 3 |
         * | 4 | 5 |   |
         * |   |   |   |
         *
         * RTL: ↓←
         * | 3 | 2 | 1 |
         * |   | 5 | 4 |
         * |   |   |   |
         */
        case 0 /* HorizontalTb */:
            // swap horizontal and vertical
            layout = (layout >> 1) | ((layout & 1) << 1);
            [hPos, vPos] = [vPos, hPos];
            break;
        /**
         * ↓←
         * |   | 4 | 1 |
         * |   | 5 | 2 |
         * |   |   | 3 |
         *
         * RTL: ↑←
         * |   |   | 3 |
         * |   | 5 | 2 |
         * |   | 4 | 1 |
         */
        case 1 /* VerticalRl */:
        case 3 /* SidewaysRl */:
            //  reverse horizontal
            layout ^= 1 /* ReverseHorizontal */;
            break;
        /**
         * ↑→
         * | 3 |   |   |
         * | 2 | 5 |   |
         * | 1 | 4 |   |
         *
         * RTL: ↓→
         * | 1 | 4 |   |
         * | 2 | 5 |   |
         * | 3 |   |   |
         */
        case 4 /* SidewaysLr */:
            // reverse vertical
            layout ^= 2 /* ReverseVertical */;
            break;
    }
    return [layout, hPos, vPos];
};
const isXReversed = (computedStyle) => {
    const layout = calcPhysicalAxis(normalizeWritingMode(computedStyle.writingMode), computedStyle.direction !== "rtl", undefined, undefined)[0];
    return (layout & 1) === 1;
};
// https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/dom/element.cc;l=1097-1189;drc=6a7533d4a1e9f2372223a9d912a9e53a6fa35ae0
const toPhysicalAlignment = (options, writingMode, isLTR) => {
    const [layout, hPos, vPos] = calcPhysicalAxis(writingMode, isLTR, options.block || "start", options.inline || "nearest");
    return [hPos, vPos].map((value, index) => {
        switch (value) {
            case "center":
                return 1 /* CenterAlways */;
            case "nearest":
                return 0 /* ToEdgeIfNeeded */;
            default: {
                const reverse = (layout >> index) & 1;
                return (value === "start") === !reverse ? 2 /* LeftOrTop */ : 3 /* RightOrBottom */;
            }
        }
    });
};
// code from stipsan/compute-scroll-into-view
// https://github.com/stipsan/compute-scroll-into-view/blob/5396c6b78af5d0bbce11a7c4e93cc3146546fcd3/src/index.ts
/**
 * Find out which edge to align against when logical scroll position is "nearest"
 * Interesting fact: "nearest" works similarily to "if-needed", if the element is fully visible it will not scroll it
 *
 * Legends:
 * ┌────────┐ ┏ ━ ━ ━ ┓
 * │ target │   frame
 * └────────┘ ┗ ━ ━ ━ ┛
 */
const mapNearest = (align, scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, elementEdgeStart, elementEdgeEnd, elementSize) => {
    if (align !== 0 /* ToEdgeIfNeeded */) {
        return align;
    }
    /**
     * If element edge A and element edge B are both outside scrolling box edge A and scrolling box edge B
     *
     *          ┌──┐
     *        ┏━│━━│━┓
     *          │  │
     *        ┃ │  │ ┃        do nothing
     *          │  │
     *        ┗━│━━│━┛
     *          └──┘
     *
     *  If element edge C and element edge D are both outside scrolling box edge C and scrolling box edge D
     *
     *    ┏ ━ ━ ━ ━ ┓
     *   ┌───────────┐
     *   │┃         ┃│        do nothing
     *   └───────────┘
     *    ┗ ━ ━ ━ ━ ┛
     */
    if ((elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd) ||
        (elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd)) {
        return null;
    }
    /**
     * If element edge A is outside scrolling box edge A and element height is less than scrolling box height
     *
     *          ┌──┐
     *        ┏━│━━│━┓         ┏━┌━━┐━┓
     *          └──┘             │  │
     *  from  ┃      ┃     to  ┃ └──┘ ┃
     *
     *        ┗━ ━━ ━┛         ┗━ ━━ ━┛
     *
     * If element edge B is outside scrolling box edge B and element height is greater than scrolling box height
     *
     *        ┏━ ━━ ━┓         ┏━┌━━┐━┓
     *                           │  │
     *  from  ┃ ┌──┐ ┃     to  ┃ │  │ ┃
     *          │  │             │  │
     *        ┗━│━━│━┛         ┗━│━━│━┛
     *          │  │             └──┘
     *          │  │
     *          └──┘
     *
     * If element edge C is outside scrolling box edge C and element width is less than scrolling box width
     *
     *       from                 to
     *    ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
     *  ┌───┐                 ┌───┐
     *  │ ┃ │       ┃         ┃   │     ┃
     *  └───┘                 └───┘
     *    ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
     *
     * If element edge D is outside scrolling box edge D and element width is greater than scrolling box width
     *
     *       from                 to
     *    ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
     *        ┌───────────┐   ┌───────────┐
     *    ┃   │     ┃     │   ┃         ┃ │
     *        └───────────┘   └───────────┘
     *    ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
     */
    if ((elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize) ||
        (elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize)) {
        return 2 /* LeftOrTop */;
    }
    /**
     * If element edge B is outside scrolling box edge B and element height is less than scrolling box height
     *
     *        ┏━ ━━ ━┓         ┏━ ━━ ━┓
     *
     *  from  ┃      ┃     to  ┃ ┌──┐ ┃
     *          ┌──┐             │  │
     *        ┗━│━━│━┛         ┗━└━━┘━┛
     *          └──┘
     *
     * If element edge A is outside scrolling box edge A and element height is greater than scrolling box height
     *
     *          ┌──┐
     *          │  │
     *          │  │             ┌──┐
     *        ┏━│━━│━┓         ┏━│━━│━┓
     *          │  │             │  │
     *  from  ┃ └──┘ ┃     to  ┃ │  │ ┃
     *                           │  │
     *        ┗━ ━━ ━┛         ┗━└━━┘━┛
     *
     * If element edge C is outside scrolling box edge C and element width is greater than scrolling box width
     *
     *           from                 to
     *        ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
     *  ┌───────────┐           ┌───────────┐
     *  │     ┃     │   ┃       │ ┃         ┃
     *  └───────────┘           └───────────┘
     *        ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
     *
     * If element edge D is outside scrolling box edge D and element width is less than scrolling box width
     *
     *           from                 to
     *        ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
     *                ┌───┐             ┌───┐
     *        ┃       │ ┃ │       ┃     │   ┃
     *                └───┘             └───┘
     *        ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
     *
     */
    if ((elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize) ||
        (elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize)) {
        return 3 /* RightOrBottom */;
    }
    return null;
};
const canOverflow = (overflow) => {
    return overflow !== "visible" && overflow !== "clip";
};
const getFrameElement = (element) => {
    var _a;
    try {
        return ((_a = element.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.frameElement) || null;
    }
    catch (_b) {
        return null;
    }
};
const isScrollable = (element, computedStyle) => {
    if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
        return (canOverflow(computedStyle.overflowY) ||
            canOverflow(computedStyle.overflowX) ||
            element === (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.scrollingElement)(element));
    }
    return false;
};
const parentElement = (element) => {
    const pNode = element.parentNode;
    const pElement = element.parentElement;
    if (pElement === null && pNode !== null) {
        if (pNode.nodeType === /** Node.DOCUMENT_FRAGMENT_NODE */ 11) {
            return pNode.host;
        }
        if (pNode.nodeType === /** Node.DOCUMENT_NODE */ 9) {
            return getFrameElement(element);
        }
    }
    return pElement;
};
const clamp = (value, min, max) => {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
};
const getSupportedScrollMarginProperty = (ownerDocument) => {
    // Webkit uses "scroll-snap-margin" https://bugs.webkit.org/show_bug.cgi?id=189265.
    return ["scroll-margin", "scroll-snap-margin"].filter((property) => property in ownerDocument.documentElement.style)[0];
};
const getElementScrollSnapArea = (element, elementRect, computedStyle) => {
    const { top, right, bottom, left } = elementRect;
    const scrollProperty = getSupportedScrollMarginProperty(element.ownerDocument);
    if (!scrollProperty) {
        return [top, right, bottom, left];
    }
    const scrollMarginValue = (edge) => {
        const value = computedStyle.getPropertyValue(`${scrollProperty}-${edge}`);
        return parseInt(value, 10) || 0;
    };
    return [
        top - scrollMarginValue("top"),
        right + scrollMarginValue("right"),
        bottom + scrollMarginValue("bottom"),
        left - scrollMarginValue("left"),
    ];
};
const calcAlignEdge = (align, start, end) => {
    switch (align) {
        case 1 /* CenterAlways */:
            return (start + end) / 2;
        case 3 /* RightOrBottom */:
            return end;
        case 2 /* LeftOrTop */:
        case 0 /* ToEdgeIfNeeded */:
            return start;
    }
};
const getFrameViewport = (frame, frameRect) => {
    var _a, _b, _c;
    const visualViewport = (_a = frame.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.visualViewport;
    const [x, y, width, height] = frame === (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.scrollingElement)(frame)
        ? [0, 0, (_b = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.width) !== null && _b !== void 0 ? _b : frame.clientWidth, (_c = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.height) !== null && _c !== void 0 ? _c : frame.clientHeight]
        : [frameRect.left, frameRect.top, frame.clientWidth, frame.clientHeight];
    const left = x + frame.clientLeft;
    const top = y + frame.clientTop;
    const right = left + width;
    const bottom = top + height;
    return [top, right, bottom, left];
};
const computeScrollIntoView = (element, options) => {
    // Collect all the scrolling boxes, as defined in the spec: https://drafts.csswg.org/cssom-view/#scrolling-box
    const actions = [];
    let ownerDocument = element.ownerDocument;
    let ownerWindow = ownerDocument.defaultView;
    if (!ownerWindow) {
        return actions;
    }
    const computedStyle = window.getComputedStyle(element);
    const isLTR = computedStyle.direction !== "rtl";
    const writingMode = normalizeWritingMode(computedStyle.writingMode ||
        computedStyle.getPropertyValue("-webkit-writing-mode") ||
        computedStyle.getPropertyValue("-ms-writing-mode"));
    const [alignH, alignV] = toPhysicalAlignment(options, writingMode, isLTR);
    let [top, right, bottom, left] = getElementScrollSnapArea(element, element.getBoundingClientRect(), computedStyle);
    for (let frame = parentElement(element); frame !== null; frame = parentElement(frame)) {
        if (ownerDocument !== frame.ownerDocument) {
            ownerDocument = frame.ownerDocument;
            ownerWindow = ownerDocument.defaultView;
            if (!ownerWindow) {
                break;
            }
            const { left: dX, top: dY } = frame.getBoundingClientRect();
            top += dY;
            right += dX;
            bottom += dY;
            left += dX;
        }
        const frameStyle = ownerWindow.getComputedStyle(frame);
        if (frameStyle.position === "fixed") {
            break;
        }
        if (!isScrollable(frame, frameStyle)) {
            continue;
        }
        const frameRect = frame.getBoundingClientRect();
        const [frameTop, frameRight, frameBottom, frameLeft] = getFrameViewport(frame, frameRect);
        const eAlignH = mapNearest(alignH, frameLeft, frameRight, frame.clientWidth, left, right, right - left);
        const eAlignV = mapNearest(alignV, frameTop, frameBottom, frame.clientHeight, top, bottom, bottom - top);
        const diffX = eAlignH === null ? 0 : calcAlignEdge(eAlignH, left, right) - calcAlignEdge(eAlignH, frameLeft, frameRight);
        const diffY = eAlignV === null ? 0 : calcAlignEdge(eAlignV, top, bottom) - calcAlignEdge(eAlignV, frameTop, frameBottom);
        const moveX = isXReversed(frameStyle)
            ? clamp(diffX, -frame.scrollWidth + frame.clientWidth - frame.scrollLeft, -frame.scrollLeft)
            : clamp(diffX, -frame.scrollLeft, frame.scrollWidth - frame.clientWidth - frame.scrollLeft);
        const moveY = clamp(diffY, -frame.scrollTop, frame.scrollHeight - frame.clientHeight - frame.scrollTop);
        actions.push([
            frame,
            { left: frame.scrollLeft + moveX, top: frame.scrollTop + moveY, behavior: options.behavior },
        ]);
        top = Math.max(top - moveY, frameTop);
        right = Math.min(right - moveX, frameRight);
        bottom = Math.min(bottom - moveY, frameBottom);
        left = Math.max(left - moveX, frameLeft);
    }
    return actions;
};
const scrollIntoView = (element, scrollIntoViewOptions, config) => {
    const options = scrollIntoViewOptions || {};
    if (!(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.checkBehavior)(options.behavior)) {
        throw new TypeError((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.failedExecuteInvalidEnumValue)("scrollIntoView", "Element", options.behavior));
    }
    const actions = computeScrollIntoView(element, options);
    actions.forEach(([frame, scrollToOptions]) => {
        (0,_scroll_js__WEBPACK_IMPORTED_MODULE_1__.elementScroll)(frame, scrollToOptions, config);
    });
};
const elementScrollIntoView = scrollIntoView;
//# sourceMappingURL=scrollIntoView.js.map

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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