import { Component } from '@angular/core';
import { ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeIndex } from '../../providers/home/home';
import { DomSanitizer } from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  item:any[] = [];
  constructor(protected _sanitizer: DomSanitizer,private _home:HomeIndex,public viewCtrl : ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.dato();
  }
  public closeModal(){
    this.viewCtrl.dismiss();
  }
  safeHtml(html) {
      return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  dato(){
    this._home.getCarta(this.navParams.get("id")).subscribe( 
        data => { 
          if(data.error){
        }else{
          this.item = data.carta;
          }
    });
  }
}
