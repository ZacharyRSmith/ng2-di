import { Injectable } from '@angular/core';

@Injectable()
export class BetterLogger {
  logs:string[] = [];

  log (msg:string) {
    msg = `On ${Date()}: ${msg}`;
    this.logs.push(msg);
    console.log(msg);
  }
}
