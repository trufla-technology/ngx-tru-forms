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
import {JsonFormBootstrap} from "./json-form-bootstrap";
import {JsonFormMaterialModule} from "../material/json-form-material.module";
import {JsonFormMaterial} from "../material/json-form-material";
import {Framework} from "../framework";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [
    StringComponent
  ],
  entryComponents: [
    StringComponent
  ]
})

export class JsonFormBootstrapModule {
  static forRoot(): ModuleWithProviders {
    console.log('in root of bootstrap');
    return {
      ngModule: JsonFormBootstrapModule,
      providers: [
        {
          provide: Framework,
          useClass: JsonFormBootstrap,
          multi: true
        }
      ]
    };
  }
}
