import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-store-game',
  templateUrl: 'store-game.html',
})
export class StoreGamePage {
  src = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.src = this.navParams.get("game").link;
  }

  ionViewDidLoad() {

  }
  ionViewDidEnter() {
    let iFrame = <HTMLIFrameElement>document.getElementById("myFrame");
    if (iFrame) {
      iFrame.src = this.src;
    }
  }
  onClickBack() {
    this.navCtrl.pop();
  }
}
