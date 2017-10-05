import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './InkscapeOriginalWordmark.svg'

/** InkscapeOriginalWordmark */
function InkscapeOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'InkscapeOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

InkscapeOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default InkscapeOriginalWordmark
