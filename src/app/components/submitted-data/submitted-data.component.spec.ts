import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedDataComponent } from './submitted-data.component';

describe('SubmittedDataComponent', () => {
  let component: SubmittedDataComponent;
  let fixture: ComponentFixture<SubmittedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
