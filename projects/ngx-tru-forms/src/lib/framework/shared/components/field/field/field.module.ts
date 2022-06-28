import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from '../field.component';


@NgModule({
  declarations: [FieldComponent],
  imports: [
    CommonModule
  ],
  exports: [FieldComponent]
})
export class FieldModule { }
