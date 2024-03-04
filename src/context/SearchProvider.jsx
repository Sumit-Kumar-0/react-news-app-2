import React, { useState } from 'react';
import SearchContext from './SearchContext';

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('initial data');

  const updateSearch = newSearch => {
    setSearch(newSearch);
  };

  return (
    <SearchContext.Provider value={{ search, updateSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
