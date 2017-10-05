import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './GoogleOriginalWordmark.svg'

/** GoogleOriginalWordmark */
function GoogleOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'GoogleOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

GoogleOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GoogleOriginalWordmark
