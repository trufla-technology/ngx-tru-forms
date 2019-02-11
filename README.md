## Tru Forms

Angular 6+ module for generating forms from JSON schema. Refer to documentation for structure of JSON Schema [PDF](https://spacetelescope.github.io/understanding-json-schema/UnderstandingJSONSchema.pdf)/[HTML](https://spacetelescope.github.io/understanding-json-schema/index.html).
This component utilizes [Reactive Forms](https://angular.io/guide/reactive-forms) for most of its functionality.

### Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Options](#options)
* [Example](#example)
* [Quick Reference](#quick-reference)
* [Extending](#extending)
  * [Defaults](#defaults)
  * [Validations](#validations)
  * [Fields](#fields)
* [External Methods](#external-methods)
  * isValid(#isValid)
  * submitForm(#submitForm)
  * setHeader(#setHeader)
  * setFooter(#setFooter)
  * getRequiredFieldCount(#getRequiredFieldCount)
* [Styling](#styling)

### Installation

```bash
npm install @trufla/ngx-tru-forms --save
```

### Usage

Module can be used with [Angular Material](https://material.angular.io/) or [Bootstrap 4](https://getbootstrap.com/).
Import either `JsonFormBootstrap4Module` or `JsonFormMaterialModule` and use it with `JsonFormModule`. For example: 
```
import { JsonFormModule, JsonFormMaterialModule } from '@trufla/ngx-tru-forms';

@NgModule({
  imports: [
    JsonFormModule.forRoot(JsonFormMaterialModule)
  ]
})
```

In component add following:
```
<jf-form></jf-form>
```

### Options

| Key | Description | Required |
| ----- | ----- | ----- |
| [id] | Uniquely identify forms if there are multiples on the page | |
| [schema] | JSON Schema object | Yes |
| [data] | JSON Schema default values | |
| [style] | Extra classes and style overrides | |
| [submit] | Text label for submit button | |
| [cancel] | Text label for cancel button | |
| [outerClass] | Wrapper class for the form component | |
| [submitClass] | Class for submit button | |
| [cancelClass] | Class for cancel button | | 
| [isWorking] | Toggle form state if using async data process | |
| [isMultiStep] | Treat schema as multi step. See example. | |
| (handleSubmit) | Watch for form submission. Return JSON Schema response data| |
| (handleChange) | Watch for form changes | |
| (handleCancel) | Watch for cancel click | |

For additional ways to modify and access the form see [External Methods](#external-methods).

### Example

```js
const schema = {
	"type": "object",
	"properties": {
		"first_name": {
			"type": "string"
		},
		"last_name": {
    	"type": "string"
    }
	},
	"required": ["make"]
};

const data = {
  "first_name": "Test",
  "last_name": "Me"
}

const onFormSubmit = (form) => console.log(form);
```

```html
<jf-form 
  [schema]="schema" 
  [data]="data"
  (handleChange)="onFormSubmit($event)"
></jf-form> 
```

### Quick Reference
`type`: string, number, object, array, boolean  
`format (optional)`: date, photo, textarea
`description (optional)`: hover text to describe purpose of field

### Extending

This module allows for extension via injectors.

```
constructor(
  jfDefaultsService: JsonFormDefaultsService,
  jfValidatorsService: JsonFormValidatorsService
)
```

#### Defaults

Extend values in `default` tag. 
```
this.jfDefaultsService.register('now', () => new Date());
```

#### Validations

Add JSON validator. 
```
const ValidatorJSON = (control: AbstractControl) => {
  try {
    JSON.parse(control.value);
    return null;
  } catch (err) {
    return { customError: err.message };
  }
};
this.jfValidatorsService.register('field_name', ValidatorJSON);
```

`field_name` has to be valid field including any nesting (as it is display on data and without properties)
```js
const schema = {
	"type": "object",
	"properties": {
		"first_name": {
			"type": "string"
		},
		"last_name": {
    	"type": "string",
    	"prefix": {
    	  "type": "object",
        "properties": {
          "custom": {
            "type": "string"
          }
        }
    	}
    }
	},
	"required": ["make"]
};
```
Fields would be `first_name`, `last_name`, `last_name.prefix.custom`.

#### Fields

Add new field type. Create a component that extends CommonComponent. Add the following as a starting 
template (or copy from string field).
```
import { CommonComponent } from '@trufla/ngx-tru-forms';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <input
      class="form-control"
      [name]="schema.key"
      [attr.type]="type()"
      [formControl]="control"
      [(colorPicker)]="color"
      [style.background]="color"
      [style.color]="color"
      [style.width]="'40px'"
      (colorPickerChange)="handleColorPickerChange($event)"
    />
  `
})
export class CustomComponent extends CommonComponent {
  color: '#0000ff';

  handleColorPickerChange(val) {
    this.control.setValue(val);
  }
}

```
Add it to your module:
```
entryComponents: [
  ColourPickerComponent
]
```

Add it via the component:
```
[fields]="{'colour': ColourPickerComponent}"
```
Now objects of format `new_format` will show the CustomComponent.

## External Methods
When referencing the form as a dom element `@ViewChild(myForm) myForm`, there are certain external functions that can be useful, for example, handling submit of multiple forms manually.

### isValid
Check if the form is valid.

### submitForm
Trigger submission of the form. Useful for trigger validation.

### setHeader
Set header of the form in ngAfterViewInit or after events. 

### setFooter
Set footer of the form in ngAfterViewInit or after events.

## getRequiredFieldCount
Get number of required fields.


## Styling

We prefer [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) to align and order fields. Form, groups and labels are assigned classes which can be utilized globally or per form.
Certain forms fields can be assigned classes on top of current defaults.

```
{
  first_name: {
    default: 'one-half grid__item'
  },
  last_name: {
    default: 'one-half grid__item'
  }
}
```
