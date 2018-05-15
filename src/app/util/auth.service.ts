import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService,
  ) { }

  authenticate(id: string, password: string = ''): User {
    this.userService.setDemoUser(id);
    this.userService.currentUser = this.userService.getUser(id);
    return this.userService.currentUser
  }

  isAuthenticated(): Boolean {
    return (this.userService.currentUser != undefined)
  }

}
