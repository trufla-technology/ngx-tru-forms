import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiComponent } from './tru-ui.component';

describe('TruUiComponent', () => {
  let component: TruUiComponent;
  let fixture: ComponentFixture<TruUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
