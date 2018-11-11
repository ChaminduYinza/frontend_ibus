import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PredictionServiceService {

  constructor(private apiService: ApiService) { }

  getPredictionData(bus): Observable<any> {
    return this.apiService.post('/passenger/getPredictedData', bus)
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
