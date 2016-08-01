import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

import { RouterConnector } from 'ngrx-store-router';

@Component({
  selector: 'fate-app',
  directives: [ROUTER_DIRECTIVES, StoreLogMonitorComponent],
  styleUrls: [require<string>('./app.component.less')],
  templateUrl: require<string>('./app.component.haml'),
})
export class AppComponent implements OnDestroy, OnInit {

  sidebar: any;
  sidebarOpen: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private routerConnector: RouterConnector
  ) {}

  ngOnInit(): void {
    this.routerConnector.connect();

    this.sidebar =
      ($('.ui.left.sidebar', this.elementRef.nativeElement) as any)
      .sidebar({
        context: $(this.elementRef.nativeElement),
        exclusive: true,
        transition: 'slide along',
        onVisible: () => { this.sidebarOpen = true; },
        onHide: () => { this.sidebarOpen = false; }
      });
  }

  ngOnDestroy(): void {
    this.routerConnector.disconnect();
  }

  onMenuClick(): void {
    this.sidebar.sidebar('toggle');
  }

  onSidebarClick(): void {
    this.sidebar.sidebar('hide');
  }

}

