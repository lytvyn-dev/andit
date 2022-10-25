/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("\n\nwindow.addEventListener(\"load\", function () {\n\tdocument.documentElement.classList.remove(\"global-preload\");\n});\n\n\n//!======== Dropdown menu Desctop ==============\n\ndocument.querySelector('.header-nav__list').addEventListener('click', function (e) {\n\tif (!e.target.classList.contains('header-nav__link_dropdown')) return;\n\tconst isMenuActive = document.querySelector('.mega-menu_active')\n\tif (isMenuActive && isMenuActive !== e.target.nextElementSibling) {\n\t\tdocument.querySelector('.mega-menu_active').classList.remove('mega-menu_active');\n\t\tdocument.querySelector('.header-nav__link_active').classList.remove('header-nav__link_active');\n\t}\n\te.target.nextElementSibling.classList.toggle('mega-menu_active');\n\te.target.classList.toggle('header-nav__link_active');\n});\n\n//! ========= Accordion Mobile=========\nconst mobileMenuQuery = window.matchMedia('(max-width: 991px)')\nfunction initMobileMenu(e) {\n\tif (e.matches) {\n\t\tdocument.querySelector('.header-nav__list').addEventListener('click', function (e) {\n\t\t\tif (!e.target.classList.contains('header-nav__link_dropdown')) return;\n\t\t\tconst menu = e.target.nextElementSibling;\n\n\t\t\tif (menu.style.maxHeight) {\n\t\t\t\tmenu.style.maxHeight = null;\n\t\t\t} else {\n\t\t\t\tmenu.style.maxHeight = menu.scrollHeight + \"px\";\n\t\t\t}\n\t\t})\n\t}\n}\n\nmobileMenuQuery.addListener(initMobileMenu);\n\ninitMobileMenu(mobileMenuQuery);\n\n//! ================ Navigation ==================\nconst navButton = document.querySelector('.menu__icon');\nif (navButton) {\n\tconst nav = document.querySelector('.header-nav');\n\tconst overlay = document.querySelector('.header-overlay');\n\tnavButton.addEventListener(\"click\", function (e) {\n\t\tnavButton.classList.toggle('_active');\n\t\tif (!nav.classList.contains('active')) {\n\t\t\tnav.classList.add('active');\n\t\t\toverlay.classList.add('active');\n\t\t} else {\n\t\t\tnav.classList.remove('active');\n\t\t\toverlay.classList.remove('active');\n\t\t}\n\t});\n};\n\n//!======== Slider ==============\n\nif (document.querySelector('.hero-slider')) {\n\tnew Splide('.hero-slider', {\n\t\tclasses: {\n\t\t\tarrows: 'splide__arrows slider-main__controls',\n\t\t\tprev: 'splide__arrow--prev slider-arrow_prev',\n\t\t\tnext: 'splide__arrow--next slider-arrow_next',\n\t\t},\n\t\ttype: 'slide',\n\t\tperPage: 2,\n\t\tgap: 120,\n\t\tautoWidth: true,\n\t\tbreakpoints: {\n\t\t\t1024: {\n\t\t\t\tautoWidth: false,\n\t\t\t},\n\t\t\t992: {\n\t\t\t\tperPage: 1,\n\t\t\t},\n\t\t}\n\t}).mount();\n}\n;\nif (document.querySelector('.memberships-slider')) {\n\tnew Splide('.memberships-slider', {\n\t\tclasses: {\n\t\t\tarrows: 'splide__arrows slider-main__controls',\n\t\t\tprev: 'splide__arrow--prev slider-arrow_prev',\n\t\t\tnext: 'splide__arrow--next slider-arrow_next',\n\t\t},\n\t\ttype: 'slide',\n\t\tperPage: 2,\n\t\tgap: 50,\n\t\tautoHeight: false,\n\t\tbreakpoints: {\n\t\t\t640: {\n\t\t\t\tperPage: 1,\n\t\t\t},\n\t\t}\n\t}).mount();\n}\n;\nif (document.querySelector('.services-slider__body')) {\n\tnew Splide('.services-slider__body', {\n\t\tclasses: {\n\t\t\tarrows: 'splide__arrows slider-main__controls',\n\t\t\tprev: 'splide__arrow--prev slider-arrow_prev',\n\t\t\tnext: 'splide__arrow--next slider-arrow_next',\n\t\t},\n\t\ttype: 'slide',\n\t\tperMove: 1,\n\t\tgap: 32,\n\t\tautoWidth: true,\n\t\tautoHeight: false,\n\t\tdrag: 'free',\n\t\tbreakpoints: {\n\t\t\t768: {\n\t\t\t\ttype: 'slide',\n\t\t\t\tperPage: 2,\n\t\t\t\tautoWidth: false,\n\t\t\t\tdrag: true,\n\t\t\t},\n\t\t\t640: {\n\t\t\t\tperPage: 1,\n\t\t\t},\n\t\t}\n\t}).mount();\n}\n// document.querySelectorAll(\".select\").forEach(function (selectWrapper) {\n\t\t//   const selectBtn = selectWrapper.querySelector(\".select__button\");\n//   const selectList = selectWrapper.querySelector(\".select__list\");\n//   const selectListItems = selectList.querySelectorAll(\".select__item\");\n//   const selectInput = selectWrapper.querySelector(\".select__input-hidden\");\n//   const hideOptions = function () {\n//     selectBtn.classList.remove(\"select__button_active\");\n//     selectList.classList.remove(\"select__list_visible\");\n//   };\n//   selectBtn.addEventListener(\"click\", function (e) {\n//     e.preventDefault();\n//     selectList.classList.toggle(\"select__list_visible\");\n//     this.classList.add(\"select__button_active\");\n//   });\n//   selectListItems.forEach(function (listItem) {\n//     listItem.addEventListener(\"click\", function (e) {\n//       e.stopPropagation();\n//       selectBtn.innerText = this.innerText;\n//       selectBtn.focus();\n//       selectInput.value = this.dataset.value;\n//       hideOptions();\n//       selectBtn.classList.add(\"select__button_filled\");\n//     });\n//   });\n//   document.addEventListener(\"click\", function (e) {\n//     if (e.target !== selectBtn) {\n//       hideOptions();\n//     }\n//   });\n//   document.addEventListener(\"keydown\", function (e) {\n//     if (e.key === \"Tab\" || e.key === \"Escape\") {\n//       hideOptions();\n//     }\n//   });\n// });\n\n//# sourceURL=webpack://camp360/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;