import {Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
import * as RandExp from 'randexp';
import { JsonFormFieldsService } from '../../services/fields.service';
import { Schema } from '../../models/schema';

@Component({
  selector: 'jf-field, [jf-field]',
  template: `
    <ng-template #container></ng-template>
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
  public schema: Schema;
  public patterns;

  constructor(public jsonFormFieldsService: JsonFormFieldsService, public el: ElementRef) {
    this.patterns = {};
  }

  ngOnInit() {
    this.schema = this.control.schema;
    this.jsonFormFieldsService.setRootViewContainerRef(this.container);
    this.jsonFormFieldsService.addDynamicComponent(this.control);
    this.el.nativeElement.className = `jf-field ${this.schema.key}`;
  }

  patternHelp(pattern) {
    if (this.patterns[pattern]) {
      return this.patterns[pattern];
    } else {
      this.patterns[pattern] = new RandExp(pattern).gen();
    }

    return this.patterns[pattern];
  }
}
