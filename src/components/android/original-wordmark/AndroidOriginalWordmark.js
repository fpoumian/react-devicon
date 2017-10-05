import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './AndroidOriginalWordmark.svg'

/** AndroidOriginalWordmark */
function AndroidOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'AndroidOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

AndroidOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AndroidOriginalWordmark
