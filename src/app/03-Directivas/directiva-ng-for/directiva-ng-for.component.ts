import { Component } from '@angular/core';
import { Usuario } from '../../01-Binding/interface/usuario.inteface';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styles: ``
})
export class DirectivaNgForComponent {

  public usuarios:Array<Usuario> =[
    {nombre:'saul',apellido:'santamaria'},
    {nombre:'carlos',apellido:'ramos'},
    {nombre:'claudio',apellido:'santamaria'},
  ]
}
