import { Component, provide } from '@angular/core';

import { HeroesComponent } from './heroes/heroes.component';
import { Logger } from './logger.service';
import { BetterLogger } from './better-logger.service';

@Component({
    selector: 'my-app',
    template: `
      <my-heroes></my-heroes>
    `,
    directives: [HeroesComponent],
    providers: [provide(Logger, { useClass: BetterLogger }]
})
export class AppComponent { }
