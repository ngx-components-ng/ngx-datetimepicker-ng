import moment from 'moment';
import { Component } from '@angular/core';
import { DatetimepickerGridBase } from '../datetimepicker-grid-base';

@Component({
  selector: 'app-datetimepicker-minutes',
  templateUrl: './datetimepicker-minutes.component.html',
  styleUrls: ['./datetimepicker-minutes.component.scss'],
})
export class DatetimepickerMinutesComponent extends DatetimepickerGridBase {
  public minutesGrid: any[];

  constructor() {
    super();
  }

  public generateView() {
    const timeFormat = moment.localeData().longDateFormat('LT');

    this.minutesGrid = new Array(60).fill(0).map((n, i) => {
      const targetDate = moment(this._selectedDate).minutes(i);
      const isDisabled = this.isDisabled(targetDate);

      return {
        label: targetDate.format(timeFormat),
        timestamp: targetDate.toISOString(),
        isDisabled,
      };
    });
  }
}
