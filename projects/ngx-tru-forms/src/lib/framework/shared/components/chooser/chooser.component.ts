import { Component, Input } from '@angular/core';
import { SchemaFormGroup } from '../../../../models/schema-form-group';
import { Schema } from '../../../../models/schema';
import { startCase } from 'lodash';

@Component({
  selector: 'jf-component-chooser, [jf-component-chooser]',
  template: `
  <div style="margin-bottom: 20px">
    <h2 style="color: #8C8C8C;font-size:16px" *ngIf="schema && schema.hasOwnProperty('title') && !nested">
      {{getTranslation(schema.title)}}
    </h2>
    <h4 style="color: #8C8C8C;font-size:14px" *ngIf="schema && schema.hasOwnProperty('title') && nested">
      {{getTranslation(schema.title)}}
    </h4>
    <div style="color: #8C8C8C;font-size:14px" class="description"
    *ngIf="schema && schema.hasOwnProperty('description')" [innerHTML]="getTranslation(schema.description)"></div>
    </div>
    <div [ngClass]="['form-container']">
      <div *ngFor="let control of keys(form.controls)" jf-field [control]="form.get(control)" [language]="language"></div>
    </div>
  `
})
export class ChooserComponent {
  @Input() form: SchemaFormGroup;
  @Input() schema: Schema;
  @Input() nested = false;
  @Input() language: string;
  keys = Object.keys;
  getTranslation(titleArray) {
    if (Array.isArray(titleArray)) {
    const translatedTitle = titleArray.filter(val =>
       val.language === this.language
      );
      return translatedTitle[0] && translatedTitle[0].value ?
       startCase(translatedTitle[0].value.replace(/<.*?>/g, '')) : titleArray[0].value;
  } else {
    return titleArray;
  }
}
}
