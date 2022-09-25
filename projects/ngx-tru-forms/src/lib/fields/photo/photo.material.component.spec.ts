import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { PhotoMaterialComponent } from "./photo.material.component";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { SchemaFormControl } from "../../models/schema-form-control";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { ErrorComponent } from "../error/error.component";

describe("PhotoMaterialComponent", () => {
  let component: PhotoMaterialComponent;
  let fixture: ComponentFixture<PhotoMaterialComponent>;
  let input;
  let label;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatFormFieldModule, ReactiveFormsModule],
      declarations: [PhotoMaterialComponent, ErrorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    const control = new SchemaFormControl();
    control.schema = { key: "test", type: "string", format: "photo" };
    control.schema.key = "test";
    control.valueChanges.subscribe(() => {});
    control.isRequired = true;
    control.setValidators(Validators.required);
    control.setErrors({ required: true });
    control.markAsTouched();

    fixture = TestBed.createComponent(PhotoMaterialComponent);
    component = fixture.componentInstance;
    component.schema = control.schema;
    component.control = control;

    fixture.detectChanges();
    input = fixture.debugElement.query(By.css("input"));
    label = fixture.debugElement.query(By.css(".mat-slide-toggle-content"));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display an error", () => {
    expect(
      fixture.debugElement.query(By.css(".invalid-feedback"))
    ).toBeTruthy();
  });

  it("should not display remove button", () => {
    expect(fixture.debugElement.query(By.css(".photo-remove"))).toBeFalsy();
  });

  it("should display photo", () => {
    // eslint-disable-next-line
    component.photoData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(".photo-remove"))).toBeTruthy();
    expect(
      fixture.debugElement.query(By.css(".photo-add")).nativeElement.style
        .backgroundImage.length
    ).toBeGreaterThan(0);
  });

  it("should clear photo", () => {
    // eslint-disable-next-line
    component.photoData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    fixture.detectChanges();

    component.clearPhoto();
    fixture.detectChanges();
    expect(component.photoData).toBeNull();
    expect(fixture.debugElement.query(By.css(".photo-remove"))).toBeFalsy();
  });
});
