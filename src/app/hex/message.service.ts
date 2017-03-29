import { Injectable } from '@angular/core';
import { Message } from './message';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class MessageService {
  
  private messagesUrl = 'https://eye2xtzbo8.execute-api.us-west-2.amazonaws.com/prod/';
  
  constructor(private http: Http) {}
  
  
  getMessages(): Promise<Message[]> {
    console.log('getMessages');
    let headers:  Headers  =  new Headers();
    return this.http.get(this.messagesUrl, headers)
                         .toPromise()
                         .then(response => response.json() as Message[])
                         .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
      console.warn('an error occured', error);
      return Promise.reject(error.message || error);
  }
  
}
