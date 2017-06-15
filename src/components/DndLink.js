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
});
// TODO: separate into component and container
const DndLink = ({
  connectDropTarget, isOver, canDrop, didDrop
}) => connectDropTarget(
  <div
    style={{
      width: '600px',
      height: '600px',
    }}
    className='Overlay-DndComponent DropTarget'
  >
    { canDrop ? 'target' : '(target)'}
    { isOver ? 'hovering' : 'not hovering'}
  </div>
);

export default DropTarget(D.TOPIC, dropSpec, collect)(DndLink)
