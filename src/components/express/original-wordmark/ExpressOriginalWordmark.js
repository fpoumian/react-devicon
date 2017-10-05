import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './ExpressOriginalWordmark.svg'

/** ExpressOriginalWordmark */
function ExpressOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'ExpressOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

ExpressOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ExpressOriginalWordmark
