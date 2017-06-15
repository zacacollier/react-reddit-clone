import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Overlay from './Overlay';
import Spinner from './Spinner';
import TopicsList from './TopicsList';
import './App.css';

/*
 * NB: Header contains the Searchbar component
 */
const App = ({ searchResults, searchStatus, overlayVisibility }) => (
  <div className="App">
    <Overlay
      isVisible={overlayVisibility}
    />
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
