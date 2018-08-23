import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CardControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardControllerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CardControllerProvider Provider');
  }

}
