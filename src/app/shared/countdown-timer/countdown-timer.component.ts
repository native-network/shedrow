import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  @Input() endsAt;
  private endDate
  public countdown;

  constructor() { }

  ngOnInit() {
    this.endDate = moment().add(this.endsAt, 'days')
    Observable
      .timer(0, 1000)
      .subscribe(t => {
        let aMoment = moment.duration(this.endDate.diff(moment()))
        this.countdown = `${aMoment.get("days")}d ${aMoment.get("hours")}h ${aMoment.get("minutes")}m ${aMoment.get("seconds")}s`
      });

}


}
