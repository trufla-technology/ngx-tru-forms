import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TruUiNumberComponent } from "./tru-ui-number.component";

describe("TruUiNumberComponent", () => {
  let component: TruUiNumberComponent;
  let fixture: ComponentFixture<TruUiNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TruUiNumberComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
