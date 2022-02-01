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
import { BarchartComponent } from './components/barchart/barchart.component';
import { SwiftReactorChartComponent } from './components/swift-reactor-chart/swift-reactor-chart.component';
import { SteadyReactorChartComponent } from './components/steady-reactor-chart/steady-reactor-chart.component';
import { LambdaReactorChartComponent } from './components/lambda-reactor-chart/lambda-reactor-chart.component';

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
    DescriptionSectionComponent,
    BarchartComponent,
    SwiftReactorChartComponent,
    SteadyReactorChartComponent,
    LambdaReactorChartComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
