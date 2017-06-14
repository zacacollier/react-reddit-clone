import React from 'react';
import PropTypes from 'prop-types';
import unknown from '../assets/images/unknown.png';
import './Topic.css';

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
      <p className='Topic-title'>{topic.data.title}</p>
      <div className='Topic-stats'>
        <p className='Topic-num_comments'>{topic.data.num_comments} comments</p>
        <p className='Topic-ups'>{topic.data.ups} ups</p>
        <p className='Topic-downs'>{topic.data.downs} downs</p>
      </div>
    </div>
  </div>
);

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default Topic;
