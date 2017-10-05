import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './AppceleratorOriginal.svg'

/** AppceleratorOriginal */
function AppceleratorOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'AppceleratorOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

AppceleratorOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AppceleratorOriginal
