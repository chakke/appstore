import { Component, ViewChild } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { StoreModule } from '../../../providers/store/store';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-store-list',
  templateUrl: 'store-list.html',
})
export class StoreListPage {
  @ViewChild(Content) content: Content;
  categories = [];
  constructor(
    private mToastController: ToastController,
    public mPlatform: Platform,
    private navCtrl: NavController,
    private mAppModule: StoreModule,
    private mNavParams: NavParams
  ) {
    if (this.mNavParams.get("category")) this.categories.push(this.mNavParams.get("category"));
  }

  ionViewDidEnter() {
    if (this.mPlatform.is("android")) {
      this.showToast("Platform is Android", 2000);
    } else if (this.mPlatform.is("ios")) {
      this.showToast("Platform is IOS", 2000);
    } else {

    }

  }
  showToast(message: string, duration: number): void {
    let toast = this.mToastController.create({
      message: message,
      duration: duration
    });
    toast.present();

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
