import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreGamePage } from './store-game';

@NgModule({
  declarations: [
    StoreGamePage,
  ],
  imports: [
    IonicPageModule.forChild(StoreGamePage),
  ],
  exports: [
    StoreGamePage
  ]
})
export class StoreGamePageModule {}
