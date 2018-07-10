import React, { Component } from 'react';
import Main from './containers/Main';
import Search from './containers/Search';
import SearchBar from './components/SearchBar';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      searchResults: []
    }
    this.search = this.search.bind(this);
    this.stopSearch = this.stopSearch.bind(this);
  }

  search(text) {
    fetch(`https://uk.openfoodfacts.org/cgi/search.pl?search_terms=${text}&search_simple=1&action=process&json=1/2`)
    .then(res => res.json())
    .then(data => this.setState({searchResults: data.products, searching: true}))
  }

  stopSearch() {
    this.setState({searching: false})
  }

  render() {
    let display;
    if (this.state.searching) {
      display = <Search results={this.state.searchResults} stopSearch={this.stopSearch}/>
    } else {
      display = <Main />
    }

    return (
      <div id="app">
        <SearchBar search={this.search}/>
        {display}
      </div>
    );
  }
}
