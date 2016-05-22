import { Component, Inject, provide } from '@angular/core';

import { APP_CONFIG, CONFIG } from './app.config';
import { BetterLogger } from './better-logger.service';
import { HeroesComponent } from './heroes/heroes.component';
import { Logger } from './logger.service';
import { UserService } from './user.service';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{ title }}</h1>
      <my-heroes></my-heroes>
    `,
    directives: [HeroesComponent],
    providers: [
      UserService, // must be before APP_CONFIG

      provide(APP_CONFIG, { useValue: CONFIG }),
      provide(Logger, { useClass: BetterLogger }
    ]
})
export class AppComponent {
  constructor(
    @Inject(APP_CONFIG) config:Config,
    private userService:UserService) {

    this.title = config.title;
  }
}
