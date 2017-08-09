import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomProvider {

  private baseUrl;

  constructor(public http: Http) {
    this.baseUrl = 'http://10.134.124.106:4000';
  }

  getRooms(office) {
    let rooms = this.http.get(`${this.baseUrl}/offices/${office}/rooms`);
    return rooms;
  }

  getOffices() {
    let repos = this.http.get(`${this.baseUrl}/offices`);
    return repos;
  }
}
