import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TruUiAutocompleteComponent } from "./tru-ui-autocomplete.component";

describe("TruUiAutocompleteComponent", () => {
  let component: TruUiAutocompleteComponent;
  let fixture: ComponentFixture<TruUiAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TruUiAutocompleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
