import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './AndroidPlainWordmark.svg'

/** AndroidPlainWordmark */
function AndroidPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'AndroidPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

AndroidPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AndroidPlainWordmark
