Error.stackTraceLimit = Infinity;

import 'babel-polyfill';
import 'reflect-metadata';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/sync-test';

import 'jquery';
import 'rxjs/Rx';
import 'semantic/semantic';

import { setBaseTestProviders } from '@angular/core/testing';
import { TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS, TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS }
  from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

const testContext = require.context('./src', true, /\.spec\.ts/);
const modules = requireAll(testContext);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

