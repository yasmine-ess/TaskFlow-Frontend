import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
//il faut déclarer HttpClient.
import { provideHttpClient } from '@angular/common/http';
//////////////////////////////
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
providers: [
  provideHttpClient()
]
};
