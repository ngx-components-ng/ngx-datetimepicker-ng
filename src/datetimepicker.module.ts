import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimepickerComponent } from './datetimepicker/datetimepicker.component';
import { DateFormatPipe } from './date-format.pipe';
import { FormsModule } from '@angular/forms';
import { DatetimepickerDayComponent } from './datetimepicker/datetimepicker-day/datetimepicker-day.component';
import { DatetimepickerMonthComponent } from './datetimepicker/datetimepicker-month/datetimepicker-month.component';
import { DatetimepickerYearComponent } from './datetimepicker/datetimepicker-year/datetimepicker-year.component';
import { DatetimepickerHourComponent } from './datetimepicker/datetimepicker-hour/datetimepicker-hour.component';
import { DatetimepickerMinutesComponent } from './datetimepicker/datetimepicker-minutes/datetimepicker-minutes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DateFormatPipe,
    DatetimepickerComponent,
  ],
  providers: [DateFormatPipe],
  declarations: [
    DateFormatPipe,
    DatetimepickerComponent,
    DatetimepickerDayComponent,
    DatetimepickerMonthComponent,
    DatetimepickerYearComponent,
    DatetimepickerHourComponent,
    DatetimepickerMinutesComponent,
  ],
})
export class DatetimepickerModule {
}
