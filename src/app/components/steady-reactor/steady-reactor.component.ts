import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { rndIntervalRate } from '../shared-functions';
import { SteadyReactorStore } from './steady-reactor.store';

@Component({
  selector: 'app-steady-reactor',
  templateUrl: './steady-reactor.component.html',
  styleUrls: ['./steady-reactor.component.scss']
})
export class SteadyReactorComponent implements OnInit {

  constructor(private store: SteadyReactorStore) { }

  
  
  intervalSubscription!: Subscription;

  storeReactorState$ = this.store.select((state) => state.currentState);
  curentReactorState!: number;

  ngOnInit(): void {
  }


  startReactor() {
    this.intervalSubscription = interval(4000).subscribe(() => {
      const rndFloatNmbr = parseFloat(Math.random().toFixed(2));
      // passedRndNumbr = parseFloat(x);
      this.curentReactorState = rndFloatNmbr;
      this.store.updateState(this.curentReactorState);
    });
  }

  killReactor() {
    this.intervalSubscription.unsubscribe();
    this.curentReactorState = 0;
    //Add is Side effect
    this.store.updateState(this.curentReactorState);
  }


}
