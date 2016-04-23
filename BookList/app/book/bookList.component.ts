import { Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'booklist',
    template: `
        <h2>List</h2>
        <div class="col-md-4">
            <ul class="list-group">
                <li *ngFor="#book of books" (click)="onClick(book)" class="list-group-item">
                    {{book.name}}
                </li>
            </ul>
        </div>
    `
})
export class BookListComponent {
    @Input(/* alias */) books;   
    
    @Output() displayBook = new EventEmitter();
    
    onClick(book) {
        this.displayBook.emit(book);
    }
}