import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService,
  ) { }

  authenticate(id: string, password: string = ''): User {
    const user = this.userService.getUser(id) || this.userService.getUser('0xb856e7847e5A41F6459a0687FF4FE5E93eE60F16');
    this.userService.setCurrentUser(user)
    console.log(user);
    
    return user
  }

  isAuthenticated(): Boolean {
    return (this.userService.currentUser != undefined)
  }

}
