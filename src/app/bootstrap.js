import 'reflect-metadata';
import configureStore from './store/configureStore';
const provider = require('ng2-redux').provider;
const reduxDevTools = require('../../reduxDevTools')
const store = configureStore();
import {bootstrap, FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './app';

bootstrap(App, [
  // These are dependencies of our App
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS,
  provider(store),
  reduxDevTools
]);
