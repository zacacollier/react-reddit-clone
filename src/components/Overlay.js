import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableTopic from './DraggableTopic';
import DndLink from './DndLink';
import './Overlay.css';

const Overlay = ({
  isVisible,
}) => (
  <div
    className='Overlay'
    style={{
      display: !!isVisible ? 'none' : 'flex',
    }}>
    <div className='Overlay-DndContainer'>
      <DraggableTopic id={1} />
      <DndLink />
    </div>
  </div>
);

export default DragDropContext(HTML5Backend)(Overlay);
