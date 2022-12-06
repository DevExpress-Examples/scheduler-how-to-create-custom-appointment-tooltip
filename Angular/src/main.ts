import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from "./environments/environment";
import themes from 'devextreme/ui/themes';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

themes.initialized(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
})
