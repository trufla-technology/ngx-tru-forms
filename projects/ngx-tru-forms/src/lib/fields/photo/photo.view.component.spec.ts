import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoViewComponent } from './photo.view.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorComponent } from '../error/error.component';
import { By } from '@angular/platform-browser';
import { SchemaFormControl } from '../../models/schema-form-control';

describe('BooleanViewComponent', () => {
  let component: PhotoViewComponent;
  let fixture: ComponentFixture<PhotoViewComponent>;
  let label;
  let value;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        PhotoViewComponent,
        ErrorComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const control = new SchemaFormControl();
    control.schema = { key: 'test', type: 'boolean' };
    control.schema.key = 'test';
    control.valueChanges.subscribe(() => {});
    control.isRequired = true;
    // tslint:disable-next-line
    control.setValue('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==');

    fixture = TestBed.createComponent(PhotoViewComponent);
    component = fixture.componentInstance;
    component.schema = control.schema;
    component.control = control;

    fixture.detectChanges();
    label = fixture.debugElement.query(By.css('p'));
    value = fixture.debugElement.query(By.css('img'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a label', () => {
    expect(label.nativeElement.innerHTML.length).toBeGreaterThan(0);
  });

  it('should have a value', () => {
    expect(value.nativeElement.src.length).toBeGreaterThan(0);
  });
});
