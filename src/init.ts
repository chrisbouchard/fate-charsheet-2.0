import {bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {App} from './app';
import {CharacterFacade} from './facade/character_facade';

/* Load CSS stylesheets. */
import 'semantic/semantic.css';

/* Load packages for side-effects. */
import 'holderjs';
import 'jquery';
import 'semantic/semantic';

/* Hook into jQuery, which is injected by webpack. */
declare var $: any;

/* Expose it to the window so we can see it for debugging. */
window['$'] = $;

$(() => bootstrap(App, [CharacterFacade, CORE_DIRECTIVES]));

