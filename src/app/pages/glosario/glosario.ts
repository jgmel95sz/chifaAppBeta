import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlosarioIndex } from '../../providers/glosario/glosario';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-glosario',
  templateUrl: 'glosario.html',
})
export class GlosarioPage {
  showSearch : boolean = false;
  termino:string = "vacio";
  public platos : Array<Object> = [];
  public glosario : Array<Object> = [];
  public compartir;
  constructor(private socialSharing: SocialSharing,public navCtrl: NavController, public navParams: NavParams, private _glo:GlosarioIndex) {
  }

  ionViewWillEnter() {
    this.loadPlaces();
  }
  

  find(ev: any) {
    let valor = ev.target.value;
    console.log(valor);
    this._glo.getGlosario(valor).subscribe( 
        data => { 
          if(data.error){
        }else{
            this.glosario = data.glosario;
            this.compartir = data.glosario_compartir;
          }
        } );
  }
  
  loadPlaces(){
    this._glo.getGlosario(this.termino).subscribe( 
        data => { 
          if(data.error){
        }else{
            this.glosario = data.glosario;
            this.compartir = data.glosario_compartir;
          }
        } );
  }

  onCancelSearch(){
    this.loadPlaces();
    this.showSearch = false;
  }
  search(){
    this.showSearch = true;
  }
  shareImg(imagen,url,text) {  
    this.socialSharing.share(text,"Tema", "https://chaman.pe/sis/assets/glosario/"+imagen, url)
              .then((entries) => {
                console.log('success ' + JSON.stringify(entries));
              })
              .catch((error) => {
                alert('error ' + JSON.stringify(error));
              });
  }
}
