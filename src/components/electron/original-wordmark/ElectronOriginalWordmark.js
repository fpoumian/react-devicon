import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './ElectronOriginalWordmark.svg'

/** ElectronOriginalWordmark */
function ElectronOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'ElectronOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

ElectronOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ElectronOriginalWordmark
