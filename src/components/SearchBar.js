import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: ''
    }
    this.search = this.search.bind(this);
  }

  search(text) {
    console.log('searching for', text);
    fetch('https://uk.openfoodfacts.org/cgi/search.pl?search_terms=' + `${text}` + '&search_simple=1&action=process&json=1').then(res => res.json()).then(data => this.setState({results: data}))
    console.log(this.state.results);
  }

  render() {
    return (
      <div>
        <input id='search' type="text" onChange={() => this.setState({search: document.querySelector('#search').value})} />
        <input type="submit" value='Search' onClick={() => this.search(document.querySelector('#search').value)}/>
        <p>{this.state.search}</p>
      </div>
    )
  }
}
