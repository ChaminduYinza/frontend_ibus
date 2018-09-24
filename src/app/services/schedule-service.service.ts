import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtService } from './jwt-service.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {

  constructor(private apiService: ApiService, private jwtService: JwtService) { }

  //Get schedule from the system
  getSchedule(requestBody): Observable<any> {
    return this.apiService.post('/schedule/get', requestBody)
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

