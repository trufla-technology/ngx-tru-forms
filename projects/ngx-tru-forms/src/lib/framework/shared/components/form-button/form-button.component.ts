import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnChanges, SimpleChanges
} from '@angular/core';
import {JsonFormFieldsService} from '../../../json-form-fields.service';
import {ButtonComponent} from '../../../../fields/button/button.component';

@Component({
  selector: 'jf-form-button',
  template: `
    <ng-container #button></ng-container>
  `
})
export class FormButtonComponent implements OnInit, OnChanges {
  @Input() isDisabled = false;
  @Input() isFormValid = true;
  @Input() label = '';
  @Input() isMultiStep = false;
  @Input() steps = [];
  @Input() submit = '';
  @Input() continue = '';
  @Input() cancel = '';
  @Input() submitClass: string;
  @Input() cancelClass: string;
  @Input() isWorking = false;
  @Output() handleClick = new EventEmitter();
  @ViewChild('button', {read: ViewContainerRef, static: true}) button: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private jsonFormFieldsService: JsonFormFieldsService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.drawButton();
  }

  ngOnInit(): void {
    this.drawButton();
  }

  drawButton() {
    this.button.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.jsonFormFieldsService[0].get('button'));
    const componentRef = this.button.createComponent(componentFactory);
    (<ButtonComponent> componentRef.instance).type = this.getType();
    (<ButtonComponent> componentRef.instance).isVisible = this.isVisible();
    (<ButtonComponent> componentRef.instance).class = this.getClass();
    (<ButtonComponent> componentRef.instance).disabled = this.isDisabled;
    (<ButtonComponent> componentRef.instance).isWorking = this.isWorking;
    (<ButtonComponent> componentRef.instance).label = this.getLabel();
    (<ButtonComponent> componentRef.instance).handleButtonClick.subscribe((event) => {
      if (this.cancel.length > 0) {
        this.handleClick.emit(event);
      }
    });
    (<ButtonComponent> componentRef.instance).color = this.submit ? 'primary' : '';
  }

  getClass() {
    return (this.cancel.length > 0)
      ? ['btn btn-default button', this.cancelClass || '']
      : ['btn btn-primary button button--accept', this.submitClass || '', (this.isFormValid ? 'valid' : 'invalid')];
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
}
