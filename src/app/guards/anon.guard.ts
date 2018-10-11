import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AnonGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    const token = localStorage.getItem('my_token');
    if (token) {
      this.router.navigateByUrl('/videos');
    }
    return !token;
  }
}
