/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: grid;
  grid-template-columns: minmax(min-content, 350px) minmax(600px, 1fr);
  grid-template-rows: minmax(min-content, 60px) minmax(100px, 1fr) minmax(
      5px,
      10px
    );
  grid-template-areas: "pins search" "pins dashboard" "footer footer";
  gap: 10px;
  background-image: linear-gradient(
    to bottom right,
    rgb(106, 176, 188),
    rgb(245, 245, 255)
  );
  margin: 15px;
}

/* search component  */
.search-container {
  grid-area: search;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-self: right;
  align-self: center;
  padding: 0 45px 0 0;
  width: 500px;
  height: 40px;
}

#location-search {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border: 1px solid grey;
  border-radius: 30px;
  font-size: 15px;
  box-shadow: 0 0 10px #002b42;
}

.dropdown-search-content {
  position: absolute;
  background-color: #ededed;
  top: 105%;
  width: 82%;
  z-index: 1;
}

.dropdown-search-content ul {
  margin: 0;
  padding: 0;
}

.dropdown-search-content li {
  list-style-type: none;
  padding: 10px 20px 10px 20px;
  box-shadow: 0 0 5px #002b42;
  border-radius: 2px;
  cursor: pointer;
}

.dropdown-search-content li:hover {
  background-color: #002b42;
  color: #e0e0e0;
}

.dropdown-search-content p {
  margin: 0;
  padding: 10px 0;
  text-align: center;
  box-shadow: 0 0 5px #002b42;
}

/* pinned component */

.pinned-locations {
  grid-area: pins;
  border-radius: 20px;
  box-shadow: 0 0 20px #e0e0e0;
  background-color: #ededed83;
  height: calc(93vh - 30px);
  overflow-y: auto;
  padding: 20px;
}

.pinned-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 10px;
  background-color: #ffffff81;
  box-shadow: 0 0 20px #ffffff;
  text-shadow: 0 0 2px #002b42;
  margin-bottom: 20px;
  color: #003c5c;
}

.pinned-header img {
  height: 50px;
}

.pin-box {
  position: relative;
  display: flex;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 6px #002b42;
  text-shadow: 0 0 1px #002b42;
  background-color: #ecf8ff;
  color: #002b42;
  margin: 15px 0;
  min-width: 140px;
  cursor: pointer;
}

.pin-temp {
  flex-basis: 70px;
}

.pin-box:hover .close-button {
  display: block;
}

.pin-box .close-button {
  display: none;
}

.close-button {
  position: absolute;
  top: -8px;
  right: -10px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 5px #002b42;
  text-shadow: 0 2px 2px #002b42;
  background-color: #ffffff5f;
}

/* dashboard component */

.inner-dashboard {
  grid-area: dashboard;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(350px, 1fr) minmax(
      200px,
      1fr
    );
  grid-template-rows: minmax(271px, 1fr) minmax(max-content, 1fr) repeat(
      3,
      287px
    );
  grid-template-areas: "quick quick units" "all-conditions all-conditions all-conditions" "first first first" "sec sec sec" "third third third";
  background-color: #ededed83;
  border-radius: 20px;
  box-shadow: 0 0 20px #e0e0e0;
  height: 86vh;
  overflow-y: auto;
}

/* quick */

.quick-weather {
  grid-area: quick;
  display: grid;
  grid-template-columns: minmax(min-content, 110px) minmax(min-content, 1fr) minmax(
      min-content,
      1fr
    );
  grid-template-areas:
    "pin location location"
    "pin temp sun-moon"
    "pin feels-like sun-moon"
    "pin img-cond sun-moon";
  background-color: #002b42;
  border-radius: 10px;
  box-shadow: -1px -1px 10px 10px #002b42;
  text-shadow: 0 0 1px #ffffff;
  padding: 10px 20px 20px 0;
  color: #e0e0e0;
  margin: 30px 50px 20px 30px;
}

/* pin button */

.pin-button {
  grid-area: pin;
  text-align: center;
}

.pin-img {
  width: 2em;
  cursor: pointer;
}

.quick-weather > :first-child {
  grid-area: location;
  width: 95%;
  height: 100%;
  margin: 0 0 15px 0;
}

.quick-weather .unit-value {
  grid-area: temp;
  font-weight: bold;
  font-size: x-large;
}

.condition-container {
  grid-area: img-cond;
  display: flex;
  align-items: center;
  gap: 15px;
}

.feels-like-container {
  grid-area: feels-like;
  display: flex;
}

.feels-like-container .unit-value {
  margin-left: 10px;
  font-size: initial;
}

.celestial-container {
  grid-area: sun-moon;
  display: grid;
  grid-template-columns: minmax(40px, 50px) minmax(70px, 100px);
  grid-template-rows: repeat(4, 40px);
  align-items: center;
  justify-items: center;
  justify-content: center;
}

.celestImg {
  width: 2em;
}

/* unit preference */

.unit-preferences {
  grid-area: units;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 0 0 1px #002b42;
  box-shadow: -1px -1px 10px 10px #ffffffb8;
  background-color: #ffffffb8;
  height: 70%;
}

.unit-options {
  display: grid;
  grid-template-columns: minmax(50px, 1fr) minmax(50px, 1fr);
  justify-items: end;
  gap: 4px;
}

.unit-inputs {
  display: grid;
  grid-template-columns: 30px 30px 30px 30px;
  justify-self: flex-start;
}

input[type="radio"] {
  appearance: none;
  border: 1px solid #002b42;
  border-radius: 10px;
  box-shadow: 0 0 5px #002b42;
  cursor: pointer;
  width: 15px;
  height: 15px;
  position: relative;
}

input[type="radio"]::before {
  content: "";
  width: 9px;
  height: 9px;
  border-radius: 10px;
  transform: translate(-50%, -50%) scale(0);
  transition: 120ms transform ease-in-out;
  background-color: #002b42;
  box-shadow: 0 0 10px #002b42;
  position: absolute;
  top: 50%;
  left: 50%;
}

input[type="radio"]:checked::before {
  transform: translate(-50%, -50%) scale(1);
}

/* all conditions */

.all-conditions {
  grid-area: all-conditions;
  display: flex;
  gap: 25px;
  margin: 30px 0 20px 0;
  padding: 10px 0 10px 25px;
  box-shadow: -1px -1px 10px 10px #002b4273;
  background-color: #002b4273;
  border-radius: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.widget-box {
  width: max-content;
  padding: 10px;
  border-radius: 10px;
  box-shadow: -1px -1px 6px 5px #ffffffe8;
  text-shadow: 0 0 1px #002b42;
  background-color: #ffffffe8;
  color: #002b42;
  text-align: center;
}

/* wind */

.wind-weather {
  display: flex;
  gap: 25px;
}

/* moisture */

.moisture-weather {
  display: flex;
  gap: 25px;
}

/* air */

.air-weather {
  display: flex;
  gap: 25px;
}

/* sun */
.sun-weather {
  display: flex;
  gap: 25px;
}

/* hourly forecast */

.hourly-forecast {
  color: #002b42;
  text-shadow: 0 0 1px #002b42;
  margin: 10px 0;
}

.inner-dashboard > div:nth-last-child(3) {
  grid-area: first;
}

.inner-dashboard > div:nth-last-child(2) {
  grid-area: sec;
}

.inner-dashboard > div:nth-last-child(1) {
  grid-area: third;
}

.hourly-forecast > :first-child {
  margin: 0 25px;
}

.hourly-boxes {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 15px 20px 20px 20px;
  text-align: center;
}

.hourly-box {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 0 6px #002b42;
  background-color: #ecf8ff;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 110px;
  padding: 10px;
  gap: 10px;
}

.hourly-box > div:first-child {
  font-weight: bold;
}

.hourly-box .unit-value {
  box-shadow: -1px -1px 10px 10px rgb(255 255 255);
  border-radius: 20px;
  padding: 10px;
}

.current-hour {
  background-color: #d8ffdd;
  box-shadow: 0 0 6px #164200;
}

/* skeleton */

.skeleton {
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, 0.2);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.6);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.2);
  }
}

.quick-weather .skeleton-button {
  width: 5em;
  height: 5em;
}

.widget-box .skeleton {
  width: 5em;
  height: 1em;
}

.quick-weather .skeleton .skeleton-title,
.quick-weather .skeleton .skeleton-value {
  height: 50%;
  width: 100%;
}

.quick-weather .skeleton .widget-box {
  height: 11em;
}

/* footer */

footer {
  grid-area: footer;
  text-align: center;
  font-size: 11px;
  color: grey;
}

footer a {
  color: #004e00;
}

.modal-content a {
  color: white;
}

.attr-modal {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0 0 0 / 88%);
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #f5deb380;
  box-shadow: 0 0 100px wheat;
  text-shadow: 0 0 10px #000000;
  color: rgb(255, 234, 218);
  text-align: center;
  margin: 15% auto;
  padding: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  display: grid;\n  grid-template-columns: minmax(min-content, 350px) minmax(600px, 1fr);\n  grid-template-rows: minmax(min-content, 60px) minmax(100px, 1fr) minmax(\n      5px,\n      10px\n    );\n  grid-template-areas: \"pins search\" \"pins dashboard\" \"footer footer\";\n  gap: 10px;\n  background-image: linear-gradient(\n    to bottom right,\n    rgb(106, 176, 188),\n    rgb(245, 245, 255)\n  );\n  margin: 15px;\n}\n\n/* search component  */\n.search-container {\n  grid-area: search;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  justify-self: right;\n  align-self: center;\n  padding: 0 45px 0 0;\n  width: 500px;\n  height: 40px;\n}\n\n#location-search {\n  width: 100%;\n  height: 100%;\n  padding: 0 20px;\n  border: 1px solid grey;\n  border-radius: 30px;\n  font-size: 15px;\n  box-shadow: 0 0 10px #002b42;\n}\n\n.dropdown-search-content {\n  position: absolute;\n  background-color: #ededed;\n  top: 105%;\n  width: 82%;\n  z-index: 1;\n}\n\n.dropdown-search-content ul {\n  margin: 0;\n  padding: 0;\n}\n\n.dropdown-search-content li {\n  list-style-type: none;\n  padding: 10px 20px 10px 20px;\n  box-shadow: 0 0 5px #002b42;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.dropdown-search-content li:hover {\n  background-color: #002b42;\n  color: #e0e0e0;\n}\n\n.dropdown-search-content p {\n  margin: 0;\n  padding: 10px 0;\n  text-align: center;\n  box-shadow: 0 0 5px #002b42;\n}\n\n/* pinned component */\n\n.pinned-locations {\n  grid-area: pins;\n  border-radius: 20px;\n  box-shadow: 0 0 20px #e0e0e0;\n  background-color: #ededed83;\n  height: calc(93vh - 30px);\n  overflow-y: auto;\n  padding: 20px;\n}\n\n.pinned-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  border-radius: 10px;\n  background-color: #ffffff81;\n  box-shadow: 0 0 20px #ffffff;\n  text-shadow: 0 0 2px #002b42;\n  margin-bottom: 20px;\n  color: #003c5c;\n}\n\n.pinned-header img {\n  height: 50px;\n}\n\n.pin-box {\n  position: relative;\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 0 6px #002b42;\n  text-shadow: 0 0 1px #002b42;\n  background-color: #ecf8ff;\n  color: #002b42;\n  margin: 15px 0;\n  min-width: 140px;\n  cursor: pointer;\n}\n\n.pin-temp {\n  flex-basis: 70px;\n}\n\n.pin-box:hover .close-button {\n  display: block;\n}\n\n.pin-box .close-button {\n  display: none;\n}\n\n.close-button {\n  position: absolute;\n  top: -8px;\n  right: -10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  border-radius: 10px;\n  box-shadow: 0 0 5px #002b42;\n  text-shadow: 0 2px 2px #002b42;\n  background-color: #ffffff5f;\n}\n\n/* dashboard component */\n\n.inner-dashboard {\n  grid-area: dashboard;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) minmax(350px, 1fr) minmax(\n      200px,\n      1fr\n    );\n  grid-template-rows: minmax(271px, 1fr) minmax(max-content, 1fr) repeat(\n      3,\n      287px\n    );\n  grid-template-areas: \"quick quick units\" \"all-conditions all-conditions all-conditions\" \"first first first\" \"sec sec sec\" \"third third third\";\n  background-color: #ededed83;\n  border-radius: 20px;\n  box-shadow: 0 0 20px #e0e0e0;\n  height: 86vh;\n  overflow-y: auto;\n}\n\n/* quick */\n\n.quick-weather {\n  grid-area: quick;\n  display: grid;\n  grid-template-columns: minmax(min-content, 110px) minmax(min-content, 1fr) minmax(\n      min-content,\n      1fr\n    );\n  grid-template-areas:\n    \"pin location location\"\n    \"pin temp sun-moon\"\n    \"pin feels-like sun-moon\"\n    \"pin img-cond sun-moon\";\n  background-color: #002b42;\n  border-radius: 10px;\n  box-shadow: -1px -1px 10px 10px #002b42;\n  text-shadow: 0 0 1px #ffffff;\n  padding: 10px 20px 20px 0;\n  color: #e0e0e0;\n  margin: 30px 50px 20px 30px;\n}\n\n/* pin button */\n\n.pin-button {\n  grid-area: pin;\n  text-align: center;\n}\n\n.pin-img {\n  width: 2em;\n  cursor: pointer;\n}\n\n.quick-weather > :first-child {\n  grid-area: location;\n  width: 95%;\n  height: 100%;\n  margin: 0 0 15px 0;\n}\n\n.quick-weather .unit-value {\n  grid-area: temp;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.condition-container {\n  grid-area: img-cond;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.feels-like-container {\n  grid-area: feels-like;\n  display: flex;\n}\n\n.feels-like-container .unit-value {\n  margin-left: 10px;\n  font-size: initial;\n}\n\n.celestial-container {\n  grid-area: sun-moon;\n  display: grid;\n  grid-template-columns: minmax(40px, 50px) minmax(70px, 100px);\n  grid-template-rows: repeat(4, 40px);\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n}\n\n.celestImg {\n  width: 2em;\n}\n\n/* unit preference */\n\n.unit-preferences {\n  grid-area: units;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-shadow: 0 0 1px #002b42;\n  box-shadow: -1px -1px 10px 10px #ffffffb8;\n  background-color: #ffffffb8;\n  height: 70%;\n}\n\n.unit-options {\n  display: grid;\n  grid-template-columns: minmax(50px, 1fr) minmax(50px, 1fr);\n  justify-items: end;\n  gap: 4px;\n}\n\n.unit-inputs {\n  display: grid;\n  grid-template-columns: 30px 30px 30px 30px;\n  justify-self: flex-start;\n}\n\ninput[type=\"radio\"] {\n  appearance: none;\n  border: 1px solid #002b42;\n  border-radius: 10px;\n  box-shadow: 0 0 5px #002b42;\n  cursor: pointer;\n  width: 15px;\n  height: 15px;\n  position: relative;\n}\n\ninput[type=\"radio\"]::before {\n  content: \"\";\n  width: 9px;\n  height: 9px;\n  border-radius: 10px;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 120ms transform ease-in-out;\n  background-color: #002b42;\n  box-shadow: 0 0 10px #002b42;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\ninput[type=\"radio\"]:checked::before {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n/* all conditions */\n\n.all-conditions {\n  grid-area: all-conditions;\n  display: flex;\n  gap: 25px;\n  margin: 30px 0 20px 0;\n  padding: 10px 0 10px 25px;\n  box-shadow: -1px -1px 10px 10px #002b4273;\n  background-color: #002b4273;\n  border-radius: 10px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.widget-box {\n  width: max-content;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: -1px -1px 6px 5px #ffffffe8;\n  text-shadow: 0 0 1px #002b42;\n  background-color: #ffffffe8;\n  color: #002b42;\n  text-align: center;\n}\n\n/* wind */\n\n.wind-weather {\n  display: flex;\n  gap: 25px;\n}\n\n/* moisture */\n\n.moisture-weather {\n  display: flex;\n  gap: 25px;\n}\n\n/* air */\n\n.air-weather {\n  display: flex;\n  gap: 25px;\n}\n\n/* sun */\n.sun-weather {\n  display: flex;\n  gap: 25px;\n}\n\n/* hourly forecast */\n\n.hourly-forecast {\n  color: #002b42;\n  text-shadow: 0 0 1px #002b42;\n  margin: 10px 0;\n}\n\n.inner-dashboard > div:nth-last-child(3) {\n  grid-area: first;\n}\n\n.inner-dashboard > div:nth-last-child(2) {\n  grid-area: sec;\n}\n\n.inner-dashboard > div:nth-last-child(1) {\n  grid-area: third;\n}\n\n.hourly-forecast > :first-child {\n  margin: 0 25px;\n}\n\n.hourly-boxes {\n  display: flex;\n  gap: 10px;\n  overflow-x: auto;\n  padding: 15px 20px 20px 20px;\n  text-align: center;\n}\n\n.hourly-box {\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  box-shadow: 0 0 6px #002b42;\n  background-color: #ecf8ff;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 0 0 110px;\n  padding: 10px;\n  gap: 10px;\n}\n\n.hourly-box > div:first-child {\n  font-weight: bold;\n}\n\n.hourly-box .unit-value {\n  box-shadow: -1px -1px 10px 10px rgb(255 255 255);\n  border-radius: 20px;\n  padding: 10px;\n}\n\n.current-hour {\n  background-color: #d8ffdd;\n  box-shadow: 0 0 6px #164200;\n}\n\n/* skeleton */\n\n.skeleton {\n  background-color: #e0e0e0;\n  border-radius: 4px;\n  animation: pulse 1.5s infinite ease-in-out;\n}\n\n@keyframes pulse {\n  0% {\n    background-color: rgba(165, 165, 165, 0.2);\n  }\n  50% {\n    background-color: rgba(165, 165, 165, 0.6);\n  }\n  100% {\n    background-color: rgba(165, 165, 165, 0.2);\n  }\n}\n\n.quick-weather .skeleton-button {\n  width: 5em;\n  height: 5em;\n}\n\n.widget-box .skeleton {\n  width: 5em;\n  height: 1em;\n}\n\n.quick-weather .skeleton .skeleton-title,\n.quick-weather .skeleton .skeleton-value {\n  height: 50%;\n  width: 100%;\n}\n\n.quick-weather .skeleton .widget-box {\n  height: 11em;\n}\n\n/* footer */\n\nfooter {\n  grid-area: footer;\n  text-align: center;\n  font-size: 11px;\n  color: grey;\n}\n\nfooter a {\n  color: #004e00;\n}\n\n.modal-content a {\n  color: white;\n}\n\n.attr-modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0 0 0 / 88%);\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  background-color: #f5deb380;\n  box-shadow: 0 0 100px wheat;\n  text-shadow: 0 0 10px #000000;\n  color: rgb(255, 234, 218);\n  text-align: center;\n  margin: 15% auto;\n  padding: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/geolocation.js":
/*!********************************!*\
  !*** ./src/api/geolocation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGeolocation: () => (/* binding */ createGeolocation)
/* harmony export */ });
const createGeolocation = () => ({
  getUserLocation: () =>
    new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location: ", error);
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported."));
      }
    }),
});


/***/ }),

/***/ "./src/api/pinLocationStorage.js":
/*!***************************************!*\
  !*** ./src/api/pinLocationStorage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLocation: () => (/* binding */ addLocation),
/* harmony export */   getPinnedLocations: () => (/* binding */ getPinnedLocations),
/* harmony export */   initializeDefaultLocations: () => (/* binding */ initializeDefaultLocations),
/* harmony export */   isLocationPinned: () => (/* binding */ isLocationPinned),
/* harmony export */   removeLocation: () => (/* binding */ removeLocation)
/* harmony export */ });
const getPinnedLocations = () => {
  return JSON.parse(localStorage.getItem("pinnedLocations")) || [];
};

const savePinnedLocations = (locations) => {
  localStorage.setItem("pinnedLocations", JSON.stringify(locations));
};

const isLocationPinned = (url) => {
  const pinnedLocations = getPinnedLocations();
  return pinnedLocations.some((location) => location.url === url);
};

const addLocation = (location) => {
  const pinnedLocations = getPinnedLocations();
  if (!isLocationPinned(location.url)) {
    pinnedLocations.push({
      url: location.url,
    });
    savePinnedLocations(pinnedLocations);
  }
};

const removeLocation = (url) => {
  const pinnedLocations = getPinnedLocations();
  const updatedLocations = pinnedLocations.filter(
    (location) => location.url !== url
  );
  savePinnedLocations(updatedLocations);
};

const initializeDefaultLocations = () => {
  if (!localStorage.getItem("visited")) {
    const defaultLocations = [
      {
        url: "new-york-new-york-united-states-of-america",
      },
      {
        url: "los-angeles-california-united-states-of-america",
      },
      {
        url: "portland-oregon-united-states-of-america",
      },
      {
        url: "boulder-colorado-united-states-of-america",
      },
      {
        url: "cambridge-massachusetts-united-states-of-america",
      },
    ];
    savePinnedLocations(defaultLocations);
    localStorage.setItem("visited", "true");
  }
};


/***/ }),

/***/ "./src/api/weatherApi.js":
/*!*******************************!*\
  !*** ./src/api/weatherApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getForecastData: () => (/* binding */ getForecastData),
/* harmony export */   searchFor: () => (/* binding */ searchFor)
/* harmony export */ });
/* harmony import */ var _utils_apiHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiHelpers.js */ "./src/utils/apiHelpers.js");


const getForecastData = async (url, days = 3) => {
  const rawData = await (0,_utils_apiHelpers_js__WEBPACK_IMPORTED_MODULE_0__.fetchApi)(
    `https://api.weatherapi.com/v1/forecast.json?key=${"67b14f495a004b6a8f4171507241806"}&q=${url}&days=${days}&aqi=yes`,
    "fetch forecast data"
  );
  return processForecastData(rawData);
};

const searchFor = async (desiredLocationString) => {
  const searchData = await (0,_utils_apiHelpers_js__WEBPACK_IMPORTED_MODULE_0__.fetchApi)(
    `https://api.weatherapi.com/v1/search.json?key=${"67b14f495a004b6a8f4171507241806"}&q=${desiredLocationString}`,
    "search for locations"
  );
  return processSearchResults(searchData);
};

const processForecastData = (rawData) => {
  const currentWeather = {
    aqi: rawData.current.air_quality["us-epa-index"],
    conditionTxt: rawData.current.condition.text,
    conditionIcon: rawData.current.condition.icon,
    isDay: rawData.current.is_day,
    tempC: rawData.current.temp_c,
    tempF: rawData.current.temp_f,
    feelsLikeC: rawData.current.feelslike_c,
    feelsLikeF: rawData.current.feelslike_f,
    dewPointC: rawData.current.dewpoint_c,
    dewPointF: rawData.current.dewpoint_f,
    humidity: rawData.current.humidity,
    uvIndex: rawData.current.uv,
    precipitation: {
      in: rawData.current.precip_in,
      mm: rawData.current.precip_mm,
    },
    pressure: {
      in: rawData.current.pressure_in,
      mb: rawData.current.pressure_mb,
    },
    wind: {
      direction: rawData.current.wind_dir,
      kph: rawData.current.wind_kph,
      mph: rawData.current.wind_mph,
      chillC: rawData.current.windchill_c,
      chillF: rawData.current.windchill_f,
    },
    gust: {
      kph: rawData.current.gust_kph,
      mph: rawData.current.gust_mph,
    },
  };

  const forecastWeather = rawData.forecast.forecastday.map((dayData) => ({
    date: dayData.date,
    sunrise: dayData.astro.sunrise,
    sunset: dayData.astro.sunset,
    moonrise: dayData.astro.moonrise,
    moonset: dayData.astro.moonset,
    maxTempC: dayData.day.maxtemp_c,
    maxTempF: dayData.day.maxtemp_f,
    minTempC: dayData.day.mintemp_c,
    minTempF: dayData.day.mintemp_f,
    avgTempC: dayData.day.avgtemp_c,
    avgTempF: dayData.day.avgtemp_f,
    conditionTxt: dayData.day.condition.text,
    conditionIcon: dayData.day.condition.icon,
    hourlyForecast: dayData.hour.map((hour) => ({
      time: hour.time,
      tempC: hour.temp_c,
      tempF: hour.temp_f,
      conditionTxt: hour.condition.text,
      conditionIcon: hour.condition.icon,
    })),
  }));
  return {
    location: {
      name: rawData.location.name,
      region: rawData.location.region,
      country: rawData.location.country,
      localTime: rawData.location.localtime,
      lat: rawData.location.lat,
      lon: rawData.location.lon,
    },
    current: currentWeather,
    forecast: forecastWeather,
  };
};

const processSearchResults = (searchData) => {
  return searchData.map((location) => ({
    name: location.name,
    region: location.region,
    country: location.country,
    url: location.url,
  }));
};


/***/ }),

/***/ "./src/api/weatherInitializer.js":
/*!***************************************!*\
  !*** ./src/api/weatherInitializer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWeatherInitializer: () => (/* binding */ createWeatherInitializer)
/* harmony export */ });
/* harmony import */ var _api_weatherApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/weatherApi.js */ "./src/api/weatherApi.js");


const createWeatherInitializer = (
  geolocation,
  displaySelectLocation
) => {
  const loadFallbackWeather = async () => {
    try {
      const searchResults = await (0,_api_weatherApi_js__WEBPACK_IMPORTED_MODULE_0__.searchFor)("New York");
      if (searchResults.length > 0) {
        await displaySelectLocation(searchResults[0]);
      } else {
        throw new Error("No results found for New York");
      }
    } catch (fallbackError) {
      console.error(
        "Failed to load fallback weather for New York: ",
        fallbackError
      );
    }
  };

  return {
    loadInitialWeather: async () => {
      try {
        const location = await geolocation.getUserLocation();
        const searchResults = await (0,_api_weatherApi_js__WEBPACK_IMPORTED_MODULE_0__.searchFor)(
          `${location.lat},${location.lon}`
        );
        if (searchResults.length > 0) {
          await displaySelectLocation(searchResults[0]);
        } else {
          throw new Error("No location found for the given coordinates");
        }
      } catch (error) {
        console.error("Failed to load weather for current location: ", error);
        await loadFallbackWeather();
      }
    },
  };
};


/***/ }),

/***/ "./src/components/dashboard/allConditionsContent/airWeather.js":
/*!*********************************************************************!*\
  !*** ./src/components/dashboard/allConditionsContent/airWeather.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   airWeather: () => (/* binding */ airWeather)
/* harmony export */ });
/* harmony import */ var _utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createWidgetBox.js */ "./src/utils/createWidgetBox.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");




const airWeatherComponent = (weatherData) => {
  const airContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "air-weather");

  const aqi = aqiContainer(weatherData.current.aqi);
  const pressure = pressureContainer(
    weatherData.current.pressure.in,
    weatherData.current.pressure.mb
  );
  airContainer.appendChild(aqi);
  airContainer.appendChild(pressure);

  return airContainer;
};

const aqiContainer = (aqiIndex) => {
  const aqiInfo = aqiIndexMapping[aqiIndex] || {
    label: "unknown",
    color: "000000",
  };
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.singleValueWidgetBox)("AQI", aqiInfo.label, aqiInfo.color);
};

const pressureContainer = (pressIn, pressMb) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.widgetBox)("Pressure", pressIn, "inHg", pressMb, "mb", "pressure");
};

const aqiIndexMapping = {
  1: { label: "Good", color: "#007e00" },
  2: { label: "Moderate", color: "#999900" },
  3: { label: "Unhealthy for Sensitive Groups", color: "#ff4d00" },
  4: { label: "Unhealthy", color: "#cc0000" },
  5: { label: "Very Unhealthy", color: "#650470" },
  6: { label: "Hazardous", color: "#4c0014" },
};

const airWeather = (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__.weatherComponentWrapper)(
  airWeatherComponent,
  "air-weather"
);


/***/ }),

/***/ "./src/components/dashboard/allConditionsContent/moistureWeather.js":
/*!**************************************************************************!*\
  !*** ./src/components/dashboard/allConditionsContent/moistureWeather.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moistureWeather: () => (/* binding */ moistureWeather)
/* harmony export */ });
/* harmony import */ var _utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createWidgetBox.js */ "./src/utils/createWidgetBox.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");




const moistureWeatherComponent = (weatherData) => {
  const moistureContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "moisture-weather");

  const humidity = humidityContainer(weatherData.current.humidity);
  const precipitation = precipitationContainer(
    weatherData.current.precipitation.in,
    weatherData.current.precipitation.mm
  );
  const dewPoint = dewPointContainer(
    weatherData.current.dewPointC,
    weatherData.current.dewPointF
  );

  moistureContainer.appendChild(humidity);
  moistureContainer.appendChild(precipitation);
  moistureContainer.appendChild(dewPoint);

  return moistureContainer;
};

const humidityContainer = (humidityValue) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.singleValueWidgetBox)("Humidity", `${humidityValue}%`);
};
const precipitationContainer = (preIn, preMm) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.widgetBox)("Precipitation", preIn, "in", preMm, "mm", "precipitation");
};
const dewPointContainer = (tempC, tempF) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.widgetBox)("Dew Point", tempF, "F", tempC, "C", "temperature");
};

const moistureWeather = (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__.weatherComponentWrapper)(
  moistureWeatherComponent,
  "moisture-weather"
);


/***/ }),

/***/ "./src/components/dashboard/allConditionsContent/sunWeather.js":
/*!*********************************************************************!*\
  !*** ./src/components/dashboard/allConditionsContent/sunWeather.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sunWeather: () => (/* binding */ sunWeather)
/* harmony export */ });
/* harmony import */ var _utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createWidgetBox.js */ "./src/utils/createWidgetBox.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");




const sunWeatherComponent = (weatherData) => {
  const sunContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "sun-weather");
  const uv = uvContainer(weatherData.current.uvIndex);
  const maxTemp = maxTempContainer(
    weatherData.forecast[0].maxTempC,
    weatherData.forecast[0].maxTempF
  );
  const minTemp = minTempContainer(
    weatherData.forecast[0].minTempC,
    weatherData.forecast[0].minTempF
  );
  const avgTemp = avgTempContainer(
    weatherData.forecast[0].avgTempC,
    weatherData.forecast[0].avgTempF
  );

  sunContainer.appendChild(uv);
  sunContainer.appendChild(maxTemp);
  sunContainer.appendChild(minTemp);
  sunContainer.appendChild(avgTemp);

  return sunContainer;
};

const maxTempContainer = (tempC, tempF) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.widgetBox)("Max Temp.", tempF, "F", tempC, "C", "temperature");
};

const minTempContainer = (tempC, tempF) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.widgetBox)("Min Temp.", tempF, "F", tempC, "C", "temperature");
};

const avgTempContainer = (tempC, tempF) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.widgetBox)("Average Temp.", tempF, "F", tempC, "C", "temperature");
};

const uvContainer = (uvIndex) => {
  const uvInfo = getUVInfo(uvIndex);
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.singleValueWidgetBox)(
    `UV Index`,
    `${uvIndex} (${uvInfo.label})`,
    uvInfo.color
  );
};

const uvIndexRanges = [
  { max: 2, label: "Low", color: "#008000" },
  { max: 5, label: "Moderate", color: "#FF9A15" },
  { max: 7, label: "High", color: "#FF4500" },
  { max: 10, label: "Very High", color: "#DC143C" },
  { max: Infinity, label: "Extreme", color: "#8B008B" },
];

const getUVInfo = (uvIndex) => {
  for (const range of uvIndexRanges) {
    if (uvIndex <= range.max) {
      return { label: range.label, color: range.color };
    }
  }
  return { label: "unknown", color: "#000000" };
};

const sunWeather = (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__.weatherComponentWrapper)(
  sunWeatherComponent,
  "sun-weather"
);


/***/ }),

/***/ "./src/components/dashboard/allConditionsContent/windWeather.js":
/*!**********************************************************************!*\
  !*** ./src/components/dashboard/allConditionsContent/windWeather.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   windWeather: () => (/* binding */ windWeather)
/* harmony export */ });
/* harmony import */ var _utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createWidgetBox.js */ "./src/utils/createWidgetBox.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");




const windWeatherComponent = (weatherData) => {
  const windContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "wind-weather");

  const direction = directionContainer(weatherData.current.wind.direction);
  const speed = speedContainer(
    weatherData.current.wind.mph,
    weatherData.current.wind.kph
  );
  const windChill = windChillContainer(
    weatherData.current.wind.chillC,
    weatherData.current.wind.chillF
  );
  const gust = gustContainer(
    weatherData.current.gust.mph,
    weatherData.current.gust.kph
  );

  windContainer.appendChild(direction);
  windContainer.appendChild(speed);
  windContainer.appendChild(windChill);
  windContainer.appendChild(gust);

  return windContainer;
};

const directionContainer = (directionStr) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.singleValueWidgetBox)("Wind Direction", directionStr);
};

const speedContainer = (mph, kph) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.widgetBox)("Wind Speed", mph, "mph", kph, "kph", "speed");
};

const windChillContainer = (tempC, tempF) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.widgetBox)("Wind Chill", tempF, "F", tempC, "C", "temperature");
};

const gustContainer = (mph, kph) => {
  return (0,_utils_createWidgetBox_js__WEBPACK_IMPORTED_MODULE_0__.widgetBox)("Gust", mph, "mph", kph, "kph", "speed");
};

const windWeather = (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__.weatherComponentWrapper)(
  windWeatherComponent,
  "wind-weather"
);


/***/ }),

/***/ "./src/components/dashboard/dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/dashboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displaySelectLocation: () => (/* binding */ displaySelectLocation),
/* harmony export */   renderDashboardSkeleton: () => (/* binding */ renderDashboardSkeleton)
/* harmony export */ });
/* harmony import */ var _api_weatherApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/weatherApi.js */ "./src/api/weatherApi.js");
/* harmony import */ var _quickContent_quickWeather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickContent/quickWeather.js */ "./src/components/dashboard/quickContent/quickWeather.js");
/* harmony import */ var _allConditionsContent_windWeather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allConditionsContent/windWeather.js */ "./src/components/dashboard/allConditionsContent/windWeather.js");
/* harmony import */ var _allConditionsContent_moistureWeather_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allConditionsContent/moistureWeather.js */ "./src/components/dashboard/allConditionsContent/moistureWeather.js");
/* harmony import */ var _allConditionsContent_airWeather_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allConditionsContent/airWeather.js */ "./src/components/dashboard/allConditionsContent/airWeather.js");
/* harmony import */ var _hourlyContent_hourlyForecast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hourlyContent/hourlyForecast.js */ "./src/components/dashboard/hourlyContent/hourlyForecast.js");
/* harmony import */ var _preferenceContent_unitPreferences_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preferenceContent/unitPreferences.js */ "./src/components/dashboard/preferenceContent/unitPreferences.js");
/* harmony import */ var _pinnedContent_pinButton_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pinnedContent/pinButton.js */ "./src/components/pinnedContent/pinButton.js");
/* harmony import */ var _pinnedContent_pinnedLocationsManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pinnedContent/pinnedLocationsManager.js */ "./src/components/pinnedContent/pinnedLocationsManager.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");
/* harmony import */ var _allConditionsContent_sunWeather_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./allConditionsContent/sunWeather.js */ "./src/components/dashboard/allConditionsContent/sunWeather.js");













const displaySelectLocation = async (location) => {
  clearDashboard();
  const weatherDashboard = document.querySelector(".weather-dashboard");

  const loadingDashboard = createDashboard(location, null, true);
  weatherDashboard.appendChild(loadingDashboard);

  try {
    const currentLocationData = await (0,_api_weatherApi_js__WEBPACK_IMPORTED_MODULE_0__.getForecastData)(location.url);
    clearDashboard();
    const dashboard = createDashboard(location, currentLocationData, false);
    weatherDashboard.appendChild(dashboard);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherDashboard.innerHTML =
      "<p>Error loading weather data. Please try again.";
  }
};

