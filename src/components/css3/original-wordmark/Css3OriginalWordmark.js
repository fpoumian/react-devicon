import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './Css3OriginalWordmark.svg'

/** Css3OriginalWordmark */
function Css3OriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'Css3OriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

Css3OriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Css3OriginalWordmark
