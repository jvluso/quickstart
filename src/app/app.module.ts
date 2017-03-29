import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppComponent }  from './app.component';
import { MatchupsDetailComponent } from './hex/matchups-detail.component';
import { MatchupsService } from './hex/matchups.service';
import { MessageService } from './hex/message.service';




@NgModule({
  providers: [
    MatchupsService,
    MessageService
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    MatchupsDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
  
  
export class AppModule { }
