import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  countryDataQueryResults: any;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.searchCountry(
      this.route.snapshot.paramMap.get('country'),
      this.route.snapshot.paramMap.get('query').split(',')
    )
      .subscribe(countryDataQueryResults => this.countryDataQueryResults = countryDataQueryResults);
  }

  hasPopulationData(countryDataQueryResults) {
    return countryDataQueryResults.population ||
      countryDataQueryResults.area ||
      countryDataQueryResults.infantMortality ||
      countryDataQueryResults.populationGrowthRate;
  }

  hasGovernanceData(countryDataQueryResults) {
    return countryDataQueryResults.capital ||
      countryDataQueryResults.government ||
      countryDataQueryResults.independenceData ||
      countryDataQueryResults.totalLengthOfBorder;
  }

  hasEconomicData(countryDataQueryResults) {
    return countryDataQueryResults.gdpInMillionsUsd ||
      countryDataQueryResults.agricultureAsPercentOfGdp ||
      countryDataQueryResults.serviceAsPercentOfGdp ||
      countryDataQueryResults.industryAsPercentOfGdp ||
      countryDataQueryResults.inflationRatePerAnnum;
  }

  hasCulturalData(countryDataQueryResults) {
    return countryDataQueryResults.languageData ||
      countryDataQueryResults.religionData ||
      countryDataQueryResults.ethnicityData ||
      countryDataQueryResults.borderingCountryData;
  }

  hasGeographicalData(countryDataQueryResults) {
    return countryDataQueryResults.continentData ||
      countryDataQueryResults.cityData ||
      countryDataQueryResults.mountainData ||
      countryDataQueryResults.seaData ||
      countryDataQueryResults.riverData ||
      countryDataQueryResults.islandData ||
      countryDataQueryResults.lakeData ||
      countryDataQueryResults.desertData;
  }
}
