import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styles: ``
})
export class PropertyBindingComponent {

  public imagen: string = "/assets/img/santander-red.svg"
  constructor() {
    this.cambiarImagen();
  }
  cambiarImagen(): void {
    const logRojo: string = "/assets/img/santander-red.svg";
    const logoBlanco: string = "/assets/img/santander-white.svg"
    setInterval(() => {
      this.imagen === logRojo ? this.imagen = logoBlanco : this.imagen = logRojo;
    }, 2000)
  }

}
