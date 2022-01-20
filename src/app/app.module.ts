import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactorManagerComponent } from './components/reactor-manager/reactor-manager.component';
import { SteadyReactorComponent } from './components/steady-reactor/steady-reactor.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactorManagerComponent,
    SteadyReactorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
