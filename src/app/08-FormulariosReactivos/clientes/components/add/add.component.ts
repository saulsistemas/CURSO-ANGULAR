import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add.component.html',
})
export class AddComponent  {

  public form:FormGroup = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    codigo: new FormControl('',[Validators.required,Validators.minLength(5)]),
    domicilio: new FormControl(''),
  })

  constructor(){


  }

  enviarCliente():void{
    console.log(this.form.value);

  }

}
