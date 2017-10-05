import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './FirefoxPlainWordmark.svg'

/** FirefoxPlainWordmark */
function FirefoxPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'FirefoxPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

FirefoxPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FirefoxPlainWordmark
