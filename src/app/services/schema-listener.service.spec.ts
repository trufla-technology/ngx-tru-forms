import { TestBed } from '@angular/core/testing';

import { SchemaListenerService } from './schema-listener.service';

describe('SchemaListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchemaListenerService = TestBed.get(SchemaListenerService);
    expect(service).toBeTruthy();
  });
});
