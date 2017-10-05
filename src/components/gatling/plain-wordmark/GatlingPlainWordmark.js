import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './GatlingPlainWordmark.svg'

/** GatlingPlainWordmark */
function GatlingPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'GatlingPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

GatlingPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GatlingPlainWordmark
