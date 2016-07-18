/* Load packages for side-effects. */
import 'babel-polyfill';
import 'reflect-metadata';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/zone';

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

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { CharacterActions } from './character/character.actions';
import { CharacterEffects } from './character/character.effects';
import { characterReducer } from './character/character.reducer';
import { CharacterFacade } from './common/character-facade';
import { __PRODUCTION__ } from './globals';
import { HAL_PROVIDERS } from './hal';

if (__PRODUCTION__) {
  /* Switch Angular to production mode. */
  enableProdMode();
}

$(() => {
  bootstrap(AppComponent, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,

    provideStore({
      currentCharacter: characterReducer
    }),
    runEffects(
      CharacterEffects
    ),
    instrumentStore({
      monitor: useLogMonitor({
        position: 'right',
        visible: false
      })
    }),

    APP_ROUTER_PROVIDERS,
    CharacterActions,
    CharacterFacade,
    HAL_PROVIDERS
  ]).catch(err => console.error(err));
});

