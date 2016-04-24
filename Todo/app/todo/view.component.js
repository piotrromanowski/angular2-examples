System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var View;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            View = (function () {
                function View() {
                    this.changeStatus = new core_1.EventEmitter();
                }
                View.prototype.onClick = function (status) {
                    this.changeStatus.emit(status);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], View.prototype, "status", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], View.prototype, "changeStatus", void 0);
                View = __decorate([
                    core_1.Component({
                        selector: 'view',
                        template: "\n        <div class=\"btn-group\">\n            <button type=\"button\" (click)=\"onClick('all')\" [class.active]=\"status ==='all'\" class=\"btn btn-default\">Show All</button>\n            <button type=\"button\" (click)=\"onClick('completed')\" [class.active]=\"status ==='completed'\" class=\"btn btn-default\">Show Completed</button>\n            <button type=\"button\" (click)=\"onClick('uncompleted')\" [class.active]=\"status ==='uncompleted'\" class=\"btn btn-default\">Show Uncompleted</button>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], View);
                return View;
            }());
            exports_1("View", View);
        }
    }
});
//# sourceMappingURL=view.component.js.map