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

  loading: boolean = false;
  isSidebarOpen: boolean = false;
  isSettingsPanelOpen: boolean = false;
  isSearchBoxOpen: boolean = false;

  isOpen: boolean = false;

  constructor(
    protected network: Network
  ) {
    this.networkStatus$ = this.network.onlineChanges;
  }

  // toggle() {
  //   this.show = !this.show;
  // }

  toggleSidbarMenu() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }



}
