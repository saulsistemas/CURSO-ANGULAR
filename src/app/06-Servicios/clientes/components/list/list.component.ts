import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public clientes:Array<Cliente> =[];

  constructor(private _clientesService: ClientesService){

    this.clientes = this._clientesService.obtenerClientes();
    console.log(this.clientes);


  }


}
