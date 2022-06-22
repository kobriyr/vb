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

module.exports = ".author-article {\n  font-family: ArnoPro-SmbdSubhead;\n  margin-bottom: 30px;\n  font-size: 25px;\n  color: #0073a3;\n  cursor: pointer;\n}\n\n.title-article {\n  font-size: 36px;\n  font-family: ArnoPro-SmbdSubhead;\n}\n\n.key-words-article {\n  font-size: 18px;\n  padding-top: 20px;\n  border-top: 1px solid #cfd5e4;\n}\n\n.doi {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.description {\n  font-family: ArnoPro-ItalicSmText;\n}\n\n.summary-block {\n  padding-bottom: 20px;\n}\n\n.summary-article {\n  margin-bottom: 10px;\n  border-top: 1px solid #cfd5e4;\n  padding: 25px;\n  border-bottom: 1px solid #cfd5e4;\n  background-color: #eff2f7;\n}\n\n.ref-article {\n  padding: 10px 0;\n\n}\n\n.summary-en-article {\n  margin-bottom: 10px;\n}\n\n.link-article {\n\n}\n\n.article-info {\n  font-size: 20px;\n  font-family: ArnoPro-SmText;\n}\n\n.btn-article {\n  background-color: #007398;\n  margin: 0 10px;\n}\n\n.info-about-author {\n  border: 1px solid #b4baca;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 12px 9px;\n  box-shadow: 0 0 5px 0 rgba(50, 50, 50, 0.25);\n  position: relative;\n  width: 400px;\n  top: -30px;\n  font-size: .8em;\n  box-sizing: border-box;\n  transition: opacity .7s;\n  text-align: justify;\n}\n\n.info-about-author:after {\n  content: \" \";\n  position: absolute;\n  border-bottom: 5px solid #f1f1f1;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  top: -5px;\n  left: 30px;\n}\n\n.info-about-author:before {\n  content: \" \";\n  position: absolute;\n  border-bottom: 7px solid  #b4baca;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  top: -7px;\n  left: 28px;\n}\n\n.author-email {\n  color: #0073a3;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/about-article-page/about-article-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/about-article-page/about-article-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-info\">\n  <div *ngIf=\"article.title\" class=\"title-article\">{{ article.title }}</div>\n  <div *ngIf=\"article.author\" (click) =\"changeVisibly()\" class=\"author-article\">{{ article.author }}</div>\n  <div *ngIf=\"article.biography\" [hidden]=\"!visibility\" class=\"info-about-author\">\n    {{ article.biography  }}\n    <div *ngIf=\"article.email\" class=\"author-email\">\n      {{ article.email }}\n    </div>\n  </div>\n  <div *ngIf=\"article.doi\" class=\"doi\"> Номер DOI: {{ article.doi }}</div>\n  <div class=\"description\">{{ article.toms[0].name }}. - № {{ article.toms[0].number }}, {{ article.toms[0].year }}. - C. {{ article.pages }}</div>\n  <div class=\"doi\"><b>Опубліковано: </b> 22 жовтня {{ article.toms[0].year }}</div>\n  <div *ngIf=\"article.summary\" class=\"summary-article\">\n    <div class=\"summary-block\">\n      <div class=\"summary-header\">\n        <b>Анотація</b>\n      </div>\n      <div [innerHTML]=\"article.summary | safeHtml\"></div>\n    </div>\n    <div *ngIf=\"article.key_words\" class=\"key-words-article\">\n      <b>Ключові слова: </b>{{ article.key_words }}\n    </div>\n  </div>\n  <div *ngIf=\"article.references\" class=\"ref-article\"><b>Література: </b><br/> <div [innerHTML]=\"article.references | safeHtml\"></div></div>\n  <div *ngIf=\"article.document\" class=\"link-article\">\n    <a href=\"{{ article.document }}\" class=\"waves-effect waves-light btn btn-article\">\n      Переглянути статтю\n    </a>\n    <a target=\"_self\"\n       href=\"{{ article.document }}\"\n       download=\"{{ docName }}\"\n       class=\"waves-effect waves-light btn btn-article\">\n      Скачати статтю\n    </a>\n  </div>\n</div>\n\n"

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
        this.visibility = false;
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
    AboutArticlePageComponent.prototype.changeVisibly = function () {
        this.visibility = !this.visibility;
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

module.exports = "ins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b><ins>«Волинський благовісник» (VB)</ins></b> – це рецензований щорічний богословсько-історичний науковий журнал Волинської Православної Богословської Академії Православної Церкви України.</p>\n<p>Журнал виходить  з 2013 року.</p>\n<p><ins>«Волинський благовісник»</ins> приймає для публікації оригінальні статті та рецензії на книги, які раніше не були опубліковані та відображають дослідницький інтерес богословів та науковців.</p>\n<p>Подані на розгляд редакційної колегії матеріали проходять процедуру подвійного «сліпого» рецензування.</p>\n<p><ins>VB</ins> покликаний стати платформою для обміну наукових напрацювань між наукою та богослов’ям, забезпечуючи взаємну інтеграцію та інкорпорацію.</p>\n<p>Наукові статті відображають кращі актуальні теоретичні роздуми, емпіричні дослідження та методологічні форми, що виражають багатство богословської традиції та презентують розвиток сучасного богослов’я.</p>\n<p>Матеріали <ins>«Волинського благовісника»</ins> висвітлюють динаміку наукових досліджень у сфері богослів’я, літургіки, аполегетики, біблеїстики й археології, церковної історії та права, антропології, сакрального мистецтва, питань релігійної етики та проблем суспільно-соціальної площини.</p>\n"

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

/***/ "./src/app/aims-and-scop-page/aims-and-scop-page.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/aims-and-scop-page/aims-and-scop-page.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/aims-and-scop-page/aims-and-scop-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/aims-and-scop-page/aims-and-scop-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b><ins>«Волинський благовісник» (VB)</ins></b> покликаний стати платформою для обміну наукових напрацювань між наукою та богослов’ям, забезпечуючи взаємну інтеграцію та інкорпорацію.</p>\n<p>Матеріали <b><ins>«Волинського благовісника»</ins></b> висвітлюють динаміку наукових досліджень у сфері богослів’я, літургіки, аполегетики, біблеїстики й археології, церковної історії та права, антропології, сакрального мистецтва, питань релігійної етики та проблем суспільно-соціальної площини.</p>\n"

/***/ }),

/***/ "./src/app/aims-and-scop-page/aims-and-scop-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/aims-and-scop-page/aims-and-scop-page.component.ts ***!
  \********************************************************************/
