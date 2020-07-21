import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaDropdownComponent } from './schema-dropdown.component';

describe('SchemaDropdownComponent', () => {
  let component: SchemaDropdownComponent;
  let fixture: ComponentFixture<SchemaDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
