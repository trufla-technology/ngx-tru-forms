import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiMultiselectComponent } from './tru-ui-multiselect.component';

describe('TruUiMultiselectComponent', () => {
  let component: TruUiMultiselectComponent;
  let fixture: ComponentFixture<TruUiMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
