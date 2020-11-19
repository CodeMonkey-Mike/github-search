// should return valid color
export function validateColor(color: string): string {
  const e = document.createElement('div');
  e.id = 'divValidColor';
  e.style.borderColor = '';
  e.style.borderColor = color;
  var c = e.style.borderColor;
  if (c.length == 0) {
    throw new Error('Not a valid color');
  }

  return c;
}
