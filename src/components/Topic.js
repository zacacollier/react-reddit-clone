import React from 'react';
import unknown from '../assets/images/unknown.png';
import './Topic.css';

const Topic = ({ topic }) => (
  <div className='Topic'>
    <img
      className='Topic-thumbnail'
      src={topic.data.thumbnail}
      alt={unknown}
    />
    <p className='Topic-author'>{topic.data.author}</p>
    <p className='Topic-title'>{topic.data.title}</p>
    <p className='Topic-num_comments'>{topic.data.num_comments}</p>
    <p className='Topic-ups'>{topic.data.ups}</p>
    <p className='Topic-downs'>{topic.data.downs}</p>
  </div>
);

export default Topic;
