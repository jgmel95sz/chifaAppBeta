import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HistoriaIndex } from '../../providers/historia/historia';
import { DomSanitizer } from '@angular/platform-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',
})
export class HistoriaPage {
  @ViewChild(Slides) slides: Slides;
  lista_historia:any[] = [];
  public compartir;
  constructor(private socialSharing: SocialSharing,protected _sanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams, private _his:HistoriaIndex) {
  }

  ionViewWillEnter() {
    this.historia();
  }
  historia(){
  	this._his.getHistoria().subscribe( 
        data => { 
          if(data.error){
        }else{
            this.lista_historia = data.historia;
            this.compartir = data.historia_compartir;
          }
        } );
  }

	safeHtml(html) {
      return this._sanitizer.bypassSecurityTrustHtml(html);
 	}
  shareImg(imagen,url,text) {  
    this.socialSharing.share(text,"Tema", "https://chaman.pe/sis/assets/historia/compartir/"+imagen, url)
              .then((entries) => {
                console.log('success ' + JSON.stringify(entries));
              })
              .catch((error) => {
                alert('error ' + JSON.stringify(error));
              });
  }
}
