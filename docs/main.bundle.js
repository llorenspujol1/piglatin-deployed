webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center; margin: 30px\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n<app-translator></app-translator>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'PigLatin Translator';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translator_translator_module__ = __webpack_require__("../../../../../src/translator/translator.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__translator_translator_module__["a" /* TranslatorModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/core/base.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck__);


var BaseModel = (function () {
    function BaseModel(initialValue) {
        if (initialValue === void 0) { initialValue = null; }
        this._model = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](initialValue);
        this._model.share();
    }
    BaseModel.prototype.update = function (value) {
        this._model.next(value);
    };
    BaseModel.prototype.updateProperty = function (propertyName, value) {
        var currentValue = Object.assign({}, this.getCurrentValue());
        currentValue[propertyName] = value;
        this.update(currentValue);
    };
    BaseModel.prototype.removeProperty = function (propertyName) {
        var currentValue = Object.assign({}, this.getCurrentValue());
        delete currentValue[propertyName];
        this.update(currentValue);
    };
    BaseModel.prototype.updateProperties = function (props) {
        var currentValue = Object.assign({}, this.getCurrentValue());
        props.forEach(function (_a) {
            var k = _a[0], v = _a[1];
            return currentValue[k] = v;
        });
        this.update(currentValue);
    };
    Object.defineProperty(BaseModel.prototype, "model$", {
        get: function () {
            return this._model.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    BaseModel.prototype.getPropertyValue = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return keys.reduce(function (value, currentKey) { return !!value ? value[currentKey] : value; }, this._model.value);
    };
    BaseModel.prototype.getCurrentValue = function () {
        return this._model.value;
    };
    BaseModel.prototype.getProperty = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return (_a = this._model).pluck.apply(_a, keys).distinctUntilChanged();
        var _a;
    };
    return BaseModel;
}());

//# sourceMappingURL=base.model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/shared/selector/selector.component.html":
/***/ (function(module, exports) {

module.exports = "<label [for]=\"uid\">{{label}}</label>\r\n<select [ngModel]=\"selectedItem\" (ngModelChange)=\"onChange($event)\">\r\n  <option *ngFor=\"let item of listItems\" [value]=\"item\">{{item}}</option>\r\n</select>\r\n"

/***/ }),

/***/ "../../../../../src/shared/selector/selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var nextUniqueId = 0;
var SelectorComponent = (function () {
    // constructor
    function SelectorComponent() {
        this._uid = "select-component-" + nextUniqueId++;
        /** notifies when a new item is clicked */
        this.itemClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(SelectorComponent.prototype, "uid", {
        get: function () { return this._uid; },
        enumerable: true,
        configurable: true
    });
    SelectorComponent.prototype.ngOnInit = function () {
    };
    SelectorComponent.prototype.onChange = function (item) {
        this.itemClicked.next(item);
    };
    return SelectorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SelectorComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], SelectorComponent.prototype, "listItems", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SelectorComponent.prototype, "selectedItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], SelectorComponent.prototype, "itemClicked", void 0);
SelectorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-selector',
        template: __webpack_require__("../../../../../src/shared/selector/selector.component.html")
    }),
    __metadata("design:paramtypes", [])
], SelectorComponent);

var _a;
//# sourceMappingURL=selector.component.js.map

/***/ }),

/***/ "../../../../../src/shared/selector/selector.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector_component__ = __webpack_require__("../../../../../src/shared/selector/selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectorComponentModule = (function () {
    function SelectorComponentModule() {
    }
    return SelectorComponentModule;
}());
SelectorComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__selector_component__["a" /* SelectorComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__selector_component__["a" /* SelectorComponent */]],
        providers: [],
    })
], SelectorComponentModule);

//# sourceMappingURL=selector.module.js.map

/***/ }),

