import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TruUiBooleanComponent } from "./tru-ui-boolean.component";

describe("TruUiBooleanComponent", () => {
  let component: TruUiBooleanComponent;
  let fixture: ComponentFixture<TruUiBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TruUiBooleanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
