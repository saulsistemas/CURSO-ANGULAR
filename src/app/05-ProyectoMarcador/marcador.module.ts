import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MarcadorComponent } from "./marcador/marcador.component";
import { EquipoComponent } from "./equipo/equipo.component";
import { TopScoreComponent } from './top-score/top-score.component';

@NgModule({
  exports:[
    MarcadorComponent,
    //EquipoComponent
  ],
  declarations:[
    MarcadorComponent,
    EquipoComponent,
    TopScoreComponent
  ],
  imports:[
    CommonModule
  ],

})
export class MarcadorModule {}
