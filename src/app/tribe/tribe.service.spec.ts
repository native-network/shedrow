import { TestBed, inject } from '@angular/core/testing';

import { TribeService } from './tribe.service';

describe('TribeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TribeService]
    });
  });

  it('should be created', inject([TribeService], (service: TribeService) => {
    expect(service).toBeTruthy();
  }));
});
