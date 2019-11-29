import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';




@Injectable({ providedIn: 'root' })
export class HomeIndex {
  public items: any[] = [];
  token: any[] = [];
  public categories;
 public nuevo: any[] = [];
 pagina:number=0;
 public chifa: any[] = [];
  constructor(public http: Http,  private router: Router,private platform: Platform, private storage: Storage) {
    this.cargar_storage();
   this.cargar_storage_menu();
  }
  getHome(){
    let url = URL_SERVICIOS + 'welcome/numdf/';
    return this.http.get(url).map(res => res.json()).subscribe( 
        data => { 

          if(data.error){
        }else{
            this.categories = data.categoria;
            this.nuevo.push(this.categories);
            this.guardar_storage_menu();
          }
        } );
    
  }
  getChifa(){
    let promesa = new Promise( (resolve, reject) => {
      let url = URL_SERVICIOS + 'welcome/chifa/'+ this.pagina;
      this.http.get(url).map(res => res.json()).subscribe( 
          data => { 
            if(data.error){
          }else{
              this.chifa.push( ...data.chifa);  
              this.pagina = this.pagina+1;
            }
            resolve();
          } );
    });
    return promesa;
  }
  getChifaId(id){
    let url = URL_SERVICIOS + 'welcome/chifaId/'+id;
    return this.http.get(url).map(res => res.json());
  }
  getCarta(id){
    let url = URL_SERVICIOS + 'welcome/carta/'+id;
    return this.http.get(url).map(res => res.json());
  }
  getMap(){
    let url = URL_SERVICIOS + 'welcome/chifaMapId/'+JSON.stringify(this.items);
    return this.http.get(url).map(res => res.json());
  }
   eliminar_mapa(item_parametro:Number){
      for (var i =0; i < this.items.length; i++)
       if (this.items[i].id === item_parametro) {
          this.items.splice(i,1);
          this.guardar_storage();
          return;
       }
  }
  agregar_mapa(item_parametro:any){
    for(let item of this.items){
      if(item.lenght && item.id == item_parametro){
          return; 
      }
    }
    this.items.push({id:item_parametro});
    this.guardar_storage();
  }
  agregar_mapa_menu(item_menu:any){
    this.categories.splice(item_menu,1);
    this.guardar_storage_menu(); 
  
  }
  agregar_mapa_menu_segundo(item_menus:any,i){
    //this.categories.push({id:item_menus.id, nom:item_menus.nom, class:'num'});
    this.categories.splice(i,0,{id:item_menus.id, nom:item_menus.nom, class:'num'});
    this.guardar_storage_menu();
  }
  agregar_mapa_menu_tercero(item_menus:any,i){
    //this.categories.push({id:item_menus.id, nom:item_menus.nom, class:'normal'});
    this.categories.splice(i,0,{id:item_menus.id, nom:item_menus.nom, class:'normal'});
    this.guardar_storage_menu();
  }
  guardar_storage(){
    if(this.platform.is("cordova")){
      //celular
        this.storage.set("items", this.items);

    }else{  
      //desktop
        localStorage.setItem("items", JSON.stringify(this.items));

    }
  }
 guardar_storage_menu(){
    if(this.platform.is("cordova")){
      //celular
        this.storage.set("categories", this.categories);

    }else{  
      //desktop
        localStorage.setItem("categories", JSON.stringify(this.categories));

    }
  }
  public cargar_storage(){
    let promesa = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("items").then(items => {
            if(items){
              this.items = items;
            }
            resolve();
          })
        });
      }else{
        if(localStorage.getItem("items")){
          this.items = JSON.parse(localStorage.getItem("items"));
        }
        resolve();
      }
    });
    return promesa;
  }
  public cargar_storage_menu(){
    let promesa = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
        this.storage.ready().then(()=>{
          this.storage.get("categories").then(items => {
            if(items){
              this.categories = items;
            }
            resolve();
          })
        });
      }else{
        if(localStorage.getItem("categories")){
          this.categories = JSON.parse(localStorage.getItem("categories"));
        }
        resolve();
      }
    });
    return promesa;
  }
  public eliminarSession(){
      if(this.platform.is("cordova")){
        //celular
          this.storage.clear();
          this.items.splice(0, this.items.length);
         this.getHome()
          //this.categories.splice(0, this.categories.length);
      }else{  
        //desktop
          localStorage.clear();
          this.items.splice(0, this.items.length);
          //this.categories.splice(0, this.categories.length);
          this.getHome()
      }
    }
}
