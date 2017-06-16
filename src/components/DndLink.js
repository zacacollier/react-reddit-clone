import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import mail from '../assets/images/mail-logo.png';
import reddit from '../assets/images/reddit-logo.png';
import * as D from '../constants/dndTypes'

const sprites = {
  mail,
  reddit,
};

const dropSpec = {
  drop(props, monitor) {
    /* we'll later want to pass the `Topic`
     * props to a method that will link
     * to either a `mailto` or the topic itself
     */
    console.log(props);
    return { name: 'drop' }
  }
};
const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  didDrop: monitor.didDrop(),
  getItem: monitor.getItem(),
  getDropResult: monitor.getDropResult(),
});

const DndLink = ({
  linkType, shareText,
  setLastDroppedItem,
  /* ReactDnd methods */
  connectDropTarget, isOver, didDrop, getDropResult, getItem
}) => connectDropTarget(
  <div
    style={{
      opacity: isOver ? 0.5 : 1,
      transition: 'opacity 300ms ease',
    }}
    className='Overlay-DndComponent DndLink'
  >
    <img
      className='DndLink-sprite'
      src={sprites[linkType]}
      alt={'Share'}
    />
    <h2>{shareText}</h2>
    { /* Gotta cap off this expression with `& ''` so React doesn't freak out
      about returning an Object (setLastDroppedItem's return value)
      */
    }
    { didDrop && setLastDroppedItem({ ...getDropResult, topic: getItem }) && '' }
  </div>
);

DndLink.propTypes = {
  linkType: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  setSharedTopic: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  didDrop: PropTypes.bool.isRequired,
  getItem: PropTypes.object,
}
const mapStateToProps = ({ lastDroppedItem }) => ({
  currentlySelectedItem: lastDroppedItem.currentlySelectedItem,
})
const mapDispatchToProps = (dispatch) => ({
  emailDroppedItem: (item) => {
    console.log(item)
    window.location.href = `mailto:?subject=${"Check out this Reddit post"}&body="http://www.reddit.com${item.permalink}"&target="_self"`;
  },
  openDroppedItemOnReddit: (item) => {
    console.log(item)
    window.open(`http://www.reddit.com${item.permalink}`)
  },
  // dispatch({ type: 'FETCH_CURRENTLY_SELECTED_ITEM', topic }),
  setLastDroppedItem: (topic) => dispatch({ type: 'SET_LAST_DROPPED_ITEM', topic }),
})
// Compose right-to-left so that the component will have access
// to BOTH Redux and ReactDnd props
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(D.TOPIC, dropSpec, collect),
)(DndLink)
