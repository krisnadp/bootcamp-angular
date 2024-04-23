import { CurrencyCheckerPipe } from './currency-checker.pipe';

describe('CurrencyCheckerPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyCheckerPipe();
    expect(pipe).toBeTruthy();
  });
});
