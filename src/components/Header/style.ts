import * as colors from '../../styles/colors';
import styled from 'styled-components';

export const Header = styled.div`
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-light);
  padding: 30px;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

export const Heading = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 0;
  color: var(--header);
  sup {
    font-size: 14px;
    color: var(--header);
  }
`;
