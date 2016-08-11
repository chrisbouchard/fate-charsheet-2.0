import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { runEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { StoreLogMonitorComponent, useLogMonitor } from '@ngrx/store-log-monitor';

import { provideRouterConnector, routerReducer } from 'ngrx-store-router';

import { CharacterModule } from '../character/character.module';
import { CommonModule } from '../common/common.module';
import { GroupModule } from '../group/group.module';
import { HalModule } from '../hal/hal.module';
import { UIModule } from '../ui/ui.module';

import { CharacterEffects } from '../character/character.effects';
import { characterReducer } from '../character/character.reducer';
import { CharacterState } from '../character/character.state';
import { uiReducer } from '../ui/ui.reducer';
import { UIState } from '../ui/ui.state';

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
    }, {
      characterState: new CharacterState(),
      uiState: new UIState()
    }),

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

