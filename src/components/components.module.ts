import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { BookedRoomComponent } from './booked-room/booked-room';
import { AvailableRoomComponent } from './available-room/available-room';
import { TimerComponent } from './timer/timer';
import { SwiperComponent } from './swiper/swiper';

@NgModule({
  declarations: [
		BookedRoomComponent,
    AvailableRoomComponent,
    TimerComponent,
    SwiperComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
		BookedRoomComponent,
    AvailableRoomComponent,
    TimerComponent,
    SwiperComponent
  ]
})
export class ComponentsModule { }
