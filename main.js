/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function showData(infos) {
    const [condition, region, time, temp, feelslike, humidity, wind] = infos;

    showCondition(condition);
    showRegion(region);
    showTime(time);
    showTemp(temp);
    showFeelslike(feelslike);
    showHumidity(humidity);
    showWind(wind);
}

function showCondition(condition) {
    const conditionP = document.getElementById("condition");
    conditionP.textContent = condition;
}

function showRegion(region) {
    const regionP = document.getElementById("region");
    regionP.textContent = region;
}

function showTime(time) {
    const timeP = document.getElementById("time");
    timeP.textContent = time;
}

function showTemp(temp) {
    const tempP = document.getElementById("temp");
    tempP.textContent = temp;
}

function showFeelslike(feelslike) {
    const feelslikeH1 = document.getElementById("feel");
    feelslikeH1.textContent = `Feels like: ${feelslike}`;
}

function showHumidity(humidity) {
    const humidityP = document.getElementById("humid");
    humidityP.textContent = `Humidity: ${humidity}`;
}

function showWind(wind) {
    const windP = document.getElementById("wind");
    windP.textContent = `Wind: ${wind}`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showData);


/***/ }),

/***/ "./src/modules/website.js":
/*!********************************!*\
  !*** ./src/modules/website.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");


function init() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const search = document.getElementById("search");
        const location = search.value;

        getData(location);

        search.value = "";
    });

    getData("Jijel");
}

async function getData(location) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=857d379b247f42ce86f153950232504&q=${location}&aqi=no`,
        { mode: "cors" }
    );

    const data = await response.json();

    const infos = await Promise.all([
        getCondition(data),
        getLocation(data),
        getTime(data),
        getTemperature(data),
        getFeel(data),
        getHumidity(data),
        getWind(data),
    ]);

    (0,_UI__WEBPACK_IMPORTED_MODULE_0__["default"])(infos);
}

function getLocation(data) {
    const { country, region } = data.location;

    return `${country}, ${region}`;
}

function getCondition(data) {
    const { text } = data.current.condition;
    return text;
}

function getTemperature(data) {
    const { temp_c } = data.current; // , temp_f
    return `${temp_c} C°`; // , ${temp_f}F°
}

function getWind(data) {
    const { wind_kph } = data.current; // , wind_mph
    return `${wind_kph} km/h`; // , ${wind_mph} mi/h
}

function getHumidity(data) {
    const { humidity } = data.current;
    return `${humidity} %`;
}

function getFeel(data) {
    const { feelslike_c } = data.current; // , feelslike_f
    return `${feelslike_c} C°`; // , ${feelslike_f}F°
}

function getTime(data) {
    const { localtime } = data.location;
    return localtime;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/website */ "./src/modules/website.js");


