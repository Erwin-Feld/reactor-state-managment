import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { SwiftReactorStore } from './swift-reactor-store';

@Component({
  selector: 'app-swift-reactor',
  templateUrl: './swift-reactor.component.html',
  styleUrls: ['./swift-reactor.component.scss']
})
export class SwiftReactorComponent implements OnInit {

  constructor(private store: SwiftReactorStore) { }

 
  intervalSubscription!:Subscription;

  storeReactorState$ = this.store.select((state) => state.currentState);
  curentReactorState!: number;

  ngOnInit(): void {
  }

  startReactor() {
    this.intervalSubscription = interval(1000).subscribe(() => {
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
