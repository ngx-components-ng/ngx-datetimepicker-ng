import moment from 'moment';
import { EventEmitter, Input, OnChanges, Output } from '@angular/core';

export class DatetimepickerGridBase implements OnChanges {
  @Input() public selectedDate;
  @Input() public minDate: any;
  @Input() public maxDate: any;

  @Output() public onPick = new EventEmitter();
  @Output() public onHeaderClick = new EventEmitter();

  public _selectedDate: any = moment();
  public _minDate: any;
  public _maxDate: any;

  ngOnChanges(values) {
    if (values.minDate) {
      this._minDate = values.minDate.currentValue
        ? moment(values.minDate.currentValue)
        : undefined;
    }

    if (values.maxDate) {
      this._maxDate = values.maxDate.currentValue
        ? moment(values.maxDate.currentValue)
        : undefined;
    }

    if (values.selectedDate && values.selectedDate.currentValue) {
      this._selectedDate = moment(values.selectedDate.currentValue);
    }

    this.generateView();
  }

  public isDisabled(momentObj: any) {
    if (this._minDate && momentObj.isBefore(this._minDate)) {
      return true;
    }

    else if (this._maxDate && momentObj.isAfter(this._maxDate)) {
      return true;
    }

    return false;
  }

  public nextDay() {
    this._selectedDate = moment(this._selectedDate).add(1, 'day');
    this.generateView();
  }

  public previousDay() {
    this._selectedDate = moment(this._selectedDate).subtract(1, 'day');
    this.generateView();
  }

  generateView() {
  }
}
