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
    if (values.minDate && values.minDate.currentValue) {
      this._minDate = moment(values.minDate.currentValue);
    }

    if (values.maxDate && values.maxDate.currentValue) {
      this._maxDate = moment(values.maxDate.currentValue);
    }

    if (values.selectedDate && values.selectedDate.currentValue) {
      this._selectedDate = moment(values.selectedDate.currentValue);
    }

    this.generateView();
  }

  public isDisabled(momentObj: any) {
    if (this._minDate && momentObj.isSameOrBefore(this._minDate)
      || this._maxDate && momentObj.isSameOrAfter(this._maxDate)) {
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
