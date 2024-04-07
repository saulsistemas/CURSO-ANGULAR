import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

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

  obtenerIdCliente(cif:any){
    return this.http.get(this.baseUrl+'/'+cif)
      .pipe(
        map((data:any)=>{
         return data
        })
      )
  }

  agregarCliente(cliente:Cliente){
    return this.http.post(this.baseUrl,cliente)
      .pipe(
          map((data:any)=>{
            return data
          })
      )
  }

  modificarCliente(cliente:Cliente,cif:any){
    return this.http.put(this.baseUrl+"/"+cif,cliente)
      .pipe(
          map((data:any)=>{
            return data
          })
      )
  }

  eliminarCliente(cif:any){
    return this.http.delete(this.baseUrl+"/"+cif)
    .pipe(
      map((data:any)=>{
        return data
      })
  )
  }
}
