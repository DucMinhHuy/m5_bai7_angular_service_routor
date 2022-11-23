import { TestBed } from '@angular/core/testing';

import { ServicedateService } from './servicedate.service';

describe('ServicedateService', () => {
  let service: ServicedateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
