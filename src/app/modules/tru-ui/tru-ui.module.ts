import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruUiComponent } from './tru-ui.component';
import { Routes, RouterModule } from '@angular/router';
import { JsonFormModule, TruUiModule, JsonFormFieldsService, TruUi } from '@trufla/ngx-tru-forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TruUiComponent
  }
];

@NgModule({
  declarations: [TruUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    JsonFormModule,
    TruUiModule,
    {
      ngModule: JsonFormModule,
      providers: [
        {
          provide: JsonFormFieldsService,
          useClass: TruUi,
          multi: true
        }
      ]
    }

  ],
  entryComponents: []
})
export class TruUiModuleExample { }
