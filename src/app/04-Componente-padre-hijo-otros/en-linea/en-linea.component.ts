import { Component } from '@angular/core';
import { Usuario } from '../../01-Binding/interface/usuario.inteface';

@Component({
  selector: 'app-en-linea',
  template: `
    <div class="card">
      <h1>Ejemplo de componente en linea</h1>
      <pre>{{usuario | json}}</pre>
    </div>
  `,
  styles: ``
})
export class EnLineaComponent {
  public usuario:Usuario ={
    nombre:"Saul",
    apellido:"Santamaria",
    fecha : new Date(2025, 7, 17)
  }
}
