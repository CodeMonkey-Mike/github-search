import { validateColor } from './validateColor';

// should return rgb color from rgba
export const getCol = (clr: string, p: number) => {
  function RGBLinearShade(p: number, color: string) {
    var i = parseInt,
      r = Math.round,
      [a, b, c, d] = color.split(','),
      P = p < 0,
      t = P ? 0 : 255 * p,
      Pxx = P ? 1 + p : 1 - p;
    return (
      'rgb' +
      (d ? 'a(' : '(') +
      r(i(a[3] === 'a' ? a.slice(5) : a.slice(4)) * Pxx + t) +
      ',' +
      r(i(b) * Pxx + t) +
      ',' +
      r(i(c) * Pxx + t) +
      (d ? ',' + d : ')')
    );
  }
  return RGBLinearShade(p, validateColor(clr));
};
