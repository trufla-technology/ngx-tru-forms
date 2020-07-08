import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
  <p><span>{{placeholder()}}</span> <span style="white-space: pre-wrap;">{{ formatString(control.value) }}</span></p>
  `
})
export class TextareaViewComponent extends CommonComponent {
  formatString(str) {
    // handle how android app sends line breaks in the text area...
    return str.replace(/&lt;br&gt;/g, '\n');
  }
}

