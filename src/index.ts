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

import { devtoolsConfig, instrumentStore } from '@ngrx/devtools';
import { provideStore } from '@ngrx/store';

import { routerMiddleware, routerReducer } from 'ngrx-store-router';

import { AppComponent } from './app/app.component';
import { CharacterFacade } from './common/character-facade';
import { __PRODUCTION__ } from './globals';
import { HAL_PROVIDERS } from './hal';
import { AppActions } from './store/app-actions';
import { appReducer } from './store/app-reducer';
import { thunkMiddleware } from './store/thunk-middleware';

if (__PRODUCTION__) {
  /* Switch Angular to production mode. */
  enableProdMode();
}

$(() => {
  bootstrap(AppComponent, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,

    provideStore({app: appReducer}),
    instrumentStore(),
    devtoolsConfig({
      position: 'right',
      size: 0.3,
      visible: false
    }),

    AppActions,
    CharacterFacade,
    HAL_PROVIDERS,
    thunkMiddleware
  ]).catch(err => console.error(err));
});

