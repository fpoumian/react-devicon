import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './BackbonejsOriginalWordmark.svg'

/** BackbonejsOriginalWordmark */
function BackbonejsOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'BackbonejsOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

BackbonejsOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BackbonejsOriginalWordmark
