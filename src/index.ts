/* Load packages for side-effects. */
import 'babel-polyfill';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import 'jquery';
import 'rxjs/Rx';
import 'semantic/semantic';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { CharacterFacade } from './common/character_facade';
import { App } from './app/app';

import { HAL_PROVIDERS } from './hal';

import { __PRODUCTION__ } from './globals';

/* Load CSS stylesheets. */
import 'semantic/semantic.css';

if (__PRODUCTION__) {
  /* Switch Angular to production mode. */
  enableProdMode();
}

$(() => {
  bootstrap(App, [
    CharacterFacade,
    HAL_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {
      useClass: HashLocationStrategy
    })
  ]).catch(err => console.error(err));
});

