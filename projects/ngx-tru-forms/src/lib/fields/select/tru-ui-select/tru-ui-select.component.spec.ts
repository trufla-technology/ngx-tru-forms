import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiSelectComponent } from './tru-ui-select.component';

describe('TruUiSelectComponent', () => {
  let component: TruUiSelectComponent;
  let fixture: ComponentFixture<TruUiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
