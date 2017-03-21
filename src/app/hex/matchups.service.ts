import { Injectable } from '@angular/core';
import { Matchups } from './matchups';
import { MATCHUPS } from './mock-matchups';

@Injectable()
export class MatchupsService {
  getMatchups(): Promise<Matchups> {
    return Promise.resolve(MATCHUPS);
  }
  
}
