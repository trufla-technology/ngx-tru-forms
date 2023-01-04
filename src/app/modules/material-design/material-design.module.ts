import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignComponent } from './material-design.component';
import {JsonFormFieldsService, JsonFormMaterialModule, JsonFormModule, JsonFormMaterial} from '@trufla/ngx-tru-forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: MaterialDesignComponent
  }
];
@NgModule({
  declarations: [MaterialDesignComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    JsonFormMaterialModule,
    {
      ngModule: JsonFormModule,
      providers: [
        {
          provide: JsonFormFieldsService,
          useClass: JsonFormMaterial,
          multi: true
        }
      ]
    }
  ],
})
export class MaterialDesignModule { }
