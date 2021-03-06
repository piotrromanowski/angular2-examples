import {Component} from 'angular2/core';
import { List } from './todo/list.component'
import { View } from './todo/view.component'
import { Detail } from './todo/detail.component'

@Component({
    selector: 'my-app',
    template: `<h1>Angular 2 TODO App</h1>
               <div class='container'>
                    <div class='row'>
                        <view (changeStatus)='changeStatus($event)' [status]='viewStatus'></view>                       
                    <div>
                    <div class='row'>
                        <div class='col-md-4'>
                            <list [todos]='filteredList()' (getDetails)='getDetails($event)' (onComplete)='onComplete($event)'></list>
                        </div>
                        <div class='col-md-6'>                          
                            <detail [todo]="activeTodo"></detail>
                        </div>
                    </div>
               </div>                     
    `,
    directives: [ List, View, Detail ]
})
export class AppComponent { 
    todos: TODO[] = [
        {'title': 'go shopping', 'complete': true, 'description': 'Get the following list of items 1. New Shirt for Formal 2. Get ingredients for chineese food'},
        {'title': 'go to gym', 'complete': false, 'description': 'Start on new workout routine. Perform the following exercies: Pushups (50), Squats, Bench, asaagsa'},
        {'title': 'Make sure to do the following', 'complete': false, 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}        
    ];
    activeTodo: TODO = null;
    viewStatus: string = 'all';
    
    filteredList() {
        if (this.viewStatus === 'all')
            return this.todos;
        return this.todos.map(todo => {
            if (this.viewStatus === 'completed' && todo.complete) {
                return todo;
            } else if (this.viewStatus === 'uncompleted' && !todo.complete) {
                return todo;
            }
        }).filter(todo => {
           return todo && Object.keys(todo).length !== 0;
        });
    }
    
    changeStatus(viewStatus) {
        this.viewStatus = viewStatus;
    }
    
    getDetails(todo) {
        this.activeTodo = todo;
    }
    
    onComplete(todo) {        
        this.todos = this.todos.map(item => {
            if (item === todo) todo.complete = !todo.complete;
            return item;
        })
    }
}

export class TODO {
    title: string;
    description: string;
    complete: boolean;
}