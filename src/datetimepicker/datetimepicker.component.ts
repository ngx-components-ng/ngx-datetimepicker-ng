import { Component, forwardRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatetimepickerComponent),
    multi: true,
  }]
})
export class DatetimepickerComponent implements ControlValueAccessor {
  @Input() public dropdownRef: any;
  @Input() public dateOnly: string;
  @Input() public minDate: any;
  @Input() public maxDate: any;

  @Output() public onPick = new EventEmitter();

  public _value: any = moment();
  public selectedDate;

  public viewMode: string = 'day';

  constructor() {
  }

  setDate = (timestamp: string) => {
    this.selectedDate = timestamp;

    if (this.viewMode === 'day' && this.dateOnly) {
      this.value = timestamp;
      return this.handlePick();
    }

    switch (this.viewMode) {
      case 'day': {
        this.viewMode = 'hour';
        break;
      }
      case 'hour': {
        this.viewMode = 'minutes';
        break;
      }
      case 'month': {
        this.viewMode = 'day';
        break;
      }
      case 'year': {
        this.viewMode = 'month';
        break;
      }
      case 'minutes': {
        this.value = timestamp;
        this.handlePick();
      }
    }
  }

  private handlePick = () => {
    this.onPick.emit(this.value);
    return this.resetView();
  }

  private resetView = () => {
    this.viewMode = 'day';

    if (this.dropdownRef) {
      this.dropdownRef.close();
    }
  }

  writeValue(obj: any): void {
    this._value = obj;
    this.selectedDate = moment(obj);
    this.propagateChange(this.value);
  }

  propagateChange = (_: any): void => {};

  registerOnChange(fn: (_: any) => {}): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: (_: any) => {}): void {}

  setDisabledState(isDisabled: boolean): void {}

  public get value() {
    return this._value;
  }

  public set value(val) {
    this._value = val;
    this.propagateChange(this._value);
  }
}

