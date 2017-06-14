import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
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

const mapStateToProps = ({ API }) => ({
  searchStatus: API.status,
  searchResults: API.data,
});
const mapDispatchToProps = (dispatch) => ({
  initialSearch: (subReddit) => dispatch(subRedditSearch(subReddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
