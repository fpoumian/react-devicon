import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './BackbonejsOriginal.svg'

/** BackbonejsOriginal */
function BackbonejsOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'BackbonejsOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

BackbonejsOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BackbonejsOriginal
