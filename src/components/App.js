import React from 'react';
import Header from './Header';
import Spinner from './Spinner';
import './App.css';

const App = ({ searchResults, searchStatus }) => (
  <div className="App">
    <Header />
    <Spinner status={searchStatus} />
  </div>
);

export default App;
