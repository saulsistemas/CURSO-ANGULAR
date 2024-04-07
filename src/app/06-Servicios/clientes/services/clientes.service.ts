import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes:Array<Cliente> = [
    {nombre:'Saul',codigo:'1',domicilio:'Argentina'},
    {nombre:'carlos',codigo:'2',domicilio:'Perú'},
    {nombre:'miguel',codigo:'3',domicilio:'Venezuel'},
  ]

  constructor() { }

  obtenerClientes():Array<Cliente>{
    return this.clientes;
  }

  actualizarCliente(cliente:Cliente){
    this.clientes.push(cliente)
  }
}
