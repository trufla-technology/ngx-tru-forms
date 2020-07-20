import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormFieldsService } from '../json-form-fields.service';
import { SharedModule } from '../shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TruUi } from './tru-ui'
import { TruUiButtonComponent } from '../../fields/button/tru-ui-button/tru-ui-button.component';
import { TruUiStringComponent } from '../../fields/string/tru-ui-string/tru-ui-string.component';
import { TextMaskModule } from 'angular2-text-mask';
import { TruUiErrorComponent } from '../../fields/error/tru-ui-error/tru-ui-error.component';
import { TruUiPhotoComponent } from '../../fields/photo/tru-ui-photo/tru-ui-photo.component';
@NgModule({
  declarations: [TruUiButtonComponent, TruUiStringComponent, TruUiErrorComponent, TruUiPhotoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TextMaskModule,
    BsDatepickerModule.forRoot()
  ],
  entryComponents: [TruUiButtonComponent, TruUiStringComponent, TruUiErrorComponent, TruUiPhotoComponent],
  exports: [TruUiButtonComponent, TruUiStringComponent, TruUiErrorComponent, TruUiPhotoComponent]
})
export class TruUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TruUiModule,
      providers: [
        {
          provide: JsonFormFieldsService,
          useClass: TruUi,
          multi: true
        }
      ]
    };
  }
 }
