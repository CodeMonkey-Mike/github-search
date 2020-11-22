import React from 'react';
import styled from 'styled-components';
import * as colors from '../../styles/colors';

interface IDivider {
  backgroundColor?: string;
  height?: number;
  marginTop?: number;
  fluid?: boolean;
}

const Instance = styled.div<IDivider>`
  height: ${({ height }) => (height ? height : 1)}px;
  background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : colors.grey300)};
  max-width: ${({ fluid }) => (!fluid ? 'auto' : '1280px')};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
  margin-left: auto;
  margin-right: auto;
`;

export const Divider = (props: IDivider) => <Instance {...props} />;
