import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './DeviconPlainWordmark.svg'

/** DeviconPlainWordmark */
function DeviconPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'DeviconPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

DeviconPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DeviconPlainWordmark