const createDashboard = (locationData, currentLocationData, isLoading) => {
  const weatherDashboard = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_9__.createElement)("div", "inner-dashboard");
  const allConditions = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_9__.createElement)("div", "all-conditions");
  const pinButton = isLoading
    ? (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_10__.createSkeletonElement)("skeleton-button")
    : (0,_pinnedContent_pinButton_js__WEBPACK_IMPORTED_MODULE_7__.createPinButton)(_pinnedContent_pinnedLocationsManager_js__WEBPACK_IMPORTED_MODULE_8__.onPinClick)(locationData || {}, currentLocationData);
  const quickContainer = (0,_quickContent_quickWeather_js__WEBPACK_IMPORTED_MODULE_1__.quickWeather)(isLoading ? null : currentLocationData);
  const windContainer = (0,_allConditionsContent_windWeather_js__WEBPACK_IMPORTED_MODULE_2__.windWeather)(isLoading ? null : currentLocationData);
  const moistureContainer = (0,_allConditionsContent_moistureWeather_js__WEBPACK_IMPORTED_MODULE_3__.moistureWeather)(
    isLoading ? null : currentLocationData
  );
  const airContainer = (0,_allConditionsContent_airWeather_js__WEBPACK_IMPORTED_MODULE_4__.airWeather)(isLoading ? null : currentLocationData);
  const sunContainer = (0,_allConditionsContent_sunWeather_js__WEBPACK_IMPORTED_MODULE_11__.sunWeather)(isLoading ? null : currentLocationData);
  const hourlyContainers = isLoading
    ? Array(3)
        .fill()
        .map(() => (0,_hourlyContent_hourlyForecast_js__WEBPACK_IMPORTED_MODULE_5__.hourlyForecast)(null))
    : [
        (0,_hourlyContent_hourlyForecast_js__WEBPACK_IMPORTED_MODULE_5__.hourlyForecast)(
          currentLocationData.forecast[0],
          currentLocationData.location.localTime
        ),
        (0,_hourlyContent_hourlyForecast_js__WEBPACK_IMPORTED_MODULE_5__.hourlyForecast)(currentLocationData.forecast[1], null),
        (0,_hourlyContent_hourlyForecast_js__WEBPACK_IMPORTED_MODULE_5__.hourlyForecast)(currentLocationData.forecast[2], null),
      ];
  const preferenceContainer = (0,_preferenceContent_unitPreferences_js__WEBPACK_IMPORTED_MODULE_6__.unitTogglePreferences)();

  quickContainer.appendChild(pinButton);
  weatherDashboard.appendChild(quickContainer);
  weatherDashboard.appendChild(preferenceContainer);
  allConditions.appendChild(windContainer);
  allConditions.appendChild(moistureContainer);
  allConditions.appendChild(airContainer);
  allConditions.appendChild(sunContainer);
  weatherDashboard.appendChild(allConditions);
  hourlyContainers.forEach((hourContainer) =>
    weatherDashboard.appendChild(hourContainer)
  );
  return weatherDashboard;
};

const clearDashboard = () => {
  const weatherDashboard = document.querySelector(".weather-dashboard");
  weatherDashboard.innerHTML = "";
};

const renderDashboardSkeleton = () => {
  clearDashboard();
  const weatherDashboard = document.querySelector(".weather-dashboard");
  if (!weatherDashboard) {
    console.error("Weather dashboard element not found");
    return;
  }
  const skeletonDashboard = createDashboard(null, null, true);
  weatherDashboard.appendChild(skeletonDashboard);
};


/***/ }),

/***/ "./src/components/dashboard/hourlyContent/hourlyBox.js":
/*!*************************************************************!*\
  !*** ./src/components/dashboard/hourlyContent/hourlyBox.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hourlyForecastBox: () => (/* binding */ hourlyForecastBox)
/* harmony export */ });
/* harmony import */ var _utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dateFormatHelper.js */ "./src/utils/dateFormatHelper.js");
/* harmony import */ var _utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/unitToggler.js */ "./src/utils/unitToggler.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");





const hourlyForecastBox = (hourlyData, currentTime) => {
  const boxContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "hourly-box");

  if (!hourlyData) {
    boxContainer.appendChild((0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_3__.createSkeletonText)("40px", "1em"));
    boxContainer.appendChild((0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_3__.createSkeletonText)("40px", "1em"));
    boxContainer.appendChild((0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_3__.createSkeletonText)("40px", "1em"));
    boxContainer.appendChild((0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_3__.createSkeletonText)("40px", "1em"));
    return boxContainer;
  }

  const hourBlock = hourContainer(hourlyData.time, currentTime, boxContainer);
  const conditionTxt = conditionTxtContainer(hourlyData.conditionTxt);
  const conditionIcon = conditionIconContainer(hourlyData.conditionIcon);
  const tempElement = (0,_utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_1__.createToggleContainer)(
    hourlyData.tempF,
    "F",
    hourlyData.tempC,
    "C",
    "temperature"
  );

  boxContainer.appendChild(hourBlock);
  boxContainer.appendChild(tempElement);
  boxContainer.appendChild(conditionIcon);
  boxContainer.appendChild(conditionTxt);
  return boxContainer;
};

const hourContainer = (hour, currentTime, boxContainer) => {
  const timeFormat = (0,_utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_0__.formatTime)(hour);

  if (currentTime && (0,_utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_0__.isCurrentHour)(timeFormat, currentTime)) {
    boxContainer.classList.add("current-hour");
  }
  return (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createTextElement)(timeFormat, "div");
};

const conditionTxtContainer = (condition) => {
  return (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createTextElement)(condition, "div");
};

const conditionIconContainer = (url) => {
  return (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createImageElement)(url);
};


/***/ }),

/***/ "./src/components/dashboard/hourlyContent/hourlyForecast.js":
/*!******************************************************************!*\
  !*** ./src/components/dashboard/hourlyContent/hourlyForecast.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hourlyForecast: () => (/* binding */ hourlyForecast)
/* harmony export */ });
/* harmony import */ var _utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dateFormatHelper.js */ "./src/utils/dateFormatHelper.js");
/* harmony import */ var _hourlyBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourlyBox.js */ "./src/components/dashboard/hourlyContent/hourlyBox.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");





const hourlyForecastComponent = (weatherData, localTime) => {
  const hourlyContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "hourly-forecast");

  const dateContainer = dateHeader(weatherData.date);
  const allHoursContainer = allHourlyBoxes(
    weatherData.hourlyForecast,
    localTime
  );
  hourlyContainer.appendChild(dateContainer);
  hourlyContainer.appendChild(allHoursContainer);

  return hourlyContainer;
};

const dateHeader = (date) => {
  return (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createTextElement)((0,_utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date), "h4");
};

const allHourlyBoxes = (hourlyData, localTime) => {
  const hourlyContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "hourly-boxes");
  const currentTime = localTime ? (0,_utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_0__.formatTime)(localTime) : null;

  hourlyData.forEach((hourData) => {
    const box = (0,_hourlyBox_js__WEBPACK_IMPORTED_MODULE_1__.hourlyForecastBox)(hourData, currentTime);
    hourlyContainer.appendChild(box);
  });
  return hourlyContainer;
};

const hourlyForecast = (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_3__.weatherComponentWrapper)(
  (weatherData, localTime) => hourlyForecastComponent(weatherData, localTime),
  "hourly-forecast"
);


/***/ }),

/***/ "./src/components/dashboard/preferenceContent/unitPreferences.js":
/*!***********************************************************************!*\
  !*** ./src/components/dashboard/preferenceContent/unitPreferences.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unitTogglePreferences: () => (/* binding */ unitTogglePreferences)
/* harmony export */ });
/* harmony import */ var _utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/unitToggler.js */ "./src/utils/unitToggler.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/uiElements.js */ "./src/utils/uiElements.js");



const unitTogglePreferences = () => {
  const preferenceContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "unit-preferences");
  const header = preferenceHeader("h4", "Unit Preferences");
  const options = preferenceOptions();

  preferenceContainer.appendChild(header);
  preferenceContainer.appendChild(options);

  return preferenceContainer;
};

const preferenceOptions = () => {
  const optionContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "unit-options");

  for (const [category, units] of Object.entries(_utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__.unitOptions)) {
    const categoryLabel = categoryTxt(category);
    const unitInputs = unitInput(category, units);

    optionContainer.appendChild(categoryLabel);
    optionContainer.appendChild(unitInputs);
  }
  return optionContainer;
};

const preferenceHeader = (headerType, headerTxt) => {
  return (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)(headerTxt, headerType);
};

const unitInput = (category, units) => {
  const inputsContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "unit-inputs");
  units.forEach((unit) => {
    const input = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("input");
    input.type = "radio";
    input.id = `${category}-${unit}`;
    input.name = category;
    input.value = unit;
    input.checked = unit === _utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__.unitPreferences[category];

    input.addEventListener("change", (event) => {
      if (event.target.checked) {
        _utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__.unitPreferences[category] = unit;
        (0,_utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__.updateUnitDisplays)(category);
      }
    });

    const label = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)(_utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__.unitSymbols[unit], "label");
    label.for = `${category}-${unit}`;

    inputsContainer.appendChild(input);
    inputsContainer.appendChild(label);
  });

  return inputsContainer;
};

const categoryTxt = (category) => {
  return (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)(`${capitalize(category)}: `);
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


/***/ }),

/***/ "./src/components/dashboard/quickContent/quickWeather.js":
/*!***************************************************************!*\
  !*** ./src/components/dashboard/quickContent/quickWeather.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quickWeather: () => (/* binding */ quickWeather)
/* harmony export */ });
/* harmony import */ var _utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/unitToggler.js */ "./src/utils/unitToggler.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");
/* harmony import */ var _sunMoonWeather_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sunMoonWeather.js */ "./src/components/dashboard/quickContent/sunMoonWeather.js");





const quickWeatherComponent = (weatherData) => {
  const weatherContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "quick-weather");

  const location = locationContainer(
    `${weatherData.location.name}, ${weatherData.location.region}`
  );
  const temperature = temperatureContainer({
    tempC: weatherData.current.tempC,
    tempF: weatherData.current.tempF,
  });
  const condition = conditionContainer({
    icon: weatherData.current.conditionIcon,
    text: weatherData.current.conditionTxt,
  });
  const feelsLike = feelsLikeContainer({
    tempC: weatherData.current.feelsLikeC,
    tempF: weatherData.current.feelsLikeF,
  });

  const sunMoon = (0,_sunMoonWeather_js__WEBPACK_IMPORTED_MODULE_3__.sunMoonContainer)({
    sunrise: weatherData.forecast[0].sunrise,
    sunset: weatherData.forecast[0].sunset,
    moonrise: weatherData.forecast[0].moonrise,
    moonset: weatherData.forecast[0].moonset,
    moonPhase: weatherData.forecast[0].moonPhase,
  });

  weatherContainer.appendChild(location);
  weatherContainer.appendChild(temperature);
  weatherContainer.appendChild(condition);
  weatherContainer.appendChild(feelsLike);
  weatherContainer.appendChild(sunMoon);

  return weatherContainer;
};

const locationContainer = (locationText) => {
  return (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)(locationText, "h2");
};

const temperatureContainer = (tempData) => {
  return (0,_utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__.createToggleContainer)(
    tempData.tempF,
    "F",
    tempData.tempC,
    "C",
    "temperature"
  );
};

const conditionContainer = (conditionData) => {
  const container = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "condition-container");
  container.appendChild((0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createImageElement)(conditionData.icon));
  container.appendChild((0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)(conditionData.text));
  return container;
};

const feelsLikeContainer = (tempData) => {
  const container = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "feels-like-container");
  container.appendChild((0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)("Feels like:", "span"));
  container.appendChild(
    (0,_utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__.createToggleContainer)(
      tempData.tempF,
      "F",
      tempData.tempC,
      "C",
      "temperature"
    )
  );
  return container;
};

const quickWeather = (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__.weatherComponentWrapper)(
  quickWeatherComponent,
  "quick-weather"
);


/***/ }),

/***/ "./src/components/dashboard/quickContent/sunMoonWeather.js":
/*!*****************************************************************!*\
  !*** ./src/components/dashboard/quickContent/sunMoonWeather.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sunMoonContainer: () => (/* binding */ sunMoonContainer)
/* harmony export */ });
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _imgs_moonrise_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../imgs/moonrise.png */ "./src/imgs/moonrise.png");
/* harmony import */ var _imgs_moonset_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../imgs/moonset.png */ "./src/imgs/moonset.png");
/* harmony import */ var _imgs_sunrise_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../imgs/sunrise.png */ "./src/imgs/sunrise.png");
/* harmony import */ var _imgs_sunset_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../imgs/sunset.png */ "./src/imgs/sunset.png");
/* harmony import */ var _utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/dateFormatHelper.js */ "./src/utils/dateFormatHelper.js");







const sunMoonContainer = (celestialData) => {
  const container = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "celestial-container");

  container.appendChild((0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createImageElement)(_imgs_sunrise_png__WEBPACK_IMPORTED_MODULE_3__, "celestImg"));
  container.appendChild(
    (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)((0,_utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_5__.convertTimeFormat)(celestialData.sunrise))
  );
  container.appendChild((0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createImageElement)(_imgs_sunset_png__WEBPACK_IMPORTED_MODULE_4__, "celestImg"));
  container.appendChild(
    (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)((0,_utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_5__.convertTimeFormat)(celestialData.sunset))
  );
  container.appendChild((0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createImageElement)(_imgs_moonrise_png__WEBPACK_IMPORTED_MODULE_1__, "celestImg"));
  container.appendChild(
    (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)((0,_utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_5__.convertTimeFormat)(celestialData.moonrise))
  );
  container.appendChild((0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createImageElement)(_imgs_moonset_png__WEBPACK_IMPORTED_MODULE_2__, "celestImg"));
  container.appendChild(
    (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)((0,_utils_dateFormatHelper_js__WEBPACK_IMPORTED_MODULE_5__.convertTimeFormat)(celestialData.moonset))
  );
  return container;
};


/***/ }),

/***/ "./src/components/modal/attributions.js":
/*!**********************************************!*\
  !*** ./src/components/modal/attributions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAttributionsModal: () => (/* binding */ createAttributionsModal)
/* harmony export */ });
/* harmony import */ var _utils_modalHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/modalHelper.js */ "./src/utils/modalHelper.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/uiElements.js */ "./src/utils/uiElements.js");



const setupModalEvents = (modal) => {
  const attributionLinks = document.querySelector("#attributionLinks");
  if (attributionLinks) {
    attributionLinks.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display = "block";
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

const createModalContent = (attributions) => {
  const modalContent = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "modal-content");
  const heading = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)("Image Attributions", "h3");
  modalContent.appendChild(heading);

  attributions.forEach((attr) => {
    const link = (0,_utils_modalHelper_js__WEBPACK_IMPORTED_MODULE_0__.createAttributionLink)(attr);
    modalContent.appendChild(link);
  });

  return modalContent;
};

const createModal = (attributions) => {
  const modal = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "attr-modal");
  const modalContent = createModalContent(attributions);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  return modal;
};

const attributions = [
  {
    href: "https://www.flaticon.com/free-icons/route",
    title: "route icons",
    text: "Route icons created by Sir.Vector - Flaticon",
  },
  {
    href: "https://www.flaticon.com/free-icons/location",
    title: "location icons",
    text: "Location icons created by IconMarketPK - Flaticon",
  },
  {
    href: "https://www.freepik.com/icon/weather_15064705#fromView=family&page=1&position=8&uuid=3905355f-78c4-4b39-85b3-4fabe64007c6",
    text: "Icon by kawalanicon",
  },
  {
    href: "https://www.freepik.com/icon/weather_15064711#fromView=resource_detail&position=37",
    text: "Icon by kawalanicon",
  },
  {
    href: "https://www.freepik.com/icon/moon_15064635#fromView=resource_detail&position=48",
    text: "Icon by kawalanicon",
  },
  {
    href: "https://www.freepik.com/icon/moon_15064663#fromView=resource_detail&position=45",
    text: "Icon by kawalanicon",
  },
];

const createAttributionsModal = () => {
  const modal = createModal(attributions);
  setupModalEvents(modal);
  return {
    show: () => (0,_utils_modalHelper_js__WEBPACK_IMPORTED_MODULE_0__.showModal)(modal),
    hide: () => (0,_utils_modalHelper_js__WEBPACK_IMPORTED_MODULE_0__.hideModal)(modal),
  };
};


/***/ }),

/***/ "./src/components/pinnedContent/pinButton.js":
/*!***************************************************!*\
  !*** ./src/components/pinnedContent/pinButton.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPinButton: () => (/* binding */ createPinButton)
/* harmony export */ });
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _imgs_pin_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../imgs/pin.png */ "./src/imgs/pin.png");



const createPinButton = (onPinClick) => (locationData, weatherData) => {
  const pinContainer = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "pin-button");
  const pinImg = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createImageElement)(_imgs_pin_png__WEBPACK_IMPORTED_MODULE_1__, "pin-img");
  const pinTxt = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("Pin Spot");
  pinContainer.appendChild(pinImg);
  pinContainer.appendChild(pinTxt);
  pinContainer.addEventListener("click", () =>
    onPinClick(locationData, weatherData)
  );
  return pinContainer;
};


/***/ }),

/***/ "./src/components/pinnedContent/pinnedBox.js":
/*!***************************************************!*\
  !*** ./src/components/pinnedContent/pinnedBox.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPinnedBox: () => (/* binding */ createPinnedBox)
/* harmony export */ });
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/unitToggler.js */ "./src/utils/unitToggler.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");




const createPinnedBox =
  (onRemove, onClick) =>
  (url, city, region, tempF, tempC, isLoading = false) => {
    const box = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "pin-box");
    box.dataset.locationUrl = url;

    if (isLoading) {
      box.classList.add("skeleton");
      const skeletonTemp = (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__.createSkeletonText)("25%", "25px");
      const skeletonLocation = (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_2__.createSkeletonText)("75%", "25px");

      box.appendChild(skeletonTemp);
      box.appendChild(skeletonLocation);

      return box;
    }

    const location = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(
      `${city}, ${region}`,
      "div",
      "pin-location"
    );
    const temp = (0,_utils_unitToggler_js__WEBPACK_IMPORTED_MODULE_1__.createToggleContainer)(tempF, "F", tempC, "C", "temperature");
    const removeBtn = createRemoveBtn(url, onRemove);

    temp.classList.add("pin-temp");
    box.appendChild(temp);
    box.appendChild(location);
    box.appendChild(removeBtn);

    box.addEventListener("click", (event) => {
      if (event.target !== removeBtn && event.target !== removeBtn.firstChild) {
        onClick(url);
      }
    });
    return box;
  };

const createRemoveBtn = (locationUrl, onRemove) => {
  const removeBtn = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "close-button");
  removeBtn.innerHTML = "&#10005";
  removeBtn.addEventListener("click", () => onRemove(locationUrl));
  return removeBtn;
};


/***/ }),

/***/ "./src/components/pinnedContent/pinnedLocationsManager.js":
/*!****************************************************************!*\
  !*** ./src/components/pinnedContent/pinnedLocationsManager.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPinBtn: () => (/* binding */ createPinBtn),
/* harmony export */   loadPinnedLocations: () => (/* binding */ loadPinnedLocations),
/* harmony export */   onPinClick: () => (/* binding */ onPinClick),
/* harmony export */   renderPinnedSkeletons: () => (/* binding */ renderPinnedSkeletons)
/* harmony export */ });
/* harmony import */ var _api_pinLocationStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/pinLocationStorage.js */ "./src/api/pinLocationStorage.js");
/* harmony import */ var _api_weatherApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/weatherApi.js */ "./src/api/weatherApi.js");
/* harmony import */ var _pinButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pinButton.js */ "./src/components/pinnedContent/pinButton.js");
/* harmony import */ var _pinnedBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pinnedBox.js */ "./src/components/pinnedContent/pinnedBox.js");
/* harmony import */ var _dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.js */ "./src/components/dashboard/dashboard.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _imgs_pin_map_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../imgs/pin-map.png */ "./src/imgs/pin-map.png");








const pinnedContainer = document.querySelector(".pinned-locations");

const pinLocationHeader = () => {
  const header = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_5__.createElement)("div", "pinned-header");
  header.appendChild((0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_5__.createImageElement)(_imgs_pin_map_png__WEBPACK_IMPORTED_MODULE_6__));
  header.appendChild(
    (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_5__.createTextElement)("Pinned Locations", "h2", "pin-txt-header")
  );
  return header;
};

pinnedContainer.appendChild(pinLocationHeader());

const onPinnedLocationClick = async (locationUrl) => {
  const pinnedLocations = (0,_api_pinLocationStorage_js__WEBPACK_IMPORTED_MODULE_0__.getPinnedLocations)();
  const location = pinnedLocations.find((loc) => loc.url === locationUrl);
  if (location) {
    await (0,_dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_4__.displaySelectLocation)(location);
  } else {
    console.error("Pinned location not found");
  }
};

const onPinClick = (locationData, weatherData) => {
  if ((0,_api_pinLocationStorage_js__WEBPACK_IMPORTED_MODULE_0__.isLocationPinned)(locationData.url)) return;

  (0,_api_pinLocationStorage_js__WEBPACK_IMPORTED_MODULE_0__.addLocation)(locationData);
  const pinBox = (0,_pinnedBox_js__WEBPACK_IMPORTED_MODULE_3__.createPinnedBox)(removePinnedLocation, onPinnedLocationClick)(
    locationData.url,
    weatherData.location.name,
    weatherData.location.region,
    weatherData.current.tempF,
    weatherData.current.tempC
  );
  pinnedContainer.appendChild(pinBox);
};

const removePinnedLocation = (locationUrl) => {
  (0,_api_pinLocationStorage_js__WEBPACK_IMPORTED_MODULE_0__.removeLocation)(locationUrl);
  const boxElement = pinnedContainer.querySelector(
    `[data-location-url="${locationUrl}"]`
  );
  if (boxElement) boxElement.remove();
};

const createPinBtn = (0,_pinButton_js__WEBPACK_IMPORTED_MODULE_2__.createPinButton)(onPinClick);

const loadPinnedLocations = async () => {
  const pinnedLocations = (0,_api_pinLocationStorage_js__WEBPACK_IMPORTED_MODULE_0__.getPinnedLocations)();

  for (const location of pinnedLocations) {
    try {
      const currentLocationData = await (0,_api_weatherApi_js__WEBPACK_IMPORTED_MODULE_1__.getForecastData)(location.url);

      const skeletonBox = pinnedContainer.querySelector(
        `[data-location-url="${location.url}"]`
      );
      if (skeletonBox) skeletonBox.remove();

      const pinBox = (0,_pinnedBox_js__WEBPACK_IMPORTED_MODULE_3__.createPinnedBox)(
        removePinnedLocation,
        onPinnedLocationClick
      )(
        location.url,
        currentLocationData.location.name,
        currentLocationData.location.region,
        currentLocationData.current.tempF,
        currentLocationData.current.tempC
      );
      pinnedContainer.appendChild(pinBox);
    } catch (error) {
      console.error(`Failed to load data for ${location.url}: `, error);
    }
  }
};

const renderPinnedSkeletons = () => {
  const pinnedLocations = (0,_api_pinLocationStorage_js__WEBPACK_IMPORTED_MODULE_0__.getPinnedLocations)();
  (0,_api_pinLocationStorage_js__WEBPACK_IMPORTED_MODULE_0__.initializeDefaultLocations)();

  pinnedLocations.forEach((location) => {
    const skeletonBox = (0,_pinnedBox_js__WEBPACK_IMPORTED_MODULE_3__.createPinnedBox)(
      removePinnedLocation,
      onPinnedLocationClick
    )(location.url, "", "", "", "", true);
    pinnedContainer.appendChild(skeletonBox);
  });
};


/***/ }),

/***/ "./src/components/search/handleSearchInput.js":
/*!****************************************************!*\
  !*** ./src/components/search/handleSearchInput.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSearch: () => (/* binding */ clearSearch),
/* harmony export */   handleSearchInput: () => (/* binding */ handleSearchInput)
/* harmony export */ });
/* harmony import */ var _api_weatherApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/weatherApi.js */ "./src/api/weatherApi.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.js */ "./src/components/search/search.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/debounce.js */ "./src/utils/debounce.js");





const handleSearchInput = (event) => {
  const searchValue = event.target.value;
  const dropdownContent = document.querySelector(".dropdown-search-content");
  debouncedSearch(searchValue, dropdownContent);
};

const debouncedSearch = (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__.searchDebounce)(async (searchValue, dropdownContent) => {
  if (searchValue.length < 3) {
    dropdownContent.style.display = "none";
    return;
  }
  dropdownContent.style.display = "block";
  (0,_search_js__WEBPACK_IMPORTED_MODULE_1__.updateDropdown)([], dropdownContent, true);

  try {
    const searchResults = await (0,_api_weatherApi_js__WEBPACK_IMPORTED_MODULE_0__.searchFor)(searchValue);
    (0,_search_js__WEBPACK_IMPORTED_MODULE_1__.updateDropdown)(searchResults, dropdownContent);
  } catch (error) {
    console.error("Error fetching search results: ", error);
    (0,_search_js__WEBPACK_IMPORTED_MODULE_1__.updateDropdown)([], dropdownContent);
  }
}, 500);

const clearSearch = () => {
  (0,_search_js__WEBPACK_IMPORTED_MODULE_1__.clearSearchInput)();
  const dropdownContent = document.querySelector(".dropdown-search-content");
  dropdownContent.style.display = "none";
};


/***/ }),

/***/ "./src/components/search/search.js":
/*!*****************************************!*\
  !*** ./src/components/search/search.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSearchInput: () => (/* binding */ clearSearchInput),
/* harmony export */   createSearchComponent: () => (/* binding */ createSearchComponent),
/* harmony export */   updateDropdown: () => (/* binding */ updateDropdown)
/* harmony export */ });
/* harmony import */ var _handleSearchInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSearchInput.js */ "./src/components/search/handleSearchInput.js");
/* harmony import */ var _dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard/dashboard.js */ "./src/components/dashboard/dashboard.js");
/* harmony import */ var _utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/uiElements.js */ "./src/utils/uiElements.js");
/* harmony import */ var _utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/skeletonHelper.js */ "./src/utils/skeletonHelper.js");





let inputElement;

const createSearchComponent = () => {
  const searchContainer = document.querySelector(".search-container");
  inputElement = searchInput();
  const dropdownElement = searchDropdown();

  searchContainer.appendChild(inputElement);
  searchContainer.appendChild(dropdownElement);

  inputElement.addEventListener("input", _handleSearchInput_js__WEBPACK_IMPORTED_MODULE_0__.handleSearchInput);
};

const searchInput = () => {
  const inputElement = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("input");
  inputElement.type = "search";
  inputElement.id = "location-search";
  inputElement.name = "loc-search";
  inputElement.placeholder = "Search City or Zip Code";
  return inputElement;
};

const searchDropdown = () => {
  return (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", "dropdown-search-content");
};

const updateDropdown = (results, dropdownElement, isLoading = false) => {
  dropdownElement.innerHTML = "";

  if (isLoading) {
    const skeletonItems = Array(3)
      .fill()
      .map(() => {
        const skeletonItem = (0,_utils_skeletonHelper_js__WEBPACK_IMPORTED_MODULE_3__.createSkeletonText)();
        return skeletonItem;
      });
    skeletonItems.forEach((item) => dropdownElement.appendChild(item));
    return;
  }

  if (results.length === 0) {
    dropdownElement.innerHTML = "<p>No results found</p>";
    return;
  }

  const locationOptions = displayLocationOptions(results);
  dropdownElement.appendChild(locationOptions);
};

const displayLocationOptions = (results) => {
  const ul = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("ul");
  results.forEach((result) => {
    const li = (0,_utils_uiElements_js__WEBPACK_IMPORTED_MODULE_2__.createTextElement)(
      `${result.name}, ${result.region} (${result.country})`,
      "li"
    );
    li.addEventListener("click", () => {
      (0,_dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_1__.displaySelectLocation)(result);
      (0,_handleSearchInput_js__WEBPACK_IMPORTED_MODULE_0__.clearSearch)();
    });
    ul.appendChild(li);
  });
  return ul;
};

const clearSearchInput = () => {
  if (inputElement) {
    inputElement.value = "";
  }
};


/***/ }),

/***/ "./src/utils/apiHelpers.js":
/*!*********************************!*\
  !*** ./src/utils/apiHelpers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchApi: () => (/* binding */ fetchApi),
/* harmony export */   handleApiError: () => (/* binding */ handleApiError)
/* harmony export */ });
const handleApiError = (error, operation) => {
  console.error(`Error during ${operation}: `, error);
  if (error.message.includes("Failed to fetch")) {
    throw new Error(
      `Network error while trying to ${operation}. Please check your internet connection.`
    );
  } else if (error.message.includes("HTTP error")) {
    throw new Error(
      `Server error while trying to ${operation}. The requested data may not be available.`
    );
  } else {
    throw new Error(`Failed to ${operation}. Try again.`);
  }
};

const fetchApi = async (url, operation) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    handleApiError(error, operation);
  }
};


/***/ }),

/***/ "./src/utils/createWidgetBox.js":
/*!**************************************!*\
  !*** ./src/utils/createWidgetBox.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   singleValueWidgetBox: () => (/* binding */ singleValueWidgetBox),
/* harmony export */   widgetBox: () => (/* binding */ widgetBox)
/* harmony export */ });
/* harmony import */ var _unitToggler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unitToggler.js */ "./src/utils/unitToggler.js");
/* harmony import */ var _uiElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiElements.js */ "./src/utils/uiElements.js");



const widgetBox = (
  categoryLabel,
  value1,
  symbol1,
  value2,
  symbol2,
  unitType
) => {
  const box = (0,_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "widget-box");
  const label = (0,_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)(categoryLabel, "div");
  const value = (0,_unitToggler_js__WEBPACK_IMPORTED_MODULE_0__.createToggleContainer)(
    value1,
    symbol1,
    value2,
    symbol2,
    unitType
  );

  box.appendChild(label);
  box.appendChild(value);
  return box;
};

const singleValueWidgetBox = (categoryLabel, value1, color = null) => {
  const box = (0,_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "widget-box");
  const label = (0,_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)(categoryLabel, "div");
  const value = (0,_uiElements_js__WEBPACK_IMPORTED_MODULE_1__.createTextElement)(value1, "div");

  if (color) {
    value.style.color = color;
  }

  box.appendChild(label);
  box.appendChild(value);
  return box;
};


/***/ }),

/***/ "./src/utils/dateFormatHelper.js":
/*!***************************************!*\
  !*** ./src/utils/dateFormatHelper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTimeFormat: () => (/* binding */ convertTimeFormat),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   isCurrentHour: () => (/* binding */ isCurrentHour)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parse.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/getHours.mjs");


const formatTime = (dateTimeStr) => {
  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parse)(dateTimeStr, "yyyy-MM-dd HH:mm", new Date());
  const timeFormat = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "h:mm a");
  return timeFormat;
};

const formatDate = (dateStr) => {
  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parse)(dateStr, "yyyy-MM-dd", new Date());
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isToday)(date) ? "Today" : (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "MMMM d, yyyy");
};

const isCurrentHour = (hourlyTime, currentTime) => {
  const parsedHourlyTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parse)(hourlyTime, "h:mm a", new Date());
  const parsedCurrentTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parse)(currentTime, "h:mm a", new Date());

  const hourlyHour = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.getHours)(parsedHourlyTime);
  const currentHour = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.getHours)(parsedCurrentTime);

  return hourlyHour === currentHour;
};

const convertTimeFormat = (timeStr) => {
  if (!timeStr) {
    console.warn("Invalid time string: ", timeStr);
    return "N/A";
  }
  try {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parse)(timeStr, "hh:mm a", new Date());
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "h:mm a");
  } catch (error) {
    console.error("Error parsing time: ", timeStr, error);
    return "N/A";
  }
};


/***/ }),

/***/ "./src/utils/debounce.js":
/*!*******************************!*\
  !*** ./src/utils/debounce.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchDebounce: () => (/* binding */ searchDebounce)
/* harmony export */ });
const searchDebounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};


/***/ }),

/***/ "./src/utils/modalHelper.js":
/*!**********************************!*\
  !*** ./src/utils/modalHelper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAttributionLink: () => (/* binding */ createAttributionLink),
/* harmony export */   hideModal: () => (/* binding */ hideModal),
/* harmony export */   showModal: () => (/* binding */ showModal)
/* harmony export */ });
/* harmony import */ var _uiElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiElements */ "./src/utils/uiElements.js");


const createAttributionLink = (attr) => {
  const link = (0,_uiElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("a");
  link.href = attr.href;
  if (attr.title) link.title = attr.title;
  link.textContent = attr.text;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
};

const showModal = (modal) => {
  modal.style.display = "block";
};

const hideModal = (modal) => {
  modal.style.display = "none";
};


/***/ }),

/***/ "./src/utils/skeletonHelper.js":
/*!*************************************!*\
  !*** ./src/utils/skeletonHelper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSkeletonElement: () => (/* binding */ createSkeletonElement),
/* harmony export */   createSkeletonHourlyBoxes: () => (/* binding */ createSkeletonHourlyBoxes),
/* harmony export */   createSkeletonText: () => (/* binding */ createSkeletonText),
/* harmony export */   createSkeletonWidget: () => (/* binding */ createSkeletonWidget),
/* harmony export */   weatherComponentWrapper: () => (/* binding */ weatherComponentWrapper)
/* harmony export */ });
/* harmony import */ var _uiElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiElements.js */ "./src/utils/uiElements.js");


const createSkeletonElement = (className = "") => {
  const element = (0,_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", `skeleton ${className}`);
  element.setAttribute("aria-hidden", "true");
  return element;
};

const createSkeletonText = (width = "100%", height = "1em") => {
  const skeleton = createSkeletonElement("text");
  skeleton.style.width = width;
  skeleton.style.height = height;
  return skeleton;
};

const createSkeletonWidget = () => {
  const widget = (0,_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "widget-box skeleton");
  widget.appendChild(createSkeletonElement("skeleton-title"));
  widget.appendChild(createSkeletonElement("skeleton-value"));
  return widget;
};

const createSkeletonHourlyBoxes = () => {
  const hourlyContainer = (0,_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "hourly-boxes");
  for (let i = 0; i < 24; i++) {
    const box = createSkeletonElement("hourly-box skeleton");
    box.appendChild(createSkeletonText("90%", "2em"));
    box.appendChild(createSkeletonText("30%", "1em"));
    box.appendChild(createSkeletonText("80%", "6em"));
    box.appendChild(createSkeletonText("100%", "1em"));
    hourlyContainer.appendChild(box);
  }
  return hourlyContainer;
};

const weatherComponentWrapper = (componentFn, componentName) => {
  return (...args) => {
    const container = (0,_uiElements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", componentName);
    const weatherData = args[0];

    if (!weatherData) {
      if (componentName === "hourly-forecast") {
        container.appendChild(createSkeletonHourlyBoxes());
      } else {
        const skeletonCount = getSkeletonCount(componentName);
        for (let i = 0; i < skeletonCount; i++) {
          container.appendChild(createSkeletonWidget());
        }
      }
      return container;
    }
    return componentFn(...args);
  };
};

const skeletonCounts = {
  "wind-weather": 3,
  "moisture-weather": 3,
  "air-weather": 2,
  "hourly-forecast": 24,
  "quick-weather": 1,
  "sun-weather": 4,
};

const defaultSkeletonCount = 1;

const getSkeletonCount = (componentName) => {
  return skeletonCounts[componentName] || defaultSkeletonCount;
};


/***/ }),

/***/ "./src/utils/uiElements.js":
/*!*********************************!*\
  !*** ./src/utils/uiElements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createImageElement: () => (/* binding */ createImageElement),
/* harmony export */   createTextElement: () => (/* binding */ createTextElement)
/* harmony export */ });
const createElement = (tag, className = "") => {
  const element = document.createElement(tag);
  if (className) {
    const classNames = className.split(" ");
    element.classList.add(...classNames);
  }
  return element;
};

const createTextElement = (text, tag = "div", className = "") => {
  const element = document.createElement(tag, className);
  element.textContent = text;
  return element;
};

const createImageElement = (src, className = "") => {
  const img = createElement("img", className);
  img.src = src;
  return img;
};


/***/ }),

/***/ "./src/utils/unitToggler.js":
/*!**********************************!*\
  !*** ./src/utils/unitToggler.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createToggleContainer: () => (/* binding */ createToggleContainer),
