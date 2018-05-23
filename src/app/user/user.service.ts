import { Injectable } from '@angular/core';

import { User, WalletToken } from './user';
import { USERS } from '../shared/mocks/mock-users';
import { Tribe } from '../tribe/tribe';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  public currentUser: User;
  public currentUserChange: Subject<User> = new Subject<User>();


  constructor() {
    this.currentUserChange.subscribe((value) => {
      this.currentUser = value
    });
   }

  getUsers(): User[] {
    return USERS;
  }

  getUser(addr: string): User {
    return USERS.find((user) => user.id === addr);
  }

  setDemoUser(addr: string) {
    USERS[0].id = addr;
  }

  setCurrentUser(user) {
    this.currentUserChange.next(user);
  }

  hasTT(tribe: Tribe, amount: number = 0): boolean{
    return this.tokenBalance(tribe.tickerSymbol) > amount;
  }

  hasNT(amount: number = 0) : boolean{
    return this.tokenBalance('NT') > amount;
  }

  tokenBalance(ticker: string){
    const walletToken = this.currentUser.walletTokens.find((item) => item.ticker === ticker);
    return walletToken ? walletToken.balance : 0;  
  }

  setTokenBalance(ticker: string, value: number){
    let walletToken: WalletToken;
    walletToken = this.currentUser.walletTokens
      .find((item) => item.ticker === ticker);

      if(!walletToken){
        walletToken = {ticker: ticker, balance: value}
        this.currentUser.walletTokens.push(walletToken)
      } else {
        walletToken.balance = value;
      }
    
  }
}
