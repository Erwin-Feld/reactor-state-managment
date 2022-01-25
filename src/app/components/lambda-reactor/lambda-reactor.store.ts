import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ReactorState } from 'src/app/models/reactor-state.interface';


@Injectable({
  providedIn: 'root',
})
export class LambdaReactorStore extends ComponentStore<ReactorState> {
  constructor() {
    /* set initial state value */
    super({
      currentState: 0,
    });
  }

  /**
   * 
   * updates state of the property value currentState
   */
  readonly updateState = this.updater((state, value: number) => ({
    ...state,
    currentState: value,
  }));

   getStuff(){
    return {name: "lamba",
            state: this.select(state => state.currentState)}
  }

}


