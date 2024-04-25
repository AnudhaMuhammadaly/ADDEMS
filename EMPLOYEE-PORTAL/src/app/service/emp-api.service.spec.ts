import { TestBed } from '@angular/core/testing';

import { EmpAPIService } from './emp-api.service';

describe('EmpAPIService', () => {
  let service: EmpAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
