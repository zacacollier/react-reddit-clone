import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Spinner from './Spinner';
import TopicsList from './TopicsList';
import './App.css';

const App = ({ searchResults, searchStatus }) => (
  <div className="App">
    { /* NB: Header contains the Searchbar component */ }
    <Header />
    <Spinner status={searchStatus} />
    <TopicsList topics={searchResults} />
  </div>
);

App.propTypes = {
  searchResults: PropTypes.array,
  searchStatus: PropTypes.string.isRequired,
}

export default App;
