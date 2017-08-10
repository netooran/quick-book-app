import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RoomPage} from '../../pages/room/room'

@Component({
  selector: 'booked-room',
  templateUrl: 'booked-room.html'
})
export class BookedRoomComponent extends RoomPage {

  constructor(public nav: NavController, public navParams: NavParams) {
    super(nav, navParams);
  }

}
