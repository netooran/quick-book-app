import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomProvider {

  private baseUrl;

  constructor(public http: Http) {
    this.baseUrl = 'http://192.168.0.4:4000';
  }

  getRooms(office) {
    return this.http.get(`${this.baseUrl}/offices/${office}/rooms`);
  }

  getOffices() {
    return this.http.get(`${this.baseUrl}/offices`);
  }

  getRoomStatus(room) {
    return this.http.get(`${this.baseUrl}/rooms/${room.name}/status`);
  }

  book(room, duration, employee) {
    return this.http.post(`${this.baseUrl}/rooms/${room.name}/book`, { duration, employee });
  }

  cancel(room) {
    return this.http.post(`${this.baseUrl}/rooms/${room.name}/end`, {});
  }
}
