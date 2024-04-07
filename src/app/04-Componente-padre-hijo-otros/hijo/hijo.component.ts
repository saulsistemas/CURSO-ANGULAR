import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: ``
})
export class HijoComponent {

  @Input()
  public valorHijo:number=0
}
