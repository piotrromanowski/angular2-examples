import { Component, Input, Output, EventEmitter } from 'angular2/core'
import { TODO } from '../app.component'
import { Item } from './item.component'

@Component({
    selector: 'list',
    template: `
        <ul class='list-group'>
            <li *ngFor="#todo of todos" class="list-group-item">
                <item [todo]='todo' (onComplete)="onCheck(todo)"></item>
            </li>
        </ul>
    `,
    directives: [ Item ]
})
export class List {
    @Input() todos: TODO[];
    
    @Output() onComplete = new EventEmitter();
    
    onCheck(todo) {
        this.onComplete.emit(todo);
    }
}