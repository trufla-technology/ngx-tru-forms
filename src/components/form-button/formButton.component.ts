import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jf-form-button',
  template: `
    <button
      *ngIf="isVisible()"
      [type]="getType()"
      [ngClass]="getClass()"
      [disabled]="isWorking"
      (click)="handleButtonClick()">
        <jf-working-spinner *ngIf="isWorking && submit"></jf-working-spinner>
        {{getLabel()}}
    </button>
  `
})
export class FormButtonComponent {
  @Input() isFormValid = true;
  @Input() label = '';
  @Input() isMultiStep = false;
  @Input() steps = [];
  @Input() submit = '';
  @Input() continue = '';
  @Input() cancel = '';
  @Input() classes = <any>{};
  @Input() isWorking = false;
  @Output() handleClick = new EventEmitter();

  getClass() {
    return (this.cancel.length > 0)
      ? ['btn btn-default button', this.classes.cancel || '']
      : ['btn btn-primary button button--accept', this.classes.submit || '', (this.isFormValid ? 'valid' : 'invalid')];
  }

  isVisible() {
    const step = this.steps.findIndex((s) => s.visible);
    if (this.isMultiStep && this.cancel.length > 0 && this.steps[step]) {
      return this.steps[step].type !== 'first';
    }

    return true;
  }

  getLabel() {
    if (this.isMultiStep && this.cancel.length > 0) {
      const step = this.steps.findIndex((s) => s.visible);
      if (this.steps[step] && this.steps[step].type !== 'first') {
        return this.cancel;
      }
    } else if (this.isMultiStep) {
      const step = this.steps.findIndex((s) => s.visible);
      if (this.steps[step] && this.steps[step].type !== 'last') {
        return this.continue;
      }

      return this.submit;
    } else  if (this.cancel.length > 0) {
      return this.cancel;
    }

    return this.submit;
  }

  getType() {
    if (this.cancel) {
      return 'button';
    }

    return 'submit';
  }

  handleButtonClick() {
    if (this.cancel.length > 0) {
      this.handleClick.emit();
    }
  }
}
