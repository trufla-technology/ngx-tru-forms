import { Component } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'jf-tru-ui-autocomplete',
  templateUrl: './tru-ui-autocomplete.component.html',
  styleUrls: ['../../../assets/tru-ui.css']
})
export class TruUiAutocompleteComponent extends CommonComponent {
  typeaheadNoResults() {
    if(this.control.value !== '') {
    let searchValue = [];
    console.log(this.control.isRequired, this.schema)
    searchValue = this.schema.enum.filter((en) => en === this.control.value);
    console.log(searchValue)
    searchValue.length !== 0 ? this.control.setErrors(null) : this.control.setErrors({notInMenu:'invalid'});
    console.log(this.control.errors)
  } else {
    this.control.setErrors(null);
  }
  }
}
