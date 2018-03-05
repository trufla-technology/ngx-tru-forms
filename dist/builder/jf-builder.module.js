import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormComponent } from '../json-form.component';
import { JsonFormModule } from '../json-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JfBuilderComponent } from './jf-builder.component';
import { JfBuilderSamples } from './jf-builder.samples';
import { ColourPickerComponent } from './components/colour-picker/colour-picker.component';
var JfBuilderModule = /** @class */ (function () {
    function JfBuilderModule() {
    }
    JfBuilderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        JsonFormModule,
                        ReactiveFormsModule
                    ],
                    declarations: [
                        JfBuilderComponent,
                        ColourPickerComponent
                    ],
                    entryComponents: [
                        JsonFormComponent,
                        ColourPickerComponent
                    ],
                    exports: [
                        JfBuilderComponent
                    ],
                    providers: [
                        JfBuilderSamples
                    ]
                },] },
    ];
    /** @nocollapse */
    JfBuilderModule.ctorParameters = function () { return []; };
    return JfBuilderModule;
}());
export { JfBuilderModule };
