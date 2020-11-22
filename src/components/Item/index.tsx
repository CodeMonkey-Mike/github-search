import React from 'react';
import { Grid, GridCell } from '../../styles/Grid';
import { isMobile } from '../../styles/isMobile';
import { ChevronRight, Fork, Star } from '../Icons';
import { Divider } from '../Utils';
import {
  ItemContainer,
  Link,
  Description,
  AttributeWrapper,
  Attribute,
  WrapLink,
  LanguageCircle,
} from './style';

export interface IItem {
  id: number;
  name: string;
  url: string;
  description: string;
  primaryLanguage: {
    id: string;
    color: string;
    name: string;
  };
  stargazerCount: number;
  forkCount: number;
}

interface LayoutProps {
  data: Array<IItem>;
}

const Item = ({ data }: LayoutProps) => {
  return (
    <>
      {data.map((item: IItem) => (
        <ItemContainer key={item.id} data-testid={`search-item-${item.id}`}>
          <Grid
            {...{
              gridColumnGap: '0',
            }}
            variant={isMobile() ? 'sm' : 'lg'}
          >
            <GridCell span={isMobile() ? '16' : '10'}>
              <Link href={item.url} target="_blank">
                {item.name}
              </Link>
              <Description>{item.description}</Description>
            </GridCell>
            <GridCell span={isMobile() ? '16' : '6'}>
              <WrapLink isMobile={isMobile()}>
                <Link className={'explore-link'} href={item.url} target="_blank">
                  Explore <ChevronRight />
                </Link>
              </WrapLink>
            </GridCell>
            <GridCell span={'16'}>
              <AttributeWrapper>
                {item.primaryLanguage && (
                  <Attribute>
                    <LanguageCircle language={item.primaryLanguage.name} />
                    <span>{item.primaryLanguage.name}</span>
                  </Attribute>
                )}

                <Attribute>
                  <Fork fill="var(--gray-dark)" />
                  <span>{item.forkCount}</span>
                </Attribute>
                <Attribute>
                  <Star fill="var(--gray-dark)" />
                  <span>{item.stargazerCount}</span>
                </Attribute>
              </AttributeWrapper>
            </GridCell>
          </Grid>
          <Divider fluid marginTop={20} />
        </ItemContainer>
      ))}
    </>
  );
};

export { Item };
