import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonSchemaExamplesComponent } from './json-schema-examples.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormModule,
  JsonFormBootstrap4Module,
  JsonFormMaterialModule,
  JsonFormMaterial,
  JsonFormFieldsService } from '@trufla/ngx-tru-forms';
import { JsonSchemaExamplesSamples } from './json-schema-examples.samples';
import { InputColourComponent } from './input-colour/input-colour.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ColorPickerModule,
    JsonFormBootstrap4Module,
    JsonFormMaterialModule,
    {
      ngModule: JsonFormModule,
      providers: [
        {
          provide: JsonFormFieldsService,
          useClass: JsonFormMaterial,
          multi: true
        },
      ]
    }
  ],
  declarations: [
    JsonSchemaExamplesComponent
    ],
  providers: [
    JsonSchemaExamplesSamples,
    JsonFormMaterial
  ],
  exports: [
    JsonSchemaExamplesComponent
  ],
  entryComponents: [
    InputColourComponent
  ]
})
export class JsonSchemaExamplesModule { }

