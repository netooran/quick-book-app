import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SERVER_URL } from '../../config';

@Injectable()
export class RoomProvider {

  private baseUrl;

  constructor(public http: Http) {
    this.baseUrl = SERVER_URL
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

  book(room, formData) {
    return this.http.post(`${this.baseUrl}/rooms/${room.name}/book`, formData);
  }

  cancel(room, formData) {
    return this.http.post(`${this.baseUrl}/rooms/${room.name}/end-quick-book-meeting`, formData);
  }
}
