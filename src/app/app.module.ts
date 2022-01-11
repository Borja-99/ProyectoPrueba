import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FilterPageComponent } from './components/filter-page/filter-page.component';
import { NewsCardComponent } from './shared/visual-components/news-card/news-card/news-card.component';
import { NewsGridsComponent } from './shared/visual-components/news-grids/news-grids/news-grids.component';
import { NewsSectionComponent } from './shared/visual-components/news-section/news-section/news-section.component';
import { WhitePageComponent } from './components/white-page/white-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FilterPageComponent,
    NewsCardComponent,
    NewsGridsComponent,
    NewsSectionComponent,
    WhitePageComponent,
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
