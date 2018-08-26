import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StringComponent } from '../../fields/string/string.component';
import { TextMaskModule } from 'angular2-text-mask';
import { JsonFormBootstrap4 } from './json-form-bootstrap4';
import { JsonFormFieldsService } from '../json-form-fields.service';
import { DateComponent } from '../../fields/date/date.component';
import { ErrorComponent } from '../../fields/error/error.component';
import { BooleanComponent } from '../../fields/boolean/boolean.component';
import { NumberComponent } from '../../fields/number/number.component';
import { SelectComponent } from '../../fields/select/select.component';
import { TextareaComponent } from '../../fields/textarea/textarea.component';
import { ButtonComponent } from '../../fields/button/button.component';
import { MoneyComponent } from '../../fields/money/money.component';
import { SharedModule } from '../shared/shared.module';
import { CheckboxgroupComponent } from '../../fields/checkboxgroup/checkboxgroup.component';
import { MultiselectComponent } from '../../fields/multiselect/multiselect.component';
import { PhotoComponent } from '../../fields/photo/photo.component';
import { RadiogroupComponent } from '../../fields/radiogroup/radiogroup.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule,
    SharedModule
  ],
  declarations: [
    StringComponent,
    SelectComponent,
    DateComponent,
    TextareaComponent,
    ErrorComponent,
    MoneyComponent,
    NumberComponent,
    BooleanComponent,
    ButtonComponent,
    CheckboxgroupComponent,
    MultiselectComponent,
    PhotoComponent,
    RadiogroupComponent
  ],
  entryComponents: [
    StringComponent,
    SelectComponent,
    DateComponent,
    TextareaComponent,
    ErrorComponent,
    MoneyComponent,
    NumberComponent,
    BooleanComponent,
    ButtonComponent,
    CheckboxgroupComponent,
    MultiselectComponent,
    PhotoComponent,
    RadiogroupComponent
  ]
})

export class JsonFormBootstrap4Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JsonFormBootstrap4Module,
      providers: [
        {
          provide: JsonFormFieldsService,
          useClass: JsonFormBootstrap4,
          multi: true
        }
      ]
    };
  }
}

