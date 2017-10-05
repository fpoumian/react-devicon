import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './LaravelPlainWordmark.svg'

/** LaravelPlainWordmark */
function LaravelPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'LaravelPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

LaravelPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default LaravelPlainWordmark
