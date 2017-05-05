webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 155;


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(179);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(249),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(250),
        styles: [__webpack_require__(234)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_routing_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_nav_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__window_size_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__image_slider_image_slider_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__our_services_our_services_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_about_home_about_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__our_promise_our_promise_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__testimonials_testimonials_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_contact_home_contact_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { GalleryComponent } from './gallery/gallery.component';
// import { ContactComponent } from './contact/contact.component';








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nav_nav_component__["a" /* NavComponent */],
            // AboutComponent,
            // HomeComponent,
            // GalleryComponent,
            // ContactComponent,
            __WEBPACK_IMPORTED_MODULE_6__routing_routing_module__["a" /* routingComponents */],
            __WEBPACK_IMPORTED_MODULE_11__image_slider_image_slider_component__["a" /* ImageSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__our_services_our_services_component__["a" /* OurServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_about_home_about_component__["a" /* HomeAboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__our_promise_our_promise_component__["a" /* OurPromiseComponent */],
            __WEBPACK_IMPORTED_MODULE_15__testimonials_testimonials_component__["a" /* TestimonialsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_contact_home_contact_component__["a" /* HomeContactComponent */],
            __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__routing_routing_module__["b" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdInputModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__window_size_service__["a" /* WindowSizeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(251),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'footer',
        template: __webpack_require__(252),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = (function () {
    function GalleryComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 5, color: '#FFF5EE', img: "url('./assets/img/IMG_0352.JPG')" },
            { text: 'Two', cols: 3, rows: 3, color: '#FFF5E1', img: "url('./assets/img/IMG_0364.JPG')" },
            { text: 'Three', cols: 3, rows: 5, color: '#E8DCCD', img: "url('./assets/img/IMG_0384.JPG')" },
            { text: 'Four', cols: 3, rows: 5, color: '#E8D4CD', img: "url('./assets/img/whiteCabinetEdit.jpg')" },
            { text: 'Five', cols: 3, rows: 6, color: '#FFE5E1', img: "url('./assets/img/IMG_0390.JPG')" },
            { text: 'Six', cols: 3, rows: 6, color: '#FFF5EE', img: "url('./assets/img/IMG_0427.JPG')" },
            { text: 'Seven', cols: 3, rows: 6, color: '#FFF5E1', img: "url('./assets/img/20160923_170322.jpg')" },
            { text: 'Eight', cols: 3, rows: 6, color: '#E8DCCD', img: "url('./assets/img/20160824_152620.jpg')" },
            { text: 'Nine', cols: 3, rows: 6, color: '#E8D4CD', img: "url('./assets/img/20170317_141722.jpg')" },
            { text: 'Ten', cols: 3, rows: 3, color: '#FFE5E1', img: "url('./assets/img/counterTopCloseUpEdit.jpg')" },
            { text: 'Eleven', cols: 3, rows: 6, color: '#FFF5EE', img: "url('./assets/img/fullKitchenRemoveBottleLabels.jpg')" },
            { text: 'Tweleve', cols: 3, rows: 5, color: '#FFF5E1', img: "url('./assets/img/IMG_0420.JPG')" },
            { text: 'Five', cols: 3, rows: 5, color: '#E8DCCD', img: "url('./assets/img/IMG_0412.JPG')" },
            { text: 'Thirteen', cols: 3, rows: 5, color: '#E8D4CD', img: "url('./assets/img/rightSideKitchenRemoveBottleLabels.jpg')" },
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-gallery',
        template: __webpack_require__(253),
        styles: [__webpack_require__(239)]
    }),
    __metadata("design:paramtypes", [])
], GalleryComponent);

//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeAboutComponent = (function () {
    function HomeAboutComponent() {
    }
    HomeAboutComponent.prototype.ngOnInit = function () {
    };
    return HomeAboutComponent;
}());
HomeAboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'home-about',
        template: __webpack_require__(254),
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [])
], HomeAboutComponent);

//# sourceMappingURL=home-about.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeContactComponent = (function () {
    function HomeContactComponent() {
    }
    HomeContactComponent.prototype.ngOnInit = function () {
    };
    return HomeContactComponent;
}());
HomeContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'home-contact',
        template: __webpack_require__(255),
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [])
], HomeContactComponent);

//# sourceMappingURL=home-contact.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(256),
        styles: [__webpack_require__(242)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageSliderComponent = (function () {
    function ImageSliderComponent() {
    }
    ImageSliderComponent.prototype.ngOnInit = function () {
    };
    return ImageSliderComponent;
}());
ImageSliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'image-slider',
        template: __webpack_require__(257),
        styles: [__webpack_require__(243)]
    }),
    __metadata("design:paramtypes", [])
], ImageSliderComponent);

//# sourceMappingURL=image-slider.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_size_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(_windowSizeService) {
        var _this = this;
        this._windowSizeService = _windowSizeService;
        this.logo = 'Rancho Kitchen & Baths';
        //subscribe to the window resize event
        _windowSizeService.height$.subscribe(function (value) {
            // console.log("height: " + value);
            _this.innerHeight = value;
        });
        _windowSizeService.width$.subscribe(function (value) {
            // console.log("width: " + value);
            _this.innerWidth = value;
            _this.smallScreen = (innerWidth <= 768) ? true : false;
        });
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__(258),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__window_size_service__["a" /* WindowSizeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__window_size_service__["a" /* WindowSizeService */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurPromiseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurPromiseComponent = (function () {
    function OurPromiseComponent() {
    }
    OurPromiseComponent.prototype.ngOnInit = function () {
    };
    return OurPromiseComponent;
}());
OurPromiseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'our-promise',
        template: __webpack_require__(259),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [])
], OurPromiseComponent);

