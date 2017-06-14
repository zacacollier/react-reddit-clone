import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';
import { subRedditSearch } from '../actions/API';

class AppWrapper extends Component {
  componentWillMount() {
    this.props.initialSearch();
  }
  render() {
    return (
      <App />
    );
  }
}
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
  initialSearch: () => dispatch(subRedditSearch('funny')),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
