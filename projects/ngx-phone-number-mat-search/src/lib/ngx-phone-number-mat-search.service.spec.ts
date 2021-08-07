import { TestBed } from '@angular/core/testing';

import { NgxPhoneNumberMatSearchService } from './ngx-phone-number-mat-search.service';

describe('NgxPhoneNumberMatSearchService', () => {
  let service: NgxPhoneNumberMatSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPhoneNumberMatSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
