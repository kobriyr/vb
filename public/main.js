(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-article-page/about-article-page.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/about-article-page/about-article-page.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".author-article {\n  font-family: ArnoPro-SmbdSubhead;\n  margin-bottom: 30px;\n}\n\n.title-article {\n  font-size: 36px;\n  font-family: ArnoPro-SmbdSubhead;\n}\n\n.key-words-article {\n  margin-bottom: 10px;\n}\n\n.summary-article {\n  margin-bottom: 10px;\n  font-family: ArnoPro-ItalicSmText;\n}\n\n.summary-en-article {\n  margin-bottom: 10px;\n}\n\n.link-article {\n\n}\n\n.article-info {\n  font-size: 20px;\n  font-family: ArnoPro-SmText;\n}\n\n.btn-article {\n  background-color: #007398;\n  margin: 0 10px;\n}\n"

/***/ }),

/***/ "./src/app/about-article-page/about-article-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/about-article-page/about-article-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-info\">\n  <div *ngIf=\"article.title\" class=\"title-article\">{{ article.title }}</div>\n  <div *ngIf=\"article.author\" class=\"author-article\">{{ article.author }}</div>\n  <div *ngIf=\"article.key_words\" class=\"key-words-article\">Ключові слова: {{ article.key_words }}</div>\n  <div *ngIf=\"article.summary\" class=\"summary-article\">Анотація: {{ article.summary }}</div>\n  <div *ngIf=\"article.document\" class=\"link-article\">\n    <a href=\"{{ article.document }}\" class=\"waves-effect waves-light btn btn-article\">\n      Переглянути статтю\n    </a>\n    <a target=\"_self\"\n       href=\"{{ article.document }}\"\n       download=\"{{ docName }}\"\n       class=\"waves-effect waves-light btn btn-article\">\n      Скачати статтю\n    </a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/about-article-page/about-article-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/about-article-page/about-article-page.component.ts ***!
  \********************************************************************/
/*! exports provided: AboutArticlePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutArticlePageComponent", function() { return AboutArticlePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var _node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/article.service */ "./src/app/shared/services/article.service.ts");
/* harmony import */ var _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutArticlePageComponent = /** @class */ (function () {
    function AboutArticlePageComponent(router, articleService) {
        this.router = router;
        this.articleService = articleService;
    }
    AboutArticlePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params
            .pipe(Object(_node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            if (params['id']) {
                return _this.articleService.getById(params['id']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }))
            .subscribe(function (article) {
            if (article) {
                _this.article = article;
                _this.docName = article.document.substr(11);
            }
        }, function (error) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_5__["MaterializeService"].toast(error.error.message);
        });
    };
    AboutArticlePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-article-page',
            template: __webpack_require__(/*! ./about-article-page.component.html */ "./src/app/about-article-page/about-article-page.component.html"),
            styles: [__webpack_require__(/*! ./about-article-page.component.css */ "./src/app/about-article-page/about-article-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]])
    ], AboutArticlePageComponent);
    return AboutArticlePageComponent;
}());



/***/ }),

/***/ "./src/app/about-page/about-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b>«Волинський благовісник»</b> – щорічний богословсько-історичний науковий журнал Волинської православної богословської академії Української Православної Церкви Київського Патріархату у якому висвітлюються актуальні проблеми богословських та історичних наук.</p>\n  <p>Удосконалення навчального і наукового процесу та розбудова інфраструктури Волинської духовної семінарії призвели до її реорганізації у Волинську православну богословську академію (згідно з рішенням Священного Синоду УПЦ КП від 13 травня 2011 року). Статус духовної Академії активізував викладачів та студентів до наполегливої дослідницької наукової праці, в результаті чого з’явилась чимала кількість наукових доробків. Тому на кількох засіданнях Вченої ради ВПБА у 2013 році та тривалих обговореннях було вирішено запровадити видання наукового журналу Академії, перший номер якого вийшов у світ в 2013 році до Актового дня духовної школи.</p>\n  <p>Протягом наступних років утвердилась гарна традиція, напередодні Актового дня Волинської православної богословської академії, Церква Христова прославляє пам'ять усіх святих землі Волинської – презентувати результати наукової праці професорського-викладацького складу Академії у вигляді нового номеру щорічного журналу «Волинського благовісника».</p>\n  <p>У 2017 році науковий журнал отримує загальнодержавне розповсюдження.</p>\n  <p>Тематика статей у «Волинському благовіснику» розміщених у таких традиційних рубриках, як  «Богослів’я», «Літургіка», «Церковна історія», «Церковне право», «Постаті», «Церква та суспільство» та інших, відображає сферу наукових зацікавлень та пошуків професорсько-викладацького складу ВПБА. Однак, окрім напрацювання штатних працівників ВПБА, у науковому журналі розміщуються дослідження науковців як українських так і закордонних, з якими існує тісна співпраця у сфері богослів’я, церковної історії, сакрального мистецтва та питань суспільно-соціальної площини.</p>\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/classes/auth.guard */ "./src/app/shared/classes/auth.guard.ts");
/* harmony import */ var _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layouts/main-layout/main-layout.component */ "./src/app/shared/layouts/main-layout/main-layout.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _editorial_board_page_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editorial-board-page/editorial-board-page.component */ "./src/app/editorial-board-page/editorial-board-page.component.ts");
/* harmony import */ var _for_authors_page_for_authors_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./for-authors-page/for-authors-page.component */ "./src/app/for-authors-page/for-authors-page.component.ts");
/* harmony import */ var _journal_numbers_page_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./journal-numbers-page/journal-numbers-page.component */ "./src/app/journal-numbers-page/journal-numbers-page.component.ts");
/* harmony import */ var _reviewing_page_reviewing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviewing-page/reviewing-page.component */ "./src/app/reviewing-page/reviewing-page.component.ts");
/* harmony import */ var _shared_layouts_en_main_layout_en_main_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/layouts/en-main-layout/en-main-layout.component */ "./src/app/shared/layouts/en-main-layout/en-main-layout.component.ts");
/* harmony import */ var _en_about_page_en_about_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./en-about-page/en-about-page.component */ "./src/app/en-about-page/en-about-page.component.ts");
/* harmony import */ var _en_editorial_board_page_en_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./en-editorial-board-page/en-editorial-board-page.component */ "./src/app/en-editorial-board-page/en-editorial-board-page.component.ts");
/* harmony import */ var _en_for_authors_page_en_for_authors_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./en-for-authors-page/en-for-authors-page.component */ "./src/app/en-for-authors-page/en-for-authors-page.component.ts");
/* harmony import */ var _en_journal_numbers_page_en_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./en-journal-numbers-page/en-journal-numbers-page.component */ "./src/app/en-journal-numbers-page/en-journal-numbers-page.component.ts");
/* harmony import */ var _en_reviewing_page_en_reviewing_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./en-reviewing-page/en-reviewing-page.component */ "./src/app/en-reviewing-page/en-reviewing-page.component.ts");
/* harmony import */ var _en_main_page_en_main_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./en-main-page/en-main-page.component */ "./src/app/en-main-page/en-main-page.component.ts");
/* harmony import */ var _tom_page_tom_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tom-page/tom-page.component */ "./src/app/tom-page/tom-page.component.ts");
/* harmony import */ var _tom_page_form_tom_page_form_tom_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tom-page/form-tom-page/form-tom-page.component */ "./src/app/tom-page/form-tom-page/form-tom-page.component.ts");
/* harmony import */ var _tom_page_show_tom_page_show_tom_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tom-page/show-tom-page/show-tom-page.component */ "./src/app/tom-page/show-tom-page/show-tom-page.component.ts");
/* harmony import */ var _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./article-page/article-page.component */ "./src/app/article-page/article-page.component.ts");
/* harmony import */ var _about_article_page_about_article_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./about-article-page/about-article-page.component */ "./src/app/about-article-page/about-article-page.component.ts");
/* harmony import */ var _en_about_article_page_en_about_article_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./en-about-article-page/en-about-article-page.component */ "./src/app/en-about-article-page/en-about-article-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: 'login', component: _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"], children: [
            { path: '', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] }
        ] },
    { path: 'admin', component: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_4__["SiteLayoutComponent"], canActivate: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], children: [
            { path: '', component: _tom_page_tom_page_component__WEBPACK_IMPORTED_MODULE_20__["TomPageComponent"] },
            { path: 'tom/create', component: _tom_page_form_tom_page_form_tom_page_component__WEBPACK_IMPORTED_MODULE_21__["FormTomPageComponent"] },
            { path: 'tom/edit/:id', component: _tom_page_form_tom_page_form_tom_page_component__WEBPACK_IMPORTED_MODULE_21__["FormTomPageComponent"] },
            { path: 'tom/:id', component: _tom_page_show_tom_page_show_tom_page_component__WEBPACK_IMPORTED_MODULE_22__["ShowTomPageComponent"] },
            { path: 'tom/:tom/article/create', component: _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_23__["ArticlePageComponent"] },
            { path: 'tom/:tom/article/:id', component: _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_23__["ArticlePageComponent"] }
        ] },
    { path: 'en', component: _shared_layouts_en_main_layout_en_main_layout_component__WEBPACK_IMPORTED_MODULE_13__["EnMainLayoutComponent"], children: [
            { path: 'about', component: _en_about_page_en_about_page_component__WEBPACK_IMPORTED_MODULE_14__["EnAboutPageComponent"] },
            { path: 'editorial-board', component: _en_editorial_board_page_en_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_15__["EnEditorialBoardPageComponent"] },
            { path: 'for-authors', component: _en_for_authors_page_en_for_authors_page_component__WEBPACK_IMPORTED_MODULE_16__["EnForAuthorsPageComponent"] },
            { path: 'journal-numbers', component: _en_journal_numbers_page_en_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_17__["EnJournalNumbersPageComponent"] },
            { path: 'reviewing', component: _en_reviewing_page_en_reviewing_page_component__WEBPACK_IMPORTED_MODULE_18__["EnReviewingPageComponent"] },
            { path: '', component: _en_main_page_en_main_page_component__WEBPACK_IMPORTED_MODULE_19__["EnMainPageComponent"] },
            { path: ':id', component: _en_about_article_page_en_about_article_page_component__WEBPACK_IMPORTED_MODULE_25__["EnAboutArticlePageComponent"] }
        ] },
    { path: '', component: _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"], children: [
            { path: 'about', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"] },
            { path: 'editorial-board', component: _editorial_board_page_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_9__["EditorialBoardPageComponent"] },
            { path: 'for-authors', component: _for_authors_page_for_authors_page_component__WEBPACK_IMPORTED_MODULE_10__["ForAuthorsPageComponent"] },
            { path: 'journal-numbers', component: _journal_numbers_page_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_11__["JournalNumbersPageComponent"] },
            { path: 'reviewing', component: _reviewing_page_reviewing_page_component__WEBPACK_IMPORTED_MODULE_12__["ReviewingPageComponent"] },
            { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"] },
            { path: ':id', component: _about_article_page_about_article_page_component__WEBPACK_IMPORTED_MODULE_24__["AboutArticlePageComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var potentialToken = localStorage.getItem('auth-token');
        if (potentialToken !== null) {
            this.auth.setToken(potentialToken);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/classes/token.interceptor */ "./src/app/shared/classes/token.interceptor.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/layouts/main-layout/main-layout.component */ "./src/app/shared/layouts/main-layout/main-layout.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _editorial_board_page_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editorial-board-page/editorial-board-page.component */ "./src/app/editorial-board-page/editorial-board-page.component.ts");
/* harmony import */ var _for_authors_page_for_authors_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./for-authors-page/for-authors-page.component */ "./src/app/for-authors-page/for-authors-page.component.ts");
/* harmony import */ var _journal_numbers_page_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./journal-numbers-page/journal-numbers-page.component */ "./src/app/journal-numbers-page/journal-numbers-page.component.ts");
/* harmony import */ var _reviewing_page_reviewing_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reviewing-page/reviewing-page.component */ "./src/app/reviewing-page/reviewing-page.component.ts");
/* harmony import */ var _shared_layouts_en_main_layout_en_main_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/layouts/en-main-layout/en-main-layout.component */ "./src/app/shared/layouts/en-main-layout/en-main-layout.component.ts");
/* harmony import */ var _en_about_page_en_about_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./en-about-page/en-about-page.component */ "./src/app/en-about-page/en-about-page.component.ts");
/* harmony import */ var _en_editorial_board_page_en_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./en-editorial-board-page/en-editorial-board-page.component */ "./src/app/en-editorial-board-page/en-editorial-board-page.component.ts");
/* harmony import */ var _en_for_authors_page_en_for_authors_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./en-for-authors-page/en-for-authors-page.component */ "./src/app/en-for-authors-page/en-for-authors-page.component.ts");
/* harmony import */ var _en_journal_numbers_page_en_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./en-journal-numbers-page/en-journal-numbers-page.component */ "./src/app/en-journal-numbers-page/en-journal-numbers-page.component.ts");
/* harmony import */ var _en_reviewing_page_en_reviewing_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./en-reviewing-page/en-reviewing-page.component */ "./src/app/en-reviewing-page/en-reviewing-page.component.ts");
/* harmony import */ var _en_main_page_en_main_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./en-main-page/en-main-page.component */ "./src/app/en-main-page/en-main-page.component.ts");
/* harmony import */ var _tom_page_tom_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tom-page/tom-page.component */ "./src/app/tom-page/tom-page.component.ts");
/* harmony import */ var _tom_page_form_tom_page_form_tom_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tom-page/form-tom-page/form-tom-page.component */ "./src/app/tom-page/form-tom-page/form-tom-page.component.ts");
/* harmony import */ var _tom_page_show_tom_page_show_tom_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tom-page/show-tom-page/show-tom-page.component */ "./src/app/tom-page/show-tom-page/show-tom-page.component.ts");
/* harmony import */ var _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./article-page/article-page.component */ "./src/app/article-page/article-page.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _about_article_page_about_article_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./about-article-page/about-article-page.component */ "./src/app/about-article-page/about-article-page.component.ts");
/* harmony import */ var _en_about_article_page_en_about_article_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./en-about-article-page/en-about-article-page.component */ "./src/app/en-about-article-page/en-about-article-page.component.ts");
/* harmony import */ var _search_en_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./search-en.pipe */ "./src/app/search-en.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
                _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
                _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_7__["SiteLayoutComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"],
                _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__["MainPageComponent"],
                _editorial_board_page_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_13__["EditorialBoardPageComponent"],
                _for_authors_page_for_authors_page_component__WEBPACK_IMPORTED_MODULE_14__["ForAuthorsPageComponent"],
                _journal_numbers_page_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_15__["JournalNumbersPageComponent"],
                _reviewing_page_reviewing_page_component__WEBPACK_IMPORTED_MODULE_16__["ReviewingPageComponent"],
                _shared_layouts_en_main_layout_en_main_layout_component__WEBPACK_IMPORTED_MODULE_17__["EnMainLayoutComponent"],
                _en_about_page_en_about_page_component__WEBPACK_IMPORTED_MODULE_18__["EnAboutPageComponent"],
                _en_editorial_board_page_en_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_19__["EnEditorialBoardPageComponent"],
                _en_for_authors_page_en_for_authors_page_component__WEBPACK_IMPORTED_MODULE_20__["EnForAuthorsPageComponent"],
                _en_journal_numbers_page_en_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_21__["EnJournalNumbersPageComponent"],
                _en_reviewing_page_en_reviewing_page_component__WEBPACK_IMPORTED_MODULE_22__["EnReviewingPageComponent"],
                _en_main_page_en_main_page_component__WEBPACK_IMPORTED_MODULE_23__["EnMainPageComponent"],
                _tom_page_tom_page_component__WEBPACK_IMPORTED_MODULE_24__["TomPageComponent"],
                _tom_page_form_tom_page_form_tom_page_component__WEBPACK_IMPORTED_MODULE_25__["FormTomPageComponent"],
                _tom_page_show_tom_page_show_tom_page_component__WEBPACK_IMPORTED_MODULE_26__["ShowTomPageComponent"],
                _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_27__["ArticlePageComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_28__["SearchPipe"],
                _about_article_page_about_article_page_component__WEBPACK_IMPORTED_MODULE_29__["AboutArticlePageComponent"],
                _en_about_article_page_en_about_article_page_component__WEBPACK_IMPORTED_MODULE_30__["EnAboutArticlePageComponent"],
                _search_en_pipe__WEBPACK_IMPORTED_MODULE_31__["SearchEnPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    multi: true,
                    useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-page/article-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/article-page/article-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n\n.dn {\n  display: none;\n}\n\n.h200 {\n  height: 200px;\n}\n\n.page-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px 0;\n}\n\n.page-title a {\n  color: black;\n  opacity: .8;\n}\n"

/***/ }),