/***/ "../../../../../src/translator/translator-input/translator-input.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea #translatorInput [(ngModel)]=\"text\" [readonly]=\"readonly\" class=\"form-control\" rows=\"5\" [id]=\"uid\"></textarea>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/translator/translator-input/translator-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n  resize: none;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/translator/translator-input/translator-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Unique id for translator inputs
var nextUniqueId = 0;
var TranslatorInputComponent = (function () {
    function TranslatorInputComponent() {
        this._uid = "translator-input-" + nextUniqueId++;
        /** Output event emitter for input changes */
        this.inputChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(TranslatorInputComponent.prototype, "uid", {
        get: function () { return this._uid; },
        enumerable: true,
        configurable: true
    });
    TranslatorInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(this.translatorInput.nativeElement, 'input')
            .debounceTime(600)
            .map(function (keyboardEvent) { return keyboardEvent.target.value; })
            .subscribe(function (value) {
            _this.inputChange.next(value);
        });
    };
    TranslatorInputComponent.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    return TranslatorInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('translatorInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], TranslatorInputComponent.prototype, "translatorInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TranslatorInputComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TranslatorInputComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], TranslatorInputComponent.prototype, "readonly", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
], TranslatorInputComponent.prototype, "inputChange", void 0);
TranslatorInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-translator-input',
        template: __webpack_require__("../../../../../src/translator/translator-input/translator-input.component.html"),
        styles: [__webpack_require__("../../../../../src/translator/translator-input/translator-input.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TranslatorInputComponent);

var _a, _b;
//# sourceMappingURL=translator-input.component.js.map

/***/ }),

/***/ "../../../../../src/translator/translator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"translator-container\">\r\n  <div>\r\n    <app-selector\r\n      [label]=\"'From Language'\"\r\n      [listItems]=\"translationService.availableLanguages\"\r\n      [selectedItem]=\"translatorModel.getProperty('fromLang') | async\"\r\n      (itemClicked)=\"changeLanguage('fromLang', $event)\"\r\n    ></app-selector>\r\n    <app-translator-input\r\n      [text]=\"translatorModel.getProperty('text') | async\"\r\n      [label]=\"translatorModel.getProperty('fromLang') | async\"\r\n      (inputChange)=\"updateInputText($event)\">\r\n    </app-translator-input>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"swapLanguages()\">\r\n    <span class=\"glyphicon glyphicon-transfer\"></span>\r\n  </button>\r\n  <div>\r\n    <app-selector\r\n      [label]=\"'To Language'\"\r\n      [listItems]=\"translationService.availableLanguages\"\r\n      [selectedItem]=\"translatorModel.getProperty('toLang') | async\"\r\n      (itemClicked)=\"changeLanguage('toLang', $event)\"\r\n    ></app-selector>\r\n    <app-translator-input\r\n      [text]=\"translatedText$ | async\"\r\n      [label]=\"translatorModel.getProperty('toLang') | async\"\r\n      [readonly]=\"true\">\r\n    </app-translator-input>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/translator/translator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".translator-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .translator-container button.btn-default {\n    height: 45px; }\n  .translator-container > div {\n    margin: 16px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    max-width: 250px; }\n\n@media (min-width: 400px) {\n  .translator-container {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/translator/translator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translator_service__ = __webpack_require__("../../../../../src/translator/translator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translator_model__ = __webpack_require__("../../../../../src/translator/translator.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslatorComponent = (function () {
    /** constructor function */
    function TranslatorComponent(translationService, translatorModel) {
        var _this = this;
        this.translationService = translationService;
        this.translatorModel = translatorModel;
        this.translatedText$ = translatorModel.model$.map(function (state) {
            return _this.translationService.translate(state.text, state.fromLang, state.toLang);
        });
    }
    /**
     * Updates the model with a new value of the input text
     * @param value
     */
    TranslatorComponent.prototype.updateInputText = function (value) {
        this.translatorModel.updateProperty('text', value);
    };
    /**
     * Changes the language on the model
     * @param prop
     * @param language
     */
    TranslatorComponent.prototype.changeLanguage = function (prop, language) {
        this.translatorModel.updateProperty(prop, language);
    };
    /**
     * Fired when swap language button is clicked. Uses the reducer function in order to calculate the new state
     */
    TranslatorComponent.prototype.swapLanguages = function () {
        var newState = swapLanguagesReducer(this.translatorModel.getCurrentValue());
        this.translatorModel.update(newState);
    };
    return TranslatorComponent;
}());
TranslatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-translator',
        template: __webpack_require__("../../../../../src/translator/translator.component.html"),
        styles: [__webpack_require__("../../../../../src/translator/translator.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__translator_model__["a" /* TranslatorModel */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translator_service__["a" /* TranslatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translator_service__["a" /* TranslatorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__translator_model__["a" /* TranslatorModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__translator_model__["a" /* TranslatorModel */]) === "function" && _b || Object])
], TranslatorComponent);

/**
 * Reducer function that switches the languages and returns the new computed state
 * @param state
 * @returns {TranslatorState}
 */
var swapLanguagesReducer = function (state) {
    var newState = {
        fromLang: state.toLang,
        toLang: state.fromLang,
        text: state.text
    };
    return newState;
};
var _a, _b;
//# sourceMappingURL=translator.component.js.map

/***/ }),

/***/ "../../../../../src/translator/translator.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_base_model__ = __webpack_require__("../../../../../src/core/base.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var initialState = {
    fromLang: 'en',
    toLang: 'pg',
    text: 'this is the piglatin translator'
};
var TranslatorModel = (function (_super) {
    __extends(TranslatorModel, _super);
    function TranslatorModel() {
        return _super.call(this, initialState) || this;
    }
    return TranslatorModel;
}(__WEBPACK_IMPORTED_MODULE_0__core_base_model__["a" /* BaseModel */]));
TranslatorModel = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TranslatorModel);

//# sourceMappingURL=translator.model.js.map

/***/ }),

