import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: ``
})
export class PipesComponent {

  public ciudad: string = "Lima"
  public id: string = '1';
  public fecha: Date = new Date();
  public numero:number = 1876.765743;


  constructor() {
    this.id = '00' + this.id;
  }
}
