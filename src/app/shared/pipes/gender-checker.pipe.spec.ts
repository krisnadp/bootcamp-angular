import { GenderCheckerPipe } from './gender-checker.pipe';

describe('GenderCheckerPipe', () => {
  it('create an instance', () => {
    const pipe = new GenderCheckerPipe();
    expect(pipe).toBeTruthy();
  });
});
