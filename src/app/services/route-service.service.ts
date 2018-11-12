import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtService } from './jwt-service.service';


@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor(private apiService: ApiService, private jwtService: JwtService) { }
  //Get schedule from the system
  getRoutes(): Observable<any> {
    return this.apiService.get('/route/getAll')
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }


  removeRoute(route_id): Observable<any> {
    return this.apiService.post('/route/remove', route_id)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }


  getRouteById(route_id): Observable<any> {
    return this.apiService.post('/route/findByID', route_id)
      .pipe(map(
        data => {
          // this.setAuth(data);
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  addRoute(route): Observable<any> {
    return this.apiService.post('/route/new', route)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  updateRoute(route_id): Observable<any> {
    return this.apiService.post('/route/edit', route_id)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  getActiveBussesByRoute(requestBody): Observable<any> {
    return this.apiService.post('/bus/activeBusesFromRoute', requestBody)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  getActiveBussesByStartLocation(requestBody): Observable<any> {
    return this.apiService.post('/tracking/byLocation', requestBody)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }


  

}
