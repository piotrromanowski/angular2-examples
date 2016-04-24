import { Component, Input } from 'angular2/core'
import { TODO } from '../app.component'

@Component({
    selector: 'detail',
    template: `
        <div *ngIf='todo === null' class="panel panel-default">
            <div class="panel-body">
                SELECT TODO
            </div>
        </div>
        <div *ngIf='todo !== null' class="panel panel-default">
            <div class="panel-heading"><h3> {{ todo.title }} </h3></div>
            <div class="panel-body">
                <p><strong>Completed: </strong> {{ todo.complete }} </p>
                <hr>
                <strong>Description: </strong>
                <p>{{ todo.description }}</p>
            </div>
        </div>
    `
})
export class Detail {
    @Input() todo: TODO;
}