import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './HerokuPlainWordmark.svg'

/** HerokuPlainWordmark */
function HerokuPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'HerokuPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

HerokuPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default HerokuPlainWordmark
