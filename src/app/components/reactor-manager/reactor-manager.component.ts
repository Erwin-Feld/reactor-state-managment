import { Component, OnInit } from '@angular/core';

import { ReactorState } from 'src/app/models/app.enums.model';

@Component({
  selector: 'app-reactor-manager',
  templateUrl: './reactor-manager.component.html',
  styleUrls: ['./reactor-manager.component.scss']
})
export class ReactorManagerComponent implements OnInit {

  public reactorState = ReactorState;
  public globalReactorState = ReactorState.LOW_OUTPUT;

  constructor() { }

  ngOnInit(): void {
  }

}


