import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add.component.html',
})
export class AddComponent {

  public form:FormGroup = new FormGroup({
    nombre: new FormControl(''),
    codigo: new FormControl(''),
    domicilio: new FormControl(''),
  })

}
