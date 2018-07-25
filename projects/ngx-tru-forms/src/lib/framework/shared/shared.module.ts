import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChooserComponent} from './components/chooser/chooser.component';
import {FieldComponent} from './components/field/field.component';
import {FormButtonComponent} from './components/form-button/form-button.component';
import {InfoButtonComponent} from './components/info-button/info-button.component';
import {WorkingSpinnerComponent} from './components/working-spinner/working-spinner.component';
import {TextareaViewComponent} from '../../fields/textarea/textarea.view.component';
import {RadiogroupViewComponent} from '../../fields/radiogroup/radiogroup.view.component';
import {SelectViewComponent} from '../../fields/select/select.view.component';
import {DateViewComponent} from '../../fields/date/date.view.component';
import {BooleanViewComponent} from '../../fields/boolean/boolean.view.component';
import {PhotoViewComponent} from '../../fields/photo/photo.view.component';
import {StringViewComponent} from '../../fields/string/string.view.component';
import {NumberViewComponent} from '../../fields/number/number.view.component';
import {CheckboxgroupViewComponent} from '../../fields/checkboxgroup/checkboxgroup.view.component';
import {ObjectComponent} from '../../fields/object/object.component';
import {MoneyViewComponent} from '../../fields/money/money.view.component';
import {MultiselectViewComponent} from '../../fields/multiselect/multiselect.view.component';
import {JsonFormComponent} from '../../json-form.component';
import {CommonComponent} from '../../fields/common/common.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  declarations: [
    JsonFormComponent,
    CommonComponent,
    ChooserComponent,
    FieldComponent,
    FormButtonComponent,
    InfoButtonComponent,
    WorkingSpinnerComponent,
    StringViewComponent,
    SelectViewComponent,
    NumberViewComponent,
    BooleanViewComponent,
    PhotoViewComponent,
    TextareaViewComponent,
    DateViewComponent,
    RadiogroupViewComponent,
    CheckboxgroupViewComponent,
    MultiselectViewComponent,
    MoneyViewComponent,
    ObjectComponent
  ],
  exports: [
    ChooserComponent,
    FieldComponent,
    FormButtonComponent,
    InfoButtonComponent,
    WorkingSpinnerComponent,
    JsonFormComponent,
    CommonComponent
  ]
})

export class SharedModule {}
