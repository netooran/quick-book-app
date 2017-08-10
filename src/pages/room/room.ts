import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as schedule from 'node-schedule';
import { RoomProvider } from '../../providers/room/room';

import { PreferencePage } from '../../pages/preference/preference';

@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  public room;
  public roomStatus;

  constructor(public nav: NavController, public navParams: NavParams, public roomProvider: RoomProvider) {
    this.room = navParams.get('room');
    this.updateRoomStatus();
    schedule.scheduleJob('*/1 * * * *', () => {
      this.updateRoomStatus();
    });

  }

  ionViewDidLoad() {
  }

  isAvailable() {
    return this.roomStatus && this.roomStatus.status === 'available';
  }

  showPreference() {
    this.nav.push(PreferencePage);
  }

  updateRoomStatus() {
    return this.roomProvider.getRoomStatus(this.room).subscribe((data) => {
      this.roomStatus = data.json();
    });
  }

}
