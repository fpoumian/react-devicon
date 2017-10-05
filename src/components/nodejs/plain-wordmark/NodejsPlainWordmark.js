import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './NodejsPlainWordmark.svg'

/** NodejsPlainWordmark */
function NodejsPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'NodejsPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

NodejsPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NodejsPlainWordmark
