import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'node_modules/chart.js';
import { baseColors } from 'ng2-charts';

import { BaseChartDirective } from 'ng2-charts';

import { GlobalStateService } from 'src/app/global-state.service';

@Component({
  selector: 'app-barbar-chart',
  templateUrl: './barbar-chart.component.html',
  styleUrls: ['./barbar-chart.component.scss'],
})
export class BarbarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  linchartData = [1, 2, 3];

  lineChartData: any[] = [
    { data: this.linchartData, label: 'Crude oil prices' },
  ];

  lineChartLabels: any[] = ['January', 'February', 'March'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit(): void {
    this.getData();
  }

  getLatest$ = this.globalStateService.getLatestTwo();

  getData() {
    this.getLatest$.subscribe((val) => {
      // console.log(this.lineChartData[0].data)
      this.lineChartData[0].data = [];
      for (let i of val) {
        this.lineChartData[0].data.push(i);
        console.log(this.lineChartData[0].data);
        // console.log(this.linchartData)
        this.chart?.update();
      }
    });
  }
}
