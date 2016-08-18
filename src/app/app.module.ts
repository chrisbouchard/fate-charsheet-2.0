import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { runEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { StoreLogMonitorComponent, useLogMonitor } from '@ngrx/store-log-monitor';

import { HalModule } from 'ng2-hal';
import { provideRouterConnector, routerReducer } from 'ngrx-store-router';

import { CharacterModule } from '../character/character.module';
import { CommonModule } from '../common/common.module';
import { GroupModule } from '../group/group.module';
import { UIModule } from '../ui/ui.module';

import { DEFAULT_APP_STATE } from '../app/app.state.ts';
import { CharacterEffects } from '../character/character.effects';
import { characterReducer } from '../character/character.reducer';
import { uiReducer } from '../ui/ui.reducer';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    CharacterModule,
    CommonModule,
    GroupModule,
    HalModule,
    RouterModule.forRoot(APP_ROUTES),
    UIModule
  ],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, StoreLogMonitorComponent ],
  providers: [
    provideStore({
      characterState: characterReducer,
      router: routerReducer,
      uiState: uiReducer
    }, DEFAULT_APP_STATE),

    instrumentStore({
      monitor: useLogMonitor({
        position: 'right',
        visible: false
      })
    }),

    runEffects(
      CharacterEffects
    ),

    provideRouterConnector()
  ]
})
export class AppModule {}

