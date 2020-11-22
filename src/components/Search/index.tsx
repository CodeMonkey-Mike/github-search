import React, { useState } from 'react';
import { Search, SearchContainer } from './style';
import { RemoveIcon, SearchIcon } from '..';

const Main = ({ onChange }: { onChange: (v: string) => void }) => {
  const [q, setQ] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    event.target.value ? setQ(event.target.value) : setQ('');
  };

  return (
    <SearchContainer data-testid="search-wrapper">
      <Search>
        {q ? <RemoveIcon onClick={handleChange} /> : <SearchIcon />}
        <input
          data-testid="search-input"
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search by user"
          autoComplete="off"
          onChange={handleChange}
          value={q}
        />
      </Search>
    </SearchContainer>
  );
};

export { Main as Search };
