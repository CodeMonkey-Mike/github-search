import { grey500, white } from '../../styles/colors';
import styled from 'styled-components';

interface Props {
  isActive?: boolean;
}

export const SearchContainer = styled.div`
  transform: translateY(-100%);
  z-index: 1;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 0 20px;
`;

export const Search = styled.form<Props>`
  position: relative;
  background: gray;
  overflow: hidden;
  transition: all 0.3s;
  background: ${white};
  height: 64px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
  & > input {
    padding: 0 10px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-left: 1rem;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    &:focus {
      border: none;
      outline: none;
    }
  }

  & > svg {
    transition: all 0.3s;
    color: ${grey500};
    position: absolute;
    height: 50%;
    width: 24px;
    z-index: 100;
    top: 50%;
    transform: translateY(-50%);
    right: 24px;
    cursor: pointer;
  }
`;
