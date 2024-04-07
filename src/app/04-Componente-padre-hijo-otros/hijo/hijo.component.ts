import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: ``
})
export class HijoComponent {

  @Input()
  public valorHijo:number=0

  //Pasar datos al componente Padre
  @Output()
  public valor:EventEmitter<any> = new EventEmitter();

  handleChangeValor(){
    this.valor.emit({nuevoValor:50})
  }
}
