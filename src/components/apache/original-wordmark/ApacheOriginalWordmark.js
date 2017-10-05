import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './ApacheOriginalWordmark.svg'

/** ApacheOriginalWordmark */
function ApacheOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'ApacheOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

ApacheOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ApacheOriginalWordmark
