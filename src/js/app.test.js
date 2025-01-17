
import getRandomInt from './functions.js';

test('должна возвращать число в указанном диапазоне', () => {
  const min = 0;
  const max = 15;
  const result = getRandomInt(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});
