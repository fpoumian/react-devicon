import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SketchLineWordmark.svg'

/** SketchLineWordmark */
function SketchLineWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SketchLineWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SketchLineWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SketchLineWordmark
