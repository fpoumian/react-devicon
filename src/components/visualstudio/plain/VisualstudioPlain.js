import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './VisualstudioPlain.svg'

/** VisualstudioPlain */
function VisualstudioPlain({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'VisualstudioPlain' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

VisualstudioPlain.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default VisualstudioPlain
