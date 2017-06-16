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
    /* we'll want to switch through `linkType`
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
  getItem: monitor.getItem(),
});

const DndLink = ({
  // passed props & helper functions
  emailDroppedItem, openDroppedItemOnReddit, linkType, shareText,
  // ReactDnd props & methods:
  connectDropTarget, getItem, isOver,
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
  emailDroppedItem: PropTypes.func.isRequired,
  openDroppedItemOnReddit: PropTypes.func.isRequired,
  linkType: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  getItem: PropTypes.object.isRequired,
  isOver: PropTypes.bool.isRequired,
}
export default DropTarget(D.TOPIC, dropSpec, collect)(DndLink)
