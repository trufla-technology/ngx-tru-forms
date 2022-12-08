import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BooleanComponent } from "./boolean.component";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { ErrorComponent } from "../error/error.component";
import { By } from "@angular/platform-browser";
import { SchemaFormControl } from "../../models/schema-form-control";

describe("BooleanComponent", () => {
  let component: BooleanComponent;
  let fixture: ComponentFixture<BooleanComponent>;
  let input;
  let label;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BooleanComponent, ErrorComponent],
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

    fixture = TestBed.createComponent(BooleanComponent);
    component = fixture.componentInstance;
    component.schema = control.schema;
    component.control = control;

    fixture.detectChanges();
    input = fixture.debugElement.query(By.css("input"));
    label = fixture.debugElement.query(By.css("label"));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a name", () => {
    expect(input.nativeElement.name).toBe("test");
  });

  it("should have an id", () => {
    expect(input.nativeElement.id).toBe("test");
  });

  it("should have a label", () => {
    expect(
      label.nativeElement.querySelector("span:first-child").innerHTML
    ).toBe("Test");
  });

  it("should display an error", () => {
    const error = fixture.debugElement.query(By.css(".invalid-feedback"));
    expect(error).toBeTruthy();
  });
});