/*! exports provided: AimsAndScopPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AimsAndScopPageComponent", function() { return AimsAndScopPageComponent; });
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

var AimsAndScopPageComponent = /** @class */ (function () {
    function AimsAndScopPageComponent() {
    }
    AimsAndScopPageComponent.prototype.ngOnInit = function () {
    };
    AimsAndScopPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aims-and-scop-page',
            template: __webpack_require__(/*! ./aims-and-scop-page.component.html */ "./src/app/aims-and-scop-page/aims-and-scop-page.component.html"),
            styles: [__webpack_require__(/*! ./aims-and-scop-page.component.css */ "./src/app/aims-and-scop-page/aims-and-scop-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AimsAndScopPageComponent);
    return AimsAndScopPageComponent;
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
/* harmony import */ var _aims_and_scop_page_aims_and_scop_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./aims-and-scop-page/aims-and-scop-page.component */ "./src/app/aims-and-scop-page/aims-and-scop-page.component.ts");
/* harmony import */ var _en_aims_and_scop_page_en_aims_and_scop_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./en-aims-and-scop-page/en-aims-and-scop-page.component */ "./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.ts");
/* harmony import */ var _open_access_statement_page_open_access_statement_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./open-access-statement-page/open-access-statement-page.component */ "./src/app/open-access-statement-page/open-access-statement-page.component.ts");
/* harmony import */ var _en_open_access_statement_page_en_open_access_statement_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./en-open-access-statement-page/en-open-access-statement-page.component */ "./src/app/en-open-access-statement-page/en-open-access-statement-page.component.ts");
/* harmony import */ var _archiving_page_archiving_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./archiving-page/archiving-page.component */ "./src/app/archiving-page/archiving-page.component.ts");
/* harmony import */ var _en_archiving_page_en_archiving_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./en-archiving-page/en-archiving-page.component */ "./src/app/en-archiving-page/en-archiving-page.component.ts");
/* harmony import */ var _plagiarism_policy_page_plagiarism_policy_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./plagiarism-policy-page/plagiarism-policy-page.component */ "./src/app/plagiarism-policy-page/plagiarism-policy-page.component.ts");
/* harmony import */ var _en_plagiarism_policy_page_en_plagiarism_policy_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./en-plagiarism-policy-page/en-plagiarism-policy-page.component */ "./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.ts");
/* harmony import */ var _review_policy_page_review_policy_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./review-policy-page/review-policy-page.component */ "./src/app/review-policy-page/review-policy-page.component.ts");
/* harmony import */ var _en_review_policy_page_en_review_policy_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./en-review-policy-page/en-review-policy-page.component */ "./src/app/en-review-policy-page/en-review-policy-page.component.ts");
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
    { path: 'ua', component: _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"], children: [
            { path: 'general-information', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"] },
            { path: 'editorial-board', component: _editorial_board_page_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_9__["EditorialBoardPageComponent"] },
            { path: 'for-authors', component: _for_authors_page_for_authors_page_component__WEBPACK_IMPORTED_MODULE_10__["ForAuthorsPageComponent"] },
            { path: 'review-policy', component: _review_policy_page_review_policy_page_component__WEBPACK_IMPORTED_MODULE_34__["ReviewPolicyPageComponent"] },
            { path: 'journal-numbers', component: _journal_numbers_page_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_11__["JournalNumbersPageComponent"] },
            { path: 'reviewing', component: _reviewing_page_reviewing_page_component__WEBPACK_IMPORTED_MODULE_12__["ReviewingPageComponent"] },
            { path: 'aims-and-scopes', component: _aims_and_scop_page_aims_and_scop_page_component__WEBPACK_IMPORTED_MODULE_26__["AimsAndScopPageComponent"] },
            { path: 'open-access-statement', component: _open_access_statement_page_open_access_statement_page_component__WEBPACK_IMPORTED_MODULE_28__["OpenAccessStatementPageComponent"] },
            { path: 'archiving', component: _archiving_page_archiving_page_component__WEBPACK_IMPORTED_MODULE_30__["ArchivingPageComponent"] },
            { path: 'plagiarism-policy', component: _plagiarism_policy_page_plagiarism_policy_page_component__WEBPACK_IMPORTED_MODULE_32__["PlagiarismPolicyPageComponent"] },
            { path: ':id', component: _about_article_page_about_article_page_component__WEBPACK_IMPORTED_MODULE_24__["AboutArticlePageComponent"] },
            { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"] },
        ] },
    { path: '', component: _shared_layouts_en_main_layout_en_main_layout_component__WEBPACK_IMPORTED_MODULE_13__["EnMainLayoutComponent"], children: [
            { path: 'general-information', component: _en_about_page_en_about_page_component__WEBPACK_IMPORTED_MODULE_14__["EnAboutPageComponent"] },
            { path: 'editorial-board', component: _en_editorial_board_page_en_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_15__["EnEditorialBoardPageComponent"] },
            { path: 'for-authors', component: _en_for_authors_page_en_for_authors_page_component__WEBPACK_IMPORTED_MODULE_16__["EnForAuthorsPageComponent"] },
            { path: 'review-policy', component: _en_review_policy_page_en_review_policy_page_component__WEBPACK_IMPORTED_MODULE_35__["EnReviewPolicyPageComponent"] },
            { path: 'journal-numbers', component: _en_journal_numbers_page_en_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_17__["EnJournalNumbersPageComponent"] },
            { path: 'reviewing', component: _en_reviewing_page_en_reviewing_page_component__WEBPACK_IMPORTED_MODULE_18__["EnReviewingPageComponent"] },
            { path: 'aims-and-scopes', component: _en_aims_and_scop_page_en_aims_and_scop_page_component__WEBPACK_IMPORTED_MODULE_27__["EnAimsAndScopPageComponent"] },
            { path: 'open-access-statement', component: _en_open_access_statement_page_en_open_access_statement_page_component__WEBPACK_IMPORTED_MODULE_29__["EnOpenAccessStatementPageComponent"] },
            { path: 'archiving', component: _en_archiving_page_en_archiving_page_component__WEBPACK_IMPORTED_MODULE_31__["EnArchivingPageComponent"] },
            { path: 'plagiarism-policy', component: _en_plagiarism_policy_page_en_plagiarism_policy_page_component__WEBPACK_IMPORTED_MODULE_33__["EnPlagiarismPolicyPageComponent"] },
            { path: ':id', component: _en_about_article_page_en_about_article_page_component__WEBPACK_IMPORTED_MODULE_25__["EnAboutArticlePageComponent"] },
            { path: '', component: _en_main_page_en_main_page_component__WEBPACK_IMPORTED_MODULE_19__["EnMainPageComponent"] }
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
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/classes/token.interceptor */ "./src/app/shared/classes/token.interceptor.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/layouts/main-layout/main-layout.component */ "./src/app/shared/layouts/main-layout/main-layout.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _editorial_board_page_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editorial-board-page/editorial-board-page.component */ "./src/app/editorial-board-page/editorial-board-page.component.ts");
/* harmony import */ var _for_authors_page_for_authors_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./for-authors-page/for-authors-page.component */ "./src/app/for-authors-page/for-authors-page.component.ts");
/* harmony import */ var _journal_numbers_page_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./journal-numbers-page/journal-numbers-page.component */ "./src/app/journal-numbers-page/journal-numbers-page.component.ts");
/* harmony import */ var _reviewing_page_reviewing_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reviewing-page/reviewing-page.component */ "./src/app/reviewing-page/reviewing-page.component.ts");
/* harmony import */ var _shared_layouts_en_main_layout_en_main_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/layouts/en-main-layout/en-main-layout.component */ "./src/app/shared/layouts/en-main-layout/en-main-layout.component.ts");
/* harmony import */ var _en_about_page_en_about_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./en-about-page/en-about-page.component */ "./src/app/en-about-page/en-about-page.component.ts");
/* harmony import */ var _en_editorial_board_page_en_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./en-editorial-board-page/en-editorial-board-page.component */ "./src/app/en-editorial-board-page/en-editorial-board-page.component.ts");
/* harmony import */ var _en_for_authors_page_en_for_authors_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./en-for-authors-page/en-for-authors-page.component */ "./src/app/en-for-authors-page/en-for-authors-page.component.ts");
/* harmony import */ var _en_journal_numbers_page_en_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./en-journal-numbers-page/en-journal-numbers-page.component */ "./src/app/en-journal-numbers-page/en-journal-numbers-page.component.ts");
/* harmony import */ var _en_reviewing_page_en_reviewing_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./en-reviewing-page/en-reviewing-page.component */ "./src/app/en-reviewing-page/en-reviewing-page.component.ts");
/* harmony import */ var _en_main_page_en_main_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./en-main-page/en-main-page.component */ "./src/app/en-main-page/en-main-page.component.ts");
/* harmony import */ var _tom_page_tom_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tom-page/tom-page.component */ "./src/app/tom-page/tom-page.component.ts");
/* harmony import */ var _tom_page_form_tom_page_form_tom_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tom-page/form-tom-page/form-tom-page.component */ "./src/app/tom-page/form-tom-page/form-tom-page.component.ts");
/* harmony import */ var _tom_page_show_tom_page_show_tom_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tom-page/show-tom-page/show-tom-page.component */ "./src/app/tom-page/show-tom-page/show-tom-page.component.ts");
/* harmony import */ var _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./article-page/article-page.component */ "./src/app/article-page/article-page.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _about_article_page_about_article_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./about-article-page/about-article-page.component */ "./src/app/about-article-page/about-article-page.component.ts");
/* harmony import */ var _en_about_article_page_en_about_article_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./en-about-article-page/en-about-article-page.component */ "./src/app/en-about-article-page/en-about-article-page.component.ts");
/* harmony import */ var _search_en_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./search-en.pipe */ "./src/app/search-en.pipe.ts");
/* harmony import */ var _safeHtml_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./safeHtml.pipe */ "./src/app/safeHtml.pipe.ts");
/* harmony import */ var _aims_and_scop_page_aims_and_scop_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./aims-and-scop-page/aims-and-scop-page.component */ "./src/app/aims-and-scop-page/aims-and-scop-page.component.ts");
/* harmony import */ var _en_aims_and_scop_page_en_aims_and_scop_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./en-aims-and-scop-page/en-aims-and-scop-page.component */ "./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.ts");
/* harmony import */ var _open_access_statement_page_open_access_statement_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./open-access-statement-page/open-access-statement-page.component */ "./src/app/open-access-statement-page/open-access-statement-page.component.ts");
/* harmony import */ var _en_open_access_statement_page_en_open_access_statement_page_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./en-open-access-statement-page/en-open-access-statement-page.component */ "./src/app/en-open-access-statement-page/en-open-access-statement-page.component.ts");
/* harmony import */ var _archiving_page_archiving_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./archiving-page/archiving-page.component */ "./src/app/archiving-page/archiving-page.component.ts");
/* harmony import */ var _en_archiving_page_en_archiving_page_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./en-archiving-page/en-archiving-page.component */ "./src/app/en-archiving-page/en-archiving-page.component.ts");
/* harmony import */ var _plagiarism_policy_page_plagiarism_policy_page_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./plagiarism-policy-page/plagiarism-policy-page.component */ "./src/app/plagiarism-policy-page/plagiarism-policy-page.component.ts");
/* harmony import */ var _en_plagiarism_policy_page_en_plagiarism_policy_page_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./en-plagiarism-policy-page/en-plagiarism-policy-page.component */ "./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.ts");
/* harmony import */ var _review_policy_page_review_policy_page_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./review-policy-page/review-policy-page.component */ "./src/app/review-policy-page/review-policy-page.component.ts");
/* harmony import */ var _en_review_policy_page_en_review_policy_page_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./en-review-policy-page/en-review-policy-page.component */ "./src/app/en-review-policy-page/en-review-policy-page.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
                _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
                _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_8__["SiteLayoutComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_10__["AboutPageComponent"],
                _shared_layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__["MainLayoutComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__["MainPageComponent"],
                _editorial_board_page_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_14__["EditorialBoardPageComponent"],
                _for_authors_page_for_authors_page_component__WEBPACK_IMPORTED_MODULE_15__["ForAuthorsPageComponent"],
                _journal_numbers_page_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_16__["JournalNumbersPageComponent"],
                _reviewing_page_reviewing_page_component__WEBPACK_IMPORTED_MODULE_17__["ReviewingPageComponent"],
                _shared_layouts_en_main_layout_en_main_layout_component__WEBPACK_IMPORTED_MODULE_18__["EnMainLayoutComponent"],
                _en_about_page_en_about_page_component__WEBPACK_IMPORTED_MODULE_19__["EnAboutPageComponent"],
                _en_editorial_board_page_en_editorial_board_page_component__WEBPACK_IMPORTED_MODULE_20__["EnEditorialBoardPageComponent"],
                _en_for_authors_page_en_for_authors_page_component__WEBPACK_IMPORTED_MODULE_21__["EnForAuthorsPageComponent"],
                _en_journal_numbers_page_en_journal_numbers_page_component__WEBPACK_IMPORTED_MODULE_22__["EnJournalNumbersPageComponent"],
                _en_reviewing_page_en_reviewing_page_component__WEBPACK_IMPORTED_MODULE_23__["EnReviewingPageComponent"],
                _en_main_page_en_main_page_component__WEBPACK_IMPORTED_MODULE_24__["EnMainPageComponent"],
                _tom_page_tom_page_component__WEBPACK_IMPORTED_MODULE_25__["TomPageComponent"],
                _tom_page_form_tom_page_form_tom_page_component__WEBPACK_IMPORTED_MODULE_26__["FormTomPageComponent"],
                _tom_page_show_tom_page_show_tom_page_component__WEBPACK_IMPORTED_MODULE_27__["ShowTomPageComponent"],
                _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_28__["ArticlePageComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_29__["SearchPipe"],
                _about_article_page_about_article_page_component__WEBPACK_IMPORTED_MODULE_30__["AboutArticlePageComponent"],
                _en_about_article_page_en_about_article_page_component__WEBPACK_IMPORTED_MODULE_31__["EnAboutArticlePageComponent"],
                _search_en_pipe__WEBPACK_IMPORTED_MODULE_32__["SearchEnPipe"],
                _safeHtml_pipe__WEBPACK_IMPORTED_MODULE_33__["SafeHtmlPipe"],
                _aims_and_scop_page_aims_and_scop_page_component__WEBPACK_IMPORTED_MODULE_34__["AimsAndScopPageComponent"],
                _en_aims_and_scop_page_en_aims_and_scop_page_component__WEBPACK_IMPORTED_MODULE_35__["EnAimsAndScopPageComponent"],
                _open_access_statement_page_open_access_statement_page_component__WEBPACK_IMPORTED_MODULE_36__["OpenAccessStatementPageComponent"],
                _en_open_access_statement_page_en_open_access_statement_page_component__WEBPACK_IMPORTED_MODULE_37__["EnOpenAccessStatementPageComponent"],
                _archiving_page_archiving_page_component__WEBPACK_IMPORTED_MODULE_38__["ArchivingPageComponent"],
                _en_archiving_page_en_archiving_page_component__WEBPACK_IMPORTED_MODULE_39__["EnArchivingPageComponent"],
                _plagiarism_policy_page_plagiarism_policy_page_component__WEBPACK_IMPORTED_MODULE_40__["PlagiarismPolicyPageComponent"],
                _en_plagiarism_policy_page_en_plagiarism_policy_page_component__WEBPACK_IMPORTED_MODULE_41__["EnPlagiarismPolicyPageComponent"],
                _review_policy_page_review_policy_page_component__WEBPACK_IMPORTED_MODULE_42__["ReviewPolicyPageComponent"],
                _en_review_policy_page_en_review_policy_page_component__WEBPACK_IMPORTED_MODULE_43__["EnReviewPolicyPageComponent"]
            ],
            imports: [
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_0__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_0__["FroalaViewModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    multi: true,
                    useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/archiving-page/archiving-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/archiving-page/archiving-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/archiving-page/archiving-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/archiving-page/archiving-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Журнал використовує систему розподіленого архівного зберігання опублікованого матеріалу в численних бібліотеках та інформаційних центрах.</p>\n<p>Крім того, всі файли зберігаються в Національній бібліотеці України ім. Вернадського (м. Київ, Україна).</p>\n"

/***/ }),

/***/ "./src/app/archiving-page/archiving-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/archiving-page/archiving-page.component.ts ***!
  \************************************************************/
/*! exports provided: ArchivingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivingPageComponent", function() { return ArchivingPageComponent; });
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

var ArchivingPageComponent = /** @class */ (function () {
    function ArchivingPageComponent() {
    }
    ArchivingPageComponent.prototype.ngOnInit = function () {
    };
    ArchivingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archiving-page',
            template: __webpack_require__(/*! ./archiving-page.component.html */ "./src/app/archiving-page/archiving-page.component.html"),
            styles: [__webpack_require__(/*! ./archiving-page.component.css */ "./src/app/archiving-page/archiving-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArchivingPageComponent);
    return ArchivingPageComponent;
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

module.exports = "<div class=\"container\">\n  <div class=\"page-title\">\n    <h4>\n      <a routerLink=\"/admin\">Статті</a>\n      <i class=\"material-icons\">keyboard_arrow_right</i>\n      {{ isNew ? 'Додати' : 'Редагувати' }} статтю\n    </h4>\n    <span>\n      <button *ngIf=\"!isNew\" class=\"btn btn-small red\" (click)=\"deleteArticle()\">\n        <i class=\"material-icons\">delete</i>\n      </button>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s12 l12\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"input-field\">\n        <input pattern=\"[0-9]*\" formControlName=\"number\" id=\"number\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('number').invalid && form.get('number').touched }\">\n        <label for=\"number\">Номер</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('number').invalid && form.get('number').touched\">\n        <span *ngIf=\"form.get('number').errors['required']\">\n          Номер повинен бути зазначений.\n        </span>\n        <span *ngIf=\"form.get('number').errors['pattern']\">\n          Дані повинні бути числом.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"author\" id=\"author\" type=\"text\">\n        <label for=\"author\">Автор</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"author_en\" id=\"author_en\" type=\"text\">\n        <label for=\"author\">Author</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"title\" id=\"title\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('title').invalid && form.get('title').touched }\">\n        <label for=\"title\">Назва</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('title').invalid && form.get('title').touched\">\n        <span *ngIf=\"form.get('title').errors['required']\">\n          Назва повинна бути зазначена.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"title_en\" id=\"title_en\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('title_en').invalid && form.get('title_en').touched }\">\n        <label for=\"title\">Title</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('title_en').invalid && form.get('title_en').touched\">\n        <span *ngIf=\"form.get('title_en').errors['required']\">\n          Title повинен бути зазначений.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"pages\" id=\"pages\" type=\"text\">\n        <label for=\"pages\">Сторінки</label>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea formControlName=\"summary\"  id=\"summary\" class=\"materialize-textarea\" #textArea></textarea>\n        <label for=\"summary\">Анотація</label>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea formControlName=\"summary_en\"  id=\"summary_en\" class=\"materialize-textarea\" #textAreaEn></textarea>\n        <label for=\"summary_en\">Summary</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"key_words\" id=\"key_words\" type=\"text\">\n        <label for=\"key_words\">Ключові слова</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"key_words_en\" id=\"key_words_en\" type=\"text\">\n        <label for=\"key_words\">Key words</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"doi\" id=\"doi\" type=\"text\">\n        <label for=\"doi\">Номер DOI</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"email\" id=\"email\" type=\"text\">\n        <label for=\"email\">Email</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"biography\" id=\"biography\" type=\"text\">\n        <label for=\"biography\">Біографія</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"biography_en\" id=\"biography_en\" type=\"text\">\n        <label for=\"biography_en\">Biography</label>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea [froalaEditor]='optionsRef' formControlName=\"references\" id=\"references\" class=\"materialize-textarea\" #textAreaRef></textarea>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea [froalaEditor]='optionsRefEn' formControlName=\"references_en\" id=\"references_en\" class=\"materialize-textarea\" #textAreaRefEn></textarea>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"document\" id=\"document\" type=\"text\" />\n        <label for=\"document\">Документ</label>\n      </div>\n\n      <div>\n        <button type=\"submit\" class=\"waves-effect waves-light btn\" [disabled]=\"form.invalid || form.disabled\">\n          Зберегти\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

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
        this.optionsRef = {
            placeholderText: 'Список літератури',
            toolbarButtons: ['bold', 'italic', 'underline', 'html', 'inlineStyle', 'lineHeight', '|', 'undo', 'redo'],
        };
        this.optionsRefEn = {
            placeholderText: 'References',
            toolbarButtons: ['bold', 'italic', 'underline', 'html', 'inlineStyle', 'lineHeight', '|', 'undo', 'redo'],
        };
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
            doi: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            biography: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            biography_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            references: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            references_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            document: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
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
                    doi: article.doi,
                    email: article.email,
                    biography: article.biography,
                    biography_en: article.biography_en,
                    references: article.references,
                    references_en: article.references_en,
                    document: article.document
                });
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].updateTextInputs();
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].textareaAuto(_this.textAreaRef);
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].textareaAuto(_this.textAreaEnRef);
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].textareaAuto(_this.textAreaRefRef);
                _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_6__["MaterializeService"].textareaAuto(_this.textAreaRefRefEn);
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
            obs$ = this.articleService.create(this.tom, this.form.value.author, this.form.value.author_en, this.form.value.number, this.form.value.title, this.form.value.title_en, this.form.value.pages, this.form.value.key_words, this.form.value.key_words_en, this.form.value.summary, this.form.value.summary_en, this.form.value.doi, this.form.value.email, this.form.value.biography, this.form.value.biography_en, this.form.value.references, this.form.value.references_en, this.form.value.document);
        }
        else {
            obs$ = this.articleService.update(this.article.id, this.form.value.author, this.form.value.author_en, this.form.value.number, this.form.value.title, this.form.value.title_en, this.form.value.pages, this.form.value.key_words, this.form.value.key_words_en, this.form.value.summary, this.form.value.summary_en, this.form.value.doi, this.form.value.email, this.form.value.biography, this.form.value.biography_en, this.form.value.references, this.form.value.references_en, this.form.value.document);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textAreaRefEn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ArticlePageComponent.prototype, "textAreaRefRefEn", void 0);
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

module.exports = "ul.collapsible div.collapsible-header {\n  flex-direction: column;\n}\n\nul.collapsible div.collapsible-header i {\n  width: auto;\n  font-size: initial;\n}\n\np.member-editor-board {\n  margin-left: 30px;\n}\n"

/***/ }),

