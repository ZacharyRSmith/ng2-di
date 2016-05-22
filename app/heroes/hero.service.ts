import { Injectable, Optional } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Logger } from '../logger.service';

@Injectable()
export class HeroService {
  constructor(@Optional() private logger:Logger) { }

  getHeroes() {
    if (this.logger) this.logger.log('Getting heroes...');
    return HEROES;
  }
}
