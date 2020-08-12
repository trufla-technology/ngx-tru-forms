import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiArrayComponent } from './tru-ui-array.component';

describe('TruUiArrayComponent', () => {
  let component: TruUiArrayComponent;
  let fixture: ComponentFixture<TruUiArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
