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

import { enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { __PRODUCTION__ } from './globals';

if (__PRODUCTION__) {
  /* Switch Angular to production mode. */
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

