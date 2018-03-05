import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JsonFormModule } from '../json-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JfBuilderModule } from '../builder/jf-builder.module';
import { ExampleComponent } from './example.component';
var routes = [
    {
        path: '',
        component: ExampleComponent
    }
];
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule.forChild(routes),
                        JsonFormModule,
                        ReactiveFormsModule,
                        JfBuilderModule
                    ],
                    exports: [
                        RouterModule
                    ],
                    declarations: [ExampleComponent]
                },] },
    ];
    /** @nocollapse */
    ExampleModule.ctorParameters = function () { return []; };
    return ExampleModule;
}());
export { ExampleModule };
