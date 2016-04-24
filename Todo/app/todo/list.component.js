System.register(['angular2/core', './item.component'], function(exports_1, context_1) {
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
    var core_1, item_component_1;
    var List;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            }],
        execute: function() {
            List = (function () {
                function List() {
                    this.onComplete = new core_1.EventEmitter();
                    this.getDetails = new core_1.EventEmitter();
                }
                List.prototype.onCheck = function (todo) {
                    this.onComplete.emit(todo);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], List.prototype, "todos", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], List.prototype, "onComplete", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], List.prototype, "getDetails", void 0);
                List = __decorate([
                    core_1.Component({
                        selector: 'list',
                        template: "\n        <ul class='list-group'>\n            <li *ngFor=\"#todo of todos\" (click)='getDetails.emit(todo)' class=\"list-group-item\">\n                <item [todo]='todo' (onComplete)=\"onCheck(todo)\"></item>\n            </li>\n        </ul>\n    ",
                        directives: [item_component_1.Item]
                    }), 
                    __metadata('design:paramtypes', [])
                ], List);
                return List;
            }());
            exports_1("List", List);
        }
    }
});
//# sourceMappingURL=list.component.js.map