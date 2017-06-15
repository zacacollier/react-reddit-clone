import React from 'react';
import { connect } from 'react-redux';

import Overlay from '../components/Overlay';

const OverlayWrapper = (props) => <Overlay {...props} />

const mapStateToProps = ({ overlay, topic }) => ({
  overlayIsVisible: overlay.isVisible,
})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(OverlayWrapper)
