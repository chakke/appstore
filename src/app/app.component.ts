import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppController } from '../providers/app-controller';

export class MenuItem {
  name: string;
  id: number;
  icon: string;
  page: string;
  isActive: boolean
}
export class MenuCategory {
  id: number;
  name: string;
  items: Array<MenuItem>;
}
export class Menu {
  id: number;
  name: string;
  active: boolean;
  categories: Array<MenuCategory>;
}
export class AppMenu {
  menus: Array<Menu>;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  startPage: string = "StoreHomePage";

   rootPage: any = this.startPage;

  mMenuController: MenuController;
  
  mLotteryMenu: any = [];

  mLotteryMenuOther: Array<MenuItem> = [];
  constructor( public platform: Platform, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();
      AppController.getInstance().setPlatform(platform);
    });
  }

}
