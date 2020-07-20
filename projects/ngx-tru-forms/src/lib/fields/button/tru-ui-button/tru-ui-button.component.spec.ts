import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiButtonComponent } from './tru-ui-button.component';

describe('TruUiButtonComponent', () => {
  let component: TruUiButtonComponent;
  let fixture: ComponentFixture<TruUiButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
