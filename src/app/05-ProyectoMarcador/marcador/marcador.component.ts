import { Component } from '@angular/core';
import { Equipo } from '../interfaces/equipo.interface';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
})
export class MarcadorComponent {

  public puntosLocales:number = 0;
  public puntosVisitantes:number = 0;

  equipoLocal:Equipo={
    nombre:'lakers',
    logo:'/assets/img/LAL.svg',
    jugadores:[
      {nombre:'Isaiah Thomas',puntos:0,imagen:'/assets/img/thomas.png'},
      {nombre:'Kyle Kuzma',puntos:0,imagen:'/assets/img/kusma.png'},
      {nombre:'Julius Randle',puntos:0,imagen:'/assets/img/randle.png'},
      {nombre:'Brandom Ingram',puntos:0,imagen:'/assets/img/ingram.png'},
      {nombre:'Brook López',puntos:0,imagen:'/assets/img/lopez.png'}
    ]
  }

  equipoVisitante:Equipo={
    nombre:'celtics',
    logo:'/assets/img/BOS.svg',
    jugadores:[
      {nombre:'Isaiah allen',puntos:0,imagen:'/assets/img/allen.png'},
      {nombre:'Kyle bynes',puntos:0,imagen:'/assets/img/bynes.png'},
      {nombre:'Julius bird',puntos:0,imagen:'/assets/img/bird.png'},
      {nombre:'Brandom brown',puntos:0,imagen:'/assets/img/brown.png'},
      {nombre:'Brook gibson',puntos:0,imagen:'/assets/img/gibson.png'}
    ]
  }
}
