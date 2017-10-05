import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './AppceleratorPlainWordmark.svg'

/** AppceleratorPlainWordmark */
function AppceleratorPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'AppceleratorPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

AppceleratorPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AppceleratorPlainWordmark
