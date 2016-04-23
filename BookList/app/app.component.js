System.register(['angular2/core', './book/bookList.component', './book/bookDetail.component'], function(exports_1, context_1) {
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
    var core_1, bookList_component_1, bookDetail_component_1;
    var AppComponent, Book;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookList_component_1_1) {
                bookList_component_1 = bookList_component_1_1;
            },
            function (bookDetail_component_1_1) {
                bookDetail_component_1 = bookDetail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.books = [
                        { 'name': 'Surely Your Joking Mr.Feynman', 'author': 'Richard Feynman' },
                        { 'name': 'Harry Potter', 'author': 'J.K Rowling' },
                        { 'name': 'Lord of the Rings', 'author': 'J. R. R. Tolkien' },
                        { 'name': 'Data Structures and Algorithms', 'author': 'Niklaus Wirth' }
                    ];
                    this.book = { 'name': 'Surely Your Joking Mr.Feynman', 'author': 'Richard Feynman' };
                }
                AppComponent.prototype.displayBook = function (book) {
                    this.book = book;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>BookList App</h1>\n    <div class='container'>\n        <div class='row'>\n            <booklist (displayBook)='displayBook($event)' [books]='books'></booklist>\n            <bookdetail [book]='book'></bookdetail>\n        </div>    \n    </div>\n    ",
                        directives: [bookList_component_1.BookListComponent, bookDetail_component_1.BookDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Book = (function () {
                function Book() {
                }
                return Book;
            }());
        }
    }
});
//# sourceMappingURL=app.component.js.map