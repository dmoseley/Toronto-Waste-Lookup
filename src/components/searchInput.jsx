import React, { Component } from 'react';

class SearchInput extends Component {
  handleChange = (event) => {
    if (event.target.value === '') {
      this.props.clearResults();
    }
  };

  handleEnter = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      this.props.performSearch(event.target.value)
    }
  };

  render() {
    return (
        <input type="text" className="search_input" onChange={this.handleChange} onKeyPress={this.handleEnter} placeholder="Search.."/>
    );
  }
}

export default SearchInput;
