import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { RouterConnector } from 'ngrx-store-router';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../app/app.state';
import { UIState } from '../ui/ui.state';

@Component({
  selector: 'fate-app',
  styleUrls: [require<string>('./app.component.less')],
  templateUrl: require<string>('./app.component.haml'),
})
export class AppComponent implements OnDestroy, OnInit {

  overlayOpen: Observable<boolean>;

  sidebar: any;
  sidebarOpen: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private routerConnector: RouterConnector,
    private store: Store<AppState>
  ) {
    this.overlayOpen = store.select(state => state.uiState.overlayOpen);
  }

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

