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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front-page/front-page.component */ "./src/app/front-page/front-page.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category-list/category-list.component */ "./src/app/category/category-list/category-list.component.ts");
/* harmony import */ var _category_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/product-detail/product-detail.component */ "./src/app/category/product-detail/product-detail.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _empty_empty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./empty/empty.component */ "./src/app/empty/empty.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', pathMatch: 'full', component: _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_2__["FrontPageComponent"] },
    {
        path: 'category',
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"],
        children: [
            { path: ':category', component: _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"] },
            { path: 'product/:id', component: _category_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"] }
        ]
    },
    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"] },
    { path: 'empty', component: _empty_empty_component__WEBPACK_IMPORTED_MODULE_7__["EmptyComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false, useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n<!-- Notification Service -->\r\n<notifier-container></notifier-container>\r\n\r\n<!-- Side Shopping Cart -->\r\n<a class=\"hidden-xs cart\" [routerLink]=\"'./shopping-cart'\"><span class=\"counter\">{{dataService.shoppingCartData.length}}</span></a>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.cart {\n  position: fixed;\n  bottom: 24px;\n  right: 0;\n  border-radius: 0px;\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  width: 60px;\n  height: 72px;\n  font-size: 18px;\n  text-align: center;\n  color: #616161;\n  text-decoration: none;\n  display: block;\n  background: rgba(0, 0, 0, 0.5) url(http://images.vfl.ru/ii/1484930184/14435803/15757225.png) center no-repeat;\n  background-size: 36px;\n}\n\na.cart > span {\n  width: 18px;\n  height: 18px;\n  font-size: 8px;\n  color: #fff;\n  line-height: 18px;\n  position: absolute;\n  border-radius: 9px;\n  display: block;\n  transform: scale(0);\n  -o-transform: scale(0);\n  -ms-transform: scale(0);\n  -moz-transform: scale(0);\n  -webkit-transform: scale(0);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  background: #13b8aa;\n}\n\na.cart > span.counter {\n  left: 30px;\n  bottom: 35px;\n  transition: 0.2s linear;\n  transform: scale(1);\n  -o-transform: scale(1);\n  -ms-transform: scale(1);\n  -moz-transform: scale(1);\n  -webkit-transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzb25hbFxcY2dzNDAyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEdBQUE7RUFFQSxzQkFBQTtDQ0FEOztBRElEO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFHQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtDQ0REOztBRElEO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFLQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7Q0NERCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEuY2FydCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjRweDtcclxuICByaWdodDogMDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNzJweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjE2MTYxO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KSB1cmwoaHR0cDovL2ltYWdlcy52ZmwucnUvaWkvMTQ4NDkzMDE4NC8xNDQzNTgwMy8xNTc1NzIyNS5wbmdcclxuKSBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzZweDtcclxuXHJcbn1cclxuXHJcbmEuY2FydD5zcGFuIHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICMxM2I4YWE7XHJcbn1cclxuXHJcbmEuY2FydD5zcGFuLmNvdW50ZXIge1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgYm90dG9tOiAzNXB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcclxuICAtbW96LXRyYW5zaXRpb246IC4ycyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IC4ycyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbiIsImEuY2FydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNHB4O1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSB1cmwoaHR0cDovL2ltYWdlcy52ZmwucnUvaWkvMTQ4NDkzMDE4NC8xNDQzNTgwMy8xNTc1NzIyNS5wbmcpIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMzZweDtcbn1cblxuYS5jYXJ0ID4gc3BhbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA5cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMTNiOGFhO1xufVxuXG5hLmNhcnQgPiBzcGFuLmNvdW50ZXIge1xuICBsZWZ0OiAzMHB4O1xuICBib3R0b206IDM1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG59Il19 */"

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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
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
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _category_category_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/category.module */ "./src/app/category/category.module.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./front-page/front-page.component */ "./src/app/front-page/front-page.component.ts");
/* harmony import */ var _front_page_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./front-page/carousel/carousel.component */ "./src/app/front-page/carousel/carousel.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _empty_empty_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./empty/empty.component */ "./src/app/empty/empty.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Modules




// Services

// Components








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_13__["FrontPageComponent"],
                _front_page_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CarouselComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__["ShoppingCartComponent"],
                _empty_empty_component__WEBPACK_IMPORTED_MODULE_16__["EmptyComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_18__["PaymentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                _category_category_module__WEBPACK_IMPORTED_MODULE_8__["CategoryModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"].withConfig({
                    position: {
                        horizontal: {
                            position: 'right'
                        },
                        vertical: {
                            position: 'top'
                        }
                    }
                })
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category/category-list/category-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/category/category-list/category-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb my-breadcrumb\">\r\n    <li><a [routerLink]=\"[['./all']]\">All Products</a></li>\r\n    <li *ngIf=\"dataService.currentCategory$.value !=='all'\">{{dataService.currentCategory$ | async}}</li>\r\n</ol>\r\n<app-product-list *ngIf=\"productList\" [data]=\"productList\"></app-product-list>\r\n\r\n"

/***/ }),

/***/ "./src/app/category/category-list/category-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/category/category-list/category-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-breadcrumb {\n  background-color: transparent;\n}\n\n.my-breadcrumb li a {\n  color: #333;\n}\n\n.my-breadcrumb li {\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnktbGlzdC9DOlxcVXNlcnNcXHNvbmFsXFxjZ3M0MDIvc3JjXFxhcHBcXGNhdGVnb3J5XFxjYXRlZ29yeS1saXN0XFxjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtDQ0NEOztBREVEO0VBQ0UsWUFBQTtDQ0NEOztBREVEO0VBQ0UsWUFBQTtDQ0NEIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWJyZWFkY3J1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubXktYnJlYWRjcnVtYiBsaSBhIHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLm15LWJyZWFkY3J1bWIgbGkge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcbiIsIi5teS1icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5teS1icmVhZGNydW1iIGxpIGEge1xuICBjb2xvcjogIzMzMztcbn1cblxuLm15LWJyZWFkY3J1bWIgbGkge1xuICBjb2xvcjogIzc3Nztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/category/category-list/category-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-list/category-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.productList = [];
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.setCurrentCategory(params['category']);
        });
        this.dataService.currentProductListByCategory$.subscribe(function (data) {
            _this.productList = data;
        });
    };
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/category/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.scss */ "./src/app/category/category-list/category-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/category/category-sidebar/category-sidebar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/category/category-sidebar/category-sidebar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cate-menu\">\r\n    <p class=\"global-primary dark-primary\">Categories</p>\r\n    <ul *ngIf=\"categoryList\" id=\"sidebar\">\r\n        <li>\r\n            <a [routerLink]=\"['./all']\" routerLinkActive=\"active-link\">All</a>\r\n            <span class=\"cate-count\">{{dataService.productList$.value.length}}</span>\r\n        </li>\r\n        <li *ngFor=\"let category of categoryList\">\r\n            <a [routerLink]=\"['./'+ category.redirect]\" routerLinkActive=\"active-link\">{{category.name}}</a>\r\n            <span class=\"cate-count\">{{category.count}}</span>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/category/category-sidebar/category-sidebar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/category/category-sidebar/category-sidebar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cate-menu {\n  padding: 0px;\n  margin-bottom: 15px;\n}\n.cate-menu p {\n  text-transform: uppercase;\n  padding: 10px 25px;\n  margin-bottom: 0px;\n  letter-spacing: 2px;\n  font-size: 18px;\n}\n.cate-menu ul {\n  list-style-type: none;\n  margin: 0px;\n  padding: 25px;\n}\n.cate-menu ul li {\n  margin-bottom: 8px;\n}\n.cate-menu ul li a {\n  text-transform: capitalize;\n  font-size: 16px;\n  color: #999;\n  text-decoration: none;\n  display: inline-block;\n  max-width: 65%;\n  transition: color 0.15s linear;\n}\n.cate-menu ul li .cate-count {\n  color: #666;\n  opacity: 0.5;\n  float: right;\n  position: relative;\n  text-align: right;\n  padding-left: 12px;\n  display: inline-block;\n}\n.active-link {\n  color: #666 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnktc2lkZWJhci9DOlxcVXNlcnNcXHNvbmFsXFxjZ3M0MDIvc3JjXFxhcHBcXGNhdGVnb3J5XFxjYXRlZ29yeS1zaWRlYmFyXFxjYXRlZ29yeS1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS1zaWRlYmFyL2NhdGVnb3J5LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7Q0NDRDtBRENDO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtDQ0NIO0FERUM7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0NDQUg7QURFRztFQUNFLG1CQUFBO0NDQUw7QURFSztFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFLQSwrQkFBQTtDQ0FQO0FER0s7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtDQ0RQO0FET0Q7RUFDRSx1QkFBQTtDQ0pEIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnktc2lkZWJhci9jYXRlZ29yeS1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGUtbWVudSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gIHAge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXgtd2lkdGg6IDY1JTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGxpbmVhcjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGxpbmVhcjtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBsaW5lYXI7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGxpbmVhcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBsaW5lYXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRlLWNvdW50IHtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlLWxpbmsge1xyXG4gIGNvbG9yOiAjNjY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmNhdGUtbWVudSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jYXRlLW1lbnUgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY2F0ZS1tZW51IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMjVweDtcbn1cbi5jYXRlLW1lbnUgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uY2F0ZS1tZW51IHVsIGxpIGEge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzk5OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogNjUlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgbGluZWFyO1xufVxuLmNhdGUtbWVudSB1bCBsaSAuY2F0ZS1jb3VudCB7XG4gIGNvbG9yOiAjNjY2O1xuICBvcGFjaXR5OiAwLjU7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gIGNvbG9yOiAjNjY2ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/category/category-sidebar/category-sidebar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/category/category-sidebar/category-sidebar.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategorySidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySidebarComponent", function() { return CategorySidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategorySidebarComponent = /** @class */ (function () {
    function CategorySidebarComponent(dataService) {
        this.dataService = dataService;
    }
    CategorySidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.categoryList$.subscribe(function (data) {
            _this.categoryList = data;
        });
    };
    CategorySidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-sidebar',
            template: __webpack_require__(/*! ./category-sidebar.component.html */ "./src/app/category/category-sidebar/category-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./category-sidebar.component.scss */ "./src/app/category/category-sidebar/category-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CategorySidebarComponent);
    return CategorySidebarComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-3 hidden-sm hidden-xs\">\r\n        <app-category-sidebar></app-category-sidebar>\r\n    </div>\r\n    <div class=\"col-md-9 col-sm-12 product-list\">\r\n        <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/category/category.component.scss":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-list {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvQzpcXFVzZXJzXFxzb25hbFxcY2dzNDAyL3NyY1xcYXBwXFxjYXRlZ29yeVxcY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtbGlzdCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuIiwiLnByb2R1Y3QtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
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

var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () { };
    CategoryComponent.prototype.onActivate = function (event) {
        // scroll to top
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/category/category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-sidebar/category-sidebar.component */ "./src/app/category/category-sidebar/category-sidebar.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/category/category-list/category-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/category/product-detail/product-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"],
                _category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["CategorySidebarComponent"],
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__["CategoryListComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryModule"]],
            exports: [
                _category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"],
                _category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["CategorySidebarComponent"],
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__["CategoryListComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"]
            ]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/category/product-detail/product-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/category/product-detail/product-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-container\">\r\n    <div class=\"row\">\r\n        <!-- Gallery -->\r\n        <div class=\"col-sm-6 col-xs-12\">\r\n            <div *ngIf=\"data\" class=\"gallery\">\r\n                <ngx-gallery  [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n            </div>\r\n        </div>\r\n        <!-- Product Info -->\r\n        <div class=\"col-sm-6 col-xs-12\">\r\n            <div class=\"caption\">\r\n                <h2>{{data.name}}</h2>\r\n                <h3>{{data.description}}</h3>\r\n                <!-- On Sale -->\r\n                <p *ngIf=\"data.onSale\" class=\"price\">\r\n                    <del>Rs.{{data.costPrice}}</del>\r\n                    <span class=\"sale\">Rs.{{data.salePrice}}</span>\r\n                </p>\r\n                <!-- Not On Sale -->\r\n                <p *ngIf=\"!data.onSale\" class=\"price\">\r\n                    <span>Rs.{{data.costPrice}}</span>\r\n                    <del style=\"visibility: hidden\">not on sale</del>\r\n                </p>\r\n            </div>\r\n            <!-- Dropdown -->\r\n            <app-dropdown [data]=\"data.options\" [header]=\"'Size'\" (selected)=\"dropdownOnChange(Rs.event)\"></app-dropdown>\r\n            <!-- Quantity Input -->\r\n            <app-quantity-input [header]=\"'Quantity'\" (valueChanged)=\"quantityOnChange(Rs.event)\"></app-quantity-input>\r\n            <!-- Add to Cart -->\r\n            <button type=\"button\" class=\"btn btn-primary add-cart-btn\" [class.btn-disabled]=\"!data.inStock\" [disabled]=\"!data.inStock\" (click)=\"addToCart()\">{{data.inStock? \"Add to Cart\" : \"Out of Stock\"}}</button>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <!-- Description -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h3 class=\"des-header\">Description</h3>\r\n            <div class=\"des-content\">\r\n                {{data.detail}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <!-- Price History -->\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h3 class=\"des-header\">Price History</h3>\r\n            <div class=\"w3-image\">\r\n                {{data.pricehistory}}\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"col-sm-6 col-xs-12\">\r\n        <div *ngIf=\"data\" class=\"pricehistory\">\r\n            <h3 class=\"des-header\">Price History</h3>\r\n            <!-- <ngx-gallery  [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery> -->\r\n            <img src={{data.pricehistory}}>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <!-- Related Products -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h3 class=\"rd-header\">Related Products</h3>\r\n            <div class=\"row\">\r\n                <div *ngFor=\"let rp of relatedProducts\" class=\"col-xs-6 col-sm-3\">\r\n                    <app-product-thumbnail [data]=\"rp\"></app-product-thumbnail>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/category/product-detail/product-detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/category/product-detail/product-detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-container {\n  padding: 15px 0;\n  min-height: 500px;\n}\n\n.gallery {\n  margin-bottom: 20px;\n}\n\nhr {\n  height: 0;\n  box-sizing: content-box;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n\n.caption {\n  padding-left: 0;\n  padding-right: 0;\n  height: 225px;\n  position: relative;\n}\n\n.caption h2 {\n  color: #555;\n  font-size: 30px;\n  margin-top: 0;\n}\n\n.caption h3 {\n  font-size: 17px;\n  font-weight: 300;\n  margin: 0 0 20px 0;\n}\n\n.caption .price {\n  display: block;\n  position: absolute;\n  bottom: 0px;\n  font-size: 20px;\n  color: #666;\n}\n\n.caption .price del {\n  display: block;\n  font-size: 20px;\n  color: #999;\n}\n\n.caption .price .sale {\n  display: block;\n  color: #c0392b;\n}\n\n.add-cart-btn {\n  width: 100%;\n  border-radius: 0px;\n  background-color: #00bcaa;\n  border-color: #00bcaa;\n  margin-top: 20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 400;\n}\n\n.btn-disabled {\n  background-color: rgba(0, 188, 170, 0.5019607843);\n  border-color: white;\n}\n\n.btn-disabled:hover {\n  background-color: rgba(0, 188, 170, 0.5019607843);\n  border-color: white;\n}\n\n.des-header,\n.rd-header {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #555;\n  font-weight: 300;\n  margin-bottom: 30px;\n}\n\n.des-content {\n  min-height: 300px;\n}\n\n@media screen and (min-width: 992px) {\n  .caption {\n    height: 235px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvcHJvZHVjdC1kZXRhaWwvQzpcXFVzZXJzXFxzb25hbFxcY2dzNDAyL3NyY1xcYXBwXFxjYXRlZ29yeVxccHJvZHVjdC1kZXRhaWxcXHByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yeS9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7Q0NDRDs7QURFRDtFQUNFLG9CQUFBO0NDQ0Q7O0FERUQ7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0NDQ0Q7O0FERUQ7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0NDQ0Q7O0FEQ0M7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0NDQ0g7O0FERUM7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7Q0NBSDs7QURHQztFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7Q0NESDs7QURHRztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7Q0NETDs7QURJRztFQUNFLGVBQUE7RUFDQSxlQUFBO0NDRkw7O0FET0Q7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7Q0NKRDs7QURPRDtFQUNFLGtEQUFBO0VBQ0Esb0JBQUE7Q0NKRDs7QURPRDtFQUNFLGtEQUFBO0VBQ0Esb0JBQUE7Q0NKRDs7QURPRDs7RUFFRSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7Q0NKRDs7QURPRDtFQUNFLGtCQUFBO0NDSkQ7O0FEU0Q7RUFDRTtJQUNFLGNBQUE7R0NORDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5nYWxsZXJ5IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBoZWlnaHQ6IDIyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICB9XHJcblxyXG4gIC5wcmljZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcblxyXG4gICAgZGVsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhbGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29sb3I6ICNjMDM5MmI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLWNhcnQtYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNhYTtcclxuICBib3JkZXItY29sb3I6ICMwMGJjYWE7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmJ0bi1kaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNhYTgwO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tZGlzYWJsZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjYWE4MDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGVzLWhlYWRlcixcclxuLnJkLWhlYWRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmRlcy1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiAzMDBweFxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpIHtcclxuICAuY2FwdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDIzNXB4O1xyXG4gIH1cclxufVxyXG4iLCIubXktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbn1cblxuLmdhbGxlcnkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5jYXB0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBoZWlnaHQ6IDIyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FwdGlvbiBoMiB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY2FwdGlvbiBoMyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuLmNhcHRpb24gLnByaWNlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uY2FwdGlvbiAucHJpY2UgZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM5OTk7XG59XG4uY2FwdGlvbiAucHJpY2UgLnNhbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNjMDM5MmI7XG59XG5cbi5hZGQtY2FydC1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2FhO1xuICBib3JkZXItY29sb3I6ICMwMGJjYWE7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5idG4tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4OCwgMTcwLCAwLjUwMTk2MDc4NDMpO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODgsIDE3MCwgMC41MDE5NjA3ODQzKTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmRlcy1oZWFkZXIsXG4ucmQtaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5kZXMtY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY2FwdGlvbiB7XG4gICAgaGVpZ2h0OiAyMzVweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/category/product-detail/product-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/category/product-detail/product-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.quantity = 1;
        this.option = {};
        this.relatedProducts = [];
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data = _this.dataService.getProductById(params['id']);
            _this.option = _this.data.options[0];
            _this.getRelatedProducts();
            _this.scrollToTop();
            _this.galleryImages = [];
            // insert main image
            _this.galleryImages.push({ small: _this.data.img, medium: _this.data.img, big: _this.data.img });
            // insert gallery images
            for (var _i = 0, _a = _this.data.gallery; _i < _a.length; _i++) {
                var img = _a[_i];
                _this.galleryImages.push({ small: img, medium: img, big: img });
            }
        });
        this.galleryOptions = [
            // refer to https://github.com/lukasz-galka/ngx-gallery
            // RWD settings
            {
                width: '100%',
                height: '300px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryAnimation"].Slide
            },
            {
                breakpoint: 768,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            {
                breakpoint: 400,
                preview: false
            }
        ];
    };
    ProductDetailComponent.prototype.getRelatedProducts = function () {
        this.relatedProducts = this.dataService.getRelatedProductsByCategory(this.data.id, this.data.category, 4);
    };
    ProductDetailComponent.prototype.dropdownOnChange = function (event) {
        console.log('dropdown value', event);
        this.option = event;
    };
    ProductDetailComponent.prototype.quantityOnChange = function (event) {
        console.log('quantity value', event);
        this.quantity = event;
    };
    ProductDetailComponent.prototype.addToCart = function () {
        this.dataService.addShoppingCartItem({
            product: this.data,
            quantity: this.quantity,
            option: this.option
        });
    };
    ProductDetailComponent.prototype.scrollToTop = function () {
        window.scroll(0, 0);
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/category/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/category/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/empty/empty.component.css":
/*!*******************************************!*\
  !*** ./src/app/empty/empty.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#feedback-form {\r\n    width: 280px;\r\n    margin: 0 auto;\r\n    background-color: #fcfcfc;\r\n    padding: 20px 50px 40px;\r\n    box-shadow: 1px 4px 10px 1px #aaa;  \r\n    font-family: sans-serif;\r\n  }\r\n  \r\n  #feedback-form * {\r\n      box-sizing: border-box;\r\n  }\r\n  \r\n  #feedback-form h2{\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  #feedback-form input {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  #feedback-form input[type=text] {\r\n    display: block;\r\n    height: 32px;\r\n    padding: 6px 16px;\r\n    width: 100%;\r\n    border: none;\r\n    background-color: #f3f3f3;\r\n  }\r\n  \r\n  #feedback-form label {\r\n    color: #777;\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  #feedback-form input[type=checkbox] {\r\n    float: left;\r\n  }\r\n  \r\n  #feedback-form input:not(:checked) + #feedback-phone {\r\n    height: 0;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n  }\r\n  \r\n  #feedback-form #feedback-phone {\r\n    transition: .3s;\r\n  }\r\n  \r\n  #feedback-form button[type=submit] {\r\n    display: block;\r\n    margin: 20px auto 0;\r\n    width: 150px;\r\n    height: 40px;\r\n    border-radius: 25px;\r\n    border: none;\r\n    color: #eee;\r\n    font-weight: 700;\r\n    box-shadow: 1px 4px 10px 1px #aaa;\r\n    \r\n    background: #207cca; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(to right, #207cca 0%,#9f58a3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#207cca', endColorstr='#9f58a3',GradientType=1 ); /* IE6-9 */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wdHkvZW1wdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsd0JBQXdCO0dBQ3pCOztFQUVEO01BQ0ksdUJBQXVCO0dBQzFCOztFQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLFlBQVk7R0FDYjs7RUFFRDtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQ0FBa0M7O0lBRWxDLG9CQUFvQixDQUFDLGtCQUFrQixDQUMyQixjQUFjLENBQ1osNkJBQTZCO0lBQ2pHLCtEQUErRCxDQUFDLHNEQUFzRDtJQUN0SCxvSEFBb0gsQ0FBQyxXQUFXO0dBQ2pJIiwiZmlsZSI6InNyYy9hcHAvZW1wdHkvZW1wdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmZWVkYmFjay1mb3JtIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxuICAgIHBhZGRpbmc6IDIwcHggNTBweCA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCAxMHB4IDFweCAjYWFhOyAgXHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgI2ZlZWRiYWNrLWZvcm0gKiB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gICNmZWVkYmFjay1mb3JtIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgI2ZlZWRiYWNrLWZvcm0gaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgI2ZlZWRiYWNrLWZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gIH1cclxuICBcclxuICAjZmVlZGJhY2stZm9ybSBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gICNmZWVkYmFjay1mb3JtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAjZmVlZGJhY2stZm9ybSBpbnB1dDpub3QoOmNoZWNrZWQpICsgI2ZlZWRiYWNrLXBob25lIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNmZWVkYmFjay1mb3JtICNmZWVkYmFjay1waG9uZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gICNmZWVkYmFjay1mb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJveC1zaGFkb3c6IDFweCA0cHggMTBweCAxcHggI2FhYTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogIzIwN2NjYTsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjA3Y2NhIDAlLCAjOWY1OGEzIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzIwN2NjYSAwJSwjOWY1OGEzIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjA3Y2NhIDAlLCM5ZjU4YTMgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMyMDdjY2EnLCBlbmRDb2xvcnN0cj0nIzlmNThhMycsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgKi9cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/empty/empty.component.html":
/*!********************************************!*\
  !*** ./src/app/empty/empty.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" id=\"feedback-form\">\r\n    <h2>Payment Pot</h2>\r\n\r\n    <p>\r\n      <a routerLink=\"/shopping-cart\">Go to cart</a>\r\n    </p>\r\n    \r\n    <!-- <div class=\"cart-item\" *ngFor=\"let item of items\">\r\n      <span>{{ item.name }} </span>\r\n      <span>{{ item.price | currency }}</span>\r\n    </div>\r\n     -->\r\n    <form>\r\n    \r\n      <div>\r\n        <label for=\"price\">\r\n          What is your maximum shopping goal for today? (in Rs.)\r\n        </label>\r\n          <input id=\"price\" type=\"number\" formControlName=\"price\" value=\"Rs.\">\r\n      </div>\r\n    \r\n      <!-- <div>\r\n        <label for=\"address\">\r\n          Address\r\n        </label>\r\n        <input id=\"address\" type=\"text\" formControlName=\"address\">\r\n      </div> -->\r\n    \r\n      <button class=\"button\" type=\"submit\" onclick=\"return confirm('Limit Updated')\">Submit</button>\r\n      <!-- <script>\r\n        function abc(){\r\n        var input = document.getElementById(\"price\").value;\r\n        console.log(input);\r\n        }\r\n        // document.getElementById(\"price\").innerHTML=\"Sonal!\";\r\n      </script> -->\r\n      <!-- <p id=\"price\"></p> -->\r\n    </form>\r\n\r\n    <!-- <script type=\"text/javascript\">\r\n        function confirmation() {\r\n            alert('Limit Updated');\r\n        }\r\n    </script> -->\r\n    \r\n    \r\n\r\n<!-- <div id=\"feedback-form\">\r\n  <h2 class=\"header\">Register Today</h2>\r\n  <div>\r\n    <form>\r\n      <input type=\"text\" name=\"email\" placeholder=\"Email\"></input>\r\n      <input type=\"text\" name=\"name\" placeholder=\"Name\"></input>\r\n      <label for=\"feedback-notify\">Remind me about this event via SMS</label>\r\n      <input type=\"checkbox\" id=\"feedback-notify\" name=\"notify\">\r\n      <input type=\"text\" id=\"feedback-phone\" name=\"phone\" placeholder=\"Phone number\"></input>\r\n      <button type=\"submit\">Register</button>\r\n    </form>\r\n  </div>\r\n</div> -->\r\n<!-- <script>\r\n  function test(){\r\n    console.log(thiss)\r\n    var abc = document.getElementById('price').value; \r\n    alert(abc);\r\n  }\r\n</script> -->"

/***/ }),

