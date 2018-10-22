import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // typical "service-in-service" scenario
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Service could get data from anywhere > a web service, local storage, or a mock data source.

  /*to make an asynchronous service call , fetching flat mock data 
  //getHeroes(): Observable<Hero[]> {
  // 	// TODO: send the message _after_ fetching the heroes
  // this.messageService.add('HeroService: fetched heroes');
  // return of(HEROES);
  // }

   getHero(id: number):Observable<Hero>{
   this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** GET heroes from the server */
   private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

 private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
 }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

     getHero(id: number):Observable<Hero>{
   this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}

