import styled from 'styled-components';
import theme from 'styled-theming';
import { getCol } from './utils/getCol';
import { grey500 } from './colors';

interface Props {
  variant?: 'large' | 'normal' | 'small';
  muted?: boolean;
}

const paraFontWeight: theme.ThemeSet = theme.variants('mode', 'variant', {
  large: { ccad: 'normal' },
  normal: { ccad: 'normal' },
  small: { ccad: 'normal' },
});

const paraLineHeight: theme.ThemeSet = theme.variants('mode', 'variant', {
  large: { ccad: '1.875' },
  normal: { ccad: '1.5' },
  small: { ccad: '1.125' },
});

const paraFontSize: theme.ThemeSet = theme.variants('mode', 'variant', {
  large: { ccad: '1.25rem' },
  normal: { ccad: '1rem' },
  small: { ccad: '.875rem' },
});

const mutedColor: theme.ThemeSet = theme.variants('mode', 'muted', {
  true: { ccad: getCol(grey500, 0.4) },
});

export const Para = styled.div<Props>`
  font-weight: ${paraFontWeight};
  line-height: ${paraLineHeight};
  font-size: ${paraFontSize};
  color: ${mutedColor};
`;

Para.defaultProps = { variant: 'normal' };
