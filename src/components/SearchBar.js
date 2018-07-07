import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'ads'
    }
    this.search = this.search.bind(this);
  }

  search(text) {
    console.log('searching for', text);
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
