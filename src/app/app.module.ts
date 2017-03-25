import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './hex/in-memory-data.service';

import { AppComponent }  from './app.component';
import { MatchupsDetailComponent } from './hex/matchups-detail.component';
import { MatchupsService } from './hex/matchups.service';




@NgModule({
  providers: [
    MatchupsService
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
    AppComponent,
    MatchupsDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
  
  
export class AppModule { }
