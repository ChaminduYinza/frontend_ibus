import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class BusService {

  constructor(private apiService: ApiService) {

  }

  addBus(bus): Observable<any> {
    return this.apiService.post('/bus/new', bus)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  updateBus(bus): Observable<any> {
    return this.apiService.put('/bus/update',bus)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }

  getBus(): Observable<any> {
    return this.apiService.get('/bus/get')
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }


  removeBus(bus_id): Observable<any> {
    return this.apiService.post('/bus/remove', bus_id)
      .pipe(map(
        data => {
          return data;
        }
      ),
        catchError(res => {
          throw (res);
        }));
  }


  getBusById(bus_id): Observable<any> {
    return this.apiService.post('/bus/findByBusID', bus_id)
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
