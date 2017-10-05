import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './BehanceOriginalWordmark.svg'

/** BehanceOriginalWordmark */
function BehanceOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'BehanceOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

BehanceOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BehanceOriginalWordmark
