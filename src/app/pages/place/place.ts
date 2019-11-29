import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecetaIndex } from '../../providers/receta/receta';
import { DomSanitizer } from '@angular/platform-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  item:any[] = [];
  imgs:any[] = [];
  constructor(private socialSharing: SocialSharing,protected _sanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams, private _cs: RecetaIndex) {
  }
  ionViewWillEnter() {
     this.getReceId();
  }
  close(){
    this.navCtrl.pop({
   animate: true,
   direction: 'back',
   animation: 'transition',
});
  }
  safeHtml(html) {
      return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  getReceId(){
    this._cs.getRecetaId(this.navParams.get("id")).subscribe( 
        data => { 
          if(data.error){
        }else{
          this.item = data.receta_principal;
          this.imgs = data.imagenes_receta_principal;
          }
    });
  }
  shareImg(imagen,url,text) {  
    this.socialSharing.share(text,"Tema", "http://elvisalcantara.com/prueba/assets/recetas/compartir/"+imagen, url)
              .then((entries) => {
                console.log('success ' + JSON.stringify(entries));
              })
              .catch((error) => {
                alert('error ' + JSON.stringify(error));
              });
  }
}
