import { Component } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'jf-tru-ui-autocomplete',
  templateUrl: './tru-ui-autocomplete.component.html',
  styleUrls: ['../../../assets/tru-ui.css']
})
export class TruUiAutocompleteComponent extends CommonComponent {
  typeaheadNoResults() {
    if ( this.control.value !== '' ) {
    let searchValue = [];
    searchValue = this.schema.enum.filter((en) => en === this.control.value);
    searchValue.length !== 0 ? this.control.setErrors(null) : this.control.setErrors({notInMenu: 'invalid'});
  } else {
    this.control.setErrors(null);
  }
  }
}
