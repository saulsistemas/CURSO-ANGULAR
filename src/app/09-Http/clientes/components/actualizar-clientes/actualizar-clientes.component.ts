import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-actualizar-clientes',
  templateUrl: './actualizar-clientes.component.html',
})
export class ActualizarClientesComponent implements OnInit {

  public cif:string="";
  constructor(
    private route:ActivatedRoute,
    private clientesService:ClientesService
  ){}

  ngOnInit(): void {
    //caturar el id de la url
    this.cif = this.route.snapshot.params['cif'];

    this.clientesService.obtenerIdCliente(this.cif)
    .subscribe((res:any)=>{
      console.log(res);

    },(error:any)=>{

    })

  }


}
