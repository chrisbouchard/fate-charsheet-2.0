Error.stackTraceLimit = Infinity;

import 'babel-polyfill';
import 'reflect-metadata';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';

import 'jquery';
import 'rxjs/Rx';
import 'semantic/semantic';

import * as testing from '@angular/core/testing';
import * as browser from '@angular/platform-browser-dynamic/testing';

testing.setBaseTestProviders(
  browser.TEST_BROWSER_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_APPLICATION_PROVIDERS
);

Object.assign(global, testing);

var testContext = require.context('./src', true, /\.spec\.ts/);
var modules = requireAll(testContext);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

