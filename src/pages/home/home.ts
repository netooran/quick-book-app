import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomProvider } from '../../providers/room/room';
import { RoomPage } from '../room/room';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RoomProvider]
})
export class HomePage {
  public offices;
  public rooms;
  public selectedOffice;
  public defaultRoom;

  constructor(private nav: NavController, private roomProvider: RoomProvider, private storage: Storage) {
    this.offices = this.getOffices();
    this.storage.get('defaultRoom').then((value) => this.defaultRoom = value);
  }

  getOffices() {
    this.roomProvider.getOffices().subscribe(
      data => this.offices = data.json(),
      console.error
    );
  }

  getRooms(office) {
    this.selectedOffice = office;
    this.roomProvider.getRooms(office).subscribe(
      data => this.rooms = data.json(),
      console.error
    );
  }

  isSelectedOffice(office) {
    return office === this.selectedOffice;
  }

  onRoomSelected(room) {
    this.nav.push(RoomPage, { room: room });
  }

  setDefaultRoom(room) {
    this.storage.set('defaultRoom', room);
    this.defaultRoom = room;
    console.log("Default room set to ", room);
  }

  isdefaultRoom(room) {
    return this.defaultRoom.name  === room.name;
  }

}
