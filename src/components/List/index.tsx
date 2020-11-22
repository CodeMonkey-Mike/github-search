import React from 'react';
import { Grid, GridCell } from '../../styles/Grid';
import { ListContainer } from './style';
import Skeleton from 'react-loading-skeleton';

interface LayoutProps {
  loading?: boolean;
  children: React.ReactNode;
}
const List = ({ loading, children }: LayoutProps) => {
  return (
    <ListContainer data-testid="list">
      {loading ? (
        <>
          <Grid data-testid="loading">
            {' '}
            <GridCell span="16">
              <Skeleton count={4} />
            </GridCell>{' '}
          </Grid>
          <Grid>
            {' '}
            <GridCell span="16">
              <Skeleton count={4} />
            </GridCell>{' '}
          </Grid>
          <Grid>
            {' '}
            <GridCell span="16">
              <Skeleton count={4} />
            </GridCell>{' '}
          </Grid>
        </>
      ) : (
        <>{children}</>
      )}
    </ListContainer>
  );
};

export { List };
