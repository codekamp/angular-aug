import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let num = 0;
const originalLog = window.console.log;
window.console.log = (value) => {
  num++;
  originalLog(value);
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
