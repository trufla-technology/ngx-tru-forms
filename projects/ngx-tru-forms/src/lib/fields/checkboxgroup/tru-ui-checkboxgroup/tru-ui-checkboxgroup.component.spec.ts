import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruUiCheckboxgroupComponent } from './tru-ui-checkboxgroup.component';

describe('TruUiCheckboxgroupComponent', () => {
  let component: TruUiCheckboxgroupComponent;
  let fixture: ComponentFixture<TruUiCheckboxgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruUiCheckboxgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruUiCheckboxgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
