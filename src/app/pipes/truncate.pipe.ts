import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'xyzhello',
  pure: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    const limit = args[0] || 3;
    const prefix = args[1] || '...';

    if (value.length <= limit) {
      return value;
    } else {
      return value.substring(0, limit) + prefix;
    }
  }
}

// https://angular.io/api?type=pipe

// a = 0;
// b = null;
// c = undefined;
// d = '';

// first true value or last value
// const x = a || b || c || d;

// first false value or last value
// const y = a && b && c && d;