/***/ "./src/app/article-page/article-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-page/article-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-title\">\n    <h4>\n      <a routerLink=\"/admin\">Статті</a>\n      <i class=\"material-icons\">keyboard_arrow_right</i>\n      {{ isNew ? 'Додати' : 'Редагувати' }} статтю\n    </h4>\n    <span>\n      <button *ngIf=\"!isNew\" class=\"btn btn-small red\" (click)=\"deleteArticle()\">\n        <i class=\"material-icons\">delete</i>\n      </button>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s12 l6\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"input-field\">\n        <input pattern=\"[1-9]*\" formControlName=\"number\" id=\"number\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('number').invalid && form.get('number').touched }\">\n        <label for=\"number\">Номер</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('number').invalid && form.get('number').touched\">\n        <span *ngIf=\"form.get('number').errors['required']\">\n          Номер повинен бути зазначений.\n        </span>\n        <span *ngIf=\"form.get('number').errors['pattern']\">\n          Дані повинні бути числом.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"author\" id=\"author\" type=\"text\">\n        <label for=\"author\">Автор</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"author_en\" id=\"author_en\" type=\"text\">\n        <label for=\"author\">Author</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"title\" id=\"title\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('title').invalid && form.get('title').touched }\">\n        <label for=\"title\">Назва</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('title').invalid && form.get('title').touched\">\n        <span *ngIf=\"form.get('title').errors['required']\">\n          Назва повинна бути зазначена.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"title_en\" id=\"title_en\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('title_en').invalid && form.get('title_en').touched }\">\n        <label for=\"title\">Title</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('title_en').invalid && form.get('title_en').touched\">\n        <span *ngIf=\"form.get('title_en').errors['required']\">\n          Title повинен бути зазначений.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"pages\" id=\"pages\" type=\"text\">\n        <label for=\"pages\">Сторінки</label>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea formControlName=\"summary\"  id=\"summary\" class=\"materialize-textarea\" #textArea></textarea>\n        <label for=\"summary\">Анотація</label>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea formControlName=\"summary_en\"  id=\"summary_en\" class=\"materialize-textarea\" #textAreaEn></textarea>\n        <label for=\"summary_en\">Summary</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"key_words\" id=\"key_words\" type=\"text\">\n        <label for=\"key_words\">Ключові слова</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"key_words_en\" id=\"key_words_en\" type=\"text\">\n        <label for=\"key_words\">Key words</label>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea formControlName=\"references\"  id=\"references\" class=\"materialize-textarea\" #textAreaRef></textarea>\n        <label for=\"summary\">Список літератури</label>\n      </div>\n\n      <div class=\"file-field input-field\">\n        <div class=\"btn\">\n          <span>Загрузити документ</span>\n          <input [disabled]=\"docValid\" (change)=\"onFileUpload($event)\" type=\"file\" #inputFile>\n        </div>\n        <div class=\"file-path-wrapper\">\n          <input  formControlName=\"file\" class=\"file-path validate\" type=\"text\">\n        </div>\n      </div>\n\n      <div>\n        <button type=\"submit\" class=\"waves-effect waves-light btn\" [disabled]=\"form.invalid || form.disabled || validFile\">\n          Зберегти\n        </button>\n      </div>\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/article-page/article-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-page/article-page.component.ts ***!
  \********************************************************/
/*! exports provided: ArticlePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageComponent", function() { return ArticlePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/article.service */ "./src/app/shared/services/article.service.ts");
/* harmony import */ var _node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var _node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticlePageComponent = /** @class */ (function () {
    function ArticlePageComponent(router, articleService, route) {
        this.router = router;
        this.articleService = articleService;
        this.route = route;
        this.isNew = true;
        this.tom = null;
        this.validFile = false;
    }
    ArticlePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            author_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            title_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            pages: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            key_words: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            key_words_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            summary_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            references: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.form.disable();
        this.router.params
            .pipe(Object(_node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            if (params['id']) {
                _this.isNew = false;
                return _this.articleService.getById(params['id']);
            }
            if (params['tom']) {
                _this.tom = params['tom'];
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }))
            .subscribe(function (article) {
            if (article) {
                _this.article = article;
                _this.form.patchValue({
                    number: article.number,
                    author: article.author,
                    author_en: article.author_en,
                    title: article.title,
                    title_en: article.title_en,
                    pages: article.pages,
                    key_words: article.key_words,
                    key_words_en: article.key_words_en,
                    summary: article.summary,
                    summary_en: article.summary_en,
                    references: article.references,
                    file: article.document
                });
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].updateTextInputs();
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].textareaAuto(_this.textAreaRef);
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].textareaAuto(_this.textAreaEnRef);
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].textareaAuto(_this.textAreaRefRef);
            }
            _this.form.enable();
        }, function (error) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast(error.error.message);
        });
    };
    ArticlePageComponent.prototype.onSubmit = function () {
        var _this = this;
        var obs$;
        this.form.disable();
        if (this.isNew) {
            obs$ = this.articleService.create(this.tom, this.form.value.author, this.form.value.author_en, this.form.value.number, this.form.value.title, this.form.value.title_en, this.form.value.pages, this.form.value.key_words, this.form.value.key_words_en, this.form.value.summary, this.form.value.summary_en, this.form.value.references, this.file);
        }
        else {
            obs$ = this.articleService.update(this.article.id, this.form.value.author, this.form.value.author_en, this.form.value.number, this.form.value.title, this.form.value.title_en, this.form.value.pages, this.form.value.key_words, this.form.value.key_words_en, this.form.value.summary, this.form.value.summary_en, this.form.value.references, this.file);
        }
        obs$.subscribe(function (article) {
            _this.article = article;
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast('Зміни збережені.');
            _this.form.enable();
        }, function (error) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast(error.error.message);
            _this.form.enable();
        });
    };
    ArticlePageComponent.prototype.onFileUpload = function (event) {
        var file = event.target.files[0];
        if (file.size > 25 * 1024 * 1024) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast('Розмір файлу перевищує 25 Mb. Виберіть інший файл.');
            this.validFile = true;
        }
        else {
            if (file.type === 'application/pdf') {
                var filetypes = /pdf|doc|docx|xls|xlsx|wps/;
                if (filetypes.test(file.name.split('.')[1].toLowerCase())) {
                    this.validFile = false;
                    this.file = file;
                }
                else {
                    _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast('Тип файлу не pdf. Завантежте інший файл.');
                }
            }
            else {
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast('Завантажте файл в pdf форматі.');
                this.validFile = true;
            }
        }
    };
    ArticlePageComponent.prototype.deleteArticle = function () {
        var _this = this;
        var desicion = window.confirm('Ви впевнені що хочите видалити статтю ?');
        if (desicion) {
            this.articleService.delete(this.article.id)
                .subscribe(function () { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast('Статтю успішно видалено!'); }, function (err) { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast(err.error.message); }, function () { return _this.route.navigate(["/admin/tom/" + _this.tom]); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ArticlePageComponent.prototype, "textAreaRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textAreaEn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ArticlePageComponent.prototype, "textAreaEnRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textAreaRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ArticlePageComponent.prototype, "textAreaRefRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ArticlePageComponent.prototype, "inputFileRef", void 0);
    ArticlePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-page',
            template: __webpack_require__(/*! ./article-page.component.html */ "./src/app/article-page/article-page.component.html"),
            styles: [__webpack_require__(/*! ./article-page.component.css */ "./src/app/article-page/article-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArticlePageComponent);
    return ArticlePageComponent;
}());



/***/ }),

/***/ "./src/app/editorial-board-page/editorial-board-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/editorial-board-page/editorial-board-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.collapsible div.collapsible-header {\n    display: block;\n}"

/***/ }),