//# sourceMappingURL=our-promise.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurServicesComponent = (function () {
    function OurServicesComponent() {
    }
    OurServicesComponent.prototype.ngOnInit = function () {
    };
    return OurServicesComponent;
}());
OurServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'our-services',
        template: __webpack_require__(260),
        styles: [__webpack_require__(245)]
    }),
    __metadata("design:paramtypes", [])
], OurServicesComponent);

//# sourceMappingURL=our-services.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gallery_gallery_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_4__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], RoutingModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__gallery_gallery_component__["a" /* GalleryComponent */], __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */]];
//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    return TestimonialsComponent;
}());
TestimonialsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'testimonials',
        template: __webpack_require__(261),
        styles: [__webpack_require__(246)]
    }),
    __metadata("design:paramtypes", [])
], TestimonialsComponent);

//# sourceMappingURL=testimonials.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".brand {\r\n    background: floralwhite;\r\n    text-align: center;\r\n}\r\n\r\n.brand > h1 {\r\n    font-size: 6rem;\r\n    margin: 0;\r\n}\r\n\r\n.brand > img {\r\n    width: 300px;\r\n}\r\n\r\n.brand > img:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.address-bar {\r\n    background: floralwhite;\r\n    /*color: seashell;*/\r\n    font-size: .75rem;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "md-toolbar {\r\n    background: #E8D4CD;\r\n}\r\n\r\n.nav {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.container {\r\n    background: seashell;\r\n    margin: 0 auto;\r\n    \r\n    min-height: 50rem;\r\n    height: 100%;\r\n    max-width: 74rem;\r\n}\r\n\r\nspan > button {\r\n    letter-spacing: 5px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "* {\n  letter-spacing: 1px; }\n\nsection {\n  background: #FFF5E1;\n  width: 100%;\n  padding-bottom: 2rem; }\n  section .container {\n    min-height: 100%; }\n  section h1 {\n    border-bottom: 2px solid #E8D4CD;\n    padding-top: 4rem;\n    text-align: center;\n    line-height: 2; }\n  section p {\n    line-height: 2;\n    padding: 3rem 0; }\n  section div.col-6 .block > p {\n    padding: 0 0 2rem 0;\n    line-height: 1.5; }\n  section div.col-6 img {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "* {\n  letter-spacing: 1px; }\n\nsection {\n  background: #FFF5E1;\n  width: 100%;\n  padding-bottom: 2rem; }\n  section .container {\n    min-height: 100%; }\n  section h1 {\n    border-bottom: 2px solid #E8D4CD;\n    padding-top: 4rem;\n    text-align: center;\n    line-height: 2; }\n  section p {\n    line-height: 2;\n    padding: 3rem 0; }\n  section .contact-form {\n    width: 500px; }\n  section .contact-full-width {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "md-toolbar {\n  background: #E8D4CD;\n  height: 100px; }\n  md-toolbar p {\n    font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "* {\n  letter-spacing: 1px; }\n\nsection {\n  background: #FFF5E1;\n  width: 100%;\n  padding-bottom: 2rem; }\n  section .container {\n    min-height: 100%; }\n  section h1 {\n    border-bottom: 2px solid #E8D4CD;\n    padding-top: 4rem;\n    margin-bottom: 2rem;\n    text-align: center;\n    line-height: 2; }\n  section p {\n    line-height: 2;\n    padding: 3rem 0; }\n  section md-grid-tile {\n    background-size: cover !important;\n    background-position: center center !important;\n    background-repeat: no-repeat !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "section {\n  background: #FFF5E1;\n  width: 100%;\n  padding-bottom: 4rem; }\n  section .container {\n    min-height: 100%; }\n  section h1 {\n    border-bottom: 2px solid #E8D4CD;\n    padding-top: 4rem;\n    text-align: center;\n    line-height: 2; }\n  section p {\n    line-height: 2;\n    letter-spacing: 1px;\n    padding: 3rem 0; }\n  section div.col-6 .block > p {\n    padding: 0 0 2rem 0;\n    line-height: 1.5;\n    letter-spacing: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "section {\n  width: 100%; }\n  section .container {\n    padding: 3rem 0;\n    min-height: 100%; }\n    section .container button {\n      background: #FFF5E1;\n      border: 1px solid #E8D4CD;\n      line-height: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "* {\n  letter-spacing: 1px; }\n\n.container {\n  background: seashell;\n  margin: 1rem;\n  padding: .5rem;\n  min-height: 50rem;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "* {\n  letter-spacing: 1px;\n  color: white; }\n\n.carouselWrapper {\n  background: floralwhite; }\n  .carouselWrapper .carousel {\n    height: 30rem;\n    padding: 0;\n    max-width: 1200px; }\n  .carouselWrapper .carousel-item {\n    background: floralwhite;\n    height: 30rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "section {\n  background: #E8DCCD;\n  width: 100%;\n  padding: 2rem; }\n  section .container {\n    min-height: 100%; }\n  section .circle {\n    border: 2px solid #FFE5E1;\n    border-radius: 50%;\n    height: 150px;\n    width: 150px; }\n    section .circle img {\n      margin: 0;\n      position: relative;\n      top: -25px;\n      left: 51px; }\n    section .circle p {\n      margin: 0;\n      position: relative;\n      bottom: -25px;\n      left: -22px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".box {\n  background: #FFF5EE;\n  width: 100%;\n  height: 10rem;\n  line-height: 2; }\n  .box p {\n    padding: 0; }\n  .box button {\n    background: #FFF5E1;\n    border: 1px solid #E8D4CD;\n    line-height: 2; }\n\nsection {\n  width: 100%; }\n  section .container {\n    padding: 3rem 0;\n    min-height: 100%; }\n  section h1 {\n    border-bottom: 2px solid #E8D4CD;\n    padding-top: 4rem;\n    text-align: center;\n    line-height: 2; }\n  section md-card {\n    background: #FFF5EE;\n    height: 100%;\n    width: 25rem;\n    line-height: 1.5; }\n  section img {\n    margin: auto;\n    height: auto;\n    width: 100%; }\n  section h2 {\n    margin: 4rem 0;\n    line-height: 2; }\n  section button {\n    background: #FFF5E1;\n    border: 1px solid #E8D4CD;\n    line-height: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "* {\n  letter-spacing: 1px;\n  color: #555; }\n\n.carousel {\n  height: 20rem;\n  padding: 0; }\n\n.carousel-item {\n  background: floralwhite;\n  height: 20rem; }\n  .carousel-item .carousel-caption {\n    top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1 class=\"col-6 mx-auto\">ABOUT US</h1>\n  <div class=\"container col-lg-9 d-flex justify-content-center\">\n    <div class=\"col-lg-12 mx-auto\">\n      <p>Rancho Kitchen and Baths, Inc. is a local independent family-owned and operated business. Our number one goal is to treat our clients with care and respect. We strive to make everyone we work with feel their job is our top priority. Our staff members are real people who care about your dreams and will make every effort to make them a reality.</p>\n      <div class=\"col-lg-12 d-flex justify-content-center\">\n        <div class=\"col-6\" id=\"AboutImage\">\n          <img src=\"./assets/img/IMG_0390.JPG\" alt=\"AboutImage\">\n        </div>\n        <div class=\"col-6\">\n          <div class=\"block\">\n            <h3>Move or Remodel?<br>\n            That is the question!</h3>\n            <p>Have you toured new home construction in San Diego County recently? Granted the houses are beautiful and the kitchen and bathroom designs are breathtaking, unfortunately so are the prices.</p>\n            <p>It is possible to capture and incorporate the same beautiful aspects of a “new dream home design” into your current residence, without the new home price tag.</p>\n            <p>Our talented and professional “design build” team can turn your ideas and dreams into reality. Unique designs, beautiful cabinetry and rich finish materials, create rooms that inspire the best life possible in truly exceptional surroundings.</p>\n          </div>\n          <!--<div class=\"block text-center\">\n            <p><strong>It’s our job.</strong></p>\n            <p><strong>It’s our mission.</strong></p>\n            <p><strong>It’s our promise.</strong></p>\n          </div>-->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<our-promise></our-promise>"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"brand\">\r\n    <!--<h1 class=\"\">Rancho Kitchen & Baths</h1>-->\r\n    <img src=\"./assets/icons/freelogodesign.svg\" routerLink=\"/home\">\r\n</div>\r\n<div class=\"address-bar\">\r\n    <p class=\"\">\r\n    12335 World Trade Drive, Suite #1 |\r\n    San Diego, CA 92128 |\r\n    858.618.3300\r\n    </p>\r\n</div>\r\n<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n<footer></footer>"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<section>\n    <h1 class=\"col-6 mx-auto\">CONTACT</h1>\n    <div class=\"container col-lg-9\">\n        <div class=\"my-4\">\n            <form class=\"contact-form col-lg-9 mx-auto\">\n                <md-input-container class=\"contact-full-width\">\n                    <input mdInput placeholder=\"Company\" value=\"Google\">\n                </md-input-container>\n\n                <table class=\"contact-full-width\" cellspacing=\"0\"><tr>\n                    <td><md-input-container class=\"contact-full-width\">\n                    <input mdInput placeholder=\"First name\">\n                    </md-input-container></td>\n                    <td><md-input-container class=\"contact-full-width\">\n                    <input mdInput placeholder=\"Last Name\">\n                    </md-input-container></td>\n                </tr></table>\n\n                <p>\n                    <md-input-container class=\"contact-full-width\">\n                    <textarea mdInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n                    </md-input-container>\n                    <md-input-container class=\"contact-full-width\">\n                    <textarea mdInput placeholder=\"Address 2\"></textarea>\n                    </md-input-container>\n                </p>\n\n                <table class=\"contact-full-width\" cellspacing=\"0\"><tr>\n                    <td><md-input-container class=\"contact-full-width\">\n                    <input mdInput placeholder=\"City\">\n                    </md-input-container></td>\n                    <td><md-input-container class=\"contact-full-width\">\n                    <input mdInput placeholder=\"State\">\n                    </md-input-container></td>\n                    <td><md-input-container class=\"contact-full-width\">\n                    <input mdInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"92129\">\n                    <md-hint align=\"end\">{{postalCode.value.length}} / 5</md-hint>\n                    </md-input-container></td>\n                </tr></table>\n                </form>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <!--<div class=\"col-xs-12 col-lg-9 mx-auto\">\n    <span class=\"footer\">\n      <button md-button routerLink=\"/home\" routerLinkActive=\"active\">Home</button>\n      <button md-button routerLink=\"/about\" routerLinkActive=\"active\">About</button>\n      <button md-button routerLink=\"/gallery\" routerLinkActive=\"active\">Gallery</button>\n      <button md-button routerLink=\"/contact\" routerLinkActive=\"active\">Contact</button>\n    </span>\n  </div>-->\n  <!--<md-toolbar-row>-->\n    <div class=\"col-xs-12 col-lg-9 m-auto align-items-center\">\n      <div class=\"social col-2 d-flex justify-content-around align-items-center mx-auto pt-4\">\n        <md-icon><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></md-icon>\n        <md-icon><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></md-icon>\n        <md-icon><i class=\"fa fa-pinterest-square\" aria-hidden=\"true\"></i></md-icon>\n      </div>\n      <div class=\"col-xs-12 col-lg-9 mx-auto\">\n        <p class=\"text-center\">Copyright 2017 Rancho Kitchen & Bath, Inc. | Site design handcrafted by Danilo Carandang</p>\n      </div>\n    </div>\n  <!--</md-toolbar-row>-->\n</md-toolbar>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<section>\n    <h1 class=\"col-6 mx-auto\">GALLERY</h1>\n    <div class=\"container col-lg-9\">\n        <div>\n            <md-grid-list cols=\"6\" rowHeight=\"100px\">\n                <md-grid-tile\n                    *ngFor=\"let tile of tiles\"\n                    [colspan]=\"tile.cols\"\n                    [rowspan]=\"tile.rows\"\n                    [style.background]=\"tile.color\"\n                    [style.background-image]=\"tile.img\">\n                    {{tile.text}}\n                </md-grid-tile>\n            </md-grid-list>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1 class=\"col-6 mx-auto\">ABOUT US</h1>\n  <div class=\"container col-lg-9 d-flex justify-content-center\">\n    <div class=\"col-lg-12 mx-auto\">\n      <p>Rancho Kitchen and Baths, Inc. is a local independent family-owned and operated business. Our number one goal is to treat our clients with care and respect. We strive to make everyone we work with feel their job is our top priority. Our staff members are real people who care about your dreams and will make every effort to make them a reality.</p>\n      <div class=\"col-lg-12 d-flex justify-content-center\">\n        <div class=\"col-6\">\n          <img src=\"./assets/img/fullKitchenRemoveBottleLabels.jpg\" alt=\"AboutImage\" width=\"100%\" height=\"400px\">\n        </div>\n        <div class=\"col-6\">\n          <div class=\"block\">\n            <h3>First About Heading</h3>\n            <p>Provident illo earum quas veniam facilis tempora delectus aliquam enim quod consequatur!</p>\n          </div>\n          <div class=\"block\">\n            <h3>Second About Heading</h3>\n            <p>Provident illo earum quas veniam facilis tempora delectus aliquam enim quod consequatur!</p>\n          </div>\n          <div class=\"block\">\n            <h3>Third About Heading</h3>\n            <p>Provident illo earum quas veniam facilis tempora delectus aliquam enim quod consequatur!</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container col-lg-9\">\n    <div class=\"d-flex justify-content-around\">\n      <div class=\"col d-flex align-items-center justify-content-around\">\n        <img src=\"./assets/icons/ic_phone_black_48px.svg\" alt=\"phone icon\" class=\"d-inline\">\n        <p>858.618.3300</p>\n      </div>\n      <div class=\"col d-flex align-items-center justify-content-around\">\n        <img src=\"./assets/icons/ic_map_black_48px.svg\" alt=\"map icon\" class=\"d-inline\">\n        <p>12335 World Trade Drive, Suite #1<br>\n        San Diego, CA 92128</p>\n      </div>\n      <div class=\"col d-flex align-items-center justify-content-around\">\n        <img src=\"./assets/icons/ic_format_quote_black_48px.svg\" alt=\"quote icon\" class=\"d-inline\">\n        <button md-button>GET A FREE QUOTE</button>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<image-slider></image-slider>\n<our-services></our-services>\n<home-about></home-about>\n<our-promise></our-promise>\n<testimonials></testimonials>\n<home-contact></home-contact>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"carouselWrapper\">\n  <div id=\"heroCarousel\" class=\"carousel slide col-lg-12 mx-auto\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#heroCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#heroCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#heroCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block img-fluid firstSlide\" src=\"./assets/img/homeFirstSlide.jpg\" alt=\"First slide\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3>First slide label</h3>\n          <p>ulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block img-fluid secondSlide\" src=\"./assets/img/homeSecondSlide.jpg\" alt=\"Second slide\">\n        <!--<div class=\"secondSlide\"></div>-->\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3>Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block img-fluid thirdSlide\" src=\"./assets/img/homeThirdSlide.jpg\" alt=\"Third slide\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3>Third slide label</h3>\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#heroCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#heroCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <div class=\"col-xs-12 col-lg-9 mx-auto\">\n    <span class=\"nav\" *ngIf=\"!smallScreen\">\n      <button md-button routerLink=\"/home\" routerLinkActive=\"active\">Home</button>\n      <button md-button routerLink=\"/about\" routerLinkActive=\"active\">About</button>\n      <button md-button routerLink=\"/gallery\" routerLinkActive=\"active\">Gallery</button>\n      <button md-button routerLink=\"/contact\" routerLinkActive=\"active\">Contact</button>\n    </span>\n\n    <span *ngIf=\"smallScreen\">\n      <button md-button [mdMenuTriggerFor]=\"menu\">\n        <md-icon>menu</md-icon>\n      </button>\n      <md-menu #menu=\"mdMenu\">\n        <button md-menu-item routerLink=\"/home\" routerLinkActive=\"active\">Home</button>\n        <button md-menu-item routerLink=\"/about\" routerLinkActive=\"active\">About</button>\n        <button md-menu-item routerLink=\"/gallery\" routerLinkActive=\"active\">Gallery</button>\n        <button md-menu-item routerLink=\"/contact\" routerLinkActive=\"active\">Contact</button>\n      </md-menu>\n    </span>\n  </div>\n</md-toolbar>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container col-lg-9 \">\n    <div class=\"d-flex justify-content-around\">\n      <div class=\"circle d-flex align-items-center\">\n        <img src=\"./assets/icons/ic_build_black_48px.svg\" width=\"48px\">\n        <p class=\"text-center\">It’s our job.</p>\n      </div>\n      <div class=\"circle d-flex align-items-center\">\n        <img src=\"./assets/icons/ic_timeline_black_48px.svg\" width=\"48px\">\n        <p class=\"text-center\">It’s our mission.</p>\n      </div>\n      <div class=\"circle d-flex align-items-center\">\n        <img src=\"./assets/icons/ic_bookmark_border_black_48px.svg\" width=\"48px\">\n        <p class=\"text-center\">It’s our promise.</p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<div class=\"box d-flex align-items-center\">\n  <div class=\"col-lg-9 mx-auto d-flex justify-content-between\">\n    <div class=\"\">\n      <h3>Start your home remodeling project today!</h3>\n      <p>Get your free quote</p>\n    </div>\n    <div class=\"d-flex align-items-center\">\n      <button md-button>REQUEST A QUOTE</button>\n    </div>\n  </div>\n</div>\n\n<section>\n  <h1 class=\"col-6 mx-auto\">OUR SERVICES</h1>\n  \n  <div class=\"container col-lg-9 d-flex justify-content-around\">\n    <md-card class=\"card\">\n      <img md-card-image src=\"./assets/img/IMG_0364.JPG\">\n      <md-card-content>\n        <h4 class=\"text-center pt-3\">Kitchen Remodels</h4>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        </p>\n      </md-card-content>\n    </md-card>\n    <md-card class=\"card\">\n      <img md-card-image src=\"./assets/img/IMG_0390.JPG\">\n      <md-card-content>\n        <h4 class=\"text-center pt-3\">Kitchen Remodels</h4>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        </p>\n      </md-card-content>\n    </md-card>\n    <md-card class=\"card\">\n      <img md-card-image src=\"./assets/img/IMG_0384.JPG\">\n      <md-card-content>\n        <h4 class=\"text-center pt-3\">Bath Remodels</h4>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        </p>\n      </md-card-content>\n    </md-card>\n  </div>\n\n  <div class=\"col-lg-6 mx-auto d-flex justify-content-around align-items-center\">\n    <h2>EXPLORE OUR SERVICES</h2>\n    <button md-button>VIEW ALL SERVICES</button>\n  </div>\n</section>"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<div id=\"testimonialCarousel\" class=\"carousel slide col-lg-12 mx-auto\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#testimonialCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#testimonialCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#testimonialCarousel\" data-slide-to=\"2\"></li>\n    <li data-target=\"#testimonialCarousel\" data-slide-to=\"4\"></li>\n    <li data-target=\"#testimonialCarousel\" data-slide-to=\"5\"></li>\n    <li data-target=\"#testimonialCarousel\" data-slide-to=\"6\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <img class=\"d-block mx-auto\" src=\"./assets/icons/ic_question_answer_black_48px.svg\" alt=\"First slide\">\n        <p>“The staff at Rancho Kitchen and Baths did a great job designing and installing our beautiful kitchen. The installers were pleasant, respectful and clean. My son was sad to see them go when the job was finished. The experience was wonderful and we look forward to remodeling our master bathroom in the very near future.”</p>\n        <h4 class=\"d-inline\">Kelly</h4>\n        <p class=\"d-inline\">Poway, CA</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <img class=\"d-block mx-auto\" src=\"./assets/icons/ic_question_answer_black_48px.svg\" alt=\"Second slide\">\n        <p>“What a breath of fresh air! That’s what it felt like when I met with my designer. She was friendly and enthusiastic, not snobby like some places I had visited. My designer helped me put together my dream kitchen and I just love it. Thank you Rancho Kitchen and Baths for making my remodel a success!”</p>\n        <h4 class=\"d-inline\">Nicole</h4>\n        <p class=\"d-inline\">Rancho Penasquitos, CA</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <img class=\"d-block mx-auto\" src=\"./assets/icons/ic_question_answer_black_48px.svg\" alt=\"Third slide\">\n        <p>“Kudos to a great company that thinks of their clients needs. Dave created a detailed schedule of our project and actually completed our project a few days early. It was a pleasure to deal with such conscientious people. I would recommend Rancho Kitchen and Baths to any of my friends with confidence.”</p>\n        <h4 class=\"d-inline\">Paul</h4>\n        <p class=\"d-inline\">Rancho Bernardo, CA</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <img class=\"d-block mx-auto\" src=\"./assets/icons/ic_question_answer_black_48px.svg\" alt=\"Fourth slide\">\n        <p>“Thank you for our beautiful master bathroom. It is the sanctuary I always hoped to have, and the old bathroom is nothing but a distant memory.”</p>\n        <h4 class=\"d-inline\">Carol</h4>\n        <p class=\"d-inline\">Carmel Mountain Ranch, CA</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <img class=\"d-block mx-auto\" src=\"./assets/icons/ic_question_answer_black_48px.svg\" alt=\"Fifth slide\">\n        <p>“My home is a show place. I have three new fantastic bathrooms and a gourmet kitchen. My house is like a model and I love it.”</p>\n        <h4 class=\"d-inline\">Maureen</h4>\n        <p class=\"d-inline\">Poway, CA</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <img class=\"d-block mx-auto\" src=\"./assets/icons/ic_question_answer_black_48px.svg\" alt=\"Sixth slide\">\n        <p>\"Remodeling our kitchen was a very good experience. RKB's crew was polite and courteous and showed quality workmanship and expertise. We are pleased with the outcome and love our beautiful kitchen.\"</p>\n        <h4 class=\"d-inline\">Jennifer</h4>\n        <p class=\"d-inline\">Rancho Penasquitos, CA</p>\n      </div>\n    </div>\n  <a class=\"carousel-control-prev\" href=\"#testimonialCarousel\" role=\"button\" data-slide=\"prev\">\n    <span aria-hidden=\"true\"><md-icon>keyboard_arrow_left</md-icon></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#testimonialCarousel\" role=\"button\" data-slide=\"next\">\n    <span aria-hidden=\"true\"><md-icon>keyboard_arrow_right</md-icon></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(156);


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowSizeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WindowSizeService = (function () {
    function WindowSizeService() {
        var windowSize$ = createWindowSize$();
        this.width$ = windowSize$.pluck('width').distinctUntilChanged();
        this.height$ = windowSize$.pluck('height').distinctUntilChanged();
    }
    return WindowSizeService;
}());
WindowSizeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WindowSizeService);

var createWindowSize$ = function () {
    return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(window, 'resize')
        .map(getWindowSize)
        .startWith(getWindowSize())
        .publishReplay(1)
        .refCount();
};
var getWindowSize = function () {
    return {
        height: window.innerHeight,
        width: window.innerWidth
    };
};
//# sourceMappingURL=window-size.service.js.map

/***/ })

},[512]);
//# sourceMappingURL=main.bundle.js.map