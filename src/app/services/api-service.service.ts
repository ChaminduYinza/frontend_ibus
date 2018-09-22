import { Injectable } from '@angular/core';
import { config } from '../../../config/config';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { JwtService } from './jwt-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: Http,
    private jwtService: JwtService) { }

  //Setting Headers for API Request
  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }
    return new Headers(headersConfig);
  }

  //Perform a GET Request
  get(path: string): Observable<any> {
    return this.http.get(`${config.api_url}${path}`, { headers: this.setHeaders() })
      .pipe(catchError((error) => {
        throw (error.json())
      }),
        map((res: Response) => res.json()));
  }
  //Perform a GET Request
  getParams(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${config.api_url}${path}`, { headers: this.setHeaders(), search: params })
      .pipe(catchError((error) => {
        throw (error.json())
      }),
        map((res: Response) => res.json()));
  }

  //Perform a PUT Request
  put(path: string, body): Observable<any> {
    return this.http.put(
      `${config.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    ).pipe(catchError((error) => {
      throw (error.json())
    }),
      map((res: Response) => res.json()));
  }

  //Perform POST Request
  post(path, body): Observable<any> {
    return this.http.post(
      `${config.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .pipe(catchError((error) => {
        throw (error.json())
      }),
        map((res: Response) => res.json()));
  }

  //Perform Delete Request
  delete(path, body): Observable<any> {
    return this.http.delete(
      `${config.api_url}${path}`,
      { headers: this.setHeaders() }
    )
      .pipe(catchError((error) => {
        throw (error.json())
      }),
        map((res: Response) => res.json()));
  }
}
