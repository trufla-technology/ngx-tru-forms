import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BooleanMaterialComponent } from "./boolean.material.component";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { SchemaFormControl } from "../../models/schema-form-control";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ErrorComponent } from "../error/error.component";

describe("BooleanMaterialComponent", () => {
  let component: BooleanMaterialComponent;
  let fixture: ComponentFixture<BooleanMaterialComponent>;
  let input;
  let label;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSlideToggleModule, MatFormFieldModule, ReactiveFormsModule],
      declarations: [BooleanMaterialComponent, ErrorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    const control = new SchemaFormControl();
    control.schema = { key: "test", type: "boolean" };
    control.schema.key = "test";
    control.valueChanges.subscribe(() => {});
    control.isRequired = true;
    control.setValidators(Validators.required);
    control.setErrors({ required: true });
    control.markAsTouched();

    fixture = TestBed.createComponent(BooleanMaterialComponent);
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

  it("should have a name", () => {
    expect(input.nativeElement.name).toBe("test");
  });

  it("should have an id", () => {
    expect(input.nativeElement.id).toBe("test-input");
  });

  it("should have a label", () => {
    expect(label.nativeElement.innerHTML).toBe("Test*");
  });

  it("should display an error", () => {
    const error = fixture.debugElement.query(By.css(".invalid-feedback"));
    expect(error).toBeTruthy();
  });
});
