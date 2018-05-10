import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from '../shared/mocks/mock-users';

@Injectable()
export class UserService {
  public currentUser: User;  

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }

  getUser(addr: string): User {
    return USERS.find((user) => user.id === addr);
  }

}
