import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesno'
})
export class YesnoPipe implements PipeTransform {

  transform(value: boolean, yes='', no = ''): unknown {
    return value ? yes : no;
  }

}
