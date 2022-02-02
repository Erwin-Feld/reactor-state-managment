import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, baseColors, } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { LambdaReactorStore } from '../lambda-reactor/lambda-reactor.store';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(private lambdaReactorStore: LambdaReactorStore) { }

  linchartData = [0, 0,];

  currentLambdaReactorState$ = this.lambdaReactorStore.select(
    (state) => state.currentState
  );

  ngOnInit(): void {
    this.updateGraphData()
  }


  // public barChartColors: any[] = [
  //   { backgroundColor: 'red' },
  //   { backgroundColor: 'green' },
  // ]

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      /* Add color of font to white  */
      /* siehe Colors https://github.com/valor-software/ng2-charts#readme
      */
      x: {
        display: false, /* hide x achsis */
      },
      y: {
        min: 0.1,
        display: false /* hide y achsis */
      }
    },
    plugins: {
      legend: {
        display: false, /* false oben wird net dargestellt */
      },
      datalabels: {
        display: false, /* hide number */
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'current output','max' ],
    
    datasets: [
            
      { data: [ 0, 1], 
        label: 'Lambda reactor current output',
        backgroundColor: 'rgba(245, 149, 39, 0.8)',
        borderColor: 'rgba(148,159,177,1)',
        
     
       },
     
      
    ],


  };



  updateGraphData() {
    this.currentLambdaReactorState$.subscribe((val) => {
      this.barChartData.datasets[0].data.splice(0,1,(val))
      console.log(this.barChartData.datasets[0].data)
      // this.lineChartData.datasets.forEach((x, i) => {
      //   x.data.push(val);
      // });
      // this.lineChartData?.labels?.push(
      //   `cycle ${this.lineChartData.labels.length}`
      // );

      this.chart?.update();
    });
  }



  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

}
