import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './NodewebkitLine.svg'

/** NodewebkitLine */
function NodewebkitLine({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'NodewebkitLine' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

NodewebkitLine.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NodewebkitLine
