import React from 'react';
import styled from 'styled-components';
import Loader from '../../assets/icons/loading.gif';

const Instance = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
  img {
    max-width: 50px;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const FetchMore = ({
  loading = false,
  fetchMore,
  ...props
}: {
  loading: boolean;
  fetchMore: () => void;
}) => (
  <Instance {...props}>
    {loading ? (
      <img src={Loader} alt="Loading" data-testid="img-loading" />
    ) : (
      <Button data-testid="button-load-more" onClick={fetchMore}>
        Load more
      </Button>
    )}
  </Instance>
);
