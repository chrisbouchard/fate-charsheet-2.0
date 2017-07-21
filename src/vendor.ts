/* Load packages for side-effects. */
import 'babel-polyfill';
import 'core-js/es7/reflect';
import 'web-animations-js';

import 'zone.js/dist/zone';

// TODO: Do this only for development
import 'zone.js/dist/long-stack-trace-zone';
Error['stackTraceLimit'] = Infinity;

import 'jquery';
import 'rxjs';

import 'semantic-ui-less/semantic.less';
