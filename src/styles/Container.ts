import styled from 'styled-components';
import theme from 'styled-theming';

interface Props {
  variant?: 'fluid';
}

const containerWidth: theme.ThemeSet = theme.variants('mode', 'variant', {
  fluid: { ccad: '100%' },
});

export const Container = styled.div<Props>`
  width: ${containerWidth};
  padding: 2rem;
  background: var(--primary);
  color: var(--text);
`;
