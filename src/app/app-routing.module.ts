import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FilterPageComponent } from './components/filter-page/filter-page.component';

const routes: Routes = [
  { path: 'MainPage', component: MainPageComponent},
  { path: 'FilterPage', component: FilterPageComponent},
  { path: '**', redirectTo: '/MainPage', pathMatch: 'full' }, // Redirect if url path do not match any other route.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
