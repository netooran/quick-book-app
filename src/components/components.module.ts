import { NgModule } from '@angular/core';
import { BookedRoomComponent } from './booked-room/booked-room';
import { AvailableRoomComponent } from './available-room/available-room';
@NgModule({
	declarations: [BookedRoomComponent,
    AvailableRoomComponent],
	imports: [],
	exports: [BookedRoomComponent,
    AvailableRoomComponent]
})
export class ComponentsModule {}
