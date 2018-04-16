import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonSchemaExamplesComponent } from './json-schema-examples.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormFieldsService, JsonFormModule } from 'angular-json-form';
import { JsonSchemaExamplesSamples } from './json-schema-examples.samples';
import { InputColourComponent } from './input-colour/input-colour.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonFormModule,
    ColorPickerModule
  ],
  declarations: [
    JsonSchemaExamplesComponent,
    InputColourComponent
  ],
  providers: [
    JsonSchemaExamplesSamples,
    JsonFormFieldsService
  ],
  exports: [
    JsonSchemaExamplesComponent
  ],
  entryComponents: [
    InputColourComponent
  ]
})
export class JsonSchemaExamplesModule { }
