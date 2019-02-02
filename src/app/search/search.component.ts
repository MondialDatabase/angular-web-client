import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  countryList: Observable<any>;
  searchForm = this.formBuilder.group({
    country: [null, Validators.required],
    population: [false],
    area: [false],
    capital: [false],
    infantMortality: [false],
    populationGrowthRate: [false],
    government: [false],
    independenceData: [false],
    gdpInMillionsUsd: [false],
    agricultureAsPercentOfGdp: [false],
    serviceAsPercentOfGdp: [false],
    industryAsPercentOfGdp: [false],
    inflationRatePerAnnum: [false],
    totalLengthOfBorder: [false],
    languageData: [false],
    religionData: [false],
    ethnicityData: [false],
    borderingCountryData: [false],
    continentData: [false],
    cityData: [false],
    mountainData: [false],
    seaData: [false],
    riverData: [false],
    islandData: [false],
    lakeData: [false],
    desertData: [false]
  });

  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.countryList = this.countryService.getCountries();
  }

  selectAll() {
    this.searchForm.setValue(
        Object.entries(this.searchForm.controls).reduce((accumulator, [field, value]) => {
          accumulator[field] = (field === 'country') ? value.value : true;
          return accumulator;
      }, {})
    );
  }

  search() {
    this.router.navigate(['/search-results', this.searchForm.value.country, {
      query: Object.entries(this.searchForm.value)
        .filter(([field, value]) => field !== 'country' && value === true)
        .map(([field]) => field)
        .join(',')
    }]);
  }
}
