import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    const searchResults = this.props.results.map(result => (
      <p>{result.product_name_en}</p>
    ))
    return (
      <div>
        <p>Search Section</p>
        {searchResults}
      </div>
    )
  }
}
