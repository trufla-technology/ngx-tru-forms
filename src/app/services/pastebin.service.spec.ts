import { TestBed, inject } from '@angular/core/testing';

import { PastebinService } from './pastebin.service';

describe('PastebinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastebinService]
    });
  });

  it('should be created', inject([PastebinService], (service: PastebinService) => {
    expect(service).toBeTruthy();
  }));
});
