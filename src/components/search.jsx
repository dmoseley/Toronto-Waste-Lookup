import React, { Component } from 'react';

import SearchButton from "./searchButton";
import SearchInput from "./searchInput";

class Search extends Component {
  render() {
    const { performSearch, clearResults } = this.props;
    return (
      <div className="search">
        <SearchInput
          performSearch={performSearch}
          clearResults={clearResults}
        />
        <SearchButton
          performSearch={performSearch}
        />
      </div>
    );
  }
}

export default Search;
