import { validateColor } from 'static/styles/utils/validateColor';

it('should return valid color', () => {
  const validColor = 'rgb(0,0,0)';
  const col = validateColor(validColor);
  expect(col).toBe(validColor);
  const invalidColor = '';
  expect(() => validateColor(invalidColor)).toThrowError('Not a valid color');
});
