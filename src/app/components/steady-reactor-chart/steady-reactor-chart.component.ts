import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { SteadyReactorStore } from '../steady-reactor/steady-reactor.store';

@Component({
  selector: 'app-steady-reactor-chart',
  templateUrl: './steady-reactor-chart.component.html',
  styleUrls: ['./steady-reactor-chart.component.scss']
})
export class SteadyReactorChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(private steadyReactorStore: SteadyReactorStore) {}

  linchartData = [0, 0];

  currentSteadyReactorState$ = this.steadyReactorStore.select(
    (state) => state.currentState
  );

  ngOnInit(): void {
    this.updateGraphData();
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      /* Add color of font to white  */
      /* siehe Colors https://github.com/valor-software/ng2-charts#readme
       */
      x: {
        display: true /* hide x achsis */,
      },
      y: {
        min: 0.1,
        display: false /* hide y achsis */,
      },
    },
    plugins: {
      legend: {
        display: false /* false oben wird net dargestellt */,
      },
      datalabels: {
        display: false /* hide number */,
        // anchor: 'end',
        // align: 'center',
        // textAlign: 'left'
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['current output', 'max'],

    datasets: [
      {
        data: [0, 1],
        label: 'Lambda reactor current output',
        backgroundColor: '#58CE83',
        borderColor: 'rgba(148,159,177,1)',
        barThickness: 40,
        
      },
    ],
  };

  updateGraphData() {
    this.currentSteadyReactorState$.subscribe((val) => {
      this.barChartData.datasets[0].data.splice(0, 1, val);
      this.chart?.update();
    });
  }

}
