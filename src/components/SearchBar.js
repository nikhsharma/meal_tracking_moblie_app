import React, { Component } from 'react';
import Search from '../containers/Search';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: '',
      showSearchResults: false
    }
    this.search = this.search.bind(this);
  }

  search(text) {
    console.log('searching for', text);
    fetch('https://uk.openfoodfacts.org/cgi/search.pl?search_terms=' + `${text}` + '&search_simple=1&action=process&json=1/2').then(res => res.json()).then(data => this.setState({results: data.products, showSearchResults: true}))
    console.log(this.state.results);
  }

  render() {
    let display;
    if (this.state.showSearchResults) {
      display = this.state.results.map(res => (
        <p>{res.product_name_en}</p>
      ))
    }
    return (
      <div>
        <input id='search' type="text" onChange={() => this.setState({search: document.querySelector('#search').value})} />
        <input type="submit" value='Search' onClick={() => (
          this.search(document.querySelector('#search').value)
        )}/>
        {display}
      </div>
    )
  }
}
