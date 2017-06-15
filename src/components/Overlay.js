import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableTopic from './DraggableTopic';
import DndLink from './DndLink';
import './Overlay.css';

const Overlay = ({
  overlayIsVisible, topic,
  handleCloseOverlay,
}) => (
  <div
    className='Overlay'
    id='Overlay'
    // pass the element's `id` up to OverlayWrapper
    // (only toggle visibility when the background is clicked)
    onClick={(e) => handleCloseOverlay(e.target.id)}
    style={{
      display: !!overlayIsVisible ? 'flex' : 'none',
    }}>
    <div className='Overlay-DndContainer'>
      <DraggableTopic topic={topic} />
      <h2 className='Overlay-DragTitle'>
        Drag the card on the left to the desired action
      </h2>
      <div className='Overlay-DndLinkContainer'>
        <DndLink />
        <DndLink />
      </div>
    </div>
  </div>
);
Overlay.propTypes = {
  overlayIsVisible: PropTypes.bool.isRequired,
  topic: PropTypes.object,
  handleCloseOverlay: PropTypes.func.isRequired,
}

export default DragDropContext(HTML5Backend)(Overlay);
