import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './NodewebkitPlainWordmark.svg'

/** NodewebkitPlainWordmark */
function NodewebkitPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'NodewebkitPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

NodewebkitPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NodewebkitPlainWordmark
