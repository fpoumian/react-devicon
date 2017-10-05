import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './BootstrapPlainWordmark.svg'

/** BootstrapPlainWordmark */
function BootstrapPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'BootstrapPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

BootstrapPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BootstrapPlainWordmark
