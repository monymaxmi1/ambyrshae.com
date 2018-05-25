webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "app-greeting {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-greeting style=\"display: none\"></app-greeting>\n<app-home></app-home>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_greeting_greeting_component__ = __webpack_require__("./src/components/greeting/greeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("./src/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components



// Material


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_greeting_greeting_component__["a" /* GreetingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/greeting/greeting.component.css":
/***/ (function(module, exports) {

module.exports = "#greeting {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-family: var(--raleway);\n}\ndiv {\n    width: 70%;\n}\n#intro {\n    font-size: 8vw;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    text-align: center;\n}\n#intro > p {\n    margin-bottom: 10px;\n}\n#name {\n    width: 100%;\n}\nsvg {\n    padding-left: 1vw;\n}"

/***/ }),

/***/ "./src/components/greeting/greeting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"greeting\">\n    <div id=\"intro\">\n        <p>hi, i'm</p>\n    </div>\n    <div id=\"name\">\n            <svg width=\"100%\" viewBox=\"0 0 500 500\" preserveAspectRatio=\"none\">\n                <g transform=\"scale(0.65)\" fill=\"none\" stroke=\"black\" stroke-width=\"3\" class=\"lines\">\n                    <path id=\"a1\" d=\"m 64.803623,111.81046 q -5.360145,0 -9.995948,-1.73843 -4.635798,-1.73842 -7.967782,-5.07041 -3.331976,-3.33198 -5.360145,-7.388304 -2.028161,-4.056324 -2.028161,-9.416468 0,-5.215278 2.317902,-9.41647 2.317902,-4.201197 6.519093,-7.388307 4.201197,-3.187116 10.140815,-4.780671 5.93962,-1.593555 12.893319,-1.738421 5.505012,0 11.154898,1.014081 5.64988,1.014081 9.995944,2.752502 l 0,-6.084485 q 0,-9.271602 -5.21528,-14.486875 -5.215272,-5.215278 -14.776614,-5.360145 -11.44463,0 -24.048209,8.836996 l -4.201197,-8.257521 q 14.631747,-9.851076 29.408361,-9.851076 14.921482,0 23.179003,7.967781 8.257518,7.96778 8.402388,22.45466 l 0,30.857043 q 0,4.49093 4.05632,4.6358 l 0,11.01003 q -2.02816,0.28974 -3.33198,0.4346 -1.30381,0.14487 -2.7525,0.14487 -3.76659,0 -5.939621,-2.17303 -2.173035,-2.17303 -2.752509,-5.50501 l -0.28974,-5.360144 q -5.070405,6.808834 -12.748448,10.285684 -7.678046,3.47685 -16.659909,3.62172 z m 3.331977,-9.56134 q 6.808834,0 12.603585,-2.46277 5.794753,-2.462768 8.981864,-6.808832 2.752509,-2.752509 2.752509,-5.649885 l 0,-11.154891 q -9.271604,-3.621723 -19.267547,-3.621723 -9.561342,0 -15.50096,4.05633 -5.939619,4.056325 -6.084486,10.575418 0,3.187109 1.158948,5.939618 1.158953,2.752509 3.476849,4.780671 2.317902,2.028164 5.360145,3.187114 3.042243,1.15895 6.519093,1.15895 z\"/>\n                    <path id=\"m\" d=\"m 227.77241,110.39774 -12.68788,0 0,-42.100696 q 0,-11.82279 -3.7487,-17.44583 -3.74869,-5.62304 -11.39025,-5.62304 -7.78575,0 -13.84132,5.47886 -6.05558,5.47885 -8.79501,14.41804 l 0,45.272666 -12.68789,0 0,-42.100696 q 0,-12.11116 -3.74869,-17.59001 -3.74869,-5.47886 -11.24607,-5.47886 -7.64157,0 -13.84133,5.33467 -6.19975,5.33468 -8.79501,14.41805 l 0,45.416846 -12.68788,0 0,-75.262196 11.53444,0 0,16.1482 q 4.61377,-8.36246 11.96698,-12.83205 7.3532,-4.46959 16.58075,-4.61378 9.51591,0 14.99477,5.04632 5.47886,5.04631 6.92067,13.2646 10.09262,-18.31092 28.6919,-18.31092 6.48812,0 10.81354,2.30689 4.32541,2.30689 7.06485,6.6323 2.73942,4.32542 3.74868,10.09263 1.00927,5.76722 1.15345,12.54371 l 0,44.984296 z\"/>\n                    <path id=\"b\" d=\"m 270.25157,111.27523 q -8.6519,0 -15.74363,-4.25504 -7.09172,-4.25504 -11.20494,-11.063105 l 0,13.899805 -11.0631,0 0,-103.5392913 12.48144,0 0,44.2524073 q 4.68056,-7.233564 11.48861,-11.630444 6.80805,-4.396866 15.88547,-4.396866 7.65908,0 13.75796,3.262192 6.09889,3.262194 10.35395,8.510083 4.25504,5.247879 6.66623,12.339609 2.41118,7.091732 2.41118,14.467127 0,7.800902 -2.69485,14.750804 -2.69485,6.9499 -7.37542,12.055951 -4.68053,5.106048 -11.0631,8.226408 -6.38256,3.12036 -13.8998,3.12036 z m -3.12034,-10.77943 q 5.53155,0 10.21209,-2.269354 4.68054,-2.269361 8.08458,-6.098901 3.40401,-3.829529 5.24787,-8.651911 1.84384,-4.822373 1.84384,-10.353927 0,-5.389709 -1.702,-10.353922 -1.70201,-4.964216 -4.96423,-8.935588 -3.26219,-3.971373 -7.65906,-6.09889 -4.39688,-2.127517 -9.92844,-2.41119 -3.97135,0 -7.51722,1.41836 -3.54587,1.418337 -6.52439,3.687696 -2.97853,2.269349 -5.38972,5.531541 -2.41118,3.262204 -4.11321,6.66624 l 0,21.417027 q 0.70918,3.545866 2.97854,6.524383 2.26935,2.97853 5.53155,5.106047 3.2622,2.12753 6.80805,3.545867 3.54589,1.418342 7.09175,1.276522 z\"/>\n                    <path id=\"y\" d=\"m 309.24283,129.06695 q 1.86006,0.28617 3.72013,0.42925 1.86007,0.14308 2.86165,0.14308 1.71698,0 3.00471,-0.7154 1.28773,-0.71541 2.71856,-3.14781 1.43082,-2.43239 3.1478,-6.2956 1.71698,-3.8632 4.29246,-10.73114 l -31.6211,-74.688737 13.02045,0 25.46858,63.385263 23.17926,-63.385263 12.01888,0 -36.3428,94.290957 q -2.00314,5.00787 -6.58177,8.72799 -4.57862,3.72014 -12.87737,3.86322 -1.28773,0 -2.57547,-0.14308 -1.28774,-0.14309 -3.43397,-0.57233 l 0,-11.1604 z\"/>\n                    <path id=\"r\" d=\"m 416.81979,44.992248 q -9.81457,0.297411 -17.24983,5.055992 -7.43528,4.758571 -10.7068,13.234791 l 0,47.883159 -13.08608,0 0,-77.624259 12.19385,0 0,17.993362 q 4.01504,-8.030098 10.55808,-12.93738 6.54304,-4.907281 13.97832,-5.650804 1.48705,0 2.52799,0 1.04094,0 1.78447,0.148701 l 0,11.896438 z\"/>\n                    <path id=\"s\" d=\"m 448.29192,111.83851 q -9.27297,0 -18.25154,-2.79661 -8.97858,-2.79661 -15.45493,-8.38982 l 5.59321,-8.684199 q 6.77073,5.151643 13.54146,7.653875 6.77073,2.502224 14.27742,2.649414 8.38981,0 13.24708,-3.238171 4.85727,-3.238182 5.00445,-9.420159 0,-2.796606 -1.3247,-4.710072 -1.32471,-1.913466 -3.97413,-3.532557 -2.64941,-1.619091 -6.77073,-2.649415 -4.12131,-1.030333 -9.56734,-2.502232 -6.91792,-1.766274 -11.92237,-3.385365 -5.00446,-1.619082 -8.24264,-3.826931 -3.23817,-2.207849 -4.71007,-5.298839 -1.4719,-3.090982 -1.4719,-7.653871 0,-5.740397 2.20785,-10.156095 2.20785,-4.415698 6.32916,-7.506679 4.12132,-3.09099 9.27297,-4.56289 5.15163,-1.471899 11.62799,-1.619082 8.68419,0 16.19088,2.796607 7.50668,2.796607 12.65832,7.359488 l -5.88759,7.801062 q -4.85726,-4.268506 -10.89204,-6.329163 -6.03479,-2.060657 -12.36395,-2.207849 -7.06511,0 -11.92238,2.943799 -4.85727,2.943798 -5.00445,9.714528 0,2.649415 0.88313,4.415698 0.88315,1.766274 3.23819,3.090981 2.35503,1.324708 5.59321,2.355041 3.23817,1.030324 8.38982,2.207849 7.65387,1.766274 13.24709,3.532556 5.59321,1.766274 9.42014,4.415689 3.82694,2.649416 5.59321,5.887598 1.76629,3.238173 1.91347,8.242628 0,10.744857 -8.24263,17.074016 -8.24263,6.32917 -22.22566,6.32917 z\"/>\n                    <path id=\"h\" d=\"m 550.06278,111.79242 -12.77707,0 0,-42.396613 q 0,-11.760695 -4.06542,-17.42326 -4.06543,-5.662564 -11.9059,-5.807749 -3.77504,0 -7.55009,1.451937 -3.77503,1.451937 -6.9693,4.210617 -3.19427,2.758681 -5.80775,6.243335 -2.61349,3.484653 -3.92024,7.98566 l 0,45.736073 -12.77706,0 0,-105.9915207 12.77706,0 0,46.4620367 q 4.50102,-8.276049 12.19628,-12.922251 7.69527,-4.646212 16.8425,-4.646212 6.67891,0 11.32511,2.468301 4.64622,2.468291 7.4049,6.678917 2.75868,4.210618 3.92024,10.018378 1.16154,5.807749 1.30674,12.631872 l 0,45.300479 z\"/>\n                    <path id=\"a2\" d=\"m 579.94075,111.96096 q -5.29576,0 -9.87588,-1.71755 -4.58012,-1.71754 -7.87208,-5.0095 -3.29196,-3.29196 -5.29577,-7.299558 -2.00379,-4.007603 -2.00379,-9.303373 0,-5.15263 2.29005,-9.303364 2.29007,-4.150734 6.4408,-7.299562 4.15073,-3.148838 10.01901,-4.723257 5.86828,-1.574409 12.73845,-1.71754 5.43889,0 11.02092,1.001906 5.58202,1.001896 9.87588,2.719436 l 0,-6.011395 q 0,-9.160243 -5.15264,-14.312873 -5.15263,-5.152639 -14.59912,-5.29577 -11.30718,0 -23.75937,8.73086 l -4.15073,-8.158337 q 14.456,-9.732756 29.05512,-9.732756 14.74227,0 22.90061,7.872076 8.15832,7.872075 8.30146,22.184957 l 0,30.486415 q 0,4.436985 4.00761,4.580115 l 0,10.87778 q -2.0038,0.28627 -3.29197,0.4294 -1.28815,0.14312 -2.71944,0.14312 -3.72135,0 -5.86828,-2.14692 -2.14693,-2.14695 -2.71945,-5.4389 l -0.28626,-5.29577 q -5.0095,6.72706 -12.59532,10.16215 -7.58582,3.43508 -16.45981,3.57821 z m 3.29196,-9.44649 q 6.72705,0 12.4522,-2.43319 5.72516,-2.43319 8.87399,-6.727045 2.71944,-2.719455 2.71944,-5.582031 l 0,-11.020904 q -9.16024,-3.57822 -19.03612,-3.57822 -9.4465,0 -15.31478,4.007603 -5.86827,4.007603 -6.0114,10.4484 0,3.148828 1.14503,5.868274 1.14503,2.719445 3.43509,4.723243 2.29006,2.00381 5.29576,3.14883 3.0057,1.14504 6.44079,1.14504 z\"/>\n                    <path id=\"e\" d=\"m 663.16537,113.16097 q -8.67292,0 -15.87586,-3.08697 -7.20294,-3.08697 -12.3479,-8.67293 -5.14495,-5.585947 -7.93793,-12.641884 -2.79298,-7.055946 -2.93997,-15.434873 0,-8.08493 2.79297,-15.287861 2.79298,-7.20294 8.08493,-12.641891 5.29196,-5.438951 12.49489,-8.525928 7.20294,-3.08697 15.87586,-3.233972 8.67293,0 15.72886,3.233972 7.05594,3.233971 12.2009,8.525928 5.14495,5.291957 7.64393,12.494888 2.49898,7.20294 2.79298,14.846871 0,1.616986 0,2.939975 0,1.322989 -0.294,2.057985 l -63.65045,0 q 0.441,5.732948 2.64598,10.436903 2.20498,4.703964 5.73295,8.08493 3.52798,3.380975 7.93794,5.291957 4.40996,1.91099 9.55491,1.91099 3.52797,0 6.90894,-0.88199 3.38097,-0.88199 6.32094,-2.645985 2.93998,-1.763989 5.14496,-3.968968 2.20498,-2.20498 3.52797,-5.291949 l 11.1719,3.086969 q -1.91099,4.262965 -5.14496,7.790933 -3.23397,3.52797 -7.64393,6.02695 -4.40996,2.49898 -9.70191,4.11597 -5.29195,1.61699 -11.0249,1.46998 z m 26.31277,-44.981612 q -0.441,-5.438951 -2.64598,-9.995912 -2.20498,-4.556961 -5.73295,-7.937927 -3.52797,-3.380975 -8.08493,-4.997961 -4.55696,-1.616986 -9.70192,-1.910982 -5.14495,0 -9.70191,1.763988 -4.55696,1.76398 -7.93793,5.144955 -3.38097,3.380966 -5.58595,7.937927 -2.20498,4.556961 -2.64598,9.995912 l 52.03755,0 z\"/>\n                </g>\n            </svg>\n        </div> \n</div>\n\n"

/***/ }),

