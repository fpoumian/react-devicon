import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './YarnOriginalWordmark.svg'

/** YarnOriginalWordmark */
function YarnOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'YarnOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

YarnOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default YarnOriginalWordmark
