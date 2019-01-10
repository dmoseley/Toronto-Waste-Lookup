import React, { Component } from 'react';

import SearchItem from "./searchItem";

class SearchResults extends Component {
  render() {
    const { items, addFavourite, removeFavourite, favourites } = this.props;
    return (
      <div className="search_results">
        {items.map(item => (
          <SearchItem
            key={items.indexOf(item)}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
            title={item.title}
            body={item.body}
            isFavourite={favourites.findIndex(e => e.title === item.title) !== -1}
          />
        ))}
      </div>
    );
  }
}


export default SearchResults;
