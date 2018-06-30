import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StringComponent } from '../../fields/string/string.component';
import { TextMaskModule } from 'angular2-text-mask';
import { JsonFormBootstrap4 } from './json-form-bootstrap4';
import { JsonFormFieldsService } from '../json-form-fields.service';

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