/***/ "./src/app/editorial-board-page/editorial-board-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/editorial-board-page/editorial-board-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible popout\" #collapse>\n  <li>\n    <div class=\"collapsible-header\"><b>Волинський благовісник:</b> богословсько-історичний науковий журнал Волинської православної богословської академії Української Православної Церкви Київського Патріархату. – Луцьк: Видавництво Волинської православної богословської академії EIKΩN, 2013. – №1. – 288 с.</div>\n    <div class=\"collapsible-body\">\n      <p><b>Редакційна колегія:</b></p>\n      <p><i>Головний редактор</i> – протоієрей Ігор Швець, кандидат богословських наук, ректор ВПБА.</p>\n      <p><i>Заступник головного редактора</i> – свящ. Володимир Вакін, к.б.н., проректор з науково дослідницької роботи ВПБА.</p>\n      <p><i>Відповідальний секретар</i> – свящ. Андрій Хром’як, к.б.н.</p>\n      <p><i>Члени редакційної колегії:</i> свящ. Василь Лозовицький, к.б.н., проректор з навчальної роботи ВПБА; прот. Ігор Скиба, секретар вченої ради ВПБА; прот. Віталій Лотоцький, к.б.н.; прот. Миколай Цап’юк, к.б.н.; свящ. Ярослав Черенюк, к.б.н.; Кучинко Михайло Михайлович, проф., д.і.н.; Рожко Володимир Євтухович, к.ц-і.н.; Сацик Ігор Каленикович, к.філос. н.</p>\n    </div>\n  </li>\n  <li>\n    <div class=\"collapsible-header\"><b>Волинський благовісник:</b> богословсько-історичний науковий журнал Волинської православної богословської академії Української Православної Церкви Київського Патріархату. – Луцьк: Видавництво Волинської православної богословської академії EIKΩN, 2014. – №2. – 368 с.</div>\n    <div class=\"collapsible-body\">\n      <p><b>Редакційна колегія:</b></p>\n      <p><i>Головний редактор</i> – прот. Володимир Вакін, кандидат богословських наук, ректор ВПБА.</p>\n      <p><i>Заступник головного редактора</i> – свящ. Ярослав Черенюк, к.б.н., проректор з науково-дослідницької роботи ВПБА.</p>\n      <p><i>Відповідальний секретар</i> – Сацик Ігор Каленикович, к.ф.н.</p>\n      <p><i>Члени редакційної колегії:</i> свящ. Василь Лозовицький, к.б.н., проректор з навчальної роботи ВПБА; прот. Ігор Скиба, секретар вченої ради ВПБА; прот. Миколай Цап; прот. Миколай Цап’юк, к.б.н.; прот. Василь Клочак; Жулинський Микола Григорович, академік НАН України; Кучинко Михайло Михайлович, проф., д.і.н.</p>\n    </div>\n  </li>\n  <li>\n    <div class=\"collapsible-header\"><b>Волинський благовісник:</b> богословсько-історичний науковий журнал Волинської православної богословської академії Української Православної Церкви Київського Патріархату. – Луцьк: Видавництво Волинської православної богословської академії EIKΩN, 2015. – №3. – 368 с.</div>\n    <div class=\"collapsible-body\">\n      <p><b>Редакційна колегія:</b></p>\n      <p><i>Головний редактор</i> – прот. Володимир Вакін, кандидат богословських наук, доцент, ректор ВПБА.</p>\n      <p><i>Заступник головного редактора</i> – свящ. Ярослав Черенюк, к.б.н., доцент, проректор з науково-дослідницької роботи ВПБА.</p>\n      <p><i>Відповідальний секретар</i> – Сацик Ігор Каленикович, к. ф. н.</p>\n      <p><i>Члени редакційної колегії:</i> прот. Ігор Скиба, проректор з навчальної роботи ВПБА; свящ. Василь Лозовицький, к.б.н., доцент, секретар вченої ради ВПБА; прот. Миколай Цап’юк, к.б.н.; прот. Миколай Цап; прот. Василь Клочак; Жулинський Микола Григорович, д. ф. н., академік НАН України; Кучинко Михайло Михайлович, проф., д. і. н.</p>\n    </div>\n  </li>\n  <li>\n    <div class=\"collapsible-header\"><b>Волинський благовісник:</b> богословсько-історичний науковий журнал Волинської православної богословської академії Української Православної Церкви Київського Патріархату. – Луцьк: Видавництво Волинської православної богословської академії EIKΩN, 2016. – №4. – 352 с.</div>\n    <div class=\"collapsible-body\">\n      <p><b>Редакційна колегія:</b></p>\n      <p><i>Головний редактор</i> – прот. Володимир Вакін, кандидат богословських наук, доцент, ректор ВПБА.</p>\n      <p><i>Заступник головного редактора</i> – свящ. Ярослав Черенюк, к. б. н., доцент.</p>\n      <p><i>Відповідальний секретар</i> – Сацик Ігор Каленикович, к. ф. н., доцент.</p>\n      <p><i>Члени редакційної колегії:</i> митрополит Михаїл (Зінкевич), д. б. н.; прот. Богдан Гринів, д. б. н.; Стецько В’ячеслав Анатолійович, д. б. н.; Жулинський Микола Григорович, д. ф. н., академік НАН; Кучинко Михайло Михайлович, проф., д. і. н.; Головей Вікторія Юріївна, проф., д. ф. н.; Кучерепа Микола Михайлович, проф., к. і. н.; прот. Василь Лозовицький, к. б. н., доцент; прот. Миколай Цап’юк, к. б. н.</p>\n    </div>\n  </li>\n  <li>\n    <div class=\"collapsible-header\"><b>Волинський благовісник:</b> богословсько-історичний науковий журнал Волинської православної богословської академії Української Православної Церкви Київського Патріархату. – Луцьк: Видавництво Волинської православної богословської академії EIKΩN, 2017. – №5. – 368 с.</div>\n    <div class=\"collapsible-body\">\n      <p><b>Редакційна колегія:</b></p>\n      <p><i>Головний редактор</i> – прот. Володимир Вакін, кандидат богословських наук, доцент, ректор ВПБА.</p>\n      <p><i>Заступник головного редактора</i> – свящ. Ярослав Черенюк, к. б. н., доцент.</p>\n      <p><i>Відповідальний секретар</i> – Сацик Ігор Каленикович, к. ф. н., доцент.</p>\n      <p><i>Члени редакційної колегії:</i> прот. Василь Вепрук, д. б. н.; прот. Богдан Гринів, д. б. н.; Стецько В’ячеслав Анатолійович, д. б. н.; Жулинський Микола Григорович, д. ф. н., академік НАН; Кучинко Михайло Михайлович, д. і. н., проф.; Головей Вікторія Юріївна, д. ф. н., проф.; Кучерепа Микола Михайлович, к. і. н., проф.; прот. Василь Лозовицький, к. б. н., доцент; прот. Миколай Цап’юк, к. б. н.</p>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/editorial-board-page/editorial-board-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/editorial-board-page/editorial-board-page.component.ts ***!
  \************************************************************************/
/*! exports provided: EditorialBoardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorialBoardPageComponent", function() { return EditorialBoardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorialBoardPageComponent = /** @class */ (function () {
    function EditorialBoardPageComponent() {
    }
    ;
    EditorialBoardPageComponent.prototype.ngOnInit = function () {
    };
    EditorialBoardPageComponent.prototype.ngAfterViewInit = function () {
        _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_1__["MaterializeService"].collapsible(this.collapsibleRef, { inDuration: 1000, outDuration: 1000 });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('collapse'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditorialBoardPageComponent.prototype, "collapsibleRef", void 0);
    EditorialBoardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editorial-board-page',
            template: __webpack_require__(/*! ./editorial-board-page.component.html */ "./src/app/editorial-board-page/editorial-board-page.component.html"),
            styles: [__webpack_require__(/*! ./editorial-board-page.component.css */ "./src/app/editorial-board-page/editorial-board-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditorialBoardPageComponent);
    return EditorialBoardPageComponent;
}());



/***/ }),

/***/ "./src/app/en-about-article-page/en-about-article-page.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/en-about-article-page/en-about-article-page.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".author-article {\n  font-family: ArnoPro-SmbdSubhead;\n  margin-bottom: 30px;\n}\n\n.title-article {\n  font-size: 36px;\n  font-family: ArnoPro-SmbdSubhead;\n}\n\n.key-words-article {\n  margin-bottom: 10px;\n}\n\n.summary-article {\n  margin-bottom: 10px;\n  font-family: ArnoPro-ItalicSmText;\n}\n\n.summary-en-article {\n  margin-bottom: 10px;\n}\n\n.link-article {\n\n}\n\n.article-info {\n  font-size: 24px;\n  font-family: ArnoPro-SmText;\n}\n\n.btn-article {\n  background-color: #007398;\n  margin: 0 10px;\n}\n"

/***/ }),

/***/ "./src/app/en-about-article-page/en-about-article-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/en-about-article-page/en-about-article-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-info\">\n  <div *ngIf=\"article.title_en\" class=\"title-article\">{{ article.title_en }}</div>\n  <div *ngIf=\"article.author_en\" class=\"author-article\">{{ article.author_en }}</div>\n  <div *ngIf=\"article.key_words_en\" class=\"key-words-article\">Key words: {{ article.key_words_en }}</div>\n  <div *ngIf=\"article.summary_en\" class=\"summary-en-article\">Summary: {{ article.summary_en }}</div>\n  <div *ngIf=\"article.document\" class=\"link-article\">\n    <a href=\"{{ article.document }}\" class=\"waves-effect waves-light btn btn-article\">\n      View article\n    </a>\n    <a target=\"_self\"\n       href=\"{{ article.document }}\"\n       download=\"{{ docName }}\"\n       class=\"waves-effect waves-light btn btn-article\">\n      Download the article\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/en-about-article-page/en-about-article-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/en-about-article-page/en-about-article-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: EnAboutArticlePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnAboutArticlePageComponent", function() { return EnAboutArticlePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/article.service */ "./src/app/shared/services/article.service.ts");
/* harmony import */ var _node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var _node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnAboutArticlePageComponent = /** @class */ (function () {
    function EnAboutArticlePageComponent(router, articleService) {
        this.router = router;
        this.articleService = articleService;
    }
    EnAboutArticlePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params
            .pipe(Object(_node_modules_rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            if (params['id']) {
                return _this.articleService.getById(params['id']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }))
            .subscribe(function (article) {
            if (article) {
                _this.article = article;
                _this.docName = article.document.substr(11);
            }
        }, function (error) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_5__["MaterializeService"].toast(error.error.message);
        });
    };
    EnAboutArticlePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-about-article-page',
            template: __webpack_require__(/*! ./en-about-article-page.component.html */ "./src/app/en-about-article-page/en-about-article-page.component.html"),
            styles: [__webpack_require__(/*! ./en-about-article-page.component.css */ "./src/app/en-about-article-page/en-about-article-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], EnAboutArticlePageComponent);
    return EnAboutArticlePageComponent;
}());



/***/ }),

