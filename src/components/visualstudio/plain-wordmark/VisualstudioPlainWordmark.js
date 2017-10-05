import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './VisualstudioPlainWordmark.svg'

/** VisualstudioPlainWordmark */
function VisualstudioPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'VisualstudioPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

VisualstudioPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default VisualstudioPlainWordmark
