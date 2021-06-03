import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OfflineModule } from '@ngx-pwa/offline';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OfflineModule.forRoot({
      routeOffline: '/oops/onffline',
      routeUnavailable: '/oops/unavailable'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
