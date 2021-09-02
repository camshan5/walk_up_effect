/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./walk_up_effect/static/sass/theme.scss":
/*!***********************************************!*\
  !*** ./walk_up_effect/static/sass/theme.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./walk_up_effect/static/js/aos.js":
/*!*****************************************!*\
  !*** ./walk_up_effect/static/js/aos.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
//
// aos.js
// Theme module
//



const options = {
  duration: 700,
  easing: "ease-out-quad",
  once: true,
  startEvent: "load",
}

aos__WEBPACK_IMPORTED_MODULE_0___default().init(options)


/***/ }),

/***/ "./walk_up_effect/static/js/bigpicture.js":
/*!************************************************!*\
  !*** ./walk_up_effect/static/js/bigpicture.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bigpicture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bigpicture */ "./node_modules/bigpicture/index.js");
/* harmony import */ var bigpicture__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bigpicture__WEBPACK_IMPORTED_MODULE_0__);
//
// bigpicture.js
// Theme module



const toggles = document.querySelectorAll('[data-bigpicture]');

toggles.forEach(function(toggle) {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();

    const elementOptions = JSON.parse(toggle.dataset.bigpicture);

    const defaultOptions = {
      el: toggle,
      noLoader: true
    };

    const options = {
      ...defaultOptions,
      ...elementOptions
    };

    bigpicture__WEBPACK_IMPORTED_MODULE_0___default()(options);
  });
});


/***/ }),

/***/ "./walk_up_effect/static/js/isotope.js":
/*!*********************************************!*\
  !*** ./walk_up_effect/static/js/isotope.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_1__);
//
// isotope.js
// Theme module
//




const toggles = document.querySelectorAll('[data-isotope]');
const filters = document.querySelectorAll('[data-filter]');

toggles.forEach(function(toggle) {
  imagesloaded__WEBPACK_IMPORTED_MODULE_1___default()(toggle, function() {
    const options = JSON.parse(toggle.dataset.isotope);

    new (isotope_layout__WEBPACK_IMPORTED_MODULE_0___default())(toggle, options);
  });
});

filters.forEach(function(filter) {
  filter.addEventListener('click', function(e) {
    e.preventDefault();

    const cat = filter.dataset.filter;
    const target = filter.dataset.bsTarget;
    const instance = isotope_layout__WEBPACK_IMPORTED_MODULE_0___default().data(target);

    instance.arrange({
      filter: cat
    });
  });
});


/***/ }),

/***/ "./walk_up_effect/static/js/jarallax.js":
/*!**********************************************!*\
  !*** ./walk_up_effect/static/js/jarallax.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_0__);
//
// jarallax.js
// Theme module
//



const toggles = document.querySelectorAll('[data-jarallax], [data-jarallax-element]');

// Add Video extension
(0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallaxVideo)();

// Add Element extension
(0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallaxElement)();

// Init Jarallax
(0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallax)(toggles);


/***/ }),

/***/ "./walk_up_effect/static/js/modal.js":
/*!*******************************************!*\
  !*** ./walk_up_effect/static/js/modal.js ***!
  \*******************************************/
/***/ (function() {

//
// modal.js
// Theme module
//

const modals = document.querySelectorAll('.modal');

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function overflowHide() {
  const scrollbarWidth = getScrollbarWidth();

  document.documentElement.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
}

function overflowShow() {
  document.documentElement.style.overflow = '';
  document.body.style.paddingRight = '';
}

modals.forEach(function(modal) {
  modal.addEventListener('show.bs.modal', function() {
    overflowHide();
  });

  modal.addEventListener('hidden.bs.modal', function() {
    overflowShow();
  });
});


/***/ }),

/***/ "./walk_up_effect/static/js/navbar-dropdown.js":
/*!*****************************************************!*\
  !*** ./walk_up_effect/static/js/navbar-dropdown.js ***!
  \*****************************************************/
/***/ (function() {

//
// navbar-dropdown.js
// Theme module
//

// Selectors
const drops = document.querySelectorAll('.navbar-nav .dropdown, .navbar-nav .dropend');

// Events
const showEvents = ['mouseenter'];
const hideEvents = ['mouseleave', 'click'];

// Transition
const transitionDuration = 200;

// Breakpoint
const desktopSize = 992;

// Show drop
function showDrop(menu) {
  if (window.innerWidth < desktopSize) {
    return;
  }

  menu.classList.add('showing');

  setTimeout(function() {
    menu.classList.remove('showing');
    menu.classList.add('show');
  }, 1);
}

// Hide drop
function hideDrop(e, menu) {
  setTimeout(function() {
    if (window.innerWidth < desktopSize) {
      return;
    }

    if (!menu.classList.contains('show')) {
      return;
    }

    if (e.type === 'click' && e.target.closest('.dropdown-menu form')) {
      return;
    }

    menu.classList.add('showing');
    menu.classList.remove('show');

    setTimeout(function() {
      menu.classList.remove('showing');
    }, transitionDuration);
  }, 2);
}

drops.forEach(function(dropdown) {
  const menu = dropdown.querySelector('.dropdown-menu');

  // Show drop
  showEvents.forEach(function(event) {
    dropdown.addEventListener(event, function() {
      showDrop(menu);
    });
  });

  // Hide drop
  hideEvents.forEach(function(event) {
    dropdown.addEventListener(event, function(e) {
      hideDrop(e, menu);
    });
  });
});


/***/ }),

