import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';

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

  agregarCliente(){
    console.log(this.cliente);

  }
}
