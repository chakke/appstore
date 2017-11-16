import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, Platform } from 'ionic-angular';

import { AppController } from '../../providers/app-controller';
import { AppInterface } from '../../providers/app-constant';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  _apps: Array<AppInterface> = [
    { startpage: "LotteryLoadingPage", icon: "assets/icon/lottery.png", name: "SoiCau69" },
    { startpage: "CasinoSlotMachinePage", icon: "assets/icon/casino.png", name: "69Live" },
    { startpage: "WiadsLoginPage", icon: "assets/icon/wiads.png", name: "Wiads" },
    { startpage: "BusinoLoginPage", icon: "assets/icon/busino.png", name: "Busino" },
    { startpage: "DepartureLoadingPage", icon: "assets/icon/departure.png", name: "Lịch khổng minh" },
    { startpage: "Web69HomePage", icon: "assets/icon/icon.png", name: "Mobile Web" },
    { startpage: "QBTicketingLoadingPage", icon: "assets/icon/icon.png", name: "QB Ticketing" },
    { startpage: "New69HomePage", icon: "assets/icon/new69.png", name: "New69"}
  ];
  constructor(
    private mMenuController: MenuController,
    private navCtrl: NavController,
    public navParams: NavParams,
    private mLoadingController: LoadingController,
    private mPlatform: Platform) {

  }
  ionViewDidEnter() {
    this.mMenuController.enable(false, "lottery"); 
    this.mMenuController.enable(false, "new69");
    AppController.getInstance().setNavController(this.navCtrl);
    AppController.getInstance().setLoadingController(this.mLoadingController);
    AppController.getInstance().setPlatform(this.mPlatform);

  }
  onClickOpenApp(app: AppInterface) {
    this.navCtrl.setRoot(app.startpage, {
      app: app
    }, {
        animate: true,
        direction: 'forward',
        duration: 300
      });
  }

}
