import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

@Component({
  selector: 'fate-app',
  directives: [ROUTER_DIRECTIVES, StoreLogMonitorComponent],
  styleUrls: [require<string>('./app.component.less')],
  templateUrl: require<string>('./app.component.haml'),
})
export class AppComponent {}

