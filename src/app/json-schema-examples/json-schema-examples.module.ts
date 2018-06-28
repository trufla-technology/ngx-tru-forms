import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonSchemaExamplesComponent } from './json-schema-examples.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormFieldsService, JsonFormModule, JsonFormBootstrapModule, JsonFormMaterialModule } from '@trufla/ngx-tru-forms';
import { JsonSchemaExamplesSamples } from './json-schema-examples.samples';
import { InputColourComponent } from './input-colour/input-colour.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonFormBootstrapModule,
    JsonFormMaterialModule,
    JsonFormModule.forRoot(JsonFormBootstrapModule),
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
