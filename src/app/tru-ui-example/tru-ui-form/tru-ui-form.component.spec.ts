import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiFormComponent } from './tru-ui-form.component';

describe('TruUiFormComponent', () => {
  let component: TruUiFormComponent;
  let fixture: ComponentFixture<TruUiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
