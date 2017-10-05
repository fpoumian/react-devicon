import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './KrakenjsPlainWordmark.svg'

/** KrakenjsPlainWordmark */
function KrakenjsPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'KrakenjsPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

KrakenjsPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default KrakenjsPlainWordmark
