import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//тук AppModule се подава на браузъра
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
