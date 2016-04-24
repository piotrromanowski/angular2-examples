import { Component, Input, Output, EventEmitter } from 'angular2/core'
import { TODO } from '../app.component'
import { Summary } from './pipes/summary.pipe'

@Component({
    selector: 'item',
    template: `
        <i 
            class='glyphicon'
            [class.glyphicon-check]='todo.complete' 
            [class.glyphicon-unchecked]='!todo.complete'
            (click)="onCheck($event)" 
        ></i>
        <h4> {{ todo.title }} </h4>
        <p> {{ todo.description | summary }} </p>
    `,
    pipes: [ Summary ]
})
export class Item {
    @Input() todo: TODO;
    
    @Output() onComplete = new EventEmitter();
    
    onCheck($event) {
        this.onComplete.emit(this.todo);
        $event.stopPropagation();
    }
}

