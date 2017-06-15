import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../assets/images/icon-sprite.png';
import './Topic.css';

const TopicStat = ({
  statData, statHelper, statType,
}) => (
  <div className={`Topic-${statType}`}>
    <span className='Topic-stat'>
      <img
        className={`sprite ${statType}-sprite`}
        src={sprite}
        alt={`${statType}s`}
      />
      <p className='Topic-statDataCount'>{statData}</p>
      {/* {statHelper(statData, statType)} */}
    </span>
  </div>
);

TopicStat.propTypes = {
  statData: PropTypes.number.isRequired,
  statHelper: PropTypes.func,
  statType: PropTypes.string.isRequired,
}

export default TopicStat;
