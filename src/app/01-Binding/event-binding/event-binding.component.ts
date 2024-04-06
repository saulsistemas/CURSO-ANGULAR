import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: ``
})
export class EventBindingComponent {
  public hora:string = ('0' + new Date().getHours())

  setHora():void{
    const hh = ('0' + new Date().getHours()).slice(-2)
    const mm = ('0' + new Date().getMinutes()).slice(-2)
    const ss = ('0' + new Date().getSeconds()).slice(-2)

    this.hora = hh +':'+mm+':'+ss;
  }
}
