import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController) {
  }

  booked(room) {
    this.presentToast(`Successfully booked ${room.name}`)
  }

  bookingEnded(room) {
    this.presentToast(`Successfully canceled ${room.name}`)
  }

  presentToast(message) {
    return this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom'
    }).present();
  }

}
