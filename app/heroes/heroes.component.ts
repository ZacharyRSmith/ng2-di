import { Component } from '@angular/core';

import { HeroListComponent } from './hero-list.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `
    <h2>Heroes</h2>

    <hero-list></hero-list>
  `,
  directives: [HeroListComponent],
  providers: [HeroService]
})
export class HeroesComponent { }
