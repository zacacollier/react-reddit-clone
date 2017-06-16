import React from 'react';
import PropTypes from 'prop-types';
import Header from '../SearchHeader/Header';
import OverlayWrapper from '../../containers/OverlayWrapper';
import Spinner from '../Spinner';
import TopicsList from '../Topics/TopicsList';
import './App.css';

/*
 * NB: Header contains the Searchbar component
 */
const App = ({
  // State-to-Props
  searchResults, searchStatus, overlayIsVisible,
}) => (
  <div className="App">
    <OverlayWrapper
      style={{
        transition: 'all 300ms ease',
      }}
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
