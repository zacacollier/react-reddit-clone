import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';
import { subRedditSearch } from '../actions/API';

class AppWrapper extends Component {
  componentWillMount() {
    /* Before mounting, we need to
     * query the App's default SubReddit ('funny')
     */
    this.props.initialSearch('funny');
  }
  render() {
    return <App {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  redditData: state.API.data,
});
const mapDispatchToProps = (dispatch) => ({
  initialSearch: (subReddit) => dispatch(subRedditSearch(subReddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
