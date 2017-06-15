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
});

const DndLink = ({
  /* State to Props:
   * `linkType`: either a `mailto` or `href`
   * `shareText`: either "Email" or "Open on Reddit"
   */
  linkType, shareText,
  /* Dispatch to Props:
   * `shareTopic`: construct and dispatch a link of designated `linkType`
   */
  shareTopic,
  /* ReactDnd methods */
  connectDropTarget, isOver, didDrop, getItem
}) => connectDropTarget(
  <div
    style={{
      opacity: isOver ? 0.5 : 1,
    }}
    className='Overlay-DndComponent DropTarget'
  >
    <img src={sprites[linkType]} alt={'Share'}/>
    <h2>{shareText}</h2>
    { didDrop && shareTopic(getItem, linkType) }
  </div>
);
DndLink.propTypes = {
  linkType: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired,
  shareTopic: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  didDrop: PropTypes.bool.isRequired,
  getItem: PropTypes.object,
}
// The first parameter MUST be the type of
// the DragSource
export default DropTarget(D.TOPIC, dropSpec, collect)(DndLink)