/***/ "./src/app/editorial-board-page/editorial-board-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/editorial-board-page/editorial-board-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b>Рецензенти:</b></p>\n<p class=\"member-editor-board\">прот. Володимир Вакін, кандидат богословських наук, доцент, ректор ВПБА (<i>Волинська православна богословська академія, Україна</i>). <i>ORCID: https://orcid.org/0000-0002-9938-087X</i></p>\n<p class=\"member-editor-board\">прот. Владислав Фульмес, доктор філософії, доцент (<i>Волинська православна богословська академія, Україна</i>). <i>ORCID: https://orcid.org/0000-0003-1263-9808</i></p>\n<p class=\"member-editor-board\">прот. Василь Лозовицький, кандидат богословських наук, доцент (<i>Волинська православна богословська академія, Україна</i>). <i>ORCID: https://orcid.org/0000-0001-5645-4309</i></p>\n<p class=\"member-editor-board\">прот. Олександр Хорошко, кандидат богословських наук (<i>Волинська православна богословська академія, Україна</i>). <i>ORCID: https://orcid.org/0000-0003-1341-1557</i></p>\n<p class=\"member-editor-board\">прот. Миколай Цап’юк, кандидат богословських наук, доцент (<i>Волинська православна богословська академія, Україна</i>).</p>\n<p class=\"member-editor-board\">прот. Віталій Клос, доктор наук із богослів’я, професор (<i>Київська православна богословська академія, Україна</i>). <i>ORCID: https://orcid.org/0000-0002-7429-0042</i></p>\n<p class=\"member-editor-board\">Филипович Людмила Олександрівна, доктор філософських наук, професор (<i>Інститут філософії імені Г. С. Сковороди НАН України, Україна</i>). <i>ORCID: https://orcid.org/0000-0002-0886-3965</i></p>\n<p class=\"member-editor-board\">Хромець Віталій Леонідович, доктор філософських наук, доцент (<i>Національна академія образотворчого мистецтва і архітектури, Україна</i>).</p>\n<p class=\"member-editor-board\">Держко Ігор Зеновійович, доктор філософських наук, професор (<i>Львівський національний медичний університет імені Данила Галицького, Україна</i>).</p>\n<p class=\"member-editor-board\">Головей Вікторія Юріївна, доктор філософських наук, професор (<i>Волинський національний університет імені Лесі Українки, Україна</i>). <i>ORCID: https://orcid.org/0000-0002-8224-5970</i></p>\n<p class=\"member-editor-board\">Преловська Ірина Миколаївна, доктор історичних наук, професор (<i>Інститут української археографії та джерелознавства ім. М. С. Грушевського НАН України, Україна</i>).</p>\n<p class=\"member-editor-board\">Борщевич Володимир Трохимович, доктор історичних наук, професор (<i>Рівненська духовна семінарія, Україна</i>).</p>\n<p class=\"member-editor-board\">Кучерепа Микола Михайлович, кандидат історичних наук, професор (<i>Волинський національний університет імені Лесі Українки, Україна</i>).</p>\n<p class=\"member-editor-board\">archbishop Job (Gecha), Dr. Sci., prof. (<i>Institute for Orthodox Theology Higher Studies at Chambésy, Switzerland</i>).</p>\n<p class=\"member-editor-board\">Elzbieta Szczot, Dr. Sci., prof. (<i>Katolicki Uniwersytet Lubelski Jana Pawła II, Poland</i>). <i>ORCID: https://orcid.org/0000-0002-8360-4250</i></p>\n<p class=\"member-editor-board\">Zurab Kutateladze, Dr. Sci., prof. (<i>Gorgasali University of Tbilisi, Georgia</i>).</p>\n<p class=\"member-editor-board\">Lucjan Swito, Dr. Sci., prof. (<i>Uniwersytet Warmińsko-Mazurski, Poland</i>). <i>ORCID: https://orcid.org/0000-0002-6392-4599</i></p>\n<p class=\"member-editor-board\">Irena Mytnik, Dr. Sci. (<i>Uniwersytet Warszawski, Poland</i>). <i>ORCID: https://orcid.org/0000-0002-9748-3314</i></p>\n<p class=\"member-editor-board\">archpriest Václav Ježek, PhD, prof. (<i>University of Prešov, Slovakia</i>). <i>ORCID: https://orcid.org/0000-0001-9521-7963</i></p>\n<p class=\"member-editor-board\">Eirini Artemi, PhD (<i>Hellenic Open University, Greece</i>). <i>ORCID: https://orcid.org/0000-0002-8852-9907</i></p>\n<p class=\"member-editor-board\">Katarzyna Jakubowska-Krawczyk, PhD (<i>Uniwersytet Warszawski, Poland</i>). <i>ORCID: https://orcid.org/0000-0002-6281-7011</i></p>\n<p class=\"member-editor-board\">Valeri Polkovsky, PhD (<i>University of Alberta, Canada</i>).</p>\n<p class=\"member-editor-board\">Serge Cipko, PhD (<i>University of Alberta, Canada</i>).</p>\n"

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

module.exports = ".author-article {\n  font-family: ArnoPro-SmbdSubhead;\n  margin-bottom: 30px;\n  font-size: 25px;\n  color: #0073a3;\n  cursor: pointer;\n}\n\n.title-article {\n  font-size: 36px;\n  font-family: ArnoPro-SmbdSubhead;\n}\n\n.key-words-article {\n  font-size: 18px;\n  padding-top: 20px;\n  border-top: 1px solid #cfd5e4;\n}\n\n.doi {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.description {\n  font-family: ArnoPro-ItalicSmText;\n}\n\n.summary-block {\n  padding-bottom: 20px;\n}\n\n.summary-article {\n  margin-bottom: 10px;\n  border-top: 1px solid #cfd5e4;\n  padding: 25px;\n  border-bottom: 1px solid #cfd5e4;\n  background-color: #eff2f7;\n}\n\n.ref-article {\n  padding: 10px 0;\n\n}\n\n.summary-en-article {\n  margin-bottom: 10px;\n}\n\n.link-article {\n\n}\n\n.article-info {\n  font-size: 20px;\n  font-family: ArnoPro-SmText;\n}\n\n.btn-article {\n  background-color: #007398;\n  margin: 0 10px;\n}\n\n.info-about-author {\n  border: 1px solid #b4baca;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 12px 9px;\n  box-shadow: 0 0 5px 0 rgba(50, 50, 50, 0.25);\n  position: relative;\n  width: 400px;\n  top: -30px;\n  font-size: .8em;\n  box-sizing: border-box;\n  transition: opacity .7s;\n  text-align: justify;\n}\n\n.info-about-author:after {\n  content: \" \";\n  position: absolute;\n  border-bottom: 5px solid #f1f1f1;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  top: -5px;\n  left: 30px;\n}\n\n.info-about-author:before {\n  content: \" \";\n  position: absolute;\n  border-bottom: 7px solid  #b4baca;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  top: -7px;\n  left: 28px;\n}\n\n.author-email {\n  color: #0073a3;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/en-about-article-page/en-about-article-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/en-about-article-page/en-about-article-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-info\">\n  <div *ngIf=\"article.title_en\" class=\"title-article\">{{ article.title_en }}</div>\n  <div *ngIf=\"article.author_en\" (click) =\"changeVisibly()\" class=\"author-article\">{{ article.author_en }}</div>\n  <div *ngIf=\"article.toms[0].number > 5 ? article.biography_en : article.biography\" [hidden]=\"!visibility\" class=\"info-about-author\">\n    {{ article.toms[0].number > 5 ? article.biography_en : article.biography }}\n    <div *ngIf=\"article.email\" class=\"author-email\">\n      {{ article.email }}\n    </div>\n  </div>\n  <div *ngIf=\"article.doi\" class=\"doi\"> Number DOI: {{ article.doi }}</div>\n  <div class=\"description\">VB. - № {{ article.toms[0].number }}, {{ article.toms[0].year }}. - P. {{ article.pages }}</div>\n  <div class=\"doi\"><b>Published:</b> 22 October {{ article.toms[0].year }}</div>\n  <div *ngIf=\"article.summary_en\" class=\"summary-article\">\n    <div class=\"summary-block\">\n      <div class=\"summary-header\">\n        <b>Summary</b>\n      </div>\n      <div [innerHTML]=\"article.summary_en | safeHtml\"></div>\n    </div>\n    <div *ngIf=\"article.key_words_en\" class=\"key-words-article\">\n      <b>Key words: </b>{{ article.key_words_en }}\n    </div>\n  </div>\n  <div *ngIf=\"article.references\" class=\"ref-article\"><b>References: </b><br/> <div [innerHTML]=\"article.toms[0].number > 5 ? article.references_en : article.references  | safeHtml\"></div></div>\n  <div *ngIf=\"article.document\" class=\"link-article\">\n    <a href=\"{{ article.document }}\" class=\"waves-effect waves-light btn btn-article\">\n      View article\n    </a>\n    <a target=\"_self\"\n       href=\"{{ article.document }}\"\n       download=\"{{ docName }}\"\n       class=\"waves-effect waves-light btn btn-article\">\n      Download the article\n    </a>\n  </div>\n</div>\n\n"

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






var EnAboutArticlePageComponent = /** @class */ (function () {
    function EnAboutArticlePageComponent(router, articleService) {
        this.router = router;
        this.articleService = articleService;
        this.visibility = false;
    }
    EnAboutArticlePageComponent.prototype.ngOnInit = function () {
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
    EnAboutArticlePageComponent.prototype.changeVisibly = function () {
        this.visibility = !this.visibility;
    };
    EnAboutArticlePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-about-article-page',
            template: __webpack_require__(/*! ./en-about-article-page.component.html */ "./src/app/en-about-article-page/en-about-article-page.component.html"),
            styles: [__webpack_require__(/*! ./en-about-article-page.component.css */ "./src/app/en-about-article-page/en-about-article-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]])
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

module.exports = "ins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/en-about-page/en-about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/en-about-page/en-about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b><ins>«Volynskyy Blahovisnyk» (VB)</ins></b> is a peer-reviewed annual theological and historical academic periodical of the Volyn Orthodox Theological Academy of the Orthodox Church of Ukraine.</p>\n<p>The journal has been published since 2013.</p>\n<p><i><ins>VB</ins></i> accepts for publication original articles and reviews on the books that have not previously been published and reflect the interest of theologians and scholars.</p>\n<p>Manuscripts submitted to the editorial board are subjected to a double-blind review process.</p>\n<p><i><ins>VB</ins></i> is intended to become a platform for the exchange of scientific achievements between science and theology, providing mutual integration and incorporation.</p>\n<p>Scientific articles involve the best current theoretical reflections, empirical researches and methodological forms that express the riches of theological tradition and present the development of current theology.</p>\n<p>Materials of <i><ins>VB</ins></i> cover the dynamics of scientific research in the fields of theology, liturgy, apolegetics, biblical and archeology, church history and law, anthropology, sacral art, issues of religious ethics and social problems.</p>\n"

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

/***/ "./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b><ins>VB</ins></b> is intended to become a platform for the exchange of scientific achievements between science and theology, providing mutual integration and incorporation.</p>\n<p>Materials of <b><ins>VB</ins></b> cover the dynamics of scientific research in the fields of theology, liturgy, apolegetics, biblical and archeology, church history and law, anthropology, sacral art, issues of religious ethics and social problems.</p>\n"

/***/ }),

/***/ "./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: EnAimsAndScopPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnAimsAndScopPageComponent", function() { return EnAimsAndScopPageComponent; });
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

var EnAimsAndScopPageComponent = /** @class */ (function () {
    function EnAimsAndScopPageComponent() {
    }
    EnAimsAndScopPageComponent.prototype.ngOnInit = function () {
    };
    EnAimsAndScopPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-aims-and-scop-page',
            template: __webpack_require__(/*! ./en-aims-and-scop-page.component.html */ "./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.html"),
            styles: [__webpack_require__(/*! ./en-aims-and-scop-page.component.css */ "./src/app/en-aims-and-scop-page/en-aims-and-scop-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnAimsAndScopPageComponent);
    return EnAimsAndScopPageComponent;
}());



/***/ }),

/***/ "./src/app/en-archiving-page/en-archiving-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/en-archiving-page/en-archiving-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/en-archiving-page/en-archiving-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/en-archiving-page/en-archiving-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>The journal uses system for distributed archival storage of published content in numerous libraries and information centers.</p>\n<p>In addition, all files are stored in the Vernadsky National Library of Ukraine (Kyiv, Ukraine).</p>\n"

/***/ }),

/***/ "./src/app/en-archiving-page/en-archiving-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/en-archiving-page/en-archiving-page.component.ts ***!
  \******************************************************************/
/*! exports provided: EnArchivingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnArchivingPageComponent", function() { return EnArchivingPageComponent; });
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

var EnArchivingPageComponent = /** @class */ (function () {
    function EnArchivingPageComponent() {
    }
    EnArchivingPageComponent.prototype.ngOnInit = function () {
    };
    EnArchivingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-archiving-page',
            template: __webpack_require__(/*! ./en-archiving-page.component.html */ "./src/app/en-archiving-page/en-archiving-page.component.html"),
            styles: [__webpack_require__(/*! ./en-archiving-page.component.css */ "./src/app/en-archiving-page/en-archiving-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnArchivingPageComponent);
    return EnArchivingPageComponent;
}());



/***/ }),

/***/ "./src/app/en-editorial-board-page/en-editorial-board-page.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/en-editorial-board-page/en-editorial-board-page.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.collapsible div.collapsible-header {\n  flex-direction: column;\n}\n\nul.collapsible div.collapsible-header i {\n  width: auto;\n  font-size: initial;\n}\n\np.member-editor-board {\n  margin-left: 30px;\n}\n"

/***/ }),

/***/ "./src/app/en-editorial-board-page/en-editorial-board-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/en-editorial-board-page/en-editorial-board-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b>Reviewers:</b></p>\n<p class=\"member-editor-board\">archpriest Volodymyr Vakin, PhD, as. prof. (<i>Volyn Orthodox Theological Academy, Ukraine</i>). <i>ORCID: https://orcid.org/0000-0002-9938-087X</i></p>\n<p class=\"member-editor-board\">archpriest Vladyslav Fulmes, PhD, as. prof. (<i>Volyn Orthodox Theological Academy, Ukraine</i>). <i>ORCID: https://orcid.org/0000-0003-1263-9808</i></p>\n<p class=\"member-editor-board\">archpriest Vasyl Lozovytski, PhD, as. prof. (<i>Volyn Orthodox Theological Academy, Ukraine</i>). <i>ORCID: https://orcid.org/0000-0001-5645-4309</i></p>\n<p class=\"member-editor-board\">archpriest Oleksandr Khoroshko, PhD (<i>Volyn Orthodox Theological Academy, Ukraine</i>). <i>ORCID: https://orcid.org/0000-0003-1341-1557</i></p>\n<p class=\"member-editor-board\">archpriest Mykola Tsapyuk, PhD, as. prof. (<i>Volyn Orthodox Theological Academy, Ukraine</i>).</p>\n<p class=\"member-editor-board\">archpriest Vitalii Klos, Dr. Sci., prof. (<i>Kyiv Orthodox Theological Academy, Ukraine</i>). <i>ORCID: https://orcid.org/0000-0002-7429-0042</i></p>\n<p class=\"member-editor-board\">Fylypovych Liudmyla, Dr. Sci., prof. (<i>Institute of Philosophy named after G. S. Skovoroda National Academy of Sciences of Ukraine, Ukraine</i>). <i>ORCID: https://orcid.org/0000-0002-0886-3965</i></p>\n<p class=\"member-editor-board\">Khromets Vitalii, Dr. Sci., as. prof. (<i>The National Academy of Visual Arts and Architecture, Ukraine</i>).</p>\n<p class=\"member-editor-board\">Derzhko Ihor, Dr. Sci., prof. (<i>Danylo Halytsky Lviv National Medical University, Ukraine</i>).</p>\n<p class=\"member-editor-board\">Holovei Viktoria, Dr. Sci., prof. (<i>Lesya Ukrainka Volyn National University, Ukraine</i>). <i>ORCID: https://orcid.org/0000-0002-8224-5970</i></p>\n<p class=\"member-editor-board\">Prelovska Iryna, Dr. Sci., prof. (<i>Institute of Ukrainian Archeography and Source Studies named after M.S. Hrushevsky National Academy of Sciences of Ukraine, Ukraine</i>).</p>\n<p class=\"member-editor-board\">Borshchevych Volodymyr, Dr. Sci., prof. (<i>Rivne Theological Seminary, Ukraine</i>).</p>\n<p class=\"member-editor-board\">Kucherepa Mykola, PhD, prof. (<i>Lesya Ukrainka Volyn National University, Ukraine</i>).</p>\n<p class=\"member-editor-board\">archbishop Job (Gecha), Dr. Sci., prof. (<i>Institute for Orthodox Theology Higher Studies at Chambésy, Switzerland</i>).</p>\n<p class=\"member-editor-board\">Elzbieta Szczot, Dr. Sci., prof. (<i>Katolicki Uniwersytet Lubelski Jana Pawła II, Poland</i>). <i>ORCID: https://orcid.org/0000-0002-8360-4250</i></p>\n<p class=\"member-editor-board\">Zurab Kutateladze, Dr. Sci., prof. (<i>Gorgasali University of Tbilisi, Georgia</i>).</p>\n<p class=\"member-editor-board\">Lucjan Swito, Dr. Sci., prof. (<i>Uniwersytet Warmińsko-Mazurski, Poland</i>). <i>ORCID: https://orcid.org/0000-0002-6392-4599</i></p>\n<p class=\"member-editor-board\">Irena Mytnik, Dr. Sci. (<i>Uniwersytet Warszawski, Poland</i>). <i>ORCID: https://orcid.org/0000-0002-9748-3314</i></p>\n<p class=\"member-editor-board\">archpriest Václav Ježek, PhD, prof. (<i>University of Prešov, Slovakia</i>). <i>ORCID: https://orcid.org/0000-0001-9521-7963</i></p>\n<p class=\"member-editor-board\">Eirini Artemi, PhD (<i>Hellenic Open University, Greece</i>). <i>ORCID: https://orcid.org/0000-0002-8852-9907</i></p>\n<p class=\"member-editor-board\">Katarzyna Jakubowska-Krawczyk, PhD (<i>Uniwersytet Warszawski, Poland</i>). <i>ORCID: https://orcid.org/0000-0002-6281-7011</i></p>\n<p class=\"member-editor-board\">Valeri Polkovsky, PhD (<i>University of Alberta, Canada</i>).</p>\n<p class=\"member-editor-board\">Serge Cipko, PhD (<i>University of Alberta, Canada</i>).</p>\n"

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