/***/ "./walk_up_effect/static/js/navbar.js":
/*!********************************************!*\
  !*** ./walk_up_effect/static/js/navbar.js ***!
  \********************************************/
/***/ (function() {

//
// navbar.js
// Theme module
//

const navbarTogglable = document.querySelectorAll(".navbar-togglable")
const navbarCollapse = document.querySelectorAll(".navbar-collapse")
const windowEvents = ["load", "scroll"]

let isLight = false

function makeNavbarDark(navbar) {
  navbar.classList.remove("navbar-light")
  navbar.classList.remove("bg-white")
  navbar.classList.add("navbar-dark")

  isLight = false
}

function makeNavbarLight(navbar) {
  navbar.classList.remove("navbar-dark")
  navbar.classList.add("navbar-light")
  navbar.classList.add("bg-white")

  isLight = true
}

let isBlack = false

let makeNavbarTransparent = (navbar) => {
  navbar.classList.remove("navbar-light")
  navbar.classList.remove("bg-black")
  navbar.classList.add("navbar-dark")

  isBlack = false
}

let makeNavbarBlack = (navbar) => {
  navbar.classList.add("bg-black")

  isBlack = true
}

function toggleNavbar(navbar) {
  const scrollTop = window.pageYOffset

  if (scrollTop && !isBlack) {
    makeNavbarBlack(navbar)
  }

  if (!scrollTop) {
    makeNavbarTransparent(navbar)
  }
}

function overflowHide() {
  const scrollbarWidth = getScrollbarWidth()

  document.documentElement.style.overflow = "hidden"
  document.body.style.paddingRight = scrollbarWidth + "px"
}

function overflowShow() {
  document.documentElement.style.overflow = ""
  document.body.style.paddingRight = ""
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth
}

navbarTogglable.forEach(function (navbar) {
  windowEvents.forEach(function (event) {
    window.addEventListener(event, function () {
      toggleNavbar(navbar)
    })
  })
})

navbarCollapse.forEach(function (collapse) {
  collapse.addEventListener("show.bs.collapse", function () {
    overflowHide()
  })

  collapse.addEventListener("hidden.bs.collapse", function () {
    overflowShow()
  })
})


/***/ }),

/***/ "./walk_up_effect/static/js/popover.js":
/*!*********************************************!*\
  !*** ./walk_up_effect/static/js/popover.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
//
// popover.js
// Theme module
//



const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');

popovers.forEach(popover => {
  new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Popover(popover);
});


/***/ }),

/***/ "./walk_up_effect/static/js/pricing.js":
/*!*********************************************!*\
  !*** ./walk_up_effect/static/js/pricing.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");
//
// pricing.js
// Theme module
//



const toggles = document.querySelectorAll('[data-toggle="price"]');
const DURATION = 1;

toggles.forEach(toggle => {
  toggle.addEventListener('change', (e) => {
    const input = e.target;
    const isChecked = input.checked;

    const target = input.dataset.target;
    const targets = document.querySelectorAll(target);

    targets.forEach(target => {
      const annual = target.dataset.annual;
      const monthly = target.dataset.monthly;
      const options = target.dataset.options ? JSON.parse(target.dataset.options) : {};

      options.startVal = isChecked ? annual : monthly;
      options.duration = options.duration ? options.duration : DURATION;

      const countUp = isChecked ? new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp(target, monthly, options) : new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp(target, annual, options);

      countUp.start();
    });
  });
});


/***/ }),

/***/ "./walk_up_effect/static/js/smooth-scroll.js":
/*!***************************************************!*\
  !*** ./walk_up_effect/static/js/smooth-scroll.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);
//
// smooth-scroll.js
// Theme module
//



const toggle = '[data-scroll]';
const header = '.navbar.fixed-top';
const offset = 24;

const options = {
  header: header,
  offset: function(anchor, toggle) {
    return toggle.dataset.scroll && JSON.parse(toggle.dataset.scroll).offset !== undefined ? JSON.parse(toggle.dataset.scroll).offset : offset;
  }
};

new (smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default())(toggle, options);


/***/ }),

