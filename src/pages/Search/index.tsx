import { useQuery } from '@apollo/client';
import debounce from 'lodash/debounce';
import React, { useCallback, useState } from 'react';
import { Item, List, Search } from '../../components';
import { SEARCH } from '../../graphql';
import { Para } from '../../styles/Para';

export default () => {
  const [q, setQ] = useState('');
  const { data, loading } = useQuery(SEARCH, {
    variables: {
      userId: q,
    },
  });

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

  return (
    <>
      <Search onChange={onChange} />
      <List loading={loading}>
        {data && data.user ? (
          <Item data={data.user.repositories.nodes} />
        ) : (
          <Para style={{ textAlign: 'center' }}>No search found</Para>
        )}
      </List>
    </>
  );
};