var EnEditorialBoardPageComponent = /** @class */ (function () {
    function EnEditorialBoardPageComponent() {
    }
    ;
    EnEditorialBoardPageComponent.prototype.ngOnInit = function () {
    };
    EnEditorialBoardPageComponent.prototype.ngAfterViewInit = function () {
        _shared_classes_materialize_service__WEBPACK_IMPORTED_MODULE_1__["MaterializeService"].collapsible(this.collapsibleRef, { inDuration: 1000, outDuration: 1000 });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('collapse'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EnEditorialBoardPageComponent.prototype, "collapsibleRef", void 0);
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

module.exports = "ul li{\n  display: list-item;\n  list-style-type: disc;\n  color: #e9711c;\n}\n\nul li span{\n  color: #505050;\n}\n\nul {\n  list-style-type: disc;\n  padding-left: 40px;\n  margin: 5px 0;\n}\n\nins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/en-for-authors-page/en-for-authors-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/en-for-authors-page/en-for-authors-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"text-align: center\"><b>Dear colleagues!</b></p>\n<p style=\"text-align: center\">We invites you to submit a scientific article to the annual theological and historical scientific journal of Volyn Orthodox Theological Acacdemy <b><ins>«VB»(«Volynskyi Blahovisnyk»)</ins></b>.</p>\n<p style=\"text-align: center\"><b>Requirements for the registration of materials</b></p>\n<p>The manuscript must be submitted to the address of the editorial board electronically in the <i>.doc</i> version of <i>Word 1997–2007</i> and in the printed version, signed up by the author; typeface – <i>Times New Roman</i>; font size –14 with the interval of 1.5; the volume of the article – not less than 12 pages in A4 format (<i>the total article should contain not less than 25 000 characters with spaces</i>); the text should not contain forced hyphenation.</p>\n<b>The sequence of structural elements of an article:</b>\n<ul>\n  <li><span>in the upper right corner – the author's name and surname, scientific degree, position, full name of educational (scientific) institution in Ukrainian and English, ORCID number (http://orcid.org/);</span></li>\n  <li><span>below in the center – the title of the article in Ukrainian and English;</span></li>\n  <li><span>even lower in the center – abstract of the article and the keywords in Ukrainian and English (<i>the abstract must contain not less than 1 800 characters with spaces, briefly summarizes the relevance of the article, purpose, content, conclusions and prospects for further research</i>).</span></li>\n</ul>\n<b>The article should contain the following elements:</b>\n<ul>\n  <li><span><i>formulation of a research problem and its significance;</i></span></li>\n  <li><span><i>analysis of the research into this problem;</i></span></li>\n  <li><span><i>he aim and specific tasks of the article;</i></span></li>\n  <li><span><i>statement regarding the basic material of the research and the justification of the results obtained;</i></span></li>\n  <li><span><i>conclusions and prospects for further research.</i></span></li>\n</ul>\n<p>Bibliographic references in the text to the source should be accompanied by underline references attached as follows: at the end of the sentence, which uses a quote, facts, dates, etc., the link number is highlighted by the corresponding digits, and at the bottom of the page under the line the source is given with the same number.</p>\n<p>At the end of the article the list of sources and literature is given, <a style=\"color: #0073a3;\" href=\"http://vb.vpba.edu.ua/public/pdf/zrazok_d.pdf\">issued</a> in accordance with State Standard of Ukraine 8302: 2015 «Information and documentation. Bibliographic links. General terms and rules of drafting». All references in the article should be referenced.</p>\n<p>References are made according to the international bibliographic standard APA-2010.</p>\n<p>To translate the Ukrainian text into Latin using the site: http://ukrlit.org/transliteratsiia;</p>\n<p>To translate the Russian text into Latin using the site http://www.translit.ru and indicate on this site the standard of transliteration of the US Department of State (BSI).</p>\n<p>Articles should be sent to the editorial board's e-mail address: <ins>vb@vpba.edu.ua</ins></p>\n<p>The author of the article is responsible for the accuracy of the material presented, for the possession of this material to him personally, for the correct citation of the sources and references to them.</p>\n<p>The editorial board is not responsible for the scientific content of the articles and the mistakes made by the authors and undertakes to inform the participants about the results of consideration of applications and materials in due time.</p>\n<p>There is no publishing fee.</p>\n<a style=\"color: #0073a3;\" href=\"http://vb.vpba.edu.ua/public/pdf/zrazok_a.pdf\"><b>SAMPLE OF ARTICLE FORMATTING</b></a>\n"

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

module.exports = "ul.collapsible div.collapsible-header {\n  flex-direction: column;\n}\n\nul.collapsible div.collapsible-header i {\n  width: auto;\n  font-size: initial;\n}\n\nul.collapsible a {\n  color: #333333;\n}\n\nul.collapsible a:hover {\n  color: #bd1015;\n}\n\na.link-article {\n  display: block;\n  cursor: pointer;\n}\n\n.article-block {\n  border-bottom: 1px solid #cfd5e4;\n  padding: 20px 0;\n}\n\n.footer-block {\n  display: block;\n  padding-top: 20px;\n}\n\n.article-author {\n  color: #0073a3;\n  cursor: pointer;\n}\n\n.description {\n  font-family: ArnoPro-ItalicSmText;\n  padding-top: 10px;\n}\n\n.info-about-author {\n  border: 1px solid #b4baca;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 12px 9px;\n  box-shadow: 0 0 5px 0 rgba(50, 50, 50, 0.25);\n  position: relative;\n  width: 400px;\n  top: 0;\n  font-size: .8em;\n  box-sizing: border-box;\n  transition: opacity .7s;\n  text-align: justify;\n}\n\n.info-about-author:after {\n  content: \" \";\n  position: absolute;\n  border-bottom: 5px solid #f1f1f1;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  top: -5px;\n  left: 30px;\n}\n\n.info-about-author:before {\n  content: \" \";\n  position: absolute;\n  border-bottom: 7px solid  #b4baca;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  top: -7px;\n  left: 28px;\n}\n\n.author-email {\n  color: #0073a3;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/en-journal-numbers-page/en-journal-numbers-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/en-journal-numbers-page/en-journal-numbers-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible popout\" #collapsible>\n  <li *ngFor=\"let tom of toms\">\n    <div class=\"collapsible-header\"><b>№ {{ tom.number }}, {{ tom.year }}</b>\n      <i>{{ tom.description_en }}</i></div>\n    <div class=\"collapsible-body\">\n      <div class=\"article-block\" *ngFor=\"let article of tom.articles\">\n        <a href=\"{{ article.id }}\" class=\"link-article\"><b>{{ article.title_en}}</b></a>\n        <div class=\"article-author\" (click) =\"changeVisibly(article.id)\">{{ article.author_en }}</div>\n        <div *ngIf=\"tom.number > 5 ? article.biography_en : article.biography\" [hidden]=\"!visibility[article.id]\" class=\"info-about-author\">\n          {{ tom.number > 5 ? article.biography_en : article.biography }}\n          <div *ngIf=\"article.email\" class=\"author-email\">\n            {{ article.email }}\n          </div>\n        </div>\n        <div *ngIf=\"article.doi\" class=\"doi\">DOI: {{ article.doi }}</div>\n        <div class=\"description\">VB. - № {{ tom.number }}, {{ tom.year }}. - P. {{ article.pages }} <i *ngIf=\"article.views\" class=\"font-size-16 fa fa-eye\"> {{ article.views }}</i></div>\n      </div>\n      <a class=\"footer-block\" href=\"{{ tom.document }}\">\n        <i class=\"material-icons\">insert_drive_file</i>\n        <b>\n          Download the electronic version of the magazine\n        </b>\n      </a>\n    </div>\n  </li>\n</ul>\n\n\n\n"

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
        this.visibility = {};
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
    EnJournalNumbersPageComponent.prototype.changeVisibly = function (id) {
        if (this.visibility[id] === undefined) {
            this.visibility[id] = false;
        }
        this.visibility[id] = !this.visibility[id];
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

module.exports = "ul li{\n  display: list-item;\n  list-style-type: disc;\n  color: #e9711c;\n}\n\nul li span{\n  color: #505050;\n}\n\nul {\n  list-style-type: disc;\n  padding-left: 40px;\n  margin: 5px 0;\n}\n\np {\n  margin: 8px auto;\n}\n\n.adress {\n  margin-top: 50px;\n}\n\n.adress p {\n  margin: 0 auto;\n}\n\n.images-block {\n  width: 550px;\n  height: 600px;\n  float: right;\n  display: flex;\n}\n\n.main-img {\n  width: 400px;\n  height: 600px;\n  background-image: url(\"/assets/images/obgortka_VB_.jpg\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-left: 20px;\n}\n\n.category-b {\n  width: 120px;\n  height: 120px;\n  background-image: url(\"/assets/images/category-b.jpg\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-left: 10px;\n  align-self: flex-end;\n}\n\ni {\n  color: #0073a3;\n}\n\na {\n  color: #505050;;\n}\n\n"

/***/ }),

/***/ "./src/app/en-main-page/en-main-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/en-main-page/en-main-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"images-block hide-on-med-and-down\">\n  <div class=\"category-b\"></div>\n  <div class=\"main-img\"></div>\n</div>\n<div class=\"main-text\">\n  <p><i>Founded:</i>2013</p>\n  <p><i>Founder:</i> Volyn Orthodox Theological Academy of the Orthodox Church of Ukraine</p>\n  <p><i>Registered:  Ministry of Justice of Ukraine:</i>\n    Certificate КВ №22844–12744 ПР dated August 7, 2017</p>\n  <p><i>Annual periodical</i> </p>\n  <p><i>Languages:</i> multilingual</p>\n  <p>ISSN 2519–4348 (Print)</p>\n  <p>ISSN 2707–9627 (Online)</p>\n  <p><i>DOI prefix:</i> 10.33209</p>\n  <p><i>Professional registration:</i> The journal is included in the List of scientific\n    professional publications of Ukraine <b>category B</b> according to the <a href=\"https://mon.gov.ua/ua/npa/pro-rishennya-z-pitan-prisudzhennya-naukovih-stupeniv-i-prisvoyennya-vchenih-zvan-ta-vnesennya-zmin-do-nakazu-ministerstva-osviti-i-nauki-ukrayini-vid-1-lyutogo-2022-roku-89\">Order of the Ministry of Education and Science of Ukraine 07.04.2022 № 320 (specialty – 041 Theology)</a>.</p>\n  <i>Indexed and listed in:</i>\n  <ul>\n    <li><a href=\"https://dbh.nsd.uib.no/publiseringskanaler/erihplus/periodical/info.action?id=498787\"><ins>ERIH PLUS</ins></a></li>\n    <li><a href=\"https://scholar.google.com.ua/citations?user=vi1jLn4AAAAJ&hl=uk\"><ins>Google Scholar</ins></a></li>\n    <li><a href=\"http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?Z21ID=&I21DBN=UJRN&P21DBN=UJRN&S21STN=1&S21REF=10&S21FMT=juu_all&C21COM=S&S21CNR=20&S21P01=0&S21P02=0&S21P03=I=&S21COLORTERMS=0&S21STR=%D0%96101428\"><ins>NBUV</ins></a></li>\n    <li><a href=\"http://ulrichsweb.serialssolutions.com/login\"><ins>Ulrich&#39;s Periodicals Directory</ins></a></li>\n    <li><a href=\"https://www.worldcat.org/title/volynskyi-blahovisnyk-bohoslovsko-istorychnyi-naukovyi-zhurnal-volynskoi-pravoslavnoi-bohoslovskoi-akademii-ukrainskoi-pravoslavnoi-tserkvy-kyivskoho-patriarkhatu/oclc/922063522&referer=brief_results\"><ins>WorldCat (OCLC)</ins></a></li>\n    <li><a href=\"http://www.sindexs.org/JournalList.aspx?ID=5917\"><ins>Scientific Indexing Services</ins></a></li>\n    <li><a href=\"https://journals.indexcopernicus.com/search/details?id=52462\"><ins>IndexCopernicus</ins></a></li>\n    <li><a href=\"https://doaj.org/toc/2519-4348?source=%7B%22query%22%3A%7B%22filtered%22%3A%7B%22filter%22%3A%7B%22bool%22%3A%7B%22must%22%3A%5B%7B%22terms%22%3A%7B%22index.issn.exact%22%3A%5B%222519-4348%22%5D%7D%7D%2C%7B%22term%22%3A%7B%22_type%22%3A%22article%22%7D%7D%5D%7D%7D%2C%22query%22%3A%7B%22match_all%22%3A%7B%7D%7D%7D%7D%2C%22from%22%3A0%2C%22size%22%3A100%7D\"><ins>Directory of Open Access Journals (DOAJ)</ins></a></li>\n    <li><a href=\"https://portal.issn.org/resource/ISSN/2707-9627\"><ins>Directory of Open Access scholarly Resources (ROAD)</ins></a></li>\n    <li><a href=\"http://olddrji.lbp.world/IndexingCertificate.aspx?jid=6783\"><ins>Directory of Research Journals Indexing</ins></a></li>\n    <li><a href=\"https://ouci.dntb.gov.ua/editions/3B0Qx8j6\"><ins>Open Ukrainian Citation Index (OUCI)</ins></a></li>\n  </ul>\n  <p>Readers have the opportunity to view the published scientific articles in the VB on the website of the journal\n    http: vb.vpba.edu.ua under the heading \"Journal numbers\", as well as to purchase a printed version of the journal\n    in the premises of the Volyn Orthodox Theological Academy (Lutsk, Hradnyi St. Outline, 5), or order by writing\n    to an e-mail: <ins>vb@vpba.edu.ua</ins></p>\n  <div class=\"adress\">\n    <p><i>Editorial Address:</i></p>\n    <p><b><a href=\"http://vpba.edu.ua\">Volyn Orthodox Theological Academy</a></b><br/>\n      Lutsk, Hradnyi uzviz, 5, Volyn region, Ukraine, 43025\n    </p>\n    <p><i>Web:</i> http://vb.vpba.edu.ua</p>\n    <p><i>Email: </i> <ins>vb@vpba.edu.ua</ins></p>\n    <p><i>Tel.:</i> (0332) 723212,  (0332) 726072</p>\n  </div>\n</div>\n"

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

/***/ "./src/app/en-open-access-statement-page/en-open-access-statement-page.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/en-open-access-statement-page/en-open-access-statement-page.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".access-image {\n  height: 90px;\n  width: 250px;\n  margin: 0 auto;\n  background-image: url('/assets/images/open.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n\nins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/en-open-access-statement-page/en-open-access-statement-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/en-open-access-statement-page/en-open-access-statement-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b><ins>VB</ins></b> follows the policy of the open access (Open Access). All the articles are located permanently and free of charge at once after the issue’s publication.</p>\n<p>The full textual access to the Journal’s scientific articles in the real time mode  is presented in the official site of the Journal in the Part <a routerLink=\"/journal-numbers\">«Journal numbers»</a>.</p>\n<p>The license policy of the Journal is compatible with the most number of policies of the open access and archiving of materials.</p>\n<p><b><ins>VB</ins></b> works on the license  Creative Commons Attribution International CC-BY. It gives an opportunity to read, to load, to copy out, to expand, to print, to search, to quote or to refer to the full text of the article in this Journal.</p>\n<div class=\"access-image\"></div>\n"

/***/ }),

/***/ "./src/app/en-open-access-statement-page/en-open-access-statement-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/en-open-access-statement-page/en-open-access-statement-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EnOpenAccessStatementPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnOpenAccessStatementPageComponent", function() { return EnOpenAccessStatementPageComponent; });
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

var EnOpenAccessStatementPageComponent = /** @class */ (function () {
    function EnOpenAccessStatementPageComponent() {
    }
    EnOpenAccessStatementPageComponent.prototype.ngOnInit = function () {
    };
    EnOpenAccessStatementPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-open-access-statement-page',
            template: __webpack_require__(/*! ./en-open-access-statement-page.component.html */ "./src/app/en-open-access-statement-page/en-open-access-statement-page.component.html"),
            styles: [__webpack_require__(/*! ./en-open-access-statement-page.component.css */ "./src/app/en-open-access-statement-page/en-open-access-statement-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnOpenAccessStatementPageComponent);
    return EnOpenAccessStatementPageComponent;
}());



/***/ }),

/***/ "./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ins {\n  text-decoration: none;\n}\n\n.tool-img {\n  width: 300px;\n  height: 56px;\n  background-image: url(\"/assets/images/unicheck.png\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0 auto;\n}\n"

/***/ }),

