import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import * as D from '../constants/dndTypes';

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});
const topicSource = {
  beginDrag(props) {
    // we need to retain the props of the topic being dragged
    const topic = { id: props.id };
    return topic;
  },
};

const DraggableTopic = ({
  connectDragSource, isDragging,
}) => connectDragSource(
  <div
    className='Overlay-DndComponent Draggable'
    style={{
      opacity: isDragging ? 0.5 : 1,
      // padding: isDragging ? '15px' : '25px',
      cursor: 'move',
      transition: 'padding 300ms ease',
    }}>
    topic
  </div>
)
DraggableTopic.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

/* DragSource expects 3 inputs:
 * `type`, `spec` and a `collect` function.
 * The connected component in question (DraggableTopic) will be
 * curried over to the return value of DragSource.
 * (i.e. DragSource returns a function that takes
 * a React component as its input.)
 */
export default DragSource(D.TOPIC, topicSource, collect)(DraggableTopic);
