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

import { CharacterFacade } from './common/character-facade';
import { AppComponent } from './app/app.component';

import { HAL_PROVIDERS } from './hal';

import { __PRODUCTION__ } from './globals';

if (__PRODUCTION__) {
  /* Switch Angular to production mode. */
  enableProdMode();
}

$(() => {
  bootstrap(AppComponent, [
    CharacterFacade,
    FORM_PROVIDERS,
    HAL_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ]).catch(err => console.error(err));
});

