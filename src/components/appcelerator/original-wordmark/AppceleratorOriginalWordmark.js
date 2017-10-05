import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './AppceleratorOriginalWordmark.svg'

/** AppceleratorOriginalWordmark */
function AppceleratorOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'AppceleratorOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

AppceleratorOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AppceleratorOriginalWordmark
