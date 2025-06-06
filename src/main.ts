/// <reference types="@angular/localize" />

import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// Aqui você importa seus providers globais, como roteamento, Apollo, Http, etc.
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { graphqlProvider } from './libs';
import {routes} from "./app/app.routes"; // seu provider customizado

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),  // remova se não estiver usando roteamento
    graphqlProvider
    // adicione aqui qualquer outro provider global que seu app precise
  ]
}).catch(err => console.error(err));
