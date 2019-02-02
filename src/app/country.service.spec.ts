import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { CountryService } from './country.service';

describe('CountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    TestBed.get(HttpClient);
    TestBed.get(HttpTestingController);
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });
});
