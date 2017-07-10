import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

import { __PRODUCTION__ } from './globals';

if (__PRODUCTION__) {
    /* Switch Angular to production mode. */
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    .catch(err => console.log(err));
