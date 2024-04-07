import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: ``
})
export class PadreComponent {
  public valorPadre :number = 10;

  constructor(){
    this.cambiarValor();
  }

  cambiarValor():void{
    setTimeout(()=>{
      this.valorPadre = 30
    },3000)
  }

  capturarValor($event:any):void{
    this.valorPadre = $event.nuevoValor
  }
}
