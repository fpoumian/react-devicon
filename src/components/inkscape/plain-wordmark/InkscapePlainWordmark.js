import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './InkscapePlainWordmark.svg'

/** InkscapePlainWordmark */
function InkscapePlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'InkscapePlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

InkscapePlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default InkscapePlainWordmark
