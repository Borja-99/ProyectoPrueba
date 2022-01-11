import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FilterPageComponent } from './components/filter-page/filter-page.component';
import { AppComponent } from './app.component';
import { WhitePageComponent } from './components/white-page/white-page.component';

const routes: Routes = [
  { path: 'whitePage', component: WhitePageComponent},
  { path: 'FilterPage', component: FilterPageComponent},
  { path: 'MainPage', component: MainPageComponent},
  { path: '**', redirectTo: '/MainPage', pathMatch: 'full' }, // Redirect if url path do not match any other route.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
