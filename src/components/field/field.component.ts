import {Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
import * as RandExp from 'randexp';
import { JsonFormFieldsService } from '../../services/fields.service';
import { Schema } from '../../models/schema';

@Component({
  selector: 'jf-field, [jf-field]',
  template: `
    <ng-container #container></ng-container>
    <div *ngIf="control.invalid && (control.dirty || control.touched)" class="has-danger">
      <div *ngIf="control.errors && control.errors['required']">
        This field is required.
      </div>
      <div *ngIf="control.errors && control.errors['pattern']">
        Please enter a valid value, for example {{patternHelp(control.errors['pattern']['requiredPattern'])}}.
      </div>
      <div *ngIf="control.errors && control.errors['minlength']">
        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters.
      </div>
      <div *ngIf="control.errors && control.errors['maxlength']">
        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters.
      </div>
      <div *ngIf="control.errors && control.errors['min']">
        Enter a value greater then {{control.errors['min']['min']}}.
      </div>
      <div *ngIf="control.errors && control.errors['max']">
        Enter a value less then {{control.errors['max']['max']}}.
      </div>
    </div>
  `
})
export class FieldComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;
  @Input()
  public control: SchemaFormControl;
  public patterns;

  constructor(public jsonFormFieldsService: JsonFormFieldsService, public el: ElementRef) {
    this.patterns = {};
  }

  ngOnInit() {
    this.jsonFormFieldsService.setRootViewContainerRef(this.container);
    this.jsonFormFieldsService.addDynamicComponent(this.control);
    this.el.nativeElement.className = `field margin-bottom ${this.control.schema.key} ${this.getClass()}`;
  }

  patternHelp(pattern) {
    if (this.patterns[pattern]) {
      return this.patterns[pattern];
    } else {
      this.patterns[pattern] = new RandExp(pattern).gen();
    }

    return this.patterns[pattern];
  }

  getClass(defaultClass = '') {
    if (this.control.schema.hasOwnProperty('description')) {
      defaultClass = defaultClass + ' has-info';
    }

    // if the format is present do not assign class top level style. enums like radio and checkbox may
    // have their own
    if (this.control.schema.hasOwnProperty('enum') === true
        && this.control.schema.hasOwnProperty('format') === true) {
      return defaultClass;
    }

    return this.control.style.hasOwnProperty('default')
        ? this.control.style.default : (defaultClass || '');
  }
}
