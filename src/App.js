import React, { Component } from 'react';
import Main from './containers/Main';
import Search from './containers/Search';
import SearchBar from './components/SearchBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="app">
        <SearchBar />
        <Main />
      </div>
    );
  }
}

export default App;
