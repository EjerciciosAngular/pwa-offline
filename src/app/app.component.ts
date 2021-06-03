import { Component } from '@angular/core';
import { Network } from '@ngx-pwa/offline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-offline';
  networkStatus$;
  constructor(
    protected network: Network
  ) {
    this.networkStatus$ = this.network.onlineChanges;
  }
}
