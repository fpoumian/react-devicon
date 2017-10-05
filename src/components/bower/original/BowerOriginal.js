import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './BowerOriginal.svg'

/** BowerOriginal */
function BowerOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'BowerOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

BowerOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BowerOriginal
