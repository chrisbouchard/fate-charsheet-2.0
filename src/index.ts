/* Load packages for side-effects. */
import 'babel-polyfill';
import 'reflect-metadata';
import 'web-animations-js';

import 'zone.js/dist/zone';

import 'zone.js/dist/long-stack-trace-zone';

import 'jquery';
import 'rxjs/Rx';
import 'semantic/semantic';

import 'semantic/semantic.css';

import { FORM_PROVIDERS } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { runEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';

import { provideRouterConnector, routerReducer } from 'ngrx-store-router';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { CharacterActions } from './character/character.actions';
import { CharacterEffects } from './character/character.effects';
import { characterReducer } from './character/character.reducer';
import { CharacterState } from './character/character.state';
import { CharacterFacade } from './common/character-facade';
import { __PRODUCTION__ } from './globals';
import { HAL_PROVIDERS } from './hal';
import { UIState } from './model/ui-state';
import { UIActions } from './ui/ui.actions';
import { uiReducer } from './ui/ui.reducer';

if (__PRODUCTION__) {
  /* Switch Angular to production mode. */
  enableProdMode();
}

$(() => {
  bootstrap(AppComponent, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,

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

    provideRouterConnector(),

    APP_ROUTER_PROVIDERS,
    CharacterActions,
    CharacterFacade,
    HAL_PROVIDERS,
    UIActions
  ]).catch(err => console.error(err));
});

