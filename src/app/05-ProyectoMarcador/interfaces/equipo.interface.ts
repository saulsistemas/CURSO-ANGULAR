import { Jugador } from "./jugador.interface";

export interface Equipo {
  nombre:string,
  logo:string,
  jugadores:Array<Jugador>
}
