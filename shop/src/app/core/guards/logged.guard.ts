import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from '@angular/router';

import { CONSTANTS } from '../environments/constants';

@Injectable({ providedIn: 'root' })
export class isLoggedGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const token = localStorage.getItem(CONSTANTS.userData);
    if (token) {
      return true;
    }
    return this.router.createUrlTree(['/auth/login']);
  }
}