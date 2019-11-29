import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PlaceStaticPage } from '../place-static/place-static';
import { HomeIndex } from '../../providers/home/home';
@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  public selectedCategory: any;
  public asd: any;
  PlaceStaticPage = PlaceStaticPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, private _home:HomeIndex) {

  }
  ionViewWillEnter() {
    this._home.getChifa();
  }
  siguiente_pagina(infinite){
    this._home.getChifa().then(()=> {
        infinite.complete();
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
    this._home.pagina = 0;
    this._home.chifa = [];
  }

}
