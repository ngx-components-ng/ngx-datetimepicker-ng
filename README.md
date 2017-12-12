# ngx-datetimepicker-ng

This package is bundled for Angular 5 and webpack/ng-cli. i18n, AOT ready.

## Random screenshots

![Day view](https://user-images.githubusercontent.com/17481020/33912798-8bb124e8-df97-11e7-95c1-28c8c22bcf0a.png)

![Month view](https://user-images.githubusercontent.com/17481020/33912823-a4936c8c-df97-11e7-9cca-25c3f78d331f.png)

![Hours view](https://user-images.githubusercontent.com/17481020/33912999-5286dcac-df98-11e7-97f5-6a3c7c7531ad.png)

## Usage sample with `@ng-bootstrap/ng-bootstrap` and pug

```jade
  div(ngbDropdown, autoClose='false', #dropdown='ngbDropdown')
    input(ngbDropdownToggle, name='bar', [ngModel]="myDate | dateFormat: 'DD.MM.YYYY'", (ngModelChange)='myDate=$event')

    div(ngbDropdownMenu)
      app-datetimepicker(name='foo', [(ngModel)]='myDate', [dropdownRef]='dropdown')
```

## Installation

### Requirements
```
"moment": "^2.19.4",
"material-design-iconic-font": "^2.2.0",
"bootstrap": "^4.0.0-beta"
```

### Install with npm

```
npm i ngx-datetimepicker-ng
```

### Include styles
Put this lines into global stylesheet - ie. styles.scss

```
@import '~bootstrap/scss/bootstrap';
@import '~material-design-iconic-font/dist/css/material-design-iconic-font.css';
```


### Add this line to `tsconfig.json`
Without it compilation will complain about no moments' default export.

```
"compilerOptions": {
  ...
  "allowSyntheticDefaultImports": true
  ...
}
```

### Import module

```typescript
import { DatetimepickerModule } from 'ngx-datetimepicker-ng';

@NgModule({
  imports: [DatetimepickerModule],
})
```

# Configuration

## i18n
Moment locale sensitive, set with [`moment.locale`](https://momentjs.com/docs/#/i18n/changing-locale/)

## Component output
- `[(ngModel)]`

## Component inputs
- `[dropdownRef]` - dropdown reference, calendar is calling .close() on pick value (template reference)
- `dateOnly` - allow user to pick only date (boolean)
- `[minDate]` - min date range (string, number, moment)
- `[maxDate]` - max date range (string, number, moment)

# Bugs
GitHub Issue Report: [click](https://github.com/ngx-components-ng/ngx-datetimepicker-ng/issues/new)

# Development
## Repository
- https://github.com/ngx-components-ng/ngx-datetimepicker-ng

## Dependencies
- `rollback`
- `@angular/compiler`
- `@angular/compiler-cli`
- `copyfiles`

# UI Credits
Inspired by [angular-bootstrap-datetimepicker](https://github.com/dalelotts/angular-bootstrap-datetimepicker)
by Dale Lotts for Angular 1.

# License
Under MIT.
