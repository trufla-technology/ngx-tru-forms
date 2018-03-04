import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { JsonFormComponent } from './json-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChooserComponent } from './components/chooser/chooser.component';
import { SelectComponent } from './fields/select/select.component';
import { StringComponent } from './fields/string/string.component';
import { NumberComponent } from './fields/number/number.component';
import { BooleanComponent } from './fields/boolean/boolean.component';
import { FieldComponent } from './components/field/field.component';
import { PhotoComponent } from './fields/photo/photo.component';
import { JsonFormDefaultsService } from './services/defaults.service';
import { JsonFormFieldsService } from './services/fields.service';
import { JsonFormValidatorsService } from './services/validators.service';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { ObjectComponent } from './fields/object/object.component';
import { ArrayComponent } from './fields/array/array.component';
import { CheckboxgroupComponent } from './fields/checkboxgroup/checkboxgroup.component';
import { RadiogroupComponent } from './fields/radiogroup/radiogroup.component';
import { InfoButtonComponent } from './components/info-button/info-button.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    JsonFormComponent,
    SelectComponent,
    ChooserComponent,
    StringComponent,
    FieldComponent,
    NumberComponent,
    BooleanComponent,
    PhotoComponent,
    TextareaComponent,
    ObjectComponent,
    ArrayComponent,
    CheckboxgroupComponent,
    RadiogroupComponent,
    InfoButtonComponent
  ],
  exports: [
    JsonFormComponent
  ],
  entryComponents: [
    StringComponent,
    SelectComponent,
    NumberComponent,
    BooleanComponent,
    PhotoComponent,
    TextareaComponent,
    ObjectComponent,
    ArrayComponent,
    RadiogroupComponent,
    CheckboxgroupComponent,
    JsonFormComponent
  ],
  providers: [
    JsonFormDefaultsService,
    JsonFormFieldsService,
    JsonFormValidatorsService
  ]
})
export class JsonFormModule { }
