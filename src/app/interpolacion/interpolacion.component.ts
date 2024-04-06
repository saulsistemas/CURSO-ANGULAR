import { Component } from '@angular/core';
import { Usuario } from '../interface/usuario.inteface';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styles: ``
})
export class InterpolacionComponent {
  public usuario:Usuario ={
    nombre:"Saul",
    apellido:"Santamaria",
    fecha : new Date(2025, 7, 17)
  }
}
