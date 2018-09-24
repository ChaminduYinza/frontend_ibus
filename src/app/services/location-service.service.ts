import { Injectable } from '@angular/core';
import { config } from '../../../config/config'
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {
  private url = config.socket_url;
  private socket;
  constructor() { }

  SendUserID(user) {
    this.socket = io(this.url);
    console.log(this.socket)
    this.socket.emit('getUser', user);
  }
  getLocations() {
    console.log(this.socket)
    let observable = new Observable(observer => {
      this.socket.on('trackers', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}

