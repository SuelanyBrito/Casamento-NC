// src/main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { graphqlProvider } from './libs/graphql.config'

import { LucideAngularModule, Heart, MapPinned, CircleAlert, Gift } from 'lucide-angular';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    graphqlProvider,
    LucideAngularModule.pick({ Heart, MapPinned, CircleAlert, Gift }).providers!,
  ],
}).catch((err) => console.error(err));
