import { Component, Input } from '@angular/core';
import { CommonComponent } from '../../common/common.component';
@Component({
  selector: 'jf-tru-ui-error',
  templateUrl: './tru-ui-error.component.html',
  styleUrls: ['./tru-ui-error.component.css']
})
export class TruUiErrorComponent  extends CommonComponent {
  @Input() control;
}
