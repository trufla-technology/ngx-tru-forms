import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TruUiRadigroupComponent } from "./tru-ui-radigroup.component";

describe("TruUiRadigroupComponent", () => {
  let component: TruUiRadigroupComponent;
  let fixture: ComponentFixture<TruUiRadigroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TruUiRadigroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiRadigroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
