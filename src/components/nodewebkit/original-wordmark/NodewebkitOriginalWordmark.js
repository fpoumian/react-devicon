import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './NodewebkitOriginalWordmark.svg'

/** NodewebkitOriginalWordmark */
function NodewebkitOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'NodewebkitOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

NodewebkitOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NodewebkitOriginalWordmark
