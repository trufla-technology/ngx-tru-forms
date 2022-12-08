import { Component, Input } from "@angular/core";
import { SchemaFormGroup } from "../../../../models/schema-form-group";
import { Schema } from "../../../../models/schema";
import { startCase, upperFirst } from "lodash";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "jf-component-chooser, [jf-component-chooser]",
  template: `
    <div class="object-container">
      <div
        style="color: #4D4D4D;font-size:16px"
        tabindex="0"
        class="tru-ui-object-title"
        *ngIf="schema && schema.hasOwnProperty('title') && !nested"
        style="display: inline-flex"
      >
        {{ getTranslation(schema.title) }}
        <div
          role="tooltip"
          *ngIf="this.schema.description && tooltipEnabled"
          [attr.class]="schema.key + '-tooltip'"
          [innerHTML]="showMoreIcon"
          [tooltip]="getTranslation(schema?.description) || schema?.description"
          style="padding-left: 3px"
        ></div>
      </div>
      <div
        style="color: #4D4D4D;font-size:16px"
        tabindex="0"
        *ngIf="schema && schema.hasOwnProperty('title') && nested"
        class="tru-ui-object-title nested-title"
        style="display: inline-flex"
      >
        {{ getTranslation(schema.title) }}
        <div
          role="tooltip"
          *ngIf="this.schema?.description?.length && this.tooltipEnabled"
          [attr.class]="schema.key + '-tooltip'"
          [innerHTML]="showMoreIcon"
          [tooltip]="getTranslation(schema?.description) || schema?.description"
          style="padding-left: 3px"
        ></div>
      </div>
      <div
        style="color: #4D4D4D;font-size:14px"
        class="description"
        *ngIf="schema && schema.hasOwnProperty('description')"
        [innerHTML]="getTranslation(schema.description)"
        tabindex="0"
      ></div>
    </div>
    <div [ngClass]="['form-container']">
      <div
        *ngFor="let control of keys(form.controls)"
        [ngClass]="'jf-field-' + form.get(control)?.schema?.key"
      >
        <jf-field
          [control]="form.get(control)"
          [language]="language"
          [tooltipEnabled]="tooltipEnabled"
        ></jf-field>
      </div>
    </div>
  `,
  styleUrls: ["../../../../assets/tru-ui.css"],
})
export class ChooserComponent {
  @Input() form: SchemaFormGroup;
  @Input() schema: Schema;
  @Input() nested = false;
  @Input() language: string;
  @Input() tooltipEnabled: boolean;

  keys = Object.keys;
  showMoreIcon = this.sanitizer.bypassSecurityTrustHtml(`
  <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>see more</title>
      <g id="Admin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Settings-/-Plugins-don't-notify-user" transform="translate(-841.000000, -528.000000)" fill="#727272" fill-rule="nonzero">
              <path d="M849.000015,528 C844.588864,528 841,531.588864 841,536.000015 C841,540.411167 844.588864,544.000031 849.000015,544.000031 C853.411167,544.000031 857.000031,540.411167 857.000031,536.000015 C857.000031,531.588864 853.411136,528 849.000015,528 Z M849.520393,540.746619 C849.140319,540.80998 848.384047,540.96823 848.000006,541.000032 C847.67493,541.026952 847.368167,540.840867 847.181167,540.57375 C846.993678,540.306664 846.948752,539.964863 847.060061,539.658222 L848.572268,535.500026 L846.999996,535.500026 C846.998653,534.633575 847.64856,533.996486 848.479791,533.751985 C848.876468,533.635274 849.615525,533.47556 849.999994,533.500037 C850.230334,533.514687 850.631833,533.659202 850.818833,533.926319 C851.006322,534.193406 851.051248,534.535207 850.939939,534.841848 L849.427732,539.000044 L850.999515,539.000044 C850.999821,539.865488 850.374147,540.604332 849.520393,540.746619 L849.520393,540.746619 Z M849.999985,533.000017 C849.447692,533.000017 848.999985,532.552249 848.999985,531.999998 C848.999985,531.447706 849.447692,530.999998 849.999985,530.999998 C850.552296,530.999998 851.000004,531.447706 851.000004,531.999998 C851.000004,532.552279 850.552327,533.000017 849.999985,533.000017 Z" id="Shape"></path>
          </g>
      </g>
  </svg>`);
  constructor(public sanitizer?: DomSanitizer) {}
  getTranslation(titleArray) {
    if (Array.isArray(titleArray)) {
      const translatedTitle = titleArray.filter(
        (val) => val.language === this.language
      );
      return translatedTitle[0] && translatedTitle[0].value
        ? upperFirst(translatedTitle[0].value.replace(/<.*?>/g, ""))
        : upperFirst(titleArray[0].value);
    } else {
      return startCase(titleArray);
    }
  }
}
