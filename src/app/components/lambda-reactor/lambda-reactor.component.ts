import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LambdaReactorStore } from './lambda-reactor.store';

@Component({
  selector: 'app-lambda-reactor',
  templateUrl: './lambda-reactor.component.html',
  styleUrls: ['./lambda-reactor.component.scss']
})
export class LambdaReactorComponent implements OnInit {

  constructor(private store: LambdaReactorStore) { }

  reactorStatus = false;

  intervalSubscription!: Subscription;

  storeReactorState$ = this.store.select((state) => state.currentState);
  curentReactorState!: number;

  ngOnInit(): void {
    this.startReactor()
  }


  startReactor() {
    this.intervalSubscription = interval(5000).subscribe(() => {
              /*                            Add bigger rnd rate  */
      const rndFloatNmbr = parseFloat(Math.random().toFixed(2));
      // passedRndNumbr = parseFloat(x);
      this.curentReactorState = rndFloatNmbr;
      this.store.updateState(this.curentReactorState);
      this.reactorStatus = true;
    });
  }

  killReactor() {
    this.intervalSubscription.unsubscribe();
    this.curentReactorState = 0;
    //Add is Side effect
    this.store.updateState(this.curentReactorState);
    this.reactorStatus = false;
  }

}
