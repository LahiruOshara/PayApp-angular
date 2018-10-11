import { TestBed, inject } from '@angular/core/testing';

import { GetinfoService } from './getinfo.service';

describe('GetinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetinfoService]
    });
  });

  it('should be created', inject([GetinfoService], (service: GetinfoService) => {
    expect(service).toBeTruthy();
  }));
});
