import React from 'react';
import { connect } from 'react-redux';
import { toggleOverlayVisibility } from '../actions/overlay';

import Overlay from '../components/Overlay';

const OverlayWrapper = (props) => (
  <Overlay
    {...props }
    handleCloseOverlay={(id) => props.toggleOverlay(id)}
  />
)
const mapStateToProps = ({ overlay, topic, lastDroppedItem }) => ({
  overlayIsVisible: overlay.isVisible,
  dndLinkAccepts: overlay.dndLinkAccepts,
  ...topic
})
const mapDispatchToProps = (dispatch) => ({
  // (only toggle visibility when the '#Overlay' background is clicked)
  toggleOverlay: (id) => id === 'Overlay' && dispatch(toggleOverlayVisibility()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OverlayWrapper)