/***/ "./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b><ins>VB</ins></b> takes only the original materials for publication, the articles, that  haven’t  been published before and haven’t  been presented for publication into another journal.</p>\n<p>The manuscripts, in which the plagiarism or the textual borrowings without the references to the original source are revealed, are rejected by the editorial board before the article’s publication in the Journal.</p>\n<p>For testing of plagiarism software is used: Unicheck.</p>\n<div class=\"tool-img hide-on-small-only\"></div>\n"

/***/ }),

/***/ "./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EnPlagiarismPolicyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnPlagiarismPolicyPageComponent", function() { return EnPlagiarismPolicyPageComponent; });
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

var EnPlagiarismPolicyPageComponent = /** @class */ (function () {
    function EnPlagiarismPolicyPageComponent() {
    }
    EnPlagiarismPolicyPageComponent.prototype.ngOnInit = function () {
    };
    EnPlagiarismPolicyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-plagiarism-policy-page',
            template: __webpack_require__(/*! ./en-plagiarism-policy-page.component.html */ "./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.html"),
            styles: [__webpack_require__(/*! ./en-plagiarism-policy-page.component.css */ "./src/app/en-plagiarism-policy-page/en-plagiarism-policy-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnPlagiarismPolicyPageComponent);
    return EnPlagiarismPolicyPageComponent;
}());



/***/ }),

/***/ "./src/app/en-review-policy-page/en-review-policy-page.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/en-review-policy-page/en-review-policy-page.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li{\n  display: list-item;\n  list-style-type: disc;\n  color: #e9711c;\n}\n\nul li span{\n  color: #505050;\n}\n\nul {\n  list-style-type: disc;\n  padding-left: 40px;\n  margin: 5px 0;\n}\n\n.list-review {\n  margin-left: 25px;\n}\n\nins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/en-review-policy-page/en-review-policy-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/en-review-policy-page/en-review-policy-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Manuscripts submitted to the editorial board are subjected to a double-blind review process:</p>\n<div class=\"list-review\">\n  <span>- the personal data of the author/authors are not revealed to the reviewer;</span><br/>\n  <span>- the personal data of the reviewer are not revealed to the author/authors.</span>\n</div>\n<p>The scientific articles, being sent to the publishing house, pass through the initial control of the completeness and  correctness of their formation and correspondence to <a routerLink=\"/for-authors\">the Requirements for registration</a>, presented in the site.</p>\n<p>The Responsible Editor defines the correspondence of the article to the Journal profile and directs it to the reviewing of the expert, the doctor or the candidate of sciences, having the scientific specialization, which is close to the article by its theme.</p>\n<p>The reviewing term is defined by the Responsible Editor in each separate case, taking into account the creation of conditions for the maximally operative publication of the article.</p>\n<p>The following problems should be revealed in the review:</p>\n<ul>\n  <li><span>the correspondence of the article contents to the name of the declared theme;</span></li>\n  <li><span>the article correspondence to the modern achievements of the scientific- theoretical thought;</span></li>\n  <li><span>the accessibility of the article to the readers, whom it is relied upon, from the view of the language, style, material location, the presence of tables, diagrams, drawings, etc;</span></li>\n  <li><span>the practicability of the article publication, taking into account the present publications on this theme;</span></li>\n  <li><span>the definition of the positive positions and drawbacks of the article, corrections and additions to be entered by the author;</span></li>\n  <li><span>the absence of borrowings from the works of the other investigators without the proper reference to the latest ones;</span></li>\n  <li><span>the conclusion on the possibility of the manuscript publication in the Journal : “recommended”, “recommended, taking into account the correction of the drawbacks, defined by the reviewer” or “not recommended”.</span></li>\n</ul>\n<p>The reviews are certified, according to the order, established in the institution, where the reviewer is working.\n  The presence of the positive review is not the enough reason for the article’s publication. The final decision\n  on the practicability of the publication is accepted by the Editorial Board. The articles of the authors without\n  the scientific degree and postgraduates are accepted with the review of the scientific leader or the expert with\n  the scientific degree in the indicated branch of knowledge. After the Editorial Board’s adoption  of the decision\n  on the article’s admission to publication, the Responsible Secretary informs the author on that and states the term of publication.\n  The originals of reviews are kept in the Editorial Board and in the publishing house of the Scientific Journal <b><ins>VB</ins></b>.</p>\n"

/***/ }),

/***/ "./src/app/en-review-policy-page/en-review-policy-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/en-review-policy-page/en-review-policy-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: EnReviewPolicyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnReviewPolicyPageComponent", function() { return EnReviewPolicyPageComponent; });
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

var EnReviewPolicyPageComponent = /** @class */ (function () {
    function EnReviewPolicyPageComponent() {
    }
    EnReviewPolicyPageComponent.prototype.ngOnInit = function () {
    };
    EnReviewPolicyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-en-review-policy-page',
            template: __webpack_require__(/*! ./en-review-policy-page.component.html */ "./src/app/en-review-policy-page/en-review-policy-page.component.html"),
            styles: [__webpack_require__(/*! ./en-review-policy-page.component.css */ "./src/app/en-review-policy-page/en-review-policy-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnReviewPolicyPageComponent);
    return EnReviewPolicyPageComponent;
}());



/***/ }),

/***/ "./src/app/en-reviewing-page/en-reviewing-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/en-reviewing-page/en-reviewing-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ins {\n  text-decoration: none;\n}\n\na {\n  color: #505050;\n}\n"

/***/ }),

/***/ "./src/app/en-reviewing-page/en-reviewing-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/en-reviewing-page/en-reviewing-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Ethical standards for publishing exist to provide high-quality research.</p>\n<p><b><ins>«Volynskyi Blahovisnyk» (VB)</ins></b> desired  to fulfilled  high standard of editorial ethics and therefore the\n  editorial board of the journal is guided by the basic standards of publishing ethics the <a href=\"https://publicationethics.org/\">Committee of Publication\n  Ethics (COPE)</a>, the Code of Conduct and best practice recommendations for journal editors, and the Code of Conduct\n  for Journal Publishers.</p>\n<p>Submitting an article for publication, the author hereby expresses the agreement to published full text of the\n  article in the Internet, agrees with the recommendations of the Committee of Publication Ethics.</p>\n<p>The authors consent to the collection and processing of personal data for the purpose of their transfer\n  to the database in accordance with the Law of Ukraine No. 2297-VI \"On the Protection of Personal Data\" of 01.06.2010.</p>\n<p>The scientific edition editorial board reserves to itself the right to reject articles which do\n  not meet the journal’s requirements and subjects.</p>\n<p>The editorial board can reject the manuscript without reading it, if it considers that the\n  work does not correspond to the journal’s profile.</p>\n<p>The editorial board do not considered such phenomena as: <i>plagiarism; re-publication; conflict of interest;\n  copyright disputes; breakdown result: research; research fraud</i>.</p>\n<p>The authors bear the responsibility for the reliability of their articles’ information,\n  statistical data, accuracy of names, surnames, and citations.</p>\n<p>The editor and members of the editorial team should not disclose information about a\n  manuscript under consideration to anyone other than those from whom professional advice is\n  sought.</p>\n<p>All the materials submitted for publication pass a double-blind review process. The\n  editorial board reserves to itself the right to reject articles or to return them for completion. The\n  author is obliged to complete his / her article according to the remarks of the reviewers or the\n  editorial board.</p>\n<p>Reviewing of manuscripts is an important stage in the process of their publication. Each\n  scholar is obliged to perform a certain reviewing work process.</p>\n<p>The manuscript sent for a review is considered a confidential document.</p>\n<p>The principal duty of the author consists in giving an exact report on the conducted\n  research and, also, in stirring an objective discussion of its essentiality. Authors should present\n  their results accurately and unequivocally so, that their conclusions can be confirmed by other\n  scientists without faking of the data acquisition or any inadequate manipulation of them.</p>\n<p>The authors of the articles bear full responsibility for the content of their articles, as well\n  as for the fact of their publication.</p>\n<p>Any conflicts of interests of the persons are resolved in accordance with the legislation of Ukraine\n  in the field of intellectual  property.</p>\n"

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

module.exports = "ul li{\n    display: list-item;\n    list-style-type: disc;\n    color: #e9711c;\n}\n\nul li span{\n    color: #505050;\n}\n\nul {\n    list-style-type: disc;\n    padding-left: 40px;\n    margin: 5px 0;\n}\n\nins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/for-authors-page/for-authors-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/for-authors-page/for-authors-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"text-align: center\"><b>Шановні колеги!</b></p>\n<p style=\"text-align: center\">Запрошуємо Вас подати свою наукову статтю в щорічний богословсько-історичний науковий журнал Волинської православної богословської академії <b><ins>«Волинський благовісник»</ins></b>.</p>\n<p style=\"text-align: center\"><b>Вимоги до оформлення матеріалів</b></p>\n<p>Статті потрібно підготувати в редакторі <i>MS Word (*.doc)</i> та надіслати в електронному варіанті на адресу редколегії; гарнітура – <i>Times New Roman</i>; кегель – 14 з інтервалом 1,5; обсяг статті – не менше 12 сторінок формату А4 (<i>загалом стаття має містити не менше 25 000 знаків з пробілами</i>); у тексті не має бути примусових переносів.</p>\n<b>Послідовність структурних елементів статті:</b>\n<ul>\n  <li><span>у правому верхньому куті – ім'я та прізвище автора, науковий ступінь, посада, повна назва навчального (наукового) закладу українською та англійською мовами, номер ORCID (http://orcid.org/);</span></li>\n  <li><span>нижче по центру – назва статті українською та англійською мовами;</span></li>\n  <li><span>ще нижче по центру – анотація статті і ключові слова українською та англійською мовами (<i>анотація повинна містити не менше 1 800 знаків з пробілами, в ній коротко викладається актуальність статті, мета, вміст, висновки і перспективи подальших досліджень</i>).\n</span></li>\n</ul>\n<b>Стаття має містити такі положення:</b>\n<ul>\n  <li><span><i>постановка наукової проблеми та її значення;</i></span></li>\n    <li><span><i>аналіз досліджень цієї проблеми;</i></span></li>\n    <li><span><i>мета і завдання статті;</i></span></li>\n    <li><span><i>виклад основного матеріалу й обґрунтування отриманих результатів дослідження;</i></span></li>\n    <li><span><i>висновки та перспективи подальшого дослідження.</i></span></li>\n</ul>\n<p>Бібліографічні посилання в тексті на джерела слід супроводжувати підстрочними посиланнями, які подаються таким чином: в кінці речення, в якому використовується цитата, факти, дати тощо вгорі позначається номер посилання відповідними цифрами, а внизу сторінки під рискою приводять під тим же номером джерело.</p>\n<p>В кінці статті подається список джерел та літератури, <a style=\"color: #0073a3;\" href=\"http://vb.vpba.edu.ua/public/pdf/zrazok_d.pdf\">оформлений</a> в алфавітному порядку згідно з <i>ДСТУ 8302:2015 «Інформація та документація. Бібліографічне посилання. Загальні положення та правила складання»</i>. На всі літературні джерела в статті повинні бути посилання.</p>\n<p>Список джерел також транслітерується латинськими літерами – <i>References. References</i> оформлюється згідно міжнародним бібліографічним стандартом APA-2010. Назви періодичних україномовних видань (журналів, збірників та ін.) подаються транслітерацією, а в дужках – англійською мовою.</p>\n<p>Транслітерацію українського тексту на латиницю здійснювати за допомогою сайту: http://ukrlit.org/transliteratsiia;</p>\n<p>Транслітерацію російського тексту на латиницю здійснювати за допомогою сайту http://www.translit.ru і зазначати на цьому сайті стандарт транслітерування «Держдепартаменту США (BSI)».</p>\n<p>Електронні версії статей просимо надсилати на адресу: <ins>vb@vpba.edu.ua</ins></p>\n<p>Автор статті відповідає за достовірність викладеного матеріалу, за належність даного матеріалу йому особисто, за правильне цитування джерел та посилання на них.</p>\n<p>Редакційна колегія залишає за собою право відхиляти матеріали у разі їх невідповідності науковому спрямуванню журналу чи наявності чисельних редакційно-стилістичних огріхів, а також у разі невчасної подачі.</p>\n<p>Плата за публікацію відсутня.</p>\n<a style=\"color: #0073a3;\" href=\"http://vb.vpba.edu.ua/public/pdf/zrazok_a.pdf\"><b>ЗРАЗОК ОФОРМЛЕННЯ РУКОПИСУ</b></a>\n"

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

