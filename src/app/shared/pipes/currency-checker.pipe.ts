import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyChecker'
})
export class CurrencyCheckerPipe implements PipeTransform {

  transform(value: string): string {
    let currency_symbol = 'Currency not Found';
    if (value === 'USD') {
      currency_symbol = '$';
    } else if (value === 'EURO') {
      currency_symbol = '₤';
    } else if (value === 'IDR') {
      currency_symbol = 'Rp';
    } else {
      return currency_symbol;
    }
    return currency_symbol;
  }

}
