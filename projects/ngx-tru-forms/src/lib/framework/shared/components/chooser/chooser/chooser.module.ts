import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChooserComponent } from "../chooser.component";
import { FieldModule } from "../../field/field/field.module";
import { TooltipModule } from "ng2-tooltip-directive";

@NgModule({
  declarations: [ChooserComponent],
  imports: [CommonModule, FieldModule, TooltipModule],
  exports: [ChooserComponent],
})
export class ChooserModule {}
