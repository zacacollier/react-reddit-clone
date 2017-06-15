import React from 'react';
import PropTypes from 'prop-types';
import TopicStat from './TopicStat';
import constants from '../constants';
import unknown from '../assets/images/unknown.png';
import './Topic.css';

const { helpers } = constants;
const { formatVotes, trimTopicTitle } = helpers;

const Topic = ({
  topic,
  handleClick,
}) => (
  <div className='Topic' onClick={() => handleClick(topic)}>
    <img
      className='Topic-thumbnail'
      src={topic.data.thumbnail}
      alt={unknown}
    />
    {
      /* NB:
        `Topic-details` is `flex-direction: column`,
         `Topic-stats' is `flex-direction: row`.
         Hence the need for extra `<div>`s.
      */
    }
    <div className='Topic-details'>
      <p className='Topic-author'>
        {topic.data.author}
      </p>
      { /* TODO: add a component to 'expand' on hover */ }
      <p className='Topic-title'>
        {trimTopicTitle(topic.data.title)}
      </p>
      <div className='Topic-stats'>
        <TopicStat
          statData={topic.data.num_comments}
          statHelper={formatVotes}
          statType='comment'
        />
        <TopicStat
          statData={topic.data.ups}
          statHelper={formatVotes}
          statType='up'
        />
        <TopicStat
          statData={topic.data.downs}
          statHelper={formatVotes}
          statType='down'
        />
      </div>
    </div>
  </div>
);

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default Topic;
