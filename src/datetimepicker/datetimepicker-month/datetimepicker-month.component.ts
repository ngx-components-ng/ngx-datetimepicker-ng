import moment from 'moment';
import { Component } from '@angular/core';
import { DatetimepickerGridBase } from '../datetimepicker-grid-base';

@Component({
  selector: 'app-datetimepicker-month',
  templateUrl: './datetimepicker-month.component.html',
  styleUrls: ['./datetimepicker-month.component.scss'],
})
export class DatetimepickerMonthComponent extends DatetimepickerGridBase {
  public monthsGrid: any[];

  constructor() {
    super();
  }

  public nextYear = () => {
    this._selectedDate = moment(this._selectedDate).add(1, 'year');
    this.generateView();
  }

  public previousYear = () => {
    this._selectedDate = moment(this._selectedDate).subtract(1, 'year');
    this.generateView();
  }

  generateView() {
    this.monthsGrid = moment.monthsShort().map((label, i) => {
      const targetDate = moment(this._selectedDate).month(i);
      const isDisabled = this.isDisabled(targetDate);

      return {
        label,
        timestamp: targetDate.toISOString(),
        isDisabled,
      };
    });
  }
}
