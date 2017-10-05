import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './BackbonejsPlainWordmark.svg'

/** BackbonejsPlainWordmark */
function BackbonejsPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'BackbonejsPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

BackbonejsPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BackbonejsPlainWordmark
