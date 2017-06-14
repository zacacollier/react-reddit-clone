import React from 'react';
import Topic from './Topic';
import './TopicsList.css';

const TopicsList = ({ topics }) => (
  <div className='TopicsList'>
    {
      topics ?
      topics.map((topic, i) =>
        <Topic topic={topic} key={i} />
      )
      : <div className='TopicsList-noTopics'>No Reddit topics. Try searching for something else.</div>
    }
  </div>
);

export default TopicsList;
