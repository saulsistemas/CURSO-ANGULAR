import { Component, EventEmitter, Input, Output } from '@angular/core';
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


  @Output() public canasta: EventEmitter<any>=new EventEmitter;

  enviarCanasta(puntos: number, nombreJugador:string):void{
    this.canasta.emit({
      puntos,
      nombreJugador
    })
  }
}
