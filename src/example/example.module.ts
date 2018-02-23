import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JsonFormModule} from '../json-form.module';
import {ReactiveFormsModule} from '@angular/forms';
import { JfBuilderModule} from '../builder/jf-builder.module';
import {ExampleComponent} from './example.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    JsonFormModule,
    ReactiveFormsModule,
    JfBuilderModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [ExampleComponent]
})
export class ExampleModule { }
