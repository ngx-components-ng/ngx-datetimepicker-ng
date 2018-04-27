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

  public generateView(minutesGrid?: number[]) {
    const timeFormat = moment.localeData().longDateFormat('LT');

    const values = minutesGrid ||  new Array(60).fill(0).map(Number.call, Number);

    this.minutesGrid = values.map((n: number) => {
      const targetDate = moment(this._selectedDate).minutes(n);
      const isDisabled = this.isDisabled(targetDate);

      return {
        label: targetDate.format(timeFormat),
        timestamp: targetDate.toISOString(),
        isDisabled,
      };
    });
  }
}
