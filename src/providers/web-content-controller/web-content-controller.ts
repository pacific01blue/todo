import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebContentControlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebContentControllerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WebContentControlProvider Provider');
  }

  addCardColumn(context, cardsColumn, cardFunc, btnFunc) {
    var cards = cardsColumn["card"];

    var row = <HTMLScriptElement>document.getElementsByTagName("ion-row")[0];
    var col = <HTMLScriptElement>row.getElementsByTagName('ion-col')[0];
    var cloned = <HTMLScriptElement>col.cloneNode(true);
    cloned.removeAttribute("hidden");

    var columnHeader = <HTMLScriptElement>cloned.getElementsByTagName("ion-card-header")[0];
    var columnHeaderInput = <HTMLInputElement>columnHeader.getElementsByTagName("input")[0];
    

    var columnContent = <HTMLScriptElement>cloned.getElementsByTagName("ion-card-content")[0];
    for (var c in cards) {
      var card = cards[c];
      this.addCard(context, columnContent, cardFunc, card);
    }

    var btn_add = <HTMLScriptElement>cloned.getElementsByTagName("span")[0];
    btn_add.addEventListener('click', (event) => btnFunc(context, cloned));

    row.appendChild(cloned);
    return cloned;
  }

  addCard(context, columnContent, cardFunc, json) {
    var cloned = columnContent.firstElementChild.cloneNode(true);
    cloned.removeAttribute("hidden");
    cloned.addEventListener('click', (event) => cardFunc(context, cloned));

    var header = <HTMLScriptElement>cloned.getElementsByTagName("ion-card-header")[0];
    var headerInput = <HTMLInputElement>header.getElementsByTagName("input")[0];
    if(json["title"] !== "")
      headerInput.value = json["title"];

    var content = <HTMLScriptElement>cloned.getElementsByTagName("ion-card-content")[0];
    var contentInput = <HTMLInputElement>content.getElementsByTagName("input")[0];
    if(json["content"] !== "")
      contentInput.value = json["content"];
    

    columnContent.append(cloned);
  }

}
