import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController } from 'ionic-angular';
import {SearchPage} from '../search/search';
import { HomeIndex } from '../../providers/home/home';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-place-static',
  templateUrl: 'place-static.html',
})
export class PlaceStaticPage {
  profileModal : any;
  showHorario : boolean = false;
  item:any[] = [];
  img:any[] = [];
  horario:any[] = [];
  public textColor: any;
  constructor(private socialSharing: SocialSharing,private _home:HomeIndex,private modal: ModalController,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
    this.dato();

  }
  close(){
    this.navCtrl.pop();
  }
  dato(){
    this._home.getChifaId(this.navParams.get("id")).subscribe( 
        data => { 
          if(data.error){
        }else{
          this.item = data.chifa;
          this.img = data.imagen;
          this.horario = data.horario;
          }
    });
  }
  mostrar(){
    this.showHorario = !this.showHorario;
  }
  cerrar(){
    this.showHorario = false;
    console.log("HOla");
    this.textColor = 'animated fadeInUp';
  }
 openModal(id) {
  this.profileModal = this.modal.create(SearchPage, {id: id}, { cssClass: "modal-fullscreen" });
  this.profileModal.present();
  }
  shareImg(imagen,url,text) {  
            this.socialSharing.share(text,"Tema", "https://chaman.pe/sis/assets/chifa/compartir/"+imagen, url)
              .then((entries) => {
                console.log('success ' + JSON.stringify(entries));
              })
              .catch((error) => {
                alert('error ' + JSON.stringify(error));
              });
  }
}
