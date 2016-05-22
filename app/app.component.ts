import { Component, provide } from '@angular/core';

import { BetterLogger } from './better-logger.service';
import { HeroesComponent } from './heroes/heroes.component';
import { Logger } from './logger.service';
import { UserService } from './user.service';

@Component({
    selector: 'my-app',
    template: `
      <my-heroes></my-heroes>
    `,
    directives: [HeroesComponent],
    providers: [
      UserService,
      provide(Logger, { useClass: BetterLogger }
    ]
})
export class AppComponent { }
