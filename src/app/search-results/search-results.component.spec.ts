import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { SearchResultsComponent } from './search-results.component';
import {CountryService} from '../country.service';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    const activatedRouteSpy = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('ActivatedRoute.snapshot.paramMap.get').and.returnValue('')
        }
      }
    };

    const countryServiceSpy = {
      searchCountry: jasmine.createSpy('CountryService.searchCountry').and.returnValue({
        subscribe: jasmine.createSpy('CountryService.searchCountry().subscribe').and.stub()
      })
    };

    TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: CountryService, useValue: countryServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
