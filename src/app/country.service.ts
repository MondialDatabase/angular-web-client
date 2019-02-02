import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countryResourceUrl = `${environment.apiUrl}/country`;
  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<any> {
    return this.httpClient.get(this.countryResourceUrl);
  }

  searchCountry(countryCode: string, fieldsToQuery: string[]): Observable<any> {
    fieldsToQuery.unshift('country');

    if (fieldsToQuery.some(field => field === 'languageData')) {
      fieldsToQuery.push('languageData.datumName', 'languageData.datumValue');
    }

    if (fieldsToQuery.some(field => field === 'religionData')) {
      fieldsToQuery.push('religionData.datumName', 'religionData.datumValue');
    }

    if (fieldsToQuery.some(field => field === 'ethnicityData')) {
      fieldsToQuery.push('ethnicityData.datumName', 'ethnicityData.datumValue');
    }

    if (fieldsToQuery.some(field => field === 'borderingCountryData')) {
      fieldsToQuery.push('borderingCountryData.datumName', 'borderingCountryData.datumValue');
    }

    return this.httpClient.get(`${this.countryResourceUrl}/${countryCode}/query?select=${fieldsToQuery.join(',')}`);
  }
}
