import React from 'react'
import PropTypes from 'prop-types'
import Pulse from 'grommet/components/icons/Pulse'
import IconCopy from 'grommet/components/icons/base/Copy'
import ReactTooltip from 'react-tooltip'
import Animate from 'grommet/components/Animate'

const CopyButton = ({ copiedLabelVisible, dataTip, onCopyBtnClick }) => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <Pulse icon={<IconCopy />} data-tip={dataTip} onClick={onCopyBtnClick} />
      <ReactTooltip />
      <Animate
        visible={copiedLabelVisible}
        enter={{ animation: 'slide-right', duration: 300, delay: 0 }}
        leave={{ animation: 'slide-right', duration: 900, delay: 0 }}
      >
        <span style={{ position: 'absolute' }}>{'Copied!'}</span>
      </Animate>
    </div>
  )
}

CopyButton.propTypes = {
  copiedLabelVisible: PropTypes.bool,
  dataTip: PropTypes.string,
  onCopyBtnClick: PropTypes.func,
}

export default CopyButton
