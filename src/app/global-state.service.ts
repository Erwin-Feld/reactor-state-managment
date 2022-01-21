import { Injectable } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { additionReducer, roundNumber } from './arithmetic.functions';
import { LambdaReactorStore } from './components/lambda-reactor/lambda-reactor.store';
import { SteadyReactorStore } from './components/steady-reactor/steady-reactor.store';
import { SwiftReactorStore } from './components/swift-reactor/swift-reactor-store';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  constructor(
    private steadyReactorStore: SteadyReactorStore,
    private swiftReactorStore: SwiftReactorStore,
    private lambdaReactorStore: LambdaReactorStore,
  ) {}

  currentSteadyReactorState$ = this.steadyReactorStore.select(
    (state) => state.currentState
  );

  currentSwiftReactorState$ = this.swiftReactorStore.select(
    (state) => state.currentState
  );

  currentLambdaReactorState$ = this.lambdaReactorStore.select(
    (state) => state.currentState
  );


  /**
   * 
   * @returns Observable of combinded values of all current reactor states
   * roundNumber function needed to avoid js floating point bug
   */
  addingReactorStates() {
    const addedReacorStates = combineLatest([
      this.currentSteadyReactorState$,
      this.currentSwiftReactorState$,
      this.currentLambdaReactorState$,
      
    ])
      .pipe(map((values) => values.reduce(additionReducer)))
      .pipe(map((values) => roundNumber(values)));

      return addedReacorStates
  }
}
