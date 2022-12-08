import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BooleanViewComponent } from "./boolean.view.component";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { ErrorComponent } from "../error/error.component";
import { By } from "@angular/platform-browser";
import { SchemaFormControl } from "../../models/schema-form-control";

describe("BooleanViewComponent", () => {
  let component: BooleanViewComponent;
  let fixture: ComponentFixture<BooleanViewComponent>;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BooleanViewComponent, ErrorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    const control = new SchemaFormControl();
    control.schema = { key: "test", type: "boolean" };
    control.schema.key = "test";
    control.valueChanges.subscribe(() => {});
    control.isRequired = true;
    control.setValue(123);
    control.setValidators(Validators.required);
    control.setErrors({ required: true });
    control.markAsTouched();

    fixture = TestBed.createComponent(BooleanViewComponent);
    component = fixture.componentInstance;
    component.schema = control.schema;
    component.control = control;

    fixture.detectChanges();
    el = fixture.debugElement.query(By.css("p"));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a label", () => {
    expect(el.nativeElement.querySelector("span:first-child").innerHTML).toBe(
      "Test"
    );
  });

  it("should have a value", () => {
    expect(el.nativeElement.querySelector("span:last-child").innerHTML).toBe(
      "123"
    );
  });
});
