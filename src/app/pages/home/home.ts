import { Component, ViewChild } from '@angular/core';
import { NavController,  ModalController, Slides } from 'ionic-angular';
import { HomeIndex } from '../../providers/home/home';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps';
import { PlacesPage } from '../places/places';
import { PlaceStaticPage } from '../place-static/place-static';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  public selectedCategory: any;
  public showLeftButton: boolean;
  public showRightButton: boolean;
  map: GoogleMap;
  profileModal : any;
  markers: any[] = [];
   constructor(public navCtrl: NavController,public modalCtrl: ModalController, private _home:HomeIndex) {
  }
  ionViewWillEnter(){
  this._home.eliminarSession();
  this.map.clear();
  this.iconos();
    this._home.getHome();
  }
  ionViewDidLoad() {
  this.loadMap();
  }
  ionViewWillLeave(){
   this._home.eliminarSession();
  }
  hola(numero,i){
    this._home.agregar_mapa(numero.id);
   this._home.agregar_mapa_menu(i);
    this._home.agregar_mapa_menu_segundo(numero,i);
    this.map.clear();
    this.iconos();
  }
  delete(numero,i){
   this._home.eliminar_mapa(numero.id); 
   this._home.agregar_mapa_menu(i);  
   this._home.agregar_mapa_menu_tercero(numero,i);
   this.map.clear();
  this.iconos();
  }
  loadMap() {
     let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: -12.0210517,
           lng: -77.0120473
         },
         zoom: 10,
         tilt: 30
       }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
       this.iconos();
    })
  }
  iconos(){
   this._home.getMap().subscribe( 
        data => { 
          if(data.error){
        }else{
            this.markers = data.chifa;
           for(let i = 0; i < this.markers.length; i++){
                this.map.addMarker({
                 position : this.markers[i],
                 icon : 'red',
                 title : this.markers[i].nombre,
               }).then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                console.log(this.markers[i].id);
                  this.irPlaceStage(this.markers[i].id);
              });
          });
             }
          }
        } );
  }
  getPosition(): void{
   this.map.getMyLocation()
    .then(response => {
      this.map.moveCamera({
        target: response.latLng
      });
      this.map.addMarker({
        title: 'Yo',
        icon: 'blue',
        animation: 'DROP',
        position: response.latLng
      });
    })
    .catch(error =>{
      console.log(error);
    });
  }
  irPlaceStage(ids){
   this._home.eliminarSession();
    let myModal = this.modalCtrl.create(PlaceStaticPage,{id:ids});
    myModal.present();
      this.map.clear();
      this.iconos();
  }
  places(){
   this._home.eliminarSession();
  let myModal = this.modalCtrl.create(PlacesPage,null,   { cssClass: "modal-fullscreen-g" });
  myModal.present();
   this.map.clear();
    this.iconos();
  }

}