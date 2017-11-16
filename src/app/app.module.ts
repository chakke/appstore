import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpService } from '../providers/http-service';

import { StoreModule } from '../providers/store/store';


@NgModule({
  declarations: [
    MyApp
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          statusbarPadding: false
        }
      },
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot()
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpService,
    StoreModule
  ]
})
export class AppModule { }
