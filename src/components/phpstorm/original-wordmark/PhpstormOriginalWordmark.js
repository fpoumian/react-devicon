import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './PhpstormOriginalWordmark.svg'

/** PhpstormOriginalWordmark */
function PhpstormOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'PhpstormOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

PhpstormOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PhpstormOriginalWordmark
