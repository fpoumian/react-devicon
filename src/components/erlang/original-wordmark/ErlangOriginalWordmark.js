import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './ErlangOriginalWordmark.svg'

/** ErlangOriginalWordmark */
function ErlangOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'ErlangOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

ErlangOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ErlangOriginalWordmark
