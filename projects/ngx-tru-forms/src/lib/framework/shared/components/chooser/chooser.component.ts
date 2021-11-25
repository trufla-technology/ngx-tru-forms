import { Component, Input } from '@angular/core';
import { SchemaFormGroup } from '../../../../models/schema-form-group';
import { Schema } from '../../../../models/schema';
import { startCase, upperFirst } from 'lodash';
@Component({
  selector: 'jf-component-chooser, [jf-component-chooser]',
  template: `
  <div class="object-container" >
    <div style="color: #4D4D4D;font-size:16px" tabindex="0" class="tru-ui-object-title"
    *ngIf="schema && schema.hasOwnProperty('title') && !nested">
      {{getTranslation(schema.title)}}
    </div>
    <div style="color: #4D4D4D;font-size:16px" tabindex="0"
    *ngIf="schema && schema.hasOwnProperty('title') && nested" class="tru-ui-object-title nested-title">
      {{getTranslation(schema.title)}}
    </div>
    <div style="color: #4D4D4D;font-size:14px" class="description"
    *ngIf="schema && schema.hasOwnProperty('description')"
    [innerHTML]="getTranslation(schema.description)" tabindex="0">
    </div>
    </div>
    <div [ngClass]="['form-container']">
      <div *ngFor="let control of keys(form.controls)" jf-field
      [control]="form.get(control)" [language]="language">
      </div>
    </div>
  `,
  styleUrls: ['../../../../assets/tru-ui.css']

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
        upperFirst(translatedTitle[0].value.replace(/<.*?>/g, '')) : upperFirst(titleArray[0].value);
    } else {
      return startCase(titleArray);
    }
  }
}
