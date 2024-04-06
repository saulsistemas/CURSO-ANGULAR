import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './01-Binding/interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './01-Binding/property-binding/property-binding.component';
import { EventBindingComponent } from './01-Binding/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
