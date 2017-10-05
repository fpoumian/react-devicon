import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './WebpackOriginalWordmark.svg'

/** WebpackOriginalWordmark */
function WebpackOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'WebpackOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

WebpackOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default WebpackOriginalWordmark
