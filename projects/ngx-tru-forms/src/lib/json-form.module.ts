import { ModuleWithProviders, NgModule } from '@angular/core';
import { JsonFormComponent } from './json-form.component';
import { JsonFormDefaultsService } from './services/defaults.service';
import { JsonFormValidatorsService } from './services/validators.service';
import { CommonComponent } from './fields/common/common.component';
import { JsonFormBootstrap4 } from './framework/bootstrap4/json-form-bootstrap4';
import { JsonFormFieldsService } from './framework/json-form-fields.service';
import { SharedModule } from './framework/shared/shared.module';
import { CommonModule } from '@angular/common';
import {ValidationFeedbackTranslation} from './fields/error/validation-feedback-translation';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  exports: [
    CommonComponent,
    JsonFormComponent
  ],
  entryComponents: [
    JsonFormComponent
  ],
  providers: [
    JsonFormDefaultsService,
    JsonFormValidatorsService,
    ValidationFeedbackTranslation,
    NgxImageCompressService
  ],
  declarations: []
})

export class JsonFormModule {
  static forRoot(...frameworks): ModuleWithProviders {
    const loadFramework = frameworks.length
      ? frameworks.map(framework => framework.forRoot().providers[0])
      : [{ provide: JsonFormFieldsService, useClass: JsonFormBootstrap4, multi: true }];

    return {
      ngModule: JsonFormModule,
      providers: [
        JsonFormDefaultsService,
        JsonFormValidatorsService,
        ...loadFramework
      ]
    };
  }
}
