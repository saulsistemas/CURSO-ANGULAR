import { Component } from '@angular/core';
import { Usuario } from '../interface/usuario.inteface';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styles: ``
})
export class TwoWayBindingComponent {

  public usuario:Usuario ={
    nombre:'Saul',
    apellido:'Santamaria'
  }
}
