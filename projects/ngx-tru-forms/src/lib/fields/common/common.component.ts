import { Schema } from "../../models/schema";
import { SchemaFormControl } from "../../models/schema-form-control";
import {
  Component,
  ChangeDetectorRef,
  AfterViewInit,
  Renderer2,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { startCase } from "lodash";
import { ValidationFeedbackTranslation } from "../error/validation-feedback-translation";
import { NgxImageCompressService } from "ngx-image-compress";
import { BsModalService } from "ngx-bootstrap/modal";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import DOMPurify from "dompurify";
const MY_FORMATS = {
  parse: {
    dateInput: "LL",
  },
  display: {
    dateInput: "LL",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};
@Component({
  selector: "jf-component",
  template: "",
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "fr" },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class CommonComponent implements AfterViewInit {
  control: SchemaFormControl;
  confirmInput = new SchemaFormControl("");
  schema: Schema;
  style: {};
  disabled = false;
  language;
  isWebView = false;
  fileSize = null;
  fileType;
  inputId = Math.floor(Math.random() * 200).toString();
  showMoreIcon = this.sanitizer.bypassSecurityTrustHtml(`
  <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>see more</title>
      <g id="Admin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Settings-/-Plugins-don't-notify-user" transform="translate(-841.000000, -528.000000)" fill="#727272" fill-rule="nonzero">
              <path d="M849.000015,528 C844.588864,528 841,531.588864 841,536.000015 C841,540.411167 844.588864,544.000031 849.000015,544.000031 C853.411167,544.000031 857.000031,540.411167 857.000031,536.000015 C857.000031,531.588864 853.411136,528 849.000015,528 Z M849.520393,540.746619 C849.140319,540.80998 848.384047,540.96823 848.000006,541.000032 C847.67493,541.026952 847.368167,540.840867 847.181167,540.57375 C846.993678,540.306664 846.948752,539.964863 847.060061,539.658222 L848.572268,535.500026 L846.999996,535.500026 C846.998653,534.633575 847.64856,533.996486 848.479791,533.751985 C848.876468,533.635274 849.615525,533.47556 849.999994,533.500037 C850.230334,533.514687 850.631833,533.659202 850.818833,533.926319 C851.006322,534.193406 851.051248,534.535207 850.939939,534.841848 L849.427732,539.000044 L850.999515,539.000044 C850.999821,539.865488 850.374147,540.604332 849.520393,540.746619 L849.520393,540.746619 Z M849.999985,533.000017 C849.447692,533.000017 848.999985,532.552249 848.999985,531.999998 C848.999985,531.447706 849.447692,530.999998 849.999985,530.999998 C850.552296,530.999998 851.000004,531.447706 851.000004,531.999998 C851.000004,532.552279 850.552327,533.000017 849.999985,533.000017 Z" id="Shape"></path>
          </g>
      </g>
  </svg>`);
  acceptFormats = "image/x-png,image/jpeg,image/jpg";
  constructor(
    public sanitizer?: DomSanitizer,
    public cd?: ChangeDetectorRef,
    private validationFeedbackTranslation?: ValidationFeedbackTranslation,
    private imageCompress?: NgxImageCompressService,
    public modalService?: BsModalService,
    public _adapter?: DateAdapter<any>,
    public renderer?: Renderer2
  ) {
    this.isWebView = this.detectWebView();
  }

  ngAfterViewInit() {
    if (this.schema && this.schema.format === "photo" && this.control.value) {
      this.getImageFromUrl(this.control.value);
      this.cd.detectChanges();
    }
    if (
      this.schema &&
      this.schema.format === "photo" &&
      this.schema.imageFormat &&
      this.schema.imageFormat.indexOf("pdf") !== -1
    ) {
      this.acceptFormats = "image/x-png,image/jpeg,image/jpg,application/pdf";
      this.cd.detectChanges();
    }
    if (this.control && this.control.data && this.schema?.format === "email") {
      this.confirmInput.setValue(this.control.data);
    }
    if (this.schema && this.schema.format === "photo") {
      this.fileType = this.isPdf();
    }
  }

  isRequired() {
    // some controls like datepicker add validator without being required
    return this.control.validator !== null && this.control.isRequired;
  }

  title(material = false) {
    const required = this.isRequired() ? "*" : "";
    const title =
      typeof this.schema.title === "undefined"
        ? this.strToUpperCase(this.schema.key)
        : this.getTranslation(this.schema.title);
    return title + required;
  }

  strToUpperCase(str: string) {
    str = DOMPurify.sanitize(str);
    return startCase(str);
  }

  placeholder() {
    return DOMPurify.sanitize(this.schema.placeholder);
  }

  type() {
    let format = this.schema.format || "text";

    switch (format) {
      case "photo":
        format = "file";
    }

    return format;
  }

  id(i?) {
    return (
      this.schema.key + "-" + Math.random().toString(36).substring(7) + "-" + i
    );
  }

  getClass(defaultClass?) {
    return this.style && this.style.hasOwnProperty("default")
      ? this.style["default"]
      : defaultClass || "";
  }

  getMask() {
    if (this.schema.hasOwnProperty("mask")) {
      const mask: Array<string | RegExp> = [];
      this.schema.mask.forEach((el) => {
        const element = el.toString();
        // eslint-disable-next-line
        mask.push(/^\/.*\/$/.test(element) ? new RegExp(element.replace(/^\/|\/$/g, '')) : element);
      });

      return mask;
    }

    return false;
  }

  makeTrustedImage(image): any {
    const imageString = JSON.stringify(image).replace(/\\n/g, "");
    const style = "url(" + imageString + ")";
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  makeTrustedHtml(html): any {
    html = DOMPurify.sanitize(html);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  enumNames(index) {
    return typeof this.schema.enumNames === "undefined"
      ? this.schema.enum[index]
      : this.getTranslation(this.schema.enumNames[index]);
  }

  getSelectedEnumName() {
    let index;
    this.schema.enum.map((e, i) => {
      if (
        e.toString().toLowerCase() ===
        this.control.value.toString().toLowerCase()
      ) {
        index = i;
      }
    });
    return this.schema.enumNames &&
      this.schema.enumNames.length &&
      typeof index !== "undefined"
      ? this.getTranslation(this.schema.enumNames[index])
      : this.control.value;
  }

  getTranslation(titleArray) {
    if (Array.isArray(titleArray)) {
      const translatedTitle = titleArray.filter(
        (val) => val.language === this.language
      );
      const translatedValue = translatedTitle[0]
        ? translatedTitle[0].value.replace(/[&\\#,+$~%.":?{}_-]/g, " ")
        : false;
      return DOMPurify.sanitize(translatedValue);
    } else {
      const translatedValue = titleArray.replace(/[&\\#,+$~%.":?{}_-]/g, " ");
      return DOMPurify.sanitize(translatedValue);
    }
  }

  getLanguage() {
    this.language = this.language ? `${this.language}` : "en";
    return this.validationFeedbackTranslation.validation[this.language];
  }

  getControlValue() {
    return this.control && this.control.value ? this.control.value : "";
  }

  getFilename() {
    if (this.getControlValue().length) {
      return (
        this.getControlValue().substring(
          "data:image/".length,
          this.getControlValue().indexOf(";base64")
        ) || ""
      );
    }
  }

  isMatch() {
    if (this.schema.verify) {
      const input = this.control.value;
      const confirmInput = this.confirmInput.value;
      let error =
        this.control.errors && Object.keys(this.control.errors).length > 0
          ? this.control.errors
          : null;
      if (error && Object.keys(this.control.errors).length > 0) {
        delete error.isMatch;
        if (Object.keys(error).length === 0) {
          error = null;
        }
      }
      return input.toString() === confirmInput.toString()
        ? this.control.setErrors(error)
        : this.control.setErrors({ ...this.control.errors, isMatch: true });
    }
  }

  validURL(str: string) {
    const toBeTested = str.toString();
    // eslint-disable-next-line
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(`${toBeTested}`);
  }

  isPdf() {
    return this.control?.value
      ?.toLowerCase()
      ?.includes("application/pdf;base64");
  }
  getImageFromUrl(url: any) {
    fetch(url)
      .then((r) =>
        r
          .blob()
          .then((s) => (this.fileSize = s.size))
          .catch(() => (this.fileSize = null))
      )
      .catch(() => (this.fileSize = null));
  }

  compressFile(file: any, size?) {
    const quality = size < 0.3 ? 90 : size < 0.9 ? 70 : 45;
    return this.imageCompress.compressFile(file, -2, quality, quality);
  }

  detectWebView() {
    const userAgent = window.navigator.userAgent.toLowerCase(),
      ios = /iphone|ipod|ipad/.test(userAgent);
    return ios;
  }

  getInput(id) {
    const input: any = document.getElementById(id);
    input.focus();
  }
}
