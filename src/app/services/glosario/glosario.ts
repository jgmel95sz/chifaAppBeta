import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({ providedIn: 'root' })
export class GlosarioIndex {
  constructor(public http: Http, private router: Router) {

  }
  getGlosario(termino:string){
    let url = URL_SERVICIOS + 'welcome/glosario/'+ termino;
    return this.http.get(url).map(res => res.json());
  }
}
