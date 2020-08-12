import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiErrorComponent } from './tru-ui-error.component';

describe('TruUiErrorComponent', () => {
  let component: TruUiErrorComponent;
  let fixture: ComponentFixture<TruUiErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
