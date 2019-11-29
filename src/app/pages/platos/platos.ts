import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlatoIndex } from '../../providers/plato/plato';

@IonicPage()
@Component({
  selector: 'page-platos',
  templateUrl: 'platos.html',
})
export class PlatosPage {
  tipo = "Salado";
  searching: boolean = false;
  myInput: string = "";
  termino:string = "vacio";
  public platos : Array<Object> = [];
  public categorias : Array<Object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _pla:PlatoIndex) {
    
  }

  ionViewWillEnter() {
    this.loadPlaces();

  }
  
  loadPlaces(){
    this._pla.getPlato(this.termino).subscribe( 
        data => { 
          if(data.error){
        }else{
            this.platos = data.platos;
          }
        } );
  }

  find(ev: any) {
    let valor = ev.target.value;
    console.log(valor);
    this._pla.getPlato(valor).subscribe( 
        data => { 
          if(data.error){
        }else{
            this.platos = data.platos;
          }
        } );
  }

  onCancelSearch(){
    this.searching = false;
    this.loadPlaces();
  }
  search(){
    this.searching = true;
  }
}
