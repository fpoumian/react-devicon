import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './YiiPlainWordmark.svg'

/** YiiPlainWordmark */
function YiiPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'YiiPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

YiiPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default YiiPlainWordmark
