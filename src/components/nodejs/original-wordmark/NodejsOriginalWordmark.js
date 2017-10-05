import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './NodejsOriginalWordmark.svg'

/** NodejsOriginalWordmark */
function NodejsOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'NodejsOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

NodejsOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NodejsOriginalWordmark
