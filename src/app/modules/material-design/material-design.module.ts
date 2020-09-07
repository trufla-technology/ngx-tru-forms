import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignComponent } from './material-design.component';
import {JsonFormFieldsService, JsonFormMaterialModule, JsonFormModule, JsonFormMaterial} from '@trufla/ngx-tru-forms';
import {RouterModule, Routes} from '@angular/router';


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
    // JsonFormModule.forRoot(JsonFormMaterialModule),
  ],
  // exports: [MaterialDesignComponent]
})
export class MaterialDesignModule { }
