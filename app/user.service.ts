import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  // Todo: get the user; don't 'new' it.
  private _alice = new User('Alice', true);
  private _bob = new User('Bob', false);

  // initial user is Bob
  user = this._bob;

  // swaps users
  getNewUser() {
    return this.user = ( this.user === this._bob ? this._alice : this._bob );
  }
}

export class User {
  constructor(
    public name:string,
    public isAuthorized:boolean = false) { }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
