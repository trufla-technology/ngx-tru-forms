import {
  Component,
  Input,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
} from "@angular/core";
import { SchemaFormControl } from "../../../../../models/schema-form-control";
import { AbstractControl, UntypedFormArray } from "@angular/forms";
import { SchemaFormArray } from "../../../../../models/schema-form-array";
import { SchemaFormGroup } from "../../../../../models/schema-form-group";
import { startCase, upperFirst } from "lodash";
import { DomSanitizer } from "@angular/platform-browser";
import { ChooserComponent } from "../../chooser/chooser.component";

@Component({
  selector: "jf-tru-ui-array",
  templateUrl: "./tru-ui-array.component.html",
  styleUrls: ["./tru-ui-array.component.css"],
})
export class TruUiArrayComponent implements AfterViewInit {
  @ViewChild("chooserInstance", { static: true })
  chooserInstance: ChooserComponent;
  @Input() control: SchemaFormArray;
  @Input() language;
  @Input() tooltipEnabled: boolean;
  showMoreIcon = this.sanitizer.bypassSecurityTrustHtml(`
  <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>see more</title>
      <g id="Admin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Settings-/-Plugins-don't-notify-user" transform="translate(-841.000000, -528.000000)" fill="#727272" fill-rule="nonzero">
              <path d="M849.000015,528 C844.588864,528 841,531.588864 841,536.000015 C841,540.411167 844.588864,544.000031 849.000015,544.000031 C853.411167,544.000031 857.000031,540.411167 857.000031,536.000015 C857.000031,531.588864 853.411136,528 849.000015,528 Z M849.520393,540.746619 C849.140319,540.80998 848.384047,540.96823 848.000006,541.000032 C847.67493,541.026952 847.368167,540.840867 847.181167,540.57375 C846.993678,540.306664 846.948752,539.964863 847.060061,539.658222 L848.572268,535.500026 L846.999996,535.500026 C846.998653,534.633575 847.64856,533.996486 848.479791,533.751985 C848.876468,533.635274 849.615525,533.47556 849.999994,533.500037 C850.230334,533.514687 850.631833,533.659202 850.818833,533.926319 C851.006322,534.193406 851.051248,534.535207 850.939939,534.841848 L849.427732,539.000044 L850.999515,539.000044 C850.999821,539.865488 850.374147,540.604332 849.520393,540.746619 L849.520393,540.746619 Z M849.999985,533.000017 C849.447692,533.000017 848.999985,532.552249 848.999985,531.999998 C848.999985,531.447706 849.447692,530.999998 849.999985,530.999998 C850.552296,530.999998 851.000004,531.447706 851.000004,531.999998 C851.000004,532.552279 850.552327,533.000017 849.999985,533.000017 Z" id="Shape"></path>
          </g>
      </g>
  </svg>`);
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public sanitizer?: DomSanitizer
  ) {}

  ngAfterViewInit() {
    // setTimeout(() => {
    //   console.log(this.chooserInstance);
    //   this.chooserInstance.language = this.language;
    //   this.chooserInstance.tooltipEnabled = this.tooltipEnabled;
    //   this.changeDetectorRef.detectChanges();
    // }, 1000);
  }
  getLegend(control) {
    // return (control && control.schema && control.schema.key) ? startCase(control.schema.key) : '';
    // eslint-disable-next-line max-len
    return typeof control.schema.title === "undefined"
      ? startCase(control.schema.key)
      : this.getTranslation(control.schema.title)
      ? this.getTranslation(control.schema.title)
      : startCase(control.schema.key);
  }

  getTranslation(titleArray) {
    if (Array.isArray(titleArray)) {
      const translatedTitle = titleArray.filter(
        (val) => val.language === this.language
      );
      return translatedTitle[0]
        ? upperFirst(translatedTitle[0].value.replace(/<.*?>/g, ""))
        : false;
    } else {
      return titleArray;
    }
  }

  strToUpperCase(str: string) {
    return str
      .toLowerCase()
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  getEnabledControls(control) {
    if (Array.isArray(control.controls)) {
      return control.controls.filter((c) => c.enabled);
    }

    return control;
  }

  cloneControl(control: AbstractControl) {
    let newControl: AbstractControl;

    if (control instanceof SchemaFormGroup) {
      const formGroup = new SchemaFormGroup(
        {},
        control.validator,
        control.asyncValidator
      );
      const controls = control.controls;
      formGroup.schema = control.schema;

      Object.keys(controls).forEach((key) => {
        formGroup.addControl(key, this.cloneControl(controls[key]));
      });

      newControl = formGroup;
    } else if (control instanceof SchemaFormArray) {
      const formArray = new SchemaFormArray(
        [],
        control.validator,
        control.asyncValidator
      );
      control.controls.forEach((formControl) => {
        formArray.push(this.cloneControl(formControl));
        return formArray;
      });

      newControl = formArray;
      (<SchemaFormArray>newControl).schema = control.schema;
    } else if (control instanceof SchemaFormControl) {
      newControl = new SchemaFormControl(
        control.value,
        control.validator,
        control.asyncValidator
      );
      (<SchemaFormControl>newControl).schema = control.schema;
    } else {
      throw new Error("Error: unexpected control value");
    }

    if (control.disabled) {
      newControl.disable({ emitEvent: false });
    }
    newControl.reset();
    return newControl;
  }

  addControl(formArray: UntypedFormArray) {
    formArray.push(this.cloneControl(formArray.controls[0]));
  }

  removeControl(formArray: UntypedFormArray, index: number) {
    if (formArray.length === 1) {
      formArray.controls[0].reset();
      formArray.controls[0].disable();
    } else {
      formArray.removeAt(index);
    }
  }
}
