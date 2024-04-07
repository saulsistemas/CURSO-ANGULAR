import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
})
export class ListarClientesComponent implements OnInit{

  public clientes:Cliente[] = [];
  constructor(
    private clientesService:ClientesService
  ){}
 ngOnInit(): void {
   this.clientesService.obtenerCliente()
      .subscribe((res:any)=>{
        this.clientes = res;
        //console.log(this.clientes);
      }, (err:any)=>{
        console.log(err);

      })
 }

}
