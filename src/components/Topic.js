import React from 'react';
import PropTypes from 'prop-types';
import constants from '../constants';
import unknown from '../assets/images/unknown.png';
import sprite from '../assets/images/icon-sprite.png';
import './Topic.css';

const { helpers } = constants;

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
      <p className='Topic-title'>{helpers.trimTopicTitle(topic.data.title)}</p>
      <div className='Topic-stats'>
        <div className='Topic-num_comments'>
          <span className='Topic-stat'>
            <img
              className='sprite comments-sprite'
              src={sprite}
              alt='comments'
            />
            {topic.data.num_comments} comments
          </span>
        </div>
        <div className='Topic-ups'>
          <span className='Topic-stat'>
            <img
              className='sprite ups-sprite'
              src={sprite}
              alt='upvotes'
            />
            {topic.data.ups} ups
          </span>
        </div>
        <div className='Topic-downs'>
          <span className='Topic-stat'>
            <img
              className='sprite downs-sprite'
              src={sprite}
              alt='downvotes'
            />
        {topic.data.downs} downs
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