/***/ "./src/app/en-about-page/en-about-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/en-about-page/en-about-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/en-about-page/en-about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/en-about-page/en-about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  en-about-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/en-about-page/en-about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/en-about-page/en-about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: EnAboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnAboutPageComponent", function() { return EnAboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnAboutPageComponent = /** @class */ (function () {
    function EnAboutPageComponent() {
    }
    EnAboutPageComponent.prototype.ngOnInit = function () {
    };
    EnAboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-about-page',
            template: __webpack_require__(/*! ./en-about-page.component.html */ "./src/app/en-about-page/en-about-page.component.html"),
            styles: [__webpack_require__(/*! ./en-about-page.component.css */ "./src/app/en-about-page/en-about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnAboutPageComponent);
    return EnAboutPageComponent;
}());



/***/ }),

/***/ "./src/app/en-editorial-board-page/en-editorial-board-page.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/en-editorial-board-page/en-editorial-board-page.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/en-editorial-board-page/en-editorial-board-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/en-editorial-board-page/en-editorial-board-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  en-editorial-board-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/en-editorial-board-page/en-editorial-board-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/en-editorial-board-page/en-editorial-board-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: EnEditorialBoardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnEditorialBoardPageComponent", function() { return EnEditorialBoardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnEditorialBoardPageComponent = /** @class */ (function () {
    function EnEditorialBoardPageComponent() {
    }
    EnEditorialBoardPageComponent.prototype.ngOnInit = function () {
    };
    EnEditorialBoardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-editorial-board-page',
            template: __webpack_require__(/*! ./en-editorial-board-page.component.html */ "./src/app/en-editorial-board-page/en-editorial-board-page.component.html"),
            styles: [__webpack_require__(/*! ./en-editorial-board-page.component.css */ "./src/app/en-editorial-board-page/en-editorial-board-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnEditorialBoardPageComponent);
    return EnEditorialBoardPageComponent;
}());



/***/ }),

/***/ "./src/app/en-for-authors-page/en-for-authors-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/en-for-authors-page/en-for-authors-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/en-for-authors-page/en-for-authors-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/en-for-authors-page/en-for-authors-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  en-for-authors-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/en-for-authors-page/en-for-authors-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/en-for-authors-page/en-for-authors-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: EnForAuthorsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnForAuthorsPageComponent", function() { return EnForAuthorsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnForAuthorsPageComponent = /** @class */ (function () {
    function EnForAuthorsPageComponent() {
    }
    EnForAuthorsPageComponent.prototype.ngOnInit = function () {
    };
    EnForAuthorsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-for-authors-page',
            template: __webpack_require__(/*! ./en-for-authors-page.component.html */ "./src/app/en-for-authors-page/en-for-authors-page.component.html"),
            styles: [__webpack_require__(/*! ./en-for-authors-page.component.css */ "./src/app/en-for-authors-page/en-for-authors-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnForAuthorsPageComponent);
    return EnForAuthorsPageComponent;
}());



/***/ }),

/***/ "./src/app/en-journal-numbers-page/en-journal-numbers-page.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/en-journal-numbers-page/en-journal-numbers-page.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.collapsible div.collapsible-header {\n  flex-direction: column;\n}\n\nul.collapsible div.collapsible-header i {\n  width: auto;\n  font-size: initial;\n}\n\nul.collapsible a {\n  color: #333333;\n}\n\nul.collapsible a:hover {\n  color: #bd1015;\n}\n\na.link-article {\n  display: block;\n  cursor: pointer;\n}\n\n.article-summary {\n  font-family: ArnoPro-ItalicSmText;\n}\n"

/***/ }),

/***/ "./src/app/en-journal-numbers-page/en-journal-numbers-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/en-journal-numbers-page/en-journal-numbers-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible popout\" #collapsible>\n  <li *ngFor=\"let tom of toms\">\n    <div class=\"collapsible-header\"><b>№ {{ tom.number }}, {{ tom.year }}</b>\n      <i>{{ tom.description_en }}</i></div>\n    <div class=\"collapsible-body\">\n      <div class=\"article-info\" *ngFor=\"let article of tom.articles\">\n        <a href=\"en/{{ article.id }}\" class=\"link-article\"> {{article.number}}.\n          <b>{{ article.author_en }} {{ article.title_en}} – С. {{ article.pages }}</b>\n        </a>\n        <div class=\"article-key-words\">Key words: {{ article.key_words_en }}</div>\n        <div class=\"article-summary\">Summary: {{ article.summary_en }}</div>\n      </div>\n      <a href=\"{{ tom.document }}\">\n        <i class=\"material-icons\">insert_drive_file</i>\n        <b>\n          Download the electronic version of the magazine\n        </b>\n      </a>\n    </div>\n  </li>\n</ul>\n\n\n"

/***/ }),

/***/ "./src/app/en-journal-numbers-page/en-journal-numbers-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/en-journal-numbers-page/en-journal-numbers-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: EnJournalNumbersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnJournalNumbersPageComponent", function() { return EnJournalNumbersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
/* harmony import */ var _shared_services_toms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/toms.service */ "./src/app/shared/services/toms.service.ts");
/* harmony import */ var _shared_services_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/article.service */ "./src/app/shared/services/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnJournalNumbersPageComponent = /** @class */ (function () {
    function EnJournalNumbersPageComponent(tomsService, articleServise, route) {
        this.tomsService = tomsService;
        this.articleServise = articleServise;
        this.route = route;
    }
    EnJournalNumbersPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tomsService.getAll()
            .subscribe(function (res) {
            _this.toms = res;
        }, function (err) { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_1__["MaterializeService"].toast(err.error.message); });
    };
    EnJournalNumbersPageComponent.prototype.ngAfterViewInit = function () {
        _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_1__["MaterializeService"].collapsible(this.collapsibleRef, { inDuration: 1000, outDuration: 1000 });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('collapsible'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EnJournalNumbersPageComponent.prototype, "collapsibleRef", void 0);
    EnJournalNumbersPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-journal-numbers-page',
            template: __webpack_require__(/*! ./en-journal-numbers-page.component.html */ "./src/app/en-journal-numbers-page/en-journal-numbers-page.component.html"),
            styles: [__webpack_require__(/*! ./en-journal-numbers-page.component.css */ "./src/app/en-journal-numbers-page/en-journal-numbers-page.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_toms_service__WEBPACK_IMPORTED_MODULE_2__["TomsService"],
            _shared_services_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EnJournalNumbersPageComponent);
    return EnJournalNumbersPageComponent;
}());



/***/ }),

/***/ "./src/app/en-main-page/en-main-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/en-main-page/en-main-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/en-main-page/en-main-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/en-main-page/en-main-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  en-main-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/en-main-page/en-main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/en-main-page/en-main-page.component.ts ***!
  \********************************************************/
/*! exports provided: EnMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnMainPageComponent", function() { return EnMainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnMainPageComponent = /** @class */ (function () {
    function EnMainPageComponent() {
    }
    EnMainPageComponent.prototype.ngOnInit = function () {
    };
    EnMainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-main-page',
            template: __webpack_require__(/*! ./en-main-page.component.html */ "./src/app/en-main-page/en-main-page.component.html"),
            styles: [__webpack_require__(/*! ./en-main-page.component.css */ "./src/app/en-main-page/en-main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnMainPageComponent);
    return EnMainPageComponent;
}());



/***/ }),

/***/ "./src/app/en-reviewing-page/en-reviewing-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/en-reviewing-page/en-reviewing-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/en-reviewing-page/en-reviewing-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/en-reviewing-page/en-reviewing-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  en-reviewing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/en-reviewing-page/en-reviewing-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/en-reviewing-page/en-reviewing-page.component.ts ***!
  \******************************************************************/
/*! exports provided: EnReviewingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnReviewingPageComponent", function() { return EnReviewingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnReviewingPageComponent = /** @class */ (function () {
    function EnReviewingPageComponent() {
    }
    EnReviewingPageComponent.prototype.ngOnInit = function () {
    };
    EnReviewingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-reviewing-page',
            template: __webpack_require__(/*! ./en-reviewing-page.component.html */ "./src/app/en-reviewing-page/en-reviewing-page.component.html"),
            styles: [__webpack_require__(/*! ./en-reviewing-page.component.css */ "./src/app/en-reviewing-page/en-reviewing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnReviewingPageComponent);
    return EnReviewingPageComponent;
}());



/***/ }),

/***/ "./src/app/for-authors-page/for-authors-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/for-authors-page/for-authors-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li{\n    display: list-item;\n    list-style-type: disc;\n    color: #e9711c;\n}\n\nul li span{\n    color: #505050;\n}\n\nul {\n    list-style-type: disc;\n    padding-left: 40px;\n    margin: 5px 0;\n}\n"

/***/ }),

/***/ "./src/app/for-authors-page/for-authors-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/for-authors-page/for-authors-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"text-align: center\"><b>Шановні колеги!</b></p>\n<p>Запрошуємо Вас подати свою наукову статтю в щорічний богословсько-історичний науковий журнал Волинської православної богословської академії <b>«Волинський благовісник»</b>.</p>\n<p style=\"text-align: center\"><b>Вимоги до оформлення матеріалів</b></p>\n<p>Статтю потрібно надсилати в електронному варіанті в режимі <i>.doc</i> версії <i>Word 1997–2007 рр.;</i> гарнітура – <i>Times New Roman</i>; кегель – 14 з інтервалом 1,5; обсяг статті – не менше 12 сторінок форматом А4 (<i>загалом стаття має містити не менше 25 000 знаків з пробілами</i>); у тексті не має бути примусових переносів.</p>\n<p>Послідовність структурних елементів статті: у правому верхньому куті – ім'я та прізвище автора, науковий ступінь, посада, повна назва навчального (наукового) закладу українською та англійською мовами; нижче по центру – назва статті; ще нижче по центру – анотація статті і ключові слова українською та англійською мовами (<i>анотація повинна містити не менше 1 800 знаків з пробілами, в ній коротко викладається актуальність статті, мета, вміст, висновки і перспективи подальших досліджень</i>).</p>\n<b>Стаття має містити такі положення:</b>\n<ul>\n    <li><span>постановка наукової проблеми та її значення;</span></li>\n    <li><span>аналіз досліджень цієї проблеми;</span></li>\n    <li><span>мета і завдання статті;</span></li>\n    <li><span>виклад основного матеріалу й обґрунтування отриманих результатів дослідження;</span></li>\n    <li><span>висновки та перспективи подальшого дослідження.</span></li>\n</ul>\n<p><i>Бібліографічні посилання</i> в тексті на джерела слід супроводжувати підстрочними посиланнями, які подаються таким чином: в кінці речення, в якому використовується цитата, факти, дати тощо вгорі позначається номер посилання відповідними цифрами, а внизу сторінки під рискою приводять під тим же номером джерело.</p>\n<p>В кінці статті подається список джерел та літератури, оформлений згідно з ДСТУ 8302:2015 «Інформація та документація. Бібліографічне посилання. Загальні положення та правила складання», а також <b>References</b> – список використаної літератури, оформлений за міжнародним бібліографічним стандартом: назви періодичних україно- та російськомовних видань (журналів, збірників та ін.) подають транслітерацією, в дужках – англійською мовою.</p>\n<p>Текст має бути відредагований і перевірений, прізвища та інші власні назви, а також терміни мають бути звірені й уніфіковані. Бажано уникати абревіатур, а в разі потреби – розшифровувати їх.</p>\n<p>Редакційна колегія залишає за собою право відхиляти матеріали у разі їх невідповідності науковому спрямуванню журналу чи наявності чисельних редакційно-стилістичних огріхів, а також у разі невчасної подачі.</p>\n<p>Електронні версії статей просимо надсилати на адресу: <ins>nauka@vpba.org</ins></p>\n<p></p>\n"

/***/ }),

/***/ "./src/app/for-authors-page/for-authors-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/for-authors-page/for-authors-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ForAuthorsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForAuthorsPageComponent", function() { return ForAuthorsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForAuthorsPageComponent = /** @class */ (function () {
    function ForAuthorsPageComponent() {
    }
    ForAuthorsPageComponent.prototype.ngOnInit = function () {
    };
    ForAuthorsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-for-authors-page',
            template: __webpack_require__(/*! ./for-authors-page.component.html */ "./src/app/for-authors-page/for-authors-page.component.html"),
            styles: [__webpack_require__(/*! ./for-authors-page.component.css */ "./src/app/for-authors-page/for-authors-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForAuthorsPageComponent);
    return ForAuthorsPageComponent;
}());



/***/ }),

/***/ "./src/app/journal-numbers-page/journal-numbers-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/journal-numbers-page/journal-numbers-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.collapsible div.collapsible-header {\n  flex-direction: column;\n}\n\nul.collapsible div.collapsible-header i {\n  width: auto;\n  font-size: initial;\n}\n\nul.collapsible a {\n  color: #333333;\n}\n\nul.collapsible a:hover {\n  color: #bd1015;\n}\n\na.link-article {\n  display: block;\n  cursor: pointer;\n}\n\n.article-summary {\n  font-family: ArnoPro-ItalicSmText;\n}\n"

/***/ }),