module.exports = "ul.collapsible div.collapsible-header {\n  flex-direction: column;\n}\n\nul.collapsible div.collapsible-header i {\n  width: auto;\n  font-size: initial;\n}\n\nul.collapsible a {\n  color: #333333;\n}\n\nul.collapsible a:hover {\n  color: #bd1015;\n}\n\na.link-article {\n  display: block;\n  cursor: pointer;\n}\n\n.article-block {\n  border-bottom: 1px solid #cfd5e4;\n  padding: 20px 0;\n}\n\n.footer-block {\n  display: block;\n  padding-top: 20px;\n}\n\n.article-author {\n  color: #0073a3;\n  cursor: pointer;\n}\n\n.description {\n  font-family: ArnoPro-ItalicSmText;\n  padding-top: 10px;\n}\n\n.info-about-author {\n  border: 1px solid #b4baca;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 12px 9px;\n  box-shadow: 0 0 5px 0 rgba(50, 50, 50, 0.25);\n  position: relative;\n  width: 400px;\n  top: 0;\n  font-size: .8em;\n  box-sizing: border-box;\n  transition: opacity .7s;\n  text-align: justify;\n}\n\n.info-about-author:after {\n  content: \" \";\n  position: absolute;\n  border-bottom: 5px solid #f1f1f1;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  top: -5px;\n  left: 30px;\n}\n\n.info-about-author:before {\n  content: \" \";\n  position: absolute;\n  border-bottom: 7px solid  #b4baca;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  top: -7px;\n  left: 28px;\n}\n\n.author-email {\n  color: #0073a3;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/journal-numbers-page/journal-numbers-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/journal-numbers-page/journal-numbers-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible popout\" #collapsible>\n  <li *ngFor=\"let tom of toms\">\n    <div class=\"collapsible-header\"><b>№ {{ tom.number }}, {{ tom.year }}</b>\n      <i>{{ tom.description }}</i></div>\n    <div class=\"collapsible-body\">\n      <div class=\"article-block\" *ngFor=\"let article of tom.articles\">\n        <a href=\"ua/{{ article.id }}\" class=\"link-article\"><b>{{ article.title}}</b></a>\n        <div class=\"article-author\" (click) =\"changeVisibly(article.id)\">{{ article.author }}</div>\n        <div *ngIf=\"article.biography\" [hidden]=\"!visibility[article.id]\" class=\"info-about-author\">\n          {{ article.biography }}\n          <div *ngIf=\"article.email\" class=\"author-email\">\n            {{ article.email }}\n          </div>\n        </div>\n        <div *ngIf=\"article.doi\" class=\"doi\">DOI: {{ article.doi }}</div>\n        <div class=\"description\">{{ tom.name }}. - № {{ tom.number }}, {{ tom.year }}. - C. {{ article.pages }} <i *ngIf=\"article.views\" class=\"font-size-16 fa fa-eye\"> {{ article.views }}</i></div>\n      </div>\n      <a class=\"footer-block\" href=\"{{ tom.document }}\">\n        <i class=\"material-icons\">insert_drive_file</i>\n        <b>\n          Скачати електронний варіант журналу\n        </b>\n      </a>\n    </div>\n  </li>\n</ul>\n\n\n"

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
        this.visibility = {};
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
    JournalNumbersPageComponent.prototype.changeVisibly = function (id) {
        if (this.visibility[id] === undefined) {
            this.visibility[id] = false;
        }
        this.visibility[id] = !this.visibility[id];
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

module.exports = "ul li{\n    display: list-item;\n    list-style-type: disc;\n    color: #e9711c;\n}\n\nul li span{\n    color: #505050;\n}\n\nul {\n    list-style-type: disc;\n    padding-left: 40px;\n    margin: 5px 0;\n}\n\np {\n    margin: 8px auto;\n}\n\n.adress {\n    margin-top: 50px;\n}\n\n.adress p {\n    margin: 0 auto;\n}\n\n.images-block {\n  width: 550px;\n  height: 600px;\n  float: right;\n  display: flex;\n}\n\n.main-img {\n    width: 400px;\n    height: 600px;\n    background-image: url(\"/assets/images/obgortka_VB_.jpg\");\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    float: right;\n  margin-left: 20px;\n}\n\n.category-b {\n  width: 120px;\n  height: 120px;\n  background-image: url(\"/assets/images/category-b.jpg\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-left: 10px;\n  align-self: flex-end;\n}\n\ni {\n  color: #0073a3;\n}\n\na {\n  color: #505050;;\n}\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"images-block hide-on-med-and-down\">\n  <div class=\"category-b\"></div>\n  <div class=\"main-img\"></div>\n</div>\n<div class=\"main-text\">\n  <p><i>Журнал засновано </i>у 2013 році</p>\n  <p><i>Засновник:</i> Волинська православна богословська академія Православної Церкви України</p>\n  <p><i>Журнал зареєстровано Міністерством юстиції України:</i>\n    свідоцтво про державну реєстрацію друкованого засобу масової інформації  КВ №22844–12744 ПР від 07.08 2017</p>\n  <p><i>Виходить</i> 1 раз на рік</p>\n  <p><i>Мови</i> – багатомовне видання</p>\n  <p>ISSN 2519–4348 (Print)</p>\n  <p>ISSN 2707–9627 (Online)</p>\n  <p><i>Префікс DOI:</i> 10.33209</p>\n  <p><i>Фахова реєстрація:</i> Журнал включено до Переліку наукових фахових видань України <b>категорії Б</b> згідно з\n    <a href=\"https://mon.gov.ua/ua/npa/pro-rishennya-z-pitan-prisudzhennya-naukovih-stupeniv-i-prisvoyennya-vchenih-zvan-ta-vnesennya-zmin-do-nakazu-ministerstva-osviti-i-nauki-ukrayini-vid-1-lyutogo-2022-roku-89\">Наказом МОН України від 07.04.2022 р. № 320 (спеціальність – 041 Богослов’я)</a>.</p>\n  <i>Видання індексується науковими базами:</i>\n  <ul>\n    <li><a href=\"https://dbh.nsd.uib.no/publiseringskanaler/erihplus/periodical/info.action?id=498787\"><ins>ERIH PLUS</ins></a></li>\n    <li><a href=\"https://scholar.google.com.ua/citations?user=vi1jLn4AAAAJ&hl=uk\"><ins>Google Scholar</ins></a></li>\n    <li><a href=\"http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?Z21ID=&I21DBN=UJRN&P21DBN=UJRN&S21STN=1&S21REF=10&S21FMT=juu_all&C21COM=S&S21CNR=20&S21P01=0&S21P02=0&S21P03=I=&S21COLORTERMS=0&S21STR=%D0%96101428\"><ins>NBUV</ins></a></li>\n    <li><a href=\"http://ulrichsweb.serialssolutions.com/login\"><ins>Ulrich&#39;s Periodicals Directory</ins></a></li>\n    <li><a href=\"https://www.worldcat.org/title/volynskyi-blahovisnyk-bohoslovsko-istorychnyi-naukovyi-zhurnal-volynskoi-pravoslavnoi-bohoslovskoi-akademii-ukrainskoi-pravoslavnoi-tserkvy-kyivskoho-patriarkhatu/oclc/922063522&referer=brief_results\"><ins>WorldCat (OCLC)</ins></a></li>\n    <li><a href=\"http://www.sindexs.org/JournalList.aspx?ID=5917\"><ins>Scientific Indexing Services</ins></a></li>\n    <li><a href=\"https://journals.indexcopernicus.com/search/details?id=52462\"><ins>IndexCopernicus</ins></a></li>\n    <li><a href=\"https://doaj.org/toc/2519-4348?source=%7B%22query%22%3A%7B%22filtered%22%3A%7B%22filter%22%3A%7B%22bool%22%3A%7B%22must%22%3A%5B%7B%22terms%22%3A%7B%22index.issn.exact%22%3A%5B%222519-4348%22%5D%7D%7D%2C%7B%22term%22%3A%7B%22_type%22%3A%22article%22%7D%7D%5D%7D%7D%2C%22query%22%3A%7B%22match_all%22%3A%7B%7D%7D%7D%7D%2C%22from%22%3A0%2C%22size%22%3A100%7D\"><ins>Directory of Open Access Journals (DOAJ)</ins></a></li>\n    <li><a href=\"https://portal.issn.org/resource/ISSN/2707-9627\"><ins>Directory of Open Access scholarly Resources (ROAD)</ins></a></li>\n    <li><a href=\"http://olddrji.lbp.world/IndexingCertificate.aspx?jid=6783\"><ins>Directory of Research Journals Indexing</ins></a></li>\n    <li><a href=\"https://ouci.dntb.gov.ua/editions/3B0Qx8j6\"><ins>Open Ukrainian Citation Index (OUCI)</ins></a></li>\n  </ul>\n  <p>Читачі мають можливість переглянути опубліковані наукові статті у «Волинському благовіснику» на сайті\n    журналу http://vb.vpba.edu.ua, у рубриці «Номери журналу», а також придбати друкований варіант журналу\n    у приміщенні Волинської православної богословської академії (м. Луцьк, вул. Градний Узвіз, 5), або замовити,\n    написавши на електронну адресу: <ins>vb@vpba.edu.ua</ins></p>\n  <div class=\"adress\">\n    <p><i>Адреса редакції:</i></p>\n    <p><b><a href=\"http://vpba.edu.ua\">Волинська православна богословська академія</a></b><br/>\n      вул. Градний узвіз, 5, м. Луцьк, Волинська обл., Україна, 43025\n    </p>\n    <p><i>Web:</i> БЮhttp://vb.vpba.edu.ua</p>\n    <p><i>Email: </i> <ins>vb@vpba.edu.ua</ins></p>\n    <p><i>Тел.:</i> (0332) 723212,  (0332) 726072</p>\n  </div>\n</div>\n"

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

/***/ "./src/app/open-access-statement-page/open-access-statement-page.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/open-access-statement-page/open-access-statement-page.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".access-image {\n  height: 90px;\n  width: 250px;\n  margin: 0 auto;\n  background-image: url('/assets/images/open.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n\nins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/open-access-statement-page/open-access-statement-page.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/open-access-statement-page/open-access-statement-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b><ins>«Волинський благовісник» (VB)</ins></b>  дотримується політики відкритого доступу (Open Access). Усі статті розміщуються безстроково і безкоштовно відразу після виходу номера.</p>\n<p>Повнотекстовий доступ в режимі реального часу до наукових статей журналу представлений на офіційному сайті журналу у розділі <a routerLink=\"/ua/journal-numbers\">Номери журналу</a>.</p>\n<p>Ліцензійна політика журналу сумісна з переважною більшістю політик відкритого доступу та архівування матеріалів.</p>\n<p>Журнал працює за ліцензією Creative Commons Attribution International CC-BY. Це дозволяє читати, завантажувати,\n  копіювати, поширювати, друкувати, шукати, цитувати або посилатися на повний текст статті в цьому журналі.</p>\n<div class=\"access-image\"></div>\n"

/***/ }),

/***/ "./src/app/open-access-statement-page/open-access-statement-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/open-access-statement-page/open-access-statement-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: OpenAccessStatementPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenAccessStatementPageComponent", function() { return OpenAccessStatementPageComponent; });
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

var OpenAccessStatementPageComponent = /** @class */ (function () {
    function OpenAccessStatementPageComponent() {
    }
    OpenAccessStatementPageComponent.prototype.ngOnInit = function () {
    };
    OpenAccessStatementPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-access-statement-page',
            template: __webpack_require__(/*! ./open-access-statement-page.component.html */ "./src/app/open-access-statement-page/open-access-statement-page.component.html"),
            styles: [__webpack_require__(/*! ./open-access-statement-page.component.css */ "./src/app/open-access-statement-page/open-access-statement-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OpenAccessStatementPageComponent);
    return OpenAccessStatementPageComponent;
}());



/***/ }),

/***/ "./src/app/plagiarism-policy-page/plagiarism-policy-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/plagiarism-policy-page/plagiarism-policy-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ins {\n  text-decoration: none;\n}\n\n.tool-img {\n  width: 300px;\n  height: 56px;\n  background-image: url(\"/assets/images/unicheck.png\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0 auto;\n}\n"

/***/ }),

/***/ "./src/app/plagiarism-policy-page/plagiarism-policy-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/plagiarism-policy-page/plagiarism-policy-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b><ins>«Волинський благовісник» (VB)</ins></b>  приймає до публікації тільки оригінальні матеріали, статті  та рецензії на книги, які не були опубліковані раніше і не подавалася для публікації в інший журнал.</p>\n<p>Рукописи, в яких виявили плагіат чи текстові запозичення без посилань на першоджерело, відхиляються редакційною колегією до опублікування статті у журналі.</p>\n<p>Для перевірки на плагіат використовується програмне забезпечення: Unicheck.</p>\n<div class=\"tool-img hide-on-small-only\"></div>\n"

/***/ }),

/***/ "./src/app/plagiarism-policy-page/plagiarism-policy-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/plagiarism-policy-page/plagiarism-policy-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: PlagiarismPolicyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlagiarismPolicyPageComponent", function() { return PlagiarismPolicyPageComponent; });
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

var PlagiarismPolicyPageComponent = /** @class */ (function () {
    function PlagiarismPolicyPageComponent() {
    }
    PlagiarismPolicyPageComponent.prototype.ngOnInit = function () {
    };
    PlagiarismPolicyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plagiarism-policy-page',
            template: __webpack_require__(/*! ./plagiarism-policy-page.component.html */ "./src/app/plagiarism-policy-page/plagiarism-policy-page.component.html"),
            styles: [__webpack_require__(/*! ./plagiarism-policy-page.component.css */ "./src/app/plagiarism-policy-page/plagiarism-policy-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlagiarismPolicyPageComponent);
    return PlagiarismPolicyPageComponent;
}());



/***/ }),

/***/ "./src/app/review-policy-page/review-policy-page.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/review-policy-page/review-policy-page.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li{\n  display: list-item;\n  list-style-type: disc;\n  color: #e9711c;\n}\n\nul li span{\n  color: #505050;\n}\n\nul {\n  list-style-type: disc;\n  padding-left: 40px;\n  margin: 5px 0;\n}\n\n.list-review {\n  margin-left: 25px;\n}\n\nins {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/review-policy-page/review-policy-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/review-policy-page/review-policy-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Подані на розгляд редакційної колегії матеріали проходять процедуру подвійного «сліпого» рецензування:</p>\n<div class=\"list-review\">\n  <span>- рецензенту не розкриваються особисті дані автора/авторів;</span><br/>\n  <span>- автору/авторам не розкриваються особисті дані рецензента.</span>\n</div>\n<p>Наукові статті, які поступають в редакцію, проходять також первинний контроль щодо комплектності та правильності їх оформлення і відповідності до <a routerLink=\"/ua/for-authors\">Вимоги до оформлення</a>, викладених на сайті.</p>\n<p>Відповідальний редактор визначає відповідність статті профілю журналу і направляє її на рецензування фахівцю, доктору чи кандидату наук, що має близьку до теми статті наукову спеціалізацію.</p>\n<p>Терміни рецензування в кожному окремому випадку визначаються відповідальним редактором з урахуванням створення умов для максимально оперативної публікації статті.</p>\n<p>У рецензії висвітлюються наступні питання:</p>\n<ul>\n  <li><span>відповідність змісту статті заявленій у назві темі;</span></li>\n  <li><span>відповідність статті сучасним досягненням науково-теоретичної думки;</span></li>\n  <li><span>доступність статті читачам, на яких вона розрахована, з точки зору мови, стилю, розташування матеріалу, наочності таблиць, діаграм, малюнків тощо;</span></li>\n  <li><span>доцільність публікації статті з урахуванням наявних публікацій з теми;</span></li>\n  <li><span>визначення позитивних сторін і недоліків статті, виправлень та доповнень, що мають бути внесені автором;</span></li>\n  <li><span>відсутність запозичень з робіт інших дослідників без належного посилання на останніх;</span></li>\n  <li><span>висновок про можливість опублікування рукопису в журналі: \"рекомендується\", \"рекомендується з урахуванням\n    виправлення зазначених рецензентом недоліків\" або \"не рекомендується\".</span></li>\n</ul>\n<p>Рецензії завіряються відповідно до порядку, встановленого в установі, де працює рецензент.\n  Наявність позитивної рецензії не є достатньою підставою для публікації статті.\n  Остаточне рішення про доцільність публікації приймається редакційною колегією.\n  Статті авторів без наукового ступеня та аспірантів приймаються з рецензією наукового керівника або фахівця\n  з науковим ступенем у зазначеній галузі знання. Після прийняття редколегією рішення про допуск статті до\n  публікації відповідальний секретар інформує про це автора і вказує терміни публікації.\n  Оригінали рецензій зберігаються в редакційній колегії і редакції наукового журналу <b><ins>«Волинський благовісник» (VB)</ins></b>.</p>\n"

