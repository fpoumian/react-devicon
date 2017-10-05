import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './IonicOriginalWordmark.svg'

/** IonicOriginalWordmark */
function IonicOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'IonicOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

IonicOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default IonicOriginalWordmark
