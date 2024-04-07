import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-style',
  templateUrl: './directiva-ng-style.component.html',
  styles: ``
})
export class DirectivaNgStyleComponent {
  public puntuacion:number =0;

  obtenerColor():string{
    if (this.puntuacion>=7) {
      return 'green'
    }else if(this.puntuacion>=5){
      return 'orange'
    }else{
      return 'red'
    }

  }
}
