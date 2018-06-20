import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class TurnoverApiService {

  constructor(private http: HttpClient) { }

  public authenticate(): Observable<Object> {
    return this.http.get(API_URL + '/login', httpOptions);
  }

  public logout() {

  }
}
