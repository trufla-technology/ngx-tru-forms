import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonSchemaExamplesComponent } from './json-schema-examples.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormModule, JsonFormBootstrap4Module, JsonFormMaterialModule, JsonFormMaterial } from '@trufla/ngx-tru-forms';
import { JsonSchemaExamplesSamples } from './json-schema-examples.samples';
import { InputColourComponent } from './input-colour/input-colour.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { PastebinService } from '../services/pastebin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonFormBootstrap4Module,
    JsonFormMaterialModule,
    JsonFormModule.forRoot(JsonFormMaterialModule),
    JsonFormModule.forRoot(JsonFormBootstrap4Module),
    ColorPickerModule,
    HttpClientModule
  ],
  declarations: [
    JsonSchemaExamplesComponent,
    InputColourComponent
  ],
  providers: [
    JsonSchemaExamplesSamples,
    JsonFormMaterial,
    PastebinService
  ],
  exports: [
    JsonSchemaExamplesComponent
  ],
  entryComponents: [
    InputColourComponent
  ]
})
export class JsonSchemaExamplesModule { }

