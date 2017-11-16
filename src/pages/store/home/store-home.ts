import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, Content, MenuController, Platform, LoadingController } from 'ionic-angular';
import { StoreModule } from '../../../providers/store/store';
import { AppAnimation } from '../../../providers/app-animation';
import { AppController } from '../../../providers/app-controller';

import { StatusBar } from "@ionic-native/status-bar";

enum ScreenOrientation {
  LANDSCAPE, PORTRAIT
}

enum ScreenType {
  MOBILE, TABLET, PC
}


@IonicPage()
@Component({
  selector: 'page-store-home',
  templateUrl: 'store-home.html',
})
export class StoreHomePage {
  @ViewChild(Content) content: Content;
  categories = [];
 
  mOnMobileDevice: boolean = true;

  mSelectedCategory = {
    "id": 0,
    "title": "",
    "items": []
  };

  constructor(
    private navCtrl: NavController,
    private mAppModule: StoreModule,
    private mMenuController: MenuController,
    private mLoadingController: LoadingController,
    private mPlatform: Platform,
    private mStatusBar: StatusBar
  ) {
  
  }

  ionViewWillEnter() {

    this.onResize({});
  }
  ionViewDidEnter() {
    this.mPlatform.ready().then(() => {
      this.mStatusBar.overlaysWebView(false);
      this.mStatusBar.styleDefault();
    });

    if (!AppController.getInstance().getNavController()) {
      this.mMenuController.enable(false, "lottery");
      this.mMenuController.enable(false, "new69");
      AppController.getInstance().setNavController(this.navCtrl);
      AppController.getInstance().setLoadingController(this.mLoadingController);
      AppController.getInstance().setPlatform(this.mPlatform);
    }


    if (this.categories.length == 0) {
      this.mAppModule.loadConfig().then(() => {
        this.categories = this.mAppModule.getAppConfig().get("categories");
        let index: number = 0;
        for (let item of this.categories) {
          item.items.reverse();
          if (index == 0) {
            this.mSelectedCategory = item;
          }
          index++;
        }
        setTimeout(() => {
          this.onResize({});
        }, 200);
      });
    }
  }

  onSelectCategory(category) {
    let element = document.getElementById("listGameContainer");
    if (element) {
      AppAnimation.getInstance().animate(element, "fadeIn", "400ms");
    }
    this.mSelectedCategory = category;
    this.content.scrollToTop(400);
    setTimeout(() => {
      this.onResize({});
    }, 100);

  }
  onClickItem(game) {
    if (game.page && game.page.length > 0) {
      this.navCtrl.push(game.page);
    } else {
      this.navCtrl.push("StoreGamePage", {
        "game": game
      });
    }

  }

  onClickViewMore(category) {
    this.navCtrl.push("StoreListPage", {
      "category": category
    });
  }

  onResize(event) {
    this.mOnMobileDevice = window.innerWidth <= 480;
    let footers = document.getElementsByClassName("footer-home");
    for (let i = 0; i < footers.length; i++) {
      let footer = footers.item(i);
      if (footer) {
        if (this.content.getScrollElement().clientHeight != this.content.getScrollElement().scrollHeight) {
          if (footer.classList.contains("footer-overlay")) footer.classList.remove("footer-overlay");
        } else {
          if (!footer.classList.contains("footer-overlay")) footer.classList.add("footer-overlay");
        }
      }
    }

  }
}