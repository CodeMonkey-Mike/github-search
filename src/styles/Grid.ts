import styled from 'styled-components';
import theme from 'styled-theming';

interface Props {
  variant?: 'xl' | 'lg' | 'md' | 'sm';
}

const gridMaxWidth: theme.ThemeSet = theme.variants('mode', 'variant', {
  lg: { ccad: '1279px' },
  md: { ccad: '1023px' },
  sm: { ccad: '599px' },
});

const gridColumns: theme.ThemeSet = theme.variants('mode', 'variant', {
  xl: { ccad: '16' },
  lg: { ccad: '12' },
  md: { ccad: '8' },
  sm: { ccad: '4' },
});

const gridColumnGap: theme.ThemeSet = theme.variants('mode', 'variant', {
  xl: { ccad: '1rem' },
  lg: { ccad: '1rem' },
  md: { ccad: '1.5rem' },
  sm: { ccad: '1.5rem' },
});

const gridPaddingX: theme.ThemeSet = theme.variants('mode', 'variant', {
  xl: { ccad: '6rem' },
  lg: { ccad: '4.5rem' },
  md: { ccad: '3.75rem' },
  sm: { ccad: '1.5rem' },
});

export const Grid = styled.div<Props>`
  display: grid;
  grid-column-gap: ${gridColumnGap};
  padding: 24px ${gridPaddingX};
  grid-template-columns: repeat(${gridColumns}, 1fr);
  max-width: ${gridMaxWidth};
  margin-left: auto;
  margin-right: auto;
`;

Grid.defaultProps = { variant: 'xl' };

interface GridCellProps {
  span: string;
}

export const GridCell = styled.div<GridCellProps>`
  grid-column: span ${(props) => +props.span};
`;
