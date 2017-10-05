import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './WebstormOriginalWordmark.svg'

/** WebstormOriginalWordmark */
function WebstormOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'WebstormOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

WebstormOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default WebstormOriginalWordmark
