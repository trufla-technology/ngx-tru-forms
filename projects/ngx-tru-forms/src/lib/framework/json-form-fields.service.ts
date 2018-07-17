import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { SchemaFormControl } from '../models/schema-form-control';
import { StringComponent } from '../fields/string/string.component';
import { StringViewoComponent } from '../fields/string/string.view.component';
import { SelectViewComponent } from '../fields/select/select.view.component';
import { NumberViewComponent } from '../fields/number/number.view.component';
import { BooleanViewComponent } from '../fields/boolean/boolean.view.component';
import { PhotoViewComponent } from '../fields/photo/photo.view.component';
import { TextareaViewComponent } from '../fields/textarea/textarea.view.component';
import { ArrayComponent } from '../fields/array/array.component';
import { DateViewComponent } from '../fields/date/date.view.component';
import { RadiogroupViewComponent } from '../fields/radiogroup/radiogroup.view.component';
import { CheckboxgroupViewComponent } from '../fields/checkboxgroup/checkboxgroup.view.component';
import { MultiselectViewComponent } from '../fields/multiselect/multiselect.view.component';
import { MoneyViewComponent } from '../fields/money/money.view.component';
import { ButtonComponent } from '../fields/button/button.component';
import { ObjectComponent } from '../fields/object/object.component';

@Injectable()
export class JsonFormFieldsService {
  name: string;
  rootViewContainer;
  public fieldTypes: { [type: string]: any } = {};
  private defaultFieldType = StringComponent;
  public viewOnly: boolean = false;
  public viewTypes: Object = {
    string: StringViewoComponent,
    select: SelectViewComponent,
    number: NumberViewComponent,
    boolean: BooleanViewComponent,
    photo: PhotoViewComponent,
    textarea: TextareaViewComponent,
    object: ObjectComponent,
    array: ArrayComponent,
    date: DateViewComponent,
    radiogroup: RadiogroupViewComponent,
    checkboxgroup: CheckboxgroupViewComponent,
    multiselect: MultiselectViewComponent,
    money: MoneyViewComponent,
    button: ButtonComponent
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(control: SchemaFormControl) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.get(control));
    const componentRef = this.rootViewContainer.createComponent(componentFactory);
    componentRef.instance.control = control;
    componentRef.instance.schema = control.schema;
    componentRef.instance.style = control.style;
  }

  has(type: string) {
    return this.fieldTypes.hasOwnProperty(type);
  }

  register(type: string, field: any) {
    this.fieldTypes[type] = field;
  }

  get(control): any {
    //check if the field is viewonly
    if(this.viewOnly){
      this.fieldTypes = this.viewTypes;
    }

    if (typeof(control) === 'string' && this.has(control)) {
      return this.fieldTypes[control];
    }

    /*
    TODO: create a new local variable for fields. If this.viewOnly is true assign fieldTypes to fields
    otherwise use viewTypes. Then the rest of the logic will work on it's own.
     */

    // check if a field is getting overridden by format
    if (typeof(control.schema.format) !== 'undefined' && this.has(control.schema.format)) {
      return this.fieldTypes[control.schema.format];
    }

    if (typeof(control.schema.enum) !== 'undefined' && control.schema.type === 'array') {
      return this.fieldTypes['checkboxgroup'];
    } else if (typeof(control.schema.enum) !== 'undefined') {
      return this.fieldTypes['select'];
    } else if (this.has(control.schema.format)) {
      return this.fieldTypes[control.schema.format];
    } else if (this.has(control.schema.type)) {
      return this.fieldTypes[control.schema.type];
    }
    return this.defaultFieldType;
  }
}
