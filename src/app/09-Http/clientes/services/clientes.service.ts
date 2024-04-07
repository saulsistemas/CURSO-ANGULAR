import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl: string = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }

  obtenerCliente(){
    return this.http.get(this.baseUrl)
      .pipe(
        map((data: any) => {
          return data;
        })
      )
  }
}