/***/ "./src/components/greeting/greeting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreetingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs__ = __webpack_require__("./node_modules/animejs/anime.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_animejs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GreetingComponent = /** @class */ (function () {
    function GreetingComponent() {
    }
    GreetingComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_animejs__({
            targets: '#name .lines path',
            strokeDashoffset: [__WEBPACK_IMPORTED_MODULE_1_animejs__["setDashoffset"], 0],
            easing: 'linear',
            duration: 2000,
            delay: 1500
        });
    };
    GreetingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-greeting',
            template: __webpack_require__("./src/components/greeting/greeting.component.html"),
            styles: [__webpack_require__("./src/components/greeting/greeting.component.css")]
        })
    ], GreetingComponent);
    return GreetingComponent;
}());



/***/ }),

/***/ "./src/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-page {\n    font-family: var(--raleway);\n    height: 100%;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 50vh auto;\n        grid-template-columns: 50vh auto;\n    -ms-grid-rows: 7vw 40% auto;\n        grid-template-rows: 7vw 40% auto;\n        grid-template-areas: \"header content\" \"links content\" \"picture content\";\n}\n\n#header {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: header;\n    padding-left: 20px;\n    padding-top: 10px;\n}\n\n#header > span {\n    font-size: 5vw;\n}\n\n#links {\n    -ms-grid-row: 2;\n    -ms-grid-column: 1;\n    grid-area: links;\n}\n\n#links > button {\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    width: 5em;\n    height: 5em;\n}\n\n#content {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 3;\n    -ms-grid-column: 2;\n    grid-area: content;\n    background-color: var(--jet);\n}\n\n#btn-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n}\n\nbutton {\n    font-family: var(--raleway);\n}\n\n#text-container {\n    color: var(--white);\n    margin-left: auto;\n    margin-right: auto;\n    overflow: scroll;\n}\n\n.bio-text {\n    text-align: justify;\n    line-height: 1.5em;\n    margin-top: 0;\n}\n\n.skills-text > h3 {\n    letter-spacing: .05em;\n    margin-top: 0.4em;\n    margin-bottom: 0.4em;\n}\n\n.skills-text > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    height: 100%;\n}\n\n#img-div {\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    grid-area: picture;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n}\n\n#img-div > img {\n    width: 100%;\n    z-index: 1;\n}\n\nsvg {\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    grid-area: picture;\n    width: 100%;\n    height: 100%;\n    overflow: visible;\n    fill: var(--light-grey);\n    opacity: 0.8;\n    \n}\n\nsvg > circle {\n    -webkit-filter:url(#shadow);\n            filter:url(#shadow);\n}\n\n/* Responsive Design */\n\n@media (min-width: 975px) {\n    .home-page {\n        -ms-grid-columns: 340px auto;\n            grid-template-columns: 340px auto;\n        -ms-grid-rows: 68px 304px auto;\n            grid-template-rows: 68px 304px auto;\n    }\n\n    #btn-container {\n        margin-top: 2em;\n    }\n    button {\n        font-size: 1.3em;\n    }\n\n    #text-container {\n        font-size: 1.3em;\n        width: 60vw;\n    }\n    .bio-text {\n        padding: 30px 50px 0 50px;\n    }\n    .skills-text {\n        height: 8em;\n        padding-top: 30px;\n    }\n    .skills-text > div {\n        padding: 0 50px;\n    }\n }\n\n@media (min-width: 1250px) {\n    #text-container {\n        font-size: 1.4em;\n    }\n }"

