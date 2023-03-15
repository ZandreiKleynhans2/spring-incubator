import { TestBed } from '@angular/core/testing';

import { CustomerEndpointsService } from './customer-endpoints.service';

describe('CustomerEndpointsService', () => {
  let service: CustomerEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
