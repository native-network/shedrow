import { Injectable } from '@angular/core';
import { Tribe } from './tribe';
import { TRIBES } from '../shared/mocks/mock-tribes';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Injectable()
export class TribeService {

  constructor(private userService: UserService) { }

  getTribes(): Observable<Tribe[]> {
    return of(TRIBES);
  }

  getTribe(id: string): Observable<Tribe> {
    return of(TRIBES.find(tribe => tribe.address === id));
  }

  joinTribe(tribe:Tribe): void {
    // auth check
    console.log('tribe', tribe);
    
    let user = this.userService.currentUser;
    let token = this.userService.currentUser.tribeTokens
      .find((item) => item.ticker === tribe.tickerSymbol)
    console.log('token', token);
    
    token.balance = token.balance - tribe.configMembershipFee;
    tribe.members.push(user);
  }

  isMember(tribe: Tribe) : boolean {
    let user = this.userService.currentUser;
    return user ? (tribe.members.indexOf(user) > -1) : false;
  }

  
}
