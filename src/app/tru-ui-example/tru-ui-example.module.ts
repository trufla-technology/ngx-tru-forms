import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormModule, TruUiModule, JsonFormBootstrap4Module } from '@trufla/ngx-tru-forms';
import { TruUiFormComponent } from './tru-ui-form/tru-ui-form.component';



@NgModule({
  declarations: [TruUiFormComponent],
  imports: [
    CommonModule,
    TruUiModule,
    JsonFormModule.forRoot(TruUiModule),
  ],
  entryComponents: [TruUiFormComponent],
  exports: [TruUiFormComponent]
})
export class TruUiExampleModule { }
