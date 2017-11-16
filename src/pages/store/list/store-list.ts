import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { StoreModule } from '../../../providers/store/store';

@IonicPage()
@Component({
  selector: 'page-store-list',
  templateUrl: 'store-list.html',
})
export class StoreListPage {
  @ViewChild(Content) content: Content;
  categories = [];
  constructor(
    private navCtrl: NavController,
    private mAppModule: StoreModule,
    private mNavParams: NavParams
  ) {
    if (this.mNavParams.get("category")) this.categories.push(this.mNavParams.get("category"));
  }

  ionViewDidEnter() {

  }
  onClickItem(item) {
    if (item.link.length > 0) {
      this.navCtrl.push("StoreGamePage", {
        "game": item
      });
    } else if (item.page.length > 0) {

    }

  }
  onClickBack() {
    this.navCtrl.pop();
  }

}