/***/ }),

/***/ "./src/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n    <div id=\"header\">\n        <span>ambyrshae</span>\n    </div>\n    <div id=\"links\">\n        <button mat-fab (click)=\"openURL('mailto:ambyrshae.jarrell@gmail.com')\" style=\"background-image: url('../../assets/gmail.png'); background-size: 3em;\"></button>\n        <button mat-fab (click)=\"openURL('https://www.linkedin.com/in/ambyrshae/')\" style=\"background-image: url('../../assets/linkedin.png');\" ></button>\n        <button mat-fab (click)=\"openURL('https://github.com/ambyrshae')\" style=\"background-image: url('../../assets/Octocat.png');\"></button>\n    </div>\n    <div id=\"content\">\n        <div id=\"btn-container\">\n            <button mat-raised-button>bio</button>\n            <button mat-raised-button>skills</button>\n        </div>\n        <div id=\"text-container\">\n            <p class=\"bio-text\">\n                I am a full-stack developer who is self-taught and \n                traditionally educated. I hold a B.S in Computer Science\n                and Biology from the University of New Orleans.\n            </p>\n            <p class=\"bio-text\">\n                I have 3 years experience developing software for a \n                startup as well as a conglomerate company. \n            </p>\n            <p class=\"bio-text\">\n                I am a New Orleanian currently residing in Hawaii. When I'm \n                not developing, I pass the time studying Japanese, cooking,\n                hiking, snorkling, gaming and giving pets to my 16 year old mutt, Kilo.\n            </p>\n            <div class=\"skills-text\" style=\"display: none;\">\n                <h3>Technologies</h3>\n                <div>\n                    <p>Javascript</p>\n                    <p>Angular</p>\n                    <p>Typescript</p>\n                    <p>HTML</p>\n                    <p>CSS</p>\n                    <p>Markup languages</p>\n                    <p>Protractor</p>\n                    <p>Java</p>\n                    <p>Spring Boot</p>\n                    <p>SQL</p>\n                    <p>JUnit</p>\n                </div>\n            </div>\n            <div class=\"skills-text\" style=\"display: none;\">\n                <h3>Industry Knowledge</h3>\n                <div>\n                    <p>Agile</p>\n                    <p>Scrum</p>\n                    <p>Software Development Life Cycle</p>\n                    <p>Web and Mobile Development</p>\n                    <p>Test Driven Development</p>\n                    <p>E2E Testing</p>\n                    <p>Version Control</p>\n                </div>\n            </div>\n            <div class=\"skills-text\" style=\"display: none;\">\n                <h3>Interpersonal Skills</h3>\n                <div>\n                    <p>Team and Project Management</p>\n                    <p>Mentorship</p>\n                    <p>Multi-team Collaboration</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"img-div\">\n        <img src=\"./../../assets/me.png\"/>\n    </div>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n        <defs>\n            <filter id=\"shadow\">\n                <feDropShadow dx=\"1\" dy=\"0\" stdDeviation=\"2\" flood-color=\"rgba(0, 0, 0, 0.5)\"/>\n            </filter>\n        </defs>\n        <circle cx=\"50\" cy=\"60\" r=\"70\"/>\n    </svg>\n</div>\n"

/***/ }),

/***/ "./src/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.openURL = function (url) {
        window.open(url, '_blank');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/components/home/home.component.html"),
            styles: [__webpack_require__("./src/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);




// Gestures

if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map