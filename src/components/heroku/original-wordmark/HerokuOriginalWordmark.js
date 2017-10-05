import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './HerokuOriginalWordmark.svg'

/** HerokuOriginalWordmark */
function HerokuOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'HerokuOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

HerokuOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default HerokuOriginalWordmark
