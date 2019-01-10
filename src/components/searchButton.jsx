import React, { Component } from 'react';
import search_icon from '../img/search_icon.png';

class SearchButton extends Component {
  handleClick = () => {
    this.props.performSearch(document.getElementsByClassName('search_input')[0].value);
  };

  render() {
    return (
      <button className="search_button">
        <img src={search_icon} width="75%" onClick={this.handleClick} height="auto" alt="Search"></img>
      </button>
    );
  }
}

export default SearchButton;
