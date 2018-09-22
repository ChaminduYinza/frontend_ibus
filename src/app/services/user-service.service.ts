import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtService } from './jwt-service.service';

@Injectable()
export class UserService {
  public isLogged = false;

  constructor(private apiService: ApiService, private jwtService: JwtService) {

  }
  //Attemp Login to the System
  attemptLogin(credentials): Observable<any> {
    this.destroyAuth();
    return this.apiService.post('/user/login', credentials)
      .pipe(map(
        data => {
          this.setAuth(data);
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }
  //register user to the System
  registerUser(user): Observable<any> {
    return this.apiService.post('/user/new', user)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  //change current passsword to new password
  changePassword(credentials): Observable<any> {
    return this.apiService.put('/user/changePassword', credentials)
      .pipe(map(
        data => {
          this.setAuth(data);
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  //Get all users based on role
  getUsers(role): Observable<any> {
    return this.apiService.post('/user/user', role)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  //Remove User
  removeuser(user_id): Observable<any> {
    return this.apiService.post('/user/remove', user_id)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  //get User by id
  getUserbyId(user_id): Observable<any> {
    return this.apiService.post('/user/getUser', user_id)
      .pipe(map(
        data => {
          this.setAuth(data);
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  //Store Authorization Information
  setAuth(user) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token.token);

    this.isLogged = true;
    console.log("isLogged : " + this.isLogged)
  }

  // Remove JWT from localstorage
  destroyAuth() {
    this.jwtService.destroyToken();

    this.isLogged = false;
  }
}
