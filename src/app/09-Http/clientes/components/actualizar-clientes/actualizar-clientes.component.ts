import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-actualizar-clientes',
  templateUrl: './actualizar-clientes.component.html',
})
export class ActualizarClientesComponent implements OnInit {

  public cif:string="";
  public cliente:Cliente={nombre:"",cif:"",direccion:"",localidad:""};

  public form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    cif: new FormControl('', [Validators.required, Validators.minLength(5)]),
    direccion: new FormControl(''),
    localidad: new FormControl(''),
  })


  constructor(
    private route:ActivatedRoute,
    private clientesService:ClientesService,
    private router:Router
  ){}

  ngOnInit(): void {
    //caturar el id de la url
    this.cif = this.route.snapshot.params['cif'];

    this.clientesService.obtenerIdCliente(this.cif)
    .subscribe((res:any)=>{
      this.cliente = res.cliente;

      this.form.patchValue(this.cliente)
    },(error:any)=>{

    })

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cif: new FormControl('', [Validators.required, Validators.minLength(5)]),
      direccion: new FormControl(''),
      localidad: new FormControl(''),
    })
  }

  modificarCliente(){
    this.clientesService.modificarCliente(this.form.value,this.cif)
      .subscribe((res:any)=>{
        this.router.navigate(['/listar'])
        //console.log(res);
      },(error:any)=>{
        console.log(error);

      })
  }

}
