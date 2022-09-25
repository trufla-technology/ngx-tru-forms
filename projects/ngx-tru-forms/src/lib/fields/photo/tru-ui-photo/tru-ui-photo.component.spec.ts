import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TruUiPhotoComponent } from "./tru-ui-photo.component";

describe("TruUiPhotoComponent", () => {
  let component: TruUiPhotoComponent;
  let fixture: ComponentFixture<TruUiPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TruUiPhotoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