/***/ "./src/app/journal-numbers-page/journal-numbers-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/journal-numbers-page/journal-numbers-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible popout\" #collapsible>\n  <li *ngFor=\"let tom of toms\">\n    <div class=\"collapsible-header\"><b>№ {{ tom.number }}, {{ tom.year }}</b>\n      <i>{{ tom.description }}</i></div>\n    <div class=\"collapsible-body\">\n      <div class=\"article-info\" *ngFor=\"let article of tom.articles\">\n        <a href=\"{{ article.id }}\" class=\"link-article\"> {{article.number}}.\n          <b>{{ article.author }} {{ article.title}} – С. {{ article.pages }}</b>\n        </a>\n        <div class=\"article-key-words\">Ключові слова: {{ article.key_words }}</div>\n        <div class=\"article-summary\">Анотація: {{ article.summary }}</div>\n      </div>\n      <a href=\"{{ tom.document }}\">\n        <i class=\"material-icons\">insert_drive_file</i>\n        <b>\n          Скачати електронний варіан журналу\n        </b>\n      </a>\n    </div>\n  </li>\n</ul>\n\n\n"

/***/ }),

/***/ "./src/app/journal-numbers-page/journal-numbers-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/journal-numbers-page/journal-numbers-page.component.ts ***!
  \************************************************************************/
