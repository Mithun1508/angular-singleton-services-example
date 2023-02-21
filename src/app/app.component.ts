import { Component, Optional, VERSION } from '@angular/core';
import { AppService } from './app.service';
import { EagerService } from './eager/eager.service';
import { LazyService } from './lazy/lazy.service';

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <ul>
      <li>
        <a routerLink="">Home</a>
      </li>
      <li>
        <a routerLink="/eager/eager">Eager</a>
      </li>
      <li>
        <a routerLink="/lazy/lazy">Lazy</a>
      </li>
    </ul>

    App Works! {{ randomApp }} {{ randomEager }} {{ randomLazy }}
    <br />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  randomApp = 'App : Not defined';
  randomEager = 'Eager : Not defined';
  randomLazy = 'Lazy : Not defined';

  constructor(
    @Optional() private appService: AppService,
    @Optional() private eagerService: EagerService,
    @Optional() private laztyService: LazyService
  ) {
    if (appService) this.randomApp = this.appService.RandomNo;
    if (eagerService) this.randomEager = this.eagerService.RandomNo;
    if (laztyService) this.randomLazy = this.laztyService.RandomNo;
  }

  ngOnInit() {}
}
