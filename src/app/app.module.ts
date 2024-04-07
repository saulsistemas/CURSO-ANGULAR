import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './01-Binding/interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './01-Binding/property-binding/property-binding.component';
import { EventBindingComponent } from './01-Binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './01-Binding/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { OneWayBindingComponent } from './01-Binding/one-way-binding/one-way-binding.component';
import { PipesComponent } from './02-Pipes/pipes/pipes.component';
import { DirectivaNgIfComponent } from './03-Directivas/directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgSwitchComponent } from './03-Directivas/directiva-ng-switch/directiva-ng-switch.component';
import { DirectivaNgForComponent } from './03-Directivas/directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgClassComponent } from './03-Directivas/directiva-ng-class/directiva-ng-class.component';
import { DirectivaNgStyleComponent } from './03-Directivas/directiva-ng-style/directiva-ng-style.component';
import { PadreComponent } from './04-Componente-padre-hijo-otros/padre/padre.component';
import { HijoComponent } from './04-Componente-padre-hijo-otros/hijo/hijo.component';
import { EnLineaComponent } from './04-Componente-padre-hijo-otros/en-linea/en-linea.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    OneWayBindingComponent,
    PipesComponent,
    DirectivaNgIfComponent,
    DirectivaNgSwitchComponent,
    DirectivaNgForComponent,
    DirectivaNgClassComponent,
    DirectivaNgStyleComponent,
    PadreComponent,
    HijoComponent,
    EnLineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
