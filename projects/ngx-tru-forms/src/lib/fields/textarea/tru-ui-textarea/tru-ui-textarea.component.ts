import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';
@Component({
  selector: 'jf-tru-ui-textarea',
  templateUrl: './tru-ui-textarea.component.html',
  styleUrls: ['../../../assets/tru-ui.css']
})
export class TruUiTextareaComponent extends CommonComponent {
  randomSuffix = Math.random().toString(36).substring(7);

  getId(i, val) {
    return `${i}-${val.toString().replace(/[\W_]+/g, '')}+${this.randomSuffix}`;
  }

  getName(key) {
    return `${key}-${this.randomSuffix}`;
  }
}
