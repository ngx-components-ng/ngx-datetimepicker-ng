import moment from 'moment';
import { Component } from '@angular/core';
import { DatetimepickerGridBase } from '../datetimepicker-grid-base';

@Component({
  selector: 'app-datetimepicker-year',
  templateUrl: './datetimepicker-year.component.html',
  styleUrls: ['./datetimepicker-year.component.scss'],
})
export class DatetimepickerYearComponent extends DatetimepickerGridBase {
  public yearsGrid: any[];

  constructor() {
    super();
  }

  generateView() {
    const selectedYear = this._selectedDate.year();

    const startAt = selectedYear.toString();
    const startAtLastDigitStrip = startAt.substring(0, startAt.length - 1);
    const startAtYear = Number(`${startAtLastDigitStrip}0`);

    const grid = [];

    for (let i = 0; i < 12; i++) {
      const targetYear = Number(startAtYear) + i + 1;
      const targetDate = moment(this._selectedDate).year(targetYear);

      grid.push({
        label: targetYear,
        timestamp: targetDate,
        isDisabled: this.isDisabled(targetDate),
      });
    }

    this.yearsGrid = grid;
  }

  previousSet = () => {
    this._selectedDate = this._selectedDate.subtract(11, 'years');
    this.generateView();
  }

  nextSet = () => {
    this._selectedDate = this._selectedDate.add(11, 'years');
    this.generateView();
  }
}
