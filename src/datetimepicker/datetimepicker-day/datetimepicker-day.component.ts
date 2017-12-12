import moment from 'moment';
import { Component } from '@angular/core';
import { DatetimepickerGridBase } from '../datetimepicker-grid-base';

@Component({
  selector: 'app-datetimepicker-day',
  templateUrl: './datetimepicker-day.component.html',
  styleUrls: ['./datetimepicker-day.component.scss'],
})
export class DatetimepickerDayComponent extends DatetimepickerGridBase {
  public days = moment.weekdaysShort(true);
  public daysGrid: any[] = [];

  constructor() {
    super();
  }

  public nextMonth = () => {
    this._selectedDate = moment(this._selectedDate).add(1, 'month');
    this.generateView();
  }

  public previousMonth = () => {
    this._selectedDate = moment(this._selectedDate).subtract(1, 'month');
    this.generateView();
  }

  generateView() {
    const firstDay = moment(this._selectedDate).startOf('month').toISOString();
    const firstDayOfWeek = moment(firstDay).weekday();
    const daysInMonth = moment(this._selectedDate).daysInMonth();

    const grid = [];

    for (let i = firstDayOfWeek; i > 0; i--) {
      const targetDate = moment(firstDay).subtract(i, 'day');

      grid.push({
        style: 'dimmed',
        timestamp: targetDate.toISOString(),
        isDisabled: this.isDisabled(targetDate),
      });
    }

    for (let i = 0; i < daysInMonth; i++) {
      const targetDate = moment(firstDay).add(i, 'day');

      grid.push({
        timestamp: targetDate.toISOString(),
        isDisabled: this.isDisabled(targetDate),
      });
    }

    for (let i = daysInMonth; i < 42; i++) {
      const targetDate = moment(firstDay).add(i, 'day');

      grid.push({
        style: 'dimmed',
        timestamp: targetDate.toISOString(),
        isDisabled: this.isDisabled(targetDate),
      });
    }

    this.daysGrid = grid;
  }
}
