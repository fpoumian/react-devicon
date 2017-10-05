import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './IntellijOriginalWordmark.svg'

/** IntellijOriginalWordmark */
function IntellijOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'IntellijOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

IntellijOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default IntellijOriginalWordmark