/***/ "./walk_up_effect/static/js/theme.js":
/*!*******************************************!*\
  !*** ./walk_up_effect/static/js/theme.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flickity_imagesloaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flickity-imagesloaded */ "./node_modules/flickity-imagesloaded/flickity-imagesloaded.js");
/* harmony import */ var flickity_imagesloaded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flickity_imagesloaded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flickity-as-nav-for */ "./node_modules/flickity-as-nav-for/as-nav-for.js");
/* harmony import */ var flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flickity_fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flickity-fade */ "./node_modules/flickity-fade/flickity-fade.js");
/* harmony import */ var flickity_fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flickity_fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aos */ "./walk_up_effect/static/js/aos.js");
/* harmony import */ var _bigpicture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bigpicture */ "./walk_up_effect/static/js/bigpicture.js");
/* harmony import */ var _isotope__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isotope */ "./walk_up_effect/static/js/isotope.js");
/* harmony import */ var _jarallax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jarallax */ "./walk_up_effect/static/js/jarallax.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal */ "./walk_up_effect/static/js/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar */ "./walk_up_effect/static/js/navbar.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _navbar_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar-dropdown */ "./walk_up_effect/static/js/navbar-dropdown.js");
/* harmony import */ var _navbar_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_navbar_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popover */ "./walk_up_effect/static/js/popover.js");
/* harmony import */ var _pricing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pricing */ "./walk_up_effect/static/js/pricing.js");
/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./smooth-scroll */ "./walk_up_effect/static/js/smooth-scroll.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tooltip */ "./walk_up_effect/static/js/tooltip.js");
/* harmony import */ var _typed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./typed */ "./walk_up_effect/static/js/typed.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user.js */ "./walk_up_effect/static/js/user.js");
// Vendor







// Theme













// User specific files

// import "./user/stripe";


/***/ }),

/***/ "./walk_up_effect/static/js/tooltip.js":
/*!*********************************************!*\
  !*** ./walk_up_effect/static/js/tooltip.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
//
// tooltip.js
// Theme module
//



const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')

tooltips.forEach((tooltip) => {
  new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Tooltip(tooltip)
})


/***/ }),

/***/ "./walk_up_effect/static/js/typed.js":
/*!*******************************************!*\
  !*** ./walk_up_effect/static/js/typed.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_0__);
//
// typed.js
// Theme module
//



const toggles = document.querySelectorAll("[data-typed]");

toggles.forEach((toggle) => {
  const elementOptions = toggle.dataset.typed
    ? JSON.parse(toggle.dataset.typed)
    : {};

  const defaultOptions = {
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
  };

  const options = {
    ...defaultOptions,
    ...elementOptions,
  };

  new (typed_js__WEBPACK_IMPORTED_MODULE_0___default())(toggle, options);
});


/***/ }),

/***/ "./walk_up_effect/static/js/user.js":
/*!******************************************!*\
  !*** ./walk_up_effect/static/js/user.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_0__);
//
// user.js
// Use this to write your custom JS
//



// Function to handle alerts on a successful copy to clipboard action

document.getElementById("copyBtn").onclick = () => {
  let text = document.getElementById("textId").value;
  navigator.clipboard
    .writeText(text.trim())
    .then(() => {
      sweetalert__WEBPACK_IMPORTED_MODULE_0___default()({
        title: "Success!",
        text:
          "A message to send to your friends and family has now been copied! Now you paste it into a text, email, or social media! Thank you! ",
        icon: "success",
      });
    })
    .catch((err) => {
      sweetalert__WEBPACK_IMPORTED_MODULE_0___default()(
        {
          title: "Something went wrong!",
          text: "There has been an error in copying the message.",
          icon: "error",
        },
        err
      );
    });
};

// Function to handle alerts on form submission

let form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();

  let data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      sweetalert__WEBPACK_IMPORTED_MODULE_0___default()({
        title: "Thanks!",
        text:
          "Your information has been submitted to the Walk Up team. Someone will be in touch with you shortly.",
        icon: "success",
      });
      form.reset();
    })
    .catch((error) => {
      sweetalert__WEBPACK_IMPORTED_MODULE_0___default()(
        {
          title: "Something went wrong!",
          text: "Make sure you fill out the entire form before submitting.",
          icon: "error",
        },
        error
      );
    });
}
form.addEventListener("submit", handleSubmit);


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"theme": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwalk_up_effect"] = self["webpackChunkwalk_up_effect"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./walk_up_effect/static/js/theme.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./walk_up_effect/static/sass/theme.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=theme.bundle.js.map