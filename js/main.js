/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("// const swiper = new Swiper('.heroImg', {\n//     // Optional parameters\n//     direction: 'horizontal',\n//     loop: true,\n//     spaceBetween: 0,\n//     // If we need pagination\n//     pagination: {\n//         el: '.hero-pagination',\n//         clickable:true,\n//     }\n// });\ndocument.addEventListener('DOMContentLoaded',()=>{\n    const monoLandSliderItem = new Swiper('.reviews-slider-second', {\n        slidesPerView:5.7,\n        spaceBetween:32,\n        loop:true,\n\n        // If we need pagination\n        pagination: {\n            el: '.video-rewiews-slider-pagination',\n            clickable:true\n        },\n        navigation: {\n            nextEl: '.video-slider-next',\n            prevEl: '.video-slider-prev',\n        },\n        breakpoints: {\n            310:{\n            spaceBetween: 12, \n            slidesPerView: 1.35,\n            centeredSlides:true, \n            initialSlide: 2,\n            },\n            // when window width is >= 320px\n            650: {\n            spaceBetween: 15, \n            slidesPerView: 2.35, \n            // centeredSlides:true, \n            initialSlide: 2,\n            allowTouchMove: true\n            },\n            // when window width is >= 640px\n            1025: {\n            spaceBetween: 15,\n            slidesPerView:5.5,\n            // allowTouchMove: false\n            }\n        }\n    });\n    function isFullyVisible(element) {\n        const rect = element.getBoundingClientRect();\n        return rect.width < window.innerWidth;\n    }\n    function pauseOnFullVisibility() {\n        const isPartiallyVisible = (element) => {\n            const rect = element.getBoundingClientRect();\n            return rect.top < window.innerHeight && rect.bottom > 0;\n        };\n        const scrollingElements = document.querySelectorAll(\".scrolling\");\n        scrollingElements.forEach((scrollingElement) => {\n            const scrollingItem = scrollingElement.querySelector(\".scrolling-items__item\");\n            const clonedItem = scrollingItem.cloneNode(true);\n            scrollingItem.after(clonedItem);\n        });\n        const scrollingContainer = document.querySelectorAll(\".scrolling__items\");\n        scrollingContainer.forEach((thisScrollingContainer) => {\n            thisScrollingContainer.style.animationPlayState = \"running\";\n        });\n    }\n    pauseOnFullVisibility();\n\n\n    document.querySelectorAll('.accordion-header').forEach(item => {\n        item.addEventListener('click', () => {\n            const isActive = item.classList.contains('active');\n            document.querySelectorAll('.accordion-header').forEach(header => header.classList.remove('active'));\n            document.querySelectorAll('.accordion-content').forEach(content => {\n                content.style.maxHeight = '0';\n            });\n\n            if (!isActive) {\n                item.classList.add('active');\n                const content = item.nextElementSibling;\n                content.style.maxHeight = content.scrollHeight + 'px';\n            }\n        });\n    });\n\n\n\n    // 1. Селекторы\n    const minusBtn   = document.querySelector('.product-count__minus');\n    const plusBtn    = document.querySelector('.product-count__plus');\n    const countEl    = document.querySelector('.product-count__item');\n    const priceEl    = document.querySelector('.product__price');\n    const buttonEl   = document.querySelector('.product__btn');\n\n    // 2. Базовые данные\n    let quantity = parseInt(countEl.textContent, 10);\n    const unitPrice = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));\n    const baseUrl = 'https://ecowisevitamins.com/cart/50232657838368';\n\n    // 3. Функция обновления UI\n    function updateUI() {\n      // Обновляем количество\n      countEl.textContent = quantity;\n      // Обновляем цену\n      const total = (unitPrice * quantity).toFixed(2);\n      priceEl.textContent = `$${total}`;\n      // Обновляем URL кнопки\n      buttonEl.href = `${baseUrl}:${quantity}`;\n    }\n\n    // 4. Навешиваем обработчики\n    plusBtn.addEventListener('click', function() {\n      quantity++;\n      updateUI();\n    });\n\n    minusBtn.addEventListener('click', function() {\n      if (quantity > 1) {\n        quantity--;\n        updateUI();\n      }\n    });\n})\n\n\n\n\n\n\n//# sourceURL=webpack://gulp-2025/./src/js/main.js?");

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