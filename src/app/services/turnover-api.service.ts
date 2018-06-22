import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class TurnoverApiService {

  constructor(private http: HttpClient) { }

  public authenticate() {
    return this.http.get(API_URL + '/login', httpOptions).pipe(map((res) => res)).subscribe();
  }

  public test() {
    return this.http.get(API_URL + '', httpOptions).pipe(map(
      (res) => {
        console.log(res);
      })
    ).subscribe();
  }

  public logout() {

  }
}
