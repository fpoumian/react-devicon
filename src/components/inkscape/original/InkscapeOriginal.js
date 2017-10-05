import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './InkscapeOriginal.svg'

/** InkscapeOriginal */
function InkscapeOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'InkscapeOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

InkscapeOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default InkscapeOriginal
