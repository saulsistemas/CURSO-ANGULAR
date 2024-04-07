import { Component, Input } from '@angular/core';
import { Equipo } from '../interfaces/equipo.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: ``
})
export class EquipoComponent {

  @Input() public equipo:Equipo ={
    nombre:'',
    logo:'',
    jugadores:[{nombre:'',puntos:0,imagen:''}]
  }
}
