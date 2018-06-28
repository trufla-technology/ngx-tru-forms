import {ModuleWithProviders, NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChooserComponent } from '../../components/chooser/chooser.component';
import { SelectComponent } from '../../fields/select/select.component';
import { StringComponent } from '../../fields/string/string.component';
import { NumberComponent } from '../../fields/number/number.component';
import { BooleanComponent } from '../../fields/boolean/boolean.component';
import { FieldComponent } from '../../components/field/field.component';
import { PhotoComponent } from '../../fields/photo/photo.component';
import { JsonFormDefaultsService } from '../../services/defaults.service';
import { JsonFormFieldsService } from '../../services/fields.service';
import { JsonFormValidatorsService } from '../../services/validators.service';
import { TextareaComponent } from '../../fields/textarea/textarea.component';
import { ObjectComponent } from '../../fields/object/object.component';
import { ArrayComponent } from '../../fields/array/array.component';
import { CheckboxgroupComponent } from '../../fields/checkboxgroup/checkboxgroup.component';
import { RadiogroupComponent } from '../../fields/radiogroup/radiogroup.component';
import { MultiselectComponent } from '../../fields/multiselect/multiselect.component';
import { MoneyComponent } from '../../fields/money/money.component';
import { FormButtonComponent } from '../../components/form-button/form-button.component';
import { WorkingSpinnerComponent } from '../../components/working-spinner/working-spinner.component';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { TextMaskModule } from 'angular2-text-mask';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringMaterialComponent } from '../../fields/string/string.material.component';
import {JsonFormMaterial} from "./json-form-material";
import {Framework} from "../framework";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    StringMaterialComponent
  ],
  entryComponents: [
    StringMaterialComponent
  ],
  exports: [
    StringMaterialComponent
  ]
})

export class JsonFormMaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JsonFormMaterialModule,
      providers: [
        { provide: Framework, useClass: JsonFormMaterial, multi: true }
      ]
    };
  }
}
