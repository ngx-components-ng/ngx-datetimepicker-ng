import moment from 'moment';
import { Component } from '@angular/core';
import { DatetimepickerGridBase } from '../datetimepicker-grid-base';

@Component({
  selector: 'app-datetimepicker-hour',
  templateUrl: './datetimepicker-hour.component.html',
  styleUrls: ['./datetimepicker-hour.component.scss'],
})
export class DatetimepickerHourComponent extends DatetimepickerGridBase {
  public hoursGrid: any[];

  constructor() {
    super();
  }

  public generateView() {
    const timeFormat = moment.localeData().longDateFormat('LT');

    this.hoursGrid = new Array(24).fill(0).map((n, i) => {
      const targetDate = moment(this._selectedDate).hour(i);
      const isDisabled = this.isDisabled(targetDate);

      return {
        label: targetDate.format(timeFormat),
        timestamp: targetDate.toISOString(),
        isDisabled,
      };
    });
  }
}
