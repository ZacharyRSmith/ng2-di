import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  logs:string[] = [];

  log (msg:string) {
    this.logs.push(msg);
    console.log(msg)
  }
}
