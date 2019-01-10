import React, { Component } from 'react';

import SearchItem from "./searchItem";

class Favourites extends Component {
  render() {
    const { removeFavourite, favourites } = this.props;
    return (
      <div className="favourites">
        <div className="favourites_title">
          Favourites
        </div>
        {favourites.map(item => (
          <SearchItem
            key={favourites.indexOf(item)}
            removeFavourite={removeFavourite}
            title={item.title}
            body={item.body}
            isFavourite={true}
          />
        ))}
      </div>
    );
  }
}


export default Favourites;
