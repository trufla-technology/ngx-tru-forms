import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TruUiTextareaComponent } from "./tru-ui-textarea.component";

describe("TruUiTextareaComponent", () => {
  let component: TruUiTextareaComponent;
  let fixture: ComponentFixture<TruUiTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TruUiTextareaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
