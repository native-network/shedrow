import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from '../shared/mocks/mock-users';
import { Tribe } from '../tribe/tribe';

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

  setDemoUser(addr: string) {
    USERS[0].id = addr;
  }


  hasTT(tribe): boolean{
    const token = this.currentUser.tribeTokens
      .find((item) => item.ticker === tribe.tickerSymbol)
    return token ? token.balance >= tribe.configMembershipFee : false;
  }

  hasNT(amount: number = 0) : boolean{
    return this.currentUser.ntBalance > amount;
  }

}
