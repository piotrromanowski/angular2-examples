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
    var BookListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BookListComponent = (function () {
                function BookListComponent() {
                    this.displayBook = new core_1.EventEmitter();
                }
                BookListComponent.prototype.onClick = function (book) {
                    this.displayBook.emit(book);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BookListComponent.prototype, "books", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BookListComponent.prototype, "displayBook", void 0);
                BookListComponent = __decorate([
                    core_1.Component({
                        selector: 'booklist',
                        template: "\n        <h2>List</h2>\n        <div class=\"col-md-4\">\n            <ul class=\"list-group\">\n                <li *ngFor=\"#book of books\" (click)=\"onClick(book)\" class=\"list-group-item\">\n                    {{book.name}}\n                </li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookListComponent);
                return BookListComponent;
            }());
            exports_1("BookListComponent", BookListComponent);
        }
    }
});
//# sourceMappingURL=bookList.component.js.map