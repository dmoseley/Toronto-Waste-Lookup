import React, { Component } from 'react';
import './App.css';

import Header from "./components/header";
import Search from "./components/search";
import SearchResults from "./components/searchResults";
import Favourites from "./components/favourites";

class App extends Component {
  state = {
    favourites: [],
    search_results: []
  }

  performSearch = query => {
    if (query !== '') {
      fetch("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000")
      .then(res => res.json())
      .then((res) => {
        this.setState({ search_results: res.filter(item => item.keywords.indexOf(query) !== -1)})
      });
    }
  };

  clearResults = () => {
    this.setState({ search_results: [] });
  };

  addFavourite = item => {
    let favourites = [...this.state.favourites];
    favourites.push(item);
    this.setState({ favourites });
  };

  removeFavourite = item => {
    let favourites = this.state.favourites.filter(fav => fav.title !== item);
    this.setState({ favourites });
  };

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Search
          performSearch={this.performSearch}
          clearResults={this.clearResults}
        />
        <SearchResults
          items={this.state.search_results}
          addFavourite={this.addFavourite}
          removeFavourite={this.removeFavourite}
          favourites={this.state.favourites}
        />
      {this.state.favourites.length > 0 &&
          <Favourites
            favourites={this.state.favourites}
            removeFavourite={this.removeFavourite}
          />
      }
    </React.Fragment>
    );
  }
}

export default App;
