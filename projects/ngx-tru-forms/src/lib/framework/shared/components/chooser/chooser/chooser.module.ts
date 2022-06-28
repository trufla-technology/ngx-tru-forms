import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooserComponent } from '../chooser.component';
import { FieldModule } from '../../field/field/field.module';


@NgModule({
  declarations: [ChooserComponent],
  imports: [
    CommonModule,
    FieldModule
  ],
  exports: [ChooserComponent]
})
export class ChooserModule { }

