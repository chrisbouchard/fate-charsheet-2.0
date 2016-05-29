/* Load packages for side-effects. */
import 'babel-polyfill';
import 'reflect-metadata';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import 'jquery';
import 'rxjs/Rx';
import 'semantic/semantic';

import 'semantic/semantic.css';

import { enableProdMode, provide } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

//import { devtoolsConfig, instrumentStore } from '@ngrx/devtools';
import { runEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

//import { routerMiddleware, routerReducer } from 'ngrx-store-router';

import { AppComponent } from './app/app.component';
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
    ROUTER_PROVIDERS,

    provideStore({
      currentCharacter: characterReducer
    }),
    runEffects(
      CharacterEffects
    ),
    /*
    instrumentStore(),
    devtoolsConfig({
      position: 'right',
      size: 0.3,
      visible: false
    }),
    */

    CharacterActions,
    CharacterFacade,
    HAL_PROVIDERS
  ]).catch(err => console.error(err));
});

