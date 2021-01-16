import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonSchemaExamplesComponent } from './json-schema-examples.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormModule, JsonFormBootstrap4Module, JsonFormMaterialModule, JsonFormMaterial } from '@trufla/ngx-tru-forms';
import { JsonSchemaExamplesSamples } from './json-schema-examples.samples';
import { InputColourComponent } from './input-colour/input-colour.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonFormBootstrap4Module,
    JsonFormMaterialModule,
    // JsonFormModule.forRoot(JsonFormMaterialModule),
    {
      ngModule: JsonFormModule,
      providers: [
        {
          provide: JsonFormMaterialModule,
          useClass: JsonFormMaterialModule,
          multi: true
        },
      ]
    },
    ColorPickerModule
  ],
  declarations: [
    JsonSchemaExamplesComponent,
    InputColourComponent
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

