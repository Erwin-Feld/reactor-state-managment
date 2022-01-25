import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { ReactorManagerComponent } from './components/reactor-manager/reactor-manager.component';
import { SteadyReactorComponent } from './components/steady-reactor/steady-reactor.component';
import { SwiftReactorComponent } from './components/swift-reactor/swift-reactor.component';
import { LambdaReactorComponent } from './components/lambda-reactor/lambda-reactor.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { ChartCompComponent } from './components/chart-comp/chart-comp.component';
import { BarbarChartComponent } from './components/barbar-chart/barbar-chart.component';
import { TestchartComponent } from './components/testchart/testchart.component';
import { FinalbarComponent } from './components/finalbar/finalbar.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { OutputLineChartComponent } from './components/output-line-chart/output-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactorManagerComponent,
    SteadyReactorComponent,
    SwiftReactorComponent,
    LambdaReactorComponent,
    BarchartComponent,
    ChartCompComponent,
    BarbarChartComponent,
    TestchartComponent,
    FinalbarComponent,
    LineChartComponent,
    OutputLineChartComponent
  ],
  imports: [
    BrowserModule,
    // NgxChartsModule,

    NgChartsModule,

    
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
