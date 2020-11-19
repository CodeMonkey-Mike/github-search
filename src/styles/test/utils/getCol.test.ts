import { getCol } from 'static/styles/utils/getCol';

it('should return rgb color from rgba', () => {
  const col = getCol('rgb(0, 0, 0)', 0.2);
  expect(col).toBe('rgb(51,51,51)');
});
