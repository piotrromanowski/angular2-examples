System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BookDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BookDetailComponent = (function () {
                function BookDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BookDetailComponent.prototype, "book", void 0);
                BookDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'bookdetail',
                        template: "\n        <div class=\"col-md-8\">\n            <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{{ book.name }}</h3>\n            </div>\n            <div class=\"panel-body\">\n                {{ book.author }}\n                \n                <br>\n                <input type ='text' [(ngModel)]='book.name' />\n                <input type ='text' [(ngModel)]='book.author' />\n            </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookDetailComponent);
                return BookDetailComponent;
            }());
            exports_1("BookDetailComponent", BookDetailComponent);
        }
    }
});
//# sourceMappingURL=bookDetail.component.js.map