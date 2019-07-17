import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterproject'
})
export class FilterprojectPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
