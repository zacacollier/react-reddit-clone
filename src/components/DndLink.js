import React from 'react';
import { DropTarget } from 'react-dnd';
import * as D from '../constants/dndTypes'

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
  canDrop: monitor.canDrop(),
  didDrop: monitor.didDrop(),
  getItem: monitor.getItem(),
  getDrop: monitor.getDropResult(),
});
// TODO: separate into component and container
const DndLink = ({
  LinkType,
  connectDropTarget, isOver, canDrop, didDrop, getDrop, getItem
}) => connectDropTarget(
  <div
    style={{
      opacity: isOver ? 0.5 : 1,
    }}
    className='Overlay-DndComponent DropTarget'
  >
    { canDrop ? 'target' : '(target)'}
    { isOver ? console.log(getItem) : 'not hovering'}
    { didDrop && console.log(getItem) }
  </div>
);
// The first parameter MUST be the type of
// the DragSource
export default DropTarget(D.TOPIC, dropSpec, collect)(DndLink)
