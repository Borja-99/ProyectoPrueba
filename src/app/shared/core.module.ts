import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatToolbarHarness} from '@angular/material/toolbar/testing';
import { MAT_DATE_LOCALE_FACTORY } from '@angular/material/core';

@NgModule({
    imports: [
      RouterModule,
    ],
    exports: [
      MatToolbar,
      MatToolbarHarness
    ],
    declarations: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class CoreModule {}