/*! exports provided: JournalNumbersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalNumbersPageComponent", function() { return JournalNumbersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
/* harmony import */ var _shared_services_toms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/toms.service */ "./src/app/shared/services/toms.service.ts");
/* harmony import */ var _shared_services_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/article.service */ "./src/app/shared/services/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JournalNumbersPageComponent = /** @class */ (function () {
    function JournalNumbersPageComponent(tomsService, articleServise, route) {
        this.tomsService = tomsService;
        this.articleServise = articleServise;
        this.route = route;
    }
    JournalNumbersPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tomsService.getAll()
            .subscribe(function (res) {
            _this.toms = res;
        }, function (err) { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_1__["MaterializeService"].toast(err.error.message); });
    };
    JournalNumbersPageComponent.prototype.ngAfterViewInit = function () {
        _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_1__["MaterializeService"].collapsible(this.collapsibleRef, { inDuration: 1000, outDuration: 1000 });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('collapsible'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], JournalNumbersPageComponent.prototype, "collapsibleRef", void 0);
    JournalNumbersPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-journal-numbers-page',
            template: __webpack_require__(/*! ./journal-numbers-page.component.html */ "./src/app/journal-numbers-page/journal-numbers-page.component.html"),
            styles: [__webpack_require__(/*! ./journal-numbers-page.component.css */ "./src/app/journal-numbers-page/journal-numbers-page.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_toms_service__WEBPACK_IMPORTED_MODULE_2__["TomsService"],
            _shared_services_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], JournalNumbersPageComponent);
    return JournalNumbersPageComponent;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-block {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 50px;\n}\n.auth-block .card {\n    width: 400px;\n}\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-block\">\n  <form class=\"card\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"card-content\">\n    <span class=\"card-title\">Ввійти в систему</span>\n    <div class=\"input-field\">\n      <input formControlName=\"email\" id=\"email\" type=\"email\"\n             [ngClass]=\"{ 'invalid': form.get('email').invalid && form.get('email').touched }\">\n      <label for=\"email\">Email:</label>\n      <span *ngIf=\"form.get('email').invalid && form.get('email').touched\" class=\"helper-text red-text\">\n        <span *ngIf=\"form.get('email').errors['required']\">Email не повинен бути пустим.</span>\n        <span *ngIf=\"form.get('email').errors['email']\">Введіть коректний email.</span>\n      </span>\n    </div>\n    <div class=\"input-field\">\n      <input formControlName=\"password\" id=\"password\" type=\"password\"\n             [ngClass]=\"{ 'invalid': form.get('password').invalid && form.get('password').touched }\">\n      <label for=\"password\">Пароль:</label>\n      <span *ngIf=\"form.get('password').invalid && form.get('password').touched\" class=\"helper-text red-text\">\n        <span *ngIf=\"form.get('password').errors['required']\">Password не повинен бути пустим.</span>\n        <span *ngIf=\"form.get('password').errors['minlength'] && form.get('password').errors['minlength']['requiredLength']\">\n          Password повинен бути більше {{ form.get('password').errors['minlength']['requiredLength']}} символів.\n        Зараз тільки {{ form.get('password').errors['minlength']['actualLength']}}. </span>\n      </span>\n    </div>\n  </div>\n  <div class=\"card-action\">\n    <button type=\"submit\" class=\"modal-action btn waves-effect\" [disabled]=\"form.invalid || form.disabled\" >Ввійти</button>\n  </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
        this.route.queryParams.subscribe(function (params) {
            if (params['accessDenied']) {
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_4__["MaterializeService"].toast('Ви не авторирозаві! Введіть Ваші email та password для входу.');
            }
            else if (params['sessionFailed']) {
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_4__["MaterializeService"].toast('Будь ласка ввійдіть в систему знову!');
            }
        });
    };
    LoginPageComponent.prototype.ngOnDestroy = function () {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    };
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.form.disable();
        this.aSub = this.auth.login(this.form.value).subscribe(function () { return _this.router.navigate(['/admin']); }, function (error) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_4__["MaterializeService"].toast(error.error.message);
            _this.form.enable();
        });
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li{\n    display: list-item;\n    list-style-type: disc;\n    color: #e9711c;\n}\n\nul li span{\n    color: #505050;\n}\n\nul {\n    list-style-type: disc;\n    padding-left: 40px;\n    margin: 5px 0;\n}\n\np {\n    margin: 8px auto;\n}\n\n.adress {\n    margin-top: 50px;\n}\n\n.adress p {\n    margin: 0 auto;\n}\n\n.main-img {\n    width: 200px;\n    height: 300px;\n    background-image: url(\"/assets/images/obgortka_VB_.jpg\");\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    float: right;\n    margin-left: 30px;\n}\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-img hide-on-small-only\"></div>\n<div class=\"main-text\">\n  <p><i>Журнал засновано у 2013 році.</i></p>\n  <p><i>Засновник:</i> Волинська православна богословська академія Української Православної Церкви Київського Патріархату.</p>\n  <p><i>Журнал зареєстровано Міністерством юстиції України:</i>\n    свідоцтво про державну реєстрацію друкованого засобу масової інформації  КВ №22844–12744 ПР від 07.08 2017</p>\n  <p><i>Виходить</i> 1 раз на рік.</p>\n  <p><i>Сфера розповсюдження</i> – загальнодержавна.</p>\n  <p><i>Мови видання</i> – українська, англійська.</p>\n  <p>ISSN 2519–4348.</p>\n  <i>Видання індексується науковими базами:</i>\n  <ul>\n    <li><span>Google Scholar</span></li>\n    <li><span>NBUV</span></li>\n  </ul>\n  <p><i>Мета журналу</i> –</p>\n  <p>Читачі мають можливість переглянути опубліковані наукові статті у «Волинському благовіснику» на сайті журналу http:www.vpba.org,  у рубриці «Номери журналу», а також придбати друкований варіант журналу у приміщенні Волинської православної богословської академії (м. Луцьк, вул. Градний Узвіз, 5), або замовити, написавши на електронну скриньку: <ins>nauka@vpba.org</ins> </p>\n  <div class=\"adress\">\n    <p><i>Адреса редакції:</i></p>\n    <p><b>Волинська православна богословська академія</b><br/>\n      вул. Градний узвіз, 5, м. Луцьк, Волинська обл., Україна, 43025.\n    </p>\n    <p><i>Web:</i> www.vpba.org</p>\n    <p><i>Email:</i> <ins>nauka@vpba.org</ins></p>\n    <p><i>Тел.:</i> (0332) 723212,  (0332) 726072.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/reviewing-page/reviewing-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reviewing-page/reviewing-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reviewing-page/reviewing-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reviewing-page/reviewing-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reviewing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/reviewing-page/reviewing-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reviewing-page/reviewing-page.component.ts ***!
  \************************************************************/
/*! exports provided: ReviewingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewingPageComponent", function() { return ReviewingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewingPageComponent = /** @class */ (function () {
    function ReviewingPageComponent() {
    }
    ReviewingPageComponent.prototype.ngOnInit = function () {
    };
    ReviewingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewing-page',
            template: __webpack_require__(/*! ./reviewing-page.component.html */ "./src/app/reviewing-page/reviewing-page.component.html"),
            styles: [__webpack_require__(/*! ./reviewing-page.component.css */ "./src/app/reviewing-page/reviewing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewingPageComponent);
    return ReviewingPageComponent;
}());



/***/ }),

/***/ "./src/app/search-en.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/search-en.pipe.ts ***!
  \***********************************/
/*! exports provided: SearchEnPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEnPipe", function() { return SearchEnPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchEnPipe = /** @class */ (function () {
    function SearchEnPipe() {
    }
    SearchEnPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            var query = [];
            query.push(item.author_en);
            query.push(item.title_en);
            query.push(item.key_words_en);
            query.push(item.sumary_en);
            query.push(item.reference);
            return JSON.stringify(query).toLowerCase().includes(args);
        });
    };
    SearchEnPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchEn'
        })
    ], SearchEnPipe);
    return SearchEnPipe;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            var query = [];
            query.push(item.author);
            query.push(item.title);
            query.push(item.key_words);
            query.push(item.sumary);
            query.push(item.reference);
            return JSON.stringify(query).toLowerCase().includes(args);
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/shared/classes/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/classes/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }
        else {
            this.router.navigate(['login'], {
                queryParams: {
                    accessDenied: true
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/classes/materialize.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/classes/materialize.service.ts ***!
  \*******************************************************/
/*! exports provided: MaterializeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterializeService", function() { return MaterializeService; });
var MaterializeService = /** @class */ (function () {
    function MaterializeService() {
    }
    MaterializeService.collapsible = function (collapsibleRef, option) {
        M.Collapsible.init(collapsibleRef.nativeElement, option);
    };
    MaterializeService.toast = function (message) {
        M.toast({ html: message });
    };
    MaterializeService.updateTextInputs = function () {
        M.updateTextFields();
    };
    MaterializeService.textareaAuto = function (ref) {
        M.textareaAutoResize(ref.nativeElement);
    };
    return MaterializeService;
}());



/***/ }),

/***/ "./src/app/shared/classes/token.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/classes/token.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authorization: this.auth.getToken()
                }
            });
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleAuthError(error); }));
    };
    TokenInterceptor.prototype.handleAuthError = function (error) {
        if (error.status === 401) {
            this.router.navigate(['/login'], {
                queryParams: {
                    sessionFailed: true
                }
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-wrapper {\n    padding-left: 20px;\n}\n"

/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper grey darken-1\">\n    <a routerLink=\"/\" class=\"brand-logo\">Благовісник</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n    </ul>\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/shared/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/shared/layouts/auth-layout/auth-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/en-main-layout/en-main-layout.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/layouts/en-main-layout/en-main-layout.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-flexbox-wrapper {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n}\n\nmain {\n  flex: 1 0 auto;\n  background-color: #f1f1f1;\n}\n\n.nav-extended {\n  background-color: #b14a01;\n}\n\n.nav-extended .nav-wrapper {\n  min-height: 120px;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-left: 20px;\n}\n\n.brand-gerb {\n  height: 90px;\n  width: 80px;\n  background-image: url('/assets/images/gerb.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  float:left;\n  margin-top: 15px;\n}\n\n.brand-disc {\n  font-size: 20px;\n  font-family: ArnoPro-Subhead;\n  line-height: 1.2;\n  color: white;\n}\n\n.brand-title {\n  font-size: 36px;\n  font-family: Hilandars;\n  line-height: 1.2;\n  text-transform: uppercase;\n  padding-bottom: 5px;\n  color: white;\n}\n\n.nav-content{\n  min-height: 50px;\n  background-color: #737373;\n  color: white;\n}\n\n.main-menu, .main-menu li, .main-menu li a {\n  min-height: 50px;\n  font-family: ArnoPro-Subhead;\n  font-size: 18px;\n  color: white;\n  text-align: center;\n}\n\n.row {\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n\n}\n\n.main-menu\n{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.text-info {\n  margin: 40px auto;\n  font-family: ArnoPro-SmText;\n  font-size: 18px;\n  color: #505050;\n  background-color: white;\n  padding: 40px;\n}\n\n.link-active {\n  border-bottom: 4px solid #b14a01;\n}\n\n.page-footer {\n  padding-top: 0;\n  background-color: #737373;\n  font-family: ArnoPro-SmText;\n  font-size: 15px;\n\n}\n\n.container {\n  width: 90%;\n  max-width: initial;\n}\n\n.lang-block {\n  width: 40px;\n  height: 60px;\n\n\n}\n\n.lang {\n  display: flex;\n  height: 50%;\n  line-height: 1;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid white;\n}\n\n.lang:first-child {\n  border-bottom: 1px solid white;\n}\n\n.lang:last-child {\n  border-top: 1px solid white;\n}\n\n.lang:hover {\n  background-color: #007398;\n  border: 2px solid #007398;\n}\n\n.sb-search {\n  position: absolute;\n  width: 0%;\n  min-width: 50px;\n  height: 50px;\n  right: 0;\n  overflow: hidden;\n  transition: width 0.3s;\n  -webkit-backface-visibility: hidden;\n}\n\n.sb-search-input {\n  position: absolute;\n  top: 0;\n  right: 0px;\n  border: none;\n  outline: none;\n  background: #737373 !important;\n  width: 100%;\n  height: 50px !important;\n  margin: 0;\n  z-index: 10;\n  font-family: inherit;\n  font-size: 20px;\n  color: #2c3e50;\n  text-indent: 20px;\n\n}\n\ninput[type=\"search\"].sb-search-input {\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n}\n\n.sb-search-input::-webkit-input-placeholder {\n  color: white;\n}\n\n.sb-search-input:-moz-placeholder {\n  color: white;\n}\n\n.sb-search-input::-moz-placeholder {\n  color: white;\n}\n\n.sb-search-input:-ms-input-placeholder {\n  color: white;\n}\n\n.sb-icon-search,\n.sb-search-submit  {\n  width: 50px;\n  height: 50px;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  line-height: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.sb-search-submit {\n  background: #fff; /* IE needs this */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; /* IE 8 */\n  filter: alpha(opacity=0); /* IE 5-7 */\n  opacity: 0;\n  color: transparent;\n  color:red;\n  border: none;\n  outline: none;\n  z-index: -1;\n}\n\n.sb-icon-search {\n  color: #fff;\n  background: #e67e22;\n  z-index: 90;\n  font-size: 22px;\n  font-family: 'icomoon';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n}\n\n.sb-icon-search i {\n  line-height: 50px;\n  height: 50px;\n}\n\n.sb-icon-search:before {\n  content: \"\";\n}\n\n.sb-search.sb-search-open,\n.no-js .sb-search {\n  width: 100%;\n}\n\n.sb-search.sb-search-open .sb-icon-search,\n.no-js .sb-search .sb-icon-search {\n  background: #da6d0d;\n  color: #fff;\n  z-index: 11;\n}\n\n.sb-search.sb-search-open .sb-search-submit,\n.no-js .sb-search .sb-search-submit {\n  /*    z-index: 90;*/\n}\n\n.wrap-search {\n  display: none;\n  position: relative;\n  width: 100%;\n  background-color: white;\n}\n\n.wrap-search ul {\n  margin: 0;\n}\n\n.wrap-search ul a{\n  color: #b14a01;\n  font-family: ArnoPro-SmText;\n}\n\n.admin-link {\n  color: #b14a01;\n  display: block;\n  float: left;\n  padding-right: 5px;\n}\n\n.admin-link i {\n  font-size: 16px;\n}\n"

/***/ }),

/***/ "./src/app/shared/layouts/en-main-layout/en-main-layout.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/layouts/en-main-layout/en-main-layout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-flexbox-wrapper\">\n  <nav class=\"nav-extended\">\n    <div class=\"container\">\n      <a routerLink=\"/\"><div class=\"brand-gerb\"></div></a>\n      <div class=\"nav-wrapper valign-wrapper\">\n        <div class=\"brand-text\">\n          <div class=\"brand-title\">«Волинський благовісник»</div>\n          <div class=\"brand-disc\">\n            annual theological and historical scientific journal<br/>\n            Volyn Orthodox Theological Academy of the UOC-KP</div>\n        </div>\n        <div class=\"lang-block\">\n          <a routerLink=\"/en\" class=\"lang\">EN</a>\n          <a routerLink=\"/\" class=\"lang\">UA</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"nav-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <ul class=\"main-menu\">\n            <li><a routerLink=\"/en/about\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">About the Journal</a></li>\n            <li><a routerLink=\"/en/editorial-board\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Editorial Board</a></li>\n            <li><a routerLink=\"/en/for-authors\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">For authors</a></li>\n            <li><a routerLink=\"/en/journal-numbers\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Archives</a></li>\n            <li><a routerLink=\"/en/reviewing\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Publication Ethics</a></li>\n          </ul>\n          <div id=\"sb-search\" class=\"sb-search \" >\n                <form>\n                    <input class=\"sb-search-input \" [(ngModel)]=\"query\" placeholder=\"Enter your search term...\" type=\"search\" value=\"\" name=\"search\" id=\"search\" autocomplete=\"off\">\n                    <input class=\"sb-search-submit\" type=\"submit\"  value=\"\">\n                    <span class=\"sb-icon-search\"><i class=\"material-icons\">search</i></span>\n                </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"wrap-search\">\n    <ul class=\"collection\">\n      <a href=\"en/{{ article.id }}\" class=\"collection-item\" *ngFor=\"let article of articles | searchEn: query\">\n        {{article.author_en}}{{article.title_en}}\n      </a>\n    </ul>\n  </div>\n\n  <main>\n    <div class=\"container text-info\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </main>\n\n  <footer class=\"page-footer\">\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n        <a href=\"/admin\" class=\"admin-link\"><i class=\"material-icons\">laptop_mac</i></a>© 2018 Volyn Orthodox Theology Academy. (The site is in developer mode)\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/layouts/en-main-layout/en-main-layout.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/layouts/en-main-layout/en-main-layout.component.ts ***!
  \***************************************************************************/
/*! exports provided: EnMainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnMainLayoutComponent", function() { return EnMainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/article.service */ "./src/app/shared/services/article.service.ts");
/* harmony import */ var _classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnMainLayoutComponent = /** @class */ (function () {
    function EnMainLayoutComponent(articleService) {
        this.articleService = articleService;
        this.query = '';
    }
    EnMainLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getAll()
            .subscribe(function (res) {
            _this.articles = res;
        }, function (err) { return _classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__["MaterializeService"].toast(err.error.message); });
        var submitIcon = jquery__WEBPACK_IMPORTED_MODULE_1__('.sb-icon-search');
        var submitInput = jquery__WEBPACK_IMPORTED_MODULE_1__('.sb-search-input');
        var searchBox = jquery__WEBPACK_IMPORTED_MODULE_1__('.sb-search');
        var menuUl = jquery__WEBPACK_IMPORTED_MODULE_1__('.main-menu');
        var list = jquery__WEBPACK_IMPORTED_MODULE_1__('.wrap-search');
        var main = jquery__WEBPACK_IMPORTED_MODULE_1__('.text-info');
        var isOpen = false;
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).mouseup(function () {
            if (isOpen) {
                submitInput.val('');
                jquery__WEBPACK_IMPORTED_MODULE_1__('.sb-search-submit').css('z-index', '-999');
                submitIcon.click();
            }
        });
        submitIcon.mouseup(function () {
            return false;
        });
        searchBox.mouseup(function () {
            return false;
        });
        submitIcon.click(function () {
            if (!isOpen) {
                searchBox.addClass('sb-search-open');
                menuUl.hide();
                main.hide();
                list.show();
                isOpen = true;
            }
            else {
                searchBox.removeClass('sb-search-open');
                menuUl.show();
                main.show();
                list.hide();
                isOpen = false;
            }
        });
    };
    EnMainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-main-layout',
            template: __webpack_require__(/*! ./en-main-layout.component.html */ "./src/app/shared/layouts/en-main-layout/en-main-layout.component.html"),
            styles: [__webpack_require__(/*! ./en-main-layout.component.css */ "./src/app/shared/layouts/en-main-layout/en-main-layout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], EnMainLayoutComponent);
    return EnMainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/main-layout/main-layout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layouts/main-layout/main-layout.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-flexbox-wrapper {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n}\n\nmain {\n    flex: 1 0 auto;\n    background-color: #f1f1f1;\n}\n\n.nav-extended {\n    background-color: #b14a01;\n}\n\n.nav-extended .nav-wrapper {\n    min-height: 120px;\n    flex-direction: row;\n    justify-content: space-between;\n    padding-left: 20px;\n}\n\n.brand-gerb {\n    height: 90px;\n    width: 80px;\n    background-image: url('/assets/images/gerb.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    float:left;\n    margin-top: 15px;\n}\n\n.brand-disc {\n    font-size: 20px;\n    font-family: ArnoPro-Subhead;\n    line-height: 1.2;\n    color: white;\n}\n\n.brand-title {\n    font-size: 36px;\n    font-family: Hilandars;\n    line-height: 1.2;\n    text-transform: uppercase;\n    padding-bottom: 5px;\n    color: white;\n}\n\n.nav-content{\n    min-height: 50px;\n    background-color: #737373;\n    color: white;\n}\n\n.main-menu, .main-menu li, .main-menu li a {\n    min-height: 50px;\n    font-family: ArnoPro-Subhead;\n    font-size: 18px;\n    color: white;\n    text-align: center;\n}\n\n.row {\n    margin-bottom: 0;\n    display: flex;\n  justify-content: center;\n\n}\n\n.main-menu\n{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.text-info {\n    margin: 40px auto;\n    font-family: ArnoPro-SmText;\n    font-size: 18px;\n    color: #505050;\n    background-color: white;\n    padding: 40px;\n}\n\n.link-active {\n    border-bottom: 4px solid #b14a01;\n}\n\n.page-footer {\n    padding-top: 0;\n    background-color: #737373;\n    font-family: ArnoPro-SmText;\n    font-size: 15px;\n\n}\n\n.container {\n    width: 90%;\n    max-width: initial;\n}\n\n.lang-block {\n    width: 40px;\n    height: 60px;\n\n\n}\n\n.lang {\n    display: flex;\n    height: 50%;\n    line-height: 1;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid white;\n}\n\n.lang:first-child {\n    border-bottom: 1px solid white;\n}\n\n.lang:last-child {\n    border-top: 1px solid white;\n}\n\n.lang:hover {\nbackground-color: #007398;\n    border: 2px solid #007398;\n}\n\n.sb-search {\n  position: absolute;\n  width: 0%;\n  min-width: 50px;\n  height: 50px;\n  right: 0;\n  overflow: hidden;\n  transition: width 0.3s;\n  -webkit-backface-visibility: hidden;\n}\n\n.sb-search-input {\n  position: absolute;\n  top: 0;\n  right: 0px;\n  border: none;\n  outline: none;\n  background: #737373 !important;\n  width: 100%;\n  height: 50px !important;\n  margin: 0;\n  z-index: 10;\n  font-family: inherit;\n  font-size: 20px;\n  color: #2c3e50;\n  text-indent: 20px;\n\n}\n\ninput[type=\"search\"].sb-search-input {\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n}\n\n.sb-search-input::-webkit-input-placeholder {\n  color: white;\n}\n\n.sb-search-input:-moz-placeholder {\n  color: white;\n}\n\n.sb-search-input::-moz-placeholder {\n  color: white;\n}\n\n.sb-search-input:-ms-input-placeholder {\n  color: white;\n}\n\n.sb-icon-search,\n.sb-search-submit  {\n  width: 50px;\n  height: 50px;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  line-height: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.sb-search-submit {\n  background: #fff; /* IE needs this */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; /* IE 8 */\n  filter: alpha(opacity=0); /* IE 5-7 */\n  opacity: 0;\n  color: transparent;\n  color:red;\n  border: none;\n  outline: none;\n  z-index: -1;\n}\n\n.sb-icon-search {\n  color: #fff;\n  background: #e67e22;\n  z-index: 90;\n  font-size: 22px;\n  font-family: 'icomoon';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n}\n\n.sb-icon-search i {\n  line-height: 50px;\n  height: 50px;\n}\n\n.sb-icon-search:before {\n  content: \"\";\n}\n\n.sb-search.sb-search-open,\n.no-js .sb-search {\n  width: 100%;\n}\n\n.sb-search.sb-search-open .sb-icon-search,\n.no-js .sb-search .sb-icon-search {\n  background: #da6d0d;\n  color: #fff;\n  z-index: 11;\n}\n\n.sb-search.sb-search-open .sb-search-submit,\n.no-js .sb-search .sb-search-submit {\n  /*    z-index: 90;*/\n}\n\n.wrap-search {\n  display: none;\n  position: relative;\n  width: 100%;\n  background-color: white;\n}\n\n.wrap-search ul {\n  margin: 0;\n}\n\n.wrap-search ul a{\n   color: #b14a01;\n   font-family: ArnoPro-SmText;\n }\n\n.admin-link {\n   color: #b14a01;\n   display: block;\n   float: left;\n   padding-right: 5px;\n }\n\n.admin-link i {\n  font-size: 16px;\n}\n"

/***/ }),

/***/ "./src/app/shared/layouts/main-layout/main-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/main-layout/main-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-flexbox-wrapper\">\n<nav class=\"nav-extended\">\n        <div class=\"container\">\n            <a routerLink=\"/\"><div class=\"brand-gerb hide-on-small-only\"></div></a>\n            <div class=\"nav-wrapper valign-wrapper\">\n                <div class=\"brand-text\">\n                    <div class=\"brand-title\">«Волинський благовісник»</div>\n                    <div class=\"brand-disc\">щорічний богословсько-історичний науковий журнал<br/>\n                        Волинської православної богословської академії УПЦ КП</div>\n                </div>\n                <div class=\"lang-block\">\n                    <a routerLink=\"/en\" class=\"lang\">EN</a>\n                    <a routerLink=\"/\" class=\"lang\">UA</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"nav-content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <ul class=\"main-menu\">\n                        <li><a routerLink=\"/about\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Про журнал</a></li>\n                        <li><a routerLink=\"/editorial-board\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Редакційна колегія</a></li>\n                        <li><a routerLink=\"/for-authors\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Авторам</a></li>\n                        <li><a routerLink=\"/journal-numbers\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Номери журналу</a></li>\n                        <li><a routerLink=\"/reviewing\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Публікацій етика</a></li>\n                    </ul>\n                    <div id=\"sb-search\" class=\"sb-search \" >\n                          <form>\n                              <input class=\"sb-search-input \" [(ngModel)]=\"query\" placeholder=\"Введіть дані для пошуку ...\" type=\"search\" value=\"\" name=\"search\" id=\"search\" autocomplete=\"off\">\n                              <input class=\"sb-search-submit\" type=\"submit\"  value=\"\">\n                              <span class=\"sb-icon-search\"><i class=\"material-icons\">search</i></span>\n                          </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </nav>\n    <div class=\"wrap-search\">\n      <ul class=\"collection\">\n        <a href=\"/{{ article.id }}\" class=\"collection-item\" *ngFor=\"let article of articles | search: query\">\n          {{article.author}}{{article.title}}\n        </a>\n      </ul>\n    </div>\n\n<main>\n    <div class=\"container text-info\">\n        <router-outlet></router-outlet>\n    </div>\n\n</main>\n\n    <footer class=\"page-footer\">\n        <div class=\"footer-copyright\">\n            <div class=\"container\">\n                <a href=\"/admin\" class=\"admin-link\"><i class=\"material-icons\">laptop_mac</i></a>© 2018 Волинська православна богословська академія. (Сайт знаходиться в режимі розробки)\n            </div>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/layouts/main-layout/main-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/main-layout/main-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/article.service */ "./src/app/shared/services/article.service.ts");
/* harmony import */ var _classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(articleService) {
        this.articleService = articleService;
        this.query = '';
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getAll()
            .subscribe(function (res) {
            _this.articles = res;
        }, function (err) { return _classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__["MaterializeService"].toast(err.error.message); });
        var submitIcon = jquery__WEBPACK_IMPORTED_MODULE_1__('.sb-icon-search');
        var submitInput = jquery__WEBPACK_IMPORTED_MODULE_1__('.sb-search-input');
        var searchBox = jquery__WEBPACK_IMPORTED_MODULE_1__('.sb-search');
        var menuUl = jquery__WEBPACK_IMPORTED_MODULE_1__('.main-menu');
        var list = jquery__WEBPACK_IMPORTED_MODULE_1__('.wrap-search');
        var main = jquery__WEBPACK_IMPORTED_MODULE_1__('.text-info');
        var isOpen = false;
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).mouseup(function () {
            if (isOpen) {
                submitInput.val('');
                jquery__WEBPACK_IMPORTED_MODULE_1__('.sb-search-submit').css('z-index', '-999');
                submitIcon.click();
            }
        });
        submitIcon.mouseup(function () {
            return false;
        });
        searchBox.mouseup(function () {
            return false;
        });
        submitIcon.click(function () {
            if (!isOpen) {
                searchBox.addClass('sb-search-open');
                menuUl.hide();
                main.hide();
                list.show();
                isOpen = true;
            }
            else {
                searchBox.removeClass('sb-search-open');
                menuUl.show();
                main.show();
                list.hide();
                isOpen = false;
            }
        });
    };
    MainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/shared/layouts/main-layout/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.css */ "./src/app/shared/layouts/main-layout/main-layout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-wrapper {\n    padding-left: 20px;\n}\n"

/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper grey darken-1\">\n    <a routerLink=\"/admin\" class=\"brand-logo\">Адмін панель</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li>\n        <a (click)=\"logout()\"  >Вихід</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
    };
    SiteLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-layout',
            template: __webpack_require__(/*! ./site-layout.component.html */ "./src/app/shared/layouts/site-layout/site-layout.component.html"),
            styles: [__webpack_require__(/*! ./site-layout.component.css */ "./src/app/shared/layouts/site-layout/site-layout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/article.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/article.service.ts ***!
  \****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.getAll = function () {
        return this.http.get('/api/articles');
    };
    ArticleService.prototype.getById = function (id) {
        return this.http.get("/api/articles/" + id);
    };
    // @ts-ignore
    ArticleService.prototype.create = function (tom, author, author_en, number, title, title_en, pages, key_words, key_words_en, summary, summary_en, references, file) {
        var fd = new FormData();
        if (author) {
            fd.append('author', author);
        }
        if (author_en) {
            fd.append('author_en', author_en);
        }
        if (pages) {
            fd.append('pages', pages);
        }
        if (key_words) {
            fd.append('key_words', key_words);
        }
        if (key_words_en) {
            fd.append('key_words_en', key_words_en);
        }
        if (summary) {
            fd.append('summary', summary);
        }
        if (summary_en) {
            fd.append('summary_en', summary_en);
        }
        if (summary_en) {
            fd.append('references', references);
        }
        if (file) {
            fd.append('file', file, file.name);
        }
        fd.append('tom', tom);
        fd.append('number', number);
        fd.append('title', title);
        fd.append('title_en', title_en);
        return this.http.post('api/articles', fd);
    };
    // @ts-ignore
    ArticleService.prototype.update = function (id, author, author_en, number, title, title_en, pages, key_words, key_words_en, summary, summary_en, references, file) {
        var fd = new FormData();
        if (author) {
            fd.append('author', author);
        }
        if (author_en) {
            fd.append('author_en', author_en);
        }
        if (pages) {
            fd.append('pages', pages);
        }
        if (key_words) {
            fd.append('key_words', key_words);
        }
        if (key_words_en) {
            fd.append('key_words_en', key_words_en);
        }
        if (summary) {
            fd.append('summary', summary);
        }
        if (summary_en) {
            fd.append('summary_en', summary_en);
        }
        if (summary_en) {
            fd.append('references', references);
        }
        if (file) {
            fd.append('file', file, file.name);
        }
        fd.append('number', number);
        fd.append('title', title);
        fd.append('title_en', title_en);
        return this.http.put("api/articles/" + id, fd);
    };
    ArticleService.prototype.delete = function (id) {
        return this.http.delete("/api/articles/" + id);
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.token = null;
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('/api/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
            var token = _a.token;
            localStorage.setItem('auth-token', "Bearer " + token);
            _this.setToken(token);
        }));
    };
    AuthService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.token;
    };
    AuthService.prototype.logout = function () {
        this.setToken(null);
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/toms.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/toms.service.ts ***!
  \*************************************************/
/*! exports provided: TomsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomsService", function() { return TomsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TomsService = /** @class */ (function () {
    function TomsService(http) {
        this.http = http;
    }
    TomsService.prototype.fetch = function () {
        return this.http.get('/api/toms');
    };
    TomsService.prototype.getAll = function () {
        return this.http.get('/api/toms/all');
    };
    TomsService.prototype.getById = function (id) {
        return this.http.get("/api/toms/" + id);
    };
    TomsService.prototype.create = function (name, name_en, number, year, description, description_en, file) {
        var fd = new FormData();
        if (file) {
            fd.append('file', file, file.name);
        }
        fd.append('name', name);
        fd.append('name_en', name_en);
        fd.append('number', number);
        fd.append('year', year);
        fd.append('description', description);
        fd.append('description_en', description_en);
        return this.http.post('api/toms', fd);
    };
    TomsService.prototype.update = function (id, name, name_en, number, year, description, description_en, file) {
        var fd = new FormData();
        if (file) {
            fd.append('file', file, file.name);
        }
        fd.append('name', name);
        fd.append('name_en', name_en);
        fd.append('number', number);
        fd.append('year', year);
        fd.append('description', description);
        fd.append('description_en', description_en);
        return this.http.put("api/toms/" + id, fd);
    };
    TomsService.prototype.delete = function (id) {
        return this.http.delete("/api/toms/" + id);
    };
    TomsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TomsService);
    return TomsService;
}());



