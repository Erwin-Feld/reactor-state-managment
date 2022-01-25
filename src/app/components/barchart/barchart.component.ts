import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStateService } from 'src/app/global-state.service';
import { dto } from 'src/app/models/dto.interface';
import { LambdaReactorStore } from '../lambda-reactor/lambda-reactor.store';

import { productSales, productSalesMulti, oneValue } from './data';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit {
 

  constructor(private lambdaReactorStore: LambdaReactorStore,
    private globalStateService: GlobalStateService ) {}

  currentLambdaReactorState$ = this.lambdaReactorStore.select(
    (state) => state.currentState
  );

  globalStuff$ = this.globalStateService.combined();

  getLatest$ = this.globalStateService.getLatest();

  ngOnInit(): void {
    this.getValues()
  }

  getValues(){
    this.globalStateService.getLatest().subscribe(val => {
      console.log(val)
    })
  }



  

  // empty$:Observable<dto> = this.globalStateService.singleObject();


  // getValue(){
  //   this.globalStuff$.subscribe((val)=> {
  //     console.log(val)
  //   })
   
  // }



}
