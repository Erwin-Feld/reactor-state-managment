import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStateService } from 'src/app/global-state.service';

import { ReactorState } from 'src/app/models/app.enums.model';
import { SteadyReactorStore } from '../steady-reactor/steady-reactor.store';
import { SwiftReactorStore } from '../swift-reactor/swift-reactor-store';

@Component({
  selector: 'app-reactor-manager',
  templateUrl: './reactor-manager.component.html',
  styleUrls: ['./reactor-manager.component.scss'],
})
export class ReactorManagerComponent implements OnInit {
  public reactorState = ReactorState;
  /* starting State of all Reactor output combined togehter */
  public globalReactorState = ReactorState.LOW;

  constructor(
    private steadyReactorStore: SteadyReactorStore,
    private swiftReactorStore: SwiftReactorStore,
    private globalStateService: GlobalStateService
  ) {}

  globalReactorState$!: Observable<number>;

  currentSteadyReactorState$ = this.steadyReactorStore.select(
    (state) => state.currentState
  );

  currentSwiftReactorState$ = this.swiftReactorStore.select(
    (state) => state.currentState
  );

  ngOnInit(): void {
    this.globalReactorState$ = this.globalStateService.addingReactorStates();
    this.watchGlobalReactorState();
  }

  watchGlobalReactorState(){
    this.globalReactorState$.subscribe((val)=> {
      if(val<1){
        this.globalReactorState = ReactorState.LOW;
      } else if (val>=1 && val<=1.3){
        this.globalReactorState = ReactorState.NORMAL;
      } else if (val >1.3){
        this.globalReactorState = ReactorState.OVERHEATING;
      }
    })
  }
}

