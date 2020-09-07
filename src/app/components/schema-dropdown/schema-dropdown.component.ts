import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { startCase } from 'lodash';
@Component({
  selector: 'app-schema-dropdown',
  templateUrl: './schema-dropdown.component.html',
  styleUrls: ['./schema-dropdown.component.css']
})
export class SchemaDropdownComponent implements OnInit {

  @Input() schemas: any;
  @Output() selectedSchemaChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  startCase(value: string): string {
    return startCase(value);
  }

  handleSelectedSchemaChange(e) {
    const selectedSchema = e.target.value;
    this.selectedSchemaChanged.emit(selectedSchema);
  }

}
