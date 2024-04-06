import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-switch',
  templateUrl: './directiva-ng-switch.component.html',
  styles: ``
})
export class DirectivaNgSwitchComponent {

  public estado:string ="success";

  metodoSuccess():void{
    this.estado = "success";
  }
  metodoWarning():void{
    this.estado = "warning";
  }
  metodoDanger():void{
    this.estado = "danger";
  }
}
