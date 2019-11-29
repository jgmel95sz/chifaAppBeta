import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceStaticPage } from './place-static';

@NgModule({
  declarations: [
    PlaceStaticPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceStaticPage),
  ],
})
export class PlaceStaticPageModule {}
