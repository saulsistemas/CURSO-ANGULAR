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

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    OneWayBindingComponent
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
