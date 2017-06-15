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

const mapStateToProps = ({ overlay, topic }) => ({
  overlayIsVisible: overlay.isVisible,
  ...topic
})
const mapDispatchToProps = (dispatch) => ({
  shareRedditTopic: (topic, type) => console.log(topic, type),
    // (only toggle visibility when the '#Overlay' background is clicked)
  toggleOverlay: (id) => id === 'Overlay' && dispatch(toggleOverlayVisibility()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OverlayWrapper)
