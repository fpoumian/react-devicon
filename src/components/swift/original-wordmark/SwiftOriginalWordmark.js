import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SwiftOriginalWordmark.svg'

/** SwiftOriginalWordmark */
function SwiftOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SwiftOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SwiftOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SwiftOriginalWordmark
