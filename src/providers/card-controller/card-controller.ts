import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../interface/category';
import { Card } from '../../interface/card';


/*
  Generated class for the CardControlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers : {
    "Content-Type" : "application/json"
  }
};

@Injectable()
export class CardControllerProvider {

  apiUrl:string = 'http://localhost:3000';
  // cards:Card;

  constructor(public http: HttpClient) {
    console.log('Hello CardControlProvider Provider');
  }

  addCategory( category:Category ): Observable<{}> {
    return this.http.post(`${this.apiUrl}/categories/`, category, httpOptions);
  }

  addCards( card:Card ): Observable<{}> {
    return this.http.post(`${this.apiUrl}/cards/`, card, httpOptions);
  }

  getCategories(): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/categories/`);
  }

  getCards(): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/cards/`);
  }

}
