import { Component } from '@angular/core';
import { NavController, App, AlertController } from 'ionic-angular';
import { WebContentControllerProvider } from '../../providers/web-content-controller/web-content-controller';
import { CardControllerProvider } from '../../providers/card-controller/card-controller';
import { reorderArray } from 'ionic-angular';
import { Category } from '../../interface/category';
import { Card } from '../../interface/card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = ["1","2","3","4","5"];
  private categories;
  private cards;

  constructor(
    public navCtrl: NavController,
    public app: App,
    public alertCtrl: AlertController,
    private _webContentCtrl: WebContentControllerProvider,
    private _cardsCtrl: CardControllerProvider
  ) {

  }

  ionViewDidLoad() {
    // this.getCategories();
  }

  getCategories() {
    this._cardsCtrl.getCategories()
      .subscribe(categories => {
        console.log(categories);
        this.categories = categories;

        for (var c in categories) {
          // var column = categories[c];
          // var cardColumn = this._webContentCtrl.addCardColumn(this, column, this.showPrompt, this.addAnotherCard);
          // this.categories.push(cardColumn);
        }

        this.getCards();
      });
  }

  getCards() {
    this._cardsCtrl.getCards()
      .subscribe(cards => {
        console.log(cards);
        this.cards = cards;
      });
  }

  reorderItems(indexes) {
    console.log(indexes);
    this.items = reorderArray(this.items, indexes);
  }

  addAnotherCard(context, column) {
    var columnContent = <HTMLScriptElement>column.getElementsByTagName("ion-card-content")[0];
    var cloned = <HTMLScriptElement>columnContent.firstElementChild.cloneNode(true);
    cloned.removeAttribute("hidden");
    cloned.addEventListener('click', (event) => this.showPrompt(this, cloned));
    columnContent.appendChild(cloned);

    for(var c in context.cardColumns){
      if( column === context.cardColumns[c]){
        console.log(c);
      }
    }

  }

  showPrompt(context, card) {
    var cardHeader = card.getElementsByTagName("ion-card-header")[0];
    var cardContent = card.getElementsByTagName("ion-card-content")[0];

    var prompt = context.alertCtrl.create({
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: cardHeader.textContent.trim()
        },
        {
          name: 'description',
          placeholder: 'Description',
          value: cardContent.textContent.trim()
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
