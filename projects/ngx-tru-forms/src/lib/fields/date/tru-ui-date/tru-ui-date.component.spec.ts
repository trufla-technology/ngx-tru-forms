import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiDateComponent } from './tru-ui-date.component';

describe('TruUiDateComponent', () => {
  let component: TruUiDateComponent;
  let fixture: ComponentFixture<TruUiDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
