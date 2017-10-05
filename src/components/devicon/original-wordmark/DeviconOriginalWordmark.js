import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './DeviconOriginalWordmark.svg'

/** DeviconOriginalWordmark */
function DeviconOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'DeviconOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

DeviconOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DeviconOriginalWordmark
