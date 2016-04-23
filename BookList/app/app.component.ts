import {Component} from 'angular2/core';
import { BookListComponent } from './book/bookList.component';
import { BookDetailComponent } from './book/bookDetail.component'

@Component({
    selector: 'my-app',
    template: `<h1>BookList App</h1>
    <div class='container'>
        <div class='row'>
            <booklist (displayBook)='displayBook($event)' [books]='books'></booklist>
            <bookdetail [book]='book'></bookdetail>
        </div>    
    </div>
    `,
    directives: [ BookListComponent, BookDetailComponent ]
})
export class AppComponent { 
    books : Book[] = [
        {'name': 'Surely Your Joking Mr.Feynman', 'author': 'Richard Feynman'},
        {'name': 'Harry Potter', 'author': 'J.K Rowling'},
        {'name': 'Lord of the Rings', 'author': 'J. R. R. Tolkien'},
        {'name': 'Data Structures and Algorithms', 'author': 'Niklaus Wirth'}     
    ]
    
    book : Book = {'name': 'Surely Your Joking Mr.Feynman', 'author': 'Richard Feynman'};
    
    displayBook(book){
        this.book = book;
    }
}

class Book {
    name: string;
    author: string;
}