/***/ "../../../../../src/translator/translator.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export translatorServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translator_component__ = __webpack_require__("../../../../../src/translator/translator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translator_input_translator_input_component__ = __webpack_require__("../../../../../src/translator/translator-input/translator-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator_service__ = __webpack_require__("../../../../../src/translator/translator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_selector_selector_module__ = __webpack_require__("../../../../../src/shared/selector/selector.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var translatorServiceFactory = function () {
    return new __WEBPACK_IMPORTED_MODULE_3__translator_service__["a" /* TranslatorService */]({ languages: ['en', 'pg'] });
};
var TranslatorModule = (function () {
    function TranslatorModule() {
    }
    return TranslatorModule;
}());
TranslatorModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__shared_selector_selector_module__["a" /* SelectorComponentModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__translator_component__["a" /* TranslatorComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__translator_component__["a" /* TranslatorComponent */], __WEBPACK_IMPORTED_MODULE_2__translator_input_translator_input_component__["a" /* TranslatorInputComponent */]],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__translator_service__["a" /* TranslatorService */],
                useFactory: translatorServiceFactory
            }
        ],
    })
], TranslatorModule);

//# sourceMappingURL=translator.module.js.map

/***/ }),

/***/ "../../../../../src/translator/translator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translators_piglatin_english_translator__ = __webpack_require__("../../../../../src/translator/translators/piglatin-english.translator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatorService = (function () {
    function TranslatorService(config) {
        this.config = config;
        this._availableLanguages = this.config.languages.slice();
    }
    Object.defineProperty(TranslatorService.prototype, "availableLanguages", {
        get: function () { return this._availableLanguages; },
        enumerable: true,
        configurable: true
    });
    TranslatorService.prototype.translate = function (value, originLang, destinationLang) {
        // check possible language incompatibilities
        if (!isAvailableLanguage(this._availableLanguages, originLang)) {
            console.error("Language " + originLang + " is not an available language");
            return '';
        }
        if (!isAvailableLanguage(this._availableLanguages, destinationLang)) {
            console.error("Language " + destinationLang + " is not an available language");
            return '';
        }
        // calculate result
        if (originLang === destinationLang) {
            return value;
        }
        else if (originLang === 'en') {
            return Object(__WEBPACK_IMPORTED_MODULE_1__translators_piglatin_english_translator__["a" /* translateTextWords */])(value, __WEBPACK_IMPORTED_MODULE_1__translators_piglatin_english_translator__["b" /* translateWordEnToPg */]);
        }
        else if (originLang === 'pg') {
            return Object(__WEBPACK_IMPORTED_MODULE_1__translators_piglatin_english_translator__["a" /* translateTextWords */])(value, __WEBPACK_IMPORTED_MODULE_1__translators_piglatin_english_translator__["c" /* translateWordPgToEn */]);
        }
    };
    return TranslatorService;
}());
TranslatorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [Object])
], TranslatorService);

var isAvailableLanguage = function (languages, language) { return !!languages.find(function (item) { return item === language; }); };
//# sourceMappingURL=translator.service.js.map

/***/ }),

/***/ "../../../../../src/translator/translators/piglatin-english.translator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = translateTextWords;
/* harmony export (immutable) */ __webpack_exports__["c"] = translateWordPgToEn;
/* harmony export (immutable) */ __webpack_exports__["b"] = translateWordEnToPg;
/**
 * Given a text applies the function callbackfn to every word on the array and returns all words as a text
 * @param text
 * @param callbackfn
 * @returns {string}
 */
/**
 * Given a text applies the function callbackfn to every word on the array and returns all words as a text
 * @param text
 * @param callbackfn
 * @returns {string}
 */ function translateTextWords(text, callbackfn) {
    var textSplit = text.split(' ');
    textSplit = textSplit.map(function (word) { return callbackfn(word); });
    return textSplit.join(' ');
}
/**
 * Returns the word translated from PigLatin to English
 * @param word
 * @returns {string}
 */
function translateWordPgToEn(word) {
    // if word is length === 0 or null return empty string,
    if (!word) {
        return '';
    }
    var first = '';
    var second = '';
    var last = 'ay';
    if (word.substring(word.length - 2, word.length) === last) {
        // word is immutable so we can modificate
        second = word.substring(0, word.length - 3);
        first = word.charAt(word.length - 3);
        return first + second;
    }
    else {
        return word;
    }
}
/**
 * Returns the word translated from English to PigLatin
 * @param word
 * @returns {string}
 */
function translateWordEnToPg(word) {
    // if word is length === 0 or null return empty string,
    if (!word) {
        return '';
    }
    var first = '';
    var second = '';
    var last = 'ay';
    for (var i = 0; i < word.length; i++) {
        if (vowels.includes(word.charAt(i))) {
            if (i > 0 && word.charAt(i - 1) === 'q' && word.charAt(i) === 'u') {
                continue;
            }
            if (i > 0 && word.charAt(i - 1) === 'c' && vowelsEI.includes(word.charAt(i))) {
                word = replaceAt(word, i - 1, 's'); // change the sound 'c' for 's'
            }
            second = word.substring(0, i);
            first = word.substring(i, word.length);
            break;
        }
    }
    return first + second + last;
}
/**
 * Helper function that replaces an item in the string and return the new one
 * @param source
 * @param index
 * @param replacement
 * @returns {string}
 */
function replaceAt(source, index, replacement) {
    return source.substr(0, index) + replacement + source.substr(index + replacement.length);
}
var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
var vowelsEI = ['e', 'i', 'E', 'I'];
//# sourceMappingURL=piglatin-english.translator.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map