import React from 'react';
import PropTypes from 'prop-types';
import constants from '../constants';
import unknown from '../assets/images/unknown.png';
import sprite from '../assets/images/icon-sprite.png';
import './Topic.css';

const { helpers } = constants;
const { formatVotes, trimTopicTitle } = helpers;

const Topic = ({ topic }) => (
  <div className='Topic'>
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
      <p className='Topic-author'>{topic.data.author}</p>
      { /* TODO: add a component to 'expand' on hover */ }
      <p className='Topic-title'>{trimTopicTitle(topic.data.title)}</p>
      <div className='Topic-stats'>
        <div className='Topic-num_comments'>
          <span className='Topic-stat'>
            <img
              className='sprite comments-sprite'
              src={sprite}
              alt='comments'
            />
            {formatVotes(topic.data.num_comments, 'comment')}
          </span>
        </div>
        <div className='Topic-ups'>
          <span className='Topic-stat'>
            <img
              className='sprite ups-sprite'
              src={sprite}
              alt='upvotes'
            />
            {formatVotes(topic.data.ups, 'up')}
          </span>
        </div>
        <div className='Topic-downs'>
          <span className='Topic-stat'>
            <img
              className='sprite downs-sprite'
              src={sprite}
              alt='downvotes'
            />
            {formatVotes(topic.data.downs, 'down')}
          </span>
        </div>
      </div>
    </div>
  </div>
);

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default Topic;
