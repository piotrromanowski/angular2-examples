System.register(['angular2/core', '../app.component', './pipes/summary.pipe'], function(exports_1, context_1) {
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
    var core_1, app_component_1, summary_pipe_1;
    var Item;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            Item = (function () {
                function Item() {
                    this.onComplete = new core_1.EventEmitter();
                }
                Item.prototype.onCheck = function ($event) {
                    this.onComplete.emit(this.todo);
                    $event.stopPropagation();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', app_component_1.TODO)
                ], Item.prototype, "todo", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Item.prototype, "onComplete", void 0);
                Item = __decorate([
                    core_1.Component({
                        selector: 'item',
                        template: "\n        <i \n            class='glyphicon'\n            [class.glyphicon-check]='todo.complete' \n            [class.glyphicon-unchecked]='!todo.complete'\n            (click)=\"onCheck($event)\" \n        ></i>\n        <h4> {{ todo.title }} </h4>\n        <p> {{ todo.description | summary }} </p>\n    ",
                        pipes: [summary_pipe_1.Summary]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Item);
                return Item;
            }());
            exports_1("Item", Item);
        }
    }
});
//# sourceMappingURL=item.component.js.map