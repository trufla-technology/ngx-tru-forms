import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
import {JsonFormFieldsService} from '../../framework/json-form-fields.service';

@Component({
  selector: 'jf-field, [jf-field]',
  template: `
    <ng-content></ng-content>
    <ng-container #container></ng-container>
  `
})

export class FieldComponent implements OnInit, OnChanges {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @Input() control: SchemaFormControl;
  public patterns;

  constructor(
    public jsonFormFieldsService: JsonFormFieldsService,
    public el: ElementRef
  ) {
    this.patterns = {};
  }

  ngOnInit() {
    this.generateField();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateField();
  }

  generateField() {
    this.container.clear();
    this.jsonFormFieldsService[0].setRootViewContainerRef(this.container);
    this.jsonFormFieldsService[0].addDynamicComponent(this.control);
    this.el.nativeElement.className = `field margin-bottom ${this.getClass()} form-group`;
  }

  getClass(defaultClass = '') {
    const fieldClass = [defaultClass];
    fieldClass.push(this.control.schema.type);
    fieldClass.push(this.control.schema.key);

    if (this.control.schema.hasOwnProperty('description')) {
      fieldClass.push('has-info');
    }

    if (this.control.style && this.control.style.default && ['radiogroup', 'checkboxgroup'].indexOf(this.control.schema.format) === -1) {
      fieldClass.push(this.control.style.default);
    }

    return fieldClass.filter((d) => d).join(' ');
  }
}
