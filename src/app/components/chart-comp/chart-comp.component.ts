import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, map, Observable, of } from 'rxjs';
import { Chart, registerables } from 'node_modules/chart.js';
import { GlobalStateService } from 'src/app/global-state.service';

@Component({
  selector: 'app-chart-comp',
  templateUrl: './chart-comp.component.html',
  styleUrls: ['./chart-comp.component.scss'],
})
export class ChartCompComponent implements OnInit {
  constructor(private globalStateService: GlobalStateService) {}

  linchartData = [1, 2, 3];

  getLatest$ = this.globalStateService.getLatestTwo();

  // chart = new Chart('myChart', {
  //   type: 'bar',
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green',],
  //     datasets: [
  //       {
  //         label: '# of Votes',
  //         data: this.linchartData,
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)',
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)',
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });


  ngOnInit(): void {
  
    this.createChart();
    this.getData();
    // this.chart
  }

  getData() {
   
      this.getLatest$.subscribe(val =>{
        this.linchartData = [];
        for (let i of val) {
          this.linchartData.push(i);
          console.log(this.linchartData)
        }
      })

  }
  // how to acces the innter stuff ?

  createChart() {
  
    Chart.register(...registerables);
    // Add how to do data change 
    //  ---> function einfügen 
    //  wie wird die ausgeführt 

    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green',],
        datasets: [
          {
            label: '# of Votes',
            data: this.linchartData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });


  
    
  }
}
