import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styles: ``
})
export class OneWayBindingComponent {

  public nombre:string = 'spiderman';
  public edad:number = 15;

  get capitalizarNombre():string{
    return this.nombre.toUpperCase();
  }

  descripcionHeroe():string{
    return `${this.nombre} - ${this.edad}`
  }
}
