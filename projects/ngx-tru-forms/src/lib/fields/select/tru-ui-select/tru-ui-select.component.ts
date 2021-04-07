import { Component } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'jf-tru-ui-select',
  templateUrl: './tru-ui-select.component.html',
  styleUrls: ['../../../assets/tru-ui.css']
})
export class TruUiSelectComponent extends CommonComponent {
  // workaround for select losing focus after selecting an option and ruin tabindex order
  returnFocus(e) {
    setTimeout(() => {
     const select = document.getElementById(this.schema.key);
     if (select) {
       select.focus();
     }
    }, 100);
  }
}
