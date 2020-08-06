import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'jf-tru-ui-checkboxgroup',
  templateUrl: './tru-ui-checkboxgroup.component.html',
  styleUrls: ['../../../assets/tru-ui.css']
})
export class TruUiCheckboxgroupComponent extends CommonComponent {
  checkboxGroupValues = [];

  setValue(event, index) {
    if (this.checkboxGroupValues.length === 0) {
      this.checkboxGroupValues = new Array(this.control['controls'].length).fill(null);
    }

    if (this.checkboxGroupValues[index] === null) {
      event.target.value = this.schema.enum[index];
      this.checkboxGroupValues[index] = event.target.value;
    } else {
      this.checkboxGroupValues[index] = null;
    }

    this.control.setValue(this.checkboxGroupValues);
  }

  getId(key, val) {
    return `${key}-${val.toString()}`;
  }
}
