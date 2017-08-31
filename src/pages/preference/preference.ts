import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
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
  @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController, private roomProvider: RoomProvider, private storage: Storage) {
    this.selectedOffice = 'chennai';
    this.storage.get('defaultRoom').then((value) => this.defaultRoom = value);
    this.getOffices();
    this.getRooms();
  }

  getOffices() {
    this.roomProvider.getOffices().subscribe(
      data => this.offices = data.json(),
      console.error
    );
  }

  showRoomsOfSelectedOffice() {
    let currentIndex = this.slides.getActiveIndex();
    this.selectedOffice = this.offices[currentIndex];
    return this.getRooms();
  }

  getRooms() {
    return this.roomProvider.getRooms(this.selectedOffice).subscribe(
      data => this.rooms = data.json(),
      console.error
    );
  }

  isSelectedOffice(office) {
    return office === this.selectedOffice;
  }

  onRoomSelected(room) {
    this.navCtrl.setRoot(RoomPage, { room: room });
  }

  setDefaultRoom(room) {
    return this.storage.remove('defaultRoom')
      .then(() => this.storage.set('defaultRoom', room)
        .then(() => this.defaultRoom = room));
  }

  isdefaultRoom(room) {
    return this.defaultRoom && this.defaultRoom.name === room.name;
  }

}
