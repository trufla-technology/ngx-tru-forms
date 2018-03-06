#json-form
Angular 5 module for generating forms from JSON schema. Refer to documentation for structure of JSON Schema [PDF](https://spacetelescope.github.io/understanding-json-schema/UnderstandingJSONSchema.pdf)/[HTML](https://spacetelescope.github.io/understanding-json-schema/index.html).
This component was developed with Angular 5 features in mind, it integrates Angular validation and use FormBuilder instead of models.

## Quick Reference

| Key | Description | Required |
| ----- | ----- | ----- |
| type | One of basic json schema types | Yes |
| title | Title of the type, appears as placeholder and label |  |
| description | Attaches tooltip to field | |
| visible | Boolean (true|false) for visibility of object | |
| mask | Regex for masking the input field | |

## Usage

Import `json-forms` module:
```
@NgModule({
  imports: [
    JsonFormModule
  ]
})
```

In the component use following to generate form:
```
<jf-form></jf-form>
```

## Inputs

`schema`: JSON Schema object.  
`submit`: String for submit button. If left empty hides the button.  
`data`: JSON Schema response data.  

## Ouputs
`handleSubmit`: Watch for form submission. Return JSON Schema response data.
`handleChange`: Watch for form changes.

## Example

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

## Quick Reference
`type`: string, number, object, array, boolean  
`format (optional)`: date, photo, textarea

## Extending

This module allows for extension via injectors.

```
constructor(
  public jfDefaultsService: JfDefaultsService,
  public jfFieldsService: JfFieldsService
  public jfValidatorsService: JfValidatorsService
)
```

### jfDefaultsService

Extend values in `default` tag. 
```
this.jfDefaultsService.register('now', () => new Date());
```

### jfValidatorsService

Add JSON validator. 
```
const ValidatorJSON = (control: AbstractControl) => {
  try {
    JSON.parse(control.value);
    return null;
  } catch (err) {
    return { invalidJSON: err.message };
  }
};
this.jfValidatorsService.register(ValidatorJSON);
```

### jfFieldsService

Add new field type. Create a component that extends CommonComponent. Add the following as a starting 
template (or copy from string field).
```
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
  JsonFormComponent,
  ColourPickerComponent
]
```
```
this.jfFieldsService.register('new_format', CustomComponent);
```
Now objects of format `new_format` will show the CustomComponent.

## Styling

Use flex to align and order fields. Form, groups and labels are assigned classes which can be utilized globally or per form.

```css
section { display: flex; flex-wrap: wrap; }
section jf-field { flex: 0 0 100%; }
```
