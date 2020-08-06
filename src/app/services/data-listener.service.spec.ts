import { TestBed } from '@angular/core/testing';

import { DataListenerService } from './data-listener.service';

describe('DataListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataListenerService = TestBed.get(DataListenerService);
    expect(service).toBeTruthy();
  });
});
