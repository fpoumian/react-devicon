import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './FoundationOriginalWordmark.svg'

/** FoundationOriginalWordmark */
function FoundationOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'FoundationOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

FoundationOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FoundationOriginalWordmark
