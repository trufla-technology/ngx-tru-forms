import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'jf-component-chooser',
  template: `
    <section>
      <div *ngFor="let control of keys(form.controls)" jf-field [control]="form.get(control)"></div>
    </section>
  `
})
export class ChooserComponent {
  @Input() form: FormGroup;
  @Input() schema: Object;
  keys = Object.keys;
}
