import styled from 'styled-components';
import languageColors from '../../styles/languageColors';
import _get from 'lodash/get';
import { grey500 } from '../../styles/colors';
import { Para } from '../../styles/Para';

export const ItemContainer = styled.div``;

export const WrapLink = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: ${({ isMobile }) => (isMobile ? 'center' : 'flex-end')};
  margin-bottom: ${({ isMobile }) => (isMobile ? '10px' : '0')};
  align-items: center;
  height: 100%;
  ${({ isMobile }) =>
    isMobile &&
    `
    a {
      &.explore-link {
        max-width: 200px;
      }
    }
  `};
`;

export const Link = styled.a`
  font-size: 20px;
  margin-bottom 10px;
  display: block;
  word-break: break-word;
  color: var(--link);
  &:hover {
    text-decoration: underline;
  }
  &.explore-link {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid ${grey500};
    max-width: 150px;
    width: 100%;
    padding: 5px 10px;
    align-self: flex-end;
    font-size: 18px;
    &:hover {
      background: var(--link-hover);
      color: var(--text-hover);
      text-decoration: none;
    }
    svg {
      height: 20px;
      margin-left: 20px;
    }
  }
`;
export const Description = styled(Para)`
  margin-bottom: 20px;
`;
interface IAttributeProps {
  language?: string;
}

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Attribute = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;
  svg {
    height: 22px;
    margin-right: 5px;
  }
`;

export const LanguageCircle = styled.div<IAttributeProps>`
  display: inline-block;
  height: 15px;
  width: 15px;
  margin-right: 5px;
  border-radius: 10px;
  ${({ language }) =>
    language && `background-color: ${_get(languageColors, language.toLowerCase().toString())};`}
`;
