import { getRgba } from 'static/styles/utils/getRgba';

it('should return rgba color from rgb and opacity', () => {
  const col = getRgba('rgb(0,0,20)', 0.6);
  expect(col).toBe('rgba(0, 0, 20, 0.6)');
});
