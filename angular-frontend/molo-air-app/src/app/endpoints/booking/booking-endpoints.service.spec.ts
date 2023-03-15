import { TestBed } from '@angular/core/testing';

import { BookingEndpointsService } from './booking-endpoints.service';

describe('BookingEndpointsService', () => {
  let service: BookingEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
