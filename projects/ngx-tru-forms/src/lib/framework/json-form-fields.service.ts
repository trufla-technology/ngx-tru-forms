import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { SchemaFormControl } from '../models/schema-form-control';
import { StringViewComponent } from '../fields/string/string.view.component';
import { SelectViewComponent } from '../fields/select/select.view.component';
import { NumberViewComponent } from '../fields/number/number.view.component';
import { BooleanViewComponent } from '../fields/boolean/boolean.view.component';
import { PhotoViewComponent } from '../fields/photo/photo.view.component';
import { TextareaViewComponent } from '../fields/textarea/textarea.view.component';
import { DateViewComponent } from '../fields/date/date.view.component';
import { RadiogroupViewComponent } from '../fields/radiogroup/radiogroup.view.component';
import { CheckboxgroupViewComponent } from '../fields/checkboxgroup/checkboxgroup.view.component';
import { MultiselectViewComponent } from '../fields/multiselect/multiselect.view.component';
import { MoneyViewComponent } from '../fields/money/money.view.component';
import { ObjectComponent } from './shared/components/object/object.component';
import { ArrayViewComponent } from './shared/components/array/array.view.component';

@Injectable()
export class JsonFormFieldsService {
  name: string;
  rootViewContainer;
  public fieldTypes: { [type: string]: any } = {};
  private viewOnly = false;
  private disabled = false;
  private viewTypes: Object = {
    string: StringViewComponent,
    select: SelectViewComponent,
    number: NumberViewComponent,
    boolean: BooleanViewComponent,
    photo: PhotoViewComponent,
    textarea: TextareaViewComponent,
    object: ObjectComponent,
    array: ArrayViewComponent,
    date: DateViewComponent,
    radiogroup: RadiogroupViewComponent,
    checkboxgroup: CheckboxgroupViewComponent,
    multiselect: MultiselectViewComponent,
    money: MoneyViewComponent,
    autocomplete: StringViewComponent,

  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(control, lang?) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.get(control));
    const componentRef = this.rootViewContainer.createComponent(componentFactory);
    componentRef.instance.control = control;
    componentRef.instance.schema = control.schema;
    componentRef.instance.style = control.style;
    componentRef.instance.disabled = this.disabled;
    componentRef.instance.language = lang || 'en';
  }

  has(type: string) {
    return this.fieldTypes.hasOwnProperty(type) || this.viewTypes.hasOwnProperty(type);
  }

  register(type: string, field: any) {
    this.fieldTypes[type] = field;
    this.viewTypes[type] = field;
  }

  get(control): any {
    const types: Object = this.viewOnly ? this.viewTypes : this.fieldTypes;

    if (typeof (control) === 'string' && this.has(control)) {
      return this.fieldTypes[control];
    }

    // check if a field is getting overridden by format
    if (typeof (control.schema.format) !== 'undefined' && this.has(control.schema.format)) {
      return types[control.schema.format];
    }

    if (typeof (control.schema.enum) !== 'undefined' && control.schema.type === 'array') {
      return types['checkboxgroup'];
    } else if (typeof (control.schema.enum) !== 'undefined') {
      return types['select'];
    } else if (this.has(control.schema.format)) {
      return types[control.schema.format];
    } else if (this.has(control.schema.type)) {
      return types[control.schema.type];
    }

    return types['string'];
  }
}
