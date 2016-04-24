import { Component, Input, Output, EventEmitter } from 'angular2/core'


@Component({
    selector: 'view',
    template: `
        <div class="btn-group">
            <button type="button" (click)="onClick('all')" [class.active]="status ==='all'" class="btn btn-default">Show All</button>
            <button type="button" (click)="onClick('completed')" [class.active]="status ==='completed'" class="btn btn-default">Show Completed</button>
            <button type="button" (click)="onClick('uncompleted')" [class.active]="status ==='uncompleted'" class="btn btn-default">Show Uncompleted</button>
        </div>
    `
})
export class View {
    @Input() status: string;
    
    @Output() changeStatus = new EventEmitter();   

    onClick(status) {
        this.changeStatus.emit(status);
    }
}