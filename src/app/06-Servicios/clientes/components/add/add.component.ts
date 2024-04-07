import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  public cliente:Cliente = {
    nombre:'sds',
    codigo:'',
    domicilio:''
  }

  constructor(private _clientesService:ClientesService){

  }
  agregarCliente(){
    this._clientesService.actualizarCliente(this.cliente)

  }
}
