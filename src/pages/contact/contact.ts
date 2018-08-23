import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items = [];

  constructor(public navCtrl: NavController) {
    for (let x = 0; x < 5; x++) {
      this.items.push(x);
    }
  }

  reorderItems(indexes) {
    console.log(indexes);
    this.items = reorderArray(this.items, indexes);
  }

}
