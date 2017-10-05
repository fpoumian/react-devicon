import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './HandlebarsOriginalWordmark.svg'

/** HandlebarsOriginalWordmark */
function HandlebarsOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'HandlebarsOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

HandlebarsOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default HandlebarsOriginalWordmark
