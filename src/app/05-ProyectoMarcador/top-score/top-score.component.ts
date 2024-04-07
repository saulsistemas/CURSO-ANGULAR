import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from '../interfaces/equipo.interface';
import { Jugador } from '../interfaces/jugador.interface';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styles: ``
})
export class TopScoreComponent implements OnInit{

  @Input() public equipoLocal:Equipo ={
    nombre:'',
    logo:'',
    jugadores:[{nombre:'',puntos:0,imagen:''}]
  }



  @Input() public equipoVisitante:Equipo ={
    nombre:'',
    logo:'',
    jugadores:[{nombre:'',puntos:0,imagen:''}]
  }
  public jugadores:Array<Jugador>=[{nombre:'',puntos:0,imagen:''}]
  constructor() {
    //
    //console.log(this.jugadores);

  }
  ngOnInit(){
    this.jugadores = [...this.equipoLocal.jugadores,...this.equipoVisitante.jugadores]
    console.log(this.equipoLocal);

  }

  ngAfterContentChecked(){
    this.sortJugadores()
  }

  sortJugadores(){
    this.jugadores.sort((a:any,b:any)=>{
      return (b.puntos -a.puntos)
    })
  }
}
