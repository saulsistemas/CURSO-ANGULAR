import { Component } from '@angular/core';
import { Usuario } from '../../01-Binding/interface/usuario.inteface';

@Component({
  selector: 'app-directiva-ng-class',
  templateUrl: './directiva-ng-class.component.html',
  styles: ``
})
export class DirectivaNgClassComponent {
  public usuarios:Array<Usuario> = [
    {nombre:'saul',apellido:'santamaria',equipo:'lakers'},
    {nombre:'carlos',apellido:'ramos',equipo:'celtics'},
    {nombre:'claudio',apellido:'santamaria',equipo:'bulls'},
  ]
}
