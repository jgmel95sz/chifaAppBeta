import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class RecetaIndex {
  constructor(public http: Http, private router: Router) {

  }
  getReceta(){
      let url = URL_SERVICIOS + 'welcome/receta/';
      return this.http.get(url).map(res => res.json());
  }

  getRecetaId(id){
      let url = URL_SERVICIOS + 'welcome/recetaId/'+id;
      return this.http.get(url).map(res => res.json());
  }
}