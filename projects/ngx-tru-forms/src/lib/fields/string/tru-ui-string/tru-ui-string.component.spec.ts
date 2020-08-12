import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiStringComponent } from './tru-ui-string.component';

describe('TruUiStringComponent', () => {
  let component: TruUiStringComponent;
  let fixture: ComponentFixture<TruUiStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
