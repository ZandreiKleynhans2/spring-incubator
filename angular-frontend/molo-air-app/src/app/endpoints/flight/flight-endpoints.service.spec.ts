import { TestBed } from '@angular/core/testing';

import { FlightEndpointsService } from './flight-endpoints.service';

describe('FlightEndpointsService', () => {
  let service: FlightEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
