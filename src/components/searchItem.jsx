import React, { Component } from 'react';

class SearchItem extends Component {
  handleChangeFavourited = (event) => {
    if (event.target.classList.contains('item_favourite_false')) {
      this.props.addFavourite({
        'title': this.props.title,
        'body': this.props.body
      });
    }
    else {
      this.props.removeFavourite(this.props.title);
    }
  };

  parseHTML = (input) => {
    var element = document.createElement('div');
    element.innerHTML = input;
    return element.childNodes.length === 0 ? "" : element.childNodes[0].nodeValue;
  }

  render() {
    const { title, body, isFavourite } = this.props;
    return (
      <div className="search_item">
        <button className="search_item_button" onClick={this.handleChangeFavourited}>
          <i className={"fas fa-star " + (isFavourite ? 'item_favourite_true' : 'item_favourite_false')}></i>
        </button>
        <div className="search_item_title" dangerouslySetInnerHTML={{ __html: this.parseHTML(title) }} />
        <div className="search_item_description" dangerouslySetInnerHTML={{ __html: this.parseHTML(body) }} />
      </div>
    );
  }
}


export default SearchItem;
