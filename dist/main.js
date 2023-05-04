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
    try {
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
    } catch {
        return;
    }
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


(0,_modules_website__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFVBQVU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0Qzs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0k7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLFNBQVM7QUFDeEcsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLCtDQUFRO0FBQ2hCLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGtCQUFrQjs7QUFFOUIsY0FBYyxRQUFRLElBQUksT0FBTztBQUNqQzs7QUFFQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0EsWUFBWSxTQUFTLGdCQUFnQjtBQUNyQyxjQUFjLFFBQVEsS0FBSyxPQUFPLE9BQU87QUFDekM7O0FBRUE7QUFDQSxZQUFZLFdBQVcsZ0JBQWdCO0FBQ3ZDLGNBQWMsVUFBVSxPQUFPLE9BQU8sVUFBVTtBQUNoRDs7QUFFQTtBQUNBLFlBQVksV0FBVztBQUN2QixjQUFjLFVBQVU7QUFDeEI7O0FBRUE7QUFDQSxZQUFZLGNBQWMsZ0JBQWdCO0FBQzFDLGNBQWMsYUFBYSxLQUFLLE9BQU8sWUFBWTtBQUNuRDs7QUFFQTtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQy9FcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMsNERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNob3dEYXRhKGluZm9zKSB7XG4gICAgY29uc3QgW2NvbmRpdGlvbiwgcmVnaW9uLCB0aW1lLCB0ZW1wLCBmZWVsc2xpa2UsIGh1bWlkaXR5LCB3aW5kXSA9IGluZm9zO1xuXG4gICAgc2hvd0NvbmRpdGlvbihjb25kaXRpb24pO1xuICAgIHNob3dSZWdpb24ocmVnaW9uKTtcbiAgICBzaG93VGltZSh0aW1lKTtcbiAgICBzaG93VGVtcCh0ZW1wKTtcbiAgICBzaG93RmVlbHNsaWtlKGZlZWxzbGlrZSk7XG4gICAgc2hvd0h1bWlkaXR5KGh1bWlkaXR5KTtcbiAgICBzaG93V2luZCh3aW5kKTtcbn1cblxuZnVuY3Rpb24gc2hvd0NvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBjb25zdCBjb25kaXRpb25QID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25cIik7XG4gICAgY29uZGl0aW9uUC50ZXh0Q29udGVudCA9IGNvbmRpdGlvbjtcbn1cblxuZnVuY3Rpb24gc2hvd1JlZ2lvbihyZWdpb24pIHtcbiAgICBjb25zdCByZWdpb25QID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpb25cIik7XG4gICAgcmVnaW9uUC50ZXh0Q29udGVudCA9IHJlZ2lvbjtcbn1cblxuZnVuY3Rpb24gc2hvd1RpbWUodGltZSkge1xuICAgIGNvbnN0IHRpbWVQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpO1xuICAgIHRpbWVQLnRleHRDb250ZW50ID0gdGltZTtcbn1cblxuZnVuY3Rpb24gc2hvd1RlbXAodGVtcCkge1xuICAgIGNvbnN0IHRlbXBQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpO1xuICAgIHRlbXBQLnRleHRDb250ZW50ID0gdGVtcDtcbn1cblxuZnVuY3Rpb24gc2hvd0ZlZWxzbGlrZShmZWVsc2xpa2UpIHtcbiAgICBjb25zdCBmZWVsc2xpa2VIMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbFwiKTtcbiAgICBmZWVsc2xpa2VIMS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2ZlZWxzbGlrZX1gO1xufVxuXG5mdW5jdGlvbiBzaG93SHVtaWRpdHkoaHVtaWRpdHkpIHtcbiAgICBjb25zdCBodW1pZGl0eVAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkXCIpO1xuICAgIGh1bWlkaXR5UC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eX1gO1xufVxuXG5mdW5jdGlvbiBzaG93V2luZCh3aW5kKSB7XG4gICAgY29uc3Qgd2luZFAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XG4gICAgd2luZFAudGV4dENvbnRlbnQgPSBgV2luZDogJHt3aW5kfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dEYXRhO1xuIiwiaW1wb3J0IHNob3dEYXRhIGZyb20gXCIuL1VJXCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gc2VhcmNoLnZhbHVlO1xuXG4gICAgICAgIGdldERhdGEobG9jYXRpb24pO1xuXG4gICAgICAgIHNlYXJjaC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICBnZXREYXRhKFwiSmlqZWxcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEobG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT04NTdkMzc5YjI0N2Y0MmNlODZmMTUzOTUwMjMyNTA0JnE9JHtsb2NhdGlvbn0mYXFpPW5vYCxcbiAgICAgICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc3QgaW5mb3MgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBnZXRDb25kaXRpb24oZGF0YSksXG4gICAgICAgICAgICBnZXRMb2NhdGlvbihkYXRhKSxcbiAgICAgICAgICAgIGdldFRpbWUoZGF0YSksXG4gICAgICAgICAgICBnZXRUZW1wZXJhdHVyZShkYXRhKSxcbiAgICAgICAgICAgIGdldEZlZWwoZGF0YSksXG4gICAgICAgICAgICBnZXRIdW1pZGl0eShkYXRhKSxcbiAgICAgICAgICAgIGdldFdpbmQoZGF0YSksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHNob3dEYXRhKGluZm9zKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oZGF0YSkge1xuICAgIGNvbnN0IHsgY291bnRyeSwgcmVnaW9uIH0gPSBkYXRhLmxvY2F0aW9uO1xuXG4gICAgcmV0dXJuIGAke2NvdW50cnl9LCAke3JlZ2lvbn1gO1xufVxuXG5mdW5jdGlvbiBnZXRDb25kaXRpb24oZGF0YSkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbjtcbiAgICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gZ2V0VGVtcGVyYXR1cmUoZGF0YSkge1xuICAgIGNvbnN0IHsgdGVtcF9jIH0gPSBkYXRhLmN1cnJlbnQ7IC8vICwgdGVtcF9mXG4gICAgcmV0dXJuIGAke3RlbXBfY30gQ8KwYDsgLy8gLCAke3RlbXBfZn1GwrBcbn1cblxuZnVuY3Rpb24gZ2V0V2luZChkYXRhKSB7XG4gICAgY29uc3QgeyB3aW5kX2twaCB9ID0gZGF0YS5jdXJyZW50OyAvLyAsIHdpbmRfbXBoXG4gICAgcmV0dXJuIGAke3dpbmRfa3BofSBrbS9oYDsgLy8gLCAke3dpbmRfbXBofSBtaS9oXG59XG5cbmZ1bmN0aW9uIGdldEh1bWlkaXR5KGRhdGEpIHtcbiAgICBjb25zdCB7IGh1bWlkaXR5IH0gPSBkYXRhLmN1cnJlbnQ7XG4gICAgcmV0dXJuIGAke2h1bWlkaXR5fSAlYDtcbn1cblxuZnVuY3Rpb24gZ2V0RmVlbChkYXRhKSB7XG4gICAgY29uc3QgeyBmZWVsc2xpa2VfYyB9ID0gZGF0YS5jdXJyZW50OyAvLyAsIGZlZWxzbGlrZV9mXG4gICAgcmV0dXJuIGAke2ZlZWxzbGlrZV9jfSBDwrBgOyAvLyAsICR7ZmVlbHNsaWtlX2Z9RsKwXG59XG5cbmZ1bmN0aW9uIGdldFRpbWUoZGF0YSkge1xuICAgIGNvbnN0IHsgbG9jYWx0aW1lIH0gPSBkYXRhLmxvY2F0aW9uO1xuICAgIHJldHVybiBsb2NhbHRpbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0IGZyb20gXCIuL21vZHVsZXMvd2Vic2l0ZVwiO1xuXG5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=