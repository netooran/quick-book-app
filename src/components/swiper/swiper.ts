import { Component, Input } from '@angular/core';

@Component({
  selector: 'swiper',
  templateUrl: 'swiper.html'
})
export class SwiperComponent {
  @Input() text: String;
}
