import React from 'react';
import Topic from './Topic';
import { connect } from 'react-redux';
import { selectTopic } from '../actions/selectTopic';
import './TopicsList.css';

const TopicsList = ({
  topics,
  handleTopicClick,
}) => (
  <div className='TopicsList'>
    { /* TODO make a Search error trigger a relevant prompt */}
    {
      topics ?
      topics.map((topic, i) =>
        <Topic topic={topic} key={i} handleClick={(topic) => handleTopicClick(topic)} />
      )
      : <div className='TopicsList-noTopics'>No Reddit topics. Try searching for something else.</div>
    }
  </div>
);

const mapStateToProps = (dispatch) => ({
})
const mapDispatchToProps = (dispatch) => ({
  handleTopicClick: (topic) => dispatch(selectTopic(topic)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