/* harmony export */   unitOptions: () => (/* binding */ unitOptions),
/* harmony export */   unitPreferences: () => (/* binding */ unitPreferences),
/* harmony export */   unitSymbols: () => (/* binding */ unitSymbols),
/* harmony export */   updateUnitDisplays: () => (/* binding */ updateUnitDisplays)
/* harmony export */ });
/* harmony import */ var _uiElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiElements */ "./src/utils/uiElements.js");


const createToggleContainer = (value1, unit1, value2, unit2, type) => {
  const container = (0,_uiElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "unit-value");
  container.classList.add(type);
  container.textContent = `${value1} ${unitSymbols[unit1]}`;
  container.dataset[unit1.toLowerCase()] = value1;
  container.dataset[unit2.toLowerCase()] = value2;
  container.dataset.currentUnit = unit1;
  container.dataset.type = type;
  return container;
};

const updateUnitDisplays = (category) => {
  const allUnitContainers = document.querySelectorAll(
    `.unit-value[data-type="${category}"]`
  );
  allUnitContainers.forEach((container) => {
    const newUnit = unitPreferences[category];
    const newValue = container.dataset[newUnit.toLowerCase()];
    container.textContent = `${newValue} ${unitSymbols[newUnit]}`;
    container.dataset.currentUnit = newUnit;
  });
};

let unitPreferences = {
  temperature: "F",
  speed: "mph",
  pressure: "inHg",
  precipitation: "in",
};

const unitOptions = {
  temperature: ["F", "C"],
  speed: ["mph", "kph"],
  pressure: ["inHg", "mb"],
  precipitation: ["in", "mm"],
};

const unitSymbols = {
  C: "°C",
  F: "°F",
  mph: "mph",
  kph: "kph",
  inHg: "inHg",
  in: "in",
  mb: "mb",
  mm: "mm",
};


/***/ }),

/***/ "./src/imgs/moonrise.png":
/*!*******************************!*\
  !*** ./src/imgs/moonrise.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7ed68971d6a558f0468.png";

/***/ }),

/***/ "./src/imgs/moonset.png":
/*!******************************!*\
  !*** ./src/imgs/moonset.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0610716f3a16af2df358.png";

/***/ }),

/***/ "./src/imgs/pin-map.png":
/*!******************************!*\
  !*** ./src/imgs/pin-map.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b81609ef440acbb4106d.png";

/***/ }),

/***/ "./src/imgs/pin.png":
/*!**************************!*\
  !*** ./src/imgs/pin.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abf0fdd58616d801b5c9.png";

/***/ }),

/***/ "./src/imgs/sunrise.png":
/*!******************************!*\
  !*** ./src/imgs/sunrise.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c3b2ea5796950c0f4f3.png";

/***/ }),

/***/ "./src/imgs/sunset.png":
/*!*****************************!*\
  !*** ./src/imgs/sunset.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83fb4e865b45a28b821c.png";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/constructNow.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructNow.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructNow: () => (/* binding */ constructNow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateType | number | string,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructNow);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getDefaultOptions.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/getDefaultOptions.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");


/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default options.
 * @pure false
 *
 * @description
 * Returns an object that contains defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
 *
 * @returns The default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> {}
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
 */
function getDefaultOptions() {
  return Object.assign({}, (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDefaultOptions);


/***/ }),

/***/ "./node_modules/date-fns/getHours.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/getHours.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getHours: () => (/* binding */ getHours)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const hours = _date.getHours();
  return hours;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHours);


/***/ }),

/***/ "./node_modules/date-fns/getISODay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/getISODay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISODay: () => (/* binding */ getISODay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  let day = _date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISODay);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");



/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/parse.mjs":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/parse.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parsers: () => (/* reexport safe */ _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__.parsers)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getDefaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDefaultOptions.mjs */ "./node_modules/date-fns/getDefaultOptions.mjs");
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse/_lib/parsers.mjs */ "./node_modules/date-fns/parse/_lib/parsers.mjs");
/* harmony import */ var _parse_lib_Setter_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parse/_lib/Setter.mjs */ "./node_modules/date-fns/parse/_lib/Setter.mjs");









// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


/**
 * The {@link parse} function options.
 */

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;

const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dateStr, formatStr, referenceDate, options) {
  const defaultOptions = (0,_getDefaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  if (formatStr === "") {
    if (dateStr === "") {
      return (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(referenceDate);
    } else {
      return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
    }
  }

  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  // If timezone isn't specified, it will be set to the system timezone
  const setters = [new _parse_lib_Setter_mjs__WEBPACK_IMPORTED_MODULE_6__.DateToSystemTimezoneSetter()];

  const tokens = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter in _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters) {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp);

  const usedTokens = [];

  for (let token of tokens) {
    if (
      !options?.useAdditionalWeekYearTokens &&
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.isProtectedWeekYearToken)(token)
    ) {
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    if (
      !options?.useAdditionalDayOfYearTokens &&
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.isProtectedDayOfYearToken)(token)
    ) {
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }

    const firstCharacter = token[0];
    const parser = _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__.parsers[firstCharacter];
    if (parser) {
      const { incompatibleTokens } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) =>
            incompatibleTokens.includes(usedToken.token) ||
            usedToken.token === firstCharacter,
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`,
          );
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`,
        );
      }

      usedTokens.push({ token: firstCharacter, fullToken: token });

      const parseResult = parser.run(
        dateStr,
        token,
        locale.match,
        subFnOptions,
      );

      if (!parseResult) {
        return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
      }

      setters.push(parseResult.setter);

      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
  }

  const uniquePrioritySetters = setters
    .map((setter) => setter.priority)
    .sort((a, b) => b - a)
    .filter((priority, index, array) => array.indexOf(priority) === index)
    .map((priority) =>
      setters
        .filter((setter) => setter.priority === priority)
        .sort((a, b) => b.subPriority - a.subPriority),
    )
    .map((setterArray) => setterArray[0]);

  let date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(referenceDate);

  if (isNaN(date.getTime())) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
  }

  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
    }

    const result = setter.set(date, flags, subFnOptions);
    // Result is tuple (date, flags)
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
      // Result is date
    } else {
      date = result;
    }
  }

  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, date);
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/Parser.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Parser.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _Setter_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setter.mjs */ "./node_modules/date-fns/parse/_lib/Setter.mjs");


class Parser {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }

    return {
      setter: new _Setter_mjs__WEBPACK_IMPORTED_MODULE_0__.ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority,
      ),
      rest: result.rest,
    };
  }

  validate(_utcDate, _value, _options) {
    return true;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/Setter.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Setter.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateToSystemTimezoneSetter: () => (/* binding */ DateToSystemTimezoneSetter),
/* harmony export */   Setter: () => (/* binding */ Setter),
/* harmony export */   ValueSetter: () => (/* binding */ ValueSetter)
/* harmony export */ });
/* harmony import */ var _transpose_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transpose.mjs */ "./node_modules/date-fns/transpose.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



const TIMEZONE_UNIT_PRIORITY = 10;

class Setter {
  subPriority = 0;

  validate(_utcDate, _options) {
    return true;
  }
}

class ValueSetter extends Setter {
  constructor(
    value,

    validateValue,

    setValue,

    priority,
    subPriority,
  ) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }

  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }

  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}

class DateToSystemTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, (0,_transpose_mjs__WEBPACK_IMPORTED_MODULE_1__.transpose)(date, Date));
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/constants.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/constants.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numericPatterns: () => (/* binding */ numericPatterns),
/* harmony export */   timezonePatterns: () => (/* binding */ timezonePatterns)
/* harmony export */ });
const numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/, // 0 to 9999, -0 to -9999
};

const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
};


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsers: () => (/* binding */ parsers)
/* harmony export */ });
/* harmony import */ var _parsers_EraParser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/EraParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/EraParser.mjs");
/* harmony import */ var _parsers_YearParser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/YearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/YearParser.mjs");
/* harmony import */ var _parsers_LocalWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/LocalWeekYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs");
/* harmony import */ var _parsers_ISOWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ISOWeekYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs");
/* harmony import */ var _parsers_ExtendedYearParser_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ExtendedYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs");
/* harmony import */ var _parsers_QuarterParser_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/QuarterParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs");
/* harmony import */ var _parsers_StandAloneQuarterParser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/StandAloneQuarterParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs");
/* harmony import */ var _parsers_MonthParser_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/MonthParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs");
/* harmony import */ var _parsers_StandAloneMonthParser_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/StandAloneMonthParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs");
/* harmony import */ var _parsers_LocalWeekParser_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/LocalWeekParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs");
/* harmony import */ var _parsers_ISOWeekParser_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ISOWeekParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs");
/* harmony import */ var _parsers_DateParser_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/DateParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DateParser.mjs");
/* harmony import */ var _parsers_DayOfYearParser_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/DayOfYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs");
/* harmony import */ var _parsers_DayParser_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/DayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DayParser.mjs");
/* harmony import */ var _parsers_LocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/LocalDayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs");
/* harmony import */ var _parsers_StandAloneLocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/StandAloneLocalDayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs");
/* harmony import */ var _parsers_ISODayParser_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsers/ISODayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs");
/* harmony import */ var _parsers_AMPMParser_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsers/AMPMParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs");
/* harmony import */ var _parsers_AMPMMidnightParser_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsers/AMPMMidnightParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs");
/* harmony import */ var _parsers_DayPeriodParser_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parsers/DayPeriodParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs");
/* harmony import */ var _parsers_Hour1to12Parser_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parsers/Hour1to12Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs");
/* harmony import */ var _parsers_Hour0to23Parser_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsers/Hour0to23Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs");
/* harmony import */ var _parsers_Hour0To11Parser_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parsers/Hour0To11Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs");
/* harmony import */ var _parsers_Hour1To24Parser_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./parsers/Hour1To24Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs");
/* harmony import */ var _parsers_MinuteParser_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./parsers/MinuteParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs");
/* harmony import */ var _parsers_SecondParser_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./parsers/SecondParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs");
/* harmony import */ var _parsers_FractionOfSecondParser_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./parsers/FractionOfSecondParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs");
/* harmony import */ var _parsers_ISOTimezoneWithZParser_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./parsers/ISOTimezoneWithZParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs");
/* harmony import */ var _parsers_ISOTimezoneParser_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./parsers/ISOTimezoneParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs");
/* harmony import */ var _parsers_TimestampSecondsParser_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./parsers/TimestampSecondsParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs");
/* harmony import */ var _parsers_TimestampMillisecondsParser_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./parsers/TimestampMillisecondsParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs");
































/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- It's ok, we want any here
const parsers = {
  G: new _parsers_EraParser_mjs__WEBPACK_IMPORTED_MODULE_0__.EraParser(),
  y: new _parsers_YearParser_mjs__WEBPACK_IMPORTED_MODULE_1__.YearParser(),
  Y: new _parsers_LocalWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_2__.LocalWeekYearParser(),
  R: new _parsers_ISOWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_3__.ISOWeekYearParser(),
  u: new _parsers_ExtendedYearParser_mjs__WEBPACK_IMPORTED_MODULE_4__.ExtendedYearParser(),
  Q: new _parsers_QuarterParser_mjs__WEBPACK_IMPORTED_MODULE_5__.QuarterParser(),
  q: new _parsers_StandAloneQuarterParser_mjs__WEBPACK_IMPORTED_MODULE_6__.StandAloneQuarterParser(),
  M: new _parsers_MonthParser_mjs__WEBPACK_IMPORTED_MODULE_7__.MonthParser(),
  L: new _parsers_StandAloneMonthParser_mjs__WEBPACK_IMPORTED_MODULE_8__.StandAloneMonthParser(),
  w: new _parsers_LocalWeekParser_mjs__WEBPACK_IMPORTED_MODULE_9__.LocalWeekParser(),
  I: new _parsers_ISOWeekParser_mjs__WEBPACK_IMPORTED_MODULE_10__.ISOWeekParser(),
  d: new _parsers_DateParser_mjs__WEBPACK_IMPORTED_MODULE_11__.DateParser(),
  D: new _parsers_DayOfYearParser_mjs__WEBPACK_IMPORTED_MODULE_12__.DayOfYearParser(),
  E: new _parsers_DayParser_mjs__WEBPACK_IMPORTED_MODULE_13__.DayParser(),
  e: new _parsers_LocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_14__.LocalDayParser(),
  c: new _parsers_StandAloneLocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_15__.StandAloneLocalDayParser(),
  i: new _parsers_ISODayParser_mjs__WEBPACK_IMPORTED_MODULE_16__.ISODayParser(),
  a: new _parsers_AMPMParser_mjs__WEBPACK_IMPORTED_MODULE_17__.AMPMParser(),
  b: new _parsers_AMPMMidnightParser_mjs__WEBPACK_IMPORTED_MODULE_18__.AMPMMidnightParser(),
  B: new _parsers_DayPeriodParser_mjs__WEBPACK_IMPORTED_MODULE_19__.DayPeriodParser(),
  h: new _parsers_Hour1to12Parser_mjs__WEBPACK_IMPORTED_MODULE_20__.Hour1to12Parser(),
  H: new _parsers_Hour0to23Parser_mjs__WEBPACK_IMPORTED_MODULE_21__.Hour0to23Parser(),
  K: new _parsers_Hour0To11Parser_mjs__WEBPACK_IMPORTED_MODULE_22__.Hour0To11Parser(),
  k: new _parsers_Hour1To24Parser_mjs__WEBPACK_IMPORTED_MODULE_23__.Hour1To24Parser(),
  m: new _parsers_MinuteParser_mjs__WEBPACK_IMPORTED_MODULE_24__.MinuteParser(),
  s: new _parsers_SecondParser_mjs__WEBPACK_IMPORTED_MODULE_25__.SecondParser(),
  S: new _parsers_FractionOfSecondParser_mjs__WEBPACK_IMPORTED_MODULE_26__.FractionOfSecondParser(),
  X: new _parsers_ISOTimezoneWithZParser_mjs__WEBPACK_IMPORTED_MODULE_27__.ISOTimezoneWithZParser(),
  x: new _parsers_ISOTimezoneParser_mjs__WEBPACK_IMPORTED_MODULE_28__.ISOTimezoneParser(),
  t: new _parsers_TimestampSecondsParser_mjs__WEBPACK_IMPORTED_MODULE_29__.TimestampSecondsParser(),
  T: new _parsers_TimestampMillisecondsParser_mjs__WEBPACK_IMPORTED_MODULE_30__.TimestampMillisecondsParser(),
};


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMMidnightParser: () => (/* binding */ AMPMMidnightParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class AMPMMidnightParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMParser: () => (/* binding */ AMPMParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class AMPMParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DateParser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DateParser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateParser: () => (/* binding */ DateParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

// Day of the month
class DateParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;
  subPriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeapYearIndex)(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }

  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayOfYearParser: () => (/* binding */ DayOfYearParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class DayOfYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  subpriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeapYearIndex)(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }

  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayParser.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayParser.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayParser: () => (/* binding */ DayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");



// Day of week
class DayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "EEEE":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_1__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayPeriodParser: () => (/* binding */ DayPeriodParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



// in the morning, in the afternoon, in the evening, at night
class DayPeriodParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/EraParser.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/EraParser.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EraParser: () => (/* binding */ EraParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");


class EraParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 140;

  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return (
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );

      // A, B
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return (
          match.era(dateString, { width: "wide" }) ||
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );
    }
  }

  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["R", "u", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedYearParser: () => (/* binding */ ExtendedYearParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class ExtendedYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "u") {
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(4, dateString);
    }

    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FractionOfSecondParser: () => (/* binding */ FractionOfSecondParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class FractionOfSecondParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 30;

  parse(dateString, token) {
    const valueCallback = (value) =>
      Math.trunc(value * Math.pow(10, -token.length + 3));
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
  }

  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0To11Parser: () => (/* binding */ Hour0To11Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour0To11Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["h", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0to23Parser: () => (/* binding */ Hour0to23Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour0to23Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 23;
  }

  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1To24Parser: () => (/* binding */ Hour1To24Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour1To24Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 24;
  }

  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1to12Parser: () => (/* binding */ Hour1to12Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour1to12Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 12;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["H", "K", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISODayParser: () => (/* binding */ ISODayParser)
/* harmony export */ });
/* harmony import */ var _setISODay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setISODay.mjs */ "./node_modules/date-fns/setISODay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




// ISO day of week
class ISODayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };

    switch (token) {
      // 2
      case "i":
      case "ii": // 02
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, { unit: "day" });
      // Tue
      case "iii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // T
      case "iiiii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "narrow",
            context: "formatting",
          }),
          valueCallback,
        );
      // Tu
      case "iiiiii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "short",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // Tuesday
      case "iiii":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "abbreviated",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 7;
  }

  set(date, _flags, value) {
    date = (0,_setISODay_mjs__WEBPACK_IMPORTED_MODULE_2__.setISODay)(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneParser: () => (/* binding */ ISOTimezoneParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// Timezone (ISO-8601)
class ISOTimezoneParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "x":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "xx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basic, dateString);
      case "xxxx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "xxxxx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "xxx":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(
      date,
      date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__.getTimezoneOffsetInMilliseconds)(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "X"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneWithZParser: () => (/* binding */ ISOTimezoneWithZParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// Timezone (ISO-8601. +00:00 is `'Z'`)
class ISOTimezoneWithZParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "X":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "XX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basic, dateString);
      case "XXXX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "XXXXX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "XXX":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(
      date,
      date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__.getTimezoneOffsetInMilliseconds)(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "x"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekParser: () => (/* binding */ ISOWeekParser)
/* harmony export */ });
/* harmony import */ var _setISOWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../setISOWeek.mjs */ "./node_modules/date-fns/setISOWeek.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// ISO week of year
class ISOWeekParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value) {
    return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfISOWeek)((0,_setISOWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.setISOWeek)(date, value));
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekYearParser: () => (/* binding */ ISOWeekYearParser)
/* harmony export */ });
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");





// ISO week-numbering year
class ISOWeekYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "R") {
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(4, dateString);
    }

    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    const firstWeekOfYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfISOWeek)(firstWeekOfYear);
  }

  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalDayParser: () => (/* binding */ LocalDayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




// Local day of week
class LocalDayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "e":
      case "ee": // 03
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "eee":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "eeee":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekParser: () => (/* binding */ LocalWeekParser)
/* harmony export */ });
/* harmony import */ var _setWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../setWeek.mjs */ "./node_modules/date-fns/setWeek.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// Local week of year
class LocalWeekParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value, options) {
    return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)((0,_setWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.setWeek)(date, value, options), options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekYearParser: () => (/* binding */ LocalWeekYearParser)
/* harmony export */ });
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");





// Local week-numbering year
class LocalWeekYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY",
    });

    switch (token) {
      case "Y":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(4, dateString), valueCallback);
      case "Yo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value, options) {
    const currentYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.getWeekYear)(date, options);

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeTwoDigitYear)(
        value.year,
        currentYear,
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate,
      );
      date.setHours(0, 0, 0, 0);
      return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(date, options);
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(date, options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinuteParser: () => (/* binding */ MinuteParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class MinuteParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 60;

  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthParser: () => (/* binding */ MonthParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class MonthParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];

  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "MM":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );

      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return (
          match.month(dateString, { width: "wide", context: "formatting" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuarterParser: () => (/* binding */ QuarterParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class QuarterParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ": // 01, 02, 03, 04
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondParser: () => (/* binding */ SecondParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class SecondParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 50;

  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, { unit: "second" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneLocalDayParser: () => (/* binding */ StandAloneLocalDayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




// Stand-alone local day of week
class StandAloneLocalDayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "c":
      case "cc": // 03
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "ccc":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return (
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // Tuesday
      case "cccc":
      default:
        return (
          match.day(dateString, { width: "wide", context: "standalone" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneMonthParser: () => (/* binding */ StandAloneMonthParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class StandAloneMonthParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "LL":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );

      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return (
          match.month(dateString, { width: "wide", context: "standalone" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneQuarterParser: () => (/* binding */ StandAloneQuarterParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class StandAloneQuarterParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq": // 01, 02, 03, 04
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampMillisecondsParser: () => (/* binding */ TimestampMillisecondsParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class TimestampMillisecondsParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 20;

  parse(dateString) {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseAnyDigitsSigned)(dateString);
  }

  set(date, _flags, value) {
    return [(0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, value), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampSecondsParser: () => (/* binding */ TimestampSecondsParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class TimestampSecondsParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 40;

  parse(dateString) {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseAnyDigitsSigned)(dateString);
  }

  set(date, _flags, value) {
    return [(0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, value * 1000), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/YearParser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/YearParser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YearParser: () => (/* binding */ YearParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class YearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy",
    });

    switch (token) {
      case "y":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(4, dateString), valueCallback);
      case "yo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value) {
    const currentYear = date.getFullYear();

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeTwoDigitYear)(
        value.year,
        currentYear,
      );
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/utils.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/utils.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayPeriodEnumToHours: () => (/* binding */ dayPeriodEnumToHours),
/* harmony export */   isLeapYearIndex: () => (/* binding */ isLeapYearIndex),
/* harmony export */   mapValue: () => (/* binding */ mapValue),
/* harmony export */   normalizeTwoDigitYear: () => (/* binding */ normalizeTwoDigitYear),
/* harmony export */   parseAnyDigitsSigned: () => (/* binding */ parseAnyDigitsSigned),
/* harmony export */   parseNDigits: () => (/* binding */ parseNDigits),
/* harmony export */   parseNDigitsSigned: () => (/* binding */ parseNDigitsSigned),
/* harmony export */   parseNumericPattern: () => (/* binding */ parseNumericPattern),
/* harmony export */   parseTimezonePattern: () => (/* binding */ parseTimezonePattern)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");



function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }

  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest,
  };
}

function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1),
    };
  }

  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;

  return {
    value:
      sign *
      (hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour +
        minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute +
        seconds * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.anyDigitsSigned, dateString);
}

function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}

function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}

function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;

  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}


/***/ }),

/***/ "./node_modules/date-fns/setDay.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/setDay.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setDay: () => (/* binding */ setDay)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");




/**
 * The {@link setDay} function options.
 */

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(date, day, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const currentDay = _date.getDay();

  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;

  const delta = 7 - weekStartsOn;
  const diff =
    day < 0 || day > 6
      ? day - ((currentDay + delta) % 7)
      : ((dayIndex + delta) % 7) - ((currentDay + delta) % 7);
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(_date, diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDay);


/***/ }),

/***/ "./node_modules/date-fns/setISODay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/setISODay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISODay: () => (/* binding */ setISODay)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _getISODay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISODay.mjs */ "./node_modules/date-fns/getISODay.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(date, day) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const currentDay = (0,_getISODay_mjs__WEBPACK_IMPORTED_MODULE_1__.getISODay)(_date);
  const diff = day - currentDay;
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(_date, diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISODay);


/***/ }),

/***/ "./node_modules/date-fns/setISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/setISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISOWeek: () => (/* binding */ setISOWeek)
/* harmony export */ });
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(date, week) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.getISOWeek)(_date) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/setWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/setWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setWeek: () => (/* binding */ setWeek)
/* harmony export */ });
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * The {@link setWeek} function options.
 */

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(date, week, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeek)(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./node_modules/date-fns/transpose.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/transpose.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");


/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam DateInputType - The input `Date` type derived from the passed argument.
 * @typeParam DateOutputType - The output `Date` type derived from the passed constructor.
 *
 * @param fromDate - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */
function transpose(fromDate, constructor) {
  const date =
    constructor instanceof Date
      ? (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(constructor, 0)
      : new constructor(0);
  date.setFullYear(
    fromDate.getFullYear(),
    fromDate.getMonth(),
    fromDate.getDate(),
  );
  date.setHours(
    fromDate.getHours(),
    fromDate.getMinutes(),
    fromDate.getSeconds(),
    fromDate.getMilliseconds(),
  );
  return date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transpose);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_search_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search/search.js */ "./src/components/search/search.js");
/* harmony import */ var _components_pinnedContent_pinnedLocationsManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pinnedContent/pinnedLocationsManager.js */ "./src/components/pinnedContent/pinnedLocationsManager.js");
/* harmony import */ var _components_dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.js */ "./src/components/dashboard/dashboard.js");
/* harmony import */ var _api_weatherInitializer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/weatherInitializer.js */ "./src/api/weatherInitializer.js");
/* harmony import */ var _api_geolocation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/geolocation.js */ "./src/api/geolocation.js");
/* harmony import */ var _components_modal_attributions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal/attributions.js */ "./src/components/modal/attributions.js");








