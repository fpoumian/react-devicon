import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './YiiOriginalWordmark.svg'

/** YiiOriginalWordmark */
function YiiOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'YiiOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

YiiOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default YiiOriginalWordmark
