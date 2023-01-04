import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from './bootstrap.component';
import {
  JsonFormBootstrap4,
  JsonFormBootstrap4Module,
  JsonFormFieldsService,
  JsonFormMaterial,
  JsonFormMaterialModule,
  JsonFormModule
} from '@trufla/ngx-tru-forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: BootstrapComponent
  }
];

@NgModule({
  declarations: [BootstrapComponent],
  imports: [
    CommonModule,
    JsonFormBootstrap4Module,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    // JsonFormModule.forRoot(JsonFormBootstrap4Module),
     {
      ngModule: JsonFormModule,
      providers: [
        {
          provide: JsonFormFieldsService,
          useClass: JsonFormBootstrap4,
          multi: true
        }
      ]
    }
  ],
  exports: [BootstrapComponent]
})
export class BootstrapModule { }
