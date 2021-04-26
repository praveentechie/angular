import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'toUpperCase'})
export class UpperCasePipe implements PipeTransform {
  transform(value: String, helperFunction: Function, ...args: any[]) {
    console.log('pipe for upper case called', value, helperFunction, args);
    return helperFunction(value);
  }
}

@Pipe({name: 'trimValue'})
export class TrimValuePipe implements PipeTransform {
  transform(value: String): String {
    console.log('trimming pipe value');
    return (value || '').trim();
  }
}
