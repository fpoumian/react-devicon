import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SwiftPlainWordmark.svg'

/** SwiftPlainWordmark */
function SwiftPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SwiftPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SwiftPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SwiftPlainWordmark
