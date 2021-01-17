import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

@Component({
  selector: 'jf-tru-ui-autocomplete',
  templateUrl: './tru-ui-autocomplete.component.html',
  styleUrls: ['../../../assets/tru-ui.css']
})
export class TruUiAutocompleteComponent extends CommonComponent implements OnInit  {
  selectedValue = '';
  selectedOption: any;
  values = [];
  ngOnInit() {
    if (this.schema.enumNames) {
      this.values = [];
      this.schema.enum.map((enm, i) => {
        if (Array.isArray(this.schema.enumNames[i])) { 
        this.values.push({enum: enm, enumName: this.getTranslation(this.schema.enumNames[i])});
         } else {
        this.values.push({enum: enm, enumName: this.schema.enumNames[i]});
      }
      });
    } else {
      this.values = [];
      this.schema.enum.map((enm) => {
        this.values.push({enum: enm, enumName: enm});
      });

    }
  }
  typeaheadNoResults() {
      if ( this.selectedValue !== '' ) {
      let searchValue = [];
      searchValue = this.schema.enumNames ? this.values.filter((en) => en.enumName === this.selectedValue) :
      this.values.filter((en) => en.enum === this.selectedValue);
      searchValue.length ? this.setValue(searchValue[0].enum) : this.control.setErrors({notInMenu: 'invalid'});
    } else {
      this.control.setErrors(null);
      this.control.setValue('');
    }
  }
  onSelect(event: TypeaheadMatch): void {
    this.typeaheadNoResults();
  }

  setValue(value) {
    this.control.setValue(value);
    this.control.setErrors(null);
  }
}
