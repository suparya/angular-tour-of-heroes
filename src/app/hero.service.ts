import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // typical "service-in-service" scenario
  constructor(private messageService: MessageService) { }

   // Service could get data from anywhere > a web service, local storage, or a mock data source.
  //to make an asynchronous service call
  getHeroes(): Observable<Hero[]> {
  	// TODO: send the message _after_ fetching the heroes
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
}
}

