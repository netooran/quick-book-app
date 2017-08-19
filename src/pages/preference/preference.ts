import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { RoomProvider } from '../../providers/room/room';
import { RoomPage } from '../room/room';

@IonicPage()
@Component({
  selector: 'page-preference',
  templateUrl: 'preference.html',
})
export class PreferencePage {
  public offices;
  public rooms;
  public selectedOffice;
  public defaultRoom;

  constructor(public navCtrl: NavController, private roomProvider: RoomProvider, private storage: Storage) {
    this.getOffices();
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
    this.navCtrl.push(RoomPage, { room: room });
  }

  setDefaultRoom(room) {
    this.storage.set('defaultRoom', room);
    this.defaultRoom = room;
  }

  isdefaultRoom(room) {
    return this.defaultRoom && this.defaultRoom.name === room.name;
  }

}
