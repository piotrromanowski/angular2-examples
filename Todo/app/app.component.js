System.register(['angular2/core', './todo/list.component', './todo/view.component', './todo/detail.component'], function(exports_1, context_1) {
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
    var core_1, list_component_1, view_component_1, detail_component_1;
    var AppComponent, TODO;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (detail_component_1_1) {
                detail_component_1 = detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.todos = [
                        { 'title': 'go shopping', 'complete': true, 'description': 'Get the following list of items 1. New Shirt for Formal 2. Get ingredients for chineese food' },
                        { 'title': 'go to gym', 'complete': false, 'description': 'Start on new workout routine. Perform the following exercies: Pushups (50), Squats, Bench, asaagsa' },
                        { 'title': 'Make sure to do the following', 'complete': false, 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
                    ];
                    this.activeTodo = null;
                    this.viewStatus = 'all';
                }
                AppComponent.prototype.filteredList = function () {
                    var _this = this;
                    if (this.viewStatus === 'all')
                        return this.todos;
                    return this.todos.map(function (todo) {
                        if (_this.viewStatus === 'completed' && todo.complete) {
                            return todo;
                        }
                        else if (_this.viewStatus === 'uncompleted' && !todo.complete) {
                            return todo;
                        }
                    }).filter(function (todo) {
                        return todo && Object.keys(todo).length !== 0;
                    });
                };
                AppComponent.prototype.changeStatus = function (viewStatus) {
                    this.viewStatus = viewStatus;
                };
                AppComponent.prototype.getDetails = function (todo) {
                    this.activeTodo = todo;
                };
                AppComponent.prototype.onComplete = function (todo) {
                    this.todos = this.todos.map(function (item) {
                        if (item === todo)
                            todo.complete = !todo.complete;
                        return item;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>Angular 2 TODO App</h1>\n               <div class='container'>\n                    <div class='row'>\n                        <view (changeStatus)='changeStatus($event)' [status]='viewStatus'></view>                       \n                    <div>\n                    <div class='row'>\n                        <div class='col-md-4'>\n                            <list [todos]='filteredList()' (getDetails)='getDetails($event)' (onComplete)='onComplete($event)'></list>\n                        </div>\n                        <div class='col-md-6'>                          \n                            <detail [todo]=\"activeTodo\"></detail>\n                        </div>\n                    </div>\n               </div>                     \n    ",
                        directives: [list_component_1.List, view_component_1.View, detail_component_1.Detail]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            TODO = (function () {
                function TODO() {
                }
                return TODO;
            }());
            exports_1("TODO", TODO);
        }
    }
});
//# sourceMappingURL=app.component.js.map