import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';
import {CountryService} from '../country.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    const countryServiceSpy = jasmine.createSpyObj('CountryService', ['getCountries']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        SearchComponent
      ],
      providers: [
        { provide: CountryService, useValue: countryServiceSpy },
        { provide: Router, useValue: null }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