/***/ "./src/app/empty/empty.component.ts":
/*!******************************************!*\
  !*** ./src/app/empty/empty.component.ts ***!
  \******************************************/
/*! exports provided: EmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
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

var EmptyComponent = /** @class */ (function () {
    function EmptyComponent() {
    }
    EmptyComponent.prototype.ngOnInit = function () {
    };
    EmptyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empty',
            template: __webpack_require__(/*! ./empty.component.html */ "./src/app/empty/empty.component.html"),
            styles: [__webpack_require__(/*! ./empty.component.css */ "./src/app/empty/empty.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <div class=\"container footer-data1\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-sm-6\">\r\n                <div class=\"footer-menu1\">\r\n                    <ul class=\"list-unstyled\">\r\n                        <li><a>Your orders</a></li>\r\n                        <li><a>Returns & Replacements</a></li>\r\n                        <li><a>Shipping Rates & Policies</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6\">\r\n                <div class=\"footer-menu2\">\r\n                    <ul class=\"list-unstyled\">\r\n                        <li><a>Contact Us</a></li>\r\n                        <li><a>Facebook</a></li>\r\n                        <li><a>Official Website</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Sponsors -->\r\n    <div class=\"container footer-data2\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12\">\r\n                <a><img src=\"https://picsum.photos/120/40?random=5\"></a>\r\n                <a><img src=\"https://picsum.photos/120/40?random=6\"></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #eee;\n}\n\n.footer .footer-data1 {\n  border-bottom: 1px solid #ccc;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n.footer .footer-data2 {\n  padding-top: 30px;\n  padding-bottom: 50px;\n}\n\n.footer .footer-data2 a {\n  margin-right: 5px;\n}\n\n.footer .footer-data1 a {\n  color: #666;\n  text-decoration: none;\n  cursor: pointer;\n  /* ...and now for the proper property */\n  transition: 0.5s;\n}\n\n.footer .footer-data1 a:hover {\n  color: #13b8aa;\n}\n\n@media screen and (min-width: 768px) {\n  .footer-menu2 {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcc29uYWxcXGNnczQwMi9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtDQ0NEOztBREVEO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0NDQ0Q7O0FERUQ7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0NDQ0Q7O0FERUQ7RUFDRSxrQkFBQTtDQ0NEOztBREVEO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFLQSx3Q0FBQTtFQUNBLGlCQUFBO0NDQ0Q7O0FERUQ7RUFDRSxlQUFBO0NDQ0Q7O0FERUQ7RUFDRTtJQUNFLGtCQUFBO0dDQ0Q7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4uZm9vdGVyIC5mb290ZXItZGF0YTEge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIC5mb290ZXItZGF0YTIge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIC5mb290ZXItZGF0YTIgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5mb290ZXIgLmZvb3Rlci1kYXRhMSBhIHtcclxuICBjb2xvcjogIzY2NjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC1vLXRyYW5zaXRpb246IC41cztcclxuICAtbXMtdHJhbnNpdGlvbjogLjVzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjVzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xyXG4gIC8qIC4uLmFuZCBub3cgZm9yIHRoZSBwcm9wZXIgcHJvcGVydHkgKi9cclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5mb290ZXIgLmZvb3Rlci1kYXRhMSBhOmhvdmVyIHtcclxuICBjb2xvcjogIzEzYjhhYTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gIC5mb290ZXItbWVudTIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4uZm9vdGVyIC5mb290ZXItZGF0YTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZm9vdGVyIC5mb290ZXItZGF0YTIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5mb290ZXIgLmZvb3Rlci1kYXRhMiBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5mb290ZXIgLmZvb3Rlci1kYXRhMSBhIHtcbiAgY29sb3I6ICM2NjY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICAtbXMtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC8qIC4uLmFuZCBub3cgZm9yIHRoZSBwcm9wZXIgcHJvcGVydHkgKi9cbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmZvb3RlciAuZm9vdGVyLWRhdGExIGE6aG92ZXIge1xuICBjb2xvcjogIzEzYjhhYTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlci1tZW51MiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/front-page/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/front-page/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-id\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n        <li *ngFor=\"let item of data; let i = index\" data-target=\"#carousel-id\" [attr.data-slide-to]=\"i\" [className]=\"i === 0 ? 'active': ''\"></li>\r\n    </ol>\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div *ngFor=\"let item of data; let i = index\" [ngClass]=\"i == 0 ? 'item active' : 'item' \">\r\n            <img [src]=\"item.img\" alt=\"\">\r\n            <div class=\"container\">\r\n                <div class=\"carousel-caption\">\r\n                    <h1>{{item.title}}</h1>\r\n                    <p class=\"hidden-xs hidden-sm\">{{item.description}}</p>\r\n                    <!-- <p *ngIf=\"item.button.display\" class=\"hidden-xs hidden-sm\"><a class=\"btn btn-lg btn-primary\" [href]=\"item.button.href\" role=\"button\">{{item.button.content}}</a></p> -->\r\n                    <button class=\"btn btn-success btn-block\" (click)=\"onClick()\">Payment Pot</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Left and right controls -->\r\n    <a class=\"left carousel-control\" href=\"#carousel-id\" data-slide=\"prev\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\r\n    <a class=\"right carousel-control\" href=\"#carousel-id\" data-slide=\"next\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/front-page/carousel/carousel.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/front-page/carousel/carousel.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-indicators li {\n  margin: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtcGFnZS9jYXJvdXNlbC9DOlxcVXNlcnNcXHNvbmFsXFxjZ3M0MDIvc3JjXFxhcHBcXGZyb250LXBhZ2VcXGNhcm91c2VsXFxjYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZnJvbnQtcGFnZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL2Zyb250LXBhZ2UvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxufVxyXG4iLCIuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIG1hcmdpbjogMCAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/front-page/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/front-page/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
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

// import {MatDialog, MatDialogConfig} from "@angular/material";
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.data = [
            {
                title: 'Hi there!',
                description: 'Welcome to our website',
                img: 'https://picsum.photos/2800/700?random=9',
                button: { display: true, content: 'Payment Pot', href: '#' }
            },
            {
                title: 'This is an anti-nudge website',
                description: '',
                img: 'https://picsum.photos/2800/700?random=10',
                button: { display: true, content: 'Payment Pot', href: '#' }
            },
            {
                title: 'Hope you have a good time shopping',
                description: '',
                img: 'https://picsum.photos/2800/700?random=11',
                button: { display: true, content: 'Payment Pot', href: '#' }
            }
        ];
    }
    CarouselComponent.prototype.ngOnInit = function () { };
    CarouselComponent.prototype.onClick = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/front-page/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/front-page/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/front-page/front-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/front-page/front-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Carousel -->\r\n<div class=\"container mb-40\">\r\n <app-carousel></app-carousel>\r\n</div>\r\n\r\n\r\n<div class=\"products mb-40\">\r\n    <!-- Sections -->\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12\">\r\n                <div class=\"main-title\">\r\n                    <h2>Products</h2>\r\n                </div>\r\n        </div>\r\n    </div>\r\n    <app-product-list [data]=\"productList\" [itemsPerPage]=\"8\"></app-product-list>\r\n    </div>\r\n</div>\r\n\r\n<!-- Advertisements -->\r\n<div class=\"jd1 mb-40\">\r\n  <div class=\"container\">\r\n    <img src=\"https://picsum.photos/1200/300?random=30\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"jd2 mb-40\">\r\n  <div class=\"container\">\r\n    <img src=\"https://picsum.photos/1200/120?random=31\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/front-page/front-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/front-page/front-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jd1 img,\n.jd2 img {\n  width: 100%;\n}\n\n.main-title h2 {\n  letter-spacing: 1px;\n  font-size: 18px;\n  color: #666;\n  margin-bottom: 20px;\n}\n\n.mb-40 {\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtcGFnZS9DOlxcVXNlcnNcXHNvbmFsXFxjZ3M0MDIvc3JjXFxhcHBcXGZyb250LXBhZ2VcXGZyb250LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zyb250LXBhZ2UvZnJvbnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFBO0NDQ0Q7O0FERUQ7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0NDQ0Q7O0FERUQ7RUFDRSxvQkFBQTtDQ0NEIiwiZmlsZSI6InNyYy9hcHAvZnJvbnQtcGFnZS9mcm9udC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpkMSBpbWcsXHJcbi5qZDIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tdGl0bGUgaDIge1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tYi00MCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4iLCIuamQxIGltZyxcbi5qZDIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLXRpdGxlIGgyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1iLTQwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/front-page/front-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/front-page/front-page.component.ts ***!
  \****************************************************/
/*! exports provided: FrontPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageComponent", function() { return FrontPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FrontPageComponent = /** @class */ (function () {
    function FrontPageComponent(dataService) {
        this.dataService = dataService;
    }
    FrontPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.productList$.subscribe(function (data) {
            _this.productList = data;
        });
    };
    FrontPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-front-page',
            template: __webpack_require__(/*! ./front-page.component.html */ "./src/app/front-page/front-page.component.html"),
            styles: [__webpack_require__(/*! ./front-page.component.scss */ "./src/app/front-page/front-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FrontPageComponent);
    return FrontPageComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n                <span class=\"sr-only\">Menu Switch</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['./']\"><label class=\"logo\">CGS<span>402</span></label></a>\r\n        </div>\r\n\r\n        <!-- Hide for mobile devices -->\r\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n            <!-- Right Menu -->\r\n            <ul *ngIf=\"menuList\" class=\"nav navbar-nav navbar-right\">\r\n                <li *ngFor=\"let menu of menuList\" [class.dropdown]=\"menu.hasChildren\">\r\n                    <!-- Have SubMenu -->\r\n                    <a *ngIf=\"menu.hasChildren\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{menu.name}}<b class=\"caret\"></b></a>\r\n                    <ul *ngIf=\"menu.hasChildren\" class=\"dropdown-menu my-dropdown-menu\">\r\n                        <li *ngFor=\"let subMenu of menu.children\" [routerLink]=\"['category/'+ subMenu.redirect]\"><a>{{subMenu.name}}</a></li>\r\n                    </ul>\r\n                    <!-- No SubMenu -->\r\n                    <a *ngIf=\"!menu.hasChildren\" [routerLink]=\"[menu.redirect]\">{{menu.name}}</a>\r\n                </li>\r\n                <!-- Shopping Cart -->\r\n                <li><a [routerLink]=\"'./shopping-cart'\" class=\"cart\">Shopping Cart<span class=\"badge my-badge\">{{dataService.shoppingCartData.length}}</span></a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding-top: 50px;\n}\n\n.my-dropdown-menu {\n  z-index: 9999;\n}\n\n.my-dropdown-menu li a {\n  cursor: pointer;\n  padding: 10px 20px;\n  position: relative;\n  color: #333;\n}\n\n.my-dropdown-menu li a:hover {\n  color: #13b8aa;\n  background-color: transparent;\n}\n\n.my-dropdown-menu li + li a:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin-left: 1em;\n  margin-right: 1em;\n  border-top: 1px solid #eee;\n}\n\n.nav li {\n  cursor: pointer;\n}\n\n.logo {\n  font-size: 30px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.logo span {\n  font-weight: 300;\n}\n\n.cart .my-badge {\n  margin-left: 4px;\n  background-color: #13b8aa;\n  position: relative;\n  top: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcc29uYWxcXGNnczQwMi9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtDQ0NEOztBREVEO0VBQ0UsY0FBQTtDQ0NEOztBREdEO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtDQ0FEOztBREdEO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0NDQUQ7O0FER0Q7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7Q0NBRDs7QURHRDtFQUNFLGdCQUFBO0NDQUQ7O0FESUQ7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7Q0NERDs7QURHQztFQUNFLGlCQUFBO0NDREg7O0FETUM7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0NDSEgiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5teS1kcm9wZG93bi1tZW51IHtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG5cclxuLm15LWRyb3Bkb3duLW1lbnUgbGkgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5teS1kcm9wZG93bi1tZW51IGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTNiOGFhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubXktZHJvcGRvd24tbWVudSBsaStsaSBhOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5uYXYgbGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5sb2dvIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJ0IHtcclxuICAubXktYmFkZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxM2I4YWE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgfVxyXG59XHJcbiIsIi5uYXZiYXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLm15LWRyb3Bkb3duLW1lbnUge1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubXktZHJvcGRvd24tbWVudSBsaSBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5teS1kcm9wZG93bi1tZW51IGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzEzYjhhYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5teS1kcm9wZG93bi1tZW51IGxpICsgbGkgYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cblxuLm5hdiBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dvIHNwYW4ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY2FydCAubXktYmFkZ2Uge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNiOGFhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataService) {
        this.dataService = dataService;
        this.menuList = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getMenuList();
    };
    HeaderComponent.prototype.getMenuList = function () {
        var _this = this;
        this.dataService.getMenuList().subscribe(function (data) {
            _this.menuList = data;
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin: 0;\r\n  }\r\n  \r\n  html {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  *, *:before, *:after {\r\n    box-sizing: inherit;\r\n  }\r\n  \r\n  .column {\r\n    float: left;\r\n    width: 33.3%;\r\n    margin-bottom: 16px;\r\n    padding: 0 8px;\r\n  }\r\n  \r\n  .card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    margin: 8px;\r\n  }\r\n  \r\n  .about-section {\r\n    padding: 50px;\r\n    text-align: center;\r\n    background-color: #474e5d;\r\n    color: white;\r\n  }\r\n  \r\n  .container {\r\n    padding: 0 16px;\r\n  }\r\n  \r\n  .container::after, .row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n  \r\n  .title {\r\n    color: grey;\r\n  }\r\n  \r\n  .button {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n  \r\n  .button:hover {\r\n    background-color: #555;\r\n  }\r\n  \r\n  @media screen and (max-width: 650px) {\r\n    .column {\r\n      width: 100%;\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMENBQTBDO0lBQzFDLFVBQVU7R0FDWDs7RUFFRDtJQUNFLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSwyQ0FBMkM7SUFDM0MsWUFBWTtHQUNiOztFQUVEO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsYUFBYTtHQUNkOztFQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0dBQ2hCOztFQUVEO0lBQ0UsWUFBWTtHQUNiOztFQUVEO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0dBQ2I7O0VBRUQ7SUFDRSx1QkFBdUI7R0FDeEI7O0VBRUQ7SUFDRTtNQUNFLFlBQVk7TUFDWixlQUFlO0tBQ2hCO0dBQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICBodG1sIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMzMuMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXI6OmFmdGVyLCAucm93OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-section\">\r\n    <h1>About Us Page</h1>\r\n    <p>Some text about who we are and what we do.</p>\r\n    <p>Resize the browser window to see that this page is responsive by the way.</p>\r\n  </div>\r\n  \r\n  <h2 style=\"text-align:center\">Our Team</h2>\r\n  <div class=\"row\">\r\n    <div class=\"column\">\r\n      <div class=\"card\">\r\n        <img src=\"https://i.imgur.com/qWlF2FJ.jpg\" class=\"center\" width=\"350\" height=\"400\">\r\n        <div class=\"container\">\r\n          <h2>Mounika Dasa</h2>\r\n          <p class=\"title\">22128405</p>\r\n          <p>Dept. of Cognitive Science</p>\r\n          <p>mounikad22@iitk.ac.in</p>\r\n          <!-- <p><button class=\"button\">Contact</button></p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"column\">\r\n      <div class=\"card\">\r\n        <img src=\"https://i.imgur.com/KHPKVD3.png\" class=\"center\" width=\"350\" height=\"400\">\r\n        <div class=\"container\">\r\n          <h2>Namgyal Lhamo Dolma</h2>\r\n          <p class=\"title\">190528</p>\r\n          <p>Dept. of Economics</p>\r\n          <p>namgyal@iitk.ac.in</p>\r\n          <!-- <p><button class=\"button\">Contact</button></p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"column\">\r\n      <div class=\"card\">\r\n        <img src=\"https://i.imgur.com/zEmgW6w.png\" class=\"center\" width=\"350\" height=\"400\" >\r\n        <div class=\"container\">\r\n          <h2>Sonal Agrawal</h2>\r\n          <p class=\"title\">200995</p>\r\n          <p>Dept. of Electrical Engineering</p>\r\n          <p>sagarwal20@iitk.ac.in</p>\r\n          <!-- <p><button class=\"button\">Contact</button></p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div [formGroup]=\"form\" novalidate>\r\n        <!-- Header -->\r\n        <div class=\"header\">\r\n            <h1 class=\"title\">Payment</h1>\r\n            <div class=\"summary\">\r\n                <h3>Order Total: ${{data.totalPrice}}</h3>\r\n                <h5>- {{getTotalItems()}} items</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"col-md-6 col-xs-12\">\r\n            <!-- Customer Info -->\r\n            <section class=\"info-card\">\r\n                <div class=\"section-header\">\r\n                    <h3>Customer Info</h3>\r\n                </div>\r\n                <div class=\"section-body\">\r\n                    <form class=\"form-horizontal\" formGroupName=\"customerInfo\">\r\n                        <!-- Name -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('customerInfo.name')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"name\" class=\"required-label\">Full Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Full Name\" formControlName=\"name\">\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('customerInfo.name')\"\r\n                                    errorMsg=\"Please inform your name\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Email -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('customerInfo.email')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"email\" class=\"required-label\">Email Address</label>\r\n                                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email Address\" formControlName=\"email\">\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('customerInfo.email')\"\r\n                                    errorMsg=\"Please inform your Email\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Phone Number -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('customerInfo.phoneNumber')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"phone-number\" class=\"required-label\">Phone Number</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"phone-number\" placeholder=\"Phone Number\" formControlName=\"phoneNumber\" appDigitOnly>\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('customerInfo.phoneNumber')\"\r\n                                    errorMsg=\"Please inform your Phone Number\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </section>\r\n\r\n            <!-- Payment Detail -->\r\n            <section class=\"info-card\">\r\n                <div class=\"section-header\">\r\n                    <h3>Payment Detail</h3>\r\n                </div>\r\n                <div class=\"section-body\">\r\n                    <form class=\"form-horizontal\" formGroupName=\"paymentInfo\">\r\n                        <!-- Card Holder's Name -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('paymentInfo.holderName')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"holder-name\" class=\"required-label\">Card Holder's Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"holder-name\" placeholder=\"Card Holder's Name\" formControlName=\"holderName\">\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('paymentInfo.holderName')\"\r\n                                    errorMsg=\"Please inform your Holder Name\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Card Number -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('paymentInfo.cardNumber')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"card-number\" class=\"required-label\">Card Number</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"card-number\" placeholder=\"Debit/Credit Card Number\" formControlName=\"cardNumber\"\r\n                                (input)=\"limitedInputLength( 'paymentInfo.cardNumber', 12)\" appDigitOnly>\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('paymentInfo.cardNumber')\"\r\n                                    errorMsg=\"Please inform your Card Number\">\r\n                                </app-field-error-display>\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isMinLengthValid('paymentInfo.cardNumber')\"\r\n                                    errorMsg=\"Card Number must be 12 digit codes\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Expired Date & CVC -->\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-xs-6\" [ngClass]=\"displayFieldCss('paymentInfo.expiredDate')\">\r\n                                <label for=\"expired-date\" class=\"required-label\">Expired Date</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"expired-date\" placeholder=\"MM/YY\" formControlName=\"expiredDate\" (input)=\"checkExpiredDatePattern($event)\" appDigitOnly>\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('paymentInfo.expiredDate')\"\r\n                                    errorMsg=\"Please inform Card Expired Date\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                            <!-- CVC -->\r\n                            <div class=\"col-xs-6\" [ngClass]=\"displayFieldCss('paymentInfo.cvc')\">\r\n                                <label for=\"cvc\" class=\"required-label\">CVC</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"cvc\" placeholder=\"CVC\" formControlName=\"cvc\"\r\n                                (input)=\"limitedInputLength('paymentInfo.cvc', 3)\" appDigitOnly>\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('paymentInfo.cvc')\"\r\n                                    errorMsg=\"Please inform Card CVC\">\r\n                                </app-field-error-display>\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isMinLengthValid('paymentInfo.cvc')\"\r\n                                    errorMsg=\"CVC must be 3 digit codes\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </section>\r\n        </div>\r\n        <!-- Delivery Detail -->\r\n        <div class=\"col-md-6 col-xs-12\">\r\n            <section class=\"info-card\">\r\n                <div class=\"section-header\">\r\n                    <h3>Delivery Detail</h3>\r\n                </div>\r\n                <div class=\"section-body\">\r\n                    <form class=\"form-horizontal\" formGroupName=\"deliveryInfo\">\r\n                        <!-- Checkbox -->\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-xs-12 checkbox\">\r\n                                <label>\r\n                                    <input #delivery_cb type=\"checkbox\" (change)=\"toggleDeliveryCB(delivery_cb.checked)\"> Recipient Info is the same as Customer Info\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Recipient Name -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('deliveryInfo.recipientName')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"recipient-name\" class=\"required-label\">Recipient Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"recipient-name\" placeholder=\"Recipient Name\" formControlName=\"recipientName\">\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('deliveryInfo.recipientName')\"\r\n                                    errorMsg=\"Please inform Recipient Name\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Recipient Number -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('deliveryInfo.recipientNumber')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"recipient-number\" class=\"required-label\">Recipient Number</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"recipient-number\" placeholder=\"Recipient Number\" formControlName=\"recipientNumber\" appDigitOnly>\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('deliveryInfo.recipientNumber')\"\r\n                                    errorMsg=\"Please inform Recipient Phone Number\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <hr>\r\n                        <!-- Address -->\r\n                        <!-- Address Line 1 -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('deliveryInfo.addressLine1')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"add-line-1\" class=\"required-label\">Address</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"add-line-1\" placeholder=\"Address Line 1\" formControlName=\"addressLine1\">\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('deliveryInfo.addressLine1')\"\r\n                                    errorMsg=\"Please inform your Address\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Address Line 2 -->\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-xs-12\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"add-line-2\" placeholder=\"Address Line 2\"  formControlName=\"addressLine2\">\r\n                            </div>\r\n                        </div>\r\n                        <!-- City -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('deliveryInfo.city')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"city\" class=\"required-label\">City</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\" formControlName=\"city\">\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('deliveryInfo.city')\"\r\n                                    errorMsg=\"Please inform your City\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                        <!-- State & Postcode -->\r\n                        <div class=\"form-group\">\r\n                            <!-- State -->\r\n                            <div class=\"col-xs-6\" [ngClass]=\"displayFieldCss('deliveryInfo.state')\">\r\n                                <label for=\"state\" class=\"required-label\">State</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"state\" placeholder=\"State\" formControlName=\"state\">\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('deliveryInfo.state')\"\r\n                                    errorMsg=\"Please inform your State\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                            <!-- Postcode -->\r\n                            <div class=\"col-xs-6\" [ngClass]=\"displayFieldCss('deliveryInfo.postcode')\">\r\n                                <label for=\"postcode\" class=\"required-label\">Postcode</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"postcode\" placeholder=\"Postcode\" formControlName=\"postcode\" appDigitOnly>\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('deliveryInfo.postcode')\"\r\n                                    errorMsg=\"Please inform your Postcode\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Country -->\r\n                        <div class=\"form-group\" [ngClass]=\"displayFieldCss('deliveryInfo.country')\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label for=\"country\" class=\"required-label\">Country</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country\" formControlName=\"country\">\r\n                                <app-field-error-display\r\n                                    [displayError]=\"isRequiredValid('deliveryInfo.country')\"\r\n                                    errorMsg=\"Please inform your Country\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </section>\r\n        </div>\r\n\r\n        <!-- Submit button -->\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-6 submit-block\">\r\n                    <a class=\"btn btn-success btn-confirm\" (click)=\"onSubmit()\">\r\n                        Submit\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/payment/payment.component.scss":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  padding-right: 15px;\n}\n\n.title {\n  display: inline-block;\n  text-transform: uppercase;\n  padding: 10px 25px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  letter-spacing: 2px;\n  font-size: 18px;\n}\n\nhr {\n  height: 0;\n  box-sizing: content-box;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n\n.summary {\n  float: right;\n}\n\n.summary h3 {\n  margin: 5px 0;\n  font-size: 15px;\n  text-align: right;\n  letter-spacing: 0px;\n}\n\n.summary h5 {\n  text-align: right;\n}\n\n.header-panel {\n  margin-bottom: 15px;\n}\n\n.header-panel h3 {\n  margin: 5px 0;\n  font-size: 17px;\n  text-align: right;\n  letter-spacing: 0px;\n}\n\n.header-panel h5 {\n  text-align: right;\n}\n\n.info-card {\n  border-radius: 0px;\n  border: 1px solid #ededed;\n  margin-bottom: 30px;\n  padding: 0 15px;\n  background-color: white;\n}\n\n.section-header {\n  padding: 10px 15px;\n  margin: 0 -15px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #F6F6F6;\n  line-height: 26px;\n  color: #666;\n}\n\n.section-header h3 {\n  padding: 2px 0;\n  font-weight: 500;\n  margin: 0;\n  font-size: 18px;\n  line-height: 22px;\n}\n\n.section-body {\n  padding: 15px 0 0 0;\n}\n\n.section-body div {\n  position: relative;\n}\n\n.section-body hr {\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n\n.required-label:after {\n  color: #d00;\n  content: \"*\";\n  position: absolute;\n  margin-left: 5px;\n  top: 0px;\n}\n\n.submit-block {\n  margin: 0px auto;\n  float: none;\n}\n\n.btn-confirm {\n  background-color: #13b8aa;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 4px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n\n.btn-confirm:hover {\n  background-color: #13b8aa;\n  border-color: #13b8aa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9DOlxcVXNlcnNcXHNvbmFsXFxjZ3M0MDIvc3JjXFxhcHBcXHBheW1lbnRcXHBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0NDQ0Q7O0FERUQ7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtDQ0NEOztBREVEO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtDQ0NEOztBREVEO0VBQ0UsYUFBQTtDQ0NEOztBRENDO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtDQ0NIOztBREVDO0VBQ0Usa0JBQUE7Q0NBSDs7QURJRDtFQUNFLG9CQUFBO0NDREQ7O0FER0M7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0NDREg7O0FESUM7RUFDRSxrQkFBQTtDQ0ZIOztBRE1EO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtDQ0hEOztBRE1EO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtDQ0hEOztBREtDO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7Q0NISDs7QURPRDtFQUNFLG9CQUFBO0NDSkQ7O0FETUM7RUFDRSxtQkFBQTtDQ0pIOztBRE9DO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7Q0NMSDs7QURVRDtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7Q0NQRDs7QURVRDtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtDQ1BEOztBRFVEO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7Q0NQRDs7QURVRDtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7Q0NQRCIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLnN1bW1hcnkge1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1wYW5lbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8tY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIG1hcmdpbjogMCAtMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG5cclxuICBoMyB7XHJcbiAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWJvZHkge1xyXG4gIHBhZGRpbmc6IDE1cHggMCAwIDA7XHJcblxyXG4gIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnJlcXVpcmVkLWxhYmVsOmFmdGVyIHtcclxuICBjb2xvcjogI2QwMDtcclxuICBjb250ZW50OiBcIipcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB0b3A6IDBweDtcclxufVxyXG5cclxuLnN1Ym1pdC1ibG9jayB7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBmbG9hdDogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1jb25maXJtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNiOGFhO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJ0bi1jb25maXJtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNiOGFhO1xyXG4gIGJvcmRlci1jb2xvcjogIzEzYjhhYTtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cblxuLnN1bW1hcnkge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc3VtbWFyeSBoMyB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG4uc3VtbWFyeSBoNSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaGVhZGVyLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5oZWFkZXItcGFuZWwgaDMge1xuICBtYXJnaW46IDVweCAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuLmhlYWRlci1wYW5lbCBoNSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW5mby1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbjogMCAtMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uc2VjdGlvbi1oZWFkZXIgaDMge1xuICBwYWRkaW5nOiAycHggMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uc2VjdGlvbi1ib2R5IHtcbiAgcGFkZGluZzogMTVweCAwIDAgMDtcbn1cbi5zZWN0aW9uLWJvZHkgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tYm9keSBociB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4ucmVxdWlyZWQtbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogI2QwMDtcbiAgY29udGVudDogXCIqXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5zdWJtaXQtYmxvY2sge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLmJ0bi1jb25maXJtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzYjhhYTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJ0bi1jb25maXJtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzYjhhYTtcbiAgYm9yZGVyLWNvbG9yOiAjMTNiOGFhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(dataService, fb, router) {
        this.dataService = dataService;
        this.fb = fb;
        this.router = router;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.scrollToTop();
        this.data = this.dataService.getOrderInfo();
        // redirect to shopping cart page if no item in the cart
        if (this.data.items.length === 0) {
            this.router.navigate(['shopping-cart']);
        }
        this.form = this.fb.group({
            customerInfo: this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            paymentInfo: this.fb.group({
                holderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cardNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12)]],
                expiredDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cvc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
            }),
            deliveryInfo: this.fb.group({
                recipientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                recipientNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressLine2: [''],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                postcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    };
    PaymentComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.data.customerInfo = this.form.get('customerInfo').value;
            this.data.deliveryInfo = this.form.get('deliveryInfo').value;
            this.data.paymentInfo = this.form.get('paymentInfo').value;
            this.dataService.submitOrder(this.data);
        }
        else {
            this.validateAllFormFields(this.form);
            this.scrollToTop();
        }
    };
    PaymentComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    PaymentComponent.prototype.isRequiredValid = function (field) {
        return this.form.get(field).hasError('required') && this.form.get(field).touched;
    };
    PaymentComponent.prototype.isMinLengthValid = function (field) {
        return this.form.get(field).hasError('minlength') && this.form.get(field).touched;
    };
    PaymentComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    // mark all field as touched
    PaymentComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    // Set delivery info if check box is checked
    PaymentComponent.prototype.toggleDeliveryCB = function (isChecked) {
        var recipientName = this.form.get('deliveryInfo.recipientName');
        var recipientNumber = this.form.get('deliveryInfo.recipientNumber');
        if (isChecked) {
            recipientName.setValue(this.form.get('customerInfo.name').value);
            recipientNumber.setValue(this.form.get('customerInfo.phoneNumber').value);
        }
        else {
            recipientName.reset();
            recipientNumber.reset();
        }
    };
    // Control input's limit characters
    PaymentComponent.prototype.limitedInputLength = function (field, limit) {
        var formControl = this.form.get(field);
        if (formControl.value.length > limit) {
            formControl.setValue(formControl.value.slice(0, limit));
        }
    };
    PaymentComponent.prototype.checkExpiredDatePattern = function (inputEvent) {
        var formControl = this.form.get('paymentInfo.expiredDate');
        if (inputEvent.inputType === 'insertText') {
            if (formControl.value.length > 5) {
                // can't be more than 5 characters
                formControl.setValue(formControl.value.slice(0, 5));
            }
            else if (formControl.value.length === 3) {
                // add '/' after the second number
                var front = formControl.value.slice(0, 2);
                var back = formControl.value.slice(2, 4);
                formControl.setValue(front + "/" + back);
            }
        }
    };
    PaymentComponent.prototype.getTotalItems = function () {
        var total = 0;
        for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
            var i = _a[_i];
            total += +i.quantity;
        }
        return total;
    };
    PaymentComponent.prototype.scrollToTop = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 6);
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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





var SHOPPING_CART_KEY = 'shopping-cart-data';
var ORDER_INFO_KEY = 'order-info';
var DataService = /** @class */ (function () {
    function DataService(http, notifierService, router) {
        var _this = this;
        this.http = http;
        this.notifierService = notifierService;
        this.router = router;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.productList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.categoryList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentCategory$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('all');
        this.currentProductListByCategory$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.shoppingCartData = [];
        this.initData();
        this.currentCategory$.subscribe(function () {
            if (_this.categoryList$.value.length !== 0) {
                _this.getProductListByCategory();
            }
        });
    }
    DataService.prototype.setHeaders = function (key, value) {
        this.headers.set(key, value);
    };
    DataService.prototype.initData = function () {
        var _this = this;
        this.loadShoppingCart();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.getAllProductList(), this.getCategoryList()).subscribe(function (data) {
            _this.productList$.next(data[0]);
            console.log('products:', _this.productList$.value);
            _this.categoryList$.next(data[1]);
            console.log('categories:', _this.categoryList$.value);
            _this.setCategoryCount();
            _this.getProductListByCategory();
        });
    };
    DataService.prototype.setLocalStorage = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    DataService.prototype.getLocalStorage = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    DataService.prototype.removeLocalStorage = function (key) {
        localStorage.removeItem(key);
    };
    DataService.prototype.getAllProductList = function () {
        return this.http.get('./assets/data/product-list.json', { headers: this.headers });
    };
    DataService.prototype.getCategoryList = function () {
        return this.http.get('./assets/data/category-list.json', { headers: this.headers });
    };
    DataService.prototype.setCategoryCount = function () {
        // reset
        for (var _i = 0, _a = this.categoryList$.value; _i < _a.length; _i++) {
            var category = _a[_i];
            category.count = 0;
            category.products = [];
        }
        for (var _b = 0, _c = this.productList$.value; _b < _c.length; _b++) {
            var product = _c[_b];
            for (var _d = 0, _e = this.categoryList$.value; _d < _e.length; _d++) {
                var c = _e[_d];
                if (product.category === c.name) {
                    c.count++;
                    c.products.push(product);
                }
            }
        }
    };
    DataService.prototype.setCurrentCategory = function (category) {
        this.currentCategory$.next(category);
    };
    DataService.prototype.getMenuList = function () {
        return this.http.get('./assets/data/menu-list.json', { headers: this.headers });
    };
    DataService.prototype.getProductListByCategory = function () {
        var _this = this;
        if (this.currentCategory$.value === 'all') {
            this.currentProductListByCategory$.next(this.productList$.value);
        }
        else {
            this.currentProductListByCategory$.next(this.categoryList$.value.find(function (data) {
                return data.name === _this.currentCategory$.value;
            }).products);
        }
    };
    DataService.prototype.getProductById = function (productId) {
        return this.productList$.value.find(function (item, index, array) {
            return item.id === productId;
        });
    };
    DataService.prototype.getRelatedProductsByCategory = function (productId, category, amount) {
        var relatedProducts = [];
        for (var _i = 0, _a = this.categoryList$.value; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.name === category) {
                for (var i = 0; relatedProducts.length < amount; i++) {
                    if (c.products[i] && c.products[i].id !== productId) {
                        relatedProducts.push(c.products[i]);
                    }
                }
            }
        }
        return relatedProducts;
    };
    DataService.prototype.loadShoppingCart = function () {
        if (this.getLocalStorage(SHOPPING_CART_KEY)) {
            this.shoppingCartData = this.getLocalStorage(SHOPPING_CART_KEY);
        }
        console.log('SC Data from LocalStorage', this.shoppingCartData);
    };
    DataService.prototype.addShoppingCartItem = function (item) {
        if (this.shoppingCartData.find(function (data) {
            return data.product.id === item.product.id && data.option.value === item.option.value;
        })) {
            for (var _i = 0, _a = this.shoppingCartData; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.product.id === item.product.id && i.option.value === item.option.value) {
                    i.quantity = i.quantity + item.quantity;
                }
            }
        }
        else {
            this.shoppingCartData = this.shoppingCartData.concat([item]);
        }
        console.log('item added:', this.shoppingCartData);
        this.setLocalStorage(SHOPPING_CART_KEY, this.shoppingCartData);
        this.notifierService.notify('default', "Add " + item.product.name + " - " + item.option.name.toUpperCase() + " to cart");
    };
    DataService.prototype.editShoppingCartItem = function (item) {
        this.shoppingCartData = this.shoppingCartData.map(function (data) {
            if (data.product.id === item.product.id) {
                data = Object.assign({}, data, item);
            }
            return data;
        });
        console.log('item edited:', this.shoppingCartData);
        this.setLocalStorage(SHOPPING_CART_KEY, this.shoppingCartData);
    };
    DataService.prototype.deleteShoppingCartItem = function (item) {
        this.shoppingCartData = this.shoppingCartData.filter(function (data) { return !(data.product.id === item.product.id && data.option.value === item.option.value); });
        console.log('item removed:', this.shoppingCartData);
        this.setLocalStorage(SHOPPING_CART_KEY, this.shoppingCartData);
        this.notifierService.notify('warning', "Remove " + item.product.name + " - " + item.option.name.toUpperCase());
    };
    DataService.prototype.saveOrderInfo = function (data) {
        this.setLocalStorage(ORDER_INFO_KEY, data);
    };
    DataService.prototype.getOrderInfo = function () {
        return this.getLocalStorage(ORDER_INFO_KEY);
    };
    DataService.prototype.submitOrder = function (order) {
        var _this = this;
        console.log('Order Info:', order);
        this.notifierService.notify('default', 'Submit Success');
        // Delete shopping cart items and order from local storage then redirect to shopping Cart
        this.removeLocalStorage(SHOPPING_CART_KEY);
        this.removeLocalStorage(ORDER_INFO_KEY);
        this.shoppingCartData = [];
        setTimeout(function () {
            _this.router.navigate(['shopping-cart']);
        }, 2000);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/components/dropdown/dropdown.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\r\n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n          {{header}}<span class=\"dropdown-header-value\">{{defaultValue}}</span>\r\n        <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n        <li *ngIf=\"header\" class=\"dropdown-header\">{{header}}</li>\r\n        <!-- Item List -->\r\n        <li *ngFor=\"let item of data\" (click)=\"onSelect(item)\"><a>{{item.name}}</a></li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/dropdown/dropdown.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle {\n  color: #777;\n  text-transform: uppercase;\n}\n.dropdown-toggle .dropdown-header-value {\n  color: #444;\n  margin: 0px 12px;\n}\n.dropdown-menu li {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vQzpcXFVzZXJzXFxzb25hbFxcY2dzNDAyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRyb3Bkb3duXFxkcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7Q0NDRDtBRENDO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0NDQ0g7QURHRDtFQUNFLDBCQUFBO0NDQUQiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gIC5kcm9wZG93bi1oZWFkZXItdmFsdWUge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBtYXJnaW46IDBweCAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgbGkge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIiwiLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRyb3Bkb3duLXRvZ2dsZSAuZHJvcGRvd24taGVhZGVyLXZhbHVlIHtcbiAgY29sb3I6ICM0NDQ7XG4gIG1hcmdpbjogMHB4IDEycHg7XG59XG5cbi5kcm9wZG93bi1tZW51IGxpIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/dropdown/dropdown.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.ts ***!
  \******************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
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

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.data = [];
        this.defaultValue = '';
        this.header = '';
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.defaultValue = this.data[0].value;
    };
    DropdownComponent.prototype.onSelect = function (item) {
        this.defaultValue = item.value;
        this.selected.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DropdownComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "defaultValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "selected", void 0);
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/shared/components/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/shared/components/dropdown/dropdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/fake-image/fake-image.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/fake-image/fake-image.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"{{src}}\" alt=\"\">\r\n"

/***/ }),

/***/ "./src/app/shared/components/fake-image/fake-image.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/fake-image/fake-image.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zha2UtaW1hZ2UvZmFrZS1pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/fake-image/fake-image.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/fake-image/fake-image.component.ts ***!
  \**********************************************************************/
/*! exports provided: FakeImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeImageComponent", function() { return FakeImageComponent; });
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

var FakeImageComponent = /** @class */ (function () {
    function FakeImageComponent() {
        this.width = '';
        this.height = '';
        this.src = '';
    }
    FakeImageComponent.prototype.ngOnInit = function () {
        this.src = "https://picsum.photos/" + this.height + "/" + this.width + "?random=10";
        console.log(this.src);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FakeImageComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FakeImageComponent.prototype, "height", void 0);
    FakeImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fake-image',
            template: __webpack_require__(/*! ./fake-image.component.html */ "./src/app/shared/components/fake-image/fake-image.component.html"),
            styles: [__webpack_require__(/*! ./fake-image.component.scss */ "./src/app/shared/components/fake-image/fake-image.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FakeImageComponent);
    return FakeImageComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/field-error-display/field-error-display.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/field-error-display/field-error-display.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\">\r\n    <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\r\n    <span class=\"sr-only\">(error)</span>\r\n    <div class=\"error-msg\">\r\n        {{errorMsg}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/field-error-display/field-error-display.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/field-error-display/field-error-display.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: #a94442;\n  margin-top: 3px;\n}\n\n.fix-error-icon {\n  top: 26px;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQtZXJyb3ItZGlzcGxheS9DOlxcVXNlcnNcXHNvbmFsXFxjZ3M0MDIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZmllbGQtZXJyb3ItZGlzcGxheVxcZmllbGQtZXJyb3ItZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQtZXJyb3ItZGlzcGxheS9maWVsZC1lcnJvci1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0NDQ0Q7O0FERUQ7RUFDRSxVQUFBO0VBQ0EsWUFBQTtDQ0NEIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQtZXJyb3ItZGlzcGxheS9maWVsZC1lcnJvci1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1zZyB7XHJcbiAgY29sb3I6ICNhOTQ0NDI7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4uZml4LWVycm9yLWljb24ge1xyXG4gIHRvcDogMjZweDtcclxuICByaWdodDogMTVweDtcclxufVxyXG4iLCIuZXJyb3ItbXNnIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmZpeC1lcnJvci1pY29uIHtcbiAgdG9wOiAyNnB4O1xuICByaWdodDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/field-error-display/field-error-display.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/field-error-display/field-error-display.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FieldErrorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldErrorDisplayComponent", function() { return FieldErrorDisplayComponent; });
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

var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    FieldErrorDisplayComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    FieldErrorDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field-error-display',
            template: __webpack_require__(/*! ./field-error-display.component.html */ "./src/app/shared/components/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__(/*! ./field-error-display.component.scss */ "./src/app/shared/components/field-error-display/field-error-display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-list/product-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/product-list/product-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"product-list\">\r\n        <div *ngFor=\"let product of returnedArray\" class=\"col-xs-6 col-sm-3\">\r\n            <app-product-thumbnail [data]=\"product\"></app-product-thumbnail>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!-- Pagination -->\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12 text-center\">\r\n        <pagination\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\"\r\n            [totalItems]=\"productArray.length || 0\"\r\n            (pageChanged)=\"pageChanged($event)\"\r\n            [itemsPerPage]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [maxSize]=\"5\"\r\n            [rotate]=\"false\"></pagination>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/product-list/product-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/product-list/product-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/product-list/product-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-list/product-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
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

var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.data = [];
        this.itemsPerPage = 12;
        this.returnedArray = [];
    }
    ProductListComponent.prototype.ngOnInit = function () { };
    ProductListComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes', changes);
        this.productArray = changes.data.currentValue;
        if (this.productArray) {
            this.returnedArray = this.productArray.slice(0, this.itemsPerPage);
        }
    };
    ProductListComponent.prototype.pageChanged = function (event) {
        var startItem = (event.page - 1) * event.itemsPerPage;
        var endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.productArray.slice(startItem, endItem);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductListComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "itemsPerPage", void 0);
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/shared/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/shared/components/product-list/product-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-thumbnail/product-thumbnail.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/product-thumbnail/product-thumbnail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"directTo()\" class=\"thumbnail\">\r\n    <img [defaultImage]=\"defaultImage\" [lazyLoad]=\"data.img\" [offset]=\"0\">\r\n    <div class=\"caption\">\r\n        <h2>{{data.name}}</h2>\r\n        <p *ngIf=\"data.onSale\" class=\"price\">\r\n            <del>Rs.{{data.costPrice}}</del>\r\n            <span class=\"sale\">Rs.{{data.salePrice}}</span>\r\n        </p>\r\n        <p *ngIf=\"!data.onSale\" class=\"price\">\r\n            <span>Rs.{{data.costPrice}}</span>\r\n            <del style=\"visibility: hidden\">not on sale</del>\r\n        </p>\r\n    </div>\r\n</a>"

/***/ }),

/***/ "./src/app/shared/components/product-thumbnail/product-thumbnail.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/product-thumbnail/product-thumbnail.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  padding: 0;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\n.thumbnail .caption {\n  padding-left: 0;\n  padding-right: 0;\n}\n.thumbnail .caption h2 {\n  font-size: 15px;\n  margin-top: 0;\n}\n.thumbnail .caption .price {\n  display: block;\n  font-size: 15px;\n  color: #666;\n}\n.thumbnail .caption .price del {\n  display: block;\n  font-size: 15px;\n  color: #999;\n}\n.thumbnail .caption .price .sale {\n  display: block;\n  color: #c0392b;\n}\n.thumbnail:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC10aHVtYm5haWwvQzpcXFVzZXJzXFxzb25hbFxcY2dzNDAyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHByb2R1Y3QtdGh1bWJuYWlsXFxwcm9kdWN0LXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC10aHVtYm5haWwvcHJvZHVjdC10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQUEsbURBQUE7Q0NDRDtBRENDO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtDQ0NIO0FEQ0c7RUFDRSxnQkFBQTtFQUNBLGNBQUE7Q0NDTDtBREVHO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtDQ0FMO0FERUs7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0NDQVA7QURHSztFQUNFLGVBQUE7RUFDQSxlQUFBO0NDRFA7QURRRDtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7Q0NMRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtdGh1bWJuYWlsL3Byb2R1Y3QtdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1ibmFpbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xyXG5cclxuICAuY2FwdGlvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG5cclxuICAgICAgZGVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zYWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogI2MwMzkyYjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi50aHVtYm5haWw6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuIiwiLnRodW1ibmFpbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuLnRodW1ibmFpbCAuY2FwdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi50aHVtYm5haWwgLmNhcHRpb24gaDIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4udGh1bWJuYWlsIC5jYXB0aW9uIC5wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnRodW1ibmFpbCAuY2FwdGlvbiAucHJpY2UgZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk7XG59XG4udGh1bWJuYWlsIC5jYXB0aW9uIC5wcmljZSAuc2FsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2MwMzkyYjtcbn1cblxuLnRodW1ibmFpbDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/product-thumbnail/product-thumbnail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/product-thumbnail/product-thumbnail.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductThumbnailComponent", function() { return ProductThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductThumbnailComponent = /** @class */ (function () {
    function ProductThumbnailComponent(router) {
        this.router = router;
        this.width = '300';
        this.height = '320';
        this.defaultImage = './assets/images/default-image.png';
    }
    ProductThumbnailComponent.prototype.ngOnInit = function () { };
    ProductThumbnailComponent.prototype.directTo = function () {
        this.router.navigate(["/category/product/" + this.data.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductThumbnailComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductThumbnailComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductThumbnailComponent.prototype, "height", void 0);
    ProductThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-thumbnail',
            template: __webpack_require__(/*! ./product-thumbnail.component.html */ "./src/app/shared/components/product-thumbnail/product-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./product-thumbnail.component.scss */ "./src/app/shared/components/product-thumbnail/product-thumbnail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductThumbnailComponent);
    return ProductThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/quantity-input/quantity-input.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/quantity-input/quantity-input.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label *ngIf=\"header\" class=\"input-header\">{{header}}</label>\r\n<div class=\"input-group\">\r\n    <!-- - button -->\r\n    <span class=\"input-group-btn\">\r\n        <button type=\"button\" class=\"btn btn-default btn-number\" [disabled]=\"value === 1\" (click)=\"onMinus()\">\r\n            <span class=\"glyphicon glyphicon-minus\"></span>\r\n        </button>\r\n    </span>\r\n    <!-- Input -->\r\n    <input #q_input type=\"text\" class=\"form-control input-number quantity-input\" [value]=\"value\" (keyup)=\"onChanged(q_input.value)\">\r\n    <!-- + button -->\r\n    <span class=\"input-group-btn\">\r\n        <button type=\"button\" class=\"btn btn-default btn-number\" (click)=\"onPlus()\">\r\n            <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n    </span>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/quantity-input/quantity-input.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/quantity-input/quantity-input.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-header {\n  margin: 5px 0;\n  font-size: 14px;\n  color: #555;\n  font-weight: 500;\n}\n\n.input-group {\n  width: 200px;\n}\n\n.quantity-input {\n  text-align: center;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 767px) {\n  .input-group {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcXVhbnRpdHktaW5wdXQvQzpcXFVzZXJzXFxzb25hbFxcY2dzNDAyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHF1YW50aXR5LWlucHV0XFxxdWFudGl0eS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcXVhbnRpdHktaW5wdXQvcXVhbnRpdHktaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7Q0NDRDs7QURFRDtFQUNFLGFBQUE7Q0NDRDs7QURFRDtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7Q0NDRDs7QURFRDtFQUNFO0lBQ0UsWUFBQTtHQ0NEO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9xdWFudGl0eS1pbnB1dC9xdWFudGl0eS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1oZWFkZXIge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ucXVhbnRpdHktaW5wdXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5pbnB1dC1ncm91cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLmlucHV0LWhlYWRlciB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnF1YW50aXR5LWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmlucHV0LWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/quantity-input/quantity-input.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/quantity-input/quantity-input.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuantityInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantityInputComponent", function() { return QuantityInputComponent; });
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

var QuantityInputComponent = /** @class */ (function () {
    function QuantityInputComponent() {
        this.defaultValue = 1;
        this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuantityInputComponent.prototype.ngOnInit = function () {
        this.value = this.defaultValue;
    };
    QuantityInputComponent.prototype.onMinus = function () {
        this.value--;
        this.eventEmit();
    };
    QuantityInputComponent.prototype.onPlus = function () {
        this.value++;
        this.eventEmit();
    };
    QuantityInputComponent.prototype.onChanged = function (value) {
        this.value = +value;
        this.eventEmit();
    };
    QuantityInputComponent.prototype.eventEmit = function () {
        this.valueChanged.emit(this.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuantityInputComponent.prototype, "defaultValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuantityInputComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuantityInputComponent.prototype, "valueChanged", void 0);
    QuantityInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quantity-input',
            template: __webpack_require__(/*! ./quantity-input.component.html */ "./src/app/shared/components/quantity-input/quantity-input.component.html"),
            styles: [__webpack_require__(/*! ./quantity-input.component.scss */ "./src/app/shared/components/quantity-input/quantity-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuantityInputComponent);
    return QuantityInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/digit-only.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/digit-only.directive.ts ***!
  \***********************************************************/
/*! exports provided: DigitOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitOnlyDirective", function() { return DigitOnlyDirective; });
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

var DigitOnlyDirective = /** @class */ (function () {
    function DigitOnlyDirective(el) {
        this.el = el;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.inputElement = el.nativeElement;
    }
    DigitOnlyDirective.prototype.onKeyDown = function (e) {
        if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) // Allow: Cmd+X (Mac)
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    DigitOnlyDirective.prototype.onPaste = function (event) {
        event.preventDefault();
        var pastedInput = event.clipboardData.getData('text/plain').replace(/\D/g, ''); // get a digit-only string
        document.execCommand('insertText', false, pastedInput);
    };
    DigitOnlyDirective.prototype.onDrop = function (event) {
        event.preventDefault();
        var textData = event.dataTransfer.getData('text').replace(/\D/g, '');
        this.inputElement.focus();
        document.execCommand('insertText', false, textData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DigitOnlyDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [ClipboardEvent]),
        __metadata("design:returntype", void 0)
    ], DigitOnlyDirective.prototype, "onPaste", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], DigitOnlyDirective.prototype, "onDrop", null);
    DigitOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDigitOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DigitOnlyDirective);
    return DigitOnlyDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/index.js");
/* harmony import */ var _components_fake_image_fake_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fake-image/fake-image.component */ "./src/app/shared/components/fake-image/fake-image.component.ts");
/* harmony import */ var _components_product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-thumbnail/product-thumbnail.component */ "./src/app/shared/components/product-thumbnail/product-thumbnail.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/shared/components/product-list/product-list.component.ts");
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown/dropdown.component */ "./src/app/shared/components/dropdown/dropdown.component.ts");
/* harmony import */ var _components_quantity_input_quantity_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/quantity-input/quantity-input.component */ "./src/app/shared/components/quantity-input/quantity-input.component.ts");
/* harmony import */ var _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/field-error-display/field-error-display.component */ "./src/app/shared/components/field-error-display/field-error-display.component.ts");
/* harmony import */ var _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/digit-only.directive */ "./src/app/shared/directives/digit-only.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components






// Directives

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                // Components
                _components_fake_image_fake_image_component__WEBPACK_IMPORTED_MODULE_4__["FakeImageComponent"],
                _components_product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__["ProductThumbnailComponent"],
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"],
                _components_quantity_input_quantity_input_component__WEBPACK_IMPORTED_MODULE_8__["QuantityInputComponent"],
                _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_9__["FieldErrorDisplayComponent"],
                // Directives
                _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_10__["DigitOnlyDirective"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"].forRoot(), ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"]],
            exports: [
                // Components
                _components_fake_image_fake_image_component__WEBPACK_IMPORTED_MODULE_4__["FakeImageComponent"],
                _components_product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__["ProductThumbnailComponent"],
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"],
                _components_quantity_input_quantity_input_component__WEBPACK_IMPORTED_MODULE_8__["QuantityInputComponent"],
                _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_9__["FieldErrorDisplayComponent"],
                // Directives
                _directives_digit_only_directive__WEBPACK_IMPORTED_MODULE_10__["DigitOnlyDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 class=\"sc-header\">Shopping Cart</h1>\r\n    <hr>\r\n    <!-- Shopping Cart Empty -->\r\n    <div *ngIf=\"data.length === 0\" class=\"col-md-12\">\r\n        <h3 class=\"empty\"><i>Your Shopping Cart is Empty</i></h3>\r\n        <a class=\"btn btn-continue pull-right\" [routerLink]=\"'../category/all'\">\r\n            Continue Shopping <span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span>\r\n        </a>\r\n    </div>\r\n    <!-- Cart Cards -->\r\n    <div *ngIf=\"data.length !== 0\" class=\"col-md-8 col-xs-12\">\r\n        <ul class=\"cart-wrap\">\r\n\r\n            <li *ngFor=\"let item of data; let i = index\" class=\"cart-item\" [class.even-section]=\"i%2 == 0\">\r\n                <div class=\"info-wrap\">\r\n                    <!-- Product Info -->\r\n                    <div class=\"cart-section product-info\">\r\n                        <img [src]=\"item.product.img\">\r\n                        <p class=\"item-number\">#{{item.product.id}}</p>\r\n                        <h3 class=\"item-name\">{{item.product.name}} - {{item.option.name}}</h3>\r\n                        <p class=\"qty\">\r\n                            <input type=\"text\" class=\"qty-input\" [(ngModel)]=\"item.quantity\" (keyup)=\"updateItem(item)\">\r\n                            x Rs.{{item.product.onSale? item.product.salePrice: item.product.costPrice}}\r\n                        </p>\r\n                        <p class=\"stock-status\" [class.out-stock]=\"!item.product.inStock\">{{item.product.inStock? \"In Stock\": \"Out of Stock\"}}</p>\r\n                    </div>\r\n                    <!-- Total Price -->\r\n                    <div class=\"cart-section price-total\">\r\n                        <p>Rs.{{getTotalPrice(item)}}</p>\r\n                    </div>\r\n                    <div class=\"cart-section remove-wrap\">\r\n                        <!-- <a class=\"remove-button\" (click)=\"removeItem(item)\">x</a> -->\r\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\" (click)=\"removeItem(item)\" tooltip=\"Remove\">&times;</span></button>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n\r\n        <a class=\"btn btn-continue pull-right\" [routerLink]=\"'../category/all'\">\r\n            Continue Shopping <span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span>\r\n        </a>\r\n    </div>\r\n    <!-- Order Summary -->\r\n    <div *ngIf=\"data.length !== 0\" class=\"col-md-4 col-xs-12\">\r\n        <section class=\"order-summary\">\r\n            <div class=\"section-header\">\r\n                <h3>Order Summary</h3>\r\n            </div>\r\n            <div class=\"section-body\">\r\n                <div>\r\n                    <div class=\"price-info\">\r\n                        <span class=\"pull-left\">Subtotal</span>\r\n                        <span class=\"pull-right\">Rs.{{subTotal}}</span>\r\n                    </div>\r\n                    <div class=\"price-info\">\r\n                        <span class=\"pull-left\">Shipping</span>\r\n                        <span class=\"pull-right\">Rs.{{shippingFee}}</span>\r\n                    </div>\r\n                    <div class=\"price-info\">\r\n                        <span class=\"pull-left\">Tax({{taxPercentage}}%)</span>\r\n                        <span class=\"pull-right\">Rs.{{tax}}</span>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"price-info total\">\r\n                        <span class=\"pull-left\">Total</span>\r\n                        <span class=\"pull-right\">Rs.{{total}}</span>\r\n                    </div>\r\n                    <a class=\"btn btn-success btn-check-out\" [routerLink]=\"['/payment']\" (click)=\"onCheckOut()\">CHECK OUT</a>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sc-header {\n  text-transform: uppercase;\n  padding: 10px 25px;\n  margin-bottom: 0px;\n  letter-spacing: 2px;\n  font-size: 18px;\n}\n\nhr {\n  height: 0;\n  box-sizing: content-box;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n\n.empty {\n  text-align: center;\n  margin-bottom: 200px;\n  color: #ccc;\n}\n\n.cart-wrap {\n  list-style: none;\n  padding: 0px;\n}\n\n.cart-wrap .cart-item {\n  display: block;\n  width: 100%;\n  vertical-align: middle;\n  padding: 1.5em;\n  border-bottom: 1px solid #fafafa;\n}\n\n.cart-wrap .cart-item .info-wrap {\n  display: table;\n  width: 100%;\n}\n\n.cart-wrap .cart-item .info-wrap .cart-section {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.cart-wrap .cart-item .info-wrap .product-info img {\n  float: left;\n  width: 8em;\n  display: inline;\n  padding-right: 1em;\n}\n\n.cart-wrap .cart-item .info-wrap .product-info .item-number {\n  display: inline-block;\n  font-size: 0.75em;\n  color: #777;\n  margin-bottom: 0px;\n}\n\n.cart-wrap .cart-item .info-wrap .product-info .item-name {\n  margin-top: 0px;\n  font-size: 1em;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n\n.cart-wrap .cart-item .info-wrap .product-info .qty {\n  display: inline-block;\n  font-size: 0.85em;\n  color: #777777;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.cart-wrap .cart-item .info-wrap .product-info .qty .qty-input {\n  width: 2em;\n  text-align: center;\n  font-size: 1em;\n  padding: 0.25em;\n  margin: 1em 0.5em 0 0;\n}\n\n.cart-wrap .cart-item .info-wrap .product-info .stock-status {\n  font-family: \"Montserrat\", sans-serif;\n  color: #13b8aa;\n  font-weight: bold;\n  padding: 0.5em 0 0 1em;\n  text-transform: uppercase;\n  display: inline-block;\n  font-size: 0.85em;\n}\n\n.cart-wrap .cart-item .info-wrap .product-info .out-stock {\n  color: #F69679;\n}\n\n.cart-wrap .cart-item .info-wrap .price-total {\n  text-align: center;\n}\n\n.cart-wrap .cart-item .info-wrap .price-total p {\n  font-weight: bold;\n  font-size: 1.25em;\n  display: inline-block;\n  color: #777777;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.cart-wrap .cart-item .info-wrap .remove-wrap {\n  vertical-align: top;\n}\n\n.cart-wrap .cart-item .info-wrap .remove-wrap .remove-button {\n  text-decoration: none;\n  font-family: \"Montserrat\", sans-serif;\n  color: #ffffff;\n  font-weight: bold;\n  background: #e0e0e0;\n  padding: 0.5em;\n  font-size: 0.75em;\n  display: inline-block;\n  border-radius: 100%;\n  line-height: 0.85;\n  transition: all 0.25s linear;\n}\n\n.cart-wrap .cart-item .info-wrap .remove-wrap .remove-button:hover {\n  background: #f30;\n}\n\n.even-section {\n  background-color: #fafafa;\n}\n\n.btn-continue {\n  margin-bottom: 10px;\n}\n\n.order-summary {\n  border-radius: 0px;\n  border: 1px solid #ededed;\n  margin-bottom: 30px;\n  padding: 0 15px;\n  background-color: white;\n}\n\n.section-header {\n  padding: 10px 15px;\n  margin: 0 -15px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #F6F6F6;\n  line-height: 26px;\n  color: #666;\n}\n\n.section-header h3 {\n  padding: 2px 0;\n  font-weight: 500;\n  margin: 0;\n  font-size: 18px;\n  line-height: 22px;\n}\n\n.section-body {\n  padding: 15px 0 0 0;\n}\n\n.section-body div {\n  margin-bottom: 10px;\n}\n\n.section-body hr {\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n\n.section-body .price-info {\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n}\n\n.section-body .total {\n  font-weight: 600;\n  font-size: 17px;\n}\n\n.section-body .btn-check-out {\n  background-color: #13b8aa;\n  display: block;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 4px;\n  margin-top: 5px;\n}\n\n.section-body .btn-check-out:hover {\n  background-color: #13b8aa;\n  border-color: #13b8aa;\n}\n\n.pull-left {\n  float: left;\n  letter-spacing: 1px;\n}\n\n.pull-right {\n  float: right;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9DOlxcVXNlcnNcXHNvbmFsXFxjZ3M0MDIvc3JjXFxhcHBcXHNob3BwaW5nLWNhcnRcXHNob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7Q0NDRDs7QURFRDtFQUNFLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7Q0NDRDs7QURFRDtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0NDQ0Q7O0FERUQ7RUFDRSxpQkFBQTtFQUNBLGFBQUE7Q0NDRDs7QURDQztFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7Q0NDSDs7QURDRztFQUNFLGVBQUE7RUFDQSxZQUFBO0NDQ0w7O0FEQ0s7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0NDQ1A7O0FESU87RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7Q0NGVDs7QURLTztFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7Q0NIVDs7QURNTztFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0NDSlQ7O0FET087RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0NDTFQ7O0FET1M7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtDQ0xYOztBRFNPO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtDQ1BUOztBRFVPO0VBQ0UsZUFBQTtDQ1JUOztBRGFLO0VBQ0UsbUJBQUE7Q0NYUDs7QURhTztFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtDQ1hUOztBRGVLO0VBQ0Usb0JBQUE7Q0NiUDs7QURlTztFQUNFLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUtBLDZCQUFBO0NDYlQ7O0FEZ0JPO0VBQ0UsaUJBQUE7Q0NkVDs7QUR1QkQ7RUFDRSwwQkFBQTtDQ3BCRDs7QUR1QkQ7RUFDRSxvQkFBQTtDQ3BCRDs7QUR1QkQ7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0NDcEJEOztBRHVCRDtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7Q0NwQkQ7O0FEc0JDO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7Q0NwQkg7O0FEd0JEO0VBQ0Usb0JBQUE7Q0NyQkQ7O0FEdUJDO0VBQ0Usb0JBQUE7Q0NyQkg7O0FEd0JDO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7Q0N0Qkg7O0FEeUJDO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7Q0N2Qkg7O0FEMEJDO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtDQ3hCSDs7QUQyQkM7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0NDekJIOztBRDRCQztFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7Q0MxQkg7O0FEK0JEO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0NDNUJEOztBRCtCRDtFQUNFLGFBQUE7RUFDQSxvQkFBQTtDQzVCRCIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYy1oZWFkZXIge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuaHIge1xyXG4gIGhlaWdodDogMDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4uZW1wdHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLmNhcnQtd3JhcCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gIC5jYXJ0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmFmYWZhO1xyXG5cclxuICAgIC5pbmZvLXdyYXAge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAuY2FydC1zZWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvZHVjdC1pbmZvIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogOGVtO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW0tbnVtYmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogLjc1ZW07XHJcbiAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjAyNWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnF0eSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgLnF0eS1pbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4yNWVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFlbSAuNWVtIDAgMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdG9jay1zdGF0dXMge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgY29sb3I6ICMxM2I4YWE7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMCAwIDFlbTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm91dC1zdG9jayB7XHJcbiAgICAgICAgICBjb2xvcjogI0Y2OTY3OTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJpY2UtdG90YWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVtb3ZlLXdyYXAge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgICAgIC5yZW1vdmUtYnV0dG9uIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogLjc1ZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IC44NTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcclxuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcclxuICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4yNXMgbGluZWFyO1xyXG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjMwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4uZXZlbi1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4uYnRuLWNvbnRpbnVlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ub3JkZXItc3VtbWFyeSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIG1hcmdpbjogMCAtMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG5cclxuICBoMyB7XHJcbiAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWJvZHkge1xyXG4gIHBhZGRpbmc6IDE1cHggMCAwIDA7XHJcblxyXG4gIGRpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIH1cclxuXHJcbiAgLnByaWNlLWluZm8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRvdGFsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLWNoZWNrLW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNiOGFhO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1jaGVjay1vdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzYjhhYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzEzYjhhYTtcclxuICB9XHJcblxyXG59XHJcblxyXG4ucHVsbC1sZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuIiwiLnNjLWhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5jYXJ0LXdyYXAge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FydC13cmFwIC5jYXJ0LWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZhZmFmYTtcbn1cbi5jYXJ0LXdyYXAgLmNhcnQtaXRlbSAuaW5mby13cmFwIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcnQtd3JhcCAuY2FydC1pdGVtIC5pbmZvLXdyYXAgLmNhcnQtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY2FydC13cmFwIC5jYXJ0LWl0ZW0gLmluZm8td3JhcCAucHJvZHVjdC1pbmZvIGltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogOGVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cbi5jYXJ0LXdyYXAgLmNhcnQtaXRlbSAuaW5mby13cmFwIC5wcm9kdWN0LWluZm8gLml0ZW0tbnVtYmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgY29sb3I6ICM3Nzc7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5jYXJ0LXdyYXAgLmNhcnQtaXRlbSAuaW5mby13cmFwIC5wcm9kdWN0LWluZm8gLml0ZW0tbmFtZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xufVxuLmNhcnQtd3JhcCAuY2FydC1pdGVtIC5pbmZvLXdyYXAgLnByb2R1Y3QtaW5mbyAucXR5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY29sb3I6ICM3Nzc3Nzc7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cbi5jYXJ0LXdyYXAgLmNhcnQtaXRlbSAuaW5mby13cmFwIC5wcm9kdWN0LWluZm8gLnF0eSAucXR5LWlucHV0IHtcbiAgd2lkdGg6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMC4yNWVtO1xuICBtYXJnaW46IDFlbSAwLjVlbSAwIDA7XG59XG4uY2FydC13cmFwIC5jYXJ0LWl0ZW0gLmluZm8td3JhcCAucHJvZHVjdC1pbmZvIC5zdG9jay1zdGF0dXMge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMTNiOGFhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMC41ZW0gMCAwIDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbn1cbi5jYXJ0LXdyYXAgLmNhcnQtaXRlbSAuaW5mby13cmFwIC5wcm9kdWN0LWluZm8gLm91dC1zdG9jayB7XG4gIGNvbG9yOiAjRjY5Njc5O1xufVxuLmNhcnQtd3JhcCAuY2FydC1pdGVtIC5pbmZvLXdyYXAgLnByaWNlLXRvdGFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcnQtd3JhcCAuY2FydC1pdGVtIC5pbmZvLXdyYXAgLnByaWNlLXRvdGFsIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM3Nzc3Nzc7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cbi5jYXJ0LXdyYXAgLmNhcnQtaXRlbSAuaW5mby13cmFwIC5yZW1vdmUtd3JhcCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uY2FydC13cmFwIC5jYXJ0LWl0ZW0gLmluZm8td3JhcCAucmVtb3ZlLXdyYXAgLnJlbW92ZS1idXR0b24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDAuODU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcbn1cbi5jYXJ0LXdyYXAgLmNhcnQtaXRlbSAuaW5mby13cmFwIC5yZW1vdmUtd3JhcCAucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMzA7XG59XG5cbi5ldmVuLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4uYnRuLWNvbnRpbnVlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm9yZGVyLXN1bW1hcnkge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luOiAwIC0xNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5zZWN0aW9uLWhlYWRlciBoMyB7XG4gIHBhZGRpbmc6IDJweCAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5zZWN0aW9uLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4IDAgMCAwO1xufVxuLnNlY3Rpb24tYm9keSBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlY3Rpb24tYm9keSBociB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuLnNlY3Rpb24tYm9keSAucHJpY2UtaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1ib2R5IC50b3RhbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5zZWN0aW9uLWJvZHkgLmJ0bi1jaGVjay1vdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNiOGFhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zZWN0aW9uLWJvZHkgLmJ0bi1jaGVjay1vdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNiOGFhO1xuICBib3JkZXItY29sb3I6ICMxM2I4YWE7XG59XG5cbi5wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(dataService) {
        this.dataService = dataService;
        this.data = [];
        // order summary
        this.subTotal = 0;
        this.shippingFee = 50;
        this.taxPercentage = 5; // 5%
        this.tax = 0;
        this.total = 0;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.shoppingCartData;
        this.getOrderSummary();
    };
    ShoppingCartComponent.prototype.updateItem = function (item) {
        this.dataService.editShoppingCartItem(item);
        this.getOrderSummary();
    };
    ShoppingCartComponent.prototype.removeItem = function (item) {
        this.dataService.deleteShoppingCartItem(item);
        this.data = this.dataService.shoppingCartData;
        this.getOrderSummary();
    };
    ShoppingCartComponent.prototype.getTotalPrice = function (item) {
        if (item.product.onSale) {
            return item.quantity * +item.product.salePrice;
        }
        else {
            var final_itemprice = item.quantity * +item.product.costPrice;
            var num_final = +final_itemprice;
            // var limitentered = (<HTMLInputElement>document.getElementById("price")).value;
            // var num_limit = +limitentered;
            // if(num_final>num_limit){
            //     // this.warn();
            // }
            return num_final;
            // return item.quantity * +item.product.costPrice;
        }
    };
    ShoppingCartComponent.prototype.getOrderSummary = function () {
        this.subTotal = 0;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.product.onSale) {
                this.subTotal = this.subTotal + +i.product.salePrice * i.quantity;
            }
            else {
                this.subTotal = this.subTotal + +i.product.costPrice * i.quantity;
            }
        }
        this.tax = (this.subTotal * this.taxPercentage) / 100;
        this.total = this.subTotal + this.shippingFee + this.tax;
    };
    ShoppingCartComponent.prototype.onCheckOut = function () {
        this.dataService.saveOrderInfo({
            items: this.data,
            totalPrice: this.total
        });
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/shopping-cart/shopping-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sonal\cgs402\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map