import { Component, OnInit } from '@angular/core';

import { ReactorState } from 'src/app/models/app.enums.model';
import { SteadyReactorStore } from '../steady-reactor/steady-reactor.store';

@Component({
  selector: 'app-reactor-manager',
  templateUrl: './reactor-manager.component.html',
  styleUrls: ['./reactor-manager.component.scss']
})
export class ReactorManagerComponent implements OnInit {

  public reactorState = ReactorState;
  /* starting State of all Reactor output combined togehter */
  public globalReactorState = ReactorState.LOW;

  constructor(private steadyReactorStore: SteadyReactorStore) { }

  currentSteadyReactorState$ = this.steadyReactorStore.select((state) => state.currentState);


  ngOnInit(): void {
  }

}


