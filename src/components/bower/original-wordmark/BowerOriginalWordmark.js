import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './BowerOriginalWordmark.svg'

/** BowerOriginalWordmark */
function BowerOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'BowerOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

BowerOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BowerOriginalWordmark
