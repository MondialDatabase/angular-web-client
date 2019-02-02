import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {SearchResultsComponent} from './search-results/search-results.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'search-results/:country', component: SearchResultsComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