(0,_modules_website__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFVBQVU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0Qzs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0k7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHLFVBQVU7QUFDVjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwrQ0FBUTtBQUNaOztBQUVBO0FBQ0EsWUFBWSxrQkFBa0I7O0FBRTlCLGNBQWMsUUFBUSxJQUFJLE9BQU87QUFDakM7O0FBRUE7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBLFlBQVksU0FBUyxnQkFBZ0I7QUFDckMsY0FBYyxRQUFRLEtBQUssT0FBTyxPQUFPO0FBQ3pDOztBQUVBO0FBQ0EsWUFBWSxXQUFXLGdCQUFnQjtBQUN2QyxjQUFjLFVBQVUsT0FBTyxPQUFPLFVBQVU7QUFDaEQ7O0FBRUE7QUFDQSxZQUFZLFdBQVc7QUFDdkIsY0FBYyxVQUFVO0FBQ3hCOztBQUVBO0FBQ0EsWUFBWSxjQUFjLGdCQUFnQjtBQUMxQyxjQUFjLGFBQWEsS0FBSyxPQUFPLFlBQVk7QUFDbkQ7O0FBRUE7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUMzRXBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUM7O0FBRXJDLDREQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNob3dEYXRhKGluZm9zKSB7XG4gICAgY29uc3QgW2NvbmRpdGlvbiwgcmVnaW9uLCB0aW1lLCB0ZW1wLCBmZWVsc2xpa2UsIGh1bWlkaXR5LCB3aW5kXSA9IGluZm9zO1xuXG4gICAgc2hvd0NvbmRpdGlvbihjb25kaXRpb24pO1xuICAgIHNob3dSZWdpb24ocmVnaW9uKTtcbiAgICBzaG93VGltZSh0aW1lKTtcbiAgICBzaG93VGVtcCh0ZW1wKTtcbiAgICBzaG93RmVlbHNsaWtlKGZlZWxzbGlrZSk7XG4gICAgc2hvd0h1bWlkaXR5KGh1bWlkaXR5KTtcbiAgICBzaG93V2luZCh3aW5kKTtcbn1cblxuZnVuY3Rpb24gc2hvd0NvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBjb25zdCBjb25kaXRpb25QID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25cIik7XG4gICAgY29uZGl0aW9uUC50ZXh0Q29udGVudCA9IGNvbmRpdGlvbjtcbn1cblxuZnVuY3Rpb24gc2hvd1JlZ2lvbihyZWdpb24pIHtcbiAgICBjb25zdCByZWdpb25QID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpb25cIik7XG4gICAgcmVnaW9uUC50ZXh0Q29udGVudCA9IHJlZ2lvbjtcbn1cblxuZnVuY3Rpb24gc2hvd1RpbWUodGltZSkge1xuICAgIGNvbnN0IHRpbWVQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpO1xuICAgIHRpbWVQLnRleHRDb250ZW50ID0gdGltZTtcbn1cblxuZnVuY3Rpb24gc2hvd1RlbXAodGVtcCkge1xuICAgIGNvbnN0IHRlbXBQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpO1xuICAgIHRlbXBQLnRleHRDb250ZW50ID0gdGVtcDtcbn1cblxuZnVuY3Rpb24gc2hvd0ZlZWxzbGlrZShmZWVsc2xpa2UpIHtcbiAgICBjb25zdCBmZWVsc2xpa2VIMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbFwiKTtcbiAgICBmZWVsc2xpa2VIMS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2ZlZWxzbGlrZX1gO1xufVxuXG5mdW5jdGlvbiBzaG93SHVtaWRpdHkoaHVtaWRpdHkpIHtcbiAgICBjb25zdCBodW1pZGl0eVAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkXCIpO1xuICAgIGh1bWlkaXR5UC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eX1gO1xufVxuXG5mdW5jdGlvbiBzaG93V2luZCh3aW5kKSB7XG4gICAgY29uc3Qgd2luZFAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XG4gICAgd2luZFAudGV4dENvbnRlbnQgPSBgV2luZDogJHt3aW5kfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dEYXRhO1xuIiwiaW1wb3J0IHNob3dEYXRhIGZyb20gXCIuL1VJXCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gc2VhcmNoLnZhbHVlO1xuXG4gICAgICAgIGdldERhdGEobG9jYXRpb24pO1xuXG4gICAgICAgIHNlYXJjaC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICBnZXREYXRhKFwiSmlqZWxcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTg1N2QzNzliMjQ3ZjQyY2U4NmYxNTM5NTAyMzI1MDQmcT0ke2xvY2F0aW9ufSZhcWk9bm9gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGluZm9zID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRDb25kaXRpb24oZGF0YSksXG4gICAgICAgIGdldExvY2F0aW9uKGRhdGEpLFxuICAgICAgICBnZXRUaW1lKGRhdGEpLFxuICAgICAgICBnZXRUZW1wZXJhdHVyZShkYXRhKSxcbiAgICAgICAgZ2V0RmVlbChkYXRhKSxcbiAgICAgICAgZ2V0SHVtaWRpdHkoZGF0YSksXG4gICAgICAgIGdldFdpbmQoZGF0YSksXG4gICAgXSk7XG5cbiAgICBzaG93RGF0YShpbmZvcyk7XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGRhdGEpIHtcbiAgICBjb25zdCB7IGNvdW50cnksIHJlZ2lvbiB9ID0gZGF0YS5sb2NhdGlvbjtcblxuICAgIHJldHVybiBgJHtjb3VudHJ5fSwgJHtyZWdpb259YDtcbn1cblxuZnVuY3Rpb24gZ2V0Q29uZGl0aW9uKGRhdGEpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IGRhdGEuY3VycmVudC5jb25kaXRpb247XG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFRlbXBlcmF0dXJlKGRhdGEpIHtcbiAgICBjb25zdCB7IHRlbXBfYyB9ID0gZGF0YS5jdXJyZW50OyAvLyAsIHRlbXBfZlxuICAgIHJldHVybiBgJHt0ZW1wX2N9IEPCsGA7IC8vICwgJHt0ZW1wX2Z9RsKwXG59XG5cbmZ1bmN0aW9uIGdldFdpbmQoZGF0YSkge1xuICAgIGNvbnN0IHsgd2luZF9rcGggfSA9IGRhdGEuY3VycmVudDsgLy8gLCB3aW5kX21waFxuICAgIHJldHVybiBgJHt3aW5kX2twaH0ga20vaGA7IC8vICwgJHt3aW5kX21waH0gbWkvaFxufVxuXG5mdW5jdGlvbiBnZXRIdW1pZGl0eShkYXRhKSB7XG4gICAgY29uc3QgeyBodW1pZGl0eSB9ID0gZGF0YS5jdXJyZW50O1xuICAgIHJldHVybiBgJHtodW1pZGl0eX0gJWA7XG59XG5cbmZ1bmN0aW9uIGdldEZlZWwoZGF0YSkge1xuICAgIGNvbnN0IHsgZmVlbHNsaWtlX2MgfSA9IGRhdGEuY3VycmVudDsgLy8gLCBmZWVsc2xpa2VfZlxuICAgIHJldHVybiBgJHtmZWVsc2xpa2VfY30gQ8KwYDsgLy8gLCAke2ZlZWxzbGlrZV9mfUbCsFxufVxuXG5mdW5jdGlvbiBnZXRUaW1lKGRhdGEpIHtcbiAgICBjb25zdCB7IGxvY2FsdGltZSB9ID0gZGF0YS5sb2NhdGlvbjtcbiAgICByZXR1cm4gbG9jYWx0aW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdCBmcm9tIFwiLi9tb2R1bGVzL3dlYnNpdGVcIjtcblxuaW5pdCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9