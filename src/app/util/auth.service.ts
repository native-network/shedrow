import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService,
  ) { }

  authenticate(id: string, password: string = ''): User {
    this.userService.currentUser = this.userService.getUser(id) || this.userService.getUser('0xb856e7847e5A41F6459a0687FF4FE5E93eE60F16');
    return this.userService.currentUser
  }

  isAuthenticated(): Boolean {
    return (this.userService.currentUser != undefined)
  }

}
