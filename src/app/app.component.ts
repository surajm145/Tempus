import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {TranslateService} from '@ngx-translate/core';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';
        
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tempusApp';
onActivate(event){
  window.scroll(0,0);
}
  constructor(
    private loadingBar: SlimLoadingBarService, 
    private router: Router,
    private translate: TranslateService) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event); 
    });
    translate.setDefaultLang('en');
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
}
