import { ModuleWithProviders, NgModule } from '@angular/core';
import { JsonFormComponent } from './json-form.component';
import { JsonFormDefaultsService } from './services/defaults.service';
import { JsonFormValidatorsService } from './services/validators.service';
import { CommonComponent } from './fields/common/common.component';
import { JsonFormBootstrap4 } from './framework/bootstrap4/json-form-bootstrap4';
import { JsonFormFieldsService } from './framework/json-form-fields.service';
import { SharedModule } from './framework/shared/shared.module';
import { DepthService } from './services/depth.service';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    JsonFormComponent,
    CommonComponent
  ],
  entryComponents: [
    JsonFormComponent,
  ],
  providers: [
    DepthService,
    JsonFormDefaultsService,
    JsonFormValidatorsService
  ]
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
