import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacePage } from '../place/place';
import { RecetaIndex } from '../../providers/receta/receta';
import { DomSanitizer } from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-recetas',
  templateUrl: 'recetas.html',
})
export class RecetasPage {
  PlacePage = PlacePage;
  listaRecetas:any[] = [];
  constructor(protected _sanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams, private _cs: RecetaIndex) {
  }

 ionViewWillEnter(){
    this.getRece();
  }
  safeHtml(html) {
      return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  getRece(){
    this._cs.getReceta().subscribe( 
        data => { 
          if(data.error){
        }else{
            this.listaRecetas = data.recetas;
          }
        } );
  }
  open(ids){
    this.navCtrl.push(PlacePage,{id:ids},{animate: true, animation: "transition"});
  }
}
