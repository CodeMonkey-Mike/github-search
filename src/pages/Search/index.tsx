import { useQuery } from '@apollo/client';
import debounce from 'lodash/debounce';
import React, { useCallback, useMemo, useState } from 'react';
import { FetchMore, IItem, Item, List, Search } from '../../components';
import { SEARCH } from '../../graphql';
import { Para } from '../../styles/Para';

const entry = 'user';

export default () => {
  const [q, setQ] = useState('');
  const [fetching, setFetching] = useState(false);
  const { data, loading, fetchMore } = useQuery(SEARCH, {
    variables: {
      userId: q,
    },
    skip: !q,
  });

  const _fetchMore = useCallback(async () => {
    setFetching(true);
    data &&
      (await fetchMore({
        variables: {
          cursor: data.user.repositories.pageInfo.endCursor,
        },
        updateQuery: (previousResult: any, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }

          return {
            ...previousResult,
            [entry]: {
              ...previousResult[entry],
              repositories: {
                ...previousResult[entry].repositories,
                ...fetchMoreResult[entry].repositories,
                edges: [
                  ...previousResult[entry].repositories.edges,
                  ...fetchMoreResult[entry].repositories.edges,
                ],
              },
            },
          };
        },
      }));
    setFetching(false);
  }, [data, fetchMore]);

  const _debounce = useCallback(
    debounce((query: string) => {
      if (query) {
        setQ(query);
      } else {
        setQ('');
      }
    }, 500),
    []
  );

  const onChange = (e: string) => {
    _debounce(e);
  };

  const nodes = useMemo(() => {
    return data ? data.user.repositories.edges.map(({ node }: { node: IItem }) => node) : [];
  }, [data]);

  const hasNext = useMemo(() => (data ? data.user.repositories.pageInfo.hasNextPage : false), [
    data,
  ]);

  return (
    <>
      <Search onChange={onChange} />
      <List loading={loading}>
        {data && data.user ? (
          <Item data={nodes} />
        ) : (
          <Para style={{ textAlign: 'center' }}>No search found</Para>
        )}
        {hasNext && <FetchMore loading={fetching} fetchMore={_fetchMore} />}
      </List>
    </>
  );
};
