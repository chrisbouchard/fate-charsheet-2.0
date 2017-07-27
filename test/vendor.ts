Error.stackTraceLimit = Infinity;

import { JSDOM, VirtualConsole } from 'jsdom';

const virtualConsole = new VirtualConsole();
virtualConsole.sendTo(console);

const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>', {
    referrer: 'http://fate.upliftinglemma.net',
    url: 'http://fate.upliftinglemma.net',
    virtualConsole
});

const window: any = dom.window;

global['window'] = window;
global['document'] = window.document;
window.console = global.console;

Object.keys(window).forEach(property => {
    if (global[property] === undefined) {
        global[property] = window[property];
    }
});

import 'babel-polyfill';
import 'core-js/es7/reflect';
import 'web-animations-js';

/* The order of these imports is important, so tslint should shut up about it. */
/* tslint:disable:ordered-imports */
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/mocha-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
/* tslint:enable:ordered-imports */

import 'jquery';
import 'rxjs/Rx';