/***/ }),

/***/ "./src/app/tom-page/form-tom-page/form-tom-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/tom-page/form-tom-page/form-tom-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    cursor: pointer;\n}\n\n.dn {\n    display: none;\n}\n\n.h200 {\n    height: 200px;\n}\n\n.page-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 0;\n}\n\n.page-title a {\n    color: black;\n    opacity: .8;\n}\n"

/***/ }),

/***/ "./src/app/tom-page/form-tom-page/form-tom-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/tom-page/form-tom-page/form-tom-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-title\">\n    <h4>\n      <a routerLink=\"/admin\">Випуски</a>\n      <i class=\"material-icons\">keyboard_arrow_right</i>\n      {{ isNew ? 'Додати' : 'Редагувати' }} випуск\n    </h4>\n    <span>\n      <button *ngIf=\"!isNew\" class=\"btn btn-small red\" (click)=\"deleteTom()\">\n        <i class=\"material-icons\">delete</i>\n      </button>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s12 l6\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"input-field\">\n        <input formControlName=\"name\" id=\"name\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('name').invalid && form.get('name').touched }\">\n        <label for=\"name\">Назва</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('name').invalid && form.get('name').touched\">\n          <span *ngIf=\"form.get('name').errors['required']\">\n            Назва повинна бути зазначена.\n          </span>\n        </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"name_en\" id=\"name_en\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('name_en').invalid && form.get('name_en').touched }\">\n        <label for=\"name\">Title</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('name_en').invalid && form.get('name_en').touched\">\n          <span *ngIf=\"form.get('name_en').errors['required']\">\n            Title повинен бути зазначений.\n          </span>\n        </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"number\" id=\"number\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('number').invalid && form.get('number').touched }\">\n        <label for=\"number\">Номер</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('number').invalid && form.get('number').touched\">\n        <span *ngIf=\"form.get('number').errors['required']\">\n          Номер повинен бути зазначений.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"year\" id=\"year\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('year').invalid && form.get('year').touched }\">\n        <label for=\"year\">Рік</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('year').invalid && form.get('year').touched\">\n        <span *ngIf=\"form.get('year').errors['required']\">\n          Рік повинен бути зазначений.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea formControlName=\"description\"  id=\"description\" class=\"materialize-textarea\"\n                  [ngClass]=\"{ 'invalid' : form.get('description').invalid && form.get('description').touched }\"\n                  #textArea>\n        </textarea>\n        <label for=\"description\">Опис</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('description').invalid && form.get('description').touched\">\n          <span *ngIf=\"form.get('description').errors['required']\">\n            Опис журналу повинен бути введений.\n          </span>\n        </span>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea formControlName=\"description_en\"  id=\"description_en\" class=\"materialize-textarea\"\n                  [ngClass]=\"{ 'invalid' : form.get('description_en').invalid && form.get('description_en').touched }\"\n                  #textAreaEn>\n        </textarea>\n        <label for=\"description\">Description</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('description_en').invalid && form.get('description_en').touched\">\n          <span *ngIf=\"form.get('description_en').errors['required']\">\n            Description журналу повинен бути введений.\n          </span>\n        </span>\n      </div>\n\n      <div class=\"file-field input-field\">\n        <div class=\"btn\">\n          <span>Загрузити документ</span>\n          <input [disabled]=\"docValid\" (change)=\"onFileUpload($event)\" type=\"file\" #inputFile>\n        </div>\n        <div class=\"file-path-wrapper\">\n          <input  formControlName=\"file\" class=\"file-path validate\" type=\"text\">\n        </div>\n      </div>\n\n      <div>\n        <button type=\"submit\" class=\"waves-effect waves-light btn\" [disabled]=\"form.invalid || form.disabled || validFile\">\n          Зберегти\n        </button>\n      </div>\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/tom-page/form-tom-page/form-tom-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tom-page/form-tom-page/form-tom-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormTomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTomPageComponent", function() { return FormTomPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toms.service */ "./src/app/shared/services/toms.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormTomPageComponent = /** @class */ (function () {
    function FormTomPageComponent(router, tomsService, route) {
        this.router = router;
        this.tomsService = tomsService;
        this.route = route;
        this.isNew = true;
        this.validFile = false;
    }
    FormTomPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.form.disable();
        this.router.params
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            if (params['id']) {
                _this.isNew = false;
                return _this.tomsService.getById(params['id']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }))
            .subscribe(function (tom) {
            if (tom) {
                _this.tom = tom;
                _this.form.patchValue({
                    name: tom.name,
                    name_en: tom.name_en,
                    number: tom.number,
                    description: tom.description,
                    description_en: tom.description_en,
                    year: tom.year,
                    file: tom.document
                });
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].updateTextInputs();
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].textareaAuto(_this.textAreaRef);
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].textareaAuto(_this.textAreaEnRef);
            }
            _this.form.enable();
        }, function (error) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast(error.error.message);
        });
    };
    FormTomPageComponent.prototype.onSubmit = function () {
        var _this = this;
        var obs$;
        this.form.disable();
        if (this.isNew) {
            obs$ = this.tomsService.create(this.form.value.name, this.form.value.name_en, this.form.value.number, this.form.value.year, this.form.value.description, this.form.value.description_en, this.file);
        }
        else {
            obs$ = this.tomsService.update(this.tom.id, this.form.value.name, this.form.value.name_en, this.form.value.number, this.form.value.year, this.form.value.description, this.form.value.description_en, this.file);
        }
        obs$.subscribe(function (tom) {
            _this.tom = tom;
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast('Зміни збережені.');
            _this.form.enable();
        }, function (error) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast(error.error.message);
            _this.form.enable();
        });
    };
    FormTomPageComponent.prototype.onFileUpload = function (event) {
        var file = event.target.files[0];
        if (file.size > 35 * 1024 * 1024) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast('Розмір файлу перевищує 25 Mb. Виберіть інший файл.');
            this.validFile = true;
        }
        else {
            if (file.type === 'application/pdf') {
                var filetypes = /pdf|doc|docx|xls|xlsx|wps/;
                if (filetypes.test(file.name.split('.')[1].toLowerCase())) {
                    this.validFile = false;
                    this.file = file;
                }
                else {
                    _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast('Тип файлу не pdf. Завантежте інший файл.');
                }
            }
            else {
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast('Завантажте файл в pdf форматі.');
                this.validFile = true;
            }
        }
    };
    FormTomPageComponent.prototype.deleteTom = function () {
        var _this = this;
        var desicion = window.confirm('Ви впевнені що хочите видалити ' + this.tom.name + ' ' + this.tom.number);
        if (desicion) {
            this.tomsService.delete(this.tom.id)
                .subscribe(function (res) { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast(res.message); }, function (err) { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].toast(err.error.message); }, function () { return _this.route.navigate(['/admin']); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FormTomPageComponent.prototype, "textAreaRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textAreaEn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FormTomPageComponent.prototype, "textAreaEnRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FormTomPageComponent.prototype, "inputFileRef", void 0);
    FormTomPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-tom-page',
            template: __webpack_require__(/*! ./form-tom-page.component.html */ "./src/app/tom-page/form-tom-page/form-tom-page.component.html"),
            styles: [__webpack_require__(/*! ./form-tom-page.component.css */ "./src/app/tom-page/form-tom-page/form-tom-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_toms_service__WEBPACK_IMPORTED_MODULE_3__["TomsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormTomPageComponent);
    return FormTomPageComponent;
}());



/***/ }),

