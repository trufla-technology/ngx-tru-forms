import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormComponent } from './json-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChooserComponent } from './components/chooser/chooser.component';
import { SelectComponent } from './fields/select/select.component';
import { NumberComponent } from './fields/number/number.component';
import { FieldComponent } from './components/field/field.component';
import { PhotoComponent } from './fields/photo/photo.component';
import { JsonFormDefaultsService } from './services/defaults.service';
import { JsonFormValidatorsService } from './services/validators.service';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { ObjectComponent } from './fields/object/object.component';
import { ArrayComponent } from './fields/array/array.component';
import { CheckboxgroupComponent } from './fields/checkboxgroup/checkboxgroup.component';
import { RadiogroupComponent } from './fields/radiogroup/radiogroup.component';
import { CommonComponent } from './fields/common/common.component';
import { TextMaskModule } from 'angular2-text-mask';
import { MultiselectComponent } from './fields/multiselect/multiselect.component';
import { MoneyComponent } from './fields/money/money.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { WorkingSpinnerComponent } from './components/working-spinner/working-spinner.component';
import { JsonFormBootstrap4 } from './framework/bootstrap4/json-form-bootstrap4';
import { JsonFormFieldsService } from './framework/json-form-fields.service';
import { ButtonComponent } from './fields/button/button.component';
import { StringViewoComponent } from './fields/string/string.view.component';
import { NumberViewComponent } from './fields/number/number.view.component';
import { SelectViewComponent } from './fields/select/select.view.component';
import { BooleanViewComponent } from './fields/boolean/boolean.view.component';
import { PhotoViewComponent } from './fields/photo/photo.view.component';
import { TextareaViewComponent } from './fields/textarea/textarea.view.component';
import { DateViewComponent } from './fields/date/date.view.component';
import { CheckboxgroupViewComponent } from './fields/checkboxgroup/checkboxgroup.view.component';
import { RadiogroupViewComponent } from './fields/radiogroup/radiogroup.view.component';
import { MoneyViewComponent } from './fields/money/money.view.component';
import { MultiselectViewComponent } from './fields/multiselect/multiselect.view.component';

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  declarations: [
    JsonFormComponent,
    ChooserComponent,
    FieldComponent,
    PhotoComponent,
    ObjectComponent,
    ArrayComponent,
    CheckboxgroupComponent,
    RadiogroupComponent,
    CommonComponent,
    MultiselectComponent,
    FormButtonComponent,
    WorkingSpinnerComponent,
    StringViewoComponent,
    NumberViewComponent,
    SelectViewComponent,
    BooleanViewComponent,
    PhotoViewComponent,
    TextareaViewComponent,
    DateViewComponent,
    CheckboxgroupViewComponent,
    RadiogroupViewComponent,
    MoneyViewComponent,
    MultiselectViewComponent,
    MoneyViewComponent
  ],
  exports: [
    JsonFormComponent,
    CommonComponent
  ],
  entryComponents: [
    PhotoComponent,
    ObjectComponent,
    ArrayComponent,
    RadiogroupComponent,
    CheckboxgroupComponent,
    JsonFormComponent,
    MultiselectComponent,
    StringViewoComponent,
    NumberViewComponent,
    SelectViewComponent,
    BooleanViewComponent,
    PhotoViewComponent,
    TextareaViewComponent,
    DateViewComponent,
    CheckboxgroupViewComponent,
    RadiogroupViewComponent,
    MoneyViewComponent,
    MultiselectViewComponent,
    MoneyViewComponent
  ],
  providers: [
    JsonFormDefaultsService,
    JsonFormValidatorsService
  ]
})

export class JsonFormModule {
  static forRoot(...frameworks): ModuleWithProviders {
    const loadFramework = frameworks.length
      ? frameworks.map(framework => framework.forRoot().providers[0])
      : [{ provide: JsonFormFieldsService, useClass: JsonFormBootstrap4, multi: true }];

    return {
      ngModule: JsonFormModule,
      providers: [
        JsonFormDefaultsService,
        JsonFormValidatorsService,
        ...loadFramework
      ]
    };
  }
}
