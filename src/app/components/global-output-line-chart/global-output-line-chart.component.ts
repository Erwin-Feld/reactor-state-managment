import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GlobalStateService } from 'src/app/global-state.service';

@Component({
  selector: 'app-global-output-line-chart',
  templateUrl: './global-output-line-chart.component.html',
  styleUrls: ['./global-output-line-chart.component.scss'],
})
export class GlobalOutputLineChartComponent implements OnInit {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [0],
        label: 'global Output',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['output'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0': {
        position: 'left',
      },
      // 'y-axis-1': {
      //   position: 'right',
      //   grid: {
      //     color: 'rgba(255,0,0,0.3)',
      //   },
      //   ticks: {
      //     color: 'red',
      //   },
      // },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = 0;
      // const num = LineChartComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(
      `Label ${this.lineChartData.labels.length}`
    );

    this.chart?.update();
  }

  constructor(private globalStateService: GlobalStateService) {}

  currentGlobalOutput$ = this.globalStateService.addingReactorStates();

  updateGraphData() {
    this.currentGlobalOutput$.subscribe((val) => {
      this.lineChartData.datasets.forEach((x, i) => {
        x.data.push(val);
      });
      this.lineChartData?.labels?.push(
        `cycle ${this.lineChartData.labels.length}`
      );

      this.chart?.update();
    });
  }

  ngOnInit(): void {
    this.updateGraphData()
  }
}
