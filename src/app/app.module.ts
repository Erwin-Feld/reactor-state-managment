import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { ReactorManagerComponent } from './components/reactor-manager/reactor-manager.component';
import { SteadyReactorComponent } from './components/steady-reactor/steady-reactor.component';
import { SwiftReactorComponent } from './components/swift-reactor/swift-reactor.component';
import { LambdaReactorComponent } from './components/lambda-reactor/lambda-reactor.component';
import { GlobalOutputLineChartComponent } from './components/global-output-line-chart/global-output-line-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactorSectionComponent } from './components/reactor-section/reactor-section.component';
import { ReactorManagerSectionComponent } from './components/reactor-manager-section/reactor-manager-section.component';
import { DescriptionSectionComponent } from './components/description-section/description-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactorManagerComponent,
    SteadyReactorComponent,
    SwiftReactorComponent,
    LambdaReactorComponent,
    GlobalOutputLineChartComponent,
    HeaderComponent,
    ReactorSectionComponent,
    ReactorManagerSectionComponent,
    DescriptionSectionComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