const createApp = (
  searchComponent,
  pinnedLocationsManager,
  weatherInitializer
) => ({
  initialize: async () => {
    searchComponent.create();
    pinnedLocationsManager.renderSkeletons();
    weatherInitializer.renderSkeleton();

    try {
      await Promise.all([
        pinnedLocationsManager.load(),
        weatherInitializer.loadInitialWeather(),
      ]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  },
});

const geolocation = (0,_api_geolocation_js__WEBPACK_IMPORTED_MODULE_5__.createGeolocation)();
const weatherInitializer = (0,_api_weatherInitializer_js__WEBPACK_IMPORTED_MODULE_4__.createWeatherInitializer)(
  geolocation,
  _components_dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_3__.displaySelectLocation
);

(0,_components_modal_attributions_js__WEBPACK_IMPORTED_MODULE_6__.createAttributionsModal)();

const app = createApp(
  { create: _components_search_search_js__WEBPACK_IMPORTED_MODULE_1__.createSearchComponent },
  {
    load: _components_pinnedContent_pinnedLocationsManager_js__WEBPACK_IMPORTED_MODULE_2__.loadPinnedLocations,
    renderSkeletons: _components_pinnedContent_pinnedLocationsManager_js__WEBPACK_IMPORTED_MODULE_2__.renderPinnedSkeletons,
  },
  {
    loadInitialWeather: weatherInitializer.loadInitialWeather,
    renderSkeleton: _components_dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_3__.renderDashboardSkeleton,
  }
);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => app.initialize());
} else {
  app.initialize();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFFBQVEsT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFP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Q0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLHdEQUF3RCxhQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0Esc0RBQXNELGFBQWE7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7O0FDMU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDdUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBCQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFNBQVMsaUVBQWE7QUFDdEI7O0FBRUE7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3dCO0FBQ047QUFDK0M7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHlCQUF5QiwyREFBVTtBQUNuQywwQkFBMEIsMkRBQVU7O0FBRXBDO0FBQ0Esc0JBQXNCLHlHQUErQjtBQUNyRDtBQUNBLHVCQUF1Qix5R0FBK0I7O0FBRXREO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw2REFBaUI7QUFDeEU7O0FBRUE7QUFDQSxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGlCO0FBQ0s7QUFDSjtBQUNRO0FBSzlCO0FBQ0k7QUFDRjs7QUFFdEM7QUFDQTtBQUNzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZ0M7O0FBRWhDO0FBQ0EsUUFBUSxjQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxvQkFBb0Isc0VBQWlCO0FBQ3JDLDJCQUEyQixvRkFBd0I7QUFDbkQ7QUFDQSxFQUFFLHFGQUFxQjtBQUN2Qjs7QUFFQSwwRkFBdUI7O0FBRXZCO0FBQ0EsSUFBSSxRQUFRLCtFQUFxQixFQUFFO0FBQ25DO0FBQ0EsVUFBVSxvR0FBbUI7QUFDN0IscUJBQXFCLHNHQUFxQjtBQUMxQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQix1RkFBdUI7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL2FwaS9nZW9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvYXBpL3BpbkxvY2F0aW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvYXBpL3dlYXRoZXJBcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL2FwaS93ZWF0aGVySW5pdGlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2FsbENvbmRpdGlvbnNDb250ZW50L2FpcldlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2FsbENvbmRpdGlvbnNDb250ZW50L21vaXN0dXJlV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvYWxsQ29uZGl0aW9uc0NvbnRlbnQvc3VuV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvYWxsQ29uZGl0aW9uc0NvbnRlbnQvd2luZFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvaG91cmx5Q29udGVudC9ob3VybHlCb3guanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2hvdXJseUNvbnRlbnQvaG91cmx5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL3ByZWZlcmVuY2VDb250ZW50L3VuaXRQcmVmZXJlbmNlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvcXVpY2tDb250ZW50L3F1aWNrV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvcXVpY2tDb250ZW50L3N1bk1vb25XZWF0aGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL21vZGFsL2F0dHJpYnV0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9waW5uZWRDb250ZW50L3BpbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9waW5uZWRDb250ZW50L3Bpbm5lZEJveC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9waW5uZWRDb250ZW50L3Bpbm5lZExvY2F0aW9uc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoL2hhbmRsZVNlYXJjaElucHV0LmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL3V0aWxzL2FwaUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL3V0aWxzL2NyZWF0ZVdpZGdldEJveC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvdXRpbHMvZGF0ZUZvcm1hdEhlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vc3JjL3V0aWxzL21vZGFsSGVscGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL3NyYy91dGlscy9za2VsZXRvbkhlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvdXRpbHMvdWlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9zcmMvdXRpbHMvdW5pdFRvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkRGF5cy5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3ROb3cubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldEhvdXJzLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPRGF5Lm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vlay5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNEYXRlLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9TZXR0ZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9BTVBNTWlkbmlnaHRQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvQU1QTVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9EYXRlUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0RheU9mWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9EYXlQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvRGF5UGVyaW9kUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0VyYVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9FeHRlbmRlZFllYXJQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvRnJhY3Rpb25PZlNlY29uZFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMFRvMTFQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSG91cjB0bzIzUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIxVG8yNFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMXRvMTJQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSVNPRGF5UGFyc2VyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1RpbWV6b25lUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1RpbWV6b25lV2l0aFpQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSVNPV2Vla1BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9JU09XZWVrWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbERheVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvTG9jYWxXZWVrWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9NaW51dGVQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvTW9udGhQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvUXVhcnRlclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9TZWNvbmRQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVNb250aFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9TdGFuZEFsb25lUXVhcnRlclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9UaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvVGltZXN0YW1wU2Vjb25kc1BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9ZZWFyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi91dGlscy5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldERheS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldElTT0RheS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldElTT1dlZWsubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIubWpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RyYW5zcG9zZS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXItdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAzNTBweCkgbWlubWF4KDYwMHB4LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgNjBweCkgbWlubWF4KDEwMHB4LCAxZnIpIG1pbm1heChcbiAgICAgIDVweCxcbiAgICAgIDEwcHhcbiAgICApO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBpbnMgc2VhcmNoXCIgXCJwaW5zIGRhc2hib2FyZFwiIFwiZm9vdGVyIGZvb3RlclwiO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20gcmlnaHQsXG4gICAgcmdiKDEwNiwgMTc2LCAxODgpLFxuICAgIHJnYigyNDUsIDI0NSwgMjU1KVxuICApO1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi8qIHNlYXJjaCBjb21wb25lbnQgICovXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogc2VhcmNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA0NXB4IDAgMDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbiNsb2NhdGlvbi1zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMmI0Mjtcbn1cblxuLmRyb3Bkb3duLXNlYXJjaC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICB0b3A6IDEwNSU7XG4gIHdpZHRoOiA4MiU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wZG93bi1zZWFyY2gtY29udGVudCB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRyb3Bkb3duLXNlYXJjaC1jb250ZW50IGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDJiNDI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tc2VhcmNoLWNvbnRlbnQgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYjQyO1xuICBjb2xvcjogI2UwZTBlMDtcbn1cblxuLmRyb3Bkb3duLXNlYXJjaC1jb250ZW50IHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDJiNDI7XG59XG5cbi8qIHBpbm5lZCBjb21wb25lbnQgKi9cblxuLnBpbm5lZC1sb2NhdGlvbnMge1xuICBncmlkLWFyZWE6IHBpbnM7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNlMGUwZTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ4MztcbiAgaGVpZ2h0OiBjYWxjKDkzdmggLSAzMHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnBpbm5lZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODE7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNmZmZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMnB4ICMwMDJiNDI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjMDAzYzVjO1xufVxuXG4ucGlubmVkLWhlYWRlciBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5waW4tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjMDAyYjQyO1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMDAyYjQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmOGZmO1xuICBjb2xvcjogIzAwMmI0MjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBpbi10ZW1wIHtcbiAgZmxleC1iYXNpczogNzBweDtcbn1cblxuLnBpbi1ib3g6aG92ZXIgLmNsb3NlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGluLWJveCAuY2xvc2UtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLTEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDJiNDI7XG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggIzAwMmI0MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjVmO1xufVxuXG4vKiBkYXNoYm9hcmQgY29tcG9uZW50ICovXG5cbi5pbm5lci1kYXNoYm9hcmQge1xuICBncmlkLWFyZWE6IGRhc2hib2FyZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgbWlubWF4KDM1MHB4LCAxZnIpIG1pbm1heChcbiAgICAgIDIwMHB4LFxuICAgICAgMWZyXG4gICAgKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMjcxcHgsIDFmcikgbWlubWF4KG1heC1jb250ZW50LCAxZnIpIHJlcGVhdChcbiAgICAgIDMsXG4gICAgICAyODdweFxuICAgICk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicXVpY2sgcXVpY2sgdW5pdHNcIiBcImFsbC1jb25kaXRpb25zIGFsbC1jb25kaXRpb25zIGFsbC1jb25kaXRpb25zXCIgXCJmaXJzdCBmaXJzdCBmaXJzdFwiIFwic2VjIHNlYyBzZWNcIiBcInRoaXJkIHRoaXJkIHRoaXJkXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ4MztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggI2UwZTBlMDtcbiAgaGVpZ2h0OiA4NnZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4vKiBxdWljayAqL1xuXG4ucXVpY2std2VhdGhlciB7XG4gIGdyaWQtYXJlYTogcXVpY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAxMTBweCkgbWlubWF4KG1pbi1jb250ZW50LCAxZnIpIG1pbm1heChcbiAgICAgIG1pbi1jb250ZW50LFxuICAgICAgMWZyXG4gICAgKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcInBpbiBsb2NhdGlvbiBsb2NhdGlvblwiXG4gICAgXCJwaW4gdGVtcCBzdW4tbW9vblwiXG4gICAgXCJwaW4gZmVlbHMtbGlrZSBzdW4tbW9vblwiXG4gICAgXCJwaW4gaW1nLWNvbmQgc3VuLW1vb25cIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmI0MjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDEwcHggMTBweCAjMDAyYjQyO1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAwO1xuICBjb2xvcjogI2UwZTBlMDtcbiAgbWFyZ2luOiAzMHB4IDUwcHggMjBweCAzMHB4O1xufVxuXG4vKiBwaW4gYnV0dG9uICovXG5cbi5waW4tYnV0dG9uIHtcbiAgZ3JpZC1hcmVhOiBwaW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBpbi1pbWcge1xuICB3aWR0aDogMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5xdWljay13ZWF0aGVyID4gOmZpcnN0LWNoaWxkIHtcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG59XG5cbi5xdWljay13ZWF0aGVyIC51bml0LXZhbHVlIHtcbiAgZ3JpZC1hcmVhOiB0ZW1wO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uY29uZGl0aW9uLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogaW1nLWNvbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbn1cblxuLmZlZWxzLWxpa2UtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiBmZWVscy1saWtlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmVlbHMtbGlrZS1jb250YWluZXIgLnVuaXQtdmFsdWUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiBpbml0aWFsO1xufVxuXG4uY2VsZXN0aWFsLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogc3VuLW1vb247XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDQwcHgsIDUwcHgpIG1pbm1heCg3MHB4LCAxMDBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDQwcHgpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2VsZXN0SW1nIHtcbiAgd2lkdGg6IDJlbTtcbn1cblxuLyogdW5pdCBwcmVmZXJlbmNlICovXG5cbi51bml0LXByZWZlcmVuY2VzIHtcbiAgZ3JpZC1hcmVhOiB1bml0cztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzAwMmI0MjtcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDEwcHggMTBweCAjZmZmZmZmYjg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZiODtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbi51bml0LW9wdGlvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg1MHB4LCAxZnIpIG1pbm1heCg1MHB4LCAxZnIpO1xuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gIGdhcDogNHB4O1xufVxuXG4udW5pdC1pbnB1dHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4IDMwcHg7XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMmI0MjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMDAyYjQyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmI0MjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMmI0MjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG5cbi8qIGFsbCBjb25kaXRpb25zICovXG5cbi5hbGwtY29uZGl0aW9ucyB7XG4gIGdyaWQtYXJlYTogYWxsLWNvbmRpdGlvbnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjVweDtcbiAgbWFyZ2luOiAzMHB4IDAgMjBweCAwO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAyNXB4O1xuICBib3gtc2hhZG93OiAtMXB4IC0xcHggMTBweCAxMHB4ICMwMDJiNDI3MztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmI0MjczO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ud2lkZ2V0LWJveCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDZweCA1cHggI2ZmZmZmZmU4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMDAyYjQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZTg7XG4gIGNvbG9yOiAjMDAyYjQyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHdpbmQgKi9cblxuLndpbmQtd2VhdGhlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjVweDtcbn1cblxuLyogbW9pc3R1cmUgKi9cblxuLm1vaXN0dXJlLXdlYXRoZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI1cHg7XG59XG5cbi8qIGFpciAqL1xuXG4uYWlyLXdlYXRoZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI1cHg7XG59XG5cbi8qIHN1biAqL1xuLnN1bi13ZWF0aGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNXB4O1xufVxuXG4vKiBob3VybHkgZm9yZWNhc3QgKi9cblxuLmhvdXJseS1mb3JlY2FzdCB7XG4gIGNvbG9yOiAjMDAyYjQyO1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMDAyYjQyO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmlubmVyLWRhc2hib2FyZCA+IGRpdjpudGgtbGFzdC1jaGlsZCgzKSB7XG4gIGdyaWQtYXJlYTogZmlyc3Q7XG59XG5cbi5pbm5lci1kYXNoYm9hcmQgPiBkaXY6bnRoLWxhc3QtY2hpbGQoMikge1xuICBncmlkLWFyZWE6IHNlYztcbn1cblxuLmlubmVyLWRhc2hib2FyZCA+IGRpdjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gIGdyaWQtYXJlYTogdGhpcmQ7XG59XG5cbi5ob3VybHktZm9yZWNhc3QgPiA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMjVweDtcbn1cblxuLmhvdXJseS1ib3hlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTVweCAyMHB4IDIwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG91cmx5LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjMDAyYjQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmOGZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXg6IDAgMCAxMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaG91cmx5LWJveCA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaG91cmx5LWJveCAudW5pdC12YWx1ZSB7XG4gIGJveC1zaGFkb3c6IC0xcHggLTFweCAxMHB4IDEwcHggcmdiKDI1NSAyNTUgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmN1cnJlbnQtaG91ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGZmZGQ7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzE2NDIwMDtcbn1cblxuLyogc2tlbGV0b24gKi9cblxuLnNrZWxldG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBhbmltYXRpb246IHB1bHNlIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjIpO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjYpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC4yKTtcbiAgfVxufVxuXG4ucXVpY2std2VhdGhlciAuc2tlbGV0b24tYnV0dG9uIHtcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG59XG5cbi53aWRnZXQtYm94IC5za2VsZXRvbiB7XG4gIHdpZHRoOiA1ZW07XG4gIGhlaWdodDogMWVtO1xufVxuXG4ucXVpY2std2VhdGhlciAuc2tlbGV0b24gLnNrZWxldG9uLXRpdGxlLFxuLnF1aWNrLXdlYXRoZXIgLnNrZWxldG9uIC5za2VsZXRvbi12YWx1ZSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnF1aWNrLXdlYXRoZXIgLnNrZWxldG9uIC53aWRnZXQtYm94IHtcbiAgaGVpZ2h0OiAxMWVtO1xufVxuXG4vKiBmb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuZm9vdGVyIGEge1xuICBjb2xvcjogIzAwNGUwMDtcbn1cblxuLm1vZGFsLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmF0dHItbW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDg4JSk7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWRlYjM4MDtcbiAgYm94LXNoYWRvdzogMCAwIDEwMHB4IHdoZWF0O1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzAwMDAwMDtcbiAgY29sb3I6IHJnYigyNTUsIDIzNCwgMjE4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1JSBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG9FQUFvRTtFQUNwRTs7O0tBR0c7RUFDSCxtRUFBbUU7RUFDbkUsU0FBUztFQUNUOzs7O0dBSUM7RUFDRCxZQUFZO0FBQ2Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FB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OztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFO0lBQ0UsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLDBDQUEwQztFQUM1QztBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluLWNvbnRlbnQsIDM1MHB4KSBtaW5tYXgoNjAwcHgsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgNjBweCkgbWlubWF4KDEwMHB4LCAxZnIpIG1pbm1heChcXG4gICAgICA1cHgsXFxuICAgICAgMTBweFxcbiAgICApO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInBpbnMgc2VhcmNoXFxcIiBcXFwicGlucyBkYXNoYm9hcmRcXFwiIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gYm90dG9tIHJpZ2h0LFxcbiAgICByZ2IoMTA2LCAxNzYsIDE4OCksXFxuICAgIHJnYigyNDUsIDI0NSwgMjU1KVxcbiAgKTtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLyogc2VhcmNoIGNvbXBvbmVudCAgKi9cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHNlYXJjaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDQ1cHggMCAwO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jbG9jYXRpb24tc2VhcmNoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjMDAyYjQyO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VhcmNoLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG4gIHRvcDogMTA1JTtcXG4gIHdpZHRoOiA4MiU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VhcmNoLWNvbnRlbnQgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRyb3Bkb3duLXNlYXJjaC1jb250ZW50IGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDJiNDI7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kcm9wZG93bi1zZWFyY2gtY29udGVudCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYjQyO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5kcm9wZG93bi1zZWFyY2gtY29udGVudCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwMmI0MjtcXG59XFxuXFxuLyogcGlubmVkIGNvbXBvbmVudCAqL1xcblxcbi5waW5uZWQtbG9jYXRpb25zIHtcXG4gIGdyaWQtYXJlYTogcGlucztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjZTBlMGUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDgzO1xcbiAgaGVpZ2h0OiBjYWxjKDkzdmggLSAzMHB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucGlubmVkLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4MTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNmZmZmZmY7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjMDAyYjQyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiAjMDAzYzVjO1xcbn1cXG5cXG4ucGlubmVkLWhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGluLWJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzAwMmI0MjtcXG4gIHRleHQtc2hhZG93OiAwIDAgMXB4ICMwMDJiNDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmOGZmO1xcbiAgY29sb3I6ICMwMDJiNDI7XFxuICBtYXJnaW46IDE1cHggMDtcXG4gIG1pbi13aWR0aDogMTQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5waW4tdGVtcCB7XFxuICBmbGV4LWJhc2lzOiA3MHB4O1xcbn1cXG5cXG4ucGluLWJveDpob3ZlciAuY2xvc2UtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucGluLWJveCAuY2xvc2UtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtOHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDJiNDI7XFxuICB0ZXh0LXNoYWRvdzogMCAycHggMnB4ICMwMDJiNDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNWY7XFxufVxcblxcbi8qIGRhc2hib2FyZCBjb21wb25lbnQgKi9cXG5cXG4uaW5uZXItZGFzaGJvYXJkIHtcXG4gIGdyaWQtYXJlYTogZGFzaGJvYXJkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIG1pbm1heCgzNTBweCwgMWZyKSBtaW5tYXgoXFxuICAgICAgMjAwcHgsXFxuICAgICAgMWZyXFxuICAgICk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgyNzFweCwgMWZyKSBtaW5tYXgobWF4LWNvbnRlbnQsIDFmcikgcmVwZWF0KFxcbiAgICAgIDMsXFxuICAgICAgMjg3cHhcXG4gICAgKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJxdWljayBxdWljayB1bml0c1xcXCIgXFxcImFsbC1jb25kaXRpb25zIGFsbC1jb25kaXRpb25zIGFsbC1jb25kaXRpb25zXFxcIiBcXFwiZmlyc3QgZmlyc3QgZmlyc3RcXFwiIFxcXCJzZWMgc2VjIHNlY1xcXCIgXFxcInRoaXJkIHRoaXJkIHRoaXJkXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ4MztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjZTBlMGUwO1xcbiAgaGVpZ2h0OiA4NnZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLyogcXVpY2sgKi9cXG5cXG4ucXVpY2std2VhdGhlciB7XFxuICBncmlkLWFyZWE6IHF1aWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAxMTBweCkgbWlubWF4KG1pbi1jb250ZW50LCAxZnIpIG1pbm1heChcXG4gICAgICBtaW4tY29udGVudCxcXG4gICAgICAxZnJcXG4gICAgKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJwaW4gbG9jYXRpb24gbG9jYXRpb25cXFwiXFxuICAgIFxcXCJwaW4gdGVtcCBzdW4tbW9vblxcXCJcXG4gICAgXFxcInBpbiBmZWVscy1saWtlIHN1bi1tb29uXFxcIlxcbiAgICBcXFwicGluIGltZy1jb25kIHN1bi1tb29uXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJiNDI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDEwcHggMTBweCAjMDAyYjQyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxcHggI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDA7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIG1hcmdpbjogMzBweCA1MHB4IDIwcHggMzBweDtcXG59XFxuXFxuLyogcGluIGJ1dHRvbiAqL1xcblxcbi5waW4tYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogcGluO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGluLWltZyB7XFxuICB3aWR0aDogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucXVpY2std2VhdGhlciA+IDpmaXJzdC1jaGlsZCB7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCAwIDE1cHggMDtcXG59XFxuXFxuLnF1aWNrLXdlYXRoZXIgLnVuaXQtdmFsdWUge1xcbiAgZ3JpZC1hcmVhOiB0ZW1wO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi5jb25kaXRpb24tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogaW1nLWNvbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmZlZWxzLWxpa2UtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogZmVlbHMtbGlrZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mZWVscy1saWtlLWNvbnRhaW5lciAudW5pdC12YWx1ZSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcXG59XFxuXFxuLmNlbGVzdGlhbC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBzdW4tbW9vbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg0MHB4LCA1MHB4KSBtaW5tYXgoNzBweCwgMTAwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgNDBweCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZWxlc3RJbWcge1xcbiAgd2lkdGg6IDJlbTtcXG59XFxuXFxuLyogdW5pdCBwcmVmZXJlbmNlICovXFxuXFxuLnVuaXQtcHJlZmVyZW5jZXMge1xcbiAgZ3JpZC1hcmVhOiB1bml0cztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwIDAgMXB4ICMwMDJiNDI7XFxuICBib3gtc2hhZG93OiAtMXB4IC0xcHggMTBweCAxMHB4ICNmZmZmZmZiODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZiODtcXG4gIGhlaWdodDogNzAlO1xcbn1cXG5cXG4udW5pdC1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg1MHB4LCAxZnIpIG1pbm1heCg1MHB4LCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi51bml0LWlucHV0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweCAzMHB4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAyYjQyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwMmI0MjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogOXB4O1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYjQyO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMmI0MjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLyogYWxsIGNvbmRpdGlvbnMgKi9cXG5cXG4uYWxsLWNvbmRpdGlvbnMge1xcbiAgZ3JpZC1hcmVhOiBhbGwtY29uZGl0aW9ucztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI1cHg7XFxuICBtYXJnaW46IDMwcHggMCAyMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAyNXB4O1xcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDEwcHggMTBweCAjMDAyYjQyNzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYjQyNzM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi53aWRnZXQtYm94IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDZweCA1cHggI2ZmZmZmZmU4O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzAwMmI0MjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZlODtcXG4gIGNvbG9yOiAjMDAyYjQyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiB3aW5kICovXFxuXFxuLndpbmQtd2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4vKiBtb2lzdHVyZSAqL1xcblxcbi5tb2lzdHVyZS13ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbi8qIGFpciAqL1xcblxcbi5haXItd2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4vKiBzdW4gKi9cXG4uc3VuLXdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjVweDtcXG59XFxuXFxuLyogaG91cmx5IGZvcmVjYXN0ICovXFxuXFxuLmhvdXJseS1mb3JlY2FzdCB7XFxuICBjb2xvcjogIzAwMmI0MjtcXG4gIHRleHQtc2hhZG93OiAwIDAgMXB4ICMwMDJiNDI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLmlubmVyLWRhc2hib2FyZCA+IGRpdjpudGgtbGFzdC1jaGlsZCgzKSB7XFxuICBncmlkLWFyZWE6IGZpcnN0O1xcbn1cXG5cXG4uaW5uZXItZGFzaGJvYXJkID4gZGl2Om50aC1sYXN0LWNoaWxkKDIpIHtcXG4gIGdyaWQtYXJlYTogc2VjO1xcbn1cXG5cXG4uaW5uZXItZGFzaGJvYXJkID4gZGl2Om50aC1sYXN0LWNoaWxkKDEpIHtcXG4gIGdyaWQtYXJlYTogdGhpcmQ7XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3QgPiA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxufVxcblxcbi5ob3VybHktYm94ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweCAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5LWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzAwMmI0MjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2Y4ZmY7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleDogMCAwIDExMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmhvdXJseS1ib3ggPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ob3VybHktYm94IC51bml0LXZhbHVlIHtcXG4gIGJveC1zaGFkb3c6IC0xcHggLTFweCAxMHB4IDEwcHggcmdiKDI1NSAyNTUgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY3VycmVudC1ob3VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGZmZGQ7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4ICMxNjQyMDA7XFxufVxcblxcbi8qIHNrZWxldG9uICovXFxuXFxuLnNrZWxldG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBhbmltYXRpb246IHB1bHNlIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuMik7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNik7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjIpO1xcbiAgfVxcbn1cXG5cXG4ucXVpY2std2VhdGhlciAuc2tlbGV0b24tYnV0dG9uIHtcXG4gIHdpZHRoOiA1ZW07XFxuICBoZWlnaHQ6IDVlbTtcXG59XFxuXFxuLndpZGdldC1ib3ggLnNrZWxldG9uIHtcXG4gIHdpZHRoOiA1ZW07XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuLnF1aWNrLXdlYXRoZXIgLnNrZWxldG9uIC5za2VsZXRvbi10aXRsZSxcXG4ucXVpY2std2VhdGhlciAuc2tlbGV0b24gLnNrZWxldG9uLXZhbHVlIHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5xdWljay13ZWF0aGVyIC5za2VsZXRvbiAud2lkZ2V0LWJveCB7XFxuICBoZWlnaHQ6IDExZW07XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBjb2xvcjogIzAwNGUwMDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hdHRyLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDg4JSk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVkZWIzODA7XFxuICBib3gtc2hhZG93OiAwIDAgMTAwcHggd2hlYXQ7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzAwMDAwMDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyMzQsIDIxOCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY3JlYXRlR2VvbG9jYXRpb24gPSAoKSA9PiAoe1xuICBnZXRVc2VyTG9jYXRpb246ICgpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAgIChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgICBsb246IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgbG9jYXRpb246IFwiLCBlcnJvcik7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkLlwiKSk7XG4gICAgICB9XG4gICAgfSksXG59KTtcbiIsImV4cG9ydCBjb25zdCBnZXRQaW5uZWRMb2NhdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGlubmVkTG9jYXRpb25zXCIpKSB8fCBbXTtcbn07XG5cbmNvbnN0IHNhdmVQaW5uZWRMb2NhdGlvbnMgPSAobG9jYXRpb25zKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGlubmVkTG9jYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KGxvY2F0aW9ucykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTG9jYXRpb25QaW5uZWQgPSAodXJsKSA9PiB7XG4gIGNvbnN0IHBpbm5lZExvY2F0aW9ucyA9IGdldFBpbm5lZExvY2F0aW9ucygpO1xuICByZXR1cm4gcGlubmVkTG9jYXRpb25zLnNvbWUoKGxvY2F0aW9uKSA9PiBsb2NhdGlvbi51cmwgPT09IHVybCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTG9jYXRpb24gPSAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgcGlubmVkTG9jYXRpb25zID0gZ2V0UGlubmVkTG9jYXRpb25zKCk7XG4gIGlmICghaXNMb2NhdGlvblBpbm5lZChsb2NhdGlvbi51cmwpKSB7XG4gICAgcGlubmVkTG9jYXRpb25zLnB1c2goe1xuICAgICAgdXJsOiBsb2NhdGlvbi51cmwsXG4gICAgfSk7XG4gICAgc2F2ZVBpbm5lZExvY2F0aW9ucyhwaW5uZWRMb2NhdGlvbnMpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTG9jYXRpb24gPSAodXJsKSA9PiB7XG4gIGNvbnN0IHBpbm5lZExvY2F0aW9ucyA9IGdldFBpbm5lZExvY2F0aW9ucygpO1xuICBjb25zdCB1cGRhdGVkTG9jYXRpb25zID0gcGlubmVkTG9jYXRpb25zLmZpbHRlcihcbiAgICAobG9jYXRpb24pID0+IGxvY2F0aW9uLnVybCAhPT0gdXJsXG4gICk7XG4gIHNhdmVQaW5uZWRMb2NhdGlvbnModXBkYXRlZExvY2F0aW9ucyk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZURlZmF1bHRMb2NhdGlvbnMgPSAoKSA9PiB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2aXNpdGVkXCIpKSB7XG4gICAgY29uc3QgZGVmYXVsdExvY2F0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdXJsOiBcIm5ldy15b3JrLW5ldy15b3JrLXVuaXRlZC1zdGF0ZXMtb2YtYW1lcmljYVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXJsOiBcImxvcy1hbmdlbGVzLWNhbGlmb3JuaWEtdW5pdGVkLXN0YXRlcy1vZi1hbWVyaWNhXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1cmw6IFwicG9ydGxhbmQtb3JlZ29uLXVuaXRlZC1zdGF0ZXMtb2YtYW1lcmljYVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXJsOiBcImJvdWxkZXItY29sb3JhZG8tdW5pdGVkLXN0YXRlcy1vZi1hbWVyaWNhXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1cmw6IFwiY2FtYnJpZGdlLW1hc3NhY2h1c2V0dHMtdW5pdGVkLXN0YXRlcy1vZi1hbWVyaWNhXCIsXG4gICAgICB9LFxuICAgIF07XG4gICAgc2F2ZVBpbm5lZExvY2F0aW9ucyhkZWZhdWx0TG9jYXRpb25zKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZpc2l0ZWRcIiwgXCJ0cnVlXCIpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgZmV0Y2hBcGkgfSBmcm9tIFwiLi4vdXRpbHMvYXBpSGVscGVycy5qc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Rm9yZWNhc3REYXRhID0gYXN5bmMgKHVybCwgZGF5cyA9IDMpID0+IHtcbiAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZldGNoQXBpKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWX0mcT0ke3VybH0mZGF5cz0ke2RheXN9JmFxaT15ZXNgLFxuICAgIFwiZmV0Y2ggZm9yZWNhc3QgZGF0YVwiXG4gICk7XG4gIHJldHVybiBwcm9jZXNzRm9yZWNhc3REYXRhKHJhd0RhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaEZvciA9IGFzeW5jIChkZXNpcmVkTG9jYXRpb25TdHJpbmcpID0+IHtcbiAgY29uc3Qgc2VhcmNoRGF0YSA9IGF3YWl0IGZldGNoQXBpKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVl9JnE9JHtkZXNpcmVkTG9jYXRpb25TdHJpbmd9YCxcbiAgICBcInNlYXJjaCBmb3IgbG9jYXRpb25zXCJcbiAgKTtcbiAgcmV0dXJuIHByb2Nlc3NTZWFyY2hSZXN1bHRzKHNlYXJjaERhdGEpO1xufTtcblxuY29uc3QgcHJvY2Vzc0ZvcmVjYXN0RGF0YSA9IChyYXdEYXRhKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0ge1xuICAgIGFxaTogcmF3RGF0YS5jdXJyZW50LmFpcl9xdWFsaXR5W1widXMtZXBhLWluZGV4XCJdLFxuICAgIGNvbmRpdGlvblR4dDogcmF3RGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgIGNvbmRpdGlvbkljb246IHJhd0RhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICBpc0RheTogcmF3RGF0YS5jdXJyZW50LmlzX2RheSxcbiAgICB0ZW1wQzogcmF3RGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICB0ZW1wRjogcmF3RGF0YS5jdXJyZW50LnRlbXBfZixcbiAgICBmZWVsc0xpa2VDOiByYXdEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgZmVlbHNMaWtlRjogcmF3RGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgIGRld1BvaW50QzogcmF3RGF0YS5jdXJyZW50LmRld3BvaW50X2MsXG4gICAgZGV3UG9pbnRGOiByYXdEYXRhLmN1cnJlbnQuZGV3cG9pbnRfZixcbiAgICBodW1pZGl0eTogcmF3RGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgIHV2SW5kZXg6IHJhd0RhdGEuY3VycmVudC51dixcbiAgICBwcmVjaXBpdGF0aW9uOiB7XG4gICAgICBpbjogcmF3RGF0YS5jdXJyZW50LnByZWNpcF9pbixcbiAgICAgIG1tOiByYXdEYXRhLmN1cnJlbnQucHJlY2lwX21tLFxuICAgIH0sXG4gICAgcHJlc3N1cmU6IHtcbiAgICAgIGluOiByYXdEYXRhLmN1cnJlbnQucHJlc3N1cmVfaW4sXG4gICAgICBtYjogcmF3RGF0YS5jdXJyZW50LnByZXNzdXJlX21iLFxuICAgIH0sXG4gICAgd2luZDoge1xuICAgICAgZGlyZWN0aW9uOiByYXdEYXRhLmN1cnJlbnQud2luZF9kaXIsXG4gICAgICBrcGg6IHJhd0RhdGEuY3VycmVudC53aW5kX2twaCxcbiAgICAgIG1waDogcmF3RGF0YS5jdXJyZW50LndpbmRfbXBoLFxuICAgICAgY2hpbGxDOiByYXdEYXRhLmN1cnJlbnQud2luZGNoaWxsX2MsXG4gICAgICBjaGlsbEY6IHJhd0RhdGEuY3VycmVudC53aW5kY2hpbGxfZixcbiAgICB9LFxuICAgIGd1c3Q6IHtcbiAgICAgIGtwaDogcmF3RGF0YS5jdXJyZW50Lmd1c3Rfa3BoLFxuICAgICAgbXBoOiByYXdEYXRhLmN1cnJlbnQuZ3VzdF9tcGgsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBmb3JlY2FzdFdlYXRoZXIgPSByYXdEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5Lm1hcCgoZGF5RGF0YSkgPT4gKHtcbiAgICBkYXRlOiBkYXlEYXRhLmRhdGUsXG4gICAgc3VucmlzZTogZGF5RGF0YS5hc3Ryby5zdW5yaXNlLFxuICAgIHN1bnNldDogZGF5RGF0YS5hc3Ryby5zdW5zZXQsXG4gICAgbW9vbnJpc2U6IGRheURhdGEuYXN0cm8ubW9vbnJpc2UsXG4gICAgbW9vbnNldDogZGF5RGF0YS5hc3Ryby5tb29uc2V0LFxuICAgIG1heFRlbXBDOiBkYXlEYXRhLmRheS5tYXh0ZW1wX2MsXG4gICAgbWF4VGVtcEY6IGRheURhdGEuZGF5Lm1heHRlbXBfZixcbiAgICBtaW5UZW1wQzogZGF5RGF0YS5kYXkubWludGVtcF9jLFxuICAgIG1pblRlbXBGOiBkYXlEYXRhLmRheS5taW50ZW1wX2YsXG4gICAgYXZnVGVtcEM6IGRheURhdGEuZGF5LmF2Z3RlbXBfYyxcbiAgICBhdmdUZW1wRjogZGF5RGF0YS5kYXkuYXZndGVtcF9mLFxuICAgIGNvbmRpdGlvblR4dDogZGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgY29uZGl0aW9uSWNvbjogZGF5RGF0YS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgaG91cmx5Rm9yZWNhc3Q6IGRheURhdGEuaG91ci5tYXAoKGhvdXIpID0+ICh7XG4gICAgICB0aW1lOiBob3VyLnRpbWUsXG4gICAgICB0ZW1wQzogaG91ci50ZW1wX2MsXG4gICAgICB0ZW1wRjogaG91ci50ZW1wX2YsXG4gICAgICBjb25kaXRpb25UeHQ6IGhvdXIuY29uZGl0aW9uLnRleHQsXG4gICAgICBjb25kaXRpb25JY29uOiBob3VyLmNvbmRpdGlvbi5pY29uLFxuICAgIH0pKSxcbiAgfSkpO1xuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uOiB7XG4gICAgICBuYW1lOiByYXdEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICByZWdpb246IHJhd0RhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgICAgY291bnRyeTogcmF3RGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgbG9jYWxUaW1lOiByYXdEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgIGxhdDogcmF3RGF0YS5sb2NhdGlvbi5sYXQsXG4gICAgICBsb246IHJhd0RhdGEubG9jYXRpb24ubG9uLFxuICAgIH0sXG4gICAgY3VycmVudDogY3VycmVudFdlYXRoZXIsXG4gICAgZm9yZWNhc3Q6IGZvcmVjYXN0V2VhdGhlcixcbiAgfTtcbn07XG5cbmNvbnN0IHByb2Nlc3NTZWFyY2hSZXN1bHRzID0gKHNlYXJjaERhdGEpID0+IHtcbiAgcmV0dXJuIHNlYXJjaERhdGEubWFwKChsb2NhdGlvbikgPT4gKHtcbiAgICBuYW1lOiBsb2NhdGlvbi5uYW1lLFxuICAgIHJlZ2lvbjogbG9jYXRpb24ucmVnaW9uLFxuICAgIGNvdW50cnk6IGxvY2F0aW9uLmNvdW50cnksXG4gICAgdXJsOiBsb2NhdGlvbi51cmwsXG4gIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBzZWFyY2hGb3IgfSBmcm9tIFwiLi4vYXBpL3dlYXRoZXJBcGkuanNcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdlYXRoZXJJbml0aWFsaXplciA9IChcbiAgZ2VvbG9jYXRpb24sXG4gIGRpc3BsYXlTZWxlY3RMb2NhdGlvblxuKSA9PiB7XG4gIGNvbnN0IGxvYWRGYWxsYmFja1dlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBzZWFyY2hGb3IoXCJOZXcgWW9ya1wiKTtcbiAgICAgIGlmIChzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgZGlzcGxheVNlbGVjdExvY2F0aW9uKHNlYXJjaFJlc3VsdHNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzdWx0cyBmb3VuZCBmb3IgTmV3IFlvcmtcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZmFsbGJhY2tFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCJGYWlsZWQgdG8gbG9hZCBmYWxsYmFjayB3ZWF0aGVyIGZvciBOZXcgWW9yazogXCIsXG4gICAgICAgIGZhbGxiYWNrRXJyb3JcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbG9hZEluaXRpYWxXZWF0aGVyOiBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IGdlb2xvY2F0aW9uLmdldFVzZXJMb2NhdGlvbigpO1xuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gYXdhaXQgc2VhcmNoRm9yKFxuICAgICAgICAgIGAke2xvY2F0aW9uLmxhdH0sJHtsb2NhdGlvbi5sb259YFxuICAgICAgICApO1xuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgZGlzcGxheVNlbGVjdExvY2F0aW9uKHNlYXJjaFJlc3VsdHNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGxvY2F0aW9uIGZvdW5kIGZvciB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCB3ZWF0aGVyIGZvciBjdXJyZW50IGxvY2F0aW9uOiBcIiwgZXJyb3IpO1xuICAgICAgICBhd2FpdCBsb2FkRmFsbGJhY2tXZWF0aGVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG4iLCJpbXBvcnQge1xuICB3aWRnZXRCb3gsXG4gIHNpbmdsZVZhbHVlV2lkZ2V0Qm94LFxufSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY3JlYXRlV2lkZ2V0Qm94LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3VpRWxlbWVudHMuanNcIjtcbmltcG9ydCB7IHdlYXRoZXJDb21wb25lbnRXcmFwcGVyIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NrZWxldG9uSGVscGVyLmpzXCI7XG5cbmNvbnN0IGFpcldlYXRoZXJDb21wb25lbnQgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgYWlyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImFpci13ZWF0aGVyXCIpO1xuXG4gIGNvbnN0IGFxaSA9IGFxaUNvbnRhaW5lcih3ZWF0aGVyRGF0YS5jdXJyZW50LmFxaSk7XG4gIGNvbnN0IHByZXNzdXJlID0gcHJlc3N1cmVDb250YWluZXIoXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZS5pbixcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LnByZXNzdXJlLm1iXG4gICk7XG4gIGFpckNvbnRhaW5lci5hcHBlbmRDaGlsZChhcWkpO1xuICBhaXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmUpO1xuXG4gIHJldHVybiBhaXJDb250YWluZXI7XG59O1xuXG5jb25zdCBhcWlDb250YWluZXIgPSAoYXFpSW5kZXgpID0+IHtcbiAgY29uc3QgYXFpSW5mbyA9IGFxaUluZGV4TWFwcGluZ1thcWlJbmRleF0gfHwge1xuICAgIGxhYmVsOiBcInVua25vd25cIixcbiAgICBjb2xvcjogXCIwMDAwMDBcIixcbiAgfTtcbiAgcmV0dXJuIHNpbmdsZVZhbHVlV2lkZ2V0Qm94KFwiQVFJXCIsIGFxaUluZm8ubGFiZWwsIGFxaUluZm8uY29sb3IpO1xufTtcblxuY29uc3QgcHJlc3N1cmVDb250YWluZXIgPSAocHJlc3NJbiwgcHJlc3NNYikgPT4ge1xuICByZXR1cm4gd2lkZ2V0Qm94KFwiUHJlc3N1cmVcIiwgcHJlc3NJbiwgXCJpbkhnXCIsIHByZXNzTWIsIFwibWJcIiwgXCJwcmVzc3VyZVwiKTtcbn07XG5cbmNvbnN0IGFxaUluZGV4TWFwcGluZyA9IHtcbiAgMTogeyBsYWJlbDogXCJHb29kXCIsIGNvbG9yOiBcIiMwMDdlMDBcIiB9LFxuICAyOiB7IGxhYmVsOiBcIk1vZGVyYXRlXCIsIGNvbG9yOiBcIiM5OTk5MDBcIiB9LFxuICAzOiB7IGxhYmVsOiBcIlVuaGVhbHRoeSBmb3IgU2Vuc2l0aXZlIEdyb3Vwc1wiLCBjb2xvcjogXCIjZmY0ZDAwXCIgfSxcbiAgNDogeyBsYWJlbDogXCJVbmhlYWx0aHlcIiwgY29sb3I6IFwiI2NjMDAwMFwiIH0sXG4gIDU6IHsgbGFiZWw6IFwiVmVyeSBVbmhlYWx0aHlcIiwgY29sb3I6IFwiIzY1MDQ3MFwiIH0sXG4gIDY6IHsgbGFiZWw6IFwiSGF6YXJkb3VzXCIsIGNvbG9yOiBcIiM0YzAwMTRcIiB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGFpcldlYXRoZXIgPSB3ZWF0aGVyQ29tcG9uZW50V3JhcHBlcihcbiAgYWlyV2VhdGhlckNvbXBvbmVudCxcbiAgXCJhaXItd2VhdGhlclwiXG4pO1xuIiwiaW1wb3J0IHtcbiAgd2lkZ2V0Qm94LFxuICBzaW5nbGVWYWx1ZVdpZGdldEJveCxcbn0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NyZWF0ZVdpZGdldEJveC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91aUVsZW1lbnRzLmpzXCI7XG5pbXBvcnQgeyB3ZWF0aGVyQ29tcG9uZW50V3JhcHBlciB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9za2VsZXRvbkhlbHBlci5qc1wiO1xuXG5jb25zdCBtb2lzdHVyZVdlYXRoZXJDb21wb25lbnQgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgbW9pc3R1cmVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9pc3R1cmUtd2VhdGhlclwiKTtcblxuICBjb25zdCBodW1pZGl0eSA9IGh1bWlkaXR5Q29udGFpbmVyKHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHkpO1xuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gcHJlY2lwaXRhdGlvbkNvbnRhaW5lcihcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LnByZWNpcGl0YXRpb24uaW4sXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC5wcmVjaXBpdGF0aW9uLm1tXG4gICk7XG4gIGNvbnN0IGRld1BvaW50ID0gZGV3UG9pbnRDb250YWluZXIoXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC5kZXdQb2ludEMsXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC5kZXdQb2ludEZcbiAgKTtcblxuICBtb2lzdHVyZUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIG1vaXN0dXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb24pO1xuICBtb2lzdHVyZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXdQb2ludCk7XG5cbiAgcmV0dXJuIG1vaXN0dXJlQ29udGFpbmVyO1xufTtcblxuY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSAoaHVtaWRpdHlWYWx1ZSkgPT4ge1xuICByZXR1cm4gc2luZ2xlVmFsdWVXaWRnZXRCb3goXCJIdW1pZGl0eVwiLCBgJHtodW1pZGl0eVZhbHVlfSVgKTtcbn07XG5jb25zdCBwcmVjaXBpdGF0aW9uQ29udGFpbmVyID0gKHByZUluLCBwcmVNbSkgPT4ge1xuICByZXR1cm4gd2lkZ2V0Qm94KFwiUHJlY2lwaXRhdGlvblwiLCBwcmVJbiwgXCJpblwiLCBwcmVNbSwgXCJtbVwiLCBcInByZWNpcGl0YXRpb25cIik7XG59O1xuY29uc3QgZGV3UG9pbnRDb250YWluZXIgPSAodGVtcEMsIHRlbXBGKSA9PiB7XG4gIHJldHVybiB3aWRnZXRCb3goXCJEZXcgUG9pbnRcIiwgdGVtcEYsIFwiRlwiLCB0ZW1wQywgXCJDXCIsIFwidGVtcGVyYXR1cmVcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbW9pc3R1cmVXZWF0aGVyID0gd2VhdGhlckNvbXBvbmVudFdyYXBwZXIoXG4gIG1vaXN0dXJlV2VhdGhlckNvbXBvbmVudCxcbiAgXCJtb2lzdHVyZS13ZWF0aGVyXCJcbik7XG4iLCJpbXBvcnQge1xuICB3aWRnZXRCb3gsXG4gIHNpbmdsZVZhbHVlV2lkZ2V0Qm94LFxufSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY3JlYXRlV2lkZ2V0Qm94LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3VpRWxlbWVudHMuanNcIjtcbmltcG9ydCB7IHdlYXRoZXJDb21wb25lbnRXcmFwcGVyIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NrZWxldG9uSGVscGVyLmpzXCI7XG5cbmNvbnN0IHN1bldlYXRoZXJDb21wb25lbnQgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3Qgc3VuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInN1bi13ZWF0aGVyXCIpO1xuICBjb25zdCB1diA9IHV2Q29udGFpbmVyKHdlYXRoZXJEYXRhLmN1cnJlbnQudXZJbmRleCk7XG4gIGNvbnN0IG1heFRlbXAgPSBtYXhUZW1wQ29udGFpbmVyKFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0WzBdLm1heFRlbXBDLFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0WzBdLm1heFRlbXBGXG4gICk7XG4gIGNvbnN0IG1pblRlbXAgPSBtaW5UZW1wQ29udGFpbmVyKFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0WzBdLm1pblRlbXBDLFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0WzBdLm1pblRlbXBGXG4gICk7XG4gIGNvbnN0IGF2Z1RlbXAgPSBhdmdUZW1wQ29udGFpbmVyKFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0WzBdLmF2Z1RlbXBDLFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0WzBdLmF2Z1RlbXBGXG4gICk7XG5cbiAgc3VuQ29udGFpbmVyLmFwcGVuZENoaWxkKHV2KTtcbiAgc3VuQ29udGFpbmVyLmFwcGVuZENoaWxkKG1heFRlbXApO1xuICBzdW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWluVGVtcCk7XG4gIHN1bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhdmdUZW1wKTtcblxuICByZXR1cm4gc3VuQ29udGFpbmVyO1xufTtcblxuY29uc3QgbWF4VGVtcENvbnRhaW5lciA9ICh0ZW1wQywgdGVtcEYpID0+IHtcbiAgcmV0dXJuIHdpZGdldEJveChcIk1heCBUZW1wLlwiLCB0ZW1wRiwgXCJGXCIsIHRlbXBDLCBcIkNcIiwgXCJ0ZW1wZXJhdHVyZVwiKTtcbn07XG5cbmNvbnN0IG1pblRlbXBDb250YWluZXIgPSAodGVtcEMsIHRlbXBGKSA9PiB7XG4gIHJldHVybiB3aWRnZXRCb3goXCJNaW4gVGVtcC5cIiwgdGVtcEYsIFwiRlwiLCB0ZW1wQywgXCJDXCIsIFwidGVtcGVyYXR1cmVcIik7XG59O1xuXG5jb25zdCBhdmdUZW1wQ29udGFpbmVyID0gKHRlbXBDLCB0ZW1wRikgPT4ge1xuICByZXR1cm4gd2lkZ2V0Qm94KFwiQXZlcmFnZSBUZW1wLlwiLCB0ZW1wRiwgXCJGXCIsIHRlbXBDLCBcIkNcIiwgXCJ0ZW1wZXJhdHVyZVwiKTtcbn07XG5cbmNvbnN0IHV2Q29udGFpbmVyID0gKHV2SW5kZXgpID0+IHtcbiAgY29uc3QgdXZJbmZvID0gZ2V0VVZJbmZvKHV2SW5kZXgpO1xuICByZXR1cm4gc2luZ2xlVmFsdWVXaWRnZXRCb3goXG4gICAgYFVWIEluZGV4YCxcbiAgICBgJHt1dkluZGV4fSAoJHt1dkluZm8ubGFiZWx9KWAsXG4gICAgdXZJbmZvLmNvbG9yXG4gICk7XG59O1xuXG5jb25zdCB1dkluZGV4UmFuZ2VzID0gW1xuICB7IG1heDogMiwgbGFiZWw6IFwiTG93XCIsIGNvbG9yOiBcIiMwMDgwMDBcIiB9LFxuICB7IG1heDogNSwgbGFiZWw6IFwiTW9kZXJhdGVcIiwgY29sb3I6IFwiI0ZGOUExNVwiIH0sXG4gIHsgbWF4OiA3LCBsYWJlbDogXCJIaWdoXCIsIGNvbG9yOiBcIiNGRjQ1MDBcIiB9LFxuICB7IG1heDogMTAsIGxhYmVsOiBcIlZlcnkgSGlnaFwiLCBjb2xvcjogXCIjREMxNDNDXCIgfSxcbiAgeyBtYXg6IEluZmluaXR5LCBsYWJlbDogXCJFeHRyZW1lXCIsIGNvbG9yOiBcIiM4QjAwOEJcIiB9LFxuXTtcblxuY29uc3QgZ2V0VVZJbmZvID0gKHV2SW5kZXgpID0+IHtcbiAgZm9yIChjb25zdCByYW5nZSBvZiB1dkluZGV4UmFuZ2VzKSB7XG4gICAgaWYgKHV2SW5kZXggPD0gcmFuZ2UubWF4KSB7XG4gICAgICByZXR1cm4geyBsYWJlbDogcmFuZ2UubGFiZWwsIGNvbG9yOiByYW5nZS5jb2xvciB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBsYWJlbDogXCJ1bmtub3duXCIsIGNvbG9yOiBcIiMwMDAwMDBcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHN1bldlYXRoZXIgPSB3ZWF0aGVyQ29tcG9uZW50V3JhcHBlcihcbiAgc3VuV2VhdGhlckNvbXBvbmVudCxcbiAgXCJzdW4td2VhdGhlclwiXG4pO1xuIiwiaW1wb3J0IHtcbiAgd2lkZ2V0Qm94LFxuICBzaW5nbGVWYWx1ZVdpZGdldEJveCxcbn0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NyZWF0ZVdpZGdldEJveC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91aUVsZW1lbnRzLmpzXCI7XG5pbXBvcnQgeyB3ZWF0aGVyQ29tcG9uZW50V3JhcHBlciB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9za2VsZXRvbkhlbHBlci5qc1wiO1xuXG5jb25zdCB3aW5kV2VhdGhlckNvbXBvbmVudCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB3aW5kQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIndpbmQtd2VhdGhlclwiKTtcblxuICBjb25zdCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25Db250YWluZXIod2VhdGhlckRhdGEuY3VycmVudC53aW5kLmRpcmVjdGlvbik7XG4gIGNvbnN0IHNwZWVkID0gc3BlZWRDb250YWluZXIoXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC53aW5kLm1waCxcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmQua3BoXG4gICk7XG4gIGNvbnN0IHdpbmRDaGlsbCA9IHdpbmRDaGlsbENvbnRhaW5lcihcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmQuY2hpbGxDLFxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZC5jaGlsbEZcbiAgKTtcbiAgY29uc3QgZ3VzdCA9IGd1c3RDb250YWluZXIoXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC5ndXN0Lm1waCxcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50Lmd1c3Qua3BoXG4gICk7XG5cbiAgd2luZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXJlY3Rpb24pO1xuICB3aW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwZWVkKTtcbiAgd2luZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kQ2hpbGwpO1xuICB3aW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGd1c3QpO1xuXG4gIHJldHVybiB3aW5kQ29udGFpbmVyO1xufTtcblxuY29uc3QgZGlyZWN0aW9uQ29udGFpbmVyID0gKGRpcmVjdGlvblN0cikgPT4ge1xuICByZXR1cm4gc2luZ2xlVmFsdWVXaWRnZXRCb3goXCJXaW5kIERpcmVjdGlvblwiLCBkaXJlY3Rpb25TdHIpO1xufTtcblxuY29uc3Qgc3BlZWRDb250YWluZXIgPSAobXBoLCBrcGgpID0+IHtcbiAgcmV0dXJuIHdpZGdldEJveChcIldpbmQgU3BlZWRcIiwgbXBoLCBcIm1waFwiLCBrcGgsIFwia3BoXCIsIFwic3BlZWRcIik7XG59O1xuXG5jb25zdCB3aW5kQ2hpbGxDb250YWluZXIgPSAodGVtcEMsIHRlbXBGKSA9PiB7XG4gIHJldHVybiB3aWRnZXRCb3goXCJXaW5kIENoaWxsXCIsIHRlbXBGLCBcIkZcIiwgdGVtcEMsIFwiQ1wiLCBcInRlbXBlcmF0dXJlXCIpO1xufTtcblxuY29uc3QgZ3VzdENvbnRhaW5lciA9IChtcGgsIGtwaCkgPT4ge1xuICByZXR1cm4gd2lkZ2V0Qm94KFwiR3VzdFwiLCBtcGgsIFwibXBoXCIsIGtwaCwgXCJrcGhcIiwgXCJzcGVlZFwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3aW5kV2VhdGhlciA9IHdlYXRoZXJDb21wb25lbnRXcmFwcGVyKFxuICB3aW5kV2VhdGhlckNvbXBvbmVudCxcbiAgXCJ3aW5kLXdlYXRoZXJcIlxuKTtcbiIsImltcG9ydCB7IGdldEZvcmVjYXN0RGF0YSB9IGZyb20gXCIuLi8uLi9hcGkvd2VhdGhlckFwaS5qc1wiO1xuaW1wb3J0IHsgcXVpY2tXZWF0aGVyIH0gZnJvbSBcIi4vcXVpY2tDb250ZW50L3F1aWNrV2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgd2luZFdlYXRoZXIgfSBmcm9tIFwiLi9hbGxDb25kaXRpb25zQ29udGVudC93aW5kV2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgbW9pc3R1cmVXZWF0aGVyIH0gZnJvbSBcIi4vYWxsQ29uZGl0aW9uc0NvbnRlbnQvbW9pc3R1cmVXZWF0aGVyLmpzXCI7XG5pbXBvcnQgeyBhaXJXZWF0aGVyIH0gZnJvbSBcIi4vYWxsQ29uZGl0aW9uc0NvbnRlbnQvYWlyV2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgaG91cmx5Rm9yZWNhc3QgfSBmcm9tIFwiLi9ob3VybHlDb250ZW50L2hvdXJseUZvcmVjYXN0LmpzXCI7XG5pbXBvcnQgeyB1bml0VG9nZ2xlUHJlZmVyZW5jZXMgfSBmcm9tIFwiLi9wcmVmZXJlbmNlQ29udGVudC91bml0UHJlZmVyZW5jZXMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVBpbkJ1dHRvbiB9IGZyb20gXCIuLi9waW5uZWRDb250ZW50L3BpbkJ1dHRvbi5qc1wiO1xuaW1wb3J0IHsgb25QaW5DbGljayB9IGZyb20gXCIuLi9waW5uZWRDb250ZW50L3Bpbm5lZExvY2F0aW9uc01hbmFnZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdWlFbGVtZW50cy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2tlbGV0b25FbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3NrZWxldG9uSGVscGVyLmpzXCI7XG5pbXBvcnQgeyBzdW5XZWF0aGVyIH0gZnJvbSBcIi4vYWxsQ29uZGl0aW9uc0NvbnRlbnQvc3VuV2VhdGhlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVNlbGVjdExvY2F0aW9uID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNsZWFyRGFzaGJvYXJkKCk7XG4gIGNvbnN0IHdlYXRoZXJEYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGFzaGJvYXJkXCIpO1xuXG4gIGNvbnN0IGxvYWRpbmdEYXNoYm9hcmQgPSBjcmVhdGVEYXNoYm9hcmQobG9jYXRpb24sIG51bGwsIHRydWUpO1xuICB3ZWF0aGVyRGFzaGJvYXJkLmFwcGVuZENoaWxkKGxvYWRpbmdEYXNoYm9hcmQpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uRGF0YSA9IGF3YWl0IGdldEZvcmVjYXN0RGF0YShsb2NhdGlvbi51cmwpO1xuICAgIGNsZWFyRGFzaGJvYXJkKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkID0gY3JlYXRlRGFzaGJvYXJkKGxvY2F0aW9uLCBjdXJyZW50TG9jYXRpb25EYXRhLCBmYWxzZSk7XG4gICAgd2VhdGhlckRhc2hib2FyZC5hcHBlbmRDaGlsZChkYXNoYm9hcmQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6XCIsIGVycm9yKTtcbiAgICB3ZWF0aGVyRGFzaGJvYXJkLmlubmVySFRNTCA9XG4gICAgICBcIjxwPkVycm9yIGxvYWRpbmcgd2VhdGhlciBkYXRhLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVEYXNoYm9hcmQgPSAobG9jYXRpb25EYXRhLCBjdXJyZW50TG9jYXRpb25EYXRhLCBpc0xvYWRpbmcpID0+IHtcbiAgY29uc3Qgd2VhdGhlckRhc2hib2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJpbm5lci1kYXNoYm9hcmRcIik7XG4gIGNvbnN0IGFsbENvbmRpdGlvbnMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYWxsLWNvbmRpdGlvbnNcIik7XG4gIGNvbnN0IHBpbkJ1dHRvbiA9IGlzTG9hZGluZ1xuICAgID8gY3JlYXRlU2tlbGV0b25FbGVtZW50KFwic2tlbGV0b24tYnV0dG9uXCIpXG4gICAgOiBjcmVhdGVQaW5CdXR0b24ob25QaW5DbGljaykobG9jYXRpb25EYXRhIHx8IHt9LCBjdXJyZW50TG9jYXRpb25EYXRhKTtcbiAgY29uc3QgcXVpY2tDb250YWluZXIgPSBxdWlja1dlYXRoZXIoaXNMb2FkaW5nID8gbnVsbCA6IGN1cnJlbnRMb2NhdGlvbkRhdGEpO1xuICBjb25zdCB3aW5kQ29udGFpbmVyID0gd2luZFdlYXRoZXIoaXNMb2FkaW5nID8gbnVsbCA6IGN1cnJlbnRMb2NhdGlvbkRhdGEpO1xuICBjb25zdCBtb2lzdHVyZUNvbnRhaW5lciA9IG1vaXN0dXJlV2VhdGhlcihcbiAgICBpc0xvYWRpbmcgPyBudWxsIDogY3VycmVudExvY2F0aW9uRGF0YVxuICApO1xuICBjb25zdCBhaXJDb250YWluZXIgPSBhaXJXZWF0aGVyKGlzTG9hZGluZyA/IG51bGwgOiBjdXJyZW50TG9jYXRpb25EYXRhKTtcbiAgY29uc3Qgc3VuQ29udGFpbmVyID0gc3VuV2VhdGhlcihpc0xvYWRpbmcgPyBudWxsIDogY3VycmVudExvY2F0aW9uRGF0YSk7XG4gIGNvbnN0IGhvdXJseUNvbnRhaW5lcnMgPSBpc0xvYWRpbmdcbiAgICA/IEFycmF5KDMpXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLm1hcCgoKSA9PiBob3VybHlGb3JlY2FzdChudWxsKSlcbiAgICA6IFtcbiAgICAgICAgaG91cmx5Rm9yZWNhc3QoXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uRGF0YS5mb3JlY2FzdFswXSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb25EYXRhLmxvY2F0aW9uLmxvY2FsVGltZVxuICAgICAgICApLFxuICAgICAgICBob3VybHlGb3JlY2FzdChjdXJyZW50TG9jYXRpb25EYXRhLmZvcmVjYXN0WzFdLCBudWxsKSxcbiAgICAgICAgaG91cmx5Rm9yZWNhc3QoY3VycmVudExvY2F0aW9uRGF0YS5mb3JlY2FzdFsyXSwgbnVsbCksXG4gICAgICBdO1xuICBjb25zdCBwcmVmZXJlbmNlQ29udGFpbmVyID0gdW5pdFRvZ2dsZVByZWZlcmVuY2VzKCk7XG5cbiAgcXVpY2tDb250YWluZXIuYXBwZW5kQ2hpbGQocGluQnV0dG9uKTtcbiAgd2VhdGhlckRhc2hib2FyZC5hcHBlbmRDaGlsZChxdWlja0NvbnRhaW5lcik7XG4gIHdlYXRoZXJEYXNoYm9hcmQuYXBwZW5kQ2hpbGQocHJlZmVyZW5jZUNvbnRhaW5lcik7XG4gIGFsbENvbmRpdGlvbnMuYXBwZW5kQ2hpbGQod2luZENvbnRhaW5lcik7XG4gIGFsbENvbmRpdGlvbnMuYXBwZW5kQ2hpbGQobW9pc3R1cmVDb250YWluZXIpO1xuICBhbGxDb25kaXRpb25zLmFwcGVuZENoaWxkKGFpckNvbnRhaW5lcik7XG4gIGFsbENvbmRpdGlvbnMuYXBwZW5kQ2hpbGQoc3VuQ29udGFpbmVyKTtcbiAgd2VhdGhlckRhc2hib2FyZC5hcHBlbmRDaGlsZChhbGxDb25kaXRpb25zKTtcbiAgaG91cmx5Q29udGFpbmVycy5mb3JFYWNoKChob3VyQ29udGFpbmVyKSA9PlxuICAgIHdlYXRoZXJEYXNoYm9hcmQuYXBwZW5kQ2hpbGQoaG91ckNvbnRhaW5lcilcbiAgKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXNoYm9hcmQ7XG59O1xuXG5jb25zdCBjbGVhckRhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlckRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kYXNoYm9hcmRcIik7XG4gIHdlYXRoZXJEYXNoYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJEYXNoYm9hcmRTa2VsZXRvbiA9ICgpID0+IHtcbiAgY2xlYXJEYXNoYm9hcmQoKTtcbiAgY29uc3Qgd2VhdGhlckRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kYXNoYm9hcmRcIik7XG4gIGlmICghd2VhdGhlckRhc2hib2FyZCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJXZWF0aGVyIGRhc2hib2FyZCBlbGVtZW50IG5vdCBmb3VuZFwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgc2tlbGV0b25EYXNoYm9hcmQgPSBjcmVhdGVEYXNoYm9hcmQobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gIHdlYXRoZXJEYXNoYm9hcmQuYXBwZW5kQ2hpbGQoc2tlbGV0b25EYXNoYm9hcmQpO1xufTtcbiIsImltcG9ydCB7IGZvcm1hdFRpbWUsIGlzQ3VycmVudEhvdXIgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGF0ZUZvcm1hdEhlbHBlci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9nZ2xlQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3VuaXRUb2dnbGVyLmpzXCI7XG5pbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVUZXh0RWxlbWVudCxcbiAgY3JlYXRlSW1hZ2VFbGVtZW50LFxufSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdWlFbGVtZW50cy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2tlbGV0b25UZXh0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NrZWxldG9uSGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBob3VybHlGb3JlY2FzdEJveCA9IChob3VybHlEYXRhLCBjdXJyZW50VGltZSkgPT4ge1xuICBjb25zdCBib3hDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaG91cmx5LWJveFwiKTtcblxuICBpZiAoIWhvdXJseURhdGEpIHtcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2tlbGV0b25UZXh0KFwiNDBweFwiLCBcIjFlbVwiKSk7XG4gICAgYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNrZWxldG9uVGV4dChcIjQwcHhcIiwgXCIxZW1cIikpO1xuICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTa2VsZXRvblRleHQoXCI0MHB4XCIsIFwiMWVtXCIpKTtcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2tlbGV0b25UZXh0KFwiNDBweFwiLCBcIjFlbVwiKSk7XG4gICAgcmV0dXJuIGJveENvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IGhvdXJCbG9jayA9IGhvdXJDb250YWluZXIoaG91cmx5RGF0YS50aW1lLCBjdXJyZW50VGltZSwgYm94Q29udGFpbmVyKTtcbiAgY29uc3QgY29uZGl0aW9uVHh0ID0gY29uZGl0aW9uVHh0Q29udGFpbmVyKGhvdXJseURhdGEuY29uZGl0aW9uVHh0KTtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGNvbmRpdGlvbkljb25Db250YWluZXIoaG91cmx5RGF0YS5jb25kaXRpb25JY29uKTtcbiAgY29uc3QgdGVtcEVsZW1lbnQgPSBjcmVhdGVUb2dnbGVDb250YWluZXIoXG4gICAgaG91cmx5RGF0YS50ZW1wRixcbiAgICBcIkZcIixcbiAgICBob3VybHlEYXRhLnRlbXBDLFxuICAgIFwiQ1wiLFxuICAgIFwidGVtcGVyYXR1cmVcIlxuICApO1xuXG4gIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VyQmxvY2spO1xuICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEVsZW1lbnQpO1xuICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY29uZGl0aW9uSWNvbik7XG4gIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25UeHQpO1xuICByZXR1cm4gYm94Q29udGFpbmVyO1xufTtcblxuY29uc3QgaG91ckNvbnRhaW5lciA9IChob3VyLCBjdXJyZW50VGltZSwgYm94Q29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IHRpbWVGb3JtYXQgPSBmb3JtYXRUaW1lKGhvdXIpO1xuXG4gIGlmIChjdXJyZW50VGltZSAmJiBpc0N1cnJlbnRIb3VyKHRpbWVGb3JtYXQsIGN1cnJlbnRUaW1lKSkge1xuICAgIGJveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1ob3VyXCIpO1xuICB9XG4gIHJldHVybiBjcmVhdGVUZXh0RWxlbWVudCh0aW1lRm9ybWF0LCBcImRpdlwiKTtcbn07XG5cbmNvbnN0IGNvbmRpdGlvblR4dENvbnRhaW5lciA9IChjb25kaXRpb24pID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVRleHRFbGVtZW50KGNvbmRpdGlvbiwgXCJkaXZcIik7XG59O1xuXG5jb25zdCBjb25kaXRpb25JY29uQ29udGFpbmVyID0gKHVybCkgPT4ge1xuICByZXR1cm4gY3JlYXRlSW1hZ2VFbGVtZW50KHVybCk7XG59O1xuIiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZm9ybWF0VGltZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYXRlRm9ybWF0SGVscGVyLmpzXCI7XG5pbXBvcnQgeyBob3VybHlGb3JlY2FzdEJveCB9IGZyb20gXCIuL2hvdXJseUJveC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdWlFbGVtZW50cy5qc1wiO1xuaW1wb3J0IHsgd2VhdGhlckNvbXBvbmVudFdyYXBwZXIgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc2tlbGV0b25IZWxwZXIuanNcIjtcblxuY29uc3QgaG91cmx5Rm9yZWNhc3RDb21wb25lbnQgPSAod2VhdGhlckRhdGEsIGxvY2FsVGltZSkgPT4ge1xuICBjb25zdCBob3VybHlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaG91cmx5LWZvcmVjYXN0XCIpO1xuXG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkYXRlSGVhZGVyKHdlYXRoZXJEYXRhLmRhdGUpO1xuICBjb25zdCBhbGxIb3Vyc0NvbnRhaW5lciA9IGFsbEhvdXJseUJveGVzKFxuICAgIHdlYXRoZXJEYXRhLmhvdXJseUZvcmVjYXN0LFxuICAgIGxvY2FsVGltZVxuICApO1xuICBob3VybHlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG4gIGhvdXJseUNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxIb3Vyc0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhvdXJseUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGRhdGVIZWFkZXIgPSAoZGF0ZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlVGV4dEVsZW1lbnQoZm9ybWF0RGF0ZShkYXRlKSwgXCJoNFwiKTtcbn07XG5cbmNvbnN0IGFsbEhvdXJseUJveGVzID0gKGhvdXJseURhdGEsIGxvY2FsVGltZSkgPT4ge1xuICBjb25zdCBob3VybHlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaG91cmx5LWJveGVzXCIpO1xuICBjb25zdCBjdXJyZW50VGltZSA9IGxvY2FsVGltZSA/IGZvcm1hdFRpbWUobG9jYWxUaW1lKSA6IG51bGw7XG5cbiAgaG91cmx5RGF0YS5mb3JFYWNoKChob3VyRGF0YSkgPT4ge1xuICAgIGNvbnN0IGJveCA9IGhvdXJseUZvcmVjYXN0Qm94KGhvdXJEYXRhLCBjdXJyZW50VGltZSk7XG4gICAgaG91cmx5Q29udGFpbmVyLmFwcGVuZENoaWxkKGJveCk7XG4gIH0pO1xuICByZXR1cm4gaG91cmx5Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gd2VhdGhlckNvbXBvbmVudFdyYXBwZXIoXG4gICh3ZWF0aGVyRGF0YSwgbG9jYWxUaW1lKSA9PiBob3VybHlGb3JlY2FzdENvbXBvbmVudCh3ZWF0aGVyRGF0YSwgbG9jYWxUaW1lKSxcbiAgXCJob3VybHktZm9yZWNhc3RcIlxuKTtcbiIsImltcG9ydCB7XG4gIHVuaXRTeW1ib2xzLFxuICB1bml0T3B0aW9ucyxcbiAgdW5pdFByZWZlcmVuY2VzLFxuICB1cGRhdGVVbml0RGlzcGxheXMsXG59IGZyb20gXCIuLi8uLi8uLi91dGlscy91bml0VG9nZ2xlci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdWlFbGVtZW50cy5qc1wiO1xuXG5leHBvcnQgY29uc3QgdW5pdFRvZ2dsZVByZWZlcmVuY2VzID0gKCkgPT4ge1xuICBjb25zdCBwcmVmZXJlbmNlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInVuaXQtcHJlZmVyZW5jZXNcIik7XG4gIGNvbnN0IGhlYWRlciA9IHByZWZlcmVuY2VIZWFkZXIoXCJoNFwiLCBcIlVuaXQgUHJlZmVyZW5jZXNcIik7XG4gIGNvbnN0IG9wdGlvbnMgPSBwcmVmZXJlbmNlT3B0aW9ucygpO1xuXG4gIHByZWZlcmVuY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgcHJlZmVyZW5jZUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25zKTtcblxuICByZXR1cm4gcHJlZmVyZW5jZUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IHByZWZlcmVuY2VPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBvcHRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidW5pdC1vcHRpb25zXCIpO1xuXG4gIGZvciAoY29uc3QgW2NhdGVnb3J5LCB1bml0c10gb2YgT2JqZWN0LmVudHJpZXModW5pdE9wdGlvbnMpKSB7XG4gICAgY29uc3QgY2F0ZWdvcnlMYWJlbCA9IGNhdGVnb3J5VHh0KGNhdGVnb3J5KTtcbiAgICBjb25zdCB1bml0SW5wdXRzID0gdW5pdElucHV0KGNhdGVnb3J5LCB1bml0cyk7XG5cbiAgICBvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlMYWJlbCk7XG4gICAgb3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHVuaXRJbnB1dHMpO1xuICB9XG4gIHJldHVybiBvcHRpb25Db250YWluZXI7XG59O1xuXG5jb25zdCBwcmVmZXJlbmNlSGVhZGVyID0gKGhlYWRlclR5cGUsIGhlYWRlclR4dCkgPT4ge1xuICByZXR1cm4gY3JlYXRlVGV4dEVsZW1lbnQoaGVhZGVyVHh0LCBoZWFkZXJUeXBlKTtcbn07XG5cbmNvbnN0IHVuaXRJbnB1dCA9IChjYXRlZ29yeSwgdW5pdHMpID0+IHtcbiAgY29uc3QgaW5wdXRzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInVuaXQtaW5wdXRzXCIpO1xuICB1bml0cy5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgICBpbnB1dC5pZCA9IGAke2NhdGVnb3J5fS0ke3VuaXR9YDtcbiAgICBpbnB1dC5uYW1lID0gY2F0ZWdvcnk7XG4gICAgaW5wdXQudmFsdWUgPSB1bml0O1xuICAgIGlucHV0LmNoZWNrZWQgPSB1bml0ID09PSB1bml0UHJlZmVyZW5jZXNbY2F0ZWdvcnldO1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB1bml0UHJlZmVyZW5jZXNbY2F0ZWdvcnldID0gdW5pdDtcbiAgICAgICAgdXBkYXRlVW5pdERpc3BsYXlzKGNhdGVnb3J5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlVGV4dEVsZW1lbnQodW5pdFN5bWJvbHNbdW5pdF0sIFwibGFiZWxcIik7XG4gICAgbGFiZWwuZm9yID0gYCR7Y2F0ZWdvcnl9LSR7dW5pdH1gO1xuXG4gICAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9KTtcblxuICByZXR1cm4gaW5wdXRzQ29udGFpbmVyO1xufTtcblxuY29uc3QgY2F0ZWdvcnlUeHQgPSAoY2F0ZWdvcnkpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVRleHRFbGVtZW50KGAke2NhcGl0YWxpemUoY2F0ZWdvcnkpfTogYCk7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplID0gKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZVRvZ2dsZUNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91bml0VG9nZ2xlci5qc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlVGV4dEVsZW1lbnQsXG4gIGNyZWF0ZUltYWdlRWxlbWVudCxcbn0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3VpRWxlbWVudHMuanNcIjtcbmltcG9ydCB7IHdlYXRoZXJDb21wb25lbnRXcmFwcGVyIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NrZWxldG9uSGVscGVyLmpzXCI7XG5pbXBvcnQgeyBzdW5Nb29uQ29udGFpbmVyIH0gZnJvbSBcIi4vc3VuTW9vbldlYXRoZXIuanNcIjtcblxuY29uc3QgcXVpY2tXZWF0aGVyQ29tcG9uZW50ID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicXVpY2std2VhdGhlclwiKTtcblxuICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uQ29udGFpbmVyKFxuICAgIGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9LCAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbn1gXG4gICk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmVDb250YWluZXIoe1xuICAgIHRlbXBDOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBDLFxuICAgIHRlbXBGOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBGLFxuICB9KTtcbiAgY29uc3QgY29uZGl0aW9uID0gY29uZGl0aW9uQ29udGFpbmVyKHtcbiAgICBpY29uOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbkljb24sXG4gICAgdGV4dDogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb25UeHQsXG4gIH0pO1xuICBjb25zdCBmZWVsc0xpa2UgPSBmZWVsc0xpa2VDb250YWluZXIoe1xuICAgIHRlbXBDOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzTGlrZUMsXG4gICAgdGVtcEY6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNMaWtlRixcbiAgfSk7XG5cbiAgY29uc3Qgc3VuTW9vbiA9IHN1bk1vb25Db250YWluZXIoe1xuICAgIHN1bnJpc2U6IHdlYXRoZXJEYXRhLmZvcmVjYXN0WzBdLnN1bnJpc2UsXG4gICAgc3Vuc2V0OiB3ZWF0aGVyRGF0YS5mb3JlY2FzdFswXS5zdW5zZXQsXG4gICAgbW9vbnJpc2U6IHdlYXRoZXJEYXRhLmZvcmVjYXN0WzBdLm1vb25yaXNlLFxuICAgIG1vb25zZXQ6IHdlYXRoZXJEYXRhLmZvcmVjYXN0WzBdLm1vb25zZXQsXG4gICAgbW9vblBoYXNlOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdFswXS5tb29uUGhhc2UsXG4gIH0pO1xuXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlKTtcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VuTW9vbik7XG5cbiAgcmV0dXJuIHdlYXRoZXJDb250YWluZXI7XG59O1xuXG5jb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IChsb2NhdGlvblRleHQpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVRleHRFbGVtZW50KGxvY2F0aW9uVGV4dCwgXCJoMlwiKTtcbn07XG5cbmNvbnN0IHRlbXBlcmF0dXJlQ29udGFpbmVyID0gKHRlbXBEYXRhKSA9PiB7XG4gIHJldHVybiBjcmVhdGVUb2dnbGVDb250YWluZXIoXG4gICAgdGVtcERhdGEudGVtcEYsXG4gICAgXCJGXCIsXG4gICAgdGVtcERhdGEudGVtcEMsXG4gICAgXCJDXCIsXG4gICAgXCJ0ZW1wZXJhdHVyZVwiXG4gICk7XG59O1xuXG5jb25zdCBjb25kaXRpb25Db250YWluZXIgPSAoY29uZGl0aW9uRGF0YSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29uZGl0aW9uLWNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlRWxlbWVudChjb25kaXRpb25EYXRhLmljb24pKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRFbGVtZW50KGNvbmRpdGlvbkRhdGEudGV4dCkpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgZmVlbHNMaWtlQ29udGFpbmVyID0gKHRlbXBEYXRhKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmZWVscy1saWtlLWNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRFbGVtZW50KFwiRmVlbHMgbGlrZTpcIiwgXCJzcGFuXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVRvZ2dsZUNvbnRhaW5lcihcbiAgICAgIHRlbXBEYXRhLnRlbXBGLFxuICAgICAgXCJGXCIsXG4gICAgICB0ZW1wRGF0YS50ZW1wQyxcbiAgICAgIFwiQ1wiLFxuICAgICAgXCJ0ZW1wZXJhdHVyZVwiXG4gICAgKVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IHF1aWNrV2VhdGhlciA9IHdlYXRoZXJDb21wb25lbnRXcmFwcGVyKFxuICBxdWlja1dlYXRoZXJDb21wb25lbnQsXG4gIFwicXVpY2std2VhdGhlclwiXG4pO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlVGV4dEVsZW1lbnQsXG4gIGNyZWF0ZUltYWdlRWxlbWVudCxcbn0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3VpRWxlbWVudHMuanNcIjtcbmltcG9ydCBtb29ucmlzZUljb24gZnJvbSBcIi4uLy4uLy4uL2ltZ3MvbW9vbnJpc2UucG5nXCI7XG5pbXBvcnQgbW9vbnNldEljb24gZnJvbSBcIi4uLy4uLy4uL2ltZ3MvbW9vbnNldC5wbmdcIjtcbmltcG9ydCBzdW5yaXNlSWNvbiBmcm9tIFwiLi4vLi4vLi4vaW1ncy9zdW5yaXNlLnBuZ1wiO1xuaW1wb3J0IHN1bnNldEljb24gZnJvbSBcIi4uLy4uLy4uL2ltZ3Mvc3Vuc2V0LnBuZ1wiO1xuaW1wb3J0IHsgY29udmVydFRpbWVGb3JtYXQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGF0ZUZvcm1hdEhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3Qgc3VuTW9vbkNvbnRhaW5lciA9IChjZWxlc3RpYWxEYXRhKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjZWxlc3RpYWwtY29udGFpbmVyXCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZUVsZW1lbnQoc3VucmlzZUljb24sIFwiY2VsZXN0SW1nXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVRleHRFbGVtZW50KGNvbnZlcnRUaW1lRm9ybWF0KGNlbGVzdGlhbERhdGEuc3VucmlzZSkpXG4gICk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZUVsZW1lbnQoc3Vuc2V0SWNvbiwgXCJjZWxlc3RJbWdcIikpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoY29udmVydFRpbWVGb3JtYXQoY2VsZXN0aWFsRGF0YS5zdW5zZXQpKVxuICApO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2VFbGVtZW50KG1vb25yaXNlSWNvbiwgXCJjZWxlc3RJbWdcIikpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoY29udmVydFRpbWVGb3JtYXQoY2VsZXN0aWFsRGF0YS5tb29ucmlzZSkpXG4gICk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZUVsZW1lbnQobW9vbnNldEljb24sIFwiY2VsZXN0SW1nXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVRleHRFbGVtZW50KGNvbnZlcnRUaW1lRm9ybWF0KGNlbGVzdGlhbERhdGEubW9vbnNldCkpXG4gICk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQXR0cmlidXRpb25MaW5rLFxuICBoaWRlTW9kYWwsXG4gIHNob3dNb2RhbCxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL21vZGFsSGVscGVyLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVUZXh0RWxlbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy91aUVsZW1lbnRzLmpzXCI7XG5cbmNvbnN0IHNldHVwTW9kYWxFdmVudHMgPSAobW9kYWwpID0+IHtcbiAgY29uc3QgYXR0cmlidXRpb25MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0cmlidXRpb25MaW5rc1wiKTtcbiAgaWYgKGF0dHJpYnV0aW9uTGlua3MpIHtcbiAgICBhdHRyaWJ1dGlvbkxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vZGFsQ29udGVudCA9IChhdHRyaWJ1dGlvbnMpID0+IHtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1vZGFsLWNvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVUZXh0RWxlbWVudChcIkltYWdlIEF0dHJpYnV0aW9uc1wiLCBcImgzXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgYXR0cmlidXRpb25zLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICBjb25zdCBsaW5rID0gY3JlYXRlQXR0cmlidXRpb25MaW5rKGF0dHIpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vZGFsID0gKGF0dHJpYnV0aW9ucykgPT4ge1xuICBjb25zdCBtb2RhbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJhdHRyLW1vZGFsXCIpO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSBjcmVhdGVNb2RhbENvbnRlbnQoYXR0cmlidXRpb25zKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIHJldHVybiBtb2RhbDtcbn07XG5cbmNvbnN0IGF0dHJpYnV0aW9ucyA9IFtcbiAge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvcm91dGVcIixcbiAgICB0aXRsZTogXCJyb3V0ZSBpY29uc1wiLFxuICAgIHRleHQ6IFwiUm91dGUgaWNvbnMgY3JlYXRlZCBieSBTaXIuVmVjdG9yIC0gRmxhdGljb25cIixcbiAgfSxcbiAge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvbG9jYXRpb25cIixcbiAgICB0aXRsZTogXCJsb2NhdGlvbiBpY29uc1wiLFxuICAgIHRleHQ6IFwiTG9jYXRpb24gaWNvbnMgY3JlYXRlZCBieSBJY29uTWFya2V0UEsgLSBGbGF0aWNvblwiLFxuICB9LFxuICB7XG4gICAgaHJlZjogXCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9pY29uL3dlYXRoZXJfMTUwNjQ3MDUjZnJvbVZpZXc9ZmFtaWx5JnBhZ2U9MSZwb3NpdGlvbj04JnV1aWQ9MzkwNTM1NWYtNzhjNC00YjM5LTg1YjMtNGZhYmU2NDAwN2M2XCIsXG4gICAgdGV4dDogXCJJY29uIGJ5IGthd2FsYW5pY29uXCIsXG4gIH0sXG4gIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ljb24vd2VhdGhlcl8xNTA2NDcxMSNmcm9tVmlldz1yZXNvdXJjZV9kZXRhaWwmcG9zaXRpb249MzdcIixcbiAgICB0ZXh0OiBcIkljb24gYnkga2F3YWxhbmljb25cIixcbiAgfSxcbiAge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vaWNvbi9tb29uXzE1MDY0NjM1I2Zyb21WaWV3PXJlc291cmNlX2RldGFpbCZwb3NpdGlvbj00OFwiLFxuICAgIHRleHQ6IFwiSWNvbiBieSBrYXdhbGFuaWNvblwiLFxuICB9LFxuICB7XG4gICAgaHJlZjogXCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9pY29uL21vb25fMTUwNjQ2NjMjZnJvbVZpZXc9cmVzb3VyY2VfZGV0YWlsJnBvc2l0aW9uPTQ1XCIsXG4gICAgdGV4dDogXCJJY29uIGJ5IGthd2FsYW5pY29uXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQXR0cmlidXRpb25zTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gY3JlYXRlTW9kYWwoYXR0cmlidXRpb25zKTtcbiAgc2V0dXBNb2RhbEV2ZW50cyhtb2RhbCk7XG4gIHJldHVybiB7XG4gICAgc2hvdzogKCkgPT4gc2hvd01vZGFsKG1vZGFsKSxcbiAgICBoaWRlOiAoKSA9PiBoaWRlTW9kYWwobW9kYWwpLFxuICB9O1xufTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZUltYWdlRWxlbWVudCxcbiAgY3JlYXRlVGV4dEVsZW1lbnQsXG59IGZyb20gXCIuLi8uLi91dGlscy91aUVsZW1lbnRzLmpzXCI7XG5pbXBvcnQgcGluSWNvbiBmcm9tIFwiLi4vLi4vaW1ncy9waW4ucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQaW5CdXR0b24gPSAob25QaW5DbGljaykgPT4gKGxvY2F0aW9uRGF0YSwgd2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgcGluQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInBpbi1idXR0b25cIik7XG4gIGNvbnN0IHBpbkltZyA9IGNyZWF0ZUltYWdlRWxlbWVudChwaW5JY29uLCBcInBpbi1pbWdcIik7XG4gIGNvbnN0IHBpblR4dCA9IGNyZWF0ZVRleHRFbGVtZW50KFwiUGluIFNwb3RcIik7XG4gIHBpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwaW5JbWcpO1xuICBwaW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGluVHh0KTtcbiAgcGluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIG9uUGluQ2xpY2sobG9jYXRpb25EYXRhLCB3ZWF0aGVyRGF0YSlcbiAgKTtcbiAgcmV0dXJuIHBpbkNvbnRhaW5lcjtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVUZXh0RWxlbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy91aUVsZW1lbnRzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2dnbGVDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdW5pdFRvZ2dsZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVNrZWxldG9uVGV4dCB9IGZyb20gXCIuLi8uLi91dGlscy9za2VsZXRvbkhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUGlubmVkQm94ID1cbiAgKG9uUmVtb3ZlLCBvbkNsaWNrKSA9PlxuICAodXJsLCBjaXR5LCByZWdpb24sIHRlbXBGLCB0ZW1wQywgaXNMb2FkaW5nID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBib3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicGluLWJveFwiKTtcbiAgICBib3guZGF0YXNldC5sb2NhdGlvblVybCA9IHVybDtcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2tlbGV0b25cIik7XG4gICAgICBjb25zdCBza2VsZXRvblRlbXAgPSBjcmVhdGVTa2VsZXRvblRleHQoXCIyNSVcIiwgXCIyNXB4XCIpO1xuICAgICAgY29uc3Qgc2tlbGV0b25Mb2NhdGlvbiA9IGNyZWF0ZVNrZWxldG9uVGV4dChcIjc1JVwiLCBcIjI1cHhcIik7XG5cbiAgICAgIGJveC5hcHBlbmRDaGlsZChza2VsZXRvblRlbXApO1xuICAgICAgYm94LmFwcGVuZENoaWxkKHNrZWxldG9uTG9jYXRpb24pO1xuXG4gICAgICByZXR1cm4gYm94O1xuICAgIH1cblxuICAgIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgICBgJHtjaXR5fSwgJHtyZWdpb259YCxcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInBpbi1sb2NhdGlvblwiXG4gICAgKTtcbiAgICBjb25zdCB0ZW1wID0gY3JlYXRlVG9nZ2xlQ29udGFpbmVyKHRlbXBGLCBcIkZcIiwgdGVtcEMsIFwiQ1wiLCBcInRlbXBlcmF0dXJlXCIpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGNyZWF0ZVJlbW92ZUJ0bih1cmwsIG9uUmVtb3ZlKTtcblxuICAgIHRlbXAuY2xhc3NMaXN0LmFkZChcInBpbi10ZW1wXCIpO1xuICAgIGJveC5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICBib3guYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgIGJveC5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuXG4gICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHJlbW92ZUJ0biAmJiBldmVudC50YXJnZXQgIT09IHJlbW92ZUJ0bi5maXJzdENoaWxkKSB7XG4gICAgICAgIG9uQ2xpY2sodXJsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYm94O1xuICB9O1xuXG5jb25zdCBjcmVhdGVSZW1vdmVCdG4gPSAobG9jYXRpb25VcmwsIG9uUmVtb3ZlKSA9PiB7XG4gIGNvbnN0IHJlbW92ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJjbG9zZS1idXR0b25cIik7XG4gIHJlbW92ZUJ0bi5pbm5lckhUTUwgPSBcIiYjMTAwMDVcIjtcbiAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBvblJlbW92ZShsb2NhdGlvblVybCkpO1xuICByZXR1cm4gcmVtb3ZlQnRuO1xufTtcbiIsImltcG9ydCB7XG4gIGdldFBpbm5lZExvY2F0aW9ucyxcbiAgaXNMb2NhdGlvblBpbm5lZCxcbiAgYWRkTG9jYXRpb24sXG4gIHJlbW92ZUxvY2F0aW9uLFxuICBpbml0aWFsaXplRGVmYXVsdExvY2F0aW9ucyxcbn0gZnJvbSBcIi4uLy4uL2FwaS9waW5Mb2NhdGlvblN0b3JhZ2UuanNcIjtcbmltcG9ydCB7IGdldEZvcmVjYXN0RGF0YSB9IGZyb20gXCIuLi8uLi9hcGkvd2VhdGhlckFwaS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUGluQnV0dG9uIH0gZnJvbSBcIi4vcGluQnV0dG9uLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQaW5uZWRCb3ggfSBmcm9tIFwiLi9waW5uZWRCb3guanNcIjtcbmltcG9ydCB7IGRpc3BsYXlTZWxlY3RMb2NhdGlvbiB9IGZyb20gXCIuLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzXCI7XG5pbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVJbWFnZUVsZW1lbnQsXG4gIGNyZWF0ZVRleHRFbGVtZW50LFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvdWlFbGVtZW50cy5qc1wiO1xuaW1wb3J0IHBpbk1hcCBmcm9tIFwiLi4vLi4vaW1ncy9waW4tbWFwLnBuZ1wiO1xuXG5jb25zdCBwaW5uZWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBpbm5lZC1sb2NhdGlvbnNcIik7XG5cbmNvbnN0IHBpbkxvY2F0aW9uSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicGlubmVkLWhlYWRlclwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlRWxlbWVudChwaW5NYXApKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVRleHRFbGVtZW50KFwiUGlubmVkIExvY2F0aW9uc1wiLCBcImgyXCIsIFwicGluLXR4dC1oZWFkZXJcIilcbiAgKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbnBpbm5lZENvbnRhaW5lci5hcHBlbmRDaGlsZChwaW5Mb2NhdGlvbkhlYWRlcigpKTtcblxuY29uc3Qgb25QaW5uZWRMb2NhdGlvbkNsaWNrID0gYXN5bmMgKGxvY2F0aW9uVXJsKSA9PiB7XG4gIGNvbnN0IHBpbm5lZExvY2F0aW9ucyA9IGdldFBpbm5lZExvY2F0aW9ucygpO1xuICBjb25zdCBsb2NhdGlvbiA9IHBpbm5lZExvY2F0aW9ucy5maW5kKChsb2MpID0+IGxvYy51cmwgPT09IGxvY2F0aW9uVXJsKTtcbiAgaWYgKGxvY2F0aW9uKSB7XG4gICAgYXdhaXQgZGlzcGxheVNlbGVjdExvY2F0aW9uKGxvY2F0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUGlubmVkIGxvY2F0aW9uIG5vdCBmb3VuZFwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG9uUGluQ2xpY2sgPSAobG9jYXRpb25EYXRhLCB3ZWF0aGVyRGF0YSkgPT4ge1xuICBpZiAoaXNMb2NhdGlvblBpbm5lZChsb2NhdGlvbkRhdGEudXJsKSkgcmV0dXJuO1xuXG4gIGFkZExvY2F0aW9uKGxvY2F0aW9uRGF0YSk7XG4gIGNvbnN0IHBpbkJveCA9IGNyZWF0ZVBpbm5lZEJveChyZW1vdmVQaW5uZWRMb2NhdGlvbiwgb25QaW5uZWRMb2NhdGlvbkNsaWNrKShcbiAgICBsb2NhdGlvbkRhdGEudXJsLFxuICAgIHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgd2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcEYsXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wQ1xuICApO1xuICBwaW5uZWRDb250YWluZXIuYXBwZW5kQ2hpbGQocGluQm94KTtcbn07XG5cbmNvbnN0IHJlbW92ZVBpbm5lZExvY2F0aW9uID0gKGxvY2F0aW9uVXJsKSA9PiB7XG4gIHJlbW92ZUxvY2F0aW9uKGxvY2F0aW9uVXJsKTtcbiAgY29uc3QgYm94RWxlbWVudCA9IHBpbm5lZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS1sb2NhdGlvbi11cmw9XCIke2xvY2F0aW9uVXJsfVwiXWBcbiAgKTtcbiAgaWYgKGJveEVsZW1lbnQpIGJveEVsZW1lbnQucmVtb3ZlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUGluQnRuID0gY3JlYXRlUGluQnV0dG9uKG9uUGluQ2xpY2spO1xuXG5leHBvcnQgY29uc3QgbG9hZFBpbm5lZExvY2F0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGlubmVkTG9jYXRpb25zID0gZ2V0UGlubmVkTG9jYXRpb25zKCk7XG5cbiAgZm9yIChjb25zdCBsb2NhdGlvbiBvZiBwaW5uZWRMb2NhdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VycmVudExvY2F0aW9uRGF0YSA9IGF3YWl0IGdldEZvcmVjYXN0RGF0YShsb2NhdGlvbi51cmwpO1xuXG4gICAgICBjb25zdCBza2VsZXRvbkJveCA9IHBpbm5lZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtbG9jYXRpb24tdXJsPVwiJHtsb2NhdGlvbi51cmx9XCJdYFxuICAgICAgKTtcbiAgICAgIGlmIChza2VsZXRvbkJveCkgc2tlbGV0b25Cb3gucmVtb3ZlKCk7XG5cbiAgICAgIGNvbnN0IHBpbkJveCA9IGNyZWF0ZVBpbm5lZEJveChcbiAgICAgICAgcmVtb3ZlUGlubmVkTG9jYXRpb24sXG4gICAgICAgIG9uUGlubmVkTG9jYXRpb25DbGlja1xuICAgICAgKShcbiAgICAgICAgbG9jYXRpb24udXJsLFxuICAgICAgICBjdXJyZW50TG9jYXRpb25EYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbkRhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgICAgICBjdXJyZW50TG9jYXRpb25EYXRhLmN1cnJlbnQudGVtcEYsXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbkRhdGEuY3VycmVudC50ZW1wQ1xuICAgICAgKTtcbiAgICAgIHBpbm5lZENvbnRhaW5lci5hcHBlbmRDaGlsZChwaW5Cb3gpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbG9hZCBkYXRhIGZvciAke2xvY2F0aW9uLnVybH06IGAsIGVycm9yKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQaW5uZWRTa2VsZXRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHBpbm5lZExvY2F0aW9ucyA9IGdldFBpbm5lZExvY2F0aW9ucygpO1xuICBpbml0aWFsaXplRGVmYXVsdExvY2F0aW9ucygpO1xuXG4gIHBpbm5lZExvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNrZWxldG9uQm94ID0gY3JlYXRlUGlubmVkQm94KFxuICAgICAgcmVtb3ZlUGlubmVkTG9jYXRpb24sXG4gICAgICBvblBpbm5lZExvY2F0aW9uQ2xpY2tcbiAgICApKGxvY2F0aW9uLnVybCwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgdHJ1ZSk7XG4gICAgcGlubmVkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNrZWxldG9uQm94KTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgc2VhcmNoRm9yIH0gZnJvbSBcIi4uLy4uL2FwaS93ZWF0aGVyQXBpLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVEcm9wZG93biB9IGZyb20gXCIuL3NlYXJjaC5qc1wiO1xuaW1wb3J0IHsgc2VhcmNoRGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGVib3VuY2UuanNcIjtcbmltcG9ydCB7IGNsZWFyU2VhcmNoSW5wdXQgfSBmcm9tIFwiLi9zZWFyY2guanNcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVNlYXJjaElucHV0ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHNlYXJjaFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLXNlYXJjaC1jb250ZW50XCIpO1xuICBkZWJvdW5jZWRTZWFyY2goc2VhcmNoVmFsdWUsIGRyb3Bkb3duQ29udGVudCk7XG59O1xuXG5jb25zdCBkZWJvdW5jZWRTZWFyY2ggPSBzZWFyY2hEZWJvdW5jZShhc3luYyAoc2VhcmNoVmFsdWUsIGRyb3Bkb3duQ29udGVudCkgPT4ge1xuICBpZiAoc2VhcmNoVmFsdWUubGVuZ3RoIDwgMykge1xuICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB1cGRhdGVEcm9wZG93bihbXSwgZHJvcGRvd25Db250ZW50LCB0cnVlKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBzZWFyY2hGb3Ioc2VhcmNoVmFsdWUpO1xuICAgIHVwZGF0ZURyb3Bkb3duKHNlYXJjaFJlc3VsdHMsIGRyb3Bkb3duQ29udGVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNlYXJjaCByZXN1bHRzOiBcIiwgZXJyb3IpO1xuICAgIHVwZGF0ZURyb3Bkb3duKFtdLCBkcm9wZG93bkNvbnRlbnQpO1xuICB9XG59LCA1MDApO1xuXG5leHBvcnQgY29uc3QgY2xlYXJTZWFyY2ggPSAoKSA9PiB7XG4gIGNsZWFyU2VhcmNoSW5wdXQoKTtcbiAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1zZWFyY2gtY29udGVudFwiKTtcbiAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG4iLCJpbXBvcnQgeyBjbGVhclNlYXJjaCwgaGFuZGxlU2VhcmNoSW5wdXQgfSBmcm9tIFwiLi9oYW5kbGVTZWFyY2hJbnB1dC5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVNlbGVjdExvY2F0aW9uIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVRleHRFbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VpRWxlbWVudHMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVNrZWxldG9uVGV4dCB9IGZyb20gXCIuLi8uLi91dGlscy9za2VsZXRvbkhlbHBlci5qc1wiO1xuXG5sZXQgaW5wdXRFbGVtZW50O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VhcmNoQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1jb250YWluZXJcIik7XG4gIGlucHV0RWxlbWVudCA9IHNlYXJjaElucHV0KCk7XG4gIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IHNlYXJjaERyb3Bkb3duKCk7XG5cbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wZG93bkVsZW1lbnQpO1xuXG4gIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlU2VhcmNoSW5wdXQpO1xufTtcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRFbGVtZW50LnR5cGUgPSBcInNlYXJjaFwiO1xuICBpbnB1dEVsZW1lbnQuaWQgPSBcImxvY2F0aW9uLXNlYXJjaFwiO1xuICBpbnB1dEVsZW1lbnQubmFtZSA9IFwibG9jLXNlYXJjaFwiO1xuICBpbnB1dEVsZW1lbnQucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBDaXR5IG9yIFppcCBDb2RlXCI7XG4gIHJldHVybiBpbnB1dEVsZW1lbnQ7XG59O1xuXG5jb25zdCBzZWFyY2hEcm9wZG93biA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkcm9wZG93bi1zZWFyY2gtY29udGVudFwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEcm9wZG93biA9IChyZXN1bHRzLCBkcm9wZG93bkVsZW1lbnQsIGlzTG9hZGluZyA9IGZhbHNlKSA9PiB7XG4gIGRyb3Bkb3duRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICBjb25zdCBza2VsZXRvbkl0ZW1zID0gQXJyYXkoMylcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4ge1xuICAgICAgICBjb25zdCBza2VsZXRvbkl0ZW0gPSBjcmVhdGVTa2VsZXRvblRleHQoKTtcbiAgICAgICAgcmV0dXJuIHNrZWxldG9uSXRlbTtcbiAgICAgIH0pO1xuICAgIHNrZWxldG9uSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gZHJvcGRvd25FbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0pKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICBkcm9wZG93bkVsZW1lbnQuaW5uZXJIVE1MID0gXCI8cD5ObyByZXN1bHRzIGZvdW5kPC9wPlwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGxvY2F0aW9uT3B0aW9ucyA9IGRpc3BsYXlMb2NhdGlvbk9wdGlvbnMocmVzdWx0cyk7XG4gIGRyb3Bkb3duRWxlbWVudC5hcHBlbmRDaGlsZChsb2NhdGlvbk9wdGlvbnMpO1xufTtcblxuY29uc3QgZGlzcGxheUxvY2F0aW9uT3B0aW9ucyA9IChyZXN1bHRzKSA9PiB7XG4gIGNvbnN0IHVsID0gY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IGxpID0gY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgICBgJHtyZXN1bHQubmFtZX0sICR7cmVzdWx0LnJlZ2lvbn0gKCR7cmVzdWx0LmNvdW50cnl9KWAsXG4gICAgICBcImxpXCJcbiAgICApO1xuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5U2VsZWN0TG9jYXRpb24ocmVzdWx0KTtcbiAgICAgIGNsZWFyU2VhcmNoKCk7XG4gICAgfSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgcmV0dXJuIHVsO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyU2VhcmNoSW5wdXQgPSAoKSA9PiB7XG4gIGlmIChpbnB1dEVsZW1lbnQpIHtcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGhhbmRsZUFwaUVycm9yID0gKGVycm9yLCBvcGVyYXRpb24pID0+IHtcbiAgY29uc29sZS5lcnJvcihgRXJyb3IgZHVyaW5nICR7b3BlcmF0aW9ufTogYCwgZXJyb3IpO1xuICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIkZhaWxlZCB0byBmZXRjaFwiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBOZXR3b3JrIGVycm9yIHdoaWxlIHRyeWluZyB0byAke29wZXJhdGlvbn0uIFBsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24uYFxuICAgICk7XG4gIH0gZWxzZSBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIkhUVFAgZXJyb3JcIikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgU2VydmVyIGVycm9yIHdoaWxlIHRyeWluZyB0byAke29wZXJhdGlvbn0uIFRoZSByZXF1ZXN0ZWQgZGF0YSBtYXkgbm90IGJlIGF2YWlsYWJsZS5gXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byAke29wZXJhdGlvbn0uIFRyeSBhZ2Fpbi5gKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXBpID0gYXN5bmMgKHVybCwgb3BlcmF0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGhhbmRsZUFwaUVycm9yKGVycm9yLCBvcGVyYXRpb24pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlVG9nZ2xlQ29udGFpbmVyIH0gZnJvbSBcIi4vdW5pdFRvZ2dsZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVRleHRFbGVtZW50IH0gZnJvbSBcIi4vdWlFbGVtZW50cy5qc1wiO1xuXG5leHBvcnQgY29uc3Qgd2lkZ2V0Qm94ID0gKFxuICBjYXRlZ29yeUxhYmVsLFxuICB2YWx1ZTEsXG4gIHN5bWJvbDEsXG4gIHZhbHVlMixcbiAgc3ltYm9sMixcbiAgdW5pdFR5cGVcbikgPT4ge1xuICBjb25zdCBib3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwid2lkZ2V0LWJveFwiKTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVUZXh0RWxlbWVudChjYXRlZ29yeUxhYmVsLCBcImRpdlwiKTtcbiAgY29uc3QgdmFsdWUgPSBjcmVhdGVUb2dnbGVDb250YWluZXIoXG4gICAgdmFsdWUxLFxuICAgIHN5bWJvbDEsXG4gICAgdmFsdWUyLFxuICAgIHN5bWJvbDIsXG4gICAgdW5pdFR5cGVcbiAgKTtcblxuICBib3guYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBib3guYXBwZW5kQ2hpbGQodmFsdWUpO1xuICByZXR1cm4gYm94O1xufTtcblxuZXhwb3J0IGNvbnN0IHNpbmdsZVZhbHVlV2lkZ2V0Qm94ID0gKGNhdGVnb3J5TGFiZWwsIHZhbHVlMSwgY29sb3IgPSBudWxsKSA9PiB7XG4gIGNvbnN0IGJveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ3aWRnZXQtYm94XCIpO1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZVRleHRFbGVtZW50KGNhdGVnb3J5TGFiZWwsIFwiZGl2XCIpO1xuICBjb25zdCB2YWx1ZSA9IGNyZWF0ZVRleHRFbGVtZW50KHZhbHVlMSwgXCJkaXZcIik7XG5cbiAgaWYgKGNvbG9yKSB7XG4gICAgdmFsdWUuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGJveC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGJveC5hcHBlbmRDaGlsZCh2YWx1ZSk7XG4gIHJldHVybiBib3g7XG59O1xuIiwiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZSwgaXNUb2RheSwgZ2V0SG91cnMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSAoZGF0ZVRpbWVTdHIpID0+IHtcbiAgY29uc3QgZGF0ZSA9IHBhcnNlKGRhdGVUaW1lU3RyLCBcInl5eXktTU0tZGQgSEg6bW1cIiwgbmV3IERhdGUoKSk7XG4gIGNvbnN0IHRpbWVGb3JtYXQgPSBmb3JtYXQoZGF0ZSwgXCJoOm1tIGFcIik7XG4gIHJldHVybiB0aW1lRm9ybWF0O1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVN0cikgPT4ge1xuICBjb25zdCBkYXRlID0gcGFyc2UoZGF0ZVN0ciwgXCJ5eXl5LU1NLWRkXCIsIG5ldyBEYXRlKCkpO1xuICByZXR1cm4gaXNUb2RheShkYXRlKSA/IFwiVG9kYXlcIiA6IGZvcm1hdChkYXRlLCBcIk1NTU0gZCwgeXl5eVwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0N1cnJlbnRIb3VyID0gKGhvdXJseVRpbWUsIGN1cnJlbnRUaW1lKSA9PiB7XG4gIGNvbnN0IHBhcnNlZEhvdXJseVRpbWUgPSBwYXJzZShob3VybHlUaW1lLCBcImg6bW0gYVwiLCBuZXcgRGF0ZSgpKTtcbiAgY29uc3QgcGFyc2VkQ3VycmVudFRpbWUgPSBwYXJzZShjdXJyZW50VGltZSwgXCJoOm1tIGFcIiwgbmV3IERhdGUoKSk7XG5cbiAgY29uc3QgaG91cmx5SG91ciA9IGdldEhvdXJzKHBhcnNlZEhvdXJseVRpbWUpO1xuICBjb25zdCBjdXJyZW50SG91ciA9IGdldEhvdXJzKHBhcnNlZEN1cnJlbnRUaW1lKTtcblxuICByZXR1cm4gaG91cmx5SG91ciA9PT0gY3VycmVudEhvdXI7XG59O1xuXG5leHBvcnQgY29uc3QgY29udmVydFRpbWVGb3JtYXQgPSAodGltZVN0cikgPT4ge1xuICBpZiAoIXRpbWVTdHIpIHtcbiAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIHRpbWUgc3RyaW5nOiBcIiwgdGltZVN0cik7XG4gICAgcmV0dXJuIFwiTi9BXCI7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRlID0gcGFyc2UodGltZVN0ciwgXCJoaDptbSBhXCIsIG5ldyBEYXRlKCkpO1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgXCJoOm1tIGFcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgdGltZTogXCIsIHRpbWVTdHIsIGVycm9yKTtcbiAgICByZXR1cm4gXCJOL0FcIjtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBzZWFyY2hEZWJvdW5jZSA9IChmdW5jLCBkZWxheSkgPT4ge1xuICBsZXQgdGltZW91dElkO1xuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMuYXBwbHkodGhpcywgYXJncyksIGRlbGF5KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdWlFbGVtZW50c1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQXR0cmlidXRpb25MaW5rID0gKGF0dHIpID0+IHtcbiAgY29uc3QgbGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaW5rLmhyZWYgPSBhdHRyLmhyZWY7XG4gIGlmIChhdHRyLnRpdGxlKSBsaW5rLnRpdGxlID0gYXR0ci50aXRsZTtcbiAgbGluay50ZXh0Q29udGVudCA9IGF0dHIudGV4dDtcbiAgbGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBsaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICByZXR1cm4gbGluaztcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93TW9kYWwgPSAobW9kYWwpID0+IHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBoaWRlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91aUVsZW1lbnRzLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTa2VsZXRvbkVsZW1lbnQgPSAoY2xhc3NOYW1lID0gXCJcIikgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBgc2tlbGV0b24gJHtjbGFzc05hbWV9YCk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTa2VsZXRvblRleHQgPSAod2lkdGggPSBcIjEwMCVcIiwgaGVpZ2h0ID0gXCIxZW1cIikgPT4ge1xuICBjb25zdCBza2VsZXRvbiA9IGNyZWF0ZVNrZWxldG9uRWxlbWVudChcInRleHRcIik7XG4gIHNrZWxldG9uLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gIHNrZWxldG9uLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgcmV0dXJuIHNrZWxldG9uO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNrZWxldG9uV2lkZ2V0ID0gKCkgPT4ge1xuICBjb25zdCB3aWRnZXQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwid2lkZ2V0LWJveCBza2VsZXRvblwiKTtcbiAgd2lkZ2V0LmFwcGVuZENoaWxkKGNyZWF0ZVNrZWxldG9uRWxlbWVudChcInNrZWxldG9uLXRpdGxlXCIpKTtcbiAgd2lkZ2V0LmFwcGVuZENoaWxkKGNyZWF0ZVNrZWxldG9uRWxlbWVudChcInNrZWxldG9uLXZhbHVlXCIpKTtcbiAgcmV0dXJuIHdpZGdldDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTa2VsZXRvbkhvdXJseUJveGVzID0gKCkgPT4ge1xuICBjb25zdCBob3VybHlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaG91cmx5LWJveGVzXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBjb25zdCBib3ggPSBjcmVhdGVTa2VsZXRvbkVsZW1lbnQoXCJob3VybHktYm94IHNrZWxldG9uXCIpO1xuICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVTa2VsZXRvblRleHQoXCI5MCVcIiwgXCIyZW1cIikpO1xuICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVTa2VsZXRvblRleHQoXCIzMCVcIiwgXCIxZW1cIikpO1xuICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVTa2VsZXRvblRleHQoXCI4MCVcIiwgXCI2ZW1cIikpO1xuICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVTa2VsZXRvblRleHQoXCIxMDAlXCIsIFwiMWVtXCIpKTtcbiAgICBob3VybHlDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgfVxuICByZXR1cm4gaG91cmx5Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IHdlYXRoZXJDb21wb25lbnRXcmFwcGVyID0gKGNvbXBvbmVudEZuLCBjb21wb25lbnROYW1lKSA9PiB7XG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgY29tcG9uZW50TmFtZSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhcmdzWzBdO1xuXG4gICAgaWYgKCF3ZWF0aGVyRGF0YSkge1xuICAgICAgaWYgKGNvbXBvbmVudE5hbWUgPT09IFwiaG91cmx5LWZvcmVjYXN0XCIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNrZWxldG9uSG91cmx5Qm94ZXMoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBza2VsZXRvbkNvdW50ID0gZ2V0U2tlbGV0b25Db3VudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2VsZXRvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2tlbGV0b25XaWRnZXQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRGbiguLi5hcmdzKTtcbiAgfTtcbn07XG5cbmNvbnN0IHNrZWxldG9uQ291bnRzID0ge1xuICBcIndpbmQtd2VhdGhlclwiOiAzLFxuICBcIm1vaXN0dXJlLXdlYXRoZXJcIjogMyxcbiAgXCJhaXItd2VhdGhlclwiOiAyLFxuICBcImhvdXJseS1mb3JlY2FzdFwiOiAyNCxcbiAgXCJxdWljay13ZWF0aGVyXCI6IDEsXG4gIFwic3VuLXdlYXRoZXJcIjogNCxcbn07XG5cbmNvbnN0IGRlZmF1bHRTa2VsZXRvbkNvdW50ID0gMTtcblxuY29uc3QgZ2V0U2tlbGV0b25Db3VudCA9IChjb21wb25lbnROYW1lKSA9PiB7XG4gIHJldHVybiBza2VsZXRvbkNvdW50c1tjb21wb25lbnROYW1lXSB8fCBkZWZhdWx0U2tlbGV0b25Db3VudDtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZSA9IFwiXCIpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUZXh0RWxlbWVudCA9ICh0ZXh0LCB0YWcgPSBcImRpdlwiLCBjbGFzc05hbWUgPSBcIlwiKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUltYWdlRWxlbWVudCA9IChzcmMsIGNsYXNzTmFtZSA9IFwiXCIpID0+IHtcbiAgY29uc3QgaW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBjbGFzc05hbWUpO1xuICBpbWcuc3JjID0gc3JjO1xuICByZXR1cm4gaW1nO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91aUVsZW1lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUb2dnbGVDb250YWluZXIgPSAodmFsdWUxLCB1bml0MSwgdmFsdWUyLCB1bml0MiwgdHlwZSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidW5pdC12YWx1ZVwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodHlwZSk7XG4gIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3ZhbHVlMX0gJHt1bml0U3ltYm9sc1t1bml0MV19YDtcbiAgY29udGFpbmVyLmRhdGFzZXRbdW5pdDEudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTE7XG4gIGNvbnRhaW5lci5kYXRhc2V0W3VuaXQyLnRvTG93ZXJDYXNlKCldID0gdmFsdWUyO1xuICBjb250YWluZXIuZGF0YXNldC5jdXJyZW50VW5pdCA9IHVuaXQxO1xuICBjb250YWluZXIuZGF0YXNldC50eXBlID0gdHlwZTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVbml0RGlzcGxheXMgPSAoY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgYWxsVW5pdENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIGAudW5pdC12YWx1ZVtkYXRhLXR5cGU9XCIke2NhdGVnb3J5fVwiXWBcbiAgKTtcbiAgYWxsVW5pdENvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgbmV3VW5pdCA9IHVuaXRQcmVmZXJlbmNlc1tjYXRlZ29yeV07XG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb250YWluZXIuZGF0YXNldFtuZXdVbml0LnRvTG93ZXJDYXNlKCldO1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke25ld1ZhbHVlfSAke3VuaXRTeW1ib2xzW25ld1VuaXRdfWA7XG4gICAgY29udGFpbmVyLmRhdGFzZXQuY3VycmVudFVuaXQgPSBuZXdVbml0O1xuICB9KTtcbn07XG5cbmV4cG9ydCBsZXQgdW5pdFByZWZlcmVuY2VzID0ge1xuICB0ZW1wZXJhdHVyZTogXCJGXCIsXG4gIHNwZWVkOiBcIm1waFwiLFxuICBwcmVzc3VyZTogXCJpbkhnXCIsXG4gIHByZWNpcGl0YXRpb246IFwiaW5cIixcbn07XG5cbmV4cG9ydCBjb25zdCB1bml0T3B0aW9ucyA9IHtcbiAgdGVtcGVyYXR1cmU6IFtcIkZcIiwgXCJDXCJdLFxuICBzcGVlZDogW1wibXBoXCIsIFwia3BoXCJdLFxuICBwcmVzc3VyZTogW1wiaW5IZ1wiLCBcIm1iXCJdLFxuICBwcmVjaXBpdGF0aW9uOiBbXCJpblwiLCBcIm1tXCJdLFxufTtcblxuZXhwb3J0IGNvbnN0IHVuaXRTeW1ib2xzID0ge1xuICBDOiBcIsKwQ1wiLFxuICBGOiBcIsKwRlwiLFxuICBtcGg6IFwibXBoXCIsXG4gIGtwaDogXCJrcGhcIixcbiAgaW5IZzogXCJpbkhnXCIsXG4gIGluOiBcImluXCIsXG4gIG1iOiBcIm1iXCIsXG4gIG1tOiBcIm1tXCIsXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLm1qc1wiO1xuXG5jb25zdCBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogXCJhbVwiLFxuICBwbTogXCJwbVwiLFxuICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICBub29uOiBcIm5vb25cIixcbiAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gIG5pZ2h0OiBcIm5pZ2h0XCIsXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgY2FzZSBcIkdHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgXCJHR0dHXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJ3aWRlXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgICAgY29uc3QgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJRUVFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJRUVFRXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGlzb1dlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiZWVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiS29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnRydW5jKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZ2h0Rm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09IFwieXlcIiA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09IFwiTVwiID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSBcImFtXCIgPyBcImEubS5cIiA6IFwicC5tLlwiO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUyhkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLnRydW5jKFxuICAgICAgbWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMyksXG4gICAgKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcbiIsImNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJjb25zdCBkYXlPZlllYXJUb2tlblJFID0gL15EKyQvO1xuY29uc3Qgd2Vla1llYXJUb2tlblJFID0gL15ZKyQvO1xuXG5jb25zdCB0aHJvd1Rva2VucyA9IFtcIkRcIiwgXCJERFwiLCBcIllZXCIsIFwiWVlZWVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIGRheU9mWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHdlZWtZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KTtcbiAgY29uc29sZS53YXJuKF9tZXNzYWdlKTtcbiAgaWYgKHRocm93VG9rZW5zLmluY2x1ZGVzKHRva2VuKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoX21lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IHN1YmplY3QgPSB0b2tlblswXSA9PT0gXCJZXCIgPyBcInllYXJzXCIgOiBcImRheXMgb2YgdGhlIG1vbnRoXCI7XG4gIHJldHVybiBgVXNlIFxcYCR7dG9rZW4udG9Mb3dlckNhc2UoKX1cXGAgaW5zdGVhZCBvZiBcXGAke3Rva2VufVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyAke3N1YmplY3R9IHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYDtcbn1cbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgYW1vdW50KSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgTmFOKTtcbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIF9kYXRlO1xuICB9XG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZERheXM7XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0Tm93XG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgcGFzc2VkIHZhbHVlIGNvbnN0cnVjdG9yLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbVxuICogdGhlIHJlZmVyZW5jZSBkYXRlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBkYXRlXG4gKiBleHRlbnNpb25zIGFuZCB1c2UgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqXG4gKiBAcmV0dXJucyBDdXJyZW50IGRhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgY29uc3RydWN0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0Tm93LCBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiBmdW5jdGlvbiBpc1RvZGF5PERhdGVUeXBlIGV4dGVuZHMgRGF0ZT4oXG4gKiAgIGRhdGU6IERhdGVUeXBlIHwgbnVtYmVyIHwgc3RyaW5nLFxuICogKTogYm9vbGVhbiB7XG4gKiAgIC8vIElmIHdlIHdlcmUgdG8gdXNlIGBuZXcgRGF0ZSgpYCBkaXJlY3RseSwgdGhlIGZ1bmN0aW9uIHdvdWxkICBiZWhhdmVcbiAqICAgLy8gZGlmZmVyZW50bHkgaW4gZGlmZmVyZW50IHRpbWV6b25lcyBhbmQgcmV0dXJuIGZhbHNlIGZvciB0aGUgc2FtZSBkYXRlLlxuICogICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIGNvbnN0cnVjdE5vdyhkYXRlKSk7XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3ROb3coZGF0ZSkge1xuICByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3ROb3c7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgK3N0YXJ0T2ZEYXlMZWZ0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZkRheVJpZ2h0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IGRlZmF1bHRMb2NhbGUgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRMb2NhbGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7IGxvbmdGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qc1wiO1xuaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gXCIuL2lzVmFsaWQubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcbmV4cG9ydCB7IGZvcm1hdHRlcnMsIGxvbmdGb3JtYXR0ZXJzIH07XG5cbi8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuY29uc3QgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9XG4gIC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuY29uc3QgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuY29uc3QgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xuY29uc3QgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuZXhwb3J0IHsgZm9ybWF0IGFzIGZvcm1hdERhdGUgfTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGFsaWFzIGZvcm1hdERhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXIpKS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcblxuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3Qgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHRpbWUgdmFsdWVcIik7XG4gIH1cblxuICBsZXQgcGFydHMgPSBmb3JtYXRTdHJcbiAgICAubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gICAgLm1hcCgoc3Vic3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCJwXCIgfHwgZmlyc3RDaGFyYWN0ZXIgPT09IFwiUFwiKSB7XG4gICAgICAgIGNvbnN0IGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpXG4gICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gICAgLm1hcCgoc3Vic3RyaW5nKSA9PiB7XG4gICAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBcIidcIiB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKSB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl0pIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogdHJ1ZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICB9KTtcblxuICAvLyBpbnZva2UgbG9jYWxpemUgcHJlcHJvY2Vzc29yIChvbmx5IGZvciBmcmVuY2ggbG9jYWxlcyBhdCB0aGUgbW9tZW50KVxuICBpZiAobG9jYWxlLmxvY2FsaXplLnByZXByb2Nlc3Nvcikge1xuICAgIHBhcnRzID0gbG9jYWxlLmxvY2FsaXplLnByZXByb2Nlc3NvcihvcmlnaW5hbERhdGUsIHBhcnRzKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGUsXG4gIH07XG5cbiAgcmV0dXJuIHBhcnRzXG4gICAgLm1hcCgocGFydCkgPT4ge1xuICAgICAgaWYgKCFwYXJ0LmlzVG9rZW4pIHJldHVybiBwYXJ0LnZhbHVlO1xuXG4gICAgICBjb25zdCB0b2tlbiA9IHBhcnQudmFsdWU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiZcbiAgICAgICAgICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pKSB8fFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiZcbiAgICAgICAgICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSlcbiAgICAgICkge1xuICAgICAgICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXRTdHIsIFN0cmluZyhkYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbdG9rZW5bMF1dO1xuICAgICAgcmV0dXJuIGZvcm1hdHRlcihvcmlnaW5hbERhdGUsIHRva2VuLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICBjb25zdCBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZlllYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBkYXkgb2YgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoX2RhdGUsIHN0YXJ0T2ZZZWFyKF9kYXRlKSk7XG4gIGNvbnN0IGRheU9mWWVhciA9IGRpZmYgKyAxO1xuICByZXR1cm4gZGF5T2ZZZWFyO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERheU9mWWVhcjtcbiIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIGFzIGdldEludGVybmFsRGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERlZmF1bHRPcHRpb25zXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCBkZWZhdWx0IG9wdGlvbnMuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBkZWZhdWx0cyBmb3JcbiAqIGBvcHRpb25zLmxvY2FsZWAsIGBvcHRpb25zLndlZWtTdGFydHNPbmAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWBcbiAqIGFyZ3VtZW50cyBmb3IgYWxsIGZ1bmN0aW9ucy5cbiAqXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGVzZSB3aXRoIFtzZXREZWZhdWx0T3B0aW9uc10oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9zZXREZWZhdWx0T3B0aW9ucykuXG4gKlxuICogQHJldHVybnMgVGhlIGRlZmF1bHQgb3B0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZXN1bHQgPSBnZXREZWZhdWx0T3B0aW9ucygpXG4gKiAvLz0+IHt9XG4gKlxuICogQGV4YW1wbGVcbiAqIHNldERlZmF1bHRPcHRpb25zKHsgd2Vla1N0YXJzT246IDEsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogY29uc3QgcmVzdWx0ID0gZ2V0RGVmYXVsdE9wdGlvbnMoKVxuICogLy89PiB7IHdlZWtTdGFyc09uOiAxLCBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRJbnRlcm5hbERlZmF1bHRPcHRpb25zKCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERlZmF1bHRPcHRpb25zO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldEhvdXJzXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGhvdXJzIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBob3VycyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGhvdXJzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEdldCB0aGUgaG91cnMgb2YgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGdldEhvdXJzKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUpKVxuICogLy89PiAxMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG91cnMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgaG91cnMgPSBfZGF0ZS5nZXRIb3VycygpO1xuICByZXR1cm4gaG91cnM7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SG91cnM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPRGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBpcyA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSBldGMuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgSVNPIHdlZWsgaXMgMjYgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT0RheShuZXcgRGF0ZSgyMDEyLCAxLCAyNikpXG4gKiAvLz0+IDdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT0RheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBsZXQgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG5cbiAgaWYgKGRheSA9PT0gMCkge1xuICAgIGRheSA9IDc7XG4gIH1cblxuICByZXR1cm4gZGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT0RheTtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mSVNPV2VlayhfZGF0ZSkgLSArc3RhcnRPZklTT1dlZWtZZWFyKF9kYXRlKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZXZWVrKF9kYXRlLCBvcHRpb25zKSAtICtzdGFydE9mV2Vla1llYXIoX2RhdGUsIG9wdGlvbnMpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3ROb3cgfSBmcm9tIFwiLi9jb25zdHJ1Y3ROb3cubWpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiLi9pc0RhdGUubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGUpXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdmFsaWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoZGF0ZSkge1xuICBpZiAoIWlzRGF0ZShkYXRlKSAmJiB0eXBlb2YgZGF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoX2RhdGUpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zPy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiBcInN0YW5kYWxvbmVcIjtcblxuICAgIGxldCB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJmb3JtYXR0aW5nXCIgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9XG4gICAgICAgIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIGZpbmRLZXkocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSk7XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKVxuICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmXG4gICAgICBwcmVkaWNhdGUob2JqZWN0W2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSlcbiAgICAgIDogcGFyc2VSZXN1bHRbMF07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLm1qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLm1qc1wiO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5leHBvcnQgY29uc3QgZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn07XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5VUztcbiIsImNvbnN0IGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIHNlY29uZFwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiBcIjEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogXCJoYWxmIGEgbWludXRlXCIsXG5cbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICB4TWludXRlczoge1xuICAgIG9uZTogXCIxIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBob3VyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeEhvdXJzOiB7XG4gICAgb25lOiBcIjEgaG91clwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhEYXlzOiB7XG4gICAgb25lOiBcIjEgZGF5XCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGRheXNcIixcbiAgfSxcblxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogXCJhYm91dCAxIHdlZWtcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICB4V2Vla3M6IHtcbiAgICBvbmU6IFwiMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiBcImFib3V0IDEgbW9udGhcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogXCIxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIHhZZWFyczoge1xuICAgIG9uZTogXCIxIHllYXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm92ZXIgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwib3ZlciB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWxtb3N0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFsbW9zdCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREaXN0YW5jZSA9ICh0b2tlbiwgY291bnQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKFwie3tjb3VudH19XCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnM/LmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiaW4gXCIgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBcIiBhZ29cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IGJ1aWxkRm9ybWF0TG9uZ0ZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzXCI7XG5cbmNvbnN0IGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUsIE1NTU0gZG8sIHlcIixcbiAgbG9uZzogXCJNTU1NIGRvLCB5XCIsXG4gIG1lZGl1bTogXCJNTU0gZCwgeVwiLFxuICBzaG9ydDogXCJNTS9kZC95eXl5XCIsXG59O1xuXG5jb25zdCB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICBsb25nOiBcImg6bW06c3MgYSB6XCIsXG4gIG1lZGl1bTogXCJoOm1tOnNzIGFcIixcbiAgc2hvcnQ6IFwiaDptbSBhXCIsXG59O1xuXG5jb25zdCBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxuICBzaG9ydDogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxufTtcbiIsImNvbnN0IGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogXCJQXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UmVsYXRpdmUgPSAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSA9PlxuICBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4iLCJpbXBvcnQgeyBidWlsZExvY2FsaXplRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4ubWpzXCI7XG5cbmNvbnN0IGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJCXCIsIFwiQVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIkJDXCIsIFwiQURcIl0sXG4gIHdpZGU6IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXSxcbn07XG5cbmNvbnN0IHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlExXCIsIFwiUTJcIiwgXCJRM1wiLCBcIlE0XCJdLFxuICB3aWRlOiBbXCIxc3QgcXVhcnRlclwiLCBcIjJuZCBxdWFydGVyXCIsIFwiM3JkIHF1YXJ0ZXJcIiwgXCI0dGggcXVhcnRlclwiXSxcbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbmNvbnN0IG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXBcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXSxcblxuICB3aWRlOiBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxuICBzaG9ydDogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gIHdpZGU6IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IG9yZGluYWxOdW1iZXIgPSAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICBjb25zdCByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwic3RcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwibmRcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwicmRcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArIFwidGhcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcixcblxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBhcmd1bWVudENhbGxiYWNrOiAocXVhcnRlcikgPT4gcXVhcnRlciAtIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IGJ1aWxkTWF0Y2hGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi5tanNcIjtcbmltcG9ydCB7IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qc1wiO1xuXG5jb25zdCBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xuY29uc3QgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG5cbmNvbnN0IG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaSxcbn07XG5jb25zdCBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2ksXG59O1xuY29uc3QgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldLFxufTtcblxuY29uc3QgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG59O1xuY29uc3QgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFtcbiAgICAvXmovaSxcbiAgICAvXmYvaSxcbiAgICAvXm0vaSxcbiAgICAvXmEvaSxcbiAgICAvXm0vaSxcbiAgICAvXmovaSxcbiAgICAvXmovaSxcbiAgICAvXmEvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcblxuICBhbnk6IFtcbiAgICAvXmphL2ksXG4gICAgL15mL2ksXG4gICAgL15tYXIvaSxcbiAgICAvXmFwL2ksXG4gICAgL15tYXkvaSxcbiAgICAvXmp1bi9pLFxuICAgIC9eanVsL2ksXG4gICAgL15hdS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV0sXG59O1xuXG5jb25zdCBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2ksXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogKHZhbHVlKSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxuICB9KSxcblxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gICAgdmFsdWVDYWxsYmFjazogKGluZGV4KSA9PiBpbmRleCArIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL2dldERlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGxvbmdGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VycyB9IGZyb20gXCIuL3BhcnNlL19saWIvcGFyc2Vycy5tanNcIjtcbmltcG9ydCB7IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyIH0gZnJvbSBcIi4vcGFyc2UvX2xpYi9TZXR0ZXIubWpzXCI7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcbmV4cG9ydCB7IGxvbmdGb3JtYXR0ZXJzLCBwYXJzZXJzIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBwYXJzZX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5cbmNvbnN0IG5vdFdoaXRlc3BhY2VSZWdFeHAgPSAvXFxTLztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBwYXJzZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGF0ZSBwYXJzZWQgZnJvbSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmcuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyBpbiB0aGUgZm9ybWF0IHN0cmluZyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqXG4gKiBGb3JtYXQgb2YgdGhlIGZvcm1hdCBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDUgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBOb3QgYWxsIHRva2VucyBhcmUgY29tcGF0aWJsZS4gQ29tYmluYXRpb25zIHRoYXQgZG9uJ3QgbWFrZSBzZW5zZSBvciBjb3VsZCBsZWFkIHRvIGJ1Z3MgYXJlIHByb2hpYml0ZWRcbiAqIGFuZCB3aWxsIHRocm93IGBSYW5nZUVycm9yYC4gRm9yIGV4YW1wbGUgdXNhZ2Ugb2YgMjQtaG91ciBmb3JtYXQgdG9rZW4gd2l0aCBBTS9QTSB0b2tlbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwYXJzZSgnMjMgQU0nLCAnSEggYScsIG5ldyBEYXRlKCkpXG4gKiAvLz0+IFJhbmdlRXJyb3I6IFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBgSEhgIGFuZCBgYWAgYXQgdGhlIHNhbWUgdGltZVxuICogYGBgXG4gKlxuICogU2VlIHRoZSBjb21wYXRpYmlsaXR5IHRhYmxlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2UU9QVTN4VWhwbGxsNmR5b01tVlVYSEtsXzhDUkRzNl91ZUxtZXgzU29xd2h1b2xrdU4zTzA1bDRycXg1aDFkS1g4ZWI0NlVsLUNDU3JxL3B1Ymh0bWw/Z2lkPTAmc2luZ2xlPXRydWVcbiAqXG4gKiBBY2NlcHRlZCBmb3JtYXQgc3RyaW5nIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxQcmlvcnwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxNDAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCAxMzAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDk5OTkgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCAxMzAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDkwMDAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0LDYgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQsNiAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCAxMzAgfCBSICAgICAgIHwgLTQzLCAxLCAxOTAwLCAyMDE3LCA5OTk5LCAtOTk5OSAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlIgICAgICB8IC00MywgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDEsIDEyMywgOTk5LCAtOTk5ICAgICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDEsIDIwMTcsIDk5OTksIC05OTk5ICAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIsNCw1IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IDEzMCB8IHUgICAgICAgfCAtNDMsIDEsIDE5MDAsIDIwMTcsIDk5OTksIC05OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgOTksIC05OSAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTIzLCA5OTksIC05OTkgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMjAxNywgOTk5OSwgLTk5OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgMTIwIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgMTIwIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgMTEwIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgMTEwIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgMTAwIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgMTAwIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCAgOTAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgIDkwIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDUgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8ICA5MCB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCAgOTAgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDgwIHwgYS4uYWFhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgIDgwIHwgYi4uYmJiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgIDgwIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDYwIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDUwIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgIDQwIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCAgMzAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgIDIwIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCAgMTAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8ICAxMCB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgIE5BIHwgUCAgICAgICB8IDA1LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQICAgICAgfCBNYXkgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFAgICAgIHwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUCAgICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICB8IDIsNSw4IHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8ICBOQSB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgIE5BIHwgUHAgICAgICB8IDA1LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQcHAgICAgfCBNYXkgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFBwcCAgIHwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUHBwICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICB8IDIsNSw4IHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXIuXG4gKiAgICBJbiBgZm9ybWF0YCBmdW5jdGlvbiwgdGhleSB3aWxsIHByb2R1Y2UgZGlmZmVyZW50IHJlc3VsdDpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogICAgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBib3RoIGZvcm1hdHRpbmcgYW5kIHN0YW5kLWFsb25lIHVuaXRzIGludGVyY2hhbmdhYmx5LlxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZTpcbiAqICAgIC0gZm9yIG51bWVyaWNhbCB1bml0cyAoYHl5eXl5eXl5YCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBhIG51bWJlclxuICogICAgICBhcyB3aWRlIGFzIHRoZSBzZXF1ZW5jZVxuICogICAgLSBmb3IgdGV4dCB1bml0cyAoYE1NTU1NTU1NYCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCB0aGUgd2lkZXN0IHZhcmlhdGlvbiBvZiB0aGUgdW5pdC5cbiAqICAgICAgVGhlc2UgdmFyaWF0aW9ucyBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAzLiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA0LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIHdpbGwgdHJ5IHRvIGd1ZXNzIHRoZSBjZW50dXJ5IG9mIHR3byBkaWdpdCB5ZWFyIGJ5IHByb3hpbWl0eSB3aXRoIGByZWZlcmVuY2VEYXRlYDpcbiAqXG4gKiAgICBgcGFyc2UoJzUwJywgJ3l5JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gU2F0IEphbiAwMSAyMDUwIDAwOjAwOjAwYFxuICpcbiAqICAgIGBwYXJzZSgnNzUnLCAneXknLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBXZWQgSmFuIDAxIDE5NzUgMDA6MDA6MDBgXG4gKlxuICogICAgd2hpbGUgYHV1YCB3aWxsIGp1c3QgYXNzaWduIHRoZSB5ZWFyIGFzIGlzOlxuICpcbiAqICAgIGBwYXJzZSgnNTAnLCAndXUnLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBTYXQgSmFuIDAxIDAwNTAgMDA6MDA6MDBgXG4gKlxuICogICAgYHBhcnNlKCc3NScsICd1dScsIG5ldyBEYXRlKDIwMTgsIDAsIDEpKSAvLz0+IFR1ZSBKYW4gMDEgMDA3NSAwMDowMDowMGBcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtzZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9zZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbc2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3Mvc2V0V2Vla1llYXIpKS5cbiAqXG4gKiA1LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDYuIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogNy4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOC4gYFArYCB0b2tlbnMgZG8gbm90IGhhdmUgYSBkZWZpbmVkIHByaW9yaXR5IHNpbmNlIHRoZXkgYXJlIG1lcmVseSBhbGlhc2VzIHRvIG90aGVyIHRva2VucyBiYXNlZFxuICogICAgb24gdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiAgICB1c2luZyBgZW4tVVNgIGxvY2FsZTogYFBgID0+IGBNTS9kZC95eXl5YFxuICogICAgdXNpbmcgYGVuLVVTYCBsb2NhbGU6IGBwYCA9PiBgaGg6bW0gYWBcbiAqICAgIHVzaW5nIGBwdC1CUmAgbG9jYWxlOiBgUGAgPT4gYGRkL01NL3l5eXlgXG4gKiAgICB1c2luZyBgcHQtQlJgIGxvY2FsZTogYHBgID0+IGBISDptbWBcbiAqXG4gKiBWYWx1ZXMgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgZGF0ZSBpbiB0aGUgZGVzY2VuZGluZyBvcmRlciBvZiBpdHMgdW5pdCdzIHByaW9yaXR5LlxuICogVW5pdHMgb2YgYW4gZXF1YWwgcHJpb3JpdHkgb3ZlcndyaXRlIGVhY2ggb3RoZXIgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2UuXG4gKlxuICogSWYgbm8gdmFsdWVzIG9mIGhpZ2hlciBwcmlvcml0eSBhcmUgcGFyc2VkIChlLmcuIHdoZW4gcGFyc2luZyBzdHJpbmcgJ0phbnVhcnkgMXN0JyB3aXRob3V0IGEgeWVhciksXG4gKiB0aGUgdmFsdWVzIHdpbGwgYmUgdGFrZW4gZnJvbSAzcmQgYXJndW1lbnQgYHJlZmVyZW5jZURhdGVgIHdoaWNoIHdvcmtzIGFzIGEgY29udGV4dCBvZiBwYXJzaW5nLlxuICpcbiAqIGByZWZlcmVuY2VEYXRlYCBtdXN0IGJlIHBhc3NlZCBmb3IgY29ycmVjdCB3b3JrIG9mIHRoZSBmdW5jdGlvbi5cbiAqIElmIHlvdSdyZSBub3Qgc3VyZSB3aGljaCBgcmVmZXJlbmNlRGF0ZWAgdG8gc3VwcGx5LCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgRGF0ZTpcbiAqIGBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlgXG4gKiBJbiB0aGlzIGNhc2UgcGFyc2luZyB3aWxsIGJlIGRvbmUgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqIElmIGByZWZlcmVuY2VEYXRlYCBpcyBgSW52YWxpZCBEYXRlYCBvciBhIHZhbHVlIG5vdCBjb252ZXJ0aWJsZSB0byB2YWxpZCBgRGF0ZWAsXG4gKiB0aGVuIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogSWYgYGZvcm1hdFN0cmluZ2AgbWF0Y2hlcyB3aXRoIGBkYXRlU3RyaW5nYCBidXQgZG9lcyBub3QgcHJvdmlkZXMgdG9rZW5zLCBgcmVmZXJlbmNlRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBJZiBwYXJzaW5nIGZhaWxlZCwgYEludmFsaWQgRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVTdHIgLSBUaGUgc3RyaW5nIHRvIHBhcnNlXG4gKiBAcGFyYW0gZm9ybWF0U3RyIC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSByZWZlcmVuY2VEYXRlIC0gZGVmaW5lcyB2YWx1ZXMgbWlzc2luZyBmcm9tIHRoZSBwYXJzZWQgZGF0ZVN0cmluZ1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlXG4gKlxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbWF0Y2hgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDExIEZlYnJ1YXJ5IDIwMTQgZnJvbSBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDI4dGggb2YgRmVicnVhcnkgaW4gRXNwZXJhbnRvIGxvY2FsZSBpbiB0aGUgY29udGV4dCBvZiAyMDEwIHllYXI6XG4gKiBpbXBvcnQgZW8gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IHBhcnNlKCcyOC1hIGRlIGZlYnJ1YXJvJywgXCJkbyAnZGUnIE1NTU1cIiwgbmV3IERhdGUoMjAxMCwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb1xuICogfSlcbiAqIC8vPT4gU3VuIEZlYiAyOCAyMDEwIDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShkYXRlU3RyLCBmb3JtYXRTdHIsIHJlZmVyZW5jZURhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGlmIChmb3JtYXRTdHIgPT09IFwiXCIpIHtcbiAgICBpZiAoZGF0ZVN0ciA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIHRvRGF0ZShyZWZlcmVuY2VEYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdWJGbk9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGUsXG4gIH07XG5cbiAgLy8gSWYgdGltZXpvbmUgaXNuJ3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIHNldCB0byB0aGUgc3lzdGVtIHRpbWV6b25lXG4gIGNvbnN0IHNldHRlcnMgPSBbbmV3IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyKCldO1xuXG4gIGNvbnN0IHRva2VucyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyIGluIGxvbmdGb3JtYXR0ZXJzKSB7XG4gICAgICAgIGNvbnN0IGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpXG4gICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApO1xuXG4gIGNvbnN0IHVzZWRUb2tlbnMgPSBbXTtcblxuICBmb3IgKGxldCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICBpZiAoXG4gICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pXG4gICAgKSB7XG4gICAgICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXRTdHIsIGRhdGVTdHIpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbilcbiAgICApIHtcbiAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgZGF0ZVN0cik7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSB0b2tlblswXTtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICBjb25zdCB7IGluY29tcGF0aWJsZVRva2VucyB9ID0gcGFyc2VyO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jb21wYXRpYmxlVG9rZW5zKSkge1xuICAgICAgICBjb25zdCBpbmNvbXBhdGlibGVUb2tlbiA9IHVzZWRUb2tlbnMuZmluZChcbiAgICAgICAgICAodXNlZFRva2VuKSA9PlxuICAgICAgICAgICAgaW5jb21wYXRpYmxlVG9rZW5zLmluY2x1ZGVzKHVzZWRUb2tlbi50b2tlbikgfHxcbiAgICAgICAgICAgIHVzZWRUb2tlbi50b2tlbiA9PT0gZmlyc3RDaGFyYWN0ZXIsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbmNvbXBhdGlibGVUb2tlbikge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgYFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBcXGAke2luY29tcGF0aWJsZVRva2VuLmZ1bGxUb2tlbn1cXGAgYW5kIFxcYCR7dG9rZW59XFxgIGF0IHRoZSBzYW1lIHRpbWVgLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VyLmluY29tcGF0aWJsZVRva2VucyA9PT0gXCIqXCIgJiYgdXNlZFRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIGBUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gXFxgJHt0b2tlbn1cXGAgYW5kIGFueSBvdGhlciB0b2tlbiBhdCB0aGUgc2FtZSB0aW1lYCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdXNlZFRva2Vucy5wdXNoKHsgdG9rZW46IGZpcnN0Q2hhcmFjdGVyLCBmdWxsVG9rZW46IHRva2VuIH0pO1xuXG4gICAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlci5ydW4oXG4gICAgICAgIGRhdGVTdHIsXG4gICAgICAgIHRva2VuLFxuICAgICAgICBsb2NhbGUubWF0Y2gsXG4gICAgICAgIHN1YkZuT3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICAgIH1cblxuICAgICAgc2V0dGVycy5wdXNoKHBhcnNlUmVzdWx0LnNldHRlcik7XG5cbiAgICAgIGRhdGVTdHIgPSBwYXJzZVJlc3VsdC5yZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHRva2VuID09PSBcIicnXCIpIHtcbiAgICAgICAgdG9rZW4gPSBcIidcIjtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHRva2VuID0gY2xlYW5Fc2NhcGVkU3RyaW5nKHRva2VuKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3V0IHRva2VuIGZyb20gc3RyaW5nLCBvciwgaWYgc3RyaW5nIGRvZXNuJ3QgbWF0Y2ggdGhlIHRva2VuLCByZXR1cm4gSW52YWxpZCBEYXRlXG4gICAgICBpZiAoZGF0ZVN0ci5pbmRleE9mKHRva2VuKSA9PT0gMCkge1xuICAgICAgICBkYXRlU3RyID0gZGF0ZVN0ci5zbGljZSh0b2tlbi5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgcmVtYWluaW5nIGlucHV0IGNvbnRhaW5zIHNvbWV0aGluZyBvdGhlciB0aGFuIHdoaXRlc3BhY2VcbiAgaWYgKGRhdGVTdHIubGVuZ3RoID4gMCAmJiBub3RXaGl0ZXNwYWNlUmVnRXhwLnRlc3QoZGF0ZVN0cikpIHtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShyZWZlcmVuY2VEYXRlLCBOYU4pO1xuICB9XG5cbiAgY29uc3QgdW5pcXVlUHJpb3JpdHlTZXR0ZXJzID0gc2V0dGVyc1xuICAgIC5tYXAoKHNldHRlcikgPT4gc2V0dGVyLnByaW9yaXR5KVxuICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSlcbiAgICAuZmlsdGVyKChwcmlvcml0eSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHByaW9yaXR5KSA9PT0gaW5kZXgpXG4gICAgLm1hcCgocHJpb3JpdHkpID0+XG4gICAgICBzZXR0ZXJzXG4gICAgICAgIC5maWx0ZXIoKHNldHRlcikgPT4gc2V0dGVyLnByaW9yaXR5ID09PSBwcmlvcml0eSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIuc3ViUHJpb3JpdHkgLSBhLnN1YlByaW9yaXR5KSxcbiAgICApXG4gICAgLm1hcCgoc2V0dGVyQXJyYXkpID0+IHNldHRlckFycmF5WzBdKTtcblxuICBsZXQgZGF0ZSA9IHRvRGF0ZShyZWZlcmVuY2VEYXRlKTtcblxuICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgfVxuXG4gIGNvbnN0IGZsYWdzID0ge307XG4gIGZvciAoY29uc3Qgc2V0dGVyIG9mIHVuaXF1ZVByaW9yaXR5U2V0dGVycykge1xuICAgIGlmICghc2V0dGVyLnZhbGlkYXRlKGRhdGUsIHN1YkZuT3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKHJlZmVyZW5jZURhdGUsIE5hTik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gc2V0dGVyLnNldChkYXRlLCBmbGFncywgc3ViRm5PcHRpb25zKTtcbiAgICAvLyBSZXN1bHQgaXMgdHVwbGUgKGRhdGUsIGZsYWdzKVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgIGRhdGUgPSByZXN1bHRbMF07XG4gICAgICBPYmplY3QuYXNzaWduKGZsYWdzLCByZXN1bHRbMV0pO1xuICAgICAgLy8gUmVzdWx0IGlzIGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uc3RydWN0RnJvbShyZWZlcmVuY2VEYXRlLCBkYXRlKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7XG4iLCJpbXBvcnQgeyBWYWx1ZVNldHRlciB9IGZyb20gXCIuL1NldHRlci5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gIHJ1bihkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucyk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXR0ZXI6IG5ldyBWYWx1ZVNldHRlcihcbiAgICAgICAgcmVzdWx0LnZhbHVlLFxuICAgICAgICB0aGlzLnZhbGlkYXRlLFxuICAgICAgICB0aGlzLnNldCxcbiAgICAgICAgdGhpcy5wcmlvcml0eSxcbiAgICAgICAgdGhpcy5zdWJQcmlvcml0eSxcbiAgICAgICksXG4gICAgICByZXN0OiByZXN1bHQucmVzdCxcbiAgICB9O1xuICB9XG5cbiAgdmFsaWRhdGUoX3V0Y0RhdGUsIF92YWx1ZSwgX29wdGlvbnMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdHJhbnNwb3NlIH0gZnJvbSBcIi4uLy4uL3RyYW5zcG9zZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuY29uc3QgVElNRVpPTkVfVU5JVF9QUklPUklUWSA9IDEwO1xuXG5leHBvcnQgY2xhc3MgU2V0dGVyIHtcbiAgc3ViUHJpb3JpdHkgPSAwO1xuXG4gIHZhbGlkYXRlKF91dGNEYXRlLCBfb3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZVNldHRlciBleHRlbmRzIFNldHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbHVlLFxuXG4gICAgdmFsaWRhdGVWYWx1ZSxcblxuICAgIHNldFZhbHVlLFxuXG4gICAgcHJpb3JpdHksXG4gICAgc3ViUHJpb3JpdHksXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSA9IHZhbGlkYXRlVmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSA9IHNldFZhbHVlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBpZiAoc3ViUHJpb3JpdHkpIHtcbiAgICAgIHRoaXMuc3ViUHJpb3JpdHkgPSBzdWJQcmlvcml0eTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVWYWx1ZShkYXRlLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldChkYXRlLCBmbGFncywgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnNldFZhbHVlKGRhdGUsIGZsYWdzLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIgZXh0ZW5kcyBTZXR0ZXIge1xuICBwcmlvcml0eSA9IFRJTUVaT05FX1VOSVRfUFJJT1JJVFk7XG4gIHN1YlByaW9yaXR5ID0gLTE7XG4gIHNldChkYXRlLCBmbGFncykge1xuICAgIGlmIChmbGFncy50aW1lc3RhbXBJc1NldCkgcmV0dXJuIGRhdGU7XG4gICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgdHJhbnNwb3NlKGRhdGUsIERhdGUpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IG51bWVyaWNQYXR0ZXJucyA9IHtcbiAgbW9udGg6IC9eKDFbMC0yXXwwP1xcZCkvLCAvLyAwIHRvIDEyXG4gIGRhdGU6IC9eKDNbMC0xXXxbMC0yXT9cXGQpLywgLy8gMCB0byAzMVxuICBkYXlPZlllYXI6IC9eKDM2WzAtNl18M1swLTVdXFxkfFswLTJdP1xcZD9cXGQpLywgLy8gMCB0byAzNjZcbiAgd2VlazogL14oNVswLTNdfFswLTRdP1xcZCkvLCAvLyAwIHRvIDUzXG4gIGhvdXIyM2g6IC9eKDJbMC0zXXxbMC0xXT9cXGQpLywgLy8gMCB0byAyM1xuICBob3VyMjRoOiAvXigyWzAtNF18WzAtMV0/XFxkKS8sIC8vIDAgdG8gMjRcbiAgaG91cjExaDogL14oMVswLTFdfDA/XFxkKS8sIC8vIDAgdG8gMTFcbiAgaG91cjEyaDogL14oMVswLTJdfDA/XFxkKS8sIC8vIDAgdG8gMTJcbiAgbWludXRlOiAvXlswLTVdP1xcZC8sIC8vIDAgdG8gNTlcbiAgc2Vjb25kOiAvXlswLTVdP1xcZC8sIC8vIDAgdG8gNTlcblxuICBzaW5nbGVEaWdpdDogL15cXGQvLCAvLyAwIHRvIDlcbiAgdHdvRGlnaXRzOiAvXlxcZHsxLDJ9LywgLy8gMCB0byA5OVxuICB0aHJlZURpZ2l0czogL15cXGR7MSwzfS8sIC8vIDAgdG8gOTk5XG4gIGZvdXJEaWdpdHM6IC9eXFxkezEsNH0vLCAvLyAwIHRvIDk5OTlcblxuICBhbnlEaWdpdHNTaWduZWQ6IC9eLT9cXGQrLyxcbiAgc2luZ2xlRGlnaXRTaWduZWQ6IC9eLT9cXGQvLCAvLyAwIHRvIDksIC0wIHRvIC05XG4gIHR3b0RpZ2l0c1NpZ25lZDogL14tP1xcZHsxLDJ9LywgLy8gMCB0byA5OSwgLTAgdG8gLTk5XG4gIHRocmVlRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsM30vLCAvLyAwIHRvIDk5OSwgLTAgdG8gLTk5OVxuICBmb3VyRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsNH0vLCAvLyAwIHRvIDk5OTksIC0wIHRvIC05OTk5XG59O1xuXG5leHBvcnQgY29uc3QgdGltZXpvbmVQYXR0ZXJucyA9IHtcbiAgYmFzaWNPcHRpb25hbE1pbnV0ZXM6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KT98Wi8sXG4gIGJhc2ljOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSl8Wi8sXG4gIGJhc2ljT3B0aW9uYWxTZWNvbmRzOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSkoKFxcZHsyfSkpP3xaLyxcbiAgZXh0ZW5kZWQ6IC9eKFsrLV0pKFxcZHsyfSk6KFxcZHsyfSl8Wi8sXG4gIGV4dGVuZGVkT3B0aW9uYWxTZWNvbmRzOiAvXihbKy1dKShcXGR7Mn0pOihcXGR7Mn0pKDooXFxkezJ9KSk/fFovLFxufTtcbiIsImltcG9ydCB7IEVyYVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRXJhUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgWWVhclBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvWWVhclBhcnNlci5tanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1llYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0xvY2FsV2Vla1llYXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09XZWVrWWVhclBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSVNPV2Vla1llYXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBFeHRlbmRlZFllYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0V4dGVuZGVkWWVhclBhcnNlci5tanNcIjtcbmltcG9ydCB7IFF1YXJ0ZXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL1F1YXJ0ZXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lUXVhcnRlclBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBNb250aFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvTW9udGhQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lTW9udGhQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL1N0YW5kQWxvbmVNb250aFBhcnNlci5tanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1BhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvTG9jYWxXZWVrUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSVNPV2Vla1BhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSVNPV2Vla1BhcnNlci5tanNcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0RhdGVQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBEYXlPZlllYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0RheU9mWWVhclBhcnNlci5tanNcIjtcbmltcG9ydCB7IERheVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRGF5UGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgTG9jYWxEYXlQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0xvY2FsRGF5UGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9TdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09EYXlQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0lTT0RheVBhcnNlci5tanNcIjtcbmltcG9ydCB7IEFNUE1QYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0FNUE1QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBBTVBNTWlkbmlnaHRQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0FNUE1NaWRuaWdodFBhcnNlci5tanNcIjtcbmltcG9ydCB7IERheVBlcmlvZFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRGF5UGVyaW9kUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSG91cjF0bzEyUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9Ib3VyMXRvMTJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBIb3VyMHRvMjNQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0hvdXIwdG8yM1BhcnNlci5tanNcIjtcbmltcG9ydCB7IEhvdXIwVG8xMVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSG91cjBUbzExUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSG91cjFUbzI0UGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9Ib3VyMVRvMjRQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBNaW51dGVQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL01pbnV0ZVBhcnNlci5tanNcIjtcbmltcG9ydCB7IFNlY29uZFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvU2Vjb25kUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgRnJhY3Rpb25PZlNlY29uZFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRnJhY3Rpb25PZlNlY29uZFBhcnNlci5tanNcIjtcbmltcG9ydCB7IElTT1RpbWV6b25lV2l0aFpQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0lTT1RpbWV6b25lV2l0aFpQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09UaW1lem9uZVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSVNPVGltZXpvbmVQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9UaW1lc3RhbXBTZWNvbmRzUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9UaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBQICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6KiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYHBhcnNlYCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSXQncyBvaywgd2Ugd2FudCBhbnkgaGVyZVxuZXhwb3J0IGNvbnN0IHBhcnNlcnMgPSB7XG4gIEc6IG5ldyBFcmFQYXJzZXIoKSxcbiAgeTogbmV3IFllYXJQYXJzZXIoKSxcbiAgWTogbmV3IExvY2FsV2Vla1llYXJQYXJzZXIoKSxcbiAgUjogbmV3IElTT1dlZWtZZWFyUGFyc2VyKCksXG4gIHU6IG5ldyBFeHRlbmRlZFllYXJQYXJzZXIoKSxcbiAgUTogbmV3IFF1YXJ0ZXJQYXJzZXIoKSxcbiAgcTogbmV3IFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyKCksXG4gIE06IG5ldyBNb250aFBhcnNlcigpLFxuICBMOiBuZXcgU3RhbmRBbG9uZU1vbnRoUGFyc2VyKCksXG4gIHc6IG5ldyBMb2NhbFdlZWtQYXJzZXIoKSxcbiAgSTogbmV3IElTT1dlZWtQYXJzZXIoKSxcbiAgZDogbmV3IERhdGVQYXJzZXIoKSxcbiAgRDogbmV3IERheU9mWWVhclBhcnNlcigpLFxuICBFOiBuZXcgRGF5UGFyc2VyKCksXG4gIGU6IG5ldyBMb2NhbERheVBhcnNlcigpLFxuICBjOiBuZXcgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyKCksXG4gIGk6IG5ldyBJU09EYXlQYXJzZXIoKSxcbiAgYTogbmV3IEFNUE1QYXJzZXIoKSxcbiAgYjogbmV3IEFNUE1NaWRuaWdodFBhcnNlcigpLFxuICBCOiBuZXcgRGF5UGVyaW9kUGFyc2VyKCksXG4gIGg6IG5ldyBIb3VyMXRvMTJQYXJzZXIoKSxcbiAgSDogbmV3IEhvdXIwdG8yM1BhcnNlcigpLFxuICBLOiBuZXcgSG91cjBUbzExUGFyc2VyKCksXG4gIGs6IG5ldyBIb3VyMVRvMjRQYXJzZXIoKSxcbiAgbTogbmV3IE1pbnV0ZVBhcnNlcigpLFxuICBzOiBuZXcgU2Vjb25kUGFyc2VyKCksXG4gIFM6IG5ldyBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyKCksXG4gIFg6IG5ldyBJU09UaW1lem9uZVdpdGhaUGFyc2VyKCksXG4gIHg6IG5ldyBJU09UaW1lem9uZVBhcnNlcigpLFxuICB0OiBuZXcgVGltZXN0YW1wU2Vjb25kc1BhcnNlcigpLFxuICBUOiBuZXcgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyKCksXG59O1xuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IGRheVBlcmlvZEVudW1Ub0hvdXJzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgQU1QTU1pZG5pZ2h0UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA4MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0SG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcImFcIiwgXCJCXCIsIFwiSFwiLCBcImtcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBkYXlQZXJpb2RFbnVtVG9Ib3VycyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEFNUE1QYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDgwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRIb3VycyhkYXlQZXJpb2RFbnVtVG9Ib3Vycyh2YWx1ZSksIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYlwiLCBcIkJcIiwgXCJIXCIsIFwia1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQge1xuICBpc0xlYXBZZWFySW5kZXgsXG4gIHBhcnNlTkRpZ2l0cyxcbiAgcGFyc2VOdW1lcmljUGF0dGVybixcbn0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5jb25zdCBEQVlTX0lOX01PTlRIID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuY29uc3QgREFZU19JTl9NT05USF9MRUFQX1lFQVIgPSBbXG4gIDMxLCAyOSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEsXG5dO1xuXG4vLyBEYXkgb2YgdGhlIG1vbnRoXG5leHBvcnQgY2xhc3MgRGF0ZVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG4gIHN1YlByaW9yaXR5ID0gMTtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZGF0ZSwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiZG9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBpZiAoaXNMZWFwWWVhcikge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gREFZU19JTl9NT05USF9MRUFQX1lFQVJbbW9udGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0RGF0ZSh2YWx1ZSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNMZWFwWWVhckluZGV4LFxuICBwYXJzZU5EaWdpdHMsXG4gIHBhcnNlTnVtZXJpY1BhdHRlcm4sXG59IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIERheU9mWWVhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG5cbiAgc3VicHJpb3JpdHkgPSAxO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJEXCI6XG4gICAgICBjYXNlIFwiRERcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmRheU9mWWVhciwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiRG9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcbiAgICBpZiAoaXNMZWFwWWVhcikge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMzY2O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAzNjU7XG4gICAgfVxuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldE1vbnRoKDAsIHZhbHVlKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwiWVwiLFxuICAgIFwiUlwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwiTVwiLFxuICAgIFwiTFwiLFxuICAgIFwid1wiLFxuICAgIFwiSVwiLFxuICAgIFwiZFwiLFxuICAgIFwiRVwiLFxuICAgIFwiaVwiLFxuICAgIFwiZVwiLFxuICAgIFwiY1wiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xufVxuIiwiaW1wb3J0IHsgc2V0RGF5IH0gZnJvbSBcIi4uLy4uLy4uL3NldERheS5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5cbi8vIERheSBvZiB3ZWVrXG5leHBvcnQgY2xhc3MgRGF5UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA5MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGRhdGUgPSBzZXREYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJEXCIsIFwiaVwiLCBcImVcIiwgXCJjXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgZGF5UGVyaW9kRW51bVRvSG91cnMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbmV4cG9ydCBjbGFzcyBEYXlQZXJpb2RQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDgwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRIb3VycyhkYXlQZXJpb2RFbnVtVG9Ib3Vycyh2YWx1ZSksIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYVwiLCBcImJcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBFcmFQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDE0MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgZmxhZ3MuZXJhID0gdmFsdWU7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIlJcIiwgXCJ1XCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRZZWFyUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBpZiAodG9rZW4gPT09IFwidVwiKSB7XG4gICAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKDQsIGRhdGVTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQodG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIkdcIiwgXCJ5XCIsIFwiWVwiLCBcIlJcIiwgXCJ3XCIsIFwiSVwiLCBcImlcIiwgXCJlXCIsIFwiY1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAzMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbikge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+XG4gICAgICBNYXRoLnRydW5jKHZhbHVlICogTWF0aC5wb3coMTAsIC10b2tlbi5sZW5ndGggKyAzKSk7XG4gICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNaWxsaXNlY29uZHModmFsdWUpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIwVG8xMVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIktcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMWgsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIktvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMTE7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGlzUE0gPSBkYXRlLmdldEhvdXJzKCkgPj0gMTI7XG4gICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSArIDEyLCAwLCAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiaFwiLCBcIkhcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIwdG8yM1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIyM2gsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIkhvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMjM7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0SG91cnModmFsdWUsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYVwiLCBcImJcIiwgXCJoXCIsIFwiS1wiLCBcImtcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzLCBwYXJzZU51bWVyaWNQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgSG91cjFUbzI0UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA3MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwia1wiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuaG91cjI0aCwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwia29cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAyNDtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgY29uc3QgaG91cnMgPSB2YWx1ZSA8PSAyNCA/IHZhbHVlICUgMjQgOiB2YWx1ZTtcbiAgICBkYXRlLnNldEhvdXJzKGhvdXJzLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcImFcIiwgXCJiXCIsIFwiaFwiLCBcIkhcIiwgXCJLXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIxdG8xMlBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMmgsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcImhvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMTI7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGlzUE0gPSBkYXRlLmdldEhvdXJzKCkgPj0gMTI7XG4gICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSArIDEyLCAwLCAwLCAwKTtcbiAgICB9IGVsc2UgaWYgKCFpc1BNICYmIHZhbHVlID09PSAxMikge1xuICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiSFwiLCBcIktcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBzZXRJU09EYXkgfSBmcm9tIFwiLi4vLi4vLi4vc2V0SVNPRGF5Lm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIElTTyBkYXkgb2Ygd2Vla1xuZXhwb3J0IGNsYXNzIElTT0RheVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgY2FzZSBcImlpXCI6IC8vIDAyXG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgICB9KSB8fFxuICAgICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNztcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZSA9IHNldElTT0RheShkYXRlLCB2YWx1ZSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIllcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcIkVcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuaW1wb3J0IHsgdGltZXpvbmVQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lem9uZVBhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIFRpbWV6b25lIChJU08tODYwMSlcbmV4cG9ydCBjbGFzcyBJU09UaW1lem9uZVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4oXG4gICAgICAgICAgdGltZXpvbmVQYXR0ZXJucy5iYXNpY09wdGlvbmFsTWludXRlcyxcbiAgICAgICAgICBkYXRlU3RyaW5nLFxuICAgICAgICApO1xuICAgICAgY2FzZSBcInh4XCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybihcbiAgICAgICAgICB0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKFxuICAgICAgICAgIHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsXG4gICAgICAgICAgZGF0ZVN0cmluZyxcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJ4eHhcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmV4dGVuZGVkLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSByZXR1cm4gZGF0ZTtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAgICAgIGRhdGUsXG4gICAgICBkYXRlLmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkgLSB2YWx1ZSxcbiAgICApO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIiwgXCJYXCJdO1xufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5pbXBvcnQgeyB0aW1lem9uZVBhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWV6b25lUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gVGltZXpvbmUgKElTTy04NjAxLiArMDA6MDAgaXMgYCdaJ2ApXG5leHBvcnQgY2xhc3MgSVNPVGltZXpvbmVXaXRoWlBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4oXG4gICAgICAgICAgdGltZXpvbmVQYXR0ZXJucy5iYXNpY09wdGlvbmFsTWludXRlcyxcbiAgICAgICAgICBkYXRlU3RyaW5nLFxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlhYXCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJYWFhYXCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybihcbiAgICAgICAgICB0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKFxuICAgICAgICAgIHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsXG4gICAgICAgICAgZGF0ZVN0cmluZyxcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJYWFhcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmV4dGVuZGVkLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSByZXR1cm4gZGF0ZTtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAgICAgIGRhdGUsXG4gICAgICBkYXRlLmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkgLSB2YWx1ZSxcbiAgICApO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIiwgXCJ4XCJdO1xufVxuIiwiaW1wb3J0IHsgc2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi8uLi9zZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi4vLi4vLi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gSVNPIHdlZWsgb2YgeWVhclxuZXhwb3J0IGNsYXNzIElTT1dlZWtQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEwMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiSVwiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMud2VlaywgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiSW9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA1MztcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKHNldElTT1dlZWsoZGF0ZSwgdmFsdWUpKTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIllcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbmV4cG9ydCBjbGFzcyBJU09XZWVrWWVhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTMwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgaWYgKHRva2VuID09PSBcIlJcIikge1xuICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0c1NpZ25lZCg0LCBkYXRlU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGZpcnN0V2Vla09mWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gICAgZmlyc3RXZWVrT2ZZZWFyLnNldEZ1bGxZZWFyKHZhbHVlLCAwLCA0KTtcbiAgICBmaXJzdFdlZWtPZlllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZpcnN0V2Vla09mWWVhcik7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJHXCIsXG4gICAgXCJ5XCIsXG4gICAgXCJZXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJRXCIsXG4gICAgXCJxXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBzZXREYXkgfSBmcm9tIFwiLi4vLi4vLi4vc2V0RGF5Lm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIExvY2FsIGRheSBvZiB3ZWVrXG5leHBvcnQgY2xhc3MgTG9jYWxEYXlQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDkwO1xuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB2YWx1ZUNhbGxiYWNrID0gKHZhbHVlKSA9PiB7XG4gICAgICAvLyBXZSB3YW50IGhlcmUgZmxvb3IgaW5zdGVhZCBvZiB0cnVuYywgc28gd2UgZ2V0IC03IGZvciB2YWx1ZSAwIGluc3RlYWQgb2YgMFxuICAgICAgY29uc3Qgd2hvbGVXZWVrRGF5cyA9IE1hdGguZmxvb3IoKHZhbHVlIC0gMSkgLyA3KSAqIDc7XG4gICAgICByZXR1cm4gKCh2YWx1ZSArIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgNikgJSA3KSArIHdob2xlV2Vla0RheXM7XG4gICAgfTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDNcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICBjYXNlIFwiZWVcIjogLy8gMDNcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIC8vIDNyZFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwiZGF5XCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNjtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgZGF0ZSA9IHNldERheShkYXRlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIlJcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcIkVcIixcbiAgICBcImlcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IHNldFdlZWsgfSBmcm9tIFwiLi4vLi4vLi4vc2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIExvY2FsIHdlZWsgb2YgeWVhclxuZXhwb3J0IGNsYXNzIExvY2FsV2Vla1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTAwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy53ZWVrLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJ3b1wiOlxuICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDUzO1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc3RhcnRPZldlZWsoc2V0V2VlayhkYXRlLCB2YWx1ZSwgb3B0aW9ucyksIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwieVwiLFxuICAgIFwiUlwiLFxuICAgIFwidVwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwiTVwiLFxuICAgIFwiTFwiLFxuICAgIFwiSVwiLFxuICAgIFwiZFwiLFxuICAgIFwiRFwiLFxuICAgIFwiaVwiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xufVxuIiwiaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuLi8uLi8uLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgbm9ybWFsaXplVHdvRGlnaXRZZWFyLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbmV4cG9ydCBjbGFzcyBMb2NhbFdlZWtZZWFyUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh5ZWFyKSA9PiAoe1xuICAgICAgeWVhcixcbiAgICAgIGlzVHdvRGlnaXRZZWFyOiB0b2tlbiA9PT0gXCJZWVwiLFxuICAgIH0pO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyg0LCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICBjYXNlIFwiWW9cIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKFxuICAgICAgICAgIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogXCJ5ZWFyXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmlzVHdvRGlnaXRZZWFyIHx8IHZhbHVlLnllYXIgPiAwO1xuICB9XG5cbiAgc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodmFsdWUuaXNUd29EaWdpdFllYXIpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRUd29EaWdpdFllYXIgPSBub3JtYWxpemVUd29EaWdpdFllYXIoXG4gICAgICAgIHZhbHVlLnllYXIsXG4gICAgICAgIGN1cnJlbnRZZWFyLFxuICAgICAgKTtcbiAgICAgIGRhdGUuc2V0RnVsbFllYXIoXG4gICAgICAgIG5vcm1hbGl6ZWRUd29EaWdpdFllYXIsXG4gICAgICAgIDAsXG4gICAgICAgIG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgICAgKTtcbiAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29uc3QgeWVhciA9XG4gICAgICAhKFwiZXJhXCIgaW4gZmxhZ3MpIHx8IGZsYWdzLmVyYSA9PT0gMSA/IHZhbHVlLnllYXIgOiAxIC0gdmFsdWUueWVhcjtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIsIDAsIG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIlJcIixcbiAgICBcInVcIixcbiAgICBcIlFcIixcbiAgICBcInFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzLCBwYXJzZU51bWVyaWNQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgTWludXRlUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA2MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwibVwiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMubWludXRlLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJtb1wiOlxuICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNTk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0TWludXRlcyh2YWx1ZSwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIE1vbnRoUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwiWVwiLFxuICAgIFwiUlwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwiTFwiLFxuICAgIFwid1wiLFxuICAgIFwiSVwiLFxuICAgIFwiRFwiLFxuICAgIFwiaVwiLFxuICAgIFwiZVwiLFxuICAgIFwiY1wiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xuXG4gIHByaW9yaXR5ID0gMTEwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+IHZhbHVlIC0gMTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5tb250aCwgZGF0ZVN0cmluZyksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoMiwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwibW9udGhcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCh2YWx1ZSwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFF1YXJ0ZXJQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEyMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgY2FzZSBcIlFRXCI6IC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNDtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJZXCIsXG4gICAgXCJSXCIsXG4gICAgXCJxXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJJXCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJpXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFNlY29uZFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnNlY29uZCwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwic29cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDU5O1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldFNlY29uZHModmFsdWUsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBzZXREYXkgfSBmcm9tIFwiLi4vLi4vLi4vc2V0RGF5Lm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG5leHBvcnQgY2xhc3MgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA5MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB2YWx1ZUNhbGxiYWNrID0gKHZhbHVlKSA9PiB7XG4gICAgICAvLyBXZSB3YW50IGhlcmUgZmxvb3IgaW5zdGVhZCBvZiB0cnVuYywgc28gd2UgZ2V0IC03IGZvciB2YWx1ZSAwIGluc3RlYWQgb2YgMFxuICAgICAgY29uc3Qgd2hvbGVXZWVrRGF5cyA9IE1hdGguZmxvb3IoKHZhbHVlIC0gMSkgLyA3KSAqIDc7XG4gICAgICByZXR1cm4gKCh2YWx1ZSArIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgNikgJSA3KSArIHdob2xlV2Vla0RheXM7XG4gICAgfTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDNcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICBjYXNlIFwiY2NcIjogLy8gMDNcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIC8vIDNyZFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwiZGF5XCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNjtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgZGF0ZSA9IHNldERheShkYXRlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIlJcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcIkVcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YW5kQWxvbmVNb250aFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTEwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+IHZhbHVlIC0gMTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5tb250aCwgZGF0ZVN0cmluZyksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoMiwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwibW9udGhcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCh2YWx1ZSwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFuZEFsb25lUXVhcnRlclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTIwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICBjYXNlIFwicXFcIjogLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA0O1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldE1vbnRoKCh2YWx1ZSAtIDEpICogMywgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZUFueURpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMjA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZykge1xuICAgIHJldHVybiBwYXJzZUFueURpZ2l0c1NpZ25lZChkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgcmV0dXJuIFtjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSwgeyB0aW1lc3RhbXBJc1NldDogdHJ1ZSB9XTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFwiKlwiO1xufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgVGltZXN0YW1wU2Vjb25kc1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNDA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZykge1xuICAgIHJldHVybiBwYXJzZUFueURpZ2l0c1NpZ25lZChkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgcmV0dXJuIFtjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlICogMTAwMCksIHsgdGltZXN0YW1wSXNTZXQ6IHRydWUgfV07XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBcIipcIjtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgbm9ybWFsaXplVHdvRGlnaXRZZWFyLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfUGF0dGVybnNcbi8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbi8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbi8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbi8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbi8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbi8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbi8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbmV4cG9ydCBjbGFzcyBZZWFyUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMzA7XG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIllcIiwgXCJSXCIsIFwidVwiLCBcIndcIiwgXCJJXCIsIFwiaVwiLCBcImVcIiwgXCJjXCIsIFwidFwiLCBcIlRcIl07XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh5ZWFyKSA9PiAoe1xuICAgICAgeWVhcixcbiAgICAgIGlzVHdvRGlnaXRZZWFyOiB0b2tlbiA9PT0gXCJ5eVwiLFxuICAgIH0pO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyg0LCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICBjYXNlIFwieW9cIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKFxuICAgICAgICAgIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogXCJ5ZWFyXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmlzVHdvRGlnaXRZZWFyIHx8IHZhbHVlLnllYXIgPiAwO1xuICB9XG5cbiAgc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgaWYgKHZhbHVlLmlzVHdvRGlnaXRZZWFyKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkVHdvRGlnaXRZZWFyID0gbm9ybWFsaXplVHdvRGlnaXRZZWFyKFxuICAgICAgICB2YWx1ZS55ZWFyLFxuICAgICAgICBjdXJyZW50WWVhcixcbiAgICAgICk7XG4gICAgICBkYXRlLnNldEZ1bGxZZWFyKG5vcm1hbGl6ZWRUd29EaWdpdFllYXIsIDAsIDEpO1xuICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHllYXIgPVxuICAgICAgIShcImVyYVwiIGluIGZsYWdzKSB8fCBmbGFncy5lcmEgPT09IDEgPyB2YWx1ZS55ZWFyIDogMSAtIHZhbHVlLnllYXI7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCAwLCAxKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBtaWxsaXNlY29uZHNJbkhvdXIsXG4gIG1pbGxpc2Vjb25kc0luTWludXRlLFxuICBtaWxsaXNlY29uZHNJblNlY29uZCxcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFZhbHVlKHBhcnNlRm5SZXN1bHQsIG1hcEZuKSB7XG4gIGlmICghcGFyc2VGblJlc3VsdCkge1xuICAgIHJldHVybiBwYXJzZUZuUmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogbWFwRm4ocGFyc2VGblJlc3VsdC52YWx1ZSksXG4gICAgcmVzdDogcGFyc2VGblJlc3VsdC5yZXN0LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1lcmljUGF0dGVybihwYXR0ZXJuLCBkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gZGF0ZVN0cmluZy5tYXRjaChwYXR0ZXJuKTtcblxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBwYXJzZUludChtYXRjaFJlc3VsdFswXSwgMTApLFxuICAgIHJlc3Q6IGRhdGVTdHJpbmcuc2xpY2UobWF0Y2hSZXN1bHRbMF0ubGVuZ3RoKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHBhdHRlcm4sIGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBkYXRlU3RyaW5nLm1hdGNoKHBhdHRlcm4pO1xuXG4gIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIElucHV0IGlzICdaJ1xuICBpZiAobWF0Y2hSZXN1bHRbMF0gPT09IFwiWlwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZSgxKSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc2lnbiA9IG1hdGNoUmVzdWx0WzFdID09PSBcIitcIiA/IDEgOiAtMTtcbiAgY29uc3QgaG91cnMgPSBtYXRjaFJlc3VsdFsyXSA/IHBhcnNlSW50KG1hdGNoUmVzdWx0WzJdLCAxMCkgOiAwO1xuICBjb25zdCBtaW51dGVzID0gbWF0Y2hSZXN1bHRbM10gPyBwYXJzZUludChtYXRjaFJlc3VsdFszXSwgMTApIDogMDtcbiAgY29uc3Qgc2Vjb25kcyA9IG1hdGNoUmVzdWx0WzVdID8gcGFyc2VJbnQobWF0Y2hSZXN1bHRbNV0sIDEwKSA6IDA7XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTpcbiAgICAgIHNpZ24gKlxuICAgICAgKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICtcbiAgICAgICAgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICtcbiAgICAgICAgc2Vjb25kcyAqIG1pbGxpc2Vjb25kc0luU2Vjb25kKSxcbiAgICByZXN0OiBkYXRlU3RyaW5nLnNsaWNlKG1hdGNoUmVzdWx0WzBdLmxlbmd0aCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFueURpZ2l0c1NpZ25lZChkYXRlU3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5hbnlEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VORGlnaXRzKG4sIGRhdGVTdHJpbmcpIHtcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnNpbmdsZURpZ2l0LCBkYXRlU3RyaW5nKTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudHdvRGlnaXRzLCBkYXRlU3RyaW5nKTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudGhyZWVEaWdpdHMsIGRhdGVTdHJpbmcpO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5mb3VyRGlnaXRzLCBkYXRlU3RyaW5nKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obmV3IFJlZ0V4cChcIl5cXFxcZHsxLFwiICsgbiArIFwifVwiKSwgZGF0ZVN0cmluZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTkRpZ2l0c1NpZ25lZChuLCBkYXRlU3RyaW5nKSB7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5zaW5nbGVEaWdpdFNpZ25lZCwgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnR3b0RpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnRocmVlRGlnaXRzU2lnbmVkLCBkYXRlU3RyaW5nKTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZm91ckRpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG5ldyBSZWdFeHAoXCJeLT9cXFxcZHsxLFwiICsgbiArIFwifVwiKSwgZGF0ZVN0cmluZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheVBlcmlvZEVudW1Ub0hvdXJzKGRheVBlcmlvZCkge1xuICBzd2l0Y2ggKGRheVBlcmlvZCkge1xuICAgIGNhc2UgXCJtb3JuaW5nXCI6XG4gICAgICByZXR1cm4gNDtcbiAgICBjYXNlIFwiZXZlbmluZ1wiOlxuICAgICAgcmV0dXJuIDE3O1xuICAgIGNhc2UgXCJwbVwiOlxuICAgIGNhc2UgXCJub29uXCI6XG4gICAgY2FzZSBcImFmdGVybm9vblwiOlxuICAgICAgcmV0dXJuIDEyO1xuICAgIGNhc2UgXCJhbVwiOlxuICAgIGNhc2UgXCJtaWRuaWdodFwiOlxuICAgIGNhc2UgXCJuaWdodFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVHdvRGlnaXRZZWFyKHR3b0RpZ2l0WWVhciwgY3VycmVudFllYXIpIHtcbiAgY29uc3QgaXNDb21tb25FcmEgPSBjdXJyZW50WWVhciA+IDA7XG4gIC8vIEFic29sdXRlIG51bWJlciBvZiB0aGUgY3VycmVudCB5ZWFyOlxuICAvLyAxIC0+IDEgQUNcbiAgLy8gMCAtPiAxIEJDXG4gIC8vIC0xIC0+IDIgQkNcbiAgY29uc3QgYWJzQ3VycmVudFllYXIgPSBpc0NvbW1vbkVyYSA/IGN1cnJlbnRZZWFyIDogMSAtIGN1cnJlbnRZZWFyO1xuXG4gIGxldCByZXN1bHQ7XG4gIGlmIChhYnNDdXJyZW50WWVhciA8PSA1MCkge1xuICAgIHJlc3VsdCA9IHR3b0RpZ2l0WWVhciB8fCAxMDA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmFuZ2VFbmQgPSBhYnNDdXJyZW50WWVhciArIDUwO1xuICAgIGNvbnN0IHJhbmdlRW5kQ2VudHVyeSA9IE1hdGgudHJ1bmMocmFuZ2VFbmQgLyAxMDApICogMTAwO1xuICAgIGNvbnN0IGlzUHJldmlvdXNDZW50dXJ5ID0gdHdvRGlnaXRZZWFyID49IHJhbmdlRW5kICUgMTAwO1xuICAgIHJlc3VsdCA9IHR3b0RpZ2l0WWVhciArIHJhbmdlRW5kQ2VudHVyeSAtIChpc1ByZXZpb3VzQ2VudHVyeSA/IDEwMCA6IDApO1xuICB9XG5cbiAgcmV0dXJuIGlzQ29tbW9uRXJhID8gcmVzdWx0IDogMSAtIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKTtcbn1cbiIsImltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiLi9hZGREYXlzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc2V0RGF5fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc2V0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIGRheSBvZiB0aGUgd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGRheSAtIFRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIG5ldyBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheSBvZiB0aGUgd2VlayBzZXRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IHdlZWsgZGF5IHRvIFN1bmRheSwgd2l0aCB0aGUgZGVmYXVsdCB3ZWVrU3RhcnRzT24gb2YgU3VuZGF5OlxuICogY29uc3QgcmVzdWx0ID0gc2V0RGF5KG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAwKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IHdlZWsgZGF5IHRvIFN1bmRheSwgd2l0aCBhIHdlZWtTdGFydHNPbiBvZiBNb25kYXk6XG4gKiBjb25zdCByZXN1bHQgPSBzZXREYXkobmV3IERhdGUoMjAxNCwgOCwgMSksIDAsIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5KGRhdGUsIGRheSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGN1cnJlbnREYXkgPSBfZGF0ZS5nZXREYXkoKTtcblxuICBjb25zdCByZW1haW5kZXIgPSBkYXkgJSA3O1xuICBjb25zdCBkYXlJbmRleCA9IChyZW1haW5kZXIgKyA3KSAlIDc7XG5cbiAgY29uc3QgZGVsdGEgPSA3IC0gd2Vla1N0YXJ0c09uO1xuICBjb25zdCBkaWZmID1cbiAgICBkYXkgPCAwIHx8IGRheSA+IDZcbiAgICAgID8gZGF5IC0gKChjdXJyZW50RGF5ICsgZGVsdGEpICUgNylcbiAgICAgIDogKChkYXlJbmRleCArIGRlbHRhKSAlIDcpIC0gKChjdXJyZW50RGF5ICsgZGVsdGEpICUgNyk7XG4gIHJldHVybiBhZGREYXlzKF9kYXRlLCBkaWZmKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzZXREYXk7XG4iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcIi4vYWRkRGF5cy5tanNcIjtcbmltcG9ydCB7IGdldElTT0RheSB9IGZyb20gXCIuL2dldElTT0RheS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzZXRJU09EYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFNldCB0aGUgZGF5IG9mIHRoZSBJU08gd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgZGF5IG9mIHRoZSBJU08gd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIElTTyB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheS5cbiAqIDcgaXMgdGhlIGluZGV4IG9mIFN1bmRheSwgMSBpcyB0aGUgaW5kZXggb2YgTW9uZGF5IGV0Yy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBkYXkgLSBUaGUgZGF5IG9mIHRoZSBJU08gd2VlayBvZiB0aGUgbmV3IGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5IG9mIHRoZSBJU08gd2VlayBzZXRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IFN1bmRheSB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc2V0SVNPRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA3KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldElTT0RheShkYXRlLCBkYXkpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGN1cnJlbnREYXkgPSBnZXRJU09EYXkoX2RhdGUpO1xuICBjb25zdCBkaWZmID0gZGF5IC0gY3VycmVudERheTtcbiAgcmV0dXJuIGFkZERheXMoX2RhdGUsIGRpZmYpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHNldElTT0RheTtcbiIsImltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi9nZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHNldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIElTTyB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBJU08gd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZSwgc2F2aW5nIHRoZSB3ZWVrZGF5IG51bWJlci5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gd2VlayAtIFRoZSBJU08gd2VlayBvZiB0aGUgbmV3IGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgSVNPIHdlZWsgc2V0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgNTNyZCBJU08gd2VlayB0byA3IEF1Z3VzdCAyMDA0OlxuICogY29uc3QgcmVzdWx0ID0gc2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA0LCA3LCA3KSwgNTMpXG4gKiAvLz0+IFNhdCBKYW4gMDEgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPV2VlayhkYXRlLCB3ZWVrKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZ2V0SVNPV2VlayhfZGF0ZSkgLSB3ZWVrO1xuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYgKiA3KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHNldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSBcIi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHNldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIGxvY2FsIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIGxvY2FsIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUsIHNhdmluZyB0aGUgd2Vla2RheSBudW1iZXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gd2VlayAtIFRoZSB3ZWVrIG9mIHRoZSBuZXcgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGxvY2FsIHdlZWsgc2V0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgMXN0IHdlZWsgdG8gMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM6XG4gKiBjb25zdCByZXN1bHQgPSBzZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCAxKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IHRoZSAxc3Qgd2VlayB0byAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk6XG4gKiBjb25zdCByZXN1bHQgPSBzZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCAxLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBTdW4gSmFuIDQgMjAwNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0V2VlayhkYXRlLCB3ZWVrLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZ2V0V2VlayhfZGF0ZSwgb3B0aW9ucykgLSB3ZWVrO1xuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYgKiA3KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHNldFdlZWs7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCB5ZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB5ZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gIGNvbnN0IGZpcnN0V2VlayA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vlay5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IF9kYXRlID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IGNsZWFuRGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgdHJhbnNwb3NlXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBUcmFuc3Bvc2UgdGhlIGRhdGUgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIHRyYW5zcG9zZXMgdGhlIGRhdGUgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yLiBJdCBoZWxwcyB5b3VcbiAqIHRvIHRyYW5zcG9zZSB0aGUgZGF0ZSBpbiB0aGUgc3lzdGVtIHRpbWUgem9uZSB0byBzYXkgYFVUQ0RhdGVgIG9yIGFueSBvdGhlclxuICogZGF0ZSBleHRlbnNpb24uXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlSW5wdXRUeXBlIC0gVGhlIGlucHV0IGBEYXRlYCB0eXBlIGRlcml2ZWQgZnJvbSB0aGUgcGFzc2VkIGFyZ3VtZW50LlxuICogQHR5cGVQYXJhbSBEYXRlT3V0cHV0VHlwZSAtIFRoZSBvdXRwdXQgYERhdGVgIHR5cGUgZGVyaXZlZCBmcm9tIHRoZSBwYXNzZWQgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIGZyb21EYXRlIC0gVGhlIGRhdGUgdG8gdXNlIHZhbHVlcyBmcm9tXG4gKiBAcGFyYW0gY29uc3RydWN0b3IgLSBUaGUgZGF0ZSBjb25zdHJ1Y3RvciB0byB1c2VcbiAqXG4gKiBAcmV0dXJucyBEYXRlIHRyYW5zcG9zZWQgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSBKdWx5IDEwLCAyMDIyIDAwOjAwIGluIGxvY2FsZSB0aW1lIHpvbmVcbiAqIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgyMDIyLCA2LCAxMClcbiAqIC8vPT4gJ1N1biBKdWwgMTAgMjAyMiAwMDowMDowMCBHTVQrMDgwMCAoU2luZ2Fwb3JlIFN0YW5kYXJkIFRpbWUpJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUcmFuc3Bvc2UgdGhlIGRhdGUgdG8gSnVseSAxMCwgMjAyMiAwMDowMCBpbiBVVENcbiAqIHRyYW5zcG9zZShkYXRlLCBVVENEYXRlKVxuICogLy89PiAnU3VuIEp1bCAxMCAyMDIyIDAwOjAwOjAwIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSknXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UoZnJvbURhdGUsIGNvbnN0cnVjdG9yKSB7XG4gIGNvbnN0IGRhdGUgPVxuICAgIGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgPyBjb25zdHJ1Y3RGcm9tKGNvbnN0cnVjdG9yLCAwKVxuICAgICAgOiBuZXcgY29uc3RydWN0b3IoMCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoXG4gICAgZnJvbURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBmcm9tRGF0ZS5nZXRNb250aCgpLFxuICAgIGZyb21EYXRlLmdldERhdGUoKSxcbiAgKTtcbiAgZGF0ZS5zZXRIb3VycyhcbiAgICBmcm9tRGF0ZS5nZXRIb3VycygpLFxuICAgIGZyb21EYXRlLmdldE1pbnV0ZXMoKSxcbiAgICBmcm9tRGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgZnJvbURhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICk7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRyYW5zcG9zZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzXCI7XG5pbXBvcnQge1xuICBsb2FkUGlubmVkTG9jYXRpb25zLFxuICByZW5kZXJQaW5uZWRTa2VsZXRvbnMsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvcGlubmVkQ29udGVudC9waW5uZWRMb2NhdGlvbnNNYW5hZ2VyLmpzXCI7XG5pbXBvcnQge1xuICBkaXNwbGF5U2VsZWN0TG9jYXRpb24sXG4gIHJlbmRlckRhc2hib2FyZFNrZWxldG9uLFxufSBmcm9tIFwiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVdlYXRoZXJJbml0aWFsaXplciB9IGZyb20gXCIuL2FwaS93ZWF0aGVySW5pdGlhbGl6ZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUdlb2xvY2F0aW9uIH0gZnJvbSBcIi4vYXBpL2dlb2xvY2F0aW9uLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVBdHRyaWJ1dGlvbnNNb2RhbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWwvYXR0cmlidXRpb25zLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUFwcCA9IChcbiAgc2VhcmNoQ29tcG9uZW50LFxuICBwaW5uZWRMb2NhdGlvbnNNYW5hZ2VyLFxuICB3ZWF0aGVySW5pdGlhbGl6ZXJcbikgPT4gKHtcbiAgaW5pdGlhbGl6ZTogYXN5bmMgKCkgPT4ge1xuICAgIHNlYXJjaENvbXBvbmVudC5jcmVhdGUoKTtcbiAgICBwaW5uZWRMb2NhdGlvbnNNYW5hZ2VyLnJlbmRlclNrZWxldG9ucygpO1xuICAgIHdlYXRoZXJJbml0aWFsaXplci5yZW5kZXJTa2VsZXRvbigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcGlubmVkTG9jYXRpb25zTWFuYWdlci5sb2FkKCksXG4gICAgICAgIHdlYXRoZXJJbml0aWFsaXplci5sb2FkSW5pdGlhbFdlYXRoZXIoKSxcbiAgICAgIF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgfVxuICB9LFxufSk7XG5cbmNvbnN0IGdlb2xvY2F0aW9uID0gY3JlYXRlR2VvbG9jYXRpb24oKTtcbmNvbnN0IHdlYXRoZXJJbml0aWFsaXplciA9IGNyZWF0ZVdlYXRoZXJJbml0aWFsaXplcihcbiAgZ2VvbG9jYXRpb24sXG4gIGRpc3BsYXlTZWxlY3RMb2NhdGlvblxuKTtcblxuY3JlYXRlQXR0cmlidXRpb25zTW9kYWwoKTtcblxuY29uc3QgYXBwID0gY3JlYXRlQXBwKFxuICB7IGNyZWF0ZTogY3JlYXRlU2VhcmNoQ29tcG9uZW50IH0sXG4gIHtcbiAgICBsb2FkOiBsb2FkUGlubmVkTG9jYXRpb25zLFxuICAgIHJlbmRlclNrZWxldG9uczogcmVuZGVyUGlubmVkU2tlbGV0b25zLFxuICB9LFxuICB7XG4gICAgbG9hZEluaXRpYWxXZWF0aGVyOiB3ZWF0aGVySW5pdGlhbGl6ZXIubG9hZEluaXRpYWxXZWF0aGVyLFxuICAgIHJlbmRlclNrZWxldG9uOiByZW5kZXJEYXNoYm9hcmRTa2VsZXRvbixcbiAgfVxuKTtcblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IGFwcC5pbml0aWFsaXplKCkpO1xufSBlbHNlIHtcbiAgYXBwLmluaXRpYWxpemUoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==