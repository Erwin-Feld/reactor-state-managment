import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, map, Observable, of } from 'rxjs';
import { additionReducer, roundNumber } from './arithmetic.functions';
import { LambdaReactorStore } from './components/lambda-reactor/lambda-reactor.store';
import { SteadyReactorStore } from './components/steady-reactor/steady-reactor.store';
import { SwiftReactorStore } from './components/swift-reactor/swift-reactor-store';
import { dto } from './models/dto.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  constructor(
    private steadyReactorStore: SteadyReactorStore,
    private swiftReactorStore: SwiftReactorStore,
    private lambdaReactorStore: LambdaReactorStore
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

    return addedReacorStates;
  }

  // replace any with your type (returned from currentLambdaReactorState$)
  combined(): Observable<[{ name: string; value: number }]> {
    return this.currentLambdaReactorState$.pipe(
      // shorthand object literal return
      map((e) => [{ name: 'foo', value: e }])
    );
  }

  getLatest() {
    const valuesAll = [];
    const addedReacorStates = combineLatest([
      this.currentSteadyReactorState$,
      this.currentSwiftReactorState$,
      this.currentLambdaReactorState$,
      this.addingReactorStates(),
    ]).pipe(
      map((values) => [
        { name: 'steady', value: values[0] },
        { name: 'swift', value: values[1] },
        { name: 'lambda', value: values[2] },
        { name: 'all', value: values[3] },
        { name: 'max', value: 3 }
      ])
    );

    return addedReacorStates;
  }


  getLatestTwo() {
    const valuesAll = [];
    const addedReacorStates = combineLatest([
      this.currentSteadyReactorState$,
      this.currentSwiftReactorState$,
      this.currentLambdaReactorState$,
      this.addingReactorStates(),
    ]).pipe(
      map((values) => [
        values[0], values[1], values[2]
      ])
    );

    return addedReacorStates;
  }

  // getall(): Observable<
  //   [
  //     { name: string; value: number },
  //     { name: string; value: number },
  //     { name: string; value: number }
  //   ]
  // > {
  //   const addedReacorStates = combineLatest([
  //     this.currentSteadyReactorState$,
  //     this.currentSwiftReactorState$,
  //     this.currentLambdaReactorState$,
  //   ]).pipe(
  //     map((values) => [
  //       { name: 'steady', value: values[0] },
  //       { name: 'steady', value: values[1] },
  //       { name: 'steady', value: values[2] },
  //     ])
  //   );

  //   return addedReacorStates;
  //   // .pipe(map((values) => ([{name: "steady", value: values[0]},
  //   // {name: "steady", value: values[1]},
  //   // {name: "steady", value: values[2]}]) )
  // }

  // combined() {
  //   this.currentLambdaReactorState$.subscribe((e) => {
  //     let dto = of([
  //       {
  //         name: 'foo',
  //         value: e,
  //       },
  //     ])
  //       return dto
  //   });
  // }
}
