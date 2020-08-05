import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkDropdownComponent } from './framework-dropdown.component';

describe('FrameworkDropdownComponent', () => {
  let component: FrameworkDropdownComponent;
  let fixture: ComponentFixture<FrameworkDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
