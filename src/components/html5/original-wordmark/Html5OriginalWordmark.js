import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './Html5OriginalWordmark.svg'

/** Html5OriginalWordmark */
function Html5OriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'Html5OriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

Html5OriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Html5OriginalWordmark
