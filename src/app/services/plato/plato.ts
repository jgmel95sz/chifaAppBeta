import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class PlatoIndex {
  constructor(public http: Http,  private router: Router) {

  }
  getPlato(termino:string){
      let url = URL_SERVICIOS + 'welcome/plato/'+ termino;
      return this.http.get(url).map(res => res.json());
  }
  getCategoria(){
      let url = URL_SERVICIOS + 'welcome/categoriaPlato/';
      return this.http.get(url).map(res => res.json());
  }
}
