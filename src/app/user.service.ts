import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  username = '';
  login(str: string) {
    this.username = str;
    console.log(this.username);
  }

  constructor() {}
}
