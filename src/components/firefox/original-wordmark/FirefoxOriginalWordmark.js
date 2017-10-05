import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './FirefoxOriginalWordmark.svg'

/** FirefoxOriginalWordmark */
function FirefoxOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'FirefoxOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

FirefoxOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FirefoxOriginalWordmark
