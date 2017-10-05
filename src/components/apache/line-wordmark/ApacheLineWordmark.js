import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './ApacheLineWordmark.svg'

/** ApacheLineWordmark */
function ApacheLineWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'ApacheLineWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

ApacheLineWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ApacheLineWordmark
