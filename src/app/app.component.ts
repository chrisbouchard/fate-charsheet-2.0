import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ToggleSidebarAction } from '../ui/ui.actions';

import { AppState } from './app.state';

@Component({
    selector: 'fate-app',
    styleUrls: ['./app.component.less'],
    templateUrl: './app.component.haml',
})
export class AppComponent implements OnInit {

    overlayOpen: Observable<boolean>;
    sidebarOpen: Observable<boolean>;

    constructor(
        private store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.overlayOpen = this.store.select(state => state.uiState.overlayOpen);
        this.sidebarOpen = this.store.select(state => state.uiState.sidebarOpen);
    }

    onMenuClick(): void {
        this.store.dispatch(new ToggleSidebarAction());
    }

}
