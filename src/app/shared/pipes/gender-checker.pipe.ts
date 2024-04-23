import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderChecker'
})
export class GenderCheckerPipe implements PipeTransform {

  transform(value: string): string {
    let bgColor = '#F8FAFC';
    if (value === 'Male') {
      bgColor = '#60A5FA';
    } else if (value === 'Female') {
      bgColor = '#F472B6';
    } else {
      return bgColor;
    }
    return bgColor;
  }

}
