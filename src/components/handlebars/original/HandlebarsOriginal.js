import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './HandlebarsOriginal.svg'

/** HandlebarsOriginal */
function HandlebarsOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'HandlebarsOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

HandlebarsOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default HandlebarsOriginal
