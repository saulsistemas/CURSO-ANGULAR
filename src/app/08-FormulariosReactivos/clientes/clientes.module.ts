import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddComponent
  ],
  declarations: [
    AddComponent,
    ListComponent
  ]
})
export class ClientesModule { }
