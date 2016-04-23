import { Component, Input } from 'angular2/core'

@Component({
    selector: 'bookdetail',
    template: `
        <div class="col-md-8">
            <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{ book.name }}</h3>
            </div>
            <div class="panel-body">
                {{ book.author }}
                
                <br>
                <input type ='text' [(ngModel)]='book.name' />
                <input type ='text' [(ngModel)]='book.author' />
            </div>
            </div>
        </div>
    `
})
export class BookDetailComponent {
    @Input() book;
}