import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (!value) {
      return;
    }

    // Split the string using a dot as the separator
    return value.split('.');
  }
}
