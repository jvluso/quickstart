import { Injectable } from '@angular/core';
import { Matchups } from './matchups';
import { Archetype } from './archetype';
import { Message } from './message';
import { MessageService } from './message.service';
import { MESSAGES } from './mock-messages';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MatchupsService {
  
  private messagesUrl = 'api/messages';
  
  constructor(private http: Http,
              private messageService: MessageService) {}
  
  
  calculateMatchups(messages: Message[]): Matchups {
    console.log(messages);
  
    let size: number = (Math.sqrt(messages.length * 8 + 1) + 1) / 2;
    if (size !== Math.floor(size)) {
      return {archetypes : []};
    }
    let archetypes: Archetype[] = [];
    for (let i = 0; i < size; i++) {
      let winPercents: number[] = [];
      for (let j = 0; j < size; j++) {
        if (i < j) {
          let message: Message = messages.filter(message => message.ARank === j && message.BRank === i)[0];
          winPercents.push(message.BWins * 200 / (message.AWins + message.BWins) - 100);
        }else if (i === j) {
          winPercents.push(0);
        }else {
          let message: Message = messages.filter(message => message.ARank === i && message.BRank === j)[0];
          winPercents.push(message.AWins * 200 / (message.AWins + message.BWins) - 100);
        }
      }
      let message: Message = messages.filter(message => message.ARank === i)[0];
      let name: string;
      if (message == null) {
          message = messages.filter(message => message.BRank === i)[0];
          name = message.BName;
      }else {
          name = message.AName;
      }
      archetypes.push({
          name : name,
          winPercents : winPercents
      });
    }
    return {archetypes};
  }
    
    
    
  getMatchups(): Promise<Matchups> {
    console.log('getMatchups');
    return this.messageService.getMessages()
                         .then(response => this.calculateMatchups(response) as Matchups)
                         .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
      console.warn('an error occured', error);
      return Promise.reject(error.message || error);
  }
  
}
