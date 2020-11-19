import { validateColor } from './validateColor';

// should return rgba color from rgb and opacity
export const getRgba = (col: string, alpha: number) => {
  const rgb = validateColor(col);
  const [r, g, b] = rgb.split(',').map((str) => parseFloat(str.replace(/\D/g, '')));

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
