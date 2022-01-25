import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { GlobalStateService } from 'src/app/global-state.service';

@Component({
  selector: 'app-finalbar',
  templateUrl: './finalbar.component.html',
  styleUrls: ['./finalbar.component.scss']
})
export class FinalbarComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  linchartData = [0, 0,];

  lineChartData: any[] = [
    { data: this.linchartData, label: 'global state to max' },
  ];

  lineChartLabels: any[] = ['global output', 'max output'];

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


  constructor(private globalStateService: GlobalStateService) { }

  getLatestGlobal$ = this.globalStateService.addingReactorStates();

  getData() {
    this.getLatestGlobal$.subscribe((val) => {
      // console.log(this.lineChartData[0].data)
      // this.lineChartData[0].data = [];
      const x = this.lineChartData[0].data[0] + val

      this.lineChartData[0].data.splice(0,1,x)
      console.log(this.lineChartData[0].data[0])

        this.chart?.update();
      
    });
  }

  ngOnInit(): void {
    this.getData()
  }

}
