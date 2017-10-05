import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './TomcatOriginalWordmark.svg'

/** TomcatOriginalWordmark */
function TomcatOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'TomcatOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

TomcatOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default TomcatOriginalWordmark
