import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruUiComponent } from './tru-ui.component';
import { Routes, RouterModule } from '@angular/router';
import { JsonFormModule, TruUiModule, JsonFormFieldsService, TruUi } from '@trufla/ngx-tru-forms';


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

  ]
})
export class TruUiModuleExample { }
