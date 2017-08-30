import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomPage } from './room';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RoomPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomPage),
    ComponentsModule
  ],
  exports: [
    RoomPage,
    ComponentsModule
  ]
})
export class RoomPageModule {}
