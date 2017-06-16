import React from 'react';
import Topic from './Topic';
import { connect } from 'react-redux';
import { selectTopic } from '../../actions/selectTopic';
import { toggleOverlayVisibility } from '../../actions/overlay';
import './TopicsList.css';

const TopicsList = ({
  topics,
  handleTopicClick,
}) => (
  <div className='TopicsList'>
    { /* TODO make a Search error trigger a relevant prompt */}
    {
      /* <Topic />'s click handler sets the Overlay Visibility
       * and also dispatches the selected Topic's props to the store
       */
    }
    {
      topics ?
      topics.map((topic, i) =>
        <Topic topic={topic} key={i} handleClick={(topic) => handleTopicClick(topic)} />
      )
      : <div className='TopicsList-noTopics'></div>
    }
  </div>
);

const mapStateToProps = (dispatch) => ({
})
const mapDispatchToProps = (dispatch) => ({
  handleTopicClick: (topic) => {
    dispatch(toggleOverlayVisibility())
    dispatch(selectTopic(topic))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
