import { Component, ElementRef, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

@Component({
  selector: 'fate-app',
  directives: [ROUTER_DIRECTIVES, StoreLogMonitorComponent],
  styleUrls: [require<string>('./app.component.less')],
  templateUrl: require<string>('./app.component.haml'),
})
export class AppComponent implements OnInit {

  private sidebar: any;
  private sidebarOpen: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.sidebar =
      ($('.ui.sidebar', this.elementRef.nativeElement) as any)
      .sidebar({
        context: $(this.elementRef.nativeElement),
        transition: 'slide along',
        onVisible: () => { this.sidebarOpen = true; },
        onHide: () => { this.sidebarOpen = false; }
      });
  }

  onMenuClick(): void {
    this.sidebar.sidebar('toggle');
  }

}