/***/ }),

/***/ "./src/app/review-policy-page/review-policy-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/review-policy-page/review-policy-page.component.ts ***!
  \********************************************************************/
/*! exports provided: ReviewPolicyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPolicyPageComponent", function() { return ReviewPolicyPageComponent; });
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

var ReviewPolicyPageComponent = /** @class */ (function () {
    function ReviewPolicyPageComponent() {
    }
    ReviewPolicyPageComponent.prototype.ngOnInit = function () {
    };
    ReviewPolicyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-policy-page',
            template: __webpack_require__(/*! ./review-policy-page.component.html */ "./src/app/review-policy-page/review-policy-page.component.html"),
            styles: [__webpack_require__(/*! ./review-policy-page.component.css */ "./src/app/review-policy-page/review-policy-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewPolicyPageComponent);
    return ReviewPolicyPageComponent;
}());



/***/ }),

/***/ "./src/app/reviewing-page/reviewing-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reviewing-page/reviewing-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ins {\n  text-decoration: none;\n}\n\na {\n  color: #505050;\n}\n"

/***/ }),

/***/ "./src/app/reviewing-page/reviewing-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reviewing-page/reviewing-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Етичні стандарти для публікації існують для забезпечення високоякісних наукових досліджень.</p>\n<p><b><ins>«Волинський благовісник» (VB)</ins></b> прагне до високого стандарту редакційної етики і тому редакційна колегія журналу\n  керується основними стандартами публікаційної етики Комітету з етики наукових публікацій (<a href=\"https://publicationethics.org/\">Committee of Publication Ethics (COPE)</a>,\n  Кодексу поведінки та рекомендації щодо найкращої практики для редакторів журналів і кодексу поведінки\n  для видавців журналів (Code of Conduct for Journal Publishers).</p>\n<p>Подаючи статтю для публікації, автор цим самим висловлює згоду на розміщення повного її тексту в мережі Інтернет,\n  погоджується з рекомендаціями  Комітету з етики наукових публікацій (COPE).</p>\n<p>Автори дають згоду на збір й обробку персональних даних із метою їх унесення в базу даних відповідно до Закону\n  України № 2297-VІ «Про захист персональних даних» від 01.06.2010.</p>\n<p>Редакційна колегія наукового видання залишає за собою право відхиляти статті, які не відповідають вимогам та тематиці журналу.</p>\n<p>Редколегія може відхилити рукопис без рецензування, якщо вважає, що робота не відповідає профілю журналу.</p>\n<p>Редакційна колегія вважає за не допустиме такі явища, як: <i>плагіат; повторна публікація; конфлікт інтересів;\n  авторські суперечки; розбиття результатів дослідження; дослідницьке шахрайство.</i></p>\n<p>Відповідальність за достовірність інформації у статтях, точність назв, статистичних даних, прізвищ та цитат несуть автори.</p>\n<p>Редакційна колегія не розголошує будь-яку інформацію про поданий рукопис\n  (автора(ів), тему, текст тощо) будь-кому, крім відповідного автора, (потенційних)\n  рецензентів, та видавця, за необхідності.</p>\n<p>Всі надані для публікації матеріали проходять подвійне «сліпе» рецензування.\n  Редколегія залишає за собою право відхилити статтю або повернути її на доопрацювання.\n  Автор зобов’язаний допрацювати статтю відповідно до зауважень рецензентів або\n  редколегії.</p>\n<p>Рецензування рукописів є важливим етапом у процесі публікації. Кожен науковець\n  зобов’язаний виконувати певну роботу процесу рецензування.</p>\n<p>Рукопис, переданий на рецензію, є конфіденційним документом.</p>\n<p>Основний обов’язок автора полягає у тому, щоб подати точний звіт про проведене\n  дослідження, а також об’єктивне обговорення його значущості. Автори повинні\n  представити свої результати чітко та однозначно, так що їхні висновки можуть бути\n  підтверджені іншими вченими, без підробки отримання даних або неналежного\n  маніпулювання ними.</p>\n<p>Автори статей несуть усю повноту відповідальності за зміст статей і за сам факт їх публікації.</p>\n<p>У разі наявності, конфлікти інтересів осіб вирішуються відповідно до законодавства України у сфері інтелектуальної\n  власності.</p>\n"

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

/***/ "./src/app/safeHtml.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/safeHtml.pipe.ts ***!
  \**********************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
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

module.exports = ".page-flexbox-wrapper {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n}\n\nmain {\n  flex: 1 0 auto;\n  background-color: #f1f1f1;\n}\n\n.nav-extended {\n  background-color: #A32202;\n}\n\n.nav-extended .nav-wrapper {\n  min-height: 120px;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.brand-gerb {\n  height: 120px;\n  width: 125px;\n  background-image: url('/assets/images/gerb.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  float:left;\n}\n\n.brand-disc {\n  font-size: 20px;\n  font-family: ArnoPro-Subhead;\n  line-height: 1.2;\n  color: white;\n  padding-top: 5px;\n}\n\n.brand-title {\n  font-size: 20px;\n  font-family: ArnoPro-SmbdSubhead;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: white;\n  border-bottom: 1px solid;\n}\n\n.brand-title-main {\n  font-size: 38px;\n}\n\n.brand-title-add {\n  font-size: 24px;\n}\n\n.nav-content{\n  min-height: 50px;\n  background-color:\t#DA7B03;\n  color: white;\n}\n\n.main-menu, .main-menu li, .main-menu li a {\n  min-height: 50px;\n  font-family: ArnoPro-Subhead;\n  font-size: 18px;\n  color: white;\n  text-align: center;\n}\n\n.row {\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n\n}\n\n.main-menu\n{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.text-info {\n  margin: 40px auto;\n  font-family: ArnoPro-SmText;\n  font-size: 18px;\n  color: #505050;\n  background-color: white;\n  padding: 40px;\n}\n\n.link-active {\n  border-bottom: 4px solid #b14a01;\n}\n\n.page-footer {\n  padding-top: 0;\n  background-color: #12172A;\n  font-family: ArnoPro-SmText;\n  font-size: 15px;\n\n}\n\n.container {\n  width: 90%;\n  max-width: initial;\n}\n\n.lang-block {\n  width: 40px;\n  height: 60px;\n\n\n}\n\n.lang {\n  display: flex;\n  height: 50%;\n  line-height: 1;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid white;\n}\n\n.lang:first-child {\n  border-bottom: 1px solid white;\n}\n\n.lang:last-child {\n  border-top: 1px solid white;\n}\n\n.lang:hover {\n  background-color: #0073a3;\n  border: 2px solid #0073a3;\n}\n\n.sb-search {\n  position: absolute;\n  width: 0%;\n  min-width: 50px;\n  height: 50px;\n  right: 0;\n  overflow: hidden;\n  transition: width 0.3s;\n  -webkit-backface-visibility: hidden;\n}\n\n.sb-search-input {\n  position: absolute;\n  top: 0;\n  right: 0px;\n  border: none;\n  outline: none;\n  background: #DA7B03 !important;\n  width: 100%;\n  height: 50px !important;\n  margin: 0;\n  z-index: 10;\n  font-family: inherit;\n  font-size: 20px;\n  color: #2c3e50;\n  text-indent: 20px;\n\n}\n\ninput[type=\"search\"].sb-search-input {\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n}\n\n.sb-search-input::-webkit-input-placeholder {\n  color: white;\n}\n\n.sb-search-input:-moz-placeholder {\n  color: white;\n}\n\n.sb-search-input::-moz-placeholder {\n  color: white;\n}\n\n.sb-search-input:-ms-input-placeholder {\n  color: white;\n}\n\n.sb-icon-search,\n.sb-search-submit  {\n  width: 50px;\n  height: 50px;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  line-height: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.sb-search-submit {\n  background: #fff; /* IE needs this */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; /* IE 8 */\n  filter: alpha(opacity=0); /* IE 5-7 */\n  opacity: 0;\n  color: transparent;\n  color:red;\n  border: none;\n  outline: none;\n  z-index: -1;\n}\n\n.sb-icon-search {\n  color: #fff;\n  background: #0073a3;\n  z-index: 90;\n  font-size: 22px;\n  font-family: 'icomoon';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n}\n\n.sb-icon-search i {\n  line-height: 50px;\n  height: 50px;\n}\n\n.sb-icon-search:before {\n  content: \"\";\n}\n\n.sb-search.sb-search-open,\n.no-js .sb-search {\n  width: 100%;\n}\n\n.sb-search.sb-search-open .sb-icon-search,\n.no-js .sb-search .sb-icon-search {\n  background: #0073a3;\n  color: #fff;\n  z-index: 11;\n}\n\n.sb-search.sb-search-open .sb-search-submit,\n.no-js .sb-search .sb-search-submit {\n  /*    z-index: 90;*/\n}\n\n.wrap-search {\n  display: none;\n  position: relative;\n  width: 100%;\n  background-color: white;\n}\n\n.wrap-search ul {\n  margin: 0;\n}\n\n.wrap-search ul a{\n  color: #DA7B03;\n  font-family: ArnoPro-SmText;\n}\n\n.admin-link {\n  color: #DA7B03;\n  display: block;\n  float: left;\n  padding-right: 5px;\n}\n\n.admin-link i {\n  font-size: 16px;\n}\n\n#dropdown1, #dropdown2 {\n  background-color: #f09934;\n  color: #f1f1f1;\n  top: -50px;\n}\n\n#dropdown1 li:hover , #dropdown2 li:hover {\n  background-color: #f1f1f1;\n}\n\n#dropdown1 li:hover a, #dropdown2 li:hover a{\n  color: #f09934;\n}\n\n#arrow-drop-down, #arrow-drop-down_1 {\n  line-height: 50px;\n  height: 50px;\n}\n\n.licence {\n  color: #DA7B03;\n}\n\n"

/***/ }),

/***/ "./src/app/shared/layouts/en-main-layout/en-main-layout.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/layouts/en-main-layout/en-main-layout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-flexbox-wrapper\">\n  <nav class=\"nav-extended\">\n    <div class=\"container\">\n      <a routerLink=\"/\"><div class=\"brand-gerb\"></div></a>\n      <div class=\"nav-wrapper valign-wrapper\">\n        <div class=\"brand-text\">\n          <div class=\"brand-title\">\n            <div class=\"brand-title-main\">VB \t&bull; <span class=\"brand-title-add\">Volynskyi Blahovisnyk</span></div>\n          </div>\n          <div class=\"brand-disc\">\n            annual theological and historical scientific journal<br/>\n            Volyn Orthodox Theological Academy of the OCU</div>\n        </div>\n        <div class=\"lang-block\">\n          <a routerLink=\"/\" class=\"lang\">EN</a>\n          <a routerLink=\"/ua\" class=\"lang\">UA</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"nav-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <ul class=\"main-menu\">\n            <li><a class=\"dropdown-trigger valign-wrapper\" data-target=\"dropdown2\" #dropdown1>About journal<i class=\"material-icons right\" id=\"arrow-drop-down_1\">arrow_drop_down</i></a></li>\n            <li><a routerLink=\"/editorial-board\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Editorial Board</a></li>\n            <li><a class=\"dropdown-trigger valign-wrapper\" data-target=\"dropdown1\" #dropdown>For authors<i class=\"material-icons right\" id=\"arrow-drop-down\">arrow_drop_down</i></a></li>\n            <li><a routerLink=\"/journal-numbers\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Journal numbers</a></li>\n            <li><a routerLink=\"/reviewing\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Publication Ethics</a></li>\n          </ul>\n          <div id=\"sb-search\" class=\"sb-search \" >\n                <form>\n                    <input class=\"sb-search-input \" [(ngModel)]=\"query\" placeholder=\"Enter your search term...\" type=\"search\" value=\"\" name=\"search\" id=\"search\" autocomplete=\"off\">\n                    <input class=\"sb-search-submit\" type=\"submit\"  value=\"\">\n                    <span class=\"sb-icon-search\"><i class=\"material-icons\">search</i></span>\n                </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"wrap-search\">\n    <ul class=\"collection\">\n      <a href=\"{{ article.id }}\" class=\"collection-item\" *ngFor=\"let article of articles | searchEn: query\">\n        {{article.author_en}}. {{article.title_en}}.\n      </a>\n    </ul>\n  </div>\n\n  <main>\n    <div class=\"container text-info\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </main>\n\n  <footer class=\"page-footer\">\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n        <strong><a href=\"http://creativecommons.org/licenses/by/4.0/\" target=\"_blank\" rel=\"license noopener\"><img style=\"border-width: 0;\" src=\"https://i.creativecommons.org/l/by/4.0/80x15.png\" alt=\"License Creative Commons\"></a>&nbsp;<a href=\"http://creativecommons.org/licenses/by/4.0/\" target=\"_blank\" rel=\"license noopener\" class=\"licence\">Creative Commons «Attribution» 4.0</a>&nbsp;WorldWide.</strong><br/>\n        <!--<a href=\"/admin\" class=\"admin-link\"><i class=\"material-icons\">laptop_mac</i></a>© 2018 Volyn Orthodox Theology Academy. (The site is in developer mode)-->\n      </div>\n    </div>\n  </footer>\n</div>\n\n<ul id=\"dropdown1\" class=\"dropdown-content\">\n  <li><a routerLink=\"/for-authors\">Requirements for registration</a></li>\n  <li><a routerLink=\"/review-policy\">Peer-review process</a></li>\n</ul>\n\n<ul id=\"dropdown2\" class=\"dropdown-content\">\n  <li><a routerLink=\"/general-information\">General information</a></li>\n  <li><a routerLink=\"/aims-and-scopes\">Aims and Scope</a></li>\n  <li><a routerLink=\"/open-access-statement\">Open-access Statement</a></li>\n  <li><a routerLink=\"/archiving\">Archiving</a></li>\n  <li><a routerLink=\"/plagiarism-policy\">Plagiarism policy</a></li>\n</ul>\n"

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


window['jQuery'] = jquery__WEBPACK_IMPORTED_MODULE_1__;


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
    EnMainLayoutComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.dropdown-trigger').dropdown();
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

