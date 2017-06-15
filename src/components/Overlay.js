import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableTopic from './DraggableTopic';

const Overlay = ({
  isVisible,
}) => (
  <div>
    <div>overlay</div>
    <DraggableTopic />
  </div>
);

export default DragDropContext(HTML5Backend)(Overlay);