/***/ "./src/app/tom-page/show-tom-page/show-tom-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/tom-page/show-tom-page/show-tom-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    cursor: pointer;\n}\n\n.dn {\n    display: none;\n}\n\n.h200 {\n    height: 200px;\n}\n\n.page-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 0;\n}\n\n.page-title a {\n    color: black;\n    opacity: .8;\n}\n\n.m-20 {\n    margin: 0 20px;\n}\n\n.wc {\n    color: white\n}\n\ntd a {\n    color: black;\n    margin: 0 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/tom-page/show-tom-page/show-tom-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/tom-page/show-tom-page/show-tom-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-title\">\n    <h4>\n      <a routerLink=\"/admin\">Випуски</a>\n      <i class=\"material-icons\">keyboard_arrow_right</i>\n      <span>Випуск {{ tom.number }}</span>\n    </h4>\n    <span>\n      <a class=\"btn btn-small blue m-20\" href=\"admin/tom/edit/{{ tom.id }}\">\n        <i class=\"material-icons wc\">edit</i>\n      </a>\n      <button class=\"btn btn-small red m-20\" (click)=\"deleteTom()\">\n        <i class=\"material-icons\">delete</i>\n      </button>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <table class=\"striped\" *ngIf=\"tom.articles.length > 0; else empty\">\n        <thead>\n        <tr>\n          <th>№</th>\n          <th>Автор</th>\n          <th>Назва</th>\n          <th>Дії</th>\n        </tr>\n        </thead>\n\n        <tbody>\n        <tr *ngFor=\"let article of tom.articles; let i = index\">\n          <td>{{ i + 1 }}</td>\n          <td>{{ article.author }}</td>\n          <td>{{ article.title }}</td>\n          <td>\n            <a routerLink=\"/admin/tom/{{ tom.id }}/article/{{ article.id }}\"><i class=\"material-icons color-black\">create</i></a>\n            <a (click)=\"deleteArticle(article.id)\" ><i class=\"material-icons color-black\">delete</i></a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <a class=\"waves-effect waves-light btn-small color-orange left\" href=\"/admin/tom/{{ tom.id }}/article/create\"><i class=\"material-icons right\">add</i>Додати статтю</a>\n    </div>\n  </div>\n</div>\n\n<ng-template #empty>\n  <div class=\"center\">У Вас не додано жодної статті.</div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/tom-page/show-tom-page/show-tom-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tom-page/show-tom-page/show-tom-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShowTomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTomPageComponent", function() { return ShowTomPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_toms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/toms.service */ "./src/app/shared/services/toms.service.ts");
/* harmony import */ var _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/classes/materialize.service */ "./src/app/shared/classes/materialize.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_services_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/article.service */ "./src/app/shared/services/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowTomPageComponent = /** @class */ (function () {
    function ShowTomPageComponent(tomsService, router, articleService, route) {
        this.tomsService = tomsService;
        this.router = router;
        this.articleService = articleService;
        this.route = route;
    }
    ShowTomPageComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    ShowTomPageComponent.prototype.fetch = function () {
        var _this = this;
        this.router.params
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            if (params['id']) {
                return _this.tomsService.getById(params['id']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }))
            .subscribe(function (tom) {
            if (tom) {
                _this.tom = tom;
            }
        }, function (error) {
            _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__["MaterializeService"].toast(error.error.message);
        });
    };
    ShowTomPageComponent.prototype.deleteTom = function () {
        var _this = this;
        var desicion = window.confirm('Ви впевнені що хочите видалити ' + this.tom.name + ' ' + this.tom.number);
        if (desicion) {
            this.tomsService.delete(this.tom.id)
                .subscribe(function (res) { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__["MaterializeService"].toast(res.message); }, function (err) { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__["MaterializeService"].toast(err.error.message); }, function () { return _this.route.navigate(['/admin']); });
        }
    };
    ShowTomPageComponent.prototype.deleteArticle = function (id) {
        var desicion = window.confirm('Ви впевнені що хочите видалити статтю ?');
        if (desicion) {
            this.articleService.delete(id)
                .subscribe(function () { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__["MaterializeService"].toast('Статтю успішно видалено!'); }, function (err) { return _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_3__["MaterializeService"].toast(err.error.message); }, function () { return window.location.reload(); });
        }
    };
    ShowTomPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-tom-page',
            template: __webpack_require__(/*! ./show-tom-page.component.html */ "./src/app/tom-page/show-tom-page/show-tom-page.component.html"),
            styles: [__webpack_require__(/*! ./show-tom-page.component.css */ "./src/app/tom-page/show-tom-page/show-tom-page.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_toms_service__WEBPACK_IMPORTED_MODULE_2__["TomsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_services_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ShowTomPageComponent);
    return ShowTomPageComponent;
}());



/***/ }),

/***/ "./src/app/tom-page/tom-page.component.css":
/*!*************************************************!*\
  !*** ./src/app/tom-page/tom-page.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".collection a {\n    color: #b14a01;\n}\n\n.color-orange {\n    background-color: #b14a01;\n}\n"

/***/ }),

/***/ "./src/app/tom-page/tom-page.component.html":
/*!**************************************************!*\
  !*** ./src/app/tom-page/tom-page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4 class=\"center-align\">Випуски журналу</h4>\n  <div class=\"row\">\n    <div class=\"collection\">\n      <a *ngFor=\"let tom of toms;\" href=\"admin/tom/{{ tom.id }}\" class=\"collection-item\">\n        {{ tom.name + '. Випуск ' + tom.number }}\n      </a>\n    </div>\n  </div>\n  <a class=\"waves-effect waves-light btn-small color-orange left\" href=\"/admin/tom/create\"><i class=\"material-icons right\">add</i>Додати випуск</a>\n</div>\n"

/***/ }),

/***/ "./src/app/tom-page/tom-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/tom-page/tom-page.component.ts ***!
  \************************************************/
/*! exports provided: TomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomPageComponent", function() { return TomPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_toms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/toms.service */ "./src/app/shared/services/toms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TomPageComponent = /** @class */ (function () {
    function TomPageComponent(tomsService) {
        this.tomsService = tomsService;
        this.toms = [];
    }
    TomPageComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    TomPageComponent.prototype.fetch = function () {
        var _this = this;
        this.oSub = this.tomsService.fetch().subscribe(function (toms) {
            _this.toms = toms;
        });
    };
    TomPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tom-page',
            template: __webpack_require__(/*! ./tom-page.component.html */ "./src/app/tom-page/tom-page.component.html"),
            styles: [__webpack_require__(/*! ./tom-page.component.css */ "./src/app/tom-page/tom-page.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_toms_service__WEBPACK_IMPORTED_MODULE_1__["TomsService"]])
    ], TomPageComponent);
    return TomPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var materialize_css_dist_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! materialize-css/dist/js/materialize.min.js */ "./node_modules/materialize-css/dist/js/materialize.min.js");
/* harmony import */ var materialize_css_dist_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kara/Fill/vb/blagovisnik/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map