module.exports = ".page-flexbox-wrapper {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n}\n\nmain {\n    flex: 1 0 auto;\n    background-color: #f1f1f1;\n}\n\n.nav-extended {\n    background-color: #A32202;\n}\n\n.nav-extended .nav-wrapper {\n    min-height: 120px;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.brand-gerb {\n  height: 120px;\n  width: 125px;\n  background-image: url('/assets/images/gerb.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  float:left;\n}\n\n.brand-disc {\n  font-size: 20px;\n  font-family: ArnoPro-Subhead;\n  line-height: 1.2;\n  color: white;\n  padding-top: 5px;\n}\n\n.brand-title {\n  font-size: 20px;\n  font-family: ArnoPro-SmbdSubhead;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: white;\n  border-bottom: 1px solid;\n}\n\n.brand-title-main {\n  font-size: 38px;\n}\n\n.brand-title-add {\n  font-size: 24px;\n}\n\n.nav-content{\n    min-height: 50px;\n    background-color:\t#DA7B03;\n    color: white;\n}\n\n.main-menu, .main-menu li, .main-menu li a {\n    min-height: 50px;\n    font-family: ArnoPro-Subhead;\n    font-size: 18px;\n    color: white;\n    text-align: center;\n}\n\n.row {\n    margin-bottom: 0;\n    display: flex;\n  justify-content: center;\n\n}\n\n.main-menu\n{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.text-info {\n    margin: 40px auto;\n    font-family: ArnoPro-SmText;\n    font-size: 18px;\n    color: #505050;\n    background-color: white;\n    padding: 40px;\n}\n\n.link-active {\n    border-bottom: 4px solid #b14a01;\n}\n\n.page-footer {\n    padding-top: 0;\n    background-color: #12172A;\n    font-family: ArnoPro-SmText;\n    font-size: 15px;\n\n}\n\n.container {\n    width: 90%;\n    max-width: initial;\n}\n\n.lang-block {\n    width: 40px;\n    height: 60px;\n\n\n}\n\n.lang {\n    display: flex;\n    height: 50%;\n    line-height: 1;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid white;\n}\n\n.lang:first-child {\n    border-bottom: 1px solid white;\n}\n\n.lang:last-child {\n    border-top: 1px solid white;\n}\n\n.lang:hover {\nbackground-color: #0073a3;\n    border: 2px solid #0073a3;\n}\n\n.sb-search {\n  position: absolute;\n  width: 0%;\n  min-width: 50px;\n  height: 50px;\n  right: 0;\n  overflow: hidden;\n  transition: width 0.3s;\n  -webkit-backface-visibility: hidden;\n}\n\n.sb-search-input {\n  position: absolute;\n  top: 0;\n  right: 0px;\n  border: none;\n  outline: none;\n  background: #DA7B03 !important;\n  width: 100%;\n  height: 50px !important;\n  margin: 0;\n  z-index: 10;\n  font-family: inherit;\n  font-size: 20px;\n  color: #2c3e50;\n  text-indent: 20px;\n\n}\n\ninput[type=\"search\"].sb-search-input {\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n}\n\n.sb-search-input::-webkit-input-placeholder {\n  color: white;\n}\n\n.sb-search-input:-moz-placeholder {\n  color: white;\n}\n\n.sb-search-input::-moz-placeholder {\n  color: white;\n}\n\n.sb-search-input:-ms-input-placeholder {\n  color: white;\n}\n\n.sb-icon-search,\n.sb-search-submit  {\n  width: 50px;\n  height: 50px;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  line-height: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.sb-search-submit {\n  background: #fff; /* IE needs this */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; /* IE 8 */\n  filter: alpha(opacity=0); /* IE 5-7 */\n  opacity: 0;\n  color: transparent;\n  color:red;\n  border: none;\n  outline: none;\n  z-index: -1;\n}\n\n.sb-icon-search {\n  color: #fff;\n  background: #0073a3;\n  z-index: 90;\n  font-size: 22px;\n  font-family: 'icomoon';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n}\n\n.sb-icon-search i {\n  line-height: 50px;\n  height: 50px;\n}\n\n.sb-icon-search:before {\n  content: \"\";\n}\n\n.sb-search.sb-search-open,\n.no-js .sb-search {\n  width: 100%;\n}\n\n.sb-search.sb-search-open .sb-icon-search,\n.no-js .sb-search .sb-icon-search {\n  background: #0073a3;\n  color: #fff;\n  z-index: 11;\n}\n\n.sb-search.sb-search-open .sb-search-submit,\n.no-js .sb-search .sb-search-submit {\n  /*    z-index: 90;*/\n}\n\n.wrap-search {\n  display: none;\n  position: relative;\n  width: 100%;\n  background-color: white;\n}\n\n.wrap-search ul {\n  margin: 0;\n}\n\n.wrap-search ul a{\n   color: #DA7B03;\n   font-family: ArnoPro-SmText;\n }\n\n.admin-link {\n   color: #DA7B03;\n   display: block;\n   float: left;\n   padding-right: 5px;\n }\n\n.admin-link i {\n  font-size: 16px;\n}\n\n#dropdown1, #dropdown2 {\n  background-color: #f09934;\n  color: #f1f1f1;\n  top: -50px;\n}\n\n#dropdown1 li:hover , #dropdown2 li:hover {\n  background-color: #f1f1f1;\n}\n\n#dropdown1 li:hover a, #dropdown2 li:hover a{\n  color: #f09934;\n}\n\n#arrow-drop-down, #arrow-drop-down_1 {\n  line-height: 50px;\n  height: 50px;\n}\n\n.licence {\n  color: #DA7B03;\n}\n"

/***/ }),

/***/ "./src/app/shared/layouts/main-layout/main-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/main-layout/main-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-flexbox-wrapper\">\n<nav class=\"nav-extended\">\n        <div class=\"container\">\n            <a routerLink=\"/ua\"><div class=\"brand-gerb hide-on-small-only\"></div></a>\n            <div class=\"nav-wrapper valign-wrapper\">\n                <div class=\"brand-text\">\n                  <div class=\"brand-title\">\n                    <div class=\"brand-title-main\">VB \t&bull; <span class=\"brand-title-add\">Волинський благовісник</span></div>\n                  </div>\n                  <div class=\"brand-disc\">щорічний богословсько-історичний науковий журнал<br/>\n                    Волинської православної богословської академії ПЦУ</div>\n                </div>\n                <div class=\"lang-block\">\n                    <a routerLink=\"/\" class=\"lang\">EN</a>\n                    <a routerLink=\"/ua\" class=\"lang\">UA</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"nav-content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <ul class=\"main-menu\">\n                        <li><a class=\"dropdown-trigger valign-wrapper\" data-target=\"dropdown2\" #dropdown1>Про журнал<i class=\"material-icons right\" id=\"arrow-drop-down_1\">arrow_drop_down</i></a></li>\n                        <li><a routerLink=\"/ua/editorial-board\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Редакційна колегія</a></li>\n                        <li><a class=\"dropdown-trigger valign-wrapper\" data-target=\"dropdown1\" #dropdown>Авторам<i class=\"material-icons right\" id=\"arrow-drop-down\">arrow_drop_down</i></a></li>\n                        <li><a routerLink=\"/ua/journal-numbers\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Номери журналу</a></li>\n                        <li><a routerLink=\"/ua/reviewing\" routerLinkActive=\"link-active\" class=\"valign-wrapper\">Публікацій етика</a></li>\n                    </ul>\n                    <div id=\"sb-search\" class=\"sb-search \" >\n                          <form>\n                              <input class=\"sb-search-input \" [(ngModel)]=\"query\" placeholder=\"Введіть дані для пошуку ...\" type=\"search\" value=\"\" name=\"search\" id=\"search\" autocomplete=\"off\">\n                              <input class=\"sb-search-submit\" type=\"submit\"  value=\"\">\n                              <span class=\"sb-icon-search\"><i class=\"material-icons\">search</i></span>\n                          </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </nav>\n    <div class=\"wrap-search\">\n      <ul class=\"collection\">\n        <a href=\"/ua/{{ article.id }}\" class=\"collection-item\" *ngFor=\"let article of articles | search: query\">\n          {{article.author}}. {{article.title}}.\n        </a>\n      </ul>\n    </div>\n\n<main>\n    <div class=\"container text-info\">\n        <router-outlet></router-outlet>\n    </div>\n\n</main>\n\n    <footer class=\"page-footer\">\n        <div class=\"footer-copyright\">\n            <div class=\"container\">\n              <strong><a href=\"http://creativecommons.org/licenses/by/4.0/\" target=\"_blank\" rel=\"license noopener\"><img style=\"border-width: 0;\" src=\"https://i.creativecommons.org/l/by/4.0/80x15.png\" alt=\"License Creative Commons\"></a>&nbsp;<a href=\"http://creativecommons.org/licenses/by/4.0/\" target=\"_blank\" rel=\"license noopener\" class=\"licence\">Creative Commons «Attribution» 4.0</a>&nbsp;WorldWide.</strong><br/>\n              <!--<a href=\"/admin\" class=\"admin-link\"><i class=\"material-icons\">laptop_mac</i></a>© 2018 Волинська православна богословська академія. (Сайт знаходиться в режимі розробки)-->\n            </div>\n        </div>\n    </footer>\n</div>\n\n<ul id=\"dropdown1\" class=\"dropdown-content\">\n  <li><a routerLink=\"/ua/for-authors\">Вимоги до оформлення</a></li>\n  <li><a routerLink=\"/ua/review-policy\">Політика рецензування</a></li>\n</ul>\n\n<ul id=\"dropdown2\" class=\"dropdown-content\">\n  <li><a routerLink=\"/ua/general-information\">Загальна інформація</a></li>\n  <li><a routerLink=\"/ua/aims-and-scopes\">Цілі та проблематика</a></li>\n  <li><a routerLink=\"/ua/open-access-statement\">Відкритий доступ</a></li>\n  <li><a routerLink=\"/ua/archiving\">Архівування</a></li>\n  <li><a routerLink=\"/ua/plagiarism-policy\">Політика щодо плагіату</a></li>\n</ul>\n"

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


window['jQuery'] = jquery__WEBPACK_IMPORTED_MODULE_1__;


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
    MainLayoutComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.dropdown-trigger').dropdown();
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
    ArticleService.prototype.create = function (tom, author, author_en, number, title, title_en, pages, key_words, key_words_en, summary, summary_en, doi, email, biography, biography_en, references, references_en, document) {
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
        if (doi) {
            fd.append('doi', doi);
        }
        if (email) {
            fd.append('email', email);
        }
        if (biography) {
            fd.append('biography', biography);
        }
        if (biography_en) {
            fd.append('biography_en', biography_en);
        }
        if (references) {
            fd.append('references', references);
        }
        if (references_en) {
            fd.append('references_en', references_en);
        }
        if (document) {
            fd.append('document', document);
        }
        fd.append('tom', tom);
        fd.append('number', number);
        fd.append('title', title);
        fd.append('title_en', title_en);
        return this.http.post('api/articles', fd);
    };
    // @ts-ignore
    ArticleService.prototype.update = function (id, author, author_en, number, title, title_en, pages, key_words, key_words_en, summary, summary_en, doi, email, biography, biography_en, references, references_en, document) {
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
        if (doi) {
            fd.append('doi', doi);
        }
        if (email) {
            fd.append('email', email);
        }
        if (biography) {
            fd.append('biography', biography);
        }
        if (biography_en) {
            fd.append('biography_en', biography_en);
        }
        if (references) {
            fd.append('references', references);
        }
        if (references_en) {
            fd.append('references_en', references_en);
        }
        if (document) {
            fd.append('document', document);
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
    TomsService.prototype.create = function (name, name_en, number, year, description, description_en, document) {
        var fd = new FormData();
        if (document) {
            fd.append('document', document);
        }
        fd.append('name', name);
        fd.append('name_en', name_en);
        fd.append('number', number);
        fd.append('year', year);
        fd.append('description', description);
        fd.append('description_en', description_en);
        return this.http.post('api/toms', fd);
    };
    TomsService.prototype.update = function (id, name, name_en, number, year, description, description_en, document) {
        var fd = new FormData();
        if (document) {
            fd.append('document', document);
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

module.exports = "<div class=\"container\">\n  <div class=\"page-title\">\n    <h4>\n      <a routerLink=\"/admin\">Випуски</a>\n      <i class=\"material-icons\">keyboard_arrow_right</i>\n      {{ isNew ? 'Додати' : 'Редагувати' }} випуск\n    </h4>\n    <span>\n      <button *ngIf=\"!isNew\" class=\"btn btn-small red\" (click)=\"deleteTom()\">\n        <i class=\"material-icons\">delete</i>\n      </button>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"col s12 l6\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"input-field\">\n        <input formControlName=\"name\" id=\"name\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('name').invalid && form.get('name').touched }\">\n        <label for=\"name\">Назва</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('name').invalid && form.get('name').touched\">\n          <span *ngIf=\"form.get('name').errors['required']\">\n            Назва повинна бути зазначена.\n          </span>\n        </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"name_en\" id=\"name_en\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('name_en').invalid && form.get('name_en').touched }\">\n        <label for=\"name\">Title</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('name_en').invalid && form.get('name_en').touched\">\n          <span *ngIf=\"form.get('name_en').errors['required']\">\n            Title повинен бути зазначений.\n          </span>\n        </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"number\" id=\"number\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('number').invalid && form.get('number').touched }\">\n        <label for=\"number\">Номер</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('number').invalid && form.get('number').touched\">\n        <span *ngIf=\"form.get('number').errors['required']\">\n          Номер повинен бути зазначений.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"year\" id=\"year\" type=\"text\"\n               [ngClass]=\"{ 'invalid' : form.get('year').invalid && form.get('year').touched }\">\n        <label for=\"year\">Рік</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('year').invalid && form.get('year').touched\">\n        <span *ngIf=\"form.get('year').errors['required']\">\n          Рік повинен бути зазначений.\n        </span>\n      </span>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea formControlName=\"description\"  id=\"description\" class=\"materialize-textarea\"\n                  [ngClass]=\"{ 'invalid' : form.get('description').invalid && form.get('description').touched }\"\n                  #textArea>\n        </textarea>\n        <label for=\"description\">Опис</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('description').invalid && form.get('description').touched\">\n          <span *ngIf=\"form.get('description').errors['required']\">\n            Опис журналу повинен бути введений.\n          </span>\n        </span>\n      </div>\n\n      <div class=\"input-field\">\n        <textarea formControlName=\"description_en\"  id=\"description_en\" class=\"materialize-textarea\"\n                  [ngClass]=\"{ 'invalid' : form.get('description_en').invalid && form.get('description_en').touched }\"\n                  #textAreaEn>\n        </textarea>\n        <label for=\"description\">Description</label>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('description_en').invalid && form.get('description_en').touched\">\n          <span *ngIf=\"form.get('description_en').errors['required']\">\n            Description журналу повинен бути введений.\n          </span>\n        </span>\n      </div>\n\n      <div class=\"input-field\">\n        <input formControlName=\"document\" id=\"document\" type=\"text\" />\n        <label for=\"document\">Документ</label>\n      </div>\n\n      <div>\n        <button type=\"submit\" class=\"waves-effect waves-light btn\" [disabled]=\"form.invalid || form.disabled\">\n          Зберегти\n        </button>\n      </div>\n    </form>\n  </div>\n\n</div>\n"

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
            document: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
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
                    document: tom.document
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
            obs$ = this.tomsService.create(this.form.value.name, this.form.value.name_en, this.form.value.number, this.form.value.year, this.form.value.description, this.form.value.description_en, this.form.value.document);
        }
        else {
            obs$ = this.tomsService.update(this.tom.id, this.form.value.name, this.form.value.name_en, this.form.value.number, this.form.value.year, this.form.value.description, this.form.value.description_en, this.form.value.document);
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

module.exports = __webpack_require__(/*! /home/roman/Documents/Projects/blagovisnik/vb_ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map