import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDesignComponent } from './material-design.component';

describe('MaterialDesignComponent', () => {
  let component: MaterialDesignComponent;
  let fixture: ComponentFixture<MaterialDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
