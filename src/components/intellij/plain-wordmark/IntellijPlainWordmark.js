import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './IntellijPlainWordmark.svg'

/** IntellijPlainWordmark */
function IntellijPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'IntellijPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

IntellijPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default IntellijPlainWordmark
