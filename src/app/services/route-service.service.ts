import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RouteService {

  constructor(private apiService: ApiService) {

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

}
