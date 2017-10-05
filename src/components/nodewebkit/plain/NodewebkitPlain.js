import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './NodewebkitPlain.svg'

/** NodewebkitPlain */
function NodewebkitPlain({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'NodewebkitPlain' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

NodewebkitPlain.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NodewebkitPlain
