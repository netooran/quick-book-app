import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {

  @Input() startTime;
  @Input() endTime;
  private duration;
  private interval = 1000;
  private timer;
  private timerString;

  constructor(public events: Events){}

  runTimer(){
    this.duration = moment.duration(moment(this.endTime).diff(moment(new Date())), 'milliseconds');
    this.timer = setInterval(() => this.updateTimer(), this.interval);
  }

  ngOnInit(){
    this.startTime = new Date(this.startTime);
    this.endTime = new Date(this.endTime);
    this.runTimer();
  }

  endTimer(){
    clearInterval(this.timer);
    this.events.publish('timer:ended');
  }

  updateTimer(){
    this.duration = moment.duration(this.duration - this.interval, 'milliseconds');
    if(this.duration.get('minutes') == 0 && this.duration.get('seconds') == 0) {
      this.endTimer();
    }
    this.timerString = `${this.duration.get('hours')}h ${this.duration.get('minutes')}m ${this.duration.get('seconds')}s`
  }

}
