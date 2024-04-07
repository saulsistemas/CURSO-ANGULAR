import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MarcadorComponent } from "./marcador/marcador.component";
import { EquipoComponent } from "./equipo/equipo.component";

@NgModule({
  exports:[
    MarcadorComponent,
    //EquipoComponent
  ],
  declarations:[
    MarcadorComponent,
    EquipoComponent
  ],
  imports:[
    CommonModule
  ],

})
export class MarcadorModule {}
