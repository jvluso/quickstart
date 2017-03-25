import { Component, Input, OnInit } from '@angular/core';
import { Matchups } from './matchups';
import { Archetype } from './archetype';
import { MatchupsService } from './matchups.service';

@Component({
  selector: 'my-matchups',
  
  template: `
    <div *ngIf="matchups">
      <h2>Matchups</h2>
      <table border="1">
          <tr>
              <td></td>
              <td *ngFor="let archetype of matchups.archetypes">
                  <span>{{archetype.name}}</span>
              </td>
          </tr>
          <tr *ngFor="let archetype of matchups.archetypes">
              <td>
                  <span>{{archetype.name}}</span>
              </td>
              <td *ngFor="let winPercent of archetype.winPercents">
                  <span>{{winPercent}}</span>
              </td>
          </tr>
      
      </table>
    </div>

`,
  providers: [MatchupsService]
})
  
  
  
  
export class MatchupsDetailComponent implements OnInit {
  @Input()
  matchups: Matchups;
  
  constructor(private matchupsService: MatchupsService) {}
  
  getMatchups(): void {
    this.matchupsService.getMatchups().then(matchups => this.matchups = matchups);
  }
  
  ngOnInit(): void {
    console.log('oninit');
    this.getMatchups();
  }
}

