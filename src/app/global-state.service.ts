import { Injectable } from '@angular/core';
import { SteadyReactorStore } from './components/steady-reactor/steady-reactor.store';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  constructor(
    private steadyReactorStore: SteadyReactorStore
  ) { }

  currentSteadyReactorState$ = this.steadyReactorStore.select((state) => state.currentState);

  
}
