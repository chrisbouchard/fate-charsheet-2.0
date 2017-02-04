import { Component, ElementRef, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../app/app.state';
import { UIState } from '../ui/ui.state';

@Component({
  selector: 'fate-app',
  styleUrls: ['./app.component.less'],
  templateUrl: './app.component.haml',
})
export class AppComponent implements OnInit {

  overlayOpen: Observable<boolean>;

  sidebar: any;
  sidebarOpen: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private store: Store<AppState>
  ) {
    this.overlayOpen = store.select(state => state.uiState.overlayOpen);
  }

  ngOnInit(): void {
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

  onMenuClick(): void {
    this.sidebar.sidebar('toggle');
  }

  onSidebarClick(): void {
    this.sidebar.sidebar('hide');
  }

}

