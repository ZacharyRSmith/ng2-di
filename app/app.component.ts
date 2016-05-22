import { Component } from '@angular/core';

import { HeroesComponent } from './heroes/heroes.component';
import { Logger } from './logger.service';

@Component({
    selector: 'my-app',
    template: `
      <my-heroes></my-heroes>
    `,
    directives: [HeroesComponent],
    providers: [Logger]
})
export class AppComponent { }
