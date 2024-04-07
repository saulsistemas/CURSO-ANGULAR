import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
})
export class AgregarClientesComponent {
  public form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    cif: new FormControl('', [Validators.required, Validators.minLength(5)]),
    direccion: new FormControl(''),
    localidad: new FormControl(''),
  })

  constructor(
    private clientesService: ClientesService,
    private router:Router
  ) { }
  enviarCliente(): void {
    this.clientesService.agregarCliente(this.form.value)
      .subscribe((res: any) => {
        this.router.navigate(['/listar'])
        console.log(res);
      }, (error: any) => {
        console.log(error);
      })
    //console.log(this.form.value);
  }
}
