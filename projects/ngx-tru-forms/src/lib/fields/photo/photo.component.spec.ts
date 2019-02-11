import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoComponent } from './photo.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SchemaFormControl } from '../../models/schema-form-control';
import { ErrorComponent } from '../error/error.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let input;
  let label;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        PhotoComponent,
        ErrorComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const control = new SchemaFormControl();
    control.schema = { key: 'test', type: 'string', format: 'photo' };
    control.schema.key = 'test';
    control.valueChanges.subscribe(() => {});
    control.isRequired = true;
    control.setValidators(Validators.required);
    control.setErrors({'required': true});
    control.markAsTouched();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    component.schema = control.schema;
    component.control = control;

    fixture.detectChanges();
    input = fixture.debugElement.query(By.css('input'));
    label = fixture.debugElement.query(By.css('.mat-slide-toggle-content'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error', () => {
    expect(fixture.debugElement.query(By.css('.invalid-feedback'))).toBeTruthy();
  });

  it('should not display remove button', () => {
    expect(fixture.debugElement.query(By.css('.la-close'))).toBeFalsy();
  });

  it('should display photo', () => {
    // tslint:disable-next-line
    component.photoData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('img'))).toBeTruthy();
  });

  it('should clear photo', () => {
    // tslint:disable-next-line
    component.photoData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    fixture.detectChanges();

    component.clearPhoto();
    fixture.detectChanges();
    expect(component.photoData).toBeNull();
    expect(fixture.debugElement.query(By.css('.la-close'))).toBeFalsy();
  });
});
