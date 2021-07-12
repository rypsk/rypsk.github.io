import { TestBed } from '@angular/core/testing';

import { RedataService } from './redata.service';

describe('RedataService', () => {
  let service: RedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
