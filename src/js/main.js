"use strict";

window.addEventListener("load", function () {
	document.documentElement.classList.remove("global-preload");
});


//!======== Dropdown menu Desctop ==============

document.querySelector('.header-nav__list').addEventListener('click', function (e) {
	if (!e.target.classList.contains('header-nav__link_dropdown')) return;
	const isMenuActive = document.querySelector('.mega-menu_active')
	if (isMenuActive && isMenuActive !== e.target.nextElementSibling) {
		document.querySelector('.mega-menu_active').classList.remove('mega-menu_active');
		document.querySelector('.header-nav__link_active').classList.remove('header-nav__link_active');
	}
	e.target.nextElementSibling.classList.toggle('mega-menu_active');
	e.target.classList.toggle('header-nav__link_active');
});

//! ========= Accordion Mobile=========
const mobileMenuQuery = window.matchMedia('(max-width: 991px)')
function initMobileMenu(e) {
	if (e.matches) {
		document.querySelector('.header-nav__list').addEventListener('click', function (e) {
			if (!e.target.classList.contains('header-nav__link_dropdown')) return;
			const menu = e.target.nextElementSibling;

			if (menu.style.maxHeight) {
				menu.style.maxHeight = null;
			} else {
				menu.style.maxHeight = menu.scrollHeight + "px";
			}
		})
	}
}

mobileMenuQuery.addListener(initMobileMenu);

initMobileMenu(mobileMenuQuery);

//! ================ Navigation ==================
const navButton = document.querySelector('.menu__icon');
if (navButton) {
	const nav = document.querySelector('.header-nav');
	const overlay = document.querySelector('.header-overlay');
	navButton.addEventListener("click", function (e) {
		navButton.classList.toggle('_active');
		if (!nav.classList.contains('active')) {
			nav.classList.add('active');
			overlay.classList.add('active');
		} else {
			nav.classList.remove('active');
			overlay.classList.remove('active');
		}
	});
};

//!======== Slider ==============

if (document.querySelector('.hero-slider')) {
	new Splide('.hero-slider', {
		classes: {
			arrows: 'splide__arrows slider-main__controls',
			prev: 'splide__arrow--prev slider-arrow_prev',
			next: 'splide__arrow--next slider-arrow_next',
		},
		type: 'slide',
		perPage: 2,
		gap: 120,
		autoWidth: true,
		breakpoints: {
			1024: {
				autoWidth: false,
			},
			992: {
				perPage: 1,
			},
		}
	}).mount();
}
;
if (document.querySelector('.memberships-slider')) {
	new Splide('.memberships-slider', {
		classes: {
			arrows: 'splide__arrows slider-main__controls',
			prev: 'splide__arrow--prev slider-arrow_prev',
			next: 'splide__arrow--next slider-arrow_next',
		},
		type: 'slide',
		perPage: 2,
		gap: 50,
		autoHeight: false,
		breakpoints: {
			640: {
				perPage: 1,
			},
		}
	}).mount();
}
;
if (document.querySelector('.services-slider__body')) {
	new Splide('.services-slider__body', {
		classes: {
			arrows: 'splide__arrows slider-main__controls',
			prev: 'splide__arrow--prev slider-arrow_prev',
			next: 'splide__arrow--next slider-arrow_next',
		},
		type: 'slide',
		perMove: 1,
		gap: 32,
		autoWidth: true,
		autoHeight: false,
		drag: 'free',
		breakpoints: {
			768: {
				type: 'slide',
				perPage: 2,
				autoWidth: false,
				drag: true,
			},
			640: {
				perPage: 1,
			},
		}
	}).mount();
}
// document.querySelectorAll(".select").forEach(function (selectWrapper) {
		//   const selectBtn = selectWrapper.querySelector(".select__button");
//   const selectList = selectWrapper.querySelector(".select__list");
//   const selectListItems = selectList.querySelectorAll(".select__item");
//   const selectInput = selectWrapper.querySelector(".select__input-hidden");
//   const hideOptions = function () {
//     selectBtn.classList.remove("select__button_active");
//     selectList.classList.remove("select__list_visible");
//   };
//   selectBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     selectList.classList.toggle("select__list_visible");
//     this.classList.add("select__button_active");
//   });
//   selectListItems.forEach(function (listItem) {
//     listItem.addEventListener("click", function (e) {
//       e.stopPropagation();
//       selectBtn.innerText = this.innerText;
//       selectBtn.focus();
//       selectInput.value = this.dataset.value;
//       hideOptions();
//       selectBtn.classList.add("select__button_filled");
//     });
//   });
//   document.addEventListener("click", function (e) {
//     if (e.target !== selectBtn) {
//       hideOptions();
//     }
//   });
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "Tab" || e.key === "Escape") {
//       hideOptions();
//     }
//   });
// });