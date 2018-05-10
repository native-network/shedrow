import { TestBed, inject } from '@angular/core/testing';

import { BancorService } from './bancor.service';

describe('BancorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BancorService]
    });
  });

  it('should be created', inject([BancorService], (service: BancorService) => {
    expect(service).toBeTruthy();
  }));
});
