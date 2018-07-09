import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
      showSearchResults: false
    }
    this.search = this.search.bind(this);
  }

  search(text) {
    console.log('searching for', text);

    this.props.search(text)

    console.log(this.state.results);
  }

  render() {
    return (
      <div id='search-bar'>
        <input id='search' type="text" onChange={() => this.setState({search: document.querySelector('#search').value, showSearchResults: false})} />
        <input type="submit" value='Search' onClick={() => (
          this.search(document.querySelector('#search').value)
        )}/>
      </div>
    )
  }
}
