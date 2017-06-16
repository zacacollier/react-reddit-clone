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
    // const item = monitor.getItem()
    return
    // return { type: props.dndType, topic: props.topic }
  }
};
const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver({ shallow: true }),
  didDrop: monitor.didDrop(),
  getDropResult: monitor.getDropResult(),
  getItem: monitor.getItem(),
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
    }}
    className='Overlay-DndComponent DropTarget'
  >
    <img src={sprites[linkType]} alt={'Share'}/>
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
  isOver: PropTypes.bool.isRequired,
  didDrop: PropTypes.bool.isRequired,
  getItem: PropTypes.object,
}
// The first parameter MUST be the type of
// the DragSource
export default DropTarget(D.TOPIC, dropSpec, collect)(DndLink)
