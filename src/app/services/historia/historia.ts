import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({ providedIn: 'root' })
export class HistoriaIndex {
  constructor(public http: Http, private router: Router)  {

  }
  getHistoria(){
    let url = URL_SERVICIOS + 'welcome/historia/';
    return this.http.get(url).map(res => res.json());
  }
}
