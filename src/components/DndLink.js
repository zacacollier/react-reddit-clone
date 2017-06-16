import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import axios from 'axios';
import mail from '../assets/images/mail-logo.png';
import reddit from '../assets/images/reddit-logo.png';
import * as D from '../constants/dndTypes'

const sprites = {
  mail,
  reddit,
};

const dropSpec = {
  drop(props, monitor) {
    /* we'll later want to switch through `linkType`
     * to determine whether we're redirecting
     * to a `mailto` or to the topic's permalink
     */
    switch (props.linkType) {
      case 'reddit':
        return props.openDroppedItemOnReddit(monitor.getItem());
      case 'mail':
        return props.emailDroppedItem(monitor.getItem());
      default:
        return
    }
  }
};
const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  didDrop: monitor.didDrop(),
  getDropResult: monitor.getDropResult(),
  getItem: monitor.getItem(),
});

const DndLink = ({
  currentlySelectedItem, dndType, linkType, shareText,
  emailDroppedItem, openDroppedItemOnReddit, setLastDroppedItem,
  /* ReactDnd methods */
  connectDropTarget, isOver, isOverCurrent, didDrop, getDropResult, getItem
}) => connectDropTarget(
  <div
    style={{
      opacity: isOver ? 0.5 : 1,
    }}
    className='Overlay-DndComponent DropTarget'
  >
    <img src={sprites[linkType]} alt={'Share'}/>
    <h2>{shareText}</h2>
  </div>
);
DndLink.propTypes = {
  linkType: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
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
