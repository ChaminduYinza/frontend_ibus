import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user-service.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  isUserLogged : boolean=false;
  token:any
  constructor(private router : Router , private userService : UserService) { 
    this.token = window.localStorage['jwtToken'];
      if(this.token!=null||this.token!=undefined){
        this.isUserLogged = true;
      }
      else{
        this.isUserLogged = false;
      }
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    const expectedRole = route.data.expectedRole;
    var index = expectedRole.indexOf(window.localStorage['role']);
    if(this.isUserLogged && index != -1){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      this.userService.destroyAuth();
      return false;
    }
  }

}
