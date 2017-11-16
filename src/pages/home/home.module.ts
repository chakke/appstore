import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { StatusBar } from '@ionic-native/status-bar';
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule {
  constructor(private statusBar: StatusBar) {
    this.statusBar.styleDefault();
  }
}
