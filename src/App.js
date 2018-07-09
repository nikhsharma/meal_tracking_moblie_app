import React, { Component } from 'react';
import Main from './containers/Main';
import Search from './containers/Search';
import SearchBar from './components/SearchBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <h2>Food Tracker</h2>
        <Main />
      </div>
    );
  }
}

export default App;
