import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { graphqlProvider } from './libs';
import { routes } from "./app/app.routes";
import { LucideAngularModule, Heart, MapPinned, CircleAlert, Gift } from 'lucide-angular';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    graphqlProvider,
    // Provide LucideAngularModule here
    LucideAngularModule.pick({ Heart, MapPinned, CircleAlert, Gift }).providers!
  ]
}).catch(err => console.error(err));
