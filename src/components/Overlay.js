import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableTopic from './DraggableTopic';
import DndLink from './DndLink';
import './Overlay.css';

const Overlay = ({
  dndLinkAccepts, overlayIsVisible, topic,
  handleCloseOverlay, emailRedditTopic, openRedditTopic, setLastDroppedItem,
}) => (
  <div
    className='Overlay'
    id='Overlay'
    /* pass the element's `id` up to OverlayWrapper
    * (only toggle visibility when the background is clicked)
    */
    onClick={(e) => handleCloseOverlay(e.target.id)}
    style={{
      display: !!overlayIsVisible ? 'flex' : 'none',
    }}>
    <div className='Overlay-DndContainer'>
      <DraggableTopic
        topic={topic}
        dragTypes={dndLinkAccepts.map(accept => accept.accepts )}
      />
      <h2 className='Overlay-DragTitle'>
        Drag the card on the left to the desired action
      </h2>
      <div className='Overlay-DndLinkContainer'>
        {
          dndLinkAccepts.map((accept, i) =>
            <DndLink
              linkType={accept.linkType}
              shareText={accept.linkText}
              dndType={accept.accepts}
              lastDroppedItem={accept.lastDroppedItem}
              setLastDroppedItem={(item) => setLastDroppedItem(item)}
              key={i}
            />
          )
        }
      </div>
    </div>
  </div>
);
Overlay.propTypes = {
  handleCloseOverlay: PropTypes.func.isRequired,
  overlayIsVisible: PropTypes.bool.isRequired,
  topic: PropTypes.object,
}

export default DragDropContext(HTML5Backend)(Overlay